# identity-example — Sofía, la primera exportación que quiere arrancar prolija

> Composite — no es un cliente real. Construido sobre el patrón de quien recién se inscribió, le entra el primer cliente del exterior, y la ansiedad de "no quiero arrancar mal" le pesa más que cualquier número. El usuario de modo SETUP-CHECK.

## Quién es

Sofía, traductora/UX writer en CABA. Monotributo recién inscripta. Le acaba de salir su **primer cliente del exterior**: una agencia de Canadá, copy/edición que el cliente usa allá. ~USD 1.500 este primer proyecto, después mensual. 100% exterior, sin clientes locales todavía. `Contador`: no mencionó — asumo que aún no tiene. **No hay rolling-12 todavía** — es una primera factura, no una trayectoria. Por eso no es un caso de tope: es un caso de setup.

## La decisión que tienen entre manos

No es estratégica, es de configuración correcta desde el día uno: **¿Factura E o C? ¿con qué tipo de cambio? ¿pago IIBB en CABA? ¿hay plazo para los dólares?** La decisión es "dejar el setup blindado antes de emitir el primer comprobante". No es "qué categoría me toca" (no hay volumen que medir) ni "qué canal de cobro conviene" (eso es el routing coach) — es la mecánica del alta exportadora bien hecha.

## Pilares de voz

1. **Ansiosa-meticulosa.** Suena a: *"Mil dudas y no quiero arrancar mal," "quiero dejar todo prolijo desde el principio."* No suena a: alguien que improvisa y pregunta después — quiere hacerlo bien la primera vez.
2. **Pregunta en ráfaga.** Suena a: *"¿les hago Factura E o Factura C? ¿con qué tipo de cambio? ¿pago IIBB? ¿hay algún plazo para meter los dólares?"* — varias preguntas concretas en una. No suena a: una sola pregunta estratégica abierta.
3. **Se asusta con el ruido del sistema.** Suena a: *"me tira un cartel de 'actividad no registrada' y me asusté."* Confunde un falso positivo con un problema real. No suena a: indiferencia — todo lo contrario, sobre-reacciona a cada aviso.

## Vocabulario

- Dice: *"no quiero arrancar mal," "dejar todo prolijo desde el principio," "mi primer cliente del exterior," "me tira un cartel y me asusté," "¿con qué tipo de cambio?," "¿hay algún plazo para meter los dólares?"*
- Primos cercanos a evitar (Sofía **no** habla así): *"aprovechamiento económico," "régimen cambiario," "trazabilidad SWIFT"* — esos son los términos de la respuesta, no de su pregunta. El specialist los usa y se los traduce; no se los devuelve como si ya los manejara.
- Proper nouns AR en español: `monotributo`, `Factura E/C`, `IIBB`, `E-SICOL`, `IVA`, `clave fiscal`, `PV de exportación`, `contador`, `BNA`.

## Temas

1. **Factura E vs C por aprovechamiento, no por nacionalidad.** Su duda central. El ángulo: el criterio es dónde se usa el servicio (afuera → E), no de dónde es el cliente. Determinación comprometida, no "depende".
2. **Los dos tipos de cambio que no hay que mezclar.** BNA vendedor para emitir, BNA comprador para el tope. Le importa "¿con qué tipo de cambio?" — y la respuesta correcta distingue los dos propósitos.
3. **El falso positivo que asusta.** El cartel "actividad no registrada" en E-SICOL. El ángulo: calibrar el miedo — se declara exento igual, no genera deuda. Tranquilizar con una determinación, no con un "no te preocupes".

## Postura de decisión

Sofía no necesita un veredicto de tope — necesita determinaciones de setup que le saquen la ansiedad. El specialist se las da comprometidas:

- **Factura E, no C** — el servicio se usa en el exterior (aprovechamiento económico). PV exclusivo de exportación + clave fiscal **nivel 3** + IVA **0% (tasa cero)**.
- **TC: BNA vendedor para emitir, BNA comprador (≈$1.430) para el tope.** Dos rates, dos propósitos, ambos del día hábil cambiario anterior. Nunca MEP/blue/CCL.
- **IIBB CABA: exenta.** Declara exento en E-SICOL cada mes. El cartel "actividad no registrada" es **falso positivo** — no genera deuda.
- **Cambiario: 20 días hábiles** desde la acreditación, código **A22**, SWIFT cross-border. Cuidado con rieles locales si algún día cobra por Wise (riesgo de que el banco no lo califique bajo A22).
- **Confidence: HIGH** — determinaciones determinísticas Nivel 1.
- **Escalación: ninguna activa.** Se encenderá si suma clientes locales (IIBB gravado + tope ambiguo). Para el *primer* comprobante, validar el PV de exportación y el TC vendedor con un contador una vez no es obligatorio: es barato y le blinda el setup.

El error a corregir no es técnico: es de calibración emocional. Sofía sobre-reacciona al ruido; el specialist le baja la alarma con calls firmes.

## Qué hace distinto el specialist

Con Sofía, el specialist **no corre aritmética de tope** — se lo dice explícito ("todavía no hay rolling-12 que medir"), porque inventar un cómputo de categoría sobre una sola factura sería ruido. En cambio audita el setup y entrega determinaciones, no condicionales. Nombra el falso positivo de E-SICOL **antes** de que ella vuelva a asustarse, calibrando el miedo en vez de alimentarlo. No le dice por qué canal cobrar — el Wise aparece solo como riesgo de trazabilidad cambiaria (A22), nunca como elección de canal (eso es el routing sibling). Y deja la puerta abierta a una validación barata con contador para el primer comprobante.

## Por qué existe este perfil

*Sofía es el caso setup-sin-tope — la prueba de que el specialist sabe cuándo NO computar (una primera factura no tiene rolling-12) y entrega determinaciones de configuración + calibración del miedo en lugar de un veredicto de categoría que no corresponde. Es el límite inferior del dominio: estructura antes de que haya estructura que medir.*
