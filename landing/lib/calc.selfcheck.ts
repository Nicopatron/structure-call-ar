// Sync con structure-call-ar/calc.py self_test() — mismos 10 casos.
// Si diverge, uno de los dos está mal. Run: node --experimental-strip-types lib/calc.selfcheck.ts
import assert from "node:assert";
import { clasificar } from "./calc.ts";

// 1. USD 30000 @ TC default → G, alto headroom, ROJO.
const c1 = clasificar({ ingresosUsd: 30000 });
assert.equal(c1.categoria, "G", "case 1 categoria");
assert.equal(c1.headroomArs, 331110937n, "case 1 headroomArs");
assert.equal(c1.pctTimes10, 928, "case 1 pctTimes10");
assert.equal(c1.tier, "ROJO", "case 1 tier");
assert.equal(c1.cuotaServicios, 19710823n, "case 1 cuotaServicios");

// 2. USD 39000 → H, AMARILLO.
const c2 = clasificar({ ingresosUsd: 39000 });
assert.equal(c2.categoria, "H", "case 2 categoria");
assert.equal(c2.pctTimes10, 795, "case 2 pctTimes10");
assert.equal(c2.tier, "AMARILLO", "case 2 tier");

// 3. USD 72000 → K (tope máximo), ROJO.
const c3 = clasificar({ ingresosUsd: 72000 });
assert.equal(c3.categoria, "K", "case 3 categoria");
assert.equal(c3.headroomArs, 539708405n, "case 3 headroomArs");
assert.equal(c3.pctTimes10, 950, "case 3 pctTimes10");
assert.equal(c3.tier, "ROJO", "case 3 tier");

// 4. USD 84000 (run-rate 7000/mo × 12) → exclusión RI.
const c4 = clasificar({ ingresosUsd: 84000 });
assert.equal(c4.status, "EXCLUSION_RI", "case 4 status");
assert.equal(c4.excesoArs, 1176291595n, "case 4 excesoArs");

// 5. USD 4000 → A, VERDE.
const c5 = clasificar({ ingresosUsd: 4000 });
assert.equal(c5.categoria, "A", "case 5 categoria");
assert.equal(c5.tier, "VERDE", "case 5 tier");

// 6. Sin ingresos → insuficiente.
const c6 = clasificar({});
assert.equal(c6.status, "INSUFFICIENT", "case 6 status");

// 7a. ARS exacto en el tope de F → F, headroom 0.
const c7a = clasificar({ ingresosArs: 38642048.36 });
assert.equal(c7a.categoria, "F", "case 7a categoria");
assert.equal(c7a.headroomArs, 0n, "case 7a headroomArs");

// 7b. Un centavo por encima del tope de F → G.
const c7b = clasificar({ ingresosArs: 38642048.37 });
assert.equal(c7b.categoria, "G", "case 7b categoria");

// 8a. USD 25000 + alquiler alto → F, alquiler excede el cap del grupo.
const c8a = clasificar({ ingresosUsd: 25000, alquiler: 5000000 });
assert.equal(c8a.categoria, "F", "case 8a categoria");
assert.equal(c8a.alquilerExcedeGrupo, true, "case 8a alquilerExcedeGrupo");

// 8b. USD 25000 + alquiler menor → F, alquiler dentro del cap.
const c8b = clasificar({ ingresosUsd: 25000, alquiler: 4000000 });
assert.equal(c8b.categoria, "F", "case 8b categoria");
assert.equal(c8b.alquilerExcedeGrupo, false, "case 8b alquilerExcedeGrupo");

console.log("calc self-check: all 10 cases pass");
