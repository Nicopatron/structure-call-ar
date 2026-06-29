#!/usr/bin/env python3
"""Calculador determinista de categoría de monotributo (exportador de servicios AR).

Computa, desde los topes de `reference/categorias-monotributo.md`, la categoría
correcta / headroom / tier de alerta / exclusión para un ingreso rolling-12.
Es la FUENTE DE VERDAD del trigger determinista: el modelo nunca hace la
aritmética fiscal a ojo (ver rules.md, Rule 0.1 — two-track determinism).

    python3 calc.py --self-test        # corre los casos pinneados (exit 0 = todo PASS)
    python3 calc.py --usd 30000        # clasifica un ingreso ad-hoc (USD @ TC default)
    python3 calc.py --ars 42900000     # clasifica un ingreso ad-hoc en ARS

Datos: tabla A-K vigente 01/02/2026-31/07/2026, calibración junio 2026.
Nota: la TABLA está hardcodeada (transcrita verbatim del reference). El
auto-parseo del markdown sería frágil; mantener en sync a mano y re-tomar de
`categorias.asp` post-15-jul-2026 (REFRESH OBLIGATORIO — nueva tabla ARCA).
"""
from __future__ import annotations

import sys
from decimal import Decimal, ROUND_HALF_UP

# --- Datos (verbatim de reference/categorias-monotributo.md §1, calibración jun-2026) ---
# (categoría, tope ingresos brutos anuales ARS, cuota total Servicios ARS)
TABLA = [
    ("A", Decimal("10277988.13"), Decimal("42386.74")),
    ("B", Decimal("15058447.71"), Decimal("48250.78")),
    ("C", Decimal("21113696.52"), Decimal("56501.85")),
    ("D", Decimal("26212853.42"), Decimal("72414.10")),
    ("E", Decimal("30833964.37"), Decimal("102537.97")),
    ("F", Decimal("38642048.36"), Decimal("129045.32")),
    ("G", Decimal("46211109.37"), Decimal("197108.23")),
    ("H", Decimal("70113407.33"), Decimal("447346.93")),
    ("I", Decimal("78479211.62"), Decimal("824802.26")),
    ("J", Decimal("89872640.30"), Decimal("999007.65")),
    ("K", Decimal("108357084.05"), Decimal("1381687.90")),
]
TOPE_K = TABLA[-1][1]

# Topes de alquiler devengado anual por GRUPO de categorías (reference §1).
# Mapeado cat -> cap de su grupo. Solo se usa como flag advisory (ver clasificar).
_GRUPOS_ALQUILER = [
    (("A", "B"), Decimal("2390229.80")),
    (("C", "D"), Decimal("3266647.39")),
    (("E", "F"), Decimal("4143064.98")),
    (("G",), Decimal("4939808.23")),
    (("H", "I", "J", "K"), Decimal("7170689.39")),
]
TOPE_ALQUILER = {cat: cap for cats, cap in _GRUPOS_ALQUILER for cat in cats}

# Conversión USD->ARS a efectos del tope: BNA comprador del día hábil anterior.
TC_DEFAULT = Decimal("1430")
FX_TAG = "calibrado jun-2026 — recalcular contra BNA comprador del día hábil anterior"

# Tiers de alerta sobre el tope de la categoría actual (reference §5).
TIER_VERDE_MAX = Decimal("70")   # < 70%  -> VERDE
TIER_AMARILLO_MAX = Decimal("90")  # 70-90% -> AMARILLO ; > 90% -> ROJO


def _pct(ingresos: Decimal, tope: Decimal) -> Decimal:
    """Porcentaje del tope, redondeado a 1 decimal (locale AR usa coma al mostrar)."""
    return (ingresos / tope * 100).quantize(Decimal("0.1"), rounding=ROUND_HALF_UP)


def _tier(pct: Decimal) -> str:
    if pct < TIER_VERDE_MAX:
        return "VERDE"
    if pct <= TIER_AMARILLO_MAX:
        return "AMARILLO"
    return "ROJO"


def clasificar(ingresos_ars=None, *, ingresos_usd=None, tc=TC_DEFAULT, alquiler=None):
    """Clasifica un ingreso rolling-12 en categoría de monotributo.

    Devuelve un dict con status OK / EXCLUSION_RI / INSUFFICIENT. La categoría es
    el tope MÁS BAJO que el ingreso NO supera (ingresos <= tope). Nunca inventa:
    sin ingreso -> INSUFFICIENT; sobre el tope K -> EXCLUSION_RI.
    """
    # 1. Resolver el ingreso en ARS (convertir desde USD si hace falta).
    fx_tag = None
    if ingresos_ars is None:
        if ingresos_usd is None:
            return {
                "status": "INSUFFICIENT",
                "nota": "Sin facturación rolling-12 — el calc no computa categoría "
                        "(no inventa). Completá el intake (rules.md §Intake Gate).",
            }
        ingresos_ars = Decimal(ingresos_usd) * Decimal(tc)
        fx_tag = f"USD {ingresos_usd} × {tc} ({FX_TAG})"
    ingresos_ars = Decimal(ingresos_ars)

    # 2. Exclusión: por encima del tope de Cat K se cae del régimen.
    if ingresos_ars > TOPE_K:
        return {
            "status": "EXCLUSION_RI",
            "ingresos_ars": ingresos_ars,
            "exceso_ars": ingresos_ars - TOPE_K,
            "fx_tag": fx_tag,
            "nota": f"Supera el tope de Cat K (${TOPE_K} / 12m) → exclusión de oficio "
                    "+ RI retroactivo. Salida voluntaria anticipada con contador (Nivel 2).",
        }

    # 3. Categoría = el tope más bajo que el ingreso no supera.
    for cat, tope, cuota in TABLA:
        if ingresos_ars <= tope:
            pct = _pct(ingresos_ars, tope)
            out = {
                "status": "OK",
                "ingresos_ars": ingresos_ars,
                "categoria": cat,
                "tope": tope,
                "headroom_ars": tope - ingresos_ars,
                "pct": pct,
                "tier": _tier(pct),
                "cuota_servicios": cuota,
                "fx_tag": fx_tag,
            }
            # 4. Alquiler: flag advisory, NO override de categoría (reference solo
            #    tiene caps por grupo; computar cat desde ahí inventaría un threshold).
            if alquiler is not None:
                cap = TOPE_ALQUILER[cat]
                excede = Decimal(alquiler) > cap
                out["alquiler_excede_grupo"] = excede
                if excede:
                    out["nota_alquiler"] = (
                        f"Alquiler devengado ${Decimal(alquiler)} supera el cap del grupo "
                        f"de cat {cat} (${cap}). La recategorización puede venir por "
                        "ALQUILER, no por ingresos — chequear los 4 parámetros con contador."
                    )
            return out

    # Inalcanzable: ingresos <= TOPE_K garantiza match en el loop.
    raise AssertionError("clasificar: ingreso bajo el tope K sin categoría — tabla rota")


def proyectar_run_rate_plano(run_rate_usd, *, tc=TC_DEFAULT):
    """Proyección a run-rate plano: el rolling-12 se estabiliza en run_rate × 12.

    Nota: el MES CALENDARIO exacto de cruce requiere el historial mes-a-mes
    (qué meses viejos caen del rolling-12) que el reference no tiene. Esta proyección
    figure-based es lo que los ejemplos computan; el mes exacto queda deferred.
    """
    return clasificar(ingresos_usd=Decimal(run_rate_usd) * 12, tc=tc)


# --- Formato y CLI ---
def _fmt(d: Decimal) -> str:
    """Formatea un ARS al estilo AR: $42.900.000,00."""
    s = f"{d:,.2f}"  # 42,900,000.00
    return "$" + s.replace(",", "·").replace(".", ",").replace("·", ".")


def _print_resultado(r: dict) -> None:
    st = r["status"]
    if st == "INSUFFICIENT":
        print(f"INSUFFICIENT — {r['nota']}")
        return
    print(f"Ingresos rolling-12: {_fmt(r['ingresos_ars'])}"
          + (f"  [{r['fx_tag']}]" if r.get("fx_tag") else ""))
    if st == "EXCLUSION_RI":
        print(f"EXCLUSION_RI — exceso sobre tope K: {_fmt(r['exceso_ars'])}")
        print(r["nota"])
        return
    print(f"Categoría: {r['categoria']}  (tope {_fmt(r['tope'])})")
    print(f"Headroom: {_fmt(r['headroom_ars'])}  ·  {r['pct']}% del tope  ·  tier {r['tier']}")
    print(f"Cuota servicios: {_fmt(r['cuota_servicios'])}/mes")
    if r.get("alquiler_excede_grupo"):
        print("⚠ " + r["nota_alquiler"])


# --- Self-test (pinneado verbatim contra examples.md; corre offline, sin API) ---
def _check(name: str, got: dict, **expected) -> bool:
    ok = True
    diffs = []
    for k, exp in expected.items():
        actual = got.get(k)
        if isinstance(exp, Decimal) and isinstance(actual, Decimal):
            same = exp == actual
        else:
            same = actual == exp
        if not same:
            ok = False
            diffs.append(f"{k}: esperado={exp!r} got={actual!r}")
    flag = "PASS" if ok else "FAIL"
    print(f"  [{flag}] {name}" + ("" if ok else "  -> " + "; ".join(diffs)))
    return ok


def self_test() -> int:
    print("calc.py --self-test (datos: categorias-monotributo.md §1, calibración jun-2026)")
    results = []

    # 1. Lucía rolling-12 (Example 1): USD 30k @ 1430 = 42.9M -> cat G (NO la F auto-declarada).
    r = clasificar(ingresos_usd=30000)
    results.append(_check("1 Lucía rolling-12 → cat G/ROJO", r,
                          categoria="G", headroom_ars=Decimal("3311109.37"),
                          pct=Decimal("92.8"), tier="ROJO",
                          cuota_servicios=Decimal("197108.23")))

    # 2. Lucía proyección endpoint (Example 1 L48): USD 39k = 55.77M -> cat H/AMARILLO.
    r = clasificar(ingresos_usd=39000)
    results.append(_check("2 Lucía proy endpoint → cat H/AMARILLO", r,
                          categoria="H", pct=Decimal("79.5"), tier="AMARILLO"))

    # 3. Martín rolling-12 (Example 2): USD 72k = 102.96M -> cat K/ROJO.
    r = clasificar(ingresos_usd=72000)
    results.append(_check("3 Martín rolling-12 → cat K/ROJO", r,
                          categoria="K", headroom_ars=Decimal("5397084.05"),
                          pct=Decimal("95.0"), tier="ROJO"))

    # 4. Martín run-rate plano (Example 2 L125): USD 7k/mes -> 84k/año = 120.12M -> EXCLUSION.
    r = proyectar_run_rate_plano(7000)
    results.append(_check("4 Martín run-rate plano → EXCLUSION_RI", r,
                          status="EXCLUSION_RI", exceso_ars=Decimal("11762915.95")))

    # 5. FP-guard: un caso claramente VERDE no debe disparar ROJO.
    r = clasificar(ingresos_usd=4000)
    results.append(_check("5 FP-guard verde → cat A/VERDE", r,
                          categoria="A", tier="VERDE"))

    # 6. Thin input: sin ingreso -> INSUFFICIENT (no inventa categoría).
    r = clasificar()
    results.append(_check("6 thin input → INSUFFICIENT", r, status="INSUFFICIENT"))

    # 7. Boundary <= (off-by-one guard): tope F exacto -> F (headroom 0); +1 centavo -> G.
    r = clasificar(ingresos_ars=Decimal("38642048.36"))
    results.append(_check("7a boundary = tope F → cat F, headroom 0", r,
                          categoria="F", headroom_ars=Decimal("0.00")))
    r = clasificar(ingresos_ars=Decimal("38642048.37"))
    results.append(_check("7b boundary = tope F + 0,01 → cat G", r, categoria="G"))

    # 8. Alquiler advisory: cat F + alquiler > cap grupo E-F -> flag; bajo cap -> sin flag.
    r = clasificar(ingresos_usd=25000, alquiler=Decimal("5000000"))
    results.append(_check("8a alquiler > cap grupo → flag True", r,
                          categoria="F", alquiler_excede_grupo=True))
    r = clasificar(ingresos_usd=25000, alquiler=Decimal("4000000"))
    results.append(_check("8b alquiler < cap grupo → flag False", r,
                          categoria="F", alquiler_excede_grupo=False))

    passed = sum(results)
    total = len(results)
    print(f"\n{passed}/{total} PASS")
    return 0 if passed == total else 1


def _main(argv) -> int:
    if "--self-test" in argv:
        return self_test()

    def _arg(flag):
        return argv[argv.index(flag) + 1] if flag in argv and argv.index(flag) + 1 < len(argv) else None

    tc = Decimal(_arg("--tc")) if _arg("--tc") else TC_DEFAULT
    alquiler = Decimal(_arg("--alquiler")) if _arg("--alquiler") else None
    if _arg("--usd"):
        r = clasificar(ingresos_usd=Decimal(_arg("--usd")), tc=tc, alquiler=alquiler)
    elif _arg("--ars"):
        r = clasificar(ingresos_ars=Decimal(_arg("--ars")), alquiler=alquiler)
    else:
        print(__doc__)
        return 0
    _print_resultado(r)
    return 0


if __name__ == "__main__":
    sys.exit(_main(sys.argv[1:]))
