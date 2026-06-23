# structure-call-ar

**The structure call an Argentine freelancer billing in USD makes a few times a year — and almost always makes late.** Which `monotributo` category am I really in? Is this the year a US contract forces me out into `Responsable Inscripto`? Is my `Factura E` setup correct? `structure-call-ar` computes the answer, commits to it, and hands you a brief for your `contador`.

I invoice US clients in USD from Argentina, and I learned the monotributo ceilings, the `recategorización` windows, and the `exclusión de oficio` retroactivity the expensive way — by almost missing a crossing and nearly eating a `recat de oficio`. The "which channel do I cash my dollars in" question is the easy one (a different specialist handles it). The one that actually costs you a year of back-tax is structural and episodic: **recategorize proactively or wait for ARCA's official pass? Am I about to be forced into RI? At what exact point does this stop being my call and become my contador's?** This folder is the filter *before* the contador that I wish I'd had on day one.

> **The thesis in one line:** the *trigger* is deterministic — I read your rolling-12, do the arithmetic, and tell you the month you cross. The *complex choice* (jump to RI, form an SAS) is your contador's — I prepare the brief and escalate.

---

## Built to the brief — the five files

| The brief asks for | In this folder |
|---|---|
| **identity.md** — who the operator is | [identity.md](./identity.md) — the structure call *before* the contador; not a payment router, not your accountant |
| **rules.md** — how it responds | [rules.md](./rules.md) — the contract: 3 modes (STRUCTURE / TRANSITION / SETUP-CHECK) + the 6-input intake gate + confidence tiers + the mandatory escalation tree (Rule 0: compute the trigger, never opine it) |
| **examples.md** — what good looks like | [examples.md](./examples.md) — five worked outputs, one behavior each, plus a deliberate refusal |
| **reference/** — what it knows | [reference/](./reference/) — the monotributo table, the monotributo-vs-RI cost model, Factura E + cambiario, IIBB by province, Bienes Personales, and the escalation triggers (the thesis, encoded) |
| **README.md** — how to use it | this file |

The rest is reference the operator loads on demand: [JUDGE_GUIDE.md](./JUDGE_GUIDE.md) is a five-test cold-eval for graders (each test exercises one behavior, with the expected output documented beside the input); [identity-examples/](./identity-examples/) shows the same rules producing different work for three users (a cat-F designer watching the ceiling, a cat-J dev weighing RI, a first-time exporter); and `reference/cambios-fiscales-pending.md` is the catch file where the folder logs regulatory drift and earns updates from real use.

---

## Why this exists (the problem)

Reading the monotributo table takes **5 minutes**. Undoing a missed crossing takes **a year**: a `recat de oficio` with up to a 50% penalty on the omitted tax, or worse, an `exclusión de oficio` that retroactively makes you `Responsable Inscripto` from the day you crossed — with back-tax on `Ganancias` and `autónomos` for every month since. Most "tax help" either recites the table (a spreadsheet does that) or invents regulations with no calibration date and no idea when to stop (generic ChatGPT does that). This folder computes the *trigger* from your real numbers, commits to the structural verdict, and names the exact line where the decision becomes your contador's.

It is **not a payment router.** The "Wise vs MEP vs Deel, what rate today" question belongs to a different specialist. This one decides *structure* — your category, the crossing month, the RI question — not *channel*.

---

## Quick terms (for the non-Argentine reader)

| Term | Means |
|---|---|
| **cat A–K** | your `monotributo` category — 11 income brackets in Argentina's simplified tax regime |
| **rolling-12** | your last 12 months of invoicing — the number the category ceiling is measured against |
| **RI** (`Responsable Inscripto`) | the general tax regime: `IVA` + `Ganancias` + a monthly contador. What you get forced into past cat K |
| **`Factura E`** | the export-services invoice (vs `Factura C` for local clients) |
| **`IIBB`** (Ingresos Brutos) | provincial gross-income tax — treatment varies radically by province |
| **`recategorización`** | the semi-annual move between categories. Proactive = you do it; *de oficio* = ARCA does it to you, with a penalty |
| **`exclusión de oficio`** | ARCA forcibly ejecting you from monotributo, retroactively |
| **`contador`** | your accountant — the one who signs the DDJJ. This folder prepares; the contador signs |
| **Reviewer Brief** | the memo this folder writes for your contador, so the meeting is 10 minutes, not a week |

---

## What you get back (real output, inline)

Paste: *"I'm Lucía, product designer in Buenos Aires, monotributo cat F. Over the last 12 months I've invoiced ~USD 30,000, all export to US clients, Factura E, IIBB CABA. I have a big project closing end of July — USD 8–9K in one shot — and a contador I email a couple times a year. Am I about to blow past my category?"*

You get (abridged from [examples.md](./examples.md) Example 1):

> **Rolling-12 $34.500.000,00 vs the cat F ceiling $38.642.048,36 = 89,3% → tier 🔴 ROJO.** Your July project ($9.200.000,00–$10.350.000,00) overruns the entire headroom by itself, so the rolling-12 crosses into cat G in **agosto 2026**. One-step F→G — not an RI question.
> **Verdict: stay in monotributo, recategorize proactively to cat G in the winter window (closes 5-ago-2026).** Your cuota goes $129.045,32 → $197.108,23/mes — that's the price, and it's the cheap outcome. `Bienes Personales`: below the MNI, no obligation.
> **Confidence: HIGH** — a deterministic trigger, all six inputs clean. **Escalation:** none active today; it fires only at mixed income or near the cat-K límite.

*(plus the Reviewer Brief for your contador — the same numbers, formatted as the memo you hand across the table.)*

A generic tax tool would have recited the monotributo table. This one computes the crossing month and commits to the move.

---

## The flow on every paste

```
  you paste your situation (category, USD volume, projection, client type, province, contador)
            │
            ▼
   1. MODE DETECTION → STRUCTURE (default) / TRANSITION (RI question) / SETUP-CHECK (Factura E)
            │
            ▼
   2. INTAKE GATE — 6 structural inputs ── 4-of-6 missing → REFUSAL (it asks, it doesn't guess)
            │ enough inputs
            ▼
   3. COMPUTE THE TRIGGER — rolling-12 vs the ceiling, the crossing month (arithmetic, not opinion)
            ▼
   4. STRUCTURAL VERDICT + confidence (HIGH / MEDIUM / REQUIRES_PROFESSIONAL)
            ▼
   5. ESCALATION TRIGGER — the exact line where it stops being your call (mandatory, every output)
            ▼
   6. REVIEWER BRIEF — the memo for your contador
```

---

## How to use it

**Setup (3 minutes):** download this folder and add it to a [Claude Project](https://claude.ai)'s **knowledge base** — the whole folder (`rules.md`, `examples.md`, `identity.md`, and everything in `reference/` and `identity-examples/`). No install, no API key — it's plain markdown, and Claude becomes the operator. It also runs in Claude Code or any agent that reads a folder. To adapt it, fork and edit the markdown directly; the folder *is* the program.

**First paste:** give it the six inputs from [`reference/intake-checklist.md`](./reference/intake-checklist.md) — your category, rolling-12 USD volume, 6–12 month projection, % export + client type, `IIBB` province, and contador status. If you're missing four or more, it asks before it computes — that's the design, not a stall. A guessed structural verdict costs a year of mis-categorization; a clarifying question costs a sentence.

**Bilingual:** Spanish input → Spanish output (Rioplatense). English input → English output. Mixed with no clear dominant → Spanish (you're almost certainly an Argentine freelancer). AR-tax proper nouns stay Spanish in any language.

**Evaluating cold, no Argentine tax knowledge?** Open [`examples.md`](./examples.md), copy the **What Lucía pastes** block (Example 1 — the flagship), paste it into your project, and ask *"What's my structural position?"* The expected output is documented right beside the input — auditable in 30 seconds. For the full five-test walkthrough (glossary up top, one behavior per test), [`JUDGE_GUIDE.md`](./JUDGE_GUIDE.md) onboards a grader cold in under five minutes.

### Try these five (each exercises one behavior)

1. **Lucía** (EN) — *"~USD 30K/year on cat F, big project closing in July, am I about to blow past my category?"* → deterministic F→G crossing, Confidence HIGH. (Example 1)
2. **Martín** (ES) — *"facturo USD 72K, ¿me conviene pasarme a RI de una vez?"* → quantified, NO casual jump, REQUIRES_PROFESSIONAL. (Example 2)
3. **Sofía** (ES) — *"primera exportación a una agencia de Canadá, ¿Factura E o C?"* → setup determinations, no tope math. (Example 3)
4. **Tomás** (ES) — pastes a `recat de oficio` notification → hard escalation, the 15-business-day clock, fear calibrated (administrative, not criminal). (Example 4)
5. **Refusal** (ES) — *"¿me conviene RI?"* with nothing else → the intake gate, the 6 inputs, no guessed verdict. (Example 5)

---

## When NOT to use it

If you want to know which channel to cash your dollars in this month, that's a routing question — wrong specialist. If your decision is already in front of a contador as a binding filing, this prepares the brief but doesn't replace the signature. And it tells you so itself, on the line where its jurisdiction ends.

---

## Calibration

Calibrated as of **junio 2026** against the `monotributo` table (Feb–Jul 2026), the `Ganancias`/`IVA`-export regime, the BCRA cambiario rules, and provincial `IIBB` law. The full citation list is the single source of truth in [`rules.md`](./rules.md) § Calibration date. ARCA publishes the next table ~15-jul-2026 — figures go stale for categorizations after that, and the folder flags it in the output. USD↔ARS figures use the **BNA comprador** (~$1.150/USD, jun-2026); recompute against the day's rate.

---

*MIT licensed — fork it, swap the operator, adapt `reference/` to your domain. **Want it done with you?** An annual **Calibration Pack** (recalibrated against each new ARCA table) and a done-with-you structure review are the paid tier — the folder stays the free, auditable core. This folder informs the structure call; it never signs your DDJJ, and it's no substitute for your contador on a binding decision.*
