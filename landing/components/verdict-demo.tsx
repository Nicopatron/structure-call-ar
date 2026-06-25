"use client";

import { useState } from "react";
import { TextureCard, TextureCardContent } from "@/components/ui/texture-card";

// The live runtime: paste a situation, the structure-call-ar specialist computes the
// structural call server-side (a free general-purpose model with the full folder as its
// system prompt) and commits to it. This is a taste running on a generic free model —
// the figure-for-figure verdict runs on your own AI when you drop the folder into a Project.

const SAMPLES: { label: string; lang: string; text: string }[] = [
  {
    label: "Lucía, cat F (JUDGE_GUIDE Test 1)",
    lang: "EN",
    text: `Hi, I'm Lucía, product designer in Buenos Aires, on monotributo cat F. I bill one US SaaS client and pick up smaller US gigs. Over the last 12 months I've invoiced about USD 30,000, pretty steady at ~USD 3,500/month. Everything is export to US clients, all Factura E, IIBB CABA (exempt, I think). I have a contador I email a couple times a year, nothing regular.

Here's what's stressing me: I have a big project closing end of July, somewhere between USD 8K and 9K in one shot, plus my normal monthly run-rate keeps going. I don't own property, I keep my dollars in a US account and a local bank box, nothing fancy. Am I about to blow past my category? Do I need to do anything before I get in trouble?`,
  },
  {
    label: "Andrés, cat C (novel case)",
    lang: "ES",
    text: `Soy Andrés, dev en Córdoba, monotributo cat C. En los últimos 12 meses facturé como USD 14.000, todo exportación a un cliente de US, Factura E siempre. Tengo un proyecto que cierra en septiembre, unos USD 5.000 de una. IIBB Córdoba. No tengo contador fijo. ¿Me estoy por pasar de categoría con eso, o estoy tranquilo?`,
  },
];

export function VerdictDemo() {
  const [situation, setSituation] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{ verdict: string; degraded: boolean } | null>(
    null
  );
  const [error, setError] = useState("");

  async function run() {
    if (!situation.trim() || loading) return;
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/verdict", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ situation }),
      });
      const data = await res.json();
      if (res.status === 429) {
        setError(data.verdict || "Rate limit reached. Try again in a bit.");
      } else if (data.error) {
        setError(data.error);
      } else {
        setResult({ verdict: data.verdict, degraded: Boolean(data.degraded) });
      }
    } catch {
      setError(
        "The demo endpoint didn't answer. The repo and JUDGE_GUIDE.md run the same tests in a Claude Project."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        {SAMPLES.map((s) => (
          <button
            key={s.label}
            type="button"
            onClick={() => {
              setSituation(s.text);
              setResult(null);
              setError("");
            }}
            className="text-xs font-mono px-3 py-1.5 rounded border border-line text-mute hover:text-accent hover:border-accent transition-colors"
          >
            {s.label} <span className="opacity-60">· {s.lang}</span>
          </button>
        ))}
      </div>

      <label htmlFor="situation" className="sr-only">
        Your situation
      </label>
      <textarea
        id="situation"
        value={situation}
        onChange={(e) => setSituation(e.target.value)}
        rows={6}
        maxLength={4000}
        placeholder="Paste your situation: category, rolling-12 USD volume, a projection, % export + client type, IIBB province, contador status. Or click a sample above. (Spanish in → Spanish out.)"
        className="w-full bg-panel border border-line rounded-lg p-4 text-sm leading-relaxed text-ink/90 placeholder:text-mute/70 font-mono focus:outline-none focus:border-accent resize-y"
      />

      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={run}
          disabled={loading || !situation.trim()}
          className="py-3 px-6 bg-accent text-paper font-semibold rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          {loading ? "Computing the crossing…" : "Run the structural call →"}
        </button>
        <span className="text-mute text-xs">
          Calibrated junio 2026 · It commits or it asks, it won&apos;t guess.
        </span>
      </div>

      <p className="text-mute/80 text-xs leading-relaxed">
        This taste runs on a free general-purpose model. The figure-for-figure verdict
        runs on your own AI when you drop the folder into a Claude Project.
      </p>

      {error && (
        <p className="text-sm text-rojo border-l-2 border-rojo/50 pl-4" role="alert">
          {error}
        </p>
      )}

      {result && (
        <div aria-live="polite">
          {result.degraded && (
            <p className="text-sm text-amarillo border-l-2 border-amarillo/60 pl-4 mb-3">
              The runtime flagged its own output instead of guessing: the trust signal,
              not a bug.
            </p>
          )}
          <TextureCard>
            <TextureCardContent className="p-5">
              <article className="whitespace-pre-wrap leading-relaxed text-sm text-ink/90 font-mono overflow-x-auto">
                {result.verdict}
              </article>
            </TextureCardContent>
          </TextureCard>
        </div>
      )}
    </div>
  );
}
