# Monotributo vs Responsable Inscripto — el análisis de régimen

Calibración: **junio 2026** (datos al 22/06/2026). Fuentes: ARCA, BCRA, AFIP/ARCA Art. 94 LIG, leyes impositivas provinciales 2026. Triple-confirmado contra `cifras-fiscales.md`, `domain-priorart.md` y Gemini Deep Research (`Fiscalidad Freelancers Argentina 2026.md`); discrepancias resueltas en `triangulacion.md`.

Este es el corazón del veredicto de TRANSITION mode. La tesis no es "monotributo es lindo": es que **para el exportador puro de servicios, el salto a RI destruye valor marginal de forma pronunciada y casi nunca conviene anticiparlo**. Lo que sigue es el costeo que lo demuestra, más las condiciones específicas que rompen la tesis (ahí sí se analiza el salto).

---

## 1. La tesis (triple-confirmada, confianza ALTA)

> **Para el exportador PURO de servicios sin gastos deducibles altos, el monotributo es fiscalmente superior hasta cat K. Jamás conviene anticipar el salto voluntariamente. El break-even sólo se alcanza superando sostenidamente ~USD 140.000–150.000/año.**

Las tres fuentes coinciden al respecto sin matices (`triangulacion.md`, sección "Triple-confirmado"). El motivo estructural:

- En **exportación de servicios el IVA es 0% en ambos regímenes** (tasa cero, no exención pura — ver §4). El RI no le cobra 21% al cliente del exterior; el monotributista tampoco. Así que el supuesto "beneficio IVA" del RI **no existe para el exportador**: no hay débito fiscal contra el cual descargar crédito.
- El **crédito fiscal del RI sobre insumos digitales es casi nulo**: un freelancer de servicios compra poco con IVA argentino discriminado (algo de software, conectividad, equipamiento). Ese crédito queda como saldo técnico inmovilizado, recuperable sólo vía el trámite SIR con informe de contador (§4) — un costo financiero oculto, no un ahorro.
- A cambio de cero beneficio, el RI suma **Ganancias progresiva (5%–35%) + autónomos + honorario de contador multiplicado + carga administrativa mensual**. La cuota fija del monotributo absorbe todo eso en un único pago.

**Presión tributaria efectiva — el número que cierra la discusión:**

| Régimen | Carga efectiva directa sobre ingresos | Fuente |
|---|---|---|
| Monotributo cat K (tope) | **~15,3%** ($1.381.687,90 × 12 = ~$16,58M sobre $108,3M facturados) | Gemini DR §2.2; `cifras-fiscales.md` |
| RI exportador puro (≥$120M/año) | **puede escalar >30–35%** (Ganancias marginal en tramos 27/31/35% + autónomos + contador + saldo IVA inmovilizado) | Gemini DR §2.2 |

La carga marginal **se duplica** al cruzar. Por eso anticipar el salto es destruir valor.

---

## 2. Costeo RI completo (lo que de verdad cuesta salir)

La cuota fija consolidada del monotributo se reemplaza por cuatro frentes de costo simultáneos. Esto es lo que el specialist suma en `## Costeo RI vs Quedarte`.

### 2.1 Autónomos (aportes a la seguridad social — reemplazan el componente SIPA del monotributo)

> **Fuente:** AFIP/ARCA, "Trabajadores autónomos — Valores vigentes a partir de junio 2026". Las categorías de autónomos se fijan por rentabilidad/actividad proyectada (distintas de las categorías del monotributo).

| Categoría autónomos | Aporte mensual (ARS) |
|---|---:|
| Categoría I (mínima, base) | **~$72.446,22** |
| Categoría IV | **>$231.000** |
| Categoría V | **>$318.000** |

⚠ verificar: los importes exactos de cat IV/V no figuran al peso en las fuentes (Gemini cita ">$231.000 y >$318.000" como pisos aproximados); cat I figura como "$72.446,22 aproximado". Re-tomar del PDF oficial de ARCA (autónomos jun-2026) antes de liquidar un caso real.

Nota: autónomos **convive con** el RI (es un régimen previsional aparte); no es opcional. El monotributista no lo paga por separado — su SIPA va dentro de la cuota.

### 2.2 Honorario de contador (compliance mensual)

| Perfil | Rango mensual (ARS) | Estado del dato |
|---|---:|---|
| Monotributista exportador (gestión + Factura E + BCRA) | $90.000–$180.000 | HMS oficiales CABA + mercado |
| **RI + exportación (paquete plano)** | **$120.000–$200.000/mes** (núcleo del análisis); estimación de mercado más amplia **$250.000–$400.000/mes** | ⚠ verificar: estimación de mercado, no validada |
| SAS / persona jurídica chica | $340.000–$400.000/mes | ⚠ verificar: estimación de mercado |

⚠ verificar: el rango RI/SAS **$250.000–$400.000/mes** es **estimación de mercado / testimonio anecdótico** (única fuente: hilo Reddit r/merval no re-localizable; ninguna otra fuente cruza el número). El número de trabajo del costeo del specialist es **$120.000–$200.000/mes** para el paquete RI-exportador; presentar el rango superior como "estimación de mercado, verificar con presupuesto real de un contador AR", no como dato consolidado. Los HMS oficiales del monotributo (CABA jun-2026, módulo $14.516: $87.096 / $116.128 / $145.160 por recategorización) **sí** son publicables tal cual.

El RI reemplaza la simplicidad del monotributo por DDJJ mensuales de IVA e IIBB/Convenio Multilateral, regímenes de información, liquidación anual de Ganancias y proyección de anticipos. El honorario sube porque el trabajo sube.

### 2.3 Ganancias — escala Art. 94 LIG (el gravamen de mayor impacto)

> **Base legal:** Ley 27.743 (BO 08/07/2024) reimplantó el impuesto para personas humanas con escala de 9 tramos. **Las alícuotas 5%–35% son fijas por ley; sólo los topes en pesos se actualizan por IPC INDEC semestral** (art. 73 Ley 27.743). Fuente cifras: AFIP/ARCA, tabla Art. 94 LIG ene-jun 2026; deducciones art. 30 ene-jun 2026.

Mecánica: al ingreso bruto anual se le restan los gastos necesarios y luego las deducciones personales para obtener la **Ganancia Neta Sujeta a Impuesto (GNSI)**; sobre la GNSI se aplica la escala progresiva.

**Deducciones personales 1er semestre 2026:**

| Concepto | Monto (ARS) |
|---|---:|
| Ganancia No Imponible (GNI / MNI) | **$5.151.802,50** |
| Deducción Especial (Apdo. 1, Art. 30) | **$18.031.308,76** (= **3,5× GNI**) |
| Deducción Especial — nuevos profesionales | $20.607.210,01 |

> ⚠ La deducción especial es **3,5× GNI, NO 3,8×** (corrección verificada en `triangulacion.md`). Hardcodear 3,5×. Usar 3,8× infla la base deducible del RI y sesga el veredicto a favor de saltar — error que cambia la recomendación.

**Escala mensual acumulada 2026 — ejemplo JUNIO 2026 (acumulado ene–jun 2026):**

| Ganancia neta acumulada (desde $) | Hasta $ | Pagan $ fijo | Más % | Sobre excedente de $ |
|---|---|---|---|---|
| 0,00 | 1.000.015,05 | 0,00 | 5% | 0,00 |
| 1.000.015,05 | 2.000.030,09 | 50.000,75 | 9% | 1.000.015,05 |
| 2.000.030,09 | 4.000.060,17 | 140.001,68 | 12% | 2.000.030,09 |
| 4.000.060,17 | 6.000.090,26 | 280.004,21 | 12% | 4.000.060,17 |
| 6.000.090,26 | 9.000.135,40 | 520.007,82 | 15% | 6.000.090,26 |
| 9.000.135,40 | 18.000.270,80 | 970.014,59 | 19% | 9.000.135,40 |
| 18.000.270,80 | 27.000.406,20 | 2.680.040,32 | 23% | 18.000.270,80 |
| 27.000.406,20 | 40.500.609,30 | 4.750.071,46 | 27% | 27.000.406,20 |
| 40.500.609,30 | 60.750.913,96 | 8.395.126,30 | 31% | 40.500.609,30 |
| **60.750.913,96** | **en adelante** | **14.672.720,74** | **35%** | **60.750.913,96** |

> El último tramo (alícuota marginal 35%) arranca desde **$60.750.913,96** de ganancia neta acumulada. La escala arranca en 5% para los primeros ~$1M.

⚠ verificar: esta es la escala **ene–jun 2026**. La escala jul–dic 2026 **aún no está publicada** (sale en julio 2026, actualizada por IPC). Re-validar post-15-jul-2026. La tabla **anual 2025** (liquidación final, 9 tramos: 1er tramo hasta $1.749.901,45 al 5%; último desde $53.153.256,52 al 35%, $fijo $12.837.714,51) figura en `cifras-fiscales.md` §2.7 para liquidaciones del período 2025.

### 2.4 IVA — exportación de servicios: tasa cero con recupero vía SIR

> **Marco legal:** Art. 8 inc. d) Ley 23.349 (exportaciones exentas de débito) · Art. 43 (cómputo/recupero del crédito fiscal vinculado) · Art. 77.1 DR (extiende la tasa cero a exportación de servicios). Recupero operativo: **Sistema Integral de Recupero (SIR), RG 5173/22**.

Se denomina **"tasa cero"**, no exención pura: débito fiscal $0, pero el exportador RI **conserva** el crédito fiscal de sus compras y, en teoría, puede recuperarlo.

| Aspecto | Detalle |
|---|---|
| IVA en la operación de exportación | **0%** (Factura E, rubro "exportaciones" del F.2002, NO "operaciones exentas") |
| Crédito fiscal de compras | Recuperable: se computa contra débito del mercado interno; saldo positivo → devolución/acreditación/transferencia (Art. 43) |
| **Problema para el exportador puro** | **El crédito es casi nulo en servicios digitales** — pocas compras con IVA AR discriminado. No hay débito interno contra el cual descargarlo → saldo técnico inmovilizado. |
| Recupero vía SIR (RG 5173/22) | Requiere **informe especial de contador público independiente certificado por el Consejo** (escalación Nivel 2). Trámite formal del saldo técnico para servicios está menos desarrollado que para bienes (RG 1351 reglamenta bienes). |
| Límite del recupero | Hasta el **21% del monto FOB** exportado en pesos (Art. 43). |

**Implicancia para el veredicto:** el RI no captura ahorro de IVA en exportación (ya es 0% en monotributo), y el crédito que sí acumula es chico y caro de recuperar. El "beneficio IVA del RI" es una ilusión para este perfil.

---

## 3. Break-even — por qué jamás se anticipa el salto

Comparación al tope de cat K vs apenas cruzándolo (Gemini DR §2.2):

| Escenario | Carga consolidada anual aprox. | Presión efectiva sobre ingresos |
|---|---|---|
| **Monotributo cat K** ($108,3M facturados) | ~$16,58M ($1.381.687,90 × 12) | **~15,3%** |
| **RI facturando $120M** (apenas supera) | GNSI cae rápido en tramos 27/31/35% + autónomos + contador + saldo IVA inmovilizado | **>30–35%** |

El **Régimen de Transición ("Puente Permanente")** ofrece a quien se excluye una reducción de débito de IVA (50%/30%/10% años 1/2/3) — **irrelevante para el exportador** (no genera débito). Su único beneficio útil acá: computar como gasto deducible extra en Ganancias el **50% del tope de ingresos de la categoría máxima** del monotributo. No alcanza para dar vuelta el break-even.

> **Conclusión financiera (Gemini DR, literal):** *"jamás conviene anticipar el salto voluntariamente"*. El break-even económico sólo se alcanza cuando la facturación internacional **excede holgada y sostenidamente** el techo del monotributo — del orden de **USD 140.000–150.000/año**. Recién con ese volumen el incremento de ingresos diluye el salto en la carga marginal efectiva.

Regla operativa para el specialist: **nunca recomendar RI como "el próximo nivel".** RI es una elección de condiciones específicas (§5), no una graduación. Cuantificar siempre antes de sugerirlo.

---

## 4. Resumen del costeo (lo que entra al `## Costeo RI vs Quedarte`)

```
MONOTRIBUTO cat K               RI EXPORTADOR PURO
─────────────────────          ──────────────────────────────────
Cuota fija $1.381.687,90/mes    Ganancias 5%–35% sobre GNSI (Art. 94)
  (incluye SIPA + OS +          + Autónomos: cat I ~$72.446/mes …
   componente impositivo)         cat IV–V $231k–$318k/mes
IVA export: 0%                  + Contador: $120k–$200k/mes
Ganancias: dentro de la cuota     (estimación mercado RI/SAS $250k–$400k ⚠)
Contador: $90k–$180k/mes        + IVA export 0% PERO crédito casi nulo
                                  (saldo técnico inmovilizado, SIR caro)
                                + carga administrativa mensual
─────────────────────          ──────────────────────────────────
Presión efectiva ~15,3%        Presión efectiva >30–35%
```

El código suma RI completo y lo compara contra la cuota de monotributo; el modelo explica. El break-even se expresa en pesos/mes.

---

## 5. Condiciones que ROMPEN la tesis (acá SÍ se analiza el salto)

La tesis "mantener monotributo" **no es universal**. Cinco condiciones específicas habilitan el análisis del salto. Cuando una de éstas aparece, el specialist abre el costeo en serio (y casi siempre escala a contador — Nivel 2/3).

### (1) Clientes locales corporativos que exigen Factura A

Presión **comercial**, no fiscal. Una empresa AR que necesita descargar el crédito fiscal de IVA exige Factura A — que el monotributista no puede emitir. Si una porción relevante de la facturación es local-corporativa y el cliente condiciona la relación a recibir Factura A, el salto a RI puede justificarse por retención del cliente aunque fiscalmente no convenga. Determinístico por canal: cliente que exige A → no resuelve el monotributo.

### (2) Gastos deducibles > 50% de los ingresos

Si el freelancer terceriza equipo, tiene oficina facturada con A, o compra equipamiento significativo, la base de Ganancias del RI se achica fuerte (la GNSI = ingresos − gastos − deducciones personales). Con gastos deducibles altos, el RI puede pagar menos Ganancias que la cuota fija de monotributo en tramos altos. Umbral de análisis: **gastos deducibles > 50% de ingresos** → modelar el RI aunque no sea obligatorio. El tipo de cliente modula el valor del crédito fiscal de IVA del RI.

### (3) Proyección > $120M/año → evaluar SAS/SRL a Ganancias 25% fija

Persona física tributa Ganancias progresiva hasta **35% marginal**. Una **SAS/SRL** tributa Ganancias societarias a una **tasa fija del 25%** (sobre utilidad neta). Para proyecciones que superen sostenidamente **$120M/año**, vale comparar persona física-RI (hasta 35%) contra estructura societaria (25% fija) — con el costo agregado de compliance societario (contador $340k–$400k/mes ⚠, DDJJ societarias, IIGG). Decisión estructural → **Nivel 3** (abogado tributarista + contador). El specialist nombra la opción y escala; no resuelve la constitución societaria.

### (4) Ingresos mixtos que empujan al tope

Local + exterior. La categoría del monotributo se calcula sobre **toda** la facturación que computa, pero el **total facturado no puede exceder el tope de cat K**. Si la combinación de ingresos locales (Factura C, computan) + exportación empuja el rolling-12 contra el límite de cat K, el exportador queda excluido antes y RI deja de ser opcional. Tratar como **condición de borde**: la interpretación oficial de ARCA sobre si las Facturas E computan al límite de categoría máxima es la restrictiva (computan); estudios contables sostienen lo contrario, sin RG que lo zanje. **Escalar en casos límite** (Nivel 2).

### (5) Cat J–K con volatilidad de ingresos → FCE-UBA recomienda SRL

Contra-evidencia que acota el "casi todos los tramos": el **FCE-UBA** (Facultad de Ciencias Económicas, UBA) concluye que la cuota fija del monotributo alto es **"muy gravosa" ante caídas de ventas** — el monotributista paga $1.381.687,90/mes aunque facture poco ese mes, mientras el RI/SRL paga sobre renta real. En **cat J–K con ingresos volátiles**, abrir el análisis societario (SRL al 25%). La recomendación "mantener monotributo" deja de ser automática cuando el ingreso es alto Y errático.

---

## 6. Mecánica del salto (cuando se decide saltar)

### Veda de reingreso

> Quien renuncia o es excluido del monotributo y pasa a RI **no puede volver al monotributo por 3 años** (veda de reingreso). El salto es, en la práctica, una decisión de varios años. Pesa fuerte en el veredicto: no es reversible al semestre siguiente.

### Trámite de alta RI (reconfiguración completa)

1. **Baja del monotributo** — portal ARCA con clave fiscal.
2. **Alta en Ganancias** (Sistema Registral) como persona humana.
3. **Alta en IVA** como sujeto que realiza operaciones exentas (exportación = tasa cero, igual se inscribe).
4. **Alta en autónomos** (régimen previsional, categoría por rentabilidad proyectada).
5. **Reconfigurar los puntos de venta** de facturación electrónica (PV de exportación E + el resto).

El salto con impuesto pendiente, la exclusión/recategorización de oficio, la constitución de SAS/SRL y el recupero de IVA vía SIR son **Nivel 2/3** (contador obligatorio / abogado tributarista — ver `rules.md` → `## Escalation triggers`). El specialist prepara el Reviewer Brief; el contador firma.

---

## 7. Notas de calibración y re-validación

- **Calibración: junio 2026** (datos al 22/06/2026).
- **Re-validar post-15-jul-2026:** ARCA publica la nueva tabla de monotributo (Ago2026–Ene2027, est. +14–17%) y la **escala de Ganancias jul–dic 2026**. Las cifras de Ganancias de §2.3 quedan desactualizadas para liquidaciones del 2º semestre.
- **Flags `⚠ verificar` abiertos en este archivo:**
  - Autónomos cat IV/V: pisos ">$231k / >$318k" aproximados — re-tomar del PDF oficial ARCA jun-2026.
  - Contador RI/SAS $250k–$400k/mes: estimación de mercado / testimonio anecdótico, no validada. Núcleo de trabajo = $120k–$200k/mes; pedir presupuesto real a un contador AR para anclar.
  - Si las Facturas E computan al tope de cat K (condición (4)): postura conservadora ARCA = computan; sin RG que lo zanje → escalar casos límite.
- **No inventar cifras.** Cualquier número que `reference/` no tenga vigente → flaggear y derivar al contador. Nunca fabricar un umbral, alícuota o tramo.

## Cross-references

- Output contract: [`../rules.md`](../rules.md)
- Categorías y cuotas monotributo: `categorias-monotributo.md` (cat K tope $108.357.084,05 / cuota servicios $1.381.687,90)
- Glosario de términos: [`./glossary.md`](./glossary.md)
- Cifras fuente consolidadas: `../../research/cifras-fiscales.md`
- Triangulación (fuente de verdad ante discrepancias): `../../research/triangulacion.md`
