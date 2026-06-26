# Intake Checklist — los 6 inputs estructurales

Lo que necesito saber antes de emitir un veredicto. Esto es el **gate de intake estructural** que cita `rules.md` (`## Intake Gate — the 6 structural inputs`). No es el intake de routing per-invoice de un coach de cobro (ese pregunta "¿qué canal de pago?" por cada factura); este pregunta seis cosas una vez, porque determinan la *estructura* fiscal, no el ruteo de un pago puntual.

La diferencia importa: un input estructural cambia **qué régimen te corresponde, en qué categoría caés, y cuándo cruzás un tope**. Un input de routing cambia "por dónde te conviene cobrar este giro". Si me piden lo segundo, no es mi jurisdicción.

Cada input abajo trae: **qué es**, **por qué es estructural** (qué decisión rompe si falta), **qué señal cuenta como presente**, y **qué parece débil o falta**.

**Calibración: junio 2026.** Las cifras de tope/categoría que aparecen acá son de la tabla monotributo **Feb–Jul 2026** (vigente 01/02–31/07/2026). ARCA publica la tabla Ago2026–Ene2027 ~15-jul-2026 (estimación +14–17%, no oficial) — **después de esa fecha, re-validar los topes contra `reference/categorias-monotributo.md` antes de categorizar.**

---

## Por qué seis y no más

Cada uno de los seis mueve una decisión que el modelo **no puede adivinar sin error costoso**. Faltando uno, el veredicto se vuelve un supuesto; faltando cuatro, el veredicto es ruido con tono de certeza. El gate existe para que el specialist **no responda con confianza sobre data fina** — el anti-pattern central de las tax tools genéricas.

| # | Input | Decisión que rompe si falta |
|---|-------|------------------------------|
| 1 | Régimen actual | Sin esto no sé si analizo permanencia (monotributo), salto (RI), o registro inicial (no inscripto). |
| 2 | Facturación últimos 12 meses móviles | Es el numerador del cálculo de categoría y del headroom al tope. Sin esto no hay aritmética. |
| 3 | Proyección 6–12 meses | La decisión estructural es forward-looking. Sin proyección no hay *mes de cruce*, no hay timing. |
| 4 | % al exterior + tipo de contraparte | Determina `Factura E` vs `C`, el tratamiento IIBB, y la exposición real al tope. |
| 5 | Jurisdicción IIBB | El tratamiento es radicalmente distinto por provincia. Pronunciarse sin saberla es adivinar. |
| 6 | Status del contador | Define a quién escalo y si ya hay un profesional en el loop. |

---

## Input 1 — Régimen actual

**Qué es.** En cuál de tres estados está hoy el contribuyente: **monotributo** (con su categoría A–K), **Responsable Inscripto (RI)**, o **no inscripto**.

**Por qué es estructural.** Es el punto de partida del árbol entero. Cambia el *modo* (`rules.md → ## Mode Triage`): monotributo → analizo permanencia y mes de cruce (modo STRUCTURE); RI → analizo si quedarse o si hubo un salto que conviene revertir (modo TRANSITION); no inscripto con ingresos entrando → **subruta Registration-First** (guía de alta de 1 página antes de cualquier análisis estructural). Sin el régimen actual, no sé qué herramienta del folder aplica.

**Qué cuenta como señal presente.**
- Categoría explícita: "estoy en monotributo cat F".
- Régimen sin categoría: "soy monotributista" (la categoría la **deduzco** del Input 2 si me dan facturación — eso no debilita este input, lo completa).
- "Soy responsable inscripto" / "estoy en RI" / "facturo con Factura A".
- "No estoy inscripto todavía / recién empiezo / voy a empezar a facturar".

**Qué parece débil o falta.**
- "No sé en qué estoy" sin ningún proxy → débil.
- "Pago un monto fijo por mes a la AFIP" → señal de monotributo, contá como presente (categoría a deducir).
- Si dice "no inscripto" **con ingresos ya entrando** → no es refusal estándar: disparo la subruta **Registration-First** (alta de monotributo, categoría por rolling-12 proyectado, setup de PV `Factura E`), y el análisis estructural viene *después* del alta.

---

## Input 2 — Facturación últimos 12 MESES MÓVILES

**Qué es.** Total facturado en los **12 meses móviles previos** (no los 3 últimos, no el año calendario), en ARS — o en USD con el tipo de cambio aproximado para que yo convierta.

**Por qué es estructural.** Es el numerador de todo: la categoría de monotributo se determina por **ingresos brutos de los últimos 12 meses móviles** (la recategorización de febrero mira hasta diciembre; la de agosto mira hasta junio). Es también el numerador del *headroom* contra el tope. Sin este número no hay categoría, no hay distancia al tope, no hay tier de alerta.

> ⚠ **Corrección que el specialist debe encodear:** la base de la recategorización son **12 meses móviles**, NO "los últimos 6 meses". Es un error de cálculo común (confundir el período semestral de la *ventana* con la *base*). La ventana de recat es semestral (vencimientos 5 de febrero y 5 de agosto); la base que se suma es de 12 meses. Fuente: ARCA, mecánica de recategorización (triangulado en las 3 fuentes de research).

**Conversión USD→ARS (regla dura).** La categoría se mide por facturación en **ARS** valuada al **BNA comprador del cierre del día hábil cambiario anterior** a cada emisión (este es el TC para el *tope del monotributo* — distinto del BNA vendedor que se usa para *emitir* la Factura E; ver Input 4 y `rules.md`). Para el intake, una conversión aproximada al BNA del momento alcanza para clasificar; el número fino lo arma el contador en el Reviewer Brief.

⚠ **Riesgo FX que siempre se surfacea para quien cobra USD:** una devaluación del peso empuja a una categoría superior **sin crecimiento real**. El que factura USD estable puede cruzar de categoría solo por el movimiento del TC. → monitoreo mensual recomendado, recalculando contra el BNA del día. (TC de referencia jun-2026: mayorista A3500 ~$1.457; rango conservador ARS 1.450–1.480 por USD. Fuente: BCRA Com. A3500, cierre 22/06/2026.)

**Qué cuenta como señal presente.**
- Número directo: "facturé $48M en los últimos 12 meses".
- USD con TC: "~USD 4.000/mes, dólar a ~$1.450" (yo anualizo y convierto).
- **Un rango es aceptable:** "entre USD 3K y 4K por mes" cuenta como presente — uso el extremo *conservador* (el más alto, porque más facturación = más exposición al tope; ver regla de sesgo conservador).
- Prosa con el dato adentro: "cobro tres lucas verdes por mes hace un año" → presente.

**Qué parece débil o falta.**
- "Facturo bastante" / "me va bien" sin magnitud → falta.
- Solo el último mes ("este mes facturé X") sin el acumulado ni regularidad → débil (no es rolling-12; pedir el acumulado o la regularidad).
- Facturación de "este año calendario" cuando estamos a mitad de año → débil (no es rolling-12; ajustar o pedir aclaración).

---

## Input 3 — Proyección 6–12 meses

**Qué es.** Hacia dónde va la facturación: pipeline conocido, un proyecto grande que cierra, estacionalidad (meses fuertes/flojos), un cliente que se cae o uno nuevo que entra.

**Por qué es estructural.** La decisión estructural es **forward-looking**. El valor del specialist no es "hoy estás en cat H" (eso lo dice cualquier calculadora) — es **"vas a cruzar el tope de cat H en septiembre"**. Sin proyección no hay *mes de cruce*, y sin mes de cruce no hay timing de recategorización proactiva ni de salida voluntaria anticipada. El núcleo determinístico del modo STRUCTURE (`## Proyección y Punto de Cruce`) depende de este input.

⚠ **Estacionalidad — no proyectar lineal.** Si la facturación es irregular (bonos de fin de año, proyectos puntuales, meses muertos), una proyección lineal da falsos positivos/negativos de cruce. Preguntar si el flujo es parejo o estacional antes de anualizar.

**Qué cuenta como señal presente.**
- Pipeline explícito: "tengo un proyecto de USD 20K que cierra en marzo".
- Tendencia: "vengo creciendo ~10% por mes" / "estable hace un año".
- Estacionalidad declarada: "diciembre y enero facturo el doble".
- "No espero cambios, sigue igual" → cuenta como presente (proyección = plano).

**Qué parece débil o falta.**
- Silencio total sobre el futuro → falta (pero si el resto está sólido, puedo **asumir flujo constante = la facturación actual** como default conservador, flaggeando `⚠ supuesto: proyección plana, sin pipeline informado`).
- "No tengo idea de cómo va a venir" con facturación cerca del tope → débil y caro (cerca del tope, la proyección es la que define si hay exclusión inminente).

---

## Input 4 — % al exterior + tipo de contraparte

**Qué es.** Qué porción de la facturación es **exportación de servicios** (cliente del exterior, servicio **aprovechado/utilizado en el exterior**) vs clientes **locales AR**. Y quién es la contraparte: empresa extranjera genuina, plataforma (Deel/Upwork/Wise/Payoneer), o cliente AR.

**Por qué es estructural.** Determina tres cosas a la vez:
1. **`Factura E` vs `Factura C`** — el criterio es el **aprovechamiento económico**: usado en el exterior → `Factura E` (exportación, IVA 0%); usado en Argentina → `Factura C` (mercado interno, suma al tope, paga IIBB). Es **determinístico por criterio de aprovechamiento**, no por nacionalidad del cliente.
2. **Tratamiento IIBB** — la exportación de servicios está exenta / no gravada / excluida de base según provincia (Input 5); el cliente local sí tributa.
3. **Exposición real al tope** — los cobros de exportación con `Factura E` no te empujan de categoría a categoría a efectos de *categorizar*; pero el total facturado no puede exceder el tope de **cat K** ($108.357.084,05 anual, vigente Feb–Jul 2026).

> ⚠ **Condición de borde que el specialist trata con sesgo conservador, no como certeza:** si las `Factura E` computan o no al tope del monotributo es zona gris. **La interpretación oficial de ARCA es la restrictiva** ("los monotributistas pueden exportar sin superar los límites de la categoría máxima" → las E cuentan contra el límite de cat K). Estudios contables sostienen lo contrario, pero **no hay RG que lo zanje.** Regla: tomar la lectura conservadora (cuentan contra el límite de cat K) y **escalar los casos límite a contador.** Nunca decir "exportá libre, no hay tope". Fuente: interpretación ARCA + `research/triangulacion.md`.

**Edge case central (determinístico).** Si la empresa extranjera usa el servicio **para operar en Argentina** (ej: cliente español con operación en Buenos Aires), **NO es exportación** → `Factura C`, suma al tope, paga IIBB. El criterio es *dónde se aprovecha*, no *dónde está el cliente*.

**Qué cuenta como señal presente.**
- Porcentaje directo: "100% al exterior" / "70% afuera, 30% clientes de acá".
- Descriptivo claro: "todos mis clientes son de EE.UU., yo trabajo desde acá" → 100% exterior, presente.
- Plataforma nombrada: "cobro todo por Deel" / "me pagan por Wise" → presente, con caveat de plataforma (ver abajo).
- Hedging sobre un hecho determinístico: "creo que exporto todo, mis clientes están afuera" → **cuenta como presente** (el hecho es determinísticamente verdadero; el hedge no lo debilita).

**Qué parece débil o falta.**
- "Tengo clientes" sin decir de dónde → falta (no sé si es export o local).
- Mezcla sin proporción: "algunos de acá, otros de afuera" sin %  → débil (pedir la proporción aproximada; afecta el tope y el IIBB).
- ⚠ **Deel como EOR (Employer of Record):** si "recibe salario de Deel" como relación de dependencia formal → puede **NO** corresponder `Factura E` (no es exportación, es vínculo laboral). Análisis caso por caso → escalar, no asumir exportación.

---

## Input 5 — Jurisdicción IIBB

**Qué es.** En qué jurisdicción provincial tributa Ingresos Brutos: **CABA / PBA / Córdoba / Santa Fe / Mendoza / otra**, o **Convenio Multilateral** (actividad en más de una jurisdicción).

**Por qué es estructural.** El tratamiento de la exportación de servicios en IIBB es **radicalmente distinto por provincia** — y la diferencia no es cosmética, son figuras jurídicas con efectos prácticos distintos. Pronunciarse sobre IIBB sin saber la provincia es adivinar. Por eso **pregunto la provincia ANTES de pronunciarme** sobre IIBB.

**Tratamiento por jurisdicción (calibración 2026 — cita la regla de fondo, NO el número de inciso):**

| Jurisdicción | Export. de servicios | En la práctica |
|---|---|---|
| **CABA** | **EXENTA** | Te das de alta, declarás mensual en E-SICOL como **exento**, pagás $0. La alerta "actividad no registrada" del sistema es falso positivo. Alíc. gral. servicios 2026: 3% (hasta ~$2.154M anuales) / 4,75% grandes contrib. |
| **PBA (ARBA)** | **NO GRAVADA** (fuera del objeto) | Padrón alícuota 0% en ARBA (RN 46/2019), pero exige actividad **exclusiva** de exportación. Con un solo cliente local, va como "no alcanzado" en la DDJJ general. Alíc. gral. servicios 2026: 3,5–4,5%. |
| **Córdoba** | **EXCLUIDA DE BASE** | No computa la exportación en la base imponible. Alíc. gral. servicios 2026: 4,75%. |
| **Santa Fe** | **NO GRAVADA** (exclusión de objeto) | No alcanza transporte, eslingaje, estibaje, depósito y conexas. Alíc. gral. servicios 2026: 4,5%. |
| **Mendoza** | **EXENTA** | Encuadrar bajo tratamiento "EXPORTACIONES" en la DDJJ para consolidar Tasa Cero. Alíc. gral. servicios 2026: progresiva ~3,5%. |

> ⚠ **Nunca hardcodear el número de inciso del Código Fiscal.** La numeración se renumera cada año/T.O. y las fuentes difieren (CABA: art. 180 inc. 22 según unas, art. 303 inc. 22 según otras). **Citar la regla de fondo** ("exento" / "no gravada" / "excluida de base"), no el inciso. Fuente: `research/triangulacion.md` ("se renumera; citar la regla, no el inciso").

> ⚠ **No simplificar a "exento" en copy.** "Exenta", "no gravada" y "excluida de base" tienen efectos prácticos distintos (alta obligatoria vs no, DDJJ vs no). Mantener la figura exacta de cada provincia. Las alícuotas exactas dependen del código de actividad (NAES/NAIIB).

**Convenio Multilateral.** Si la actividad/clientes están en **más de una jurisdicción** → inscripción en CM. Las **exportaciones son ingresos NO computables** (fuera del coeficiente de distribución; los gastos vinculados tampoco computan; RG CA 4/2017). El exportador exclusivo distribuye por gastos soportados. → trigger: clientes en >1 provincia → explicar CM y escalar el armado.

**Exención adicional (no confundir con la de exportación):** profesionales con **título universitario de grado, no organizados como empresa**, tienen exención propia en CABA, Córdoba y Santa Fe. Es **distinta** de la exención por exportación. Si aplica, sumarla; no fusionarla.

**Qué cuenta como señal presente.**
- Provincia nombrada: "estoy en CABA" / "tributo en provincia de Buenos Aires".
- Multi-jurisdicción declarada: "vivo en PBA pero tengo oficina en CABA" → señal de **Convenio Multilateral**, presente.
- "No estoy inscripto en IIBB todavía" → presente como dato (gatilla acción de alta según provincia).

**Qué parece débil o falta.**
- Silencio sobre provincia → **falta** (no me pronuncio sobre IIBB sin esto).
- "En Argentina" sin provincia → débil (IIBB es provincial; "Argentina" no alcanza).
- Provincia fuera de las 5 mapeadas (ej: Neuquén, Chaco) → presente como dato pero el tratamiento entra en **zona gris / riesgo contingente** → escalar a contador para confirmar el código fiscal vigente de esa provincia.

---

## Input 6 — Status del contador

**Qué es.** Si el contribuyente **tiene** contador, **no tiene**, o **lo consulta reactivo** (lo llama solo cuando ya hay un problema).

**Por qué es estructural.** Define **a quién escalo** y **si ya hay un profesional en el loop**. El specialist se posiciona como *preparación previa* a la reunión con el contador, no como reemplazo — en AR el visado de contador es obligatorio en la DDJJ. Si ya tiene contador, el Reviewer Brief va dirigido a esa persona y la escalación es "llevale esto"; si no tiene, parte de la acción con plazo es "conseguí uno antes de [fecha]"; si es reactivo, el specialist lo empuja a usarlo **proactivamente** (la recategorización proactiva ahorra el oficio).

**Qué cuenta como señal presente.**
- "Tengo contador" / "mi contadora me lleva todo" → presente.
- "No tengo, hago todo solo" → presente (gatilla el armado del handoff + recomendación de conseguir uno para los triggers Nivel 2/3).
- "Tengo uno pero lo llamo solo cuando hay quilombo" → presente (reactivo).

**Qué parece débil o falta.**
- Silencio sobre el contador → falta, pero es el **input más liviano**: puedo asumir **"sin contador en el loop"** como default conservador (genera el Reviewer Brief igual, dirigido a "el contador que designes"). Marcar `⚠ supuesto: sin contador informado`.

---

## Los tres outcomes del gate

Después de chequear los 6 inputs, el gate clasifica en uno de tres. Esto evita el anti-pattern central: **el AI respondiendo con confianza sobre data insuficiente.**

### 1. Classified — datos suficientes → veredicto completo

**Condición:** **0–1** inputs faltantes o débiles.

**Comportamiento:** veredicto estructural completo, sin flags de supuesto (o con un solo flag menor). El modo correspondiente (STRUCTURE / TRANSITION / SETUP-CHECK) corre entero. La confianza puede ser **HIGH** si el call es un *trigger determinístico* puro (aritmética sobre una cifra vigente de `reference/`).

### 2. Assumed — faltan algunos → default CONSERVADOR, flag por línea, confianza MEDIUM

**Condición:** **2–3** inputs faltantes o débiles.

**Comportamiento:** procedo, pero con el default **más conservador** para cada input faltante. **Cada línea asumida se flaggea** `⚠ supuesto: [qué]`. La confianza se **capa en MEDIUM** — nunca HIGH con un input asumido. El veredicto sigue siendo un veredicto (no un menú), pero el lector ve exactamente qué se asumió y puede corregirlo.

### 3. Needs Input — faltan 4+ → refusal, la respuesta es la pregunta

**Condición:** **4+** inputs faltantes o débiles.

**Comportamiento:** **no computo.** Devuelvo los inputs faltantes como una pregunta corta y puntual, en formato REFUSAL (≤200 palabras, sin preámbulo ni disculpas, en el idioma del usuario). **La respuesta es la pregunta.** No aparece ningún `## Veredicto`, ni siquiera parcial. Un veredicto adivinado cuesta un año de mis-categorización + multa + back-tax — mucho más que un mensaje de aclaración.

> **Override del usuario.** El usuario puede saltear el gate (`"dame el best-effort con lo que tengo"`). Entonces procedo, pero **cada línea adivinada** se marca `⚠ guessed — confirmá antes de actuar` y la confianza se capa en **REQUIRES_PROFESSIONAL**. **El override nunca levanta un trigger de escalación obligatorio** (esos son safety rules, no editables).

### Cómo cuenta "missing/weak" hacia el threshold

| Status | Definición | Peso hacia el threshold |
|--------|------------|:---:|
| **Presente** | Input dicho explícito O inferible determinísticamente de la prosa | 0 |
| **Parcial** | Input dicho a medias (ej. rango en vez de valor; "este mes" en vez de rolling-12) | 0,5 |
| **Débil** | Input con hedging sobre un hecho que NO es determinísticamente verdadero | 0,5 |
| **Falta** | Input no aparece en el transcript | 1,0 |

**Aritmética del threshold:** sumar parciales + débiles + faltantes. Total **≥4** → REFUSE (Needs Input). Total **2–3** → Assumed (flags + cap MEDIUM). Total **0–1** → Classified (output completo). Ejemplo: 1 parcial (rango USD) + 1 débil ("creo IIBB CABA") + 2 faltantes = 0,5 + 0,5 + 2,0 = 3,0 → Assumed.

| Inputs faltantes/débiles (peso) | Outcome | Confianza máx | Flags |
|:---:|---|:---:|---|
| 0–1 | **Classified** | HIGH (si trigger determinístico) | ninguno / 1 menor |
| 2–3 | **Assumed** | MEDIUM | `⚠ supuesto:` por línea |
| 4+ | **Needs Input** (REFUSAL) | — (no computa) | la respuesta es la pregunta |
| override "best-effort" | procede con todo | REQUIRES_PROFESSIONAL | `⚠ guessed` por línea |

---

## Conservative-bias rule (ante la duda, MÁS impuesto)

La regla de oro de todo default asumido:

> **Ante la duda, asumir MÁS exposición impositiva, nunca menos. Un contador corrige una posición conservadora; una agresiva es más difícil de deshacer.**

Aplicaciones concretas del sesgo:

- **Facturación en rango** (Input 2) → uso el extremo **alto** del rango (más facturación = más cerca del tope = más conservador).
- **`Factura E` y el tope** (Input 4) → asumo la lectura **restrictiva de ARCA** (las E cuentan contra el límite de cat K). Nunca digo "exportá sin tope".
- **Aprovechamiento ambiguo** (Input 4) → ante duda de si el servicio se usa en AR o en el exterior, inclino a `Factura C` + IIBB (la posición que paga más), y escalo.
- **Proyección ausente** (Input 3) → si asumo, asumo **flujo constante = facturación actual**, no un escenario optimista de baja.
- **IIBB en provincia no mapeada** (Input 5) → asumo **gravado / zona gris** hasta confirmar, no exento.
- **Contador ausente** (Input 6) → asumo **sin profesional en el loop** y armo el handoff igual.

El sesgo no es pesimismo: es que el costo asimétrico de errar (multa + deuda retroactiva por subestimar) supera al costo de una recomendación conservadora que el contador relaja después.

---

## Cómo parsear prosa narrativa

Los inputs **no tienen que venir en formato de formulario.** El usuario escribe en prosa; yo extraigo. Dos reglas de parseo:

**1. Un input en prosa cuenta como presente.** Si el dato está embebido en una oración, está presente — no pido que me lo repitan estructurado.

> "Soy dev, facturo unos tres mil dólares por mes a una agencia de Estados Unidos hace como un año, vivo en Córdoba y no tengo contador."

De esa sola línea extraigo: Input 1 (monotributo implícito — "facturo", categoría a deducir), Input 2 (~USD 3K/mes × 12 ≈ rolling-12 presente), Input 4 (100% exterior, contraparte agencia EE.UU. genuina → `Factura E`), Input 5 (Córdoba), Input 6 (sin contador). **Cinco de seis presentes** de una frase. Solo falta Input 3 (proyección) → outcome **Classified** (1 faltante) con supuesto de proyección plana.

**2. El hedging sobre un hecho determinístico NO lo debilita.** Si el usuario duda sobre algo que es determinísticamente verdadero, el hedge es psicológico, no fáctico — cuenta como presente.

> "Creo que exporto todo, no sé bien, pero todos mis clientes están afuera y el laburo lo usan ellos allá."

El "creo que" / "no sé bien" es hedging. Pero el hecho — clientes en el exterior, servicio aprovechado afuera — es **determinísticamente** una exportación. Input 4 cuenta como **presente** (100% exterior, `Factura E`). No bajo la confianza por el tono dubitativo del usuario sobre un hecho que el criterio resuelve.

**Contraejemplo (esto sí debilita):** si la duda es sobre un **hecho que yo no puedo resolver** ("no sé si el cliente usa el servicio acá o allá"), entonces sí es input débil → aplica sesgo conservador (inclino a `Factura C`) y escalo.

---

## Ejemplo trabajado (perfil → inputs → outcome)

| # | Input | Perfil A — "dev exportador" | Perfil B — "consulta vaga" | Perfil C — "mixto creciendo" |
|---|-------|------------------------------|------------------------------|-------------------------------|
| | **Prompt** | *"Soy dev, monotributo cat F, facturo ~USD 3.500/mes a un cliente de EE.UU. hace un año, en CABA, tengo contadora. ¿Estoy bien donde estoy?"* | *"¿Me conviene pasarme a responsable inscripto?"* | *"Monotributo, facturo ~USD 4K/mes afuera + $2M/mes a clientes de acá, vengo creciendo, en PBA, sin contador. ¿Me paso de tope?"* |
| 1 | Régimen actual | ✅ monotributo cat F | ❌ no dice | ✅ monotributo |
| 2 | Facturación 12m móviles | ✅ ~USD 3.500/mes × 12 = ~USD 42.000 anuales × $1.430 ≈ rolling-12 ~$60,1M ARS (calibrado jun-2026) | ❌ no dice | ✅ USD 4K + $2M/mes locales |
| 3 | Proyección 6–12m | ⚠ no dice → supuesto plano | ❌ no dice | ✅ "vengo creciendo" |
| 4 | % exterior + contraparte | ✅ 100% exterior, cliente EE.UU. genuino → `Factura E` | ❌ no dice | ✅ exterior + locales (proporción dada) |
| 5 | Jurisdicción IIBB | ✅ CABA (exenta) | ❌ no dice | ✅ PBA |
| 6 | Status contador | ✅ tiene contadora | ❌ no dice | ✅ sin contador |
| | **Inputs presentes** | **5 de 6** (falta proyección) | **0 de 6** | **6 de 6** |
| | **Outcome** | **Classified** | **Needs Input (REFUSAL)** | **Classified** |
| | **Confianza** | HIGH en el trigger (rolling-12 ~$60,9M vs tope cat F $38,6M → ya excedido por exportación: ver nota); 1 supuesto de proyección flaggeado | — (no computa) | MEDIUM → REQUIRES_PROFESSIONAL en el borde (ingresos mixtos, tratamiento `Factura E` vs tope ambiguo → escala) |
| | **Qué hace el specialist** | Calcula rolling-12 en ARS; nota que la facturación de exportación supera el tope nominal de cat F → revisa si las E empujan categoría (lectura conservadora: contra el límite de cat K, no entre categorías) → veredicto STRUCTURE con tier y mes de cruce contra cat K; `⚠ supuesto: proyección plana`. Reviewer Brief a la contadora. | Devuelve los 6 inputs como pregunta. "Necesito régimen, facturación 12m, proyección, % exterior, provincia y si tenés contador antes de decirte si te conviene RI." | Categoría se calcula SOLO sobre los ~$24M/año **locales** (cat H aprox., cuota ~$447k/mes). El total facturado no puede exceder el tope cat K (sesgo conservador). Las E a exterior son zona de criterio ARCA → flaggear y escalar. IIBB PBA: padrón 0% exige exclusividad → con cliente local va "no alcanzado". |

**Lectura del ejemplo:**
- **Perfil A** muestra que **5 de 6 en prosa** alcanzan para un veredicto HIGH en el trigger determinístico — el único faltante (proyección) se cubre con supuesto conservador flaggeado, no bloquea. (Nota: al ser 100% exportación, el cálculo distingue el tope nominal de la categoría de servicios locales del límite global de cat K; el specialist aplica la lectura conservadora de ARCA.)
- **Perfil B** es el caso canónico de **refusal**: la pregunta "¿me conviene RI?" sin ningún input es exactamente donde una tax tool genérica improvisaría una respuesta con confianza. El specialist no calcula; **la respuesta es la pregunta.**
- **Perfil C** tiene los 6 inputs pero el **contenido** (ingresos mixtos + tratamiento `Factura E` vs tope ambiguo) empuja la confianza a REQUIRES_PROFESSIONAL en el borde, no por falta de intake sino por la zona gris regulatoria. Intake completo ≠ confianza HIGH automática: el tipo de decisión también capea la confianza.

---

## Puntos `verificar_manual` que tocan este gate

Lo que la triangulación dejó marcado como pendiente de confirmación, donde impacta el intake:

- ⚠ **verificar: `Factura E` y el tope del monotributo** — ARCA lee restrictivo (cuentan contra el límite de cat K); estudios contables leen lo contrario; **sin RG que lo zanje.** El gate asume la lectura conservadora y escala los casos límite. (`research/triangulacion.md`)
- ⚠ **verificar: TC para conversión** — BNA **comprador** del día hábil anterior para el *tope del monotributo*; BNA **vendedor** del día hábil anterior para *emitir* la `Factura E`. Son dos tasas distintas — no confundir. (`research/triangulacion.md`, `rules.md`)
- ⚠ **verificar: número de inciso del Código Fiscal por provincia (Input 5)** — se renumera por año/T.O.; las fuentes difieren. Citar la regla de fondo, no el inciso. (`research/triangulacion.md`)
- ⚠ **verificar: plazo de ingreso de divisas (contexto Input 4)** — 20 días hábiles desde la percepción (Com. BCRA A 8417) — confirmar con el banco por operación. (`research/triangulacion.md`)
- ⚠ **verificar: topes/cuotas de categoría** — snapshot Feb–Jul 2026. Re-validar **post-15-jul-2026** (nueva tabla ARCA Ago2026–Ene2027, estimación +14–17% no oficial) antes de categorizar. (`research/cifras-fiscales.md`)

---

## Cross-references

- Contrato de output: [`../rules.md`](../rules.md) § Intake Gate — the 6 structural inputs
- Ejemplo de refusal trabajado: [`../examples.md`](../examples.md) § Example 5
- Tabla de categorías vigente: [`./categorias-monotributo.md`](./categorias-monotributo.md)
- Fuente de verdad de cifras: [`../../research/triangulacion.md`](../../research/triangulacion.md)

---

**Calibración: junio 2026 (datos al 22/06/2026).** Re-validar este checklist contra `reference/categorias-monotributo.md` y las fuentes oficiales (ARCA / BCRA / códigos fiscales provinciales) **post-15-jul-2026** — desde esa fecha los topes citados acá quedan desactualizados para nuevas categorizaciones. Las cifras y reglas provienen de la triangulación de 3 fuentes independientes (`research/triangulacion.md` como fuente de verdad). Donde una fuente difería, se siguió la resolución de la triangulación.
