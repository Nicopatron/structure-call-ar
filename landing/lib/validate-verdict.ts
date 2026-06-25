// Thin safety net on the live demo output. The full specialist + 5-shot anchor make
// hallucination unlikely, but the product thesis is "never fabricate a peso / know your
// limits" — so a verdict that contradicts that must degrade to the fallback rather than
// be shown with false authority. Catches the failure modes that actually hurt; the
// always-visible Lucía walkthrough above is the floor when this trips.

export interface VerdictCheck {
  ok: boolean;
  reason: string;
}

const RX = {
  escalation: /(Trigger de Escalaci[oó]n al Contador|Contador Escalation Trigger)/i,
  verdict:
    /(Veredicto|Structural Verdict|Stay-vs-Jump|Quedarte-vs-Saltar|Determinaciones|Auditor[ií]a de Setup|Setup Audit)/i,
  refusal:
    /(best-effort|4 (de estos|of (these )?)6|nunca levanta una escalaci[oó]n|override never lifts)/i,
  transition:
    /(Zona RI|RI-vs-Stay|Costeo RI|Quedarte-vs-Saltar|Stay-vs-Jump|RI Cost Model|Por Qu[eé] Est[aá]s en la Zona RI)/i,
  highConfidence: /Confidence:\s*HIGH/i,
};

export function validateVerdict(text: string, stoppedAtMax: boolean): VerdictCheck {
  const t = (text ?? "").trim();

  if (stoppedAtMax) return { ok: false, reason: "truncated" };
  if (t.length < 200) return { ok: false, reason: "empty-or-short" };

  // A refusal (intake gate) legitimately has no verdict/escalation section.
  if (RX.refusal.test(t)) return { ok: true, reason: "refusal" };

  // Rules forbid HIGH on the complex RI choice; a TRANSITION verdict must be
  // REQUIRES_PROFESSIONAL. Checked top-level so it fires even if header detection misses.
  if (RX.transition.test(t) && RX.highConfidence.test(t)) {
    return { ok: false, reason: "overconfident-ri" };
  }

  if (RX.verdict.test(t)) {
    if (!RX.escalation.test(t)) return { ok: false, reason: "missing-escalation" };
    return { ok: true, reason: "verdict" };
  }

  // Neither a recognizable verdict nor a refusal: pass (the Lucía walkthrough is the floor),
  // but don't claim it's a clean verdict.
  return { ok: true, reason: "unclassified" };
}
