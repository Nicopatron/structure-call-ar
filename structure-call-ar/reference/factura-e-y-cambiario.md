# Factura E y régimen cambiario — exportación de servicios

Domain knowledge para decidir, no documentación de proceso. El specialist lee este archivo para emitir la determinación en SETUP-CHECK (Factura E vs C, setup de exportación, compliance cambiario, advertencias por plataforma) y para alimentar la `## Trazabilidad de la Decisión`. Las cifras son las de la triangulación de jun-2026; donde una fuente diverge, gana `triangulacion.md`.

**Calibración: junio 2026.** Re-validar el plazo cambiario y los tipos de cambio antes de operar un caso real (ver flags `⚠ verificar:` inline).

---

## 1. Factura E — cuándo es obligatoria

La **Factura Electrónica clase E** (Exportación) es obligatoria para **toda exportación de servicios** con contraprestación del exterior, sin importar el canal de cobro (Wise / Payoneer / Deel / SWIFT directo). No es opcional ni reemplazable por Factura C.

- Emitir Factura C a "consumidor final" o con datos apócrifos cuando el servicio tiene utilización real en el exterior es una **infracción grave** (reclasificación con IVA, multa por defraudación, pérdida de la exención de IIBB). La Factura E es lo que blanquea el origen internacional de los fondos y habilita el ingreso bancario de divisas.
- La obligación es **independiente del régimen**: tanto el monotributista como el Responsable Inscripto emiten Factura E por sus exportaciones.

### Marco normativo (citar el conjunto, no una sola norma)

| Norma | Rol | Estado jun-2026 |
|---|---|---|
| RG AFIP **2758/10** + RG **4401/19** | Base histórica del régimen de Factura E (exportación) | Vigentes (mod. sucesivas) |
| RG **1415/2003** (AFIP) | Régimen general de comprobantes electrónicos | Vigente |
| RG **5616/2024** (ARCA), BO 18/12/2024 | Facturación en **moneda extranjera**: tipo de cambio a consignar + condición IVA del receptor | **Vigente** (web service obligatorio desde 15/04/2025) |
| RG **5824/2026** (ARCA), BO 13/02/2026 | Amplía obligados, CLEM, identificación de consumidor final ≥ $10M | **Vigente**, pero **NO afecta a exportadores de servicios** (ya estaban alcanzados; no figuran en la lista de nuevos obligados) |

> **Sobre RG 5824/2026:** no modifica el régimen de Factura E. Los nuevos obligados desde 01/07/2026 son directores de SA, síndicos, socios gerentes de SRL, fiduciarios, abogados con honorarios judiciales, peritos, entidades financieras, seguros, etc. — no el exportador de servicios. Si el usuario usa web service / API propia para emitir, verificar que el sistema envíe `monedaId`, `tipoCambio` y `condicionIvaReceptorId` (RG 5616) o el CAE se rechaza.

### Requisitos para emitir (checklist de setup)

| Requisito | Detalle |
|---|---|
| Tipo de comprobante | Clase **E** (exportación de servicios) |
| Punto de venta | **Exclusivo de exportación** ("Comprobante de Exportación"), habilitado aparte en el portal ARCA. Separado del PV de mercado interno. |
| Clave fiscal | Nivel de seguridad **3** mínimo |
| IVA | **0%** (exenta para RI; no aplica para monotributista — el componente impositivo ya está en la cuota) |
| Condición IVA del receptor | Campo obligatorio desde 15/04/2025 (RG 5616) |
| Moneda de cancelación | Informar si se cancela en moneda extranjera o en pesos (obligatorio RG 5616) |
| Tipo de cambio para **emitir** | BNA **vendedor** divisa, cierre del **día hábil cambiario anterior** a la emisión (ver §3) |
| Cómputo al tope monotributo | Los cobros por exportación **NO computan** en el tope anual a efectos de *categorizar* (no te empujan de categoría) — pero ver `monotributo-*` para el matiz del límite de Cat K |

---

## 2. Factura E vs Factura C — determinación por aprovechamiento económico

Esta es la determinación **determinística** del modo SETUP-CHECK. El criterio NO es la nacionalidad del cliente: es **dónde se aprovecha económicamente el servicio**.

| Caso | Comprobante | Razón |
|---|---|---|
| Servicio **usado en el exterior** (cliente extranjero que lo aprovecha fuera de AR) | **Factura E** | Exportación de servicios. IVA 0%, no suma al tope a efectos de categorizar, exento/no gravado de IIBB (según provincia). |
| Servicio **usado en Argentina**, aunque el cliente sea extranjero | **Factura C** | NO es exportación. Ej.: empresa española que contrata para operar su sucursal en Buenos Aires. Suma al tope, paga IIBB, IVA según corresponda. |

> **Regla operativa:** ante "mi cliente es de afuera", el specialist NO asume Factura E. Pregunta/determina **dónde se usa el servicio**. La nacionalidad del cliente es ruido; el aprovechamiento económico es la señal.

---

## 3. Tipo de cambio — dos rates distintos (no confundir)

`⚠ verificar_manual:` este es el matiz fino que la triangulación marca explícitamente. Son **dos tipos de cambio distintos para dos propósitos distintos**, ambos del BNA y ambos del **día hábil cambiario anterior**:

| Propósito | Tipo de cambio | Fuente |
|---|---|---|
| **EMITIR** la Factura E (consignar el TC en el comprobante) | BNA **VENDEDOR** divisa, cierre del día hábil cambiario **anterior** a la emisión | RG 5616/2024 |
| **CONVERTIR a ARS a efectos del TOPE del monotributo** (cómputo de ingresos brutos para categorizar) | BNA **COMPRADOR** divisa, cierre del día hábil cambiario **anterior** a la emisión | Consulta Frecuentes ARCA (Derechos de Exportación de Servicios) |

> **Por qué importa:** usar el vendedor para el cómputo del tope infla los ingresos brutos; usar el comprador para emitir contradice la RG 5616. El specialist mantiene los dos rates separados y, ante un cálculo de tope cerca del umbral, marca `⚠ verificar: TC comprador/vendedor — confirmar el rate aplicable con contador`.
>
> **Nunca** usar MEP, blue o CCL para ninguno de los dos. El cruce ARCA-BCRA (§6) detecta el TC incorrecto.

---

## 4. Régimen cambiario 2026 — libre disponibilidad de divisas

La reforma 2025-2026 desmanteló las restricciones que castigaban al exportador de servicios. Dos comunicaciones del BCRA son el marco vigente:

| Norma | Fecha | Qué cambió |
|---|---|---|
| **Com. "A" 8330** | sep-2025 (18/09/2025) | **Eliminó el tope anual histórico de USD 36.000** que limitaba la excepción de liquidación para personas humanas. **Prohibió a los bancos cobrar comisiones** por transferencias/acreditaciones de cobros de exportación de servicios. |
| **Com. "A" 8417** | abr-2026 (09/04/2026) | Amplió la excepción a **todos los conceptos de servicios** prestados por personas humanas: sin tope de monto, sin pesificación obligatoria. Habilita liquidar directo a cuenta en dólares en banco AR. |

> **USD 36.000 — está ELIMINADO.** `⚠ verificar:` no citarlo como tope vigente. Era el monto que una persona humana podía percibir por exportación de servicios sin obligación de liquidar divisas; lo suprimió la Com. A 8330. (Algunas fuentes desactualizadas todavía lo mencionan como activo — no lo es.) Tampoco era nunca un tope del monotributo: eran cosas distintas.

### El plazo de los 20 días hábiles (la "relojería cambiaria")

La libre disponibilidad **no** exime de ingresar las divisas al país. Plazo perentorio:

- **20 días hábiles** desde la **percepción** de los fondos. `⚠ verificar:` confirmar el plazo vigente con el banco por operación (las fuentes históricas decían 30 días corridos; la triangulación resuelve **20 hábiles**, pero el plazo cambia por comunicaciones del BCRA).
- **"Percepción" = acreditación en CUALQUIER cuenta del exterior bajo titularidad del exportador.** El reloj arranca en el segundo en que el capital ingresa a la disponibilidad de la cuenta offshore del profesional — no cuando lo transfiere a Argentina. Retener honorarios meses en una cuenta/LLC del exterior y mandarlos en bloque **extingue el amparo** de la no-liquidación y, ante auditoría, fuerza el cierre de cambio al TC oficial.
- **Código cambiario A22** — "Acreditación de cobros de exportaciones de bienes y servicios". El banco confecciona Boleto de Compra (imputa la exportación, ej. código S01) + Boleto de Venta simultáneo bajo A22 **sin movimiento de pesos**, depositando los USD limpios en la cuenta del cliente.
- Exige **transferencia SWIFT cross-border trazable**: el ordenante debe referenciar la prestación del servicio, y el comprobante de pago debe coincidir al centavo (neto de comisiones de intermediarios) con la Factura E.

---

## 5. Plataformas de cobro — advertencias estructurales

Todas las advertencias de plataforma se marcan **"verificar con contador/plataforma"** por volatilidad operativa. El specialist no asume el tratamiento; lo señala.

| Plataforma | Riesgo / matiz | Determinación |
|---|---|---|
| **Deel como EOR** (Employer of Record) | Si Deel actúa como empleador formal, puede tratarse de **relación de dependencia**, NO de exportación → puede **no corresponder Factura E**. | **Escalar a contador.** Análisis caso por caso. No asumir exportación porque "cobro de afuera". |
| **Wise** | Riesgo de **rieles locales**: Wise suele fondear vía partners/compensación local (ACH doméstico) que figura como transferencia local de terceros → el banco no puede calificar el pago bajo A22 y **rebota** (los fondos vuelven, arriesgando el vencimiento de los 20 días). | **Asegurar transferencia cross-border SWIFT directa** con el ordenante referenciando el servicio. Sin eso, el banco bloquea. |
| **Payoneer / Deel (pago)** | El flujo entra y se transfiere a cuenta USD en AR vía SWIFT dentro de los 20 días hábiles. | Operatoria estándar; cuidar fecha y trazabilidad. |
| **Deel / Upwork** (como facilitadores de pago) | Emitir Factura E formal indicando como receptor al contratista final o a la plataforma, documentando el concepto. El reloj de 20 días arranca al acreditarse en la billetera de la plataforma. | Transferir vía SWIFT dentro del plazo. |

### Reporte automático a ARCA — CRS 2.0 y FATCA

- **CRS 2.0** (Common Reporting Standard, OCDE): instituciones financieras de Europa y jurisdicciones del Caribe reportan a ARCA saldos, flujos e intereses de cuentas. **Saldos no declarados en el exterior se reportan a ARCA.** Riesgo: determinación de oficio por **Incremento Patrimonial No Justificado** + exclusión retroactiva del monotributo.
- **FATCA** (IGA Modelo 1, EE.UU.): vía por la que se reportan **Payoneer / Deel** (domicilio EE.UU.). Distinta de CRS, mismo efecto: el fisco monitorea automáticamente.
- Ocultar saldos confiando en anonimato es obsoleto. El specialist lo señala cuando hay saldos relevantes parados en el exterior.

---

## 6. Mismatches que disparan alertas ARCA

Desde 2026 ARCA **cruza sistémicamente comprobantes electrónicos vs liquidaciones bancarias** (acreditaciones, liquidaciones de divisas, gastos con tarjeta). El specialist usa esta tabla para auditar el setup y anticipar alertas.

| Mismatch | Síntoma | Cómo evitarlo |
|---|---|---|
| **Temporal** | Factura emitida **semanas después** del cobro (o una Factura E consolidada por trimestre). | Emitir **antes o el mismo día** de la acreditación; documentar la fecha de prestación. Una factura por cobro, no consolidada. |
| **Monto** | Factura por monto distinto al acreditado. | Facturar por el **valor bruto del servicio**. El fee de la plataforma es **costo**, no un error de monto — la factura va por el bruto. |
| **Concepto** | Descripción de la factura no coincide con el contrato (sobre todo **Deel**). | La descripción debe **coincidir con el contrato** del servicio prestado. |
| **Cuenta** | Fondos a cuenta en **pesos** en vez de cuenta USD. | Ingresar a **cuenta USD** propia; no pesificar salvo decisión deliberada. |
| **TC** | TC informado es **MEP / blue / CCL** en vez de **BNA vendedor**. | Usar **BNA vendedor** del día hábil anterior para emitir (§3). |

---

## 7. Errores con consecuencia penal cambiaria

`⚠ verificar:` el specialist **no alarma con riesgo penal** como default (ver `rules.md` → el umbral penal de la Ley 27.799 es $100M por tributo y por ejercicio, fuera de alcance del freelancer típico con IVA 0% en exportaciones). Pero hay conductas cambiarias específicas con riesgo real, que sí señala:

- **Retener honorarios en una LLC / cuenta del exterior no declarada** y transferirlos en bloque al país: extingue el amparo de la no-liquidación (el reloj de 20 días ya corrió desde la acreditación en el exterior), fuerza cierre de cambio al TC oficial con pérdida patrimonial, y expone a la **Ley Penal Cambiaria** + Incremento Patrimonial No Justificado. **Escalar a abogado tributarista** (Nivel 3) si hay activos significativos o estructura offshore.
- **Pseudo-Facturas C** (facturar interno a clientes inventados mientras los fondos entran del exterior): ARCA cruza IPs, LinkedIn, GitHub para probar la materialidad de la relación contractual extranjera. Reclasifica gravando con IVA + multa por defraudación.

---

## Flags `⚠ verificar_manual` de este archivo (resumen)

| Ítem | Por qué |
|---|---|
| **TC vendedor (emitir) vs comprador (tope)** | Matiz fino confirmado por la triangulación; confirmar el rate aplicable con contador en cálculos cerca del umbral. |
| **Plazo de 20 días hábiles** | Resuelto a 20 hábiles (no 30 corridos), pero el plazo cambia por comunicaciones del BCRA — confirmar por operación. |
| **USD 36.000 eliminado** | No citarlo como tope vigente; lo suprimió la Com. A 8330. |
| **Advertencias por plataforma** (Deel-EOR, Wise rieles, FATCA) | Volátiles operativamente; marcar "verificar con contador/plataforma". |

---

**Calibración: junio 2026 (datos al 22/06/2026).** Re-validar: (1) el plazo cambiario y los tipos de cambio antes de operar un caso real; (2) post-15-jul-2026 si el cálculo toca el tope del monotributo (nueva tabla ARCA). Para el detalle de categorías y el límite de Cat K ver `monotributo-*`; para la mecánica de recategorización ver `recategorizacion-*`.
