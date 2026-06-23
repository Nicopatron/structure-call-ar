# Categorías de Monotributo — tabla, recategorización, exclusión

Reference operativo del specialist. Estas cifras son **datos** que el modelo lee y aplica con aritmética; no son opinión. Si una cifra no está acá, el modelo lo dice y no la inventa.

**Calibración: junio 2026.** Tabla vigente **01/02/2026 – 31/07/2026**. Triple-confirmada al centavo por 3 fuentes independientes. Fuente oficial: ARCA, `https://www.afip.gob.ar/monotributo/categorias.asp` (tabla vigente; **no** usar el PDF del período Ago-2025/Ene-2026).

> ⚠ **REFRESH OBLIGATORIO post-15-jul-2026.** ARCA publica la tabla **Ago2026–Ene2027** alrededor del **15-jul-2026**, una vez conocido el IPC de junio (INDEC). Incremento estimado **+14–17%** sobre estos valores — **proyección privada, NO oficial**. Desde el vencimiento de agosto 2026, estos topes y cuotas quedan **desactualizados** para cualquier nueva categorización. Re-tomar de `categorias.asp` y reemplazar esta tabla.

---

## 1. Tabla de categorías A–K — vigente 01/02/2026 al 31/07/2026

Cifras exactas al centavo (triple-confirmadas: workflow cifras + workflow dominio + Gemini Deep Research). Desde 2026 **no hay distinción de categoría máxima entre servicios y bienes**: ambas actividades llegan hasta K (cambio estructural confirmado por la tabla oficial).

| Cat. | Ingresos brutos anuales máx. (ARS) | Ingresos brutos mensuales máx. (ARS) | Imp. integrado Servicios | Aportes SIPA | Aportes Obra Social | **Cuota total Servicios** | Cuota total Bienes |
|------|-----------------------------------:|--------------------------------------:|-------------------------:|-------------:|--------------------:|--------------------------:|-------------------:|
| A | $10.277.988,13 | $856.499,01 | $4.780,46 | $15.616,17 | $21.990,11 | **$42.386,74** | $42.386,74 |
| B | $15.058.447,71 | $1.254.870,64 | $9.082,88 | $17.177,79 | $21.990,11 | **$48.250,78** | $48.250,78 |
| C | $21.113.696,52 | $1.759.474,71 | $15.616,17 | $18.895,57 | $21.990,11 | **$56.501,85** | $55.227,06 |
| D | $26.212.853,42 | $2.184.404,45 | $25.495,79 | $20.785,13 | $26.133,18 | **$72.414,10** | $70.661,26 |
| E | $30.833.964,37 | $2.569.497,03 | $47.804,60 | $22.863,64 | $31.869,73 | **$102.537,97** | $92.658,35 |
| F | $38.642.048,36 | $3.220.170,70 | $67.245,13 | $25.150,00 | $36.650,19 | **$129.045,32** | $111.198,27 |
| G | $46.211.109,37 | $3.850.925,78 | $122.379,76 | $35.210,00 | $39.518,47 | **$197.108,23** | $135.918,34 |
| H | $70.113.407,33 | $5.842.783,94 | $350.567,04 | $49.294,00 | $47.485,89 | **$447.346,93** | $272.063,40 |
| I | $78.479.211,62 | $6.539.934,30 | $697.150,35 | $69.011,60 | $58.640,31 | **$824.802,26** | $406.512,05 |
| J | $89.872.640,30 | $7.489.386,69 | $836.580,42 | $96.616,24 | $65.810,99 | **$999.007,65** | $497.059,41 |
| K | $108.357.084,05 | $9.029.757,00 | $1.171.212,59 | $135.262,74 | $75.212,57 | **$1.381.687,90** | $600.879,51 |

**Para el exportador de servicios, la columna que importa es "Cuota total Servicios".** La columna Bienes se incluye para integridad de la tabla oficial.

### Notas de la tabla
- **Cuota total = impuesto integrado + aportes SIPA + aportes Obra Social.** Pago mensual único a ARCA.
- **Imp. integrado** sustituye IVA + Ganancias dentro del régimen simplificado.
- **Aportes SIPA**: jubilatorios (Sistema Integrado Previsional Argentino).
- **Aportes Obra Social**: valor para afiliación individual sin adherentes. Por cada adherente se suma el mismo importe.
- **Precio unitario máximo para venta de cosas muebles: $613.492,31** (no aplica a servicios puros).
- Para exportación de servicios, los ingresos brutos se calculan convirtiendo el monto facturado en USD a ARS (ver §4).

### Topes de alquiler devengado anual por grupo de categorías
Uno de los 4 parámetros de categorización (ver §2). Para un exportador de servicios sin local físico, raramente aplica; para uno con oficina, **puede gatillar recategorización antes que la facturación**.

| Categorías | Tope alquiler anual (ARS) |
|:----------:|--------------------------:|
| A – B | $2.390.229,80 |
| C – D | $3.266.647,39 |
| E – F | $4.143.064,98 |
| G | $4.939.808,23 |
| H – K | $7.170.689,39 |

### Comparativa con la tabla anterior (Ago2025–Ene2026)
| Cat. | Tope anterior (ARS) | Tope Feb–Jul 2026 (ARS) | Var. % |
|------|--------------------:|------------------------:|-------:|
| A | $8.992.597,87 | $10.277.988,13 | +14,3% |
| K | $94.805.682,90 | $108.357.084,05 | +14,3% |

Ajuste semestral ≈ **+14,3%** (IPC ene–jun 2025, base INDEC). Da una idea de magnitud del próximo ajuste, no del valor exacto.

---

## 2. Recategorización — mecánica

Procedimiento **semestral** obligatorio: el contribuyente evalúa su situación y se mueve de categoría si corresponde.

### Ventanas
| Semestre evaluado | Se habilita | Vence |
|-------------------|-------------|-------|
| Cierra en diciembre | enero | **5 de febrero** |
| Cierra en junio | julio | **5 de agosto** |

> En 2026, la recategorización de verano venció el **5 de febrero de 2026**. La de invierno vence en **agosto 2026** (se habilita en julio; ARCA publica primero la nueva tabla ~15-jul).

### Base de cálculo: 12 MESES MÓVILES (no 6)
La métrica es la **sumatoria estricta de los ingresos brutos facturados durante los últimos DOCE meses móviles** previos al mes de recategorización — **no** el semestre.

> ⚠ **Gotcha frecuente y costoso:** la recat de febrero NO evalúa "julio–diciembre (6 meses)". Evalúa los **12 meses móviles** que cierran en diciembre. La de agosto evalúa los 12 meses que cierran en junio. Confundir 6 con 12 hace calcular mal la base y la categoría. Son **12 meses móviles**, siempre.

### Los 4 parámetros — gana el más restrictivo
La categoría no se determina solo por facturación. Se evalúan **4 parámetros** y **gana el más restrictivo** (el que empuja a la categoría más alta):

1. **Ingresos brutos anuales** (12 meses móviles).
2. **Energía eléctrica consumida** (kW anuales).
3. **Alquileres devengados** anuales (tabla en §1).
4. **Superficie afectada** (m²).

Para el exportador de servicios, ingresos suele ser el parámetro dominante. Pero **un freelancer con oficina puede saltar de categoría por m²/alquiler antes que por facturación** — siempre chequear los 4. Energía y superficie raramente aplican a actividad inmaterial, pero el alquiler sí.

### Recategorización proactiva (práctica recomendada)
Por el carácter dinámico del tipo de cambio (cobros en USD) y las actualizaciones nominales de ARCA, se recomienda **monitoreo mensual**, no esperar a la ventana. Recalcular la sumatoria de 12 meses móviles cada mes; si se proyecta cruzar un tope, **diferir la emisión de comprobantes dentro de los márgenes legales de devengamiento** evita la exclusión sorpresiva. Para quien cobra en USD, el monitoreo mensual es directamente necesario (ver §4).

---

## 3. Exclusión de oficio — la sanción dura

Superar el tope de ingresos brutos de la **Categoría K** ($108.357.084,05 / 12 meses móviles) genera la **exclusión de pleno derecho** del régimen simplificado. Esto es **distinto** de la recategorización de oficio (que solo mueve de categoría). La exclusión saca del régimen.

### Cómo la detecta ARCA
ARCA efectúa **cruces sistémicos** comparando facturación electrónica, liquidaciones de divisas, acreditaciones bancarias y gastos con tarjeta (cruce ARCA–BCRA activo en 2026). Si la sumatoria de los últimos 12 meses excede el límite, notifica la exclusión en el **Domicilio Fiscal Electrónico**.

### La tabla que usa ARCA NO es la actualizada
> ⚠ Punto crítico: ARCA mide el exceso contra el **límite vigente en el mes preciso en que se produjo la infracción** — es decir, usa la **tabla histórica de ese mes, NO la tabla actualizada posteriormente**. No alcanza con quedar bajo el tope nuevo; hay que haber estado bajo el tope del mes en que se facturó.

### Retroactividad a hora cero
La exclusión opera con **retroactividad severa**: el contribuyente es **Responsable Inscripto desde la cero hora del día** en que se produjo la causal. Deuda contingente resultante:

- **IVA** de todos los meses desde la fecha retroactiva.
- **Ganancias** del mismo período.
- **Aportes de autónomos** (régimen general).
- **Intereses resarcitorios** (≈ 3% mensual; ⚠ verificar: tasa de interés ARCA vigente a la fecha de operar — se actualiza por resolución).
- **Multas por omisión** de impuestos.

> Para un exportador de servicios la deuda de IVA por exportación es 0% (tasa cero), pero **Ganancias + autónomos + intereses + multa** sobre meses retroactivos sí impactan.

### Veda de reingreso
Tras la exclusión de oficio, hay **veda de reingreso al monotributo por 3 años**.

### Defensa (Nivel 3 — abogado tributarista)
- Plazo de apelación de la exclusión: **15 días hábiles** desde la notificación en el DFE.
- **Jurisprudencia favorable (abr-2026):** Cámara Nacional CAF, Sala V, falló que el excluido de oficio **SÍ puede computar el crédito fiscal de IVA** de las compras del período retroactivo (principio de realidad económica; exigir IVA discriminado en un período donde la ley no lo obligaba es "de imposible cumplimiento" y genera "enriquecimiento sin causa" del fisco). Herramienta de defensa — escala a abogado tributarista, no la maneja el contribuyente solo.

### Salida voluntaria anticipada vs. exclusión de oficio
Salir **voluntariamente** al RI antes de que ARCA fuerce la exclusión es preferible a la exclusión retroactiva. El régimen puente da beneficios (ver §6). Regla operativa: **si >85–90% del tope Cat K con crecimiento sostenido → activar análisis de salida voluntaria anticipada** (escala a contador).

---

## 4. Conversión USD → ARS para el tope

El exportador cobra en USD pero **la categoría se determina por facturación en ARS**.

- **Tipo de cambio a efectos del tope del monotributo:** **BNA COMPRADOR** del **cierre del día hábil cambiario anterior** a la fecha de emisión del comprobante.
- ⚠ **No confundir** con el TC para *emitir* la Factura E, que es **BNA VENDEDOR** del día hábil anterior. Son **dos cosas distintas**: vendedor para emitir, comprador para convertir a efectos del tope. (verificar_manual — matiz fino; confirmar con contador en caso límite.)

### Riesgo cambiario sobre la categoría
Los ingresos en USD computan como ingresos brutos al TC del día. **Con devaluación del peso, los pesos nominales se disparan sin crecimiento real** → empuje a categorías superiores o a la exclusión, aunque en USD no haya crecido nada. Por eso el monitoreo mensual contra el BNA del día es necesario para quien cobra en USD.

---

## 5. Tiers de alerta de tope

Sobre la facturación de 12 meses móviles vs. el tope de la categoría actual:

| Tier | Umbral | Acción |
|------|--------|--------|
| 🟢 **VERDE** | **< 70%** del tope | Cómodo. Sin acción. |
| 🟡 **AMARILLO** | **70–90%** del tope | Vigilar. Planificar la recategorización proactiva o la cuota de la próxima categoría. |
| 🔴 **ROJO** | **> 90%** del tope (o proyección de cruce antes de la próxima recat oficial) | Actuar ya: recategorización proactiva, o —cerca del tope Cat K— el análisis de salida voluntaria antes de que ARCA fuerce la exclusión retroactiva. |

Para quien cobra en USD, **recalcular mensualmente contra el BNA del día** — la devaluación mueve el tier sin crecimiento real.

---

## 6. Régimen puente (transición monotributo → RI)

Al salir del monotributo al Régimen General, la ley contempla un **régimen de transición ("Puente Permanente")** con dos beneficios:

1. **Reducción del débito fiscal de IVA: 50% el 1er año, 30% el 2do, 10% el 3ro.**
   > ⚠ **Para el exportador de servicios esto es IRRELEVANTE.** La exportación de servicios es IVA tasa cero — no genera débito fiscal que reducir. El beneficio de IVA no aplica al exportador puro.

2. **Beneficio REAL para el exportador — Ganancias:** se autoriza a computar como **gasto deducible extra el 50% del tope de ingresos de la categoría máxima del monotributo**. Este es el beneficio aprovechable: reduce la base imponible de Ganancias en el RI durante la transición.

Contexto de break-even (de las 3 fuentes): para el exportador puro de servicios, **jamás conviene anticipar el salto a RI voluntariamente**; monotributo es fiscalmente superior hasta Cat K. El break-even recién aparece superando **sostenidamente ~USD 140.000–150.000 anuales**. El detalle del costeo RI vs. quedarse está en `monotributo-vs-ri.md`.

---

## 7. Próxima tabla — Ago2026–Ene2027 (NO vigente)

- **Recategorización de invierno:** se habilita ~15-jul-2026, vence **5-ago-2026**. Evalúa los 12 meses móviles que cierran en junio 2026.
- **Nuevos valores:** ARCA publica la tabla ≈ **15-jul-2026**, una vez conocido el IPC de junio (INDEC).
- **Incremento estimado: +14–17%** sobre los valores actuales — **proyección privada, NO oficial. No citar como cifra dura.**
- Los nuevos valores rigen **desde el vencimiento de agosto 2026** en adelante.
- ⚠ **Hasta que esta tabla se publique y se cargue acá, los valores de §1 son los vigentes.** Después del 15-jul-2026, re-tomar de `https://www.afip.gob.ar/monotributo/categorias.asp` y reemplazar la §1 + comparativa.

---

## Flags `verificar_manual` (no esconder)

- ⚠ **TC del tope (BNA comprador) vs. TC de emisión (BNA vendedor):** matiz fino confirmado por Gemini, pero marcado verificar_manual en la triangulación. Confirmar con contador en caso límite.
- ⚠ **Tasa de interés resarcitorio ARCA (≈3% mensual):** se actualiza por resolución; verificar la vigente a la fecha de operar.
- ⚠ **Incremento +14–17% de la próxima tabla:** estimación privada, NO oficial. No usar como número.
- ⚠ **Multa por no recategorizar:** hasta 50% del impuesto integrado omitido (reducible/eximible); rango real reportado $500–$45.000 — no citar un monto exacto sin verificar contra norma. (Distinta de la multa Art. 38 Ley 11.683 por DDJJ omitida = $220.000, que es otra sanción.)

---

**Calibración: junio 2026 (datos al 22/06/2026).** Re-validar **post-15-jul-2026** (nueva tabla monotributo Ago2026–Ene2027). Fuente oficial de la tabla: `https://www.afip.gob.ar/monotributo/categorias.asp`. Citado por `rules.md` (§ Always, Tope alert tiers, Calibration date).
