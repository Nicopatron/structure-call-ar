// Monotributo category calculator — pure TS port of structure-call-ar/calc.py.
// Source: structure-call-ar/calc.py + reference/categorias-monotributo.md.
// Calibración jun-2026. REFRESH OBLIGATORIO post-15-jul-2026 (recategorización semestral AFIP).
// Keep in sync with calc.py — the same 10 fixtures prove both implementations agree.
// Money is integer centavos as bigint. Do NOT re-derive the constants below.

export type Cat = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" | "J" | "K";
export type CalcStatus = "OK" | "EXCLUSION_RI" | "INSUFFICIENT";

export interface CalcInput {
  ingresosUsd?: number;
  ingresosArs?: number;
  tc?: number;
  alquiler?: number;
}

export interface CalcResult {
  status: CalcStatus;
  categoria?: Cat;
  ingresosArs?: bigint;
  tope?: bigint;
  headroomArs?: bigint;
  pctTimes10?: number;
  tier?: "VERDE" | "AMARILLO" | "ROJO";
  cuotaServicios?: bigint;
  excesoArs?: bigint;
  fxTag?: string;
  alquilerExcedeGrupo?: boolean;
}

interface TablaRow {
  cat: Cat;
  tope: bigint;
  cuota: bigint;
}

const TABLA: readonly TablaRow[] = [
  { cat: "A", tope: 1027798813n, cuota: 4238674n },
  { cat: "B", tope: 1505844771n, cuota: 4825078n },
  { cat: "C", tope: 2111369652n, cuota: 5650185n },
  { cat: "D", tope: 2621285342n, cuota: 7241410n },
  { cat: "E", tope: 3083396437n, cuota: 10253797n },
  { cat: "F", tope: 3864204836n, cuota: 12904532n },
  { cat: "G", tope: 4621110937n, cuota: 19710823n },
  { cat: "H", tope: 7011340733n, cuota: 44734693n },
  { cat: "I", tope: 7847921162n, cuota: 82480226n },
  { cat: "J", tope: 8987264030n, cuota: 99900765n },
  { cat: "K", tope: 10835708405n, cuota: 138168790n },
];

const TOPE_K = 10835708405n; // = TABLA last tope

const TOPE_ALQUILER: Record<Cat, bigint> = {
  A: 239022980n,
  B: 239022980n,
  C: 326664739n,
  D: 326664739n,
  E: 414306498n,
  F: 414306498n,
  G: 493980823n,
  H: 717068939n,
  I: 717068939n,
  J: 717068939n,
  K: 717068939n,
};

const TC_DEFAULT = 1430;
const FX_TAG = "calibrado jun-2026 — recalcular contra BNA comprador del día hábil anterior";

const toCentavos = (monto: number): bigint => BigInt(Math.round(monto * 100));

export function clasificar(input: CalcInput): CalcResult {
  let ingresosC: bigint;
  let fxTag: string | undefined;

  if (input.ingresosArs != null) {
    ingresosC = toCentavos(input.ingresosArs);
  } else if (input.ingresosUsd != null) {
    const tc = input.tc ?? TC_DEFAULT;
    ingresosC = toCentavos(input.ingresosUsd * tc);
    fxTag = `USD ${input.ingresosUsd} × ${tc} (${FX_TAG})`;
  } else {
    return { status: "INSUFFICIENT" };
  }

  if (ingresosC > TOPE_K) {
    return {
      status: "EXCLUSION_RI",
      ingresosArs: ingresosC,
      excesoArs: ingresosC - TOPE_K,
      fxTag,
    };
  }

  const row = TABLA.find((r) => ingresosC <= r.tope)!;
  const { cat, tope, cuota } = row;

  const headroomArs = tope - ingresosC;
  const pctTimes10 = Number((2n * ingresosC * 1000n + tope) / (2n * tope));
  const tier: "VERDE" | "AMARILLO" | "ROJO" =
    pctTimes10 < 700 ? "VERDE" : pctTimes10 <= 900 ? "AMARILLO" : "ROJO";

  const result: CalcResult = {
    status: "OK",
    ingresosArs: ingresosC,
    categoria: cat,
    tope,
    headroomArs,
    pctTimes10,
    tier,
    cuotaServicios: cuota,
    fxTag,
  };

  if (input.alquiler != null) {
    const cap = TOPE_ALQUILER[cat];
    result.alquilerExcedeGrupo = toCentavos(input.alquiler) > cap;
  }

  return result;
}

export function fmtArs(centavos: bigint): string {
  const entero = centavos / 100n;
  const cents = centavos % 100n;
  const enteroStr = entero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const centsStr = cents.toString().padStart(2, "0");
  return `$${enteroStr},${centsStr}`;
}

export function fmtPct(pctTimes10: number): string {
  const entero = Math.trunc(pctTimes10 / 10);
  const dec = Math.abs(pctTimes10 % 10);
  return `${entero},${dec}`;
}
