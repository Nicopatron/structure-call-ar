"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { TextureCard, TextureCardContent } from "@/components/ui/texture-card";
import { clasificar, fmtArs, fmtPct, type CalcInput, type CalcResult } from "@/lib/calc";

const TIER_CLASS = {
  VERDE: "text-verde",
  AMARILLO: "text-amarillo",
  ROJO: "text-rojo",
} as const;

interface FormState {
  regimen: string;
  rolling12: string;
  rolling12Unit: "USD" | "ARS";
  tc: string;
  proyeccion: string;
  proyeccionUnit: "USD" | "ARS";
  exportPct: string;
  iibbJurisd: string;
  contador: string;
  alquiler: string;
}

const INITIAL: FormState = {
  regimen: "",
  rolling12: "",
  rolling12Unit: "USD",
  tc: "1430",
  proyeccion: "",
  proyeccionUnit: "USD",
  exportPct: "",
  iibbJurisd: "",
  contador: "",
  alquiler: "",
};

// Converts a raw number string + unit to ARS (plain number, not centavos — calc.ts does toCentavos internally)
function toArs(val: string, unit: "USD" | "ARS", tc: string): number | null {
  const n = parseFloat(val);
  if (!val || isNaN(n)) return null;
  const t = parseFloat(tc) || 1430;
  return unit === "USD" ? n * t : n;
}

const inputCls =
  "bg-panel border border-line rounded-lg px-3 py-2 text-sm text-ink font-mono focus:outline-none focus:border-accent w-full";
const selectCls = cn(inputCls, "cursor-pointer");
const labelCls = "text-xs text-mute block mb-1";

export function VerdictForm() {
  const [f, setF] = useState<FormState>(INITIAL);
  const [result, setResult] = useState<CalcResult | null>(null);
  const [projResult, setProjResult] = useState<CalcResult | null>(null);
  const [attempted, setAttempted] = useState(false);

  function set(k: keyof FormState, v: string) {
    setF((prev) => ({ ...prev, [k]: v }));
    setResult(null);
    setProjResult(null);
  }

  // Six structural fields in gate order
  const GATE_FIELDS = [
    { label: "Régimen actual", val: f.regimen },
    { label: "Rolling-12 (ingresos)", val: f.rolling12 },
    { label: "Proyección 6-12m", val: f.proyeccion },
    { label: "% exportación", val: f.exportPct },
    { label: "IIBB jurisdicción", val: f.iibbJurisd },
    { label: "Contador", val: f.contador },
  ];
  const filledCount = GATE_FIELDS.filter((g) => Boolean(g.val)).length;
  const hasRolling12 = Boolean(f.rolling12);
  const gatePass = filledCount >= 4 && hasRolling12;

  function compute() {
    setAttempted(true);
    if (!gatePass) return;

    const arsVal = toArs(f.rolling12, f.rolling12Unit, f.tc);
    if (arsVal === null) return;

    // USD: pass usd+tc so clasificar populates fxTag (shows the BNA assumption); same centavos either way.
    const n = parseFloat(f.rolling12);
    const mainInput: CalcInput =
      f.rolling12Unit === "USD"
        ? { ingresosUsd: n, tc: parseFloat(f.tc) || 1430 }
        : { ingresosArs: n };
    if (f.alquiler) {
      const a = parseFloat(f.alquiler);
      if (!isNaN(a)) mainInput.alquiler = a;
    }
    setResult(clasificar(mainInput));

    if (f.proyeccion) {
      const projArs = toArs(f.proyeccion, f.proyeccionUnit, f.tc);
      if (projArs !== null) {
        setProjResult(clasificar({ ingresosArs: arsVal + projArs }));
      }
    }
  }

  return (
    <div className="space-y-5">
      {/* Field 1 — Régimen */}
      <div>
        <label className={labelCls}>Régimen actual</label>
        <select className={selectCls} value={f.regimen} onChange={(e) => set("regimen", e.target.value)}>
          <option value="">— seleccionar —</option>
          <option value="monotributo">Monotributo</option>
          <option value="responsable_inscripto">Responsable Inscripto</option>
          <option value="no_se">No sé</option>
        </select>
      </div>

      {/* Field 2 — Rolling-12 (REQUIRED) */}
      <div>
        <label className={labelCls}>
          Ingresos rolling-12 <span className="text-rojo">*</span>
        </label>
        <div className="flex gap-2 items-start">
          <input
            type="number"
            min={0}
            className={cn(inputCls, "flex-1")}
            placeholder="30000"
            value={f.rolling12}
            onChange={(e) => set("rolling12", e.target.value)}
          />
          <select
            className={cn(selectCls, "w-20 shrink-0")}
            value={f.rolling12Unit}
            onChange={(e) => set("rolling12Unit", e.target.value as "USD" | "ARS")}
          >
            <option value="USD">USD</option>
            <option value="ARS">ARS</option>
          </select>
        </div>
        {f.rolling12Unit === "USD" && (
          <div className="flex items-center gap-2 mt-2">
            <label className="text-xs text-mute shrink-0">TC</label>
            <input
              type="number"
              className={cn(inputCls, "w-28")}
              value={f.tc}
              onChange={(e) => set("tc", e.target.value)}
            />
            <span className="text-xs text-mute">calibrado jun-2026</span>
          </div>
        )}
      </div>

      {/* Field 3 — Proyección (optional) */}
      <div>
        <label className={labelCls}>Proyección próximos 6-12m (opcional)</label>
        <div className="flex gap-2 items-start">
          <input
            type="number"
            min={0}
            className={cn(inputCls, "flex-1")}
            placeholder="8000"
            value={f.proyeccion}
            onChange={(e) => set("proyeccion", e.target.value)}
          />
          <select
            className={cn(selectCls, "w-20 shrink-0")}
            value={f.proyeccionUnit}
            onChange={(e) => set("proyeccionUnit", e.target.value as "USD" | "ARS")}
          >
            <option value="USD">USD</option>
            <option value="ARS">ARS</option>
          </select>
        </div>
      </div>

      {/* Field 4 — % Exportación */}
      <div>
        <label className={labelCls}>% exportación + contraparte</label>
        <select className={selectCls} value={f.exportPct} onChange={(e) => set("exportPct", e.target.value)}>
          <option value="">— seleccionar —</option>
          <option value="100_export">100% export servicios (US/EU)</option>
          <option value="mixto">Mixto export+local</option>
          <option value="mayormente_local">Mayormente local</option>
        </select>
      </div>

      {/* Field 5 — IIBB */}
      <div>
        <label className={labelCls}>IIBB jurisdicción</label>
        <select className={selectCls} value={f.iibbJurisd} onChange={(e) => set("iibbJurisd", e.target.value)}>
          <option value="">— seleccionar —</option>
          <option value="caba">CABA</option>
          <option value="provincia">Provincia</option>
          <option value="multi">Multi-jurisdicción</option>
        </select>
      </div>

      {/* Field 6 — Contador */}
      <div>
        <label className={labelCls}>Contador</label>
        <select className={selectCls} value={f.contador} onChange={(e) => set("contador", e.target.value)}>
          <option value="">— seleccionar —</option>
          <option value="tengo">Tengo</option>
          <option value="reactivo">Reactivo</option>
          <option value="no_tengo">No tengo</option>
        </select>
      </div>

      {/* Optional: alquiler */}
      <div>
        <label className={labelCls}>Alquiler devengado anual (ARS, opcional)</label>
        <input
          type="number"
          min={0}
          className={inputCls}
          placeholder="1200000"
          value={f.alquiler}
          onChange={(e) => set("alquiler", e.target.value)}
        />
      </div>

      {/* CTA */}
      <button
        type="button"
        onClick={compute}
        className="py-3 px-6 bg-accent text-paper font-semibold rounded-lg hover:bg-accent/90 transition-colors"
      >
        Computar veredicto →
      </button>

      {/* Gate refusal — shown only after click attempt */}
      {attempted && !gatePass && (
        <div className="border border-line rounded-lg p-4 space-y-2">
          <p className="text-sm text-mute font-mono">
            Antes de un veredicto necesito 4 de 6 inputs estructurales (y obligatoriamente la cifra rolling-12).
          </p>
          <ul className="space-y-1">
            {GATE_FIELDS.map((g) => (
              <li key={g.label} className={cn("text-xs font-mono", g.val ? "text-verde" : "text-rojo")}>
                {g.val ? "✓" : "✗"} {g.label}
              </li>
            ))}
          </ul>
          <p className="text-xs text-mute font-mono">
            {filledCount}/6 completados · rolling-12:{" "}
            {hasRolling12 ? "✓" : "✗ (obligatorio)"}
          </p>
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="space-y-3" aria-live="polite">
          <TextureCard>
            <TextureCardContent className="p-5 space-y-3">
              {result.status === "OK" &&
                result.categoria &&
                result.tope !== undefined &&
                result.headroomArs !== undefined &&
                result.pctTimes10 !== undefined &&
                result.tier &&
                result.cuotaServicios !== undefined && (
                  <div className="space-y-2 font-mono text-sm">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-ink">
                        Categoría {result.categoria} (tope {fmtArs(result.tope)})
                      </span>
                      <span className={cn("text-xs font-semibold", TIER_CLASS[result.tier])}>
                        ● {result.tier}
                      </span>
                    </div>
                    <p className="text-ink/80">
                      Headroom {fmtArs(result.headroomArs)} · {fmtPct(result.pctTimes10)}% del tope
                    </p>
                    <p className="text-ink/80">
                      Cuota servicios {fmtArs(result.cuotaServicios)}/mes
                    </p>
                    {result.fxTag && (
                      <p className="text-mute text-xs">{result.fxTag}</p>
                    )}
                    {result.alquilerExcedeGrupo && (
                      <p className="text-amarillo text-xs border-l-2 border-amarillo/60 pl-3">
                        ⚠ El alquiler supera el cap del grupo — la recategorización puede venir
                        por alquiler, chequear con contador.
                      </p>
                    )}
                  </div>
                )}

              {result.status === "EXCLUSION_RI" && result.excesoArs !== undefined && (
                <div className="space-y-2 font-mono text-sm">
                  <p className="text-rojo font-semibold">
                    Supera el tope de Cat K → exclusión de oficio + RI retroactivo.
                  </p>
                  <p className="text-ink/80">Exceso {fmtArs(result.excesoArs)}.</p>
                  <p className="text-amarillo text-xs border-l-2 border-amarillo/60 pl-3">
                    Salida voluntaria anticipada con contador (Nivel 2).
                  </p>
                  {result.fxTag && (
                    <p className="text-mute text-xs">{result.fxTag}</p>
                  )}
                </div>
              )}

              {projResult && projResult.status !== "INSUFFICIENT" && (
                <div className="border-t border-line pt-3 font-mono text-sm">
                  {projResult.status === "OK" && projResult.categoria && projResult.tier ? (
                    <p className="text-ink/80">
                      Proyectado: cat {projResult.categoria}{" "}
                      <span className={cn("text-xs", TIER_CLASS[projResult.tier])}>
                        · {projResult.tier}
                      </span>
                    </p>
                  ) : projResult.status === "EXCLUSION_RI" ? (
                    <p className="text-rojo">
                      Proyectado: exclusión Cat K → RI retroactivo.
                    </p>
                  ) : null}
                </div>
              )}
            </TextureCardContent>
          </TextureCard>

          <p className="text-mute text-xs font-mono">
            Computado client-side, sin IA — el código decide el número (calc.py portado, mismos fixtures).
          </p>
        </div>
      )}
    </div>
  );
}
