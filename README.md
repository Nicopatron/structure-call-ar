# structure-call-ar

The structure call an Argentine freelancer billing in USD makes a few times a year, and almost always makes late: which `monotributo` category am I really in, is this the year a US contract forces me into `Responsable Inscripto`, is my `Factura E` setup correct. This folder computes the answer from your real numbers, commits to it, and hands you a brief for your `contador`.

It is a folder of plain markdown. Drop the [`structure-call-ar/`](./structure-call-ar) folder into a Claude Project's knowledge base and Claude becomes the operator. No install, no API key. It also runs in Claude Code or any agent that reads a folder.

## Start here

- New to it? [`structure-call-ar/README.md`](./structure-call-ar/README.md) onboards in under two minutes.
- Grading it? [`structure-call-ar/JUDGE_GUIDE.md`](./structure-call-ar/JUDGE_GUIDE.md) is a five-test cold eval: glossary up top, one behavior per test.
- The brief it was built to: [`brief.md`](./brief.md).
- The landing page source is in [`landing/`](./landing) (Next.js).

Calibrated junio 2026 against the monotributo table, the services-export regime, and the BCRA cambiario rules. USD↔ARS figures use the BNA comprador (~$1.430/USD, BNA al 23-jun-2026); the folder recomputes against the day's rate and flags when ARCA's next table makes a categorization stale.

Submission to Clief Notes Weekly Competition #8. MIT licensed.
