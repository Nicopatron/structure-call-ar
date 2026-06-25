import OpenAI from "openai";
import { SPECIALIST_SYSTEM } from "@/lib/specialist-content";
import { rateLimit } from "@/lib/rate-limit";
import { validateVerdict } from "@/lib/validate-verdict";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_INPUT_CHARS = 4000;

// Provider-agnostic: any OpenAI-compatible endpoint via baseURL override.
// Default = Gemini 2.5 Flash (free AI Studio tier). It's the only free option whose
// limits fit the ~55k-token specialist system prompt: 1M context + 250k TPM. Groq's
// free tier (6k TPM) can't fit a single call; Cerebras free caps context at 8k.
// Swap provider = set all three env vars (e.g. an OpenAI-compat provider you pay for).
const BASE_URL =
  process.env.DEMO_AI_BASE_URL ??
  "https://generativelanguage.googleapis.com/v1beta/openai/";
const MODEL = process.env.DEMO_AI_MODEL ?? "gemini-2.5-flash";

// ponytail: 16000 output ceiling — headroom against truncation, since Gemini's thinking
// tokens share this budget on the compat endpoint and a full verdict runs ~4k output
// tokens. (Observed novel-case degrades are mostly validator-driven, not truncation: the
// free model occasionally drops a mandatory section and validateVerdict degrades it on
// purpose — never showing partial output. The ceiling only guards the truncation path.)
const MAX_OUTPUT_TOKENS = 16000;

const DEGRADE_MSG =
  "This live demo couldn't return a verdict it can stand behind. For a reliable, " +
  "figure-for-figure structural call, drop the structure-call-ar/ folder into a " +
  "Claude Project (see JUDGE_GUIDE.md) — the same five tests run there with the full " +
  "reference loaded. The worked Lucía case above shows the exact output shape.";

export async function POST(req: Request) {
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const limit = rateLimit(ip);
  if (!limit.ok) {
    return Response.json(
      { degraded: true, verdict: "Rate limit reached — try again in a bit." },
      { status: 429, headers: { "retry-after": String(limit.retryAfter) } }
    );
  }

  const body = (await req.json().catch(() => null)) as { situation?: unknown } | null;
  const situation = typeof body?.situation === "string" ? body.situation.trim() : "";
  if (!situation) {
    return Response.json({ error: "Paste your situation first." }, { status: 400 });
  }
  if (situation.length > MAX_INPUT_CHARS) {
    return Response.json(
      { error: `Keep it under ${MAX_INPUT_CHARS} characters.` },
      { status: 400 }
    );
  }

  if (!process.env.DEMO_AI_API_KEY) {
    // Demo flag off (no key set): degrade gracefully instead of 500ing. The static
    // Lucía walkthrough above is the floor; the folder runs the real thing in a Project.
    return Response.json({ degraded: true, verdict: DEGRADE_MSG }, { status: 503 });
  }

  try {
    const client = new OpenAI({
      apiKey: process.env.DEMO_AI_API_KEY,
      baseURL: BASE_URL,
    });
    const completion = await client.chat.completions.create({
      model: MODEL,
      max_tokens: MAX_OUTPUT_TOKENS,
      temperature: 0.2, // low for arithmetic consistency; these models accept temperature
      messages: [
        { role: "system", content: SPECIALIST_SYSTEM },
        { role: "user", content: situation },
      ],
    });

    const choice = completion.choices[0];
    const text = (choice?.message?.content ?? "").trim();
    const stoppedAtMax = choice?.finish_reason === "length";

    const check = validateVerdict(text, stoppedAtMax);
    if (!check.ok || !text) {
      // Model produced unusable output → degrade. 502 (not 200) keeps the HTTP
      // contract consistent with the other degraded paths; the client reads the
      // `degraded` flag from the body regardless of status.
      return Response.json({ degraded: true, verdict: DEGRADE_MSG }, { status: 502 });
    }
    return Response.json({ degraded: false, verdict: text });
  } catch (err) {
    // Never surface the provider error to the client — generic degrade only.
    console.error("verdict route error:", err);
    return Response.json({ degraded: true, verdict: DEGRADE_MSG }, { status: 502 });
  }
}
