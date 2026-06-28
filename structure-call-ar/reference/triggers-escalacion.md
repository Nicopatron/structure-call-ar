# Triggers de escalación — cuándo la decisión deja de ser del operator

Este es el archivo que encodea la tesis: **el trigger es determinístico (lo decido yo), la elección estructural compleja escala.** Un specialist que sabe dónde termina su jurisdicción es más confiable que uno que opina sobre todo.

No es un disclaimer al pie. Es la sección que carga el peso de cada output. El árbol tiene **tres niveles, no es binario** — y la regla operativa es: **escalo UNA SOLA VEZ cuando un trigger se enciende, no "consultá tu contador" en cada línea.** Repetirlo en cada output es teatro de compliance que destruye la utilidad.

**Calibración: junio 2026.** Re-validar post-15-jul-2026 (nueva tabla de monotributo + escala de Ganancias jul-dic 2026). Las cifras vienen de la triangulación de tres fuentes independientes (ver `research/triangulacion.md` — fuente de verdad cuando difieren).

---

## El árbol de 3 niveles (índice rápido)

| Nivel | Quién decide | Mi rol | Qué dispara |
|-------|--------------|--------|-------------|
| **Nivel 1 — DIY informado** | Yo (el specialist) | Resuelvo y me comprometo a la posición | Emitir Factura E · recategorización voluntaria · alta inicial sin deuda · categorizar con ingresos 100% exterior · plan de pagos simple |
| **Nivel 2 — Contador obligatorio** | El contador (decide/firma) | Preparo el **Reviewer Brief**, no resuelvo | Paso a RI · exclusión/recat de oficio · ingresos mixtos con tope ambiguo · alta IIBB/CM · requerimiento electrónico ARCA · Ganancias anual como RI · recupero IVA SIR · deuda preexistente al cambiar de régimen · SAS/SRL |
| **Nivel 3 — Abogado tributarista** | El abogado (litigio/decisión irreversible) | **Flag and stop** — marco y paro | Determinación de oficio (Art. 17) · ejecución fiscal · causa penal · defensa de exclusión ante la Cámara · cambio de residencia fiscal / LLC exterior · REIBP/blanqueo · activos significativos en el exterior |

**Regla de subsunción:** si una situación califica en dos niveles, gana el más alto. Una exclusión de oficio que ya tiene determinación de oficio formal (Art. 17) es Nivel 3, no Nivel 2.

---

## Nivel 1 — DIY informado (el specialist resuelve)

Estas son las situaciones donde el trigger es **determinístico** y la respuesta no depende de hechos que no puedo ver. Las resuelvo, me comprometo a la posición, muestro la aritmética. No escalo.

| Situación | Por qué es Nivel 1 | Confianza |
|-----------|--------------------|-----------|
| **Emitir Factura E** (exportación de servicios) | Determinístico por *aprovechamiento económico*: usado en el exterior = E, usado en AR = C. El folder dicta el if/then; yo redacto. | HIGH |
| **Recategorización voluntaria** | Aritmética sobre los ingresos brutos de los 12 meses móviles + el parámetro más restrictivo (ingresos/energía/alquiler/m²) contra la tabla de `reference/categorias-monotributo.md`. Leo el número, hago la cuenta, digo el mes. | HIGH |
| **Alta inicial sin deuda** | Registro nuevo, sin pasivo fiscal previo. La categoría se determina por el rolling-12 proyectado. | HIGH |
| **Categorizar con ingresos 100% exterior** | Determinístico: los cobros por exportación con Factura E **computan** a los ingresos brutos para *categorizar* como cualquier ingreso (los ingresos del exterior se consideran en la recategorización). Lo resuelvo con la conversión a ARS al BNA y la comparación contra la tabla. | HIGH |
| **Plan de pagos simple** | Plan de facilidades estándar sobre deuda corriente, sin determinación de oficio de por medio. | HIGH |

**Matiz que rompe el Nivel 1 (lo subo a Nivel 2):** la categorización con export es determinística (las E computan a los ingresos brutos), pero **el total facturado no puede exceder el tope de exclusión de Cat K** ($108.357.084,05/año, vigente Feb–Jul 2026). La interpretación oficial de ARCA es la restrictiva. Si el usuario está cerca de ese límite con ingresos mixtos → es Nivel 2 (tope ambiguo), no Nivel 1.

⚠ verificar: si las Factura E computan contra el **tope de exclusión** de la categoría máxima (cat K). ARCA sostiene que SÍ (lectura restrictiva, la que adopto). Estudios contables (Contablix, Piacentini) sostienen que no. No hay RG que lo zanje. (La categorización normal sí las computa, eso está zanjado.) En casos límite escalo a contador.

---

## Nivel 2 — Contador obligatorio (preparo el Reviewer Brief, el contador decide/firma)

Acá la elección es **el problema complejo, no el trigger**: depende de la estructura de gastos completa, deducciones familiares, planes de negocio — hechos que no veo. Preparo el caso (el Reviewer Brief), el contador firma la DDJJ. No pretendo ser el profesional.

| Situación | Plazo crítico | Qué prepara el Reviewer Brief |
|-----------|---------------|-------------------------------|
| **Paso a RI** | — | Costeo RI vs quedarse (cuota monotributo vs autónomos + contador + Ganancias sobre renta neta), break-even en pesos/mes |
| **Exclusión o recat *de oficio*** | **Apelación 15 días hábiles** | Qué datos usó ARCA (compras, tarjetas, acreditaciones), base del descargo |
| **Ingresos mixtos con tope ambiguo** | — | Facturación local (Factura C, suma al tope) vs exterior (Factura E, criterio ARCA), exposición real al límite |
| **Alta IIBB / Convenio Multilateral** | — | Jurisdicciones involucradas, tratamiento por provincia (exento/no gravado/excluido de base), coeficiente CM |
| **Respuesta a requerimiento electrónico ARCA** | El que fije el requerimiento | El requerimiento textual + documentación a adjuntar |
| **Ganancias anual como RI** | Vencimiento DDJJ | Renta neta del período, deducciones, escala Art. 94 LIG |
| **Recupero de IVA (SIR)** | — | Requiere **informe especial de contador certificado por el Consejo** (RG 5173/22). No es un trámite que yo resuelva. |
| **Deuda preexistente al cambiar de régimen** | — | El pasivo fiscal a la fecha del cambio, su tratamiento |
| **SAS / SRL** | — | Análisis societario: Ganancias 25% fija (sociedad) vs persona física hasta 35% |

### Detalle de los plazos y figuras del Nivel 2

**Exclusión vs recategorización de oficio — son dos procesos distintos** (no confundirlos):

- **Recat de oficio:** ARCA te recategoriza a una categoría superior. Sanción: hasta **50% del impuesto integrado omitido**, reducible a la mitad si aceptás la recat de oficio dentro de los **15 días hábiles**, y eximible si regularizás *antes* de la notificación.
- **Exclusión de oficio:** salida forzosa del monotributo, retroactiva a la causal. Genera deuda de IVA + Ganancias + autónomos del período, con intereses. Apelación: **15 días hábiles.**

**Jurisprudencia de defensa (Nivel 2/3 según la etapa):** Cámara CAF Sala V (abr-2026) — en una exclusión de oficio retroactiva, el excluido **SÍ puede computar el crédito fiscal IVA** de las compras del período retroactivo (doctrina de realidad económica, "enriquecimiento sin causa" del fisco). Es una herramienta de defensa que el contador/abogado usa; yo la señalo, no la ejecuto.

⚠ verificar: número de inciso del Código Fiscal en cada jurisdicción IIBB. Se renumeran por T.O./año (CABA cita art. 180 inc. 22 o art. 303 inc. 22 según el año). Cito la regla de fondo (exento/no gravado/excluido de base), no el inciso.

---

## Nivel 3 — Abogado tributarista (flag and stop)

Acá no preparo un brief para que alguien firme una DDJJ. **Marco la situación, explico por qué es litigio o decisión irreversible, y paro.** Estas son las únicas situaciones donde el specialist deja de producir un output de análisis y deriva en seco.

| Situación | Por qué es Nivel 3 |
|-----------|--------------------|
| **Determinación de oficio (Art. 17 Ley 11.683)** | Procedimiento formal con vista al contribuyente. Es contencioso. |
| **Ejecución fiscal** | El fisco ya ejecuta una deuda firme. Litigio. |
| **Causa penal** | Ley Penal Tributaria. Defensa penal especializada. |
| **Defensa de exclusión de oficio ante la Cámara** | Etapa judicial (la Cámara CAF), no administrativa. |
| **Cambio de residencia fiscal / LLC en el exterior** | Decisión irreversible con efectos plurianuales (CRS/FATCA, doble imposición). |
| **REIBP / blanqueo** | El REIBP (Régimen Especial Bienes Personales, Ley 27.743) es pago adelantado 2023–2027 con **estabilidad fiscal hasta 2038** — decisión plurianual irreversible. Blanqueo idem. |
| **Activos significativos en el exterior** | Riesgo de Incremento Patrimonial No Justificado (CRS Europa/Caribe + FATCA EE.UU. reportan saldos no declarados a ARCA). |

---

## NO alarmar con riesgo penal — esto es load-bearing

El error más fácil de cometer (y el que destruye la confianza del usuario) es asustar con cárcel. El umbral real lo desmiente.

### El umbral penal de la Ley 27.799 ("Inocencia Fiscal", BO 02-01-2026)

> **$100.000.000 POR CADA TRIBUTO Y POR CADA EJERCICIO, de forma independiente. NO acumulable entre impuestos.**

No se suma IVA + Ganancias para "llegar" al umbral. Cada tributo se mide solo, cada ejercicio se mide solo.

**Para un freelancer exportador esto es prácticamente inalcanzable:**
- La exportación de servicios es **IVA tasa cero** (Art. 8 inc. d + Art. 43 Ley 23.349). Débito fiscal $0 → no hay IVA que evadir en la exportación.
- Llegar a $100M de evasión en un solo tributo, en un solo ejercicio, a niveles de ingreso típicos de un freelancer, es casi imposible.

**El riesgo real es ADMINISTRATIVO, no penal:** exclusión de oficio, multas, deuda de IVA/Ganancias retroactiva. Eso es lo que hay que vigilar. El riesgo penal tributario es marginal para freelancers en este rango.

### Separar las dos sanciones (no mezclarlas)

Son cosas distintas y confundirlas exagera el riesgo:

| Sanción | Norma | Monto / regla | Qué la dispara |
|---------|-------|---------------|----------------|
| **Multa por DDJJ determinativa omitida** | Art. 38 Ley 11.683 | **$220.000** | No presentar la DDJJ determinativa. La omisión ya no es barata. |
| **Sanción por no recategorizar** | Régimen monotributo | Hasta **50% del impuesto integrado omitido** · reducible a la mitad si aceptás la recat de oficio en **15 días hábiles** · eximible si regularizás antes de la notificación | No recategorizar a tiempo cuando correspondía |

La multa de $220.000 (Art. 38) **NO es** la sanción por no recategorizar. Son dos cosas. Citar el monto correcto a la situación correcta.

### Cambios pro-contribuyente de la Ley 27.799 (mencionar para calibrar el miedo)

La misma ley que fija el umbral trajo alivios reales:

- **Prescripción reducida a 3 años** para contribuyentes cumplidores (antes 5/10).
- **Aviso previo de 10–15 días hábiles** antes de aplicar una multa (oportunidad de regularizar).
- **Extinción de la acción penal** por pago de deuda + intereses + 50%, dentro de los **30 días**, por **única vez**.

El mensaje al usuario no es "tené miedo de la cárcel". Es: "el riesgo es administrativo, es gestionable, y la ley 2026 te da ventanas para regularizar antes de la sanción".

---

## El Reviewer Brief — spec del memo para el contador

Cuando se enciende un trigger de **Nivel 2**, no escalo con un "andá a tu contador" genérico. Genero el **Reviewer Brief**: un memo estructurado que el usuario lleva a su contador para que la reunión sea de 10 minutos, no de una semana. **Este es el output diferencial** — convierte el límite del AI en valor.

Va después de la Trazabilidad de la Decisión, separado por `---`, en los modos STRUCTURE y TRANSITION.

```
## Reviewer Brief — para tu contador (guardalo en tu carpeta AR-fiscal/2026/)

PERÍODO: [ventana rolling-12]
RÉGIMEN ACTUAL: [cat / RI]
FACTURACIÓN USD DEL PERÍODO: [USD total] valuado a BNA [tipo, fecha] = [ARS]
POSICIÓN vs TOPE: [tope de la cat en ARS] — headroom [ARS] — tier [VERDE/AMARILLO/ROJO]
PROYECCIÓN A FIN DE SEMESTRE: [ARS] → [cruza/no cruza] el tope en [mes]
EXPOSICIÓN BIENES PERSONALES: [si aplica: bienes vs MNI $384.728.044,57]
DECISIÓN PROPUESTA: [veredicto estructural]
PREGUNTAS PARA EL CONTADOR: [las 2-3 preguntas exactas a llevar]
PRÓXIMAS FECHAS ARCA: [ventana de recategorización, fechas de DDJJ]
PUNTOS A VERIFICAR: [cualquier ítem de reference flaggeado "verificar"]
```

**Reglas del Reviewer Brief:**
- Las etiquetas siguen la regla atómica de idioma (input en español → etiquetas en español).
- El campo `EXPOSICIÓN BIENES PERSONALES` se compara contra el MNI 2025 = **$384.728.044,57** (casa-habitación $1.346.548.155,99). Solo aparece si el usuario tiene patrimonio relevante.
- `PUNTOS A VERIFICAR` arrastra los flags `⚠ verificar` que tocaron el análisis. No se esconden.
- Las `PREGUNTAS PARA EL CONTADOR` son las exactas, no genéricas. "¿Las Factura E que emití computan al tope de mi categoría máxima en mi caso?" es una pregunta; "¿estoy bien?" no lo es.

---

## La regla de oro: escalar UNA vez, no en cada línea

- Escalo cuando un trigger de `## Escalation triggers` se enciende. **Una sola vez por situación.**
- No repito "consultá tu contador" en cada sección. Eso es teatro de compliance que destruye la utilidad y entrena al usuario a ignorar la escalación real.
- Cuando ningún trigger está activo hoy, lo digo explícito: *"ningún trigger de handoff activo hoy; lo estará si [condición]"*.
- El override del intake gate (`"dame el best-effort con lo que tengo"`) **nunca levanta un trigger de escalación obligatorio.** El usuario puede pedirme que adivine cifras; no puede pedirme que no escale una exclusión de oficio.

---

## Cifras de referencia usadas en este árbol (calibración jun-2026)

| Cifra | Valor | Fuente | Estado |
|-------|-------|--------|--------|
| Umbral penal (por tributo, por ejercicio, no acumulable) | $100.000.000 | Ley 27.799, BO 02-01-2026 | Confirmado |
| Multa DDJJ determinativa omitida | $220.000 | Art. 38 Ley 11.683 | Confirmado |
| Sanción por no recategorizar | Hasta 50% del integrado omitido (reducible a la mitad / eximible) | Régimen monotributo | Confirmado |
| Plazo apelación exclusión/recat de oficio | 15 días hábiles | Procedimiento ARCA | Confirmado |
| Aviso previo a multa (Ley 27.799) | 10–15 días hábiles | Ley 27.799 | Confirmado |
| Prescripción cumplidores (Ley 27.799) | 3 años | Ley 27.799 | Confirmado |
| Extinción acción penal | Pago deuda + intereses + 50% en 30 días (única vez) | Ley 27.799 | Confirmado |
| Tope Cat K (límite máximo facturación) | $108.357.084,05/año | ARCA, tabla Feb–Jul 2026 | Confirmado · ⚠ stale post-15-jul-2026 |
| MNI Bienes Personales 2025 | $384.728.044,57 | ARCA, publicado ene-2026 | Confirmado |
| Recupero IVA SIR | Requiere informe especial de contador certificado por el Consejo | RG 5173/22 | Confirmado |
| Crédito fiscal IVA en exclusión retroactiva | Computable (realidad económica) | Cámara CAF Sala V, abr-2026 | Confirmado (jurisprudencia) |
| REIBP — estabilidad fiscal | Hasta 2038 (pago adelantado 2023–2027) | Ley 27.743 | Confirmado |

⚠ verificar (no citar como cifra dura sin confirmar contra norma a la fecha de operar):
- Si las Factura E computan al tope de la categoría máxima (ARCA: SÍ / estudios: NO / sin RG que lo zanje).
- Números de inciso del Código Fiscal por jurisdicción IIBB (se renumeran por T.O./año).
- La cifra exacta de la sanción por no recategorizar en pesos (la regla del 50% es firme; el piso/techo en pesos varía).

---

**Calibración: junio 2026 (datos al 22/06/2026).** Re-validar: (1) post-15-jul-2026 — ARCA publica la tabla de monotributo Ago2026–Ene2027 (tope Cat K stale después de esa fecha) y la escala de Ganancias jul-dic 2026; (2) antes de usar para un caso real — confirmar con contador los puntos flaggeados. Ver `research/triangulacion.md` para la resolución de discrepancias entre fuentes.
