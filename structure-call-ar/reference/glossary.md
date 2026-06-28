# Glosario fiscal AR — exportador de servicios (monotributo / RI)

Domain knowledge denso y verificable para decidir, no documentación de qué hace el specialist. Términos AR-fiscales que aparecen en `rules.md` y en los outputs (STRUCTURE / TRANSITION / SETUP-CHECK). Definiciones cortas, cifras al peso, fuente oficial citada donde corresponde.

**Calibración: junio 2026 (datos al 22/06/2026).** Re-validar: (1) **post-15-jul-2026** — ARCA publica la tabla de monotributo Ago2026–Ene2027 (est. +14–17%) y la escala de Ganancias jul-dic 2026; (2) al citar TC, re-tomar el A3500 vigente. Donde una cifra quedó sin segunda fuente, va marcada **⚠ verificar:** inline — no escondida.

Las citas de **número de inciso** de Códigos Fiscales provinciales se renumeran por T.O./año: en este glosario se cita **la regla de fondo** (exento / no gravado / excluido de base), nunca el inciso como dato duro. Ver `rules.md` → "I won't invent a regulatory figure".

---

## A. Régimen y figuras del contribuyente

### Monotributo (Régimen Simplificado para Pequeños Contribuyentes)
Régimen de cuota fija mensual única que sustituye IVA + Ganancias + aportes (SIPA + Obra Social), por categoría A–K según ingresos brutos de los **12 meses móviles**. Para el exportador de servicios es la estructura de **menor costo efectivo hasta cat K** — lo consensúan las 3 fuentes: nunca conviene saltar a RI voluntariamente antes de superar el tope de K de forma sostenida (≈ USD 140–150K/año). Fuente: Ley 24.977 y mod.; tabla ARCA vigente.

### Categoría (cat A–K)
Escalón del monotributo. Desde 2026 **no hay distinción de categoría máxima entre servicios y bienes**: ambas actividades llegan hasta **K** (cambio estructural confirmado por la tabla oficial). El tope de cat A es $10.277.988,13/año (cuota servicios $42.386,74); el de cat K es $108.357.084,05/año (cuota servicios $1.381.687,90). Tabla completa y desglose en `reference/categorias-monotributo.md`.

### Monotributista
Persona humana adherida al monotributo. Emite Factura C (mercado interno) o Factura E (exportación). No discrimina IVA.

### Responsable Inscripto (RI)
Contribuyente del **Régimen General**: liquida IVA mensual y Ganancias por renta neta anual, aporta como **autónomos** (no SIPA monotributo). Obligatorio al superar el tope de cat K en los 12 meses móviles devengados; opcional por renuncia voluntaria. Para el exportador puro **casi nunca conviene** (exportación es IVA 0% en ambos regímenes y el crédito fiscal sobre insumos digitales es casi nulo). Break-even sólo superando sostenidamente ≈ USD 140–150K/año. Las 3 fuentes coinciden.

### Autónomos / SIPA
**SIPA** = Sistema Integrado Previsional Argentino (aportes jubilatorios). Dentro del monotributo el aporte SIPA va incluido en la cuota (cat A $15.616,17/mes). Como **RI**, el contribuyente pasa al **Régimen de Trabajadores Autónomos**, con categorías por rentabilidad proyectada: la mínima (Cat. I) ronda **$72.446,22/mes** y las superiores (IV/V) superan **$231.000** y **$318.000/mes** respectivamente (valores mediados de 2026). ⚠ verificar: los importes de autónomos se actualizan periódicamente — confirmar contra el PDF ARCA "Valores autónomos vigentes" a la fecha. Fuente: ARCA, valores autónomos desde junio 2026.

### Contribuyente cumplidor
Sujeto inscripto **sin deudas ni planes de regularización vigentes**. En **Bienes Personales** accede a la escala reducida (0,00 / 0,25 / 0,50% vs 0,50 / 0,75 / 1,00% general). Beneficio fiscal, no estatus permanente: se evalúa por período.

---

## B. Recategorización, tope y exclusión

### Recategorización (semestral, 12 meses móviles)
Evaluación obligatoria **semestral** de la categoría. Ventanas de cierre: **5 de febrero** (evalúa el cierre a diciembre) y **5 de agosto** (evalúa el cierre a junio). La base son los **12 meses móviles** previos, **no 6 meses** — error común que infla mal la base. Para 2026: la recategorización de julio abre el **15-jul-2026** y cierra el **5-ago-2026**. Fuente: ARCA, ayuda monotributo / recategorización.

### Rolling-12 / 12 meses móviles
La métrica que manda: sumatoria estricta de ingresos brutos **facturados/devengados en los últimos 12 meses** corridos previos al mes de evaluación (no año calendario, no semestre). El criterio más restrictivo de 4 parámetros gana (ingresos, energía kWh, superficie m², alquiler) — para el exportador con oficina, m²/alquiler pueden gatillar recategorización antes que la facturación. La cuenta se recalcula cada mes.

### Recategorización proactiva
Práctica de monitorear el rolling-12 mes a mes y recategorizar (o diferir emisión dentro del margen legal de **devengamiento**) **antes** del cierre oficial, para no quedar excluido por sorpresa. Crítica para quien cobra en USD: la apreciación/devaluación del peso mueve el rolling-12 nominal sin crecimiento real.

### Exclusión de oficio
Salida **forzosa y retroactiva** del monotributo cuando ARCA detecta que el rolling-12 superó el tope de cat K (o se configuró otra causal). El contribuyente es RI **desde la cero hora del día de la causal**, con deuda retroactiva de IVA + Ganancias + intereses + multas por todos los meses transcurridos. ARCA usa la **tabla histórica del mes de la infracción**, no la actualizada. Notificación al Domicilio Fiscal Electrónico; plazo de apelación **15 días hábiles** → Nivel 2/3 (contador/abogado). Distinta de la recategorización de oficio (ajuste de categoría con recargo, no salida del régimen). Fuente: ARCA, exclusión de oficio.

### Determinación de oficio
Procedimiento formal por el que ARCA determina la materia imponible y liquida el tributo cuando no hay DDJJ o se la impugna (**Art. 17, Ley 11.683** de Procedimiento Tributario). Comienza con una **vista formal**. Es territorio de **abogado tributarista** (Nivel 3), no autogestionable. La defensa de una exclusión de oficio retroactiva ante la Cámara cae acá.

### Jurisprudencia de defensa (exclusión retroactiva)
**Cámara CAF, Sala V (abr-2026):** ante exclusión de oficio retroactiva, el excluido **sí** puede computar el crédito fiscal IVA de sus compras del período (principio de realidad económica; negarlo sería "enriquecimiento sin causa" del fisco y doble imposición). Herramienta de litigio → Nivel 3. ⚠ verificar: número de causa/carátula exacto antes de citar como precedente formal.

---

## C. Facturación y exportación de servicios

### Factura E (exportación de servicios)
Comprobante electrónico **clase E**, obligatorio para **toda exportación de servicios** (criterio = **aprovechamiento económico en el exterior**, no nacionalidad del cliente), independiente del canal de cobro (Wise/Payoneer/Deel/SWIFT). Requiere punto de venta **exclusivo de exportación** y clave fiscal **nivel 3**. **IVA 0%.** Los cobros con Factura E **computan** a los ingresos brutos a efectos de *categorizar* (los ingresos del exterior se consideran en la recategorización, ARS al BNA); además, lectura conservadora de ARCA, **el total facturado no puede exceder el tope de exclusión de cat K**. Marco: RG 2758/10 + RG 4401/19 (base) + RG 5616/2024 (moneda extranjera/TC). Fuente: ARCA, exportación de servicios.

### Factura C
Comprobante del **monotributista** para el **mercado interno** (cliente local, servicio usado en Argentina). No discrimina IVA. **Determinístico:** si el cliente extranjero usa el servicio **en Argentina**, NO es exportación → va Factura C (no E), suma al tope y paga IIBB.

### Factura A
Comprobante del **RI** a otro RI, con **IVA discriminado**. Relevante como **presión comercial**: clientes locales corporativos que exigen Factura A pueden empujar a un monotributista hacia RI por motivo comercial, no fiscal.

### Aprovechamiento económico (en el exterior)
Criterio que define si un servicio es **exportación**: el cliente del exterior debe **utilizar el servicio en el exterior**. Si la empresa extranjera lo usa para operar **en Argentina**, NO es exportación (→ Factura C, suma al tope, paga IIBB). Es el test determinístico Factura E vs C.

### Devengamiento vs percepción
- **Devengamiento:** momento en que nace el derecho al ingreso (prestación/emisión). Es la base del cómputo del rolling-12 del monotributo y la palanca de la recategorización proactiva (diferir emisión dentro del margen legal).
- **Percepción:** momento en que los fondos se **acreditan** en una cuenta (incluida una cuenta del exterior del titular). Dispara el reloj cambiario de **20 días hábiles** del BCRA. No confundir: para la categoría manda el devengamiento; para el plazo de ingreso de divisas, la percepción.

### BNA vendedor vs BNA comprador (los dos TC de la Factura E)
Dos tipos de cambio distintos del Banco de la Nación Argentina, cada uno para una cosa:
- **BNA vendedor** (divisa), cierre del **día hábil cambiario anterior** a la emisión → para **emitir** la Factura E (RG 5616/2024).
- **BNA comprador**, cierre del **día hábil anterior** → para **convertir a ARS a efectos del tope del monotributo**.

No son intercambiables; confundirlos sesga la categoría o el comprobante. ⚠ verificar: este matiz vendedor-para-emitir / comprador-para-el-tope es fino — confirmar con contador por operación. (TC mayorista de referencia A3500, cierre 22/06/2026: **$1.457,31**; rango conservador junio 2026 ARS **1.450–1.480/USD**.)

---

## D. Régimen cambiario e información financiera

### Código cambiario A22
Concepto **"Acreditación de cobros de exportaciones de bienes y servicios"** con que el banco imputa el ingreso de divisas por exportación (Boleto de Venta bajo código A22, sin movimiento de pesos). Exige que el cobro entre como **transferencia internacional trazable (SWIFT cross-border)**, con ordenante que referencie el servicio. Riesgo Wise: si los fondos entran por rieles locales/ACH como transferencia de terceros, el banco no los califica bajo A22.

### Com. BCRA A 8330 (18/09/2025)
Comunicación del BCRA que **suprime el tope histórico de USD 36.000 anuales** que limitaba la excepción de liquidación para personas humanas, y **prohíbe** a los bancos cobrar comisiones por acreditaciones de cobros de exportación de servicios. **El tope USD 36.000 ya no es un tope activo** — no citarlo como vigente. Fuente: BCRA, Com. "A" 8330.

### Com. BCRA A 8417 (09/04/2026)
Comunicación que **extiende a todos los conceptos de servicios** de personas humanas la excepción de liquidación contra pesos: se pueden acreditar directo en cuenta en dólares del sistema bancario nacional, **sin tope de monto, sin pesificación obligatoria**. Vigente. Persiste el requisito de **ingresar las divisas dentro de 20 días hábiles** desde la percepción. Fuente: BCRA, Com. "A" 8417.

### Plazo de ingreso de divisas (20 días hábiles)
Desde la **percepción** (acreditación en cualquier cuenta del exterior del titular), hay **20 días hábiles** para ingresar las divisas al sistema bancario AR. Pasado el plazo sin ingresar → pesificación obligatoria al TC oficial (merma patrimonial). ⚠ verificar: el plazo BCRA es volátil — confirmar con el banco por operación. (Resolución de fuentes: 20 hábiles, no 30 corridos.)

### CRS (Common Reporting Standard)
Estándar OCDE de **intercambio automático de información financiera**: instituciones de Europa, Caribe y otras jurisdicciones reportan a ARCA saldos, flujos e intereses de cuentas de residentes argentinos. Relevante para saldos en plataformas/cuentas del exterior (ej. Wise con saldo alto). Saldos no declarados → riesgo de **Incremento Patrimonial No Justificado** (Ganancias).

### FATCA
Acuerdo intergubernamental (IGA Modelo 1) EE.UU.–Argentina de intercambio de información de cuentas. Vía por la que se reportan saldos en EE.UU. (ej. Payoneer/Deel con domicilio EE.UU., que van por FATCA y no por CRS). Mismo riesgo de fondo que CRS para lo no declarado.

---

## E. IIBB y Convenio Multilateral

### IIBB (Impuesto sobre los Ingresos Brutos)
Tributo **provincial** sobre el ejercicio habitual de actividad a título oneroso, con efecto cascada. La **exportación de servicios está exenta / no gravada / excluida de base** en CABA, PBA, Córdoba, Santa Fe, Mendoza (y otras) — **siempre que se acredite utilización efectiva en el exterior** (Factura E + contrato + liquidación). **No es automático ni uniforme: el tratamiento es radicalmente distinto por provincia** → preguntar la jurisdicción antes de pronunciarse. Las figuras jurídicas NO son intercambiables en copy ("exento" ≠ "no gravado" ≠ "excluido de base", efectos prácticos distintos):

| Jurisdicción | Tratamiento export. servicios | Cómo se declara |
|---|---|---|
| **CABA** | **Exenta** de pleno derecho | Alta + DDJJ mensual tipificando ingresos como exentos (E-SICOL); paga $0. Profesionales universitarios matriculados: exención adicional propia. |
| **PBA (ARBA)** | **No gravada** (fuera del objeto) | Padrón alícuota 0% (RN 46/2019) exige **actividad exclusiva** de exportación; con un cliente local, va "no alcanzado" en la DDJJ general. |
| **Córdoba** | **Excluida de base imponible** | No computa en la base; profesionales liberales sin organización empresarial: exención propia (tramita CiDi/Clave Fiscal). |
| **Santa Fe (API)** | **No gravada** (exclusión de objeto) | Utilización en el exterior; no alcanza transporte/eslingaje/estibaje/depósito. Profesiones liberales no-empresa: exención (RG API 39/2025). |
| **Mendoza (ATM)** | **Exenta** | Encuadrar ingresos como "EXPORTACIONES" en la DDJJ (DIU) → Tasa Cero. |

Las **alícuotas generales de servicios** dependen del código de actividad (orden de magnitud 2026: CABA 3–4,75% · PBA 3,5–4,5% · Córdoba 4,75% · Santa Fe 4,5% · Mendoza prog. ~3,5%). ⚠ verificar: número de inciso del Código Fiscal por jurisdicción — se renumera por T.O./año; citar la regla de fondo, no el inciso. Fuente: leyes impositivas provinciales 2026.

### Convenio Multilateral (CM)
Régimen (acuerdo 18/08/1977, administrado por COMARB) que reparte la base imponible de IIBB entre **>1 jurisdicción** mediante un **Coeficiente Unificado** (50% gastos + 50% ingresos). **Las exportaciones (ingresos y gastos vinculados) son NO computables** — no entran al coeficiente (RG CA 4/2017, ratificada por RG CA 15/2023). El exportador exclusivo distribuye por gastos soportados (suele caer todo en la jurisdicción sede). Trigger: actividad/clientes en >1 provincia → inscribir en CM y explicar. Si todas las jurisdicciones relevantes eximen/excluyen → base distribuida $0 en cada una. Fuente: COMARB.

### SIRCREB (Sistema de Recaudación y Control de Acreditaciones Bancarias)
Régimen de **retención bancaria de IIBB** sobre acreditaciones en cuenta. Puede aplicar retenciones sobre liquidaciones de divisas pese a que la actividad esté exenta/no gravada → revertirlo exige inscripción en padrón de alícuota 0% (ej. ARBA RN 46/2019) o reclamo técnico ante COMARB/Rentas. Es una de las razones por las que conviene tramitar el padrón 0% aunque la exportación esté exenta.

---

## F. Ganancias, IVA y patrimonio

### Ganancias — escala Art. 94 (LIG)
Impuesto a las **personas humanas** sobre la renta neta anual, reimplantado por **Ley 27.743** (BO 08/07/2024), escala progresiva de **9 tramos del 5% al 35%** (alícuotas fijas por ley; sólo los topes en pesos se mueven por IPC semestral). Lo paga el **RI** (en monotributo, Ganancias va incluido en la cuota). Anclajes 2026: **Ganancia No Imponible $5.151.802,50**; **deducción especial autónomos $18.031.308,76 = 3,5× GNI** (NO 3,8×; $20.607.210,01 para nuevos profesionales). Escala anual 2025: 1er tramo hasta $1.749.901,45 al 5%; último tramo desde $53.153.256,52 al 35%. ⚠ verificar: la escala **jul-dic 2026 aún no publicada** (sale ~jul-2026); la tabla mensual cubre sólo ene-jun 2026. Fuente: ARCA, Tabla Art. 94 LIG.

### IVA tasa cero (exportación de servicios)
La exportación de servicios está **exenta de débito fiscal** (no se carga 21% al cliente del exterior) **y conserva el crédito fiscal** de las compras vinculadas → por eso se llama **"tasa cero"**, no exención pura. Para el RI, el crédito fiscal acumulado puede recuperarse (vía SIR). El monotributista no maneja IVA. Marco: Art. 8 inc. d) + Art. 43 Ley 23.349 (IVA) + Art. 77.1 DR. Límite del recupero: hasta el **21% del monto FOB** exportado. ⚠ verificar: el trámite formal de devolución del saldo técnico está más desarrollado para **bienes** (RG 1351) que para servicios — requiere dictamen de contador. Fuente: AFIP/ARCA, ABC IVA exportaciones.

### Recupero IVA / SIR (RG 5173/22)
**SIR = Sistema Integral de Recupero.** Mecanismo (RG 5173/2022) por el que el **RI exportador** solicita el reintegro/compensación del crédito fiscal IVA inmovilizado de sus compras. **Requisitos:** CUIT activa, alta en impuestos, Domicilio Fiscal Electrónico, código CLAE concordante y — irrenunciable — **informe especial de contador público independiente certificado por el Consejo Profesional de Ciencias Económicas**. Por eso es **Nivel 2** (contador obligatorio), no autogestionable. Devolución teórica ~5 días hábiles desde aprobación. Fuente: ARCA, SIR (RG 5173/22).

### Bienes Personales
Tributo **nacional** sobre el patrimonio bruto consolidado al **31/12** de cada año. El exportador que acumula USD es sujeto natural. **Período fiscal 2025** (DDJJ en 2026): MNI general **$384.728.044,57**; exención casa-habitación hasta **$1.346.548.155,99**. Escala general 0,50 / 0,75 / 1,00%; **cumplidor** 0,00 / 0,25 / 0,50%. Depósitos en caja de ahorro/plazo fijo en bancos AR: **exentos**. Saldos en billeteras/cuentas del exterior (PayPal, Payoneer), efectivo o cuentas foráneas: **gravados** (valuados a BNA comprador al 31/12). Proyección: alícuota máxima baja a 0,75% en 2026, flat 0,25% desde 2027. ⚠ verificar: la alícuota 0,25% de **responsables sustitutos del exterior** y que no haya salido una RG/aclaratoria posterior antes de firmar. Fuente: ARCA, Bienes Personales — alícuotas (Ley 23.966 y mod., Ley 27.667, Ley Bases).

### MNI (Mínimo No Imponible)
Monto del patrimonio **exento** de Bienes Personales antes de aplicar la escala. Para 2025: **$384.728.044,57** (general, residentes en el país; **no aplica** a residentes del exterior). Se actualiza anualmente por IPC.

### Escala Bienes Personales 2025 (sobre el excedente del MNI)

| Excedente del MNI — más de $ | hasta $ | General | Cumplidor |
|---|---|---|---|
| — | 52.664.283,73 | 0,50% | 0,00% |
| 52.664.283,73 | 114.105.948,16 | 0,75% | 0,25% |
| 114.105.948,16 | en adelante | 1,00% | 0,50% |

### REIBP (Régimen Especial de Ingreso del Impuesto sobre los Bienes Personales)
Vehículo de la **Ley 27.743**: pago **adelantado y consolidado** de Bienes Personales por los períodos 2023–2027, sobre la base patrimonial al 31/12/2023 ×5 años, a **alícuota plana ~0,45–0,50%**, con **estabilidad fiscal hasta 2038** (el Estado no puede subir la alícuota ni crear tributos patrimoniales análogos). Quien adhiere no presenta DDJJ anual de Bienes Personales hasta 2028. Decisión **plurianual irreversible** → **Nivel 3** (abogado/contador). ⚠ verificar: alícuota exacta (0,45% general / 0,50% con blanqueo) y ventana de adhesión vigente antes de modelar. Fuente: argentina.gob.ar / Consejo, REIBP.

---

## Notas de uso

- **Cifras al peso = vigentes a junio 2026.** Monotributo Feb–Jul 2026, Ganancias y Bienes Personales período 2025, autónomos jun-2026. Re-validar post-15-jul-2026 (nueva tabla monotributo + escala Ganancias jul-dic) antes de usar para categorizar.
- **Lo marcado ⚠ verificar no se cita como cifra/dato duro sin confirmar contra norma o contador:** matiz BNA vendedor/comprador · plazo 20 días hábiles por operación · alícuota REIBP y ventana de adhesión · alícuota 0,25% sustitutos del exterior · escala Ganancias jul-dic 2026 · números de inciso de Códigos Fiscales · importes de autónomos a la fecha · carátula del fallo Cámara CAF Sala V.
- **Números de RG/inciso:** citar la regla de fondo. Los inciso de Códigos Fiscales y los números de RG se renumeran/actualizan; el specialist no fabrica un artículo.

## Cross-references
- Output contract: [`../rules.md`](../rules.md)
- Reference siblings: [`../reference/`](.) — `categorias-monotributo.md` (tabla completa), monotributo-vs-RI, regímenes cambiarios, IIBB por jurisdicción
