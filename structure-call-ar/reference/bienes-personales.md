# Bienes Personales — Reference

Domain knowledge que el specialist USA para decidir exposición patrimonial del freelancer exportador. No es documentación de qué hago: son los números y reglas que leo y aplico.

**Período fiscal:** 2025 (DDJJ a presentar y pagar en jun-2026).
**Calibración:** junio 2026. Re-validar antes de usar en un caso real (ver "Re-validación" al pie).

Impuesto nacional sobre el patrimonio bruto consolidado al **31/12** de cada año. El profesional que retiene divisas (en cuentas AR, plataformas o activos del exterior) es sujeto natural de este tributo.

---

## 1. Mínimos No Imponibles (MNI) — período 2025

Triple-confirmados (3 fuentes independientes replican al peso; `triangulacion.md` los marca confianza ALTA).

| Concepto | Monto ARS |
|---|---|
| **MNI general** (residentes en el país) | **$384.728.044,57** |
| **Casa-habitación** — exenta si la valuación del inmueble destinado a vivienda no excede | **$1.346.548.155,99** |

- El MNI general **no aplica** a bienes en el país pertenecientes a residentes del exterior (esos van por responsable sustituto, ver §3).
- La exención de casa-habitación es independiente del MNI general: el inmueble vivienda no se computa si su valuación ≤ $1.346.548.155,99; el resto del patrimonio se evalúa contra el MNI general por separado.
- Montos actualizados anualmente por IPC (INDEC) desde 2022. ARCA publicó los valores 2025 en enero de 2026.

**Comparativa histórica del MNI** (para detectar si una fuente está usando un año equivocado — el "$292M" es 2024, NO 2025):

| Período | MNI general | Casa-habitación (tope exención) |
|---|---|---|
| 2025 | $384.728.044,57 | $1.346.548.155,99 |
| 2024 | $292.994.964,89 | $1.025.482.377,13 |
| 2023 | $100.000.000,00 | $350.000.000,00 |
| 2022 | $11.282.141,08 | $56.410.705,41 |

---

## 2. Escala de alícuotas — período 2025 — residentes en el país

Se aplica **sobre el excedente del MNI** ($384.728.044,57). El patrimonio gravado por debajo del MNI no tributa.

### 2.1 Tabla general (sin beneficio cumplidor)

| Excedente del MNI — Más de $ | a $ | Pagarán $ fijo | Más el % | Sobre el excedente de $ |
|---|---|---|---|---|
| — | 52.664.283,73 | — | **0,50%** | — |
| 52.664.283,73 | 114.105.948,16 | 263.321,42 | **0,75%** | 52.664.283,73 |
| 114.105.948,16 | en adelante | 724.133,89 | **1,00%** | 114.105.948,16 |

### 2.2 Contribuyentes cumplidores (reducción de alícuota)

Inscriptos sin deudas ni planes de regularización vigentes, calificados como "Contribuyentes Cumplidores".

| Excedente del MNI — Más de $ | a $ | Pagarán $ fijo | Más el % | Sobre el excedente de $ |
|---|---|---|---|---|
| — | 52.664.283,73 | — | **0,00%** | — |
| 52.664.283,73 | 114.105.948,16 | 0,00 | **0,25%** | 52.664.283,73 |
| 114.105.948,16 | en adelante | 153.604,17 | **0,50%** | 114.105.948,16 |

> Los tramos del excedente (`$52.664.283,73` y `$114.105.948,16`) son idénticos en ambas escalas; sólo cambian las alícuotas (general 0,50/0,75/1,00% → cumplidor 0,00/0,25/0,50%).

---

## 3. Responsables sustitutos — residentes en el exterior

Bienes en el país pertenecientes a sujetos del exterior: el responsable sustituto local (art. 26, Ley 23.966) tributa una **alícuota única del 0,25%** sobre el valor de los bienes al 31/12 (años 2018 y siguientes).

> ⚠ verificar: la alícuota 0,25% de responsables sustitutos del exterior es coherente con la Ley 23.966 vigente, pero `triangulacion.md` la marca como no re-confirmada en una fuente secundaria abierta. Confirmar con contador o texto de ARCA antes de aplicarla a un caso de sujeto del exterior. (No bloquea el caso típico del freelancer residente AR.)

---

## 4. Tratamiento de divisas — clave para el freelancer USD

Esta es la decisión de fondo para quien cobra en dólares. **Dónde están parqueados los USD al 31/12 determina si tributan o no.**

| Dónde está el dinero | ¿Gravado en Bienes Personales? | Valuación |
|---|---|---|
| **Caja de ahorro en banco argentino** | **EXENTO** — sin importar el saldo en USD | — (no se computa) |
| **Plazo fijo en banco argentino** | **EXENTO** — sin importar el saldo en USD | — (no se computa) |
| **Billetera del exterior** (PayPal, Payoneer) | **GRAVADO** — se suma a la base | TC BNA comprador al 31/12 |
| **Efectivo guardado** (cash) | **GRAVADO** — se suma a la base | TC BNA comprador al 31/12 |
| **Cuenta bancaria foránea** (corriente/ahorro en el exterior) | **GRAVADO** — se suma a la base | TC BNA comprador al 31/12 |

**Regla operativa para el specialist:** el incentivo patrimonial es ingresar los USD a una **caja de ahorro o plazo fijo en banco argentino** antes del 31/12 → quedan exentos sin tope. Dejarlos en la billetera de la plataforma (Payoneer/PayPal) o en una cuenta del exterior al cierre del año los hace gravados.

**Valuación de los activos gravados:** TC **BNA comprador** del 31/12 (no MEP, no blue). Si el 31/12 no es día hábil cambiario, usar el último día hábil cambiario anterior con cotización publicada.

> Cruce con CRS/FATCA (riesgo, no cálculo): los saldos no declarados en el exterior se reportan a ARCA (CRS para Europa/Caribe; FATCA EE.UU.). Mantener USD sin declarar en una cuenta foránea expone a determinación de oficio por Incremento Patrimonial No Justificado, además del Bienes Personales omitido. → Detalle de plataformas en `reference/` cambiario; acá sólo se señala que el activo del exterior es **gravado y trazable**.

---

## 5. REIBP — Régimen Especial de Ingreso (Ley 27.743)

Para patrimonios robustos atesorados en USD o portafolios internacionales. Es un **contrato fiscal plurianual IRREVERSIBLE** → **Nivel 3 (abogado tributarista)** del árbol de escalación. El specialist NUNCA recomienda adherir; identifica que el caso podría calificar y escala.

### 5.1 Estructura

- **Pago adelantado y consolidado** de los períodos fiscales **2023 a 2027** en una única DDJJ sistémica en ARCA.
- Base inamovible: patrimonio existente al 31/12/2023 (valuado a normativa vigente), neto de MNI y exenciones, **× 5 años**.
- **Alícuota plana ~0,45%** (general) — **0,50%** para quienes ingresaron activos vía régimen de blanqueo simultáneo.

### 5.2 Beneficios (lo que justifica la adhesión)

1. **Estabilidad fiscal hasta el año fiscal 2038** — blindaje constitucional de 12 años.
2. **Sustitución total de obligaciones:** no presenta DDJJ de Bienes Personales ni paga saldos/anticipos hasta el vencimiento en 2028.
3. **Inmunidad sobre el crecimiento patrimonial:** cualquier acumulación de riqueza entre 2024 y 2027 (éxito de contratos USD, apreciación de inversiones, compra de inmuebles) queda purgada y no genera impuesto adicional.
4. **Blindaje estructural 2038:** el Estado no puede subir la alícuota de Bienes Personales ni crear nuevos tributos análogos de base patrimonial hasta 2038.

### 5.3 Por qué es Nivel 3 (no opinable por el specialist)

Es una decisión plurianual de implicancia **irreversible**: obliga a tributar el lustro completo, somete a cláusulas inamovibles de valuación cambiaria y rechazo a beneficios paralelos futuros. La estructuración (qué bienes repatriar, qué fideicomisos declarar, blindaje del núcleo familiar) exige pericia de un tributarista para evitar nulidad por falta de revelación. → El specialist marca `REQUIRES_PROFESSIONAL` y produce el Reviewer Brief; no resuelve la adhesión.

---

## 6. Proyección de alícuotas (período 2026 y siguientes)

Desmantelamiento programado de la carga patrimonial:

| Período fiscal | Alícuota máxima | Régimen |
|---|---|---|
| 2025 | 1,00% (general) / 0,50% (cumplidor) | Escala de 3 tramos (§2) |
| **2026** | **0,75%** máx | Escala decreciente |
| **2027 en adelante** | **0,25% flat** | Gravamen plano, independiente del volumen del patrimonio |

> Es una **proyección normativa** sobre el diseño legislativo vigente (Ley 27.743 + paquete fiscal). No es una tabla oficial publicada para 2026/2027. Citar como "proyección", no como cifra dura de DDJJ futura.

---

## 7. Contexto normativo

- **Ley 23.966** (T.O.), modificada por **Ley 27.667** (BO 31/12/2021) y **Ley Bases** (2024).
- **REIBP:** Ley 27.743 (BO 08/07/2024).
- Montos actualizados anualmente por IPC (INDEC) desde 2022.
- Quienes adhirieron al REIBP (pago único anticipado) **no presentan DDJJ anual** de Bienes Personales.

---

## 8. Uso por el specialist (cómo entra en la decisión)

- **Línea de Reviewer Brief:** `EXPOSICIÓN BIENES PERSONALES: [bienes computables] vs MNI $384.728.044,57`. Si el patrimonio gravado (excluyendo casa-habitación bajo tope y depósitos en bancos AR) está por debajo del MNI → sin obligación; por encima → estimar contra la escala §2 y escalar la liquidación al contador.
- **Para el freelancer USD típico** (patrimonio principal = honorarios del año): la palanca de mayor impacto es **el destino de los USD al 31/12** (§4) — banco AR exento vs billetera/exterior gravado. El specialist lo señala en STRUCTURE cuando hay señales de saldo USD significativo retenido.
- **No liquida Bienes Personales:** la determinación fina (valuaciones, deducciones, escala efectiva) es del contador. El specialist estima exposición y exposición de cruce (CRS/FATCA), y deriva.
- **REIBP nunca se recomienda desde acá** — se identifica candidatura y se escala a Nivel 3.

---

## Fuentes y re-validación

**Fuentes oficiales:**
- ARCA/AFIP — alícuotas y MNI Bienes Personales: https://www.afip.gob.ar/gananciasYBienes/bienes-personales/conceptos-basicos/alicuotas.asp
- Cifras 2025 replicadas al peso por 5 fuentes independientes (iProfesional, contadoresenred, Consejo CABA, CGC Consultores, Blog del Contador); publicación oficial enero 2026 (Errepar cita 14/01/2026).
- REIBP / escala decreciente: Ley 27.743 (BO 08/07/2024); proyección 2026/2027 sobre el paquete fiscal vigente.

**Re-validación (calibración junio 2026):**
1. **Antes de usar para liquidar un caso real** — confirmar con contador o ARCA que no haya salido una RG/aclaratoria posterior que ajuste algún monto (cierre de cortesía editorial; el cuerpo de §1-§2 está confirmado al peso por 5 fuentes).
2. ⚠ verificar: alícuota 0,25% de responsables sustitutos del exterior (§3) — no re-confirmada en secundaria abierta.
3. La proyección §6 (0,75% en 2026, 0,25% flat desde 2027) es normativa, no DDJJ publicada — re-chequear al abrir la DDJJ del período 2026.
4. TC de valuación de activos del exterior: tomar el **BNA comprador al 31/12** del período que se liquida, no el de calibración.
