// ponytail: in-memory fixed-window per-IP limiter. Resets on cold start and is
// per-instance (not shared across serverless lanes) — fine for a demo a judge runs
// a few times; swap for @upstash/ratelimit + Vercel KV if the endpoint gets abused.

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_HITS = 12; // a judge needs ~5–10; this is the abuse ceiling per IP per hour

const hits = new Map<string, { count: number; resetAt: number }>();

export function rateLimit(ip: string): { ok: boolean; retryAfter: number } {
  const now = Date.now();
  const entry = hits.get(ip);

  if (!entry || now >= entry.resetAt) {
    hits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return { ok: true, retryAfter: 0 };
  }

  if (entry.count >= MAX_HITS) {
    return { ok: false, retryAfter: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { ok: true, retryAfter: 0 };
}
