// Self-check for the verdict safety net. Run: node --experimental-strip-types lib/validate-verdict.selfcheck.ts
import assert from "node:assert";
import { validateVerdict } from "./validate-verdict.ts";

const pad = (s: string) => s + "\n".repeat(20) + "x".repeat(220); // clear the length floor

// 1. Clean STRUCTURE verdict (Lucía-shaped): HIGH is fine — it's a deterministic trigger.
assert.equal(
  validateVerdict(
    pad("### Structural Verdict\nStay in monotributo.\n### Contador Escalation Trigger\nNo handoff today.\nConfidence: HIGH"),
    false
  ).ok,
  true,
  "clean structure verdict should pass"
);

// 2. TRANSITION with HIGH must fail (rules: RI choice is REQUIRES_PROFESSIONAL, never HIGH).
assert.equal(
  validateVerdict(
    pad("### Por Qué Estás en la Zona RI\n...\n### Trigger de Escalación al Contador\nNivel 2.\nConfidence: HIGH"),
    false
  ).reason,
  "overconfident-ri",
  "HIGH on a TRANSITION/RI verdict should degrade"
);

// 3. A verdict with no escalation section is malformed → degrade.
assert.equal(
  validateVerdict(pad("### Veredicto Estructural\nQuedate.\nConfidence: HIGH"), false).reason,
  "missing-escalation",
  "verdict without escalation section should degrade"
);

// 4. A refusal legitimately has no escalation section → pass.
assert.equal(
  validateVerdict(
    pad("Antes de un veredicto necesito 4 de estos 6 inputs estructurales. Si querés un best-effort decímelo."),
    false
  ).ok,
  true,
  "intake-gate refusal should pass"
);

// 5. Truncated output → degrade regardless of content.
assert.equal(validateVerdict(pad("### Structural Verdict\n### Contador Escalation Trigger\nConfidence: HIGH"), true).reason, "truncated");

// 6. Empty / too short → degrade.
assert.equal(validateVerdict("ok", false).reason, "empty-or-short");

console.log("validate-verdict self-check: all 6 cases pass");
