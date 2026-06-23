# JUDGE_GUIDE

> *5-minute test. Read this first. If something is unclear or breaks, that's our bug — note it and move on; this guide should onboard cold, even if you've never seen an Argentine tax form.*

The competition asks one question of a tax specialist: **does it compute the trigger and commit to a structural call, or does it recite the monotributo table and tell you to ask your accountant?** Every test below is built so you can see the answer in the first response. Test 1 alone settles the headline. Tests 2–5 close specific failure modes — a different mode, a setup audit, a hard escalation, a refusal.

What you're grading is **determinism + range**, not exotic cleverness: the *trigger* (which category, which month you cross) is arithmetic the folder owns and commits to; the *complex choice* (jump to RI, form an SAS) is the contador's, and the folder escalates it on purpose. The range is the three modes plus the refusal: the same rules producing three different verdicts and one principled refusal.

---

## Setup (1 minute)

1. **Where it runs.** A [Claude Project](https://claude.ai): create a project, drop the `structure-call-ar/` folder into its knowledge base. Works equivalently in Claude Code or any agent that reads a folder. No install, no API key — it's plain markdown, and Claude becomes the operator.
2. **What to upload.** The whole `structure-call-ar/` folder. Minimum for Test 1: `identity.md`, `rules.md`, `examples.md`. The `reference/` files load on demand.
3. **What you type.** Open the project and paste the input under each test **verbatim** — no role-play wrapper, no "as the tax advisor, please…". The folder makes Claude the operator. Your job is to be the freelancer.

**Tip:** Don't add a greeting or framing. The whole point is to watch what it does when handed an under-specified tax question cold. **Language is part of the test:** Test 1's input is English → the output must be English; Tests 2–5 are Spanish → the output must be Spanish. The folder switches on *your* language, not its reference files (which are all Spanish).

---

## Glossary (read before Test 1 — 60 seconds)

You do not need to know Argentine tax law to grade this. These terms cover every test:

| Term | Means |
|---|---|
| **`monotributo`** | Argentina's simplified tax regime for small earners — a single flat monthly fee (`cuota`) instead of separate VAT + income tax |
| **`cat A–K`** | your `monotributo` category — 11 income brackets. Higher invoicing → higher category → higher `cuota` |
| **`rolling-12`** | your last 12 months of invoicing — the number the category ceiling (`tope`) is measured against |
| **`tope` / `límite`** | the income ceiling of a category; **cat K** is the top — clear it and you're forced out of `monotributo` |
| **`RI`** (`Responsable Inscripto`) | the general tax regime: `IVA` + `Ganancias` (income tax) + a monthly accountant bill. What you get forced into past cat K |
| **`Factura E` / `C`** | `E` = the export-services invoice (foreign client, used abroad); `C` = the local-client invoice |
| **`IIBB`** (Ingresos Brutos) | provincial gross-income tax — treatment varies radically by province; for service exports in CABA it's exempt |
| **`recategorización`** | the semi-annual category move. **Proactive** = you do it; **`de oficio`** = ARCA does it to you, with up to a 50% penalty |
| **`exclusión de oficio`** | ARCA forcibly ejecting you from `monotributo`, retroactively |
| **`contador`** | your accountant — the one who signs the tax filing. This folder *prepares*; the contador *signs* |
| **`BNA comprador` / `vendedor`** | the official Banco Nación buy/sell USD rate. Comprador (buy) values the ceiling; vendedor (sell) is used to *emit* an invoice — two different rates, and the folder keeps them apart |

Two more you'll see: **`cuota`** = the flat monthly fee · **`Reviewer Brief`** = the memo the folder writes for your contador, so the meeting is 10 minutes, not a week · tope-alert tiers 🟢 **VERDE** (<70%) / 🟡 **AMARILLO** (70–90%) / 🔴 **ROJO** (>90% or projected to cross).

**FX calibration:** USD→ARS figures use the **BNA comprador ≈ $1.150/USD** (junio 2026); every line is tagged *"calibrado jun-2026, recalcular contra el BNA del día."* ARS amounts are quoted to the centavo from `reference/` — a tool that preaches calibration discipline can't fabricate a peso, so it doesn't.

---

## Test 1: Thesis demo — it computes the crossing and commits, instead of reciting the table

The load-bearing test. Paste this — verbatim (English in, English out):

```
Hi — I'm Lucía, product designer in Buenos Aires, on monotributo cat F. I bill one US SaaS client and pick up smaller US gigs. Over the last 12 months I've invoiced about USD 30,000, pretty steady at ~USD 3,500/month. Everything is export to US clients, all Factura E, IIBB CABA (exempt, I think). I have a contador I email a couple times a year, nothing regular.

Here's what's stressing me: I have a big project closing end of July — somewhere between USD 8K and 9K in one shot — plus my normal monthly run-rate keeps going. I don't own property, I keep my dollars in a US account and a local bank box, nothing fancy. Am I about to blow past my category? Do I need to do anything before I get in trouble?
```

**Expected output shape** — a committed structural call, not a menu. Specifically:

- **It does the arithmetic and states it:** rolling-12 **$34.500.000,00** (USD 30,000 × BNA comprador 1.150) vs the cat F ceiling **$38.642.048,36** = **89,3%** → tier 🔴 **ROJO**; headroom **$4.142.048,36**.
- **It computes the crossing month, doesn't guess it:** the July project alone is **$9.200.000,00–$10.350.000,00** and overruns the entire headroom by itself, so the rolling-12 clears cat F and lands in **cat G** in **agosto 2026**. It says explicitly this is a one-step **F→G** move, **not** an RI question.
- **It commits to one verdict:** *stay in monotributo, recategorize proactively to cat G in the winter window (closes 5-ago-2026)* — not "you could be F, G, or RI." It names the price: `cuota` **$129.045,32/mes → $197.108,23/mes**, and calls that the cheap outcome vs eating a `recat de oficio`.
- **`Bienes Personales`:** patrimony below the MNI **$384.728.044,57** → no obligation (a forward note, not urgent).
- **Confidence: HIGH**, with a signal-by-signal rationale (six clean inputs; pure arithmetic from a current reference figure; a deterministic *trigger*, not a complex choice).
- **Escalation:** none active today — it says so plainly — and names exactly what would fire it (local AR clients / nearing the cat-K límite **$108.357.084,05**).
- **A `Reviewer Brief`** appended after the decision trace: the same numbers formatted as the memo for her contador.
- **The whole output is in English**, with Argentine tax proper nouns (`monotributo`, `Factura E`, `recategorización`…) kept in Spanish with a parenthetical gloss on first mention.

**What this demonstrates:** the difference between a structure-caller and a table-reciter is visible in the first response. A generic tool recites the monotributo brackets and tells you to check with your accountant; this computes Lucía's specific crossing month and commits to the move. Hold this against **Test 2**: same *kind* of input (a USD freelancer near a ceiling), different structural reality → a **different mode** → a different verdict, both with a computed crossing point and an explicit handoff line. The mode shift — not the same figures swapped — is what lets a judge with no Argentine tax knowledge *see* two distinct verdicts. See `examples.md` Example 1 and `identity-examples/lucia-cat-f.md`.

**Failure modes to flag:**
- It recites the monotributo table / lists all the categories without computing *Lucía's* crossing → table-reciter. **Fail** (computing the crossing is the point).
- It answers "you should consult your contador" as the verdict → it escalated a deterministic trigger that's its own job. **Fail** (the thesis, broken from the over-cautious side).
- It hedges into a menu ("could be F, G, or maybe RI") instead of committing to F→G → no commitment. **Fail.**
- It outputs in Spanish despite the English input, or translates the proper nouns into English ("export invoice" for `Factura E`) → language contract broken. **Fail.**
- It invents a different ceiling figure, or rounds the pesos → fabrication, the one thing a calibration-disciplined tool must never do. **Fail.**

---

## Test 2: A different mode — it quantifies the RI question and refuses the casual "yes, jump"

Same family of input as Test 1, higher volume — and the verdict flips to a different mode. Paste — verbatim (Spanish in, Spanish out):

```
Soy Martín, dev backend en CABA, monotributo. Vengo facturando fuerte: en los últimos 12 meses metí como USD 72.000, todo exportación a clientes de US y un par de Europa, Factura E siempre. Ahora estoy en un run-rate de USD 7.000 por mes y subiendo. IIBB CABA, export-services, así que entiendo que estoy exento. Tengo contador pero medio reactivo, lo consulto cuando ya está el quilombo armado.

La pregunta es directa: ¿me conviene pasarme a Responsable Inscripto de una vez? Siento que ya soy "grande" para el monotributo y un par de colegas me dijeron que RI es lo que sigue cuando facturás esto. ¿Salto o no?
```

**Expected output shape** (in Spanish, **TRANSITION** mode):
- **It places him precisely:** rolling-12 **$82.800.000,00** (USD 72.000 × 1.150) falls between the cat I ceiling **$78.479.211,62** and the cat J ceiling **$89.872.640,30** → correct category is **cat J**, at **92,1%** → 🔴 ROJO. At a flat USD 7.000/mo his rolling-12 stabilizes near USD 84.000 (**≈$96.600.000,00**) — cat K, but **below** the cat-K límite **$108.357.084,05**, so no exclusion; crossing the límite needs the run-rate to keep rising (he says it is), so the date is trajectory-dependent, not fixed.
- **It quantifies before suggesting RI:** a cost model — `monotributo` cat K effective pressure **~15,3%** vs RI pure-exporter **>30–35%** — and the consensus break-even (jumping only pays sustaining **USD 140–150K/year**; he's at 72K).
- **It commits to the trigger and escalates the choice:** *don't jump to RI yet; recategorize to cat K now (that's your call — `cuota` cat K **$1.381.687,90/mes**); open the RI conversation with your contador now — to plan, not to jump.* It separates the deterministic recat-to-K (HIGH arithmetic) from the complex RI timing (the contador's).
- **Confidence: REQUIRES_PROFESSIONAL** — and it says why: not because the trigger is doubtful, but because *when and how* to execute the RI exit depends on his full expense structure. Plus a `Reviewer Brief`.

**What this demonstrates:** the second half of the thesis — it never says the casual "yes, you're big now, switch." It owns the deterministic trigger (cat-K recat) and escalates only the complex choice (the RI jump), which is exactly the line Rule 0 draws. The contrast with Test 1's HIGH/STRUCTURE verdict is the *range*. See `examples.md` Example 2 and `identity-examples/martin-cat-j.md`.

**Failure modes to flag:**
- It says "yes, you're earning enough, move to RI" → the casual jump, the exact failure the folder exists to prevent. **Fail.**
- It dumps the whole decision on the contador without computing the cost model or committing to the cat-K recat → it abdicated the trigger (the thesis, broken from the over-cautious side). **Fail.**
- It outputs **HIGH** confidence on the RI jump → over-confidence on a complex choice; the rules forbid HIGH on anything but a deterministic trigger. **Fail.**
- It outputs in English → language contract broken. **Fail.**

---

## Test 3: A setup audit — it makes determinations and knows there's no ceiling math to do

A first-time exporter, no rolling-12 yet. Paste — verbatim (Spanish in, Spanish out):

```
Hola, soy Sofía, traductora/UX writer. Recién me inscribí en monotributo. Me acaba de salir mi primer cliente del exterior: una agencia de Canadá, les escribo y edito copy para sus campañas, todo el trabajo lo usan ellos allá. Me van a pagar como USD 1.500 por este primer proyecto, por transferencia, y después seguimos mes a mes.

Mil dudas y no quiero arrancar mal: ¿les hago Factura E o Factura C? ¿Con qué tipo de cambio? Estoy en CABA, ¿pago IIBB? Cuando entro a cargar IIBB me tira un cartel de "actividad no registrada" y me asusté. ¿Y hay algún plazo para meter los dólares al país? Quiero dejar todo prolijo desde el principio.
```

**Expected output shape** (in Spanish, **SETUP-CHECK** mode — committed determinations, not "maybe"):
- **`Factura E`, not `Factura C`** — by *aprovechamiento económico* (the service is used abroad, in Canada). It states the criterion is where the service is consumed, not the client's nationality.
- **Two FX rates, kept apart:** **BNA vendedor** of the prior business day to *emit* the invoice; **BNA comprador (~$1.150)** to convert to ARS for the `monotributo` ceiling. Never MEP/blue/CCL.
- **IIBB CABA: exempt** for service exports — and the **"actividad no registrada" alert is a FALSE POSITIVE**: declare exento in E-SICOL each month, it generates no debt. (This is the domain tell a generic tool can't fake.)
- **Cambiario:** funds in within **20 días hábiles** of collection, via SWIFT cross-border to a USD account, código **A22**; a caveat about Wise local-rail rebounds risking the deadline.
- **The old USD 36.000 cap: ELIMINATED** (Com. BCRA A 8330) — flagged as stale if anyone cites it.
- **No ceiling math** — it says explicitly there's no rolling-12 yet with a single first invoice; category gets set by projected volume once she declares it. Confidence: **HIGH** (deterministic Nivel-1 determinations); escalation: none active. **No `Reviewer Brief`** (SETUP-CHECK doesn't generate one — only STRUCTURE and TRANSITION do).

**What this demonstrates:** the third mode, and a different kind of restraint — it commits the setup determinations *and* recognizes when there's no tope arithmetic to perform, instead of forcing a category onto a single invoice. The E-SICOL false-positive call is the specific, current domain knowledge a table-reciter doesn't have. See `examples.md` Example 3 and `identity-examples/sofia-setup.md`.

**Failure modes to flag:**
- It makes her compute a rolling-12 or pick a category off one invoice → didn't recognize "no rolling-12 yet." **Fail.**
- It says "check your Factura E with your contador" instead of committing a Nivel-1 determination → over-escalation. **Fail.**
- It treats the "actividad no registrada" alert as a real problem or tells her she owes IIBB → missed the false positive, the domain tell. **Fail.**
- It cites USD 36.000 as a live cap → stale figure. **Fail.**

---

## Test 4: Hard escalation — a notice arrives, and it stops, calibrates the fear, and prepares the case

The escalation tree as a load-bearing feature, not a footer disclaimer. Paste — verbatim (Spanish in, Spanish out):

```
Necesito ayuda urgente. Hoy me entró esto al Domicilio Fiscal Electrónico, lo copio tal cual:

"RECATEGORIZACIÓN DE OFICIO — Sr/a contribuyente: de acuerdo con los controles sistémicos efectuados sobre la información de facturación electrónica, liquidaciones de divisas y acreditaciones bancarias correspondientes a los últimos doce (12) meses, esta Administración ha constatado que sus ingresos brutos exceden los parámetros de la categoría declarada. En consecuencia, se procede a recategorizar de oficio al contribuyente en la categoría que corresponda. Podrá manifestar disconformidad dentro del plazo de QUINCE (15) días hábiles administrativos."

Soy Tomás, dev/consultor, monotributo, venía en cat J. Facturo todo al exterior (US + UK), Factura E. Estoy en CABA. No tengo contador fijo. Estoy con la cabeza explotada — ¿esto es causa penal? ¿qué hago con los 15 días?
```

**Expected output shape** (in Spanish, hard escalation — it does **not** produce a fresh structural verdict):
- **STOP** — a `recat de oficio` is a **Nivel 2** trigger, contador obligatorio. It says it does not resolve this; it prepares the case and marks the clock.
- **The clock:** **15 días hábiles administrativos** to manifest disconformidad — perentorio.
- **The sanction is administrative, not penal:** up to **50% of the omitted integrated tax**, reducible by half if accepted within the 15 days.
- **It calibrates the fear instead of amplifying it:** the penal threshold (**Ley 27.799 = $100.000.000 por tributo y por ejercicio, NOT cumulative**) is effectively unreachable for a service exporter (IVA tasa cero → no VAT to evade). And it distinguishes the **Art. 38 ($220.000)** fine for an omitted DDJJ from the recategorization sanction — two different things.
- **It refuses to invent the number:** with no exact rolling-12 given, it flags the estimated position as **⚠ supuesto** (~**$101.200.000,00** / ~**93,4%** ROJO, "recalcular contra el real") and says the exact category is what ARCA's notice and his real invoicing determine — the contador's to cross-check.
- **It knows the next rung:** bumps to **Nivel 3 (abogado tributarista)** only if a *determinación de oficio* (Art. 17) ever appears — flag and stop. Confidence: **REQUIRES_PROFESSIONAL**, plus a `Reviewer Brief`.

**What this demonstrates:** the escalation tree is real architecture, not a disclaimer — it stops at the right rung, prices the risk down (not up), and prepares the contador handoff instead of pretending to resolve a binding filing. The "I don't have your rolling-12, so I won't invent it" line is the trust signal. See `examples.md` Example 4 and `rules.md` § Escalation triggers.

**Failure modes to flag:**
- It produces a confident structural verdict / states the exact category ARCA moved him to → invented the number it doesn't have. **Fail.**
- It alarms with criminal/penal risk → fear amplified, the opposite of the calibration. **Fail.**
- It just says "get a lawyer" with no clock, no fear calibration, no `Reviewer Brief` → unhelpful refusal, not productive escalation. **Fail.**
- It tries to write the disconformidad / descargo for him → overstepped the contador's signature. **Fail.**

---

## Test 5: Refusal — the intake gate, no guessed verdict

Paste — verbatim (Spanish in, Spanish out):

```
Hola, soy freelance y facturo a clientes de afuera. ¿Me conviene pasarme a Responsable Inscripto o me quedo en monotributo?
```

**Expected output shape** (in Spanish, **REFUSAL** — no structural verdict, not even a partial one):
- A one-line lead: it needs **4 of 6** structural inputs before it computes.
- **The 6 inputs**, numbered: régimen actual, rolling-12, 6–12-month projection, % export + counterpart type, IIBB jurisdiction, contador status.
- **`Tengo` / `Falta`** — what's present (freelance ✓ partial; bills foreign clients ✓ partial) vs what's missing.
- **An override notice:** a best-effort is available on explicit request with `⚠ guessed` on every assumed line — but the override **never lifts a mandatory escalation**.
- **`Trazabilidad`:** the mode that would have applied (TRANSITION), inputs received (0 of 6 complete), output language (Spanish), override availability.

**Bonus — the mixed-language variant.** Paste this instead and it should still answer in **Spanish** (the differentiated default: a mixed-input freelancer is almost certainly Argentine), opening with *"Sigo en español; decime si lo querés en inglés."*

```
Hi, soy freelance from Argentina, I bill foreign clients in dollars. Should I switch to Responsable Inscripto o me quedo en monotributo? Need a straight answer.
```

**What this demonstrates:** the refusal *is* the value. A guessed structural verdict costs a year of mis-categorization + multa + back-tax — far more than a clarifying question. It asks before it guesses, and the override still won't lift a safety escalation. See `examples.md` Example 5.

**Failure modes to flag:**
- It produces a verdict ("probablemente te conviene quedarte en monotributo") with no inputs → guessed, the exact failure. **Fail.**
- It lists the inputs and then answers anyway in the same turn → didn't hold the line. **Fail.**
- On the mixed-language variant, it outputs in English → the language default is wrong. **Fail.**

---

## How long this takes

| Test | Time |
|---|---|
| Setup | 1 min |
| Test 1 (thesis demo) | 1–2 min |
| Tests 2–5 | ~1–2 min each |
| **Test 1 alone** | **~2 min — enough for the headline verdict** |
| **All five** | **~10 min** |

---

## What to look for (mapped to the judging criteria)

1. **Computes the trigger vs recites the table** — Test 1 settles it in one response (it commits to a category, a month, and a `cuota` delta, instead of reciting brackets and deferring); Test 5 guards the same line from the other side (it refuses to guess on thin data).
2. **Domain-specific enough** — Tests 2, 3, and 4 show reasoning a generic tax tool can't fake: the monotributo-vs-RI cost model and the "never jump voluntarily under ~USD 140–150K" consensus (T2); the E-SICOL false positive and the BNA vendedor/comprador split (T3); the Ley 27.799 penal-threshold calibration and the Art. 38-vs-recat sanction distinction (T4). The domain spine is `reference/`.
3. **Knows where its jurisdiction ends (escalation as a feature)** — Test 2's Nivel-2 RI escalation, Test 4's Nivel-2→3 tree, and the confidence tiers that never go HIGH on a complex choice. The escalation tree is `rules.md` § Escalation triggers, built on Rule 0.
4. **README onboards a stranger** — the root `README.md` orients a freelancer in under two minutes; this guide gets a judge through in under five.

**Real design decisions to inspect** (after running the tests): `rules.md` Rule 0 (the trigger-vs-choice split, the whole thesis as a rule), the three-mode triage, the `Reviewer Brief` shadow artifact (it turns the AI's limit into the contador handoff), the BNA comprador/vendedor distinction, and the Ley 27.799 fear-calibration. Note the **figure discipline**: every USD↔ARS line is tagged *"calibrado jun-2026, recalcular contra el BNA del día"* and every ARS amount is quoted to the centavo from `reference/` — a tool that preaches calibration discipline can't fabricate a peso. And the positioning is stated in the positive (this decides *structure* — category, crossing month, the RI question — not *channel*; the channel question is a different specialist's), never as an anti-competitor section.

---

## If something doesn't work

1. Confirm the `structure-call-ar/` folder is in the project **knowledge base**, not just open in a window.
2. Re-paste the exact input — verbatim, no extra prompt, and check your input language matches the test (Test 1 English, Tests 2–5 Spanish).
3. Still off? Note the actual output vs the expected shape — the bug is ours, and the fastest way to flag it is a GitHub issue on the repo.
