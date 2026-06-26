import type { ReactNode } from "react";
import { GridBeam } from "@/components/ui/grid-beam";
import { headingVariants } from "@/components/ui/gradient-heading";
import { TextureCard, TextureCardContent } from "@/components/ui/texture-card";
import { VerdictDemo } from "@/components/verdict-demo";
import { cn } from "@/lib/utils";

// Single-page landing for structure-call-ar. GridBeam is the only client island.
// Copy is the source of truth in ../../structure-call-ar/README.md; the Lucía
// figures below are pinned identical to examples.md Example 1, the README
// snapshot, JUDGE_GUIDE Test 1, and identity-examples/lucia-cat-f.md.

// Repo goes public at submission (paso 7); until then the CTA points at the
// reserved URL. Override at deploy time with NEXT_PUBLIC_REPO_URL.
const repoUrl =
  process.env.NEXT_PUBLIC_REPO_URL ??
  "https://github.com/Nicopatron/structure-call-ar";

const quickTerms: { term: string; means: string }[] = [
  { term: "cat A–K", means: "your monotributo category: 11 income brackets in Argentina's simplified tax regime" },
  { term: "rolling-12", means: "your last 12 months of invoicing, the number the category ceiling is measured against" },
  { term: "RI (Responsable Inscripto)", means: "the general regime: IVA + Ganancias + a monthly contador. What you get forced into past cat K" },
  { term: "Factura E", means: "the export-services invoice (vs Factura C for local clients)" },
  { term: "IIBB (Ingresos Brutos)", means: "provincial gross-income tax; treatment varies radically by province" },
  { term: "recategorización", means: "the semi-annual move between categories. Proactive = you do it; de oficio = ARCA does it to you, with a penalty" },
  { term: "exclusión de oficio", means: "ARCA forcibly ejecting you from monotributo, retroactively" },
  { term: "contador", means: "your accountant, the one who signs the DDJJ. This folder prepares; the contador signs" },
  { term: "Reviewer Brief", means: "the memo this folder writes for your contador, so the meeting is 10 minutes, not a week" },
];

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <p className="text-mute text-sm tracking-wider uppercase mb-6 font-mono">{children}</p>
);

const Page = () => {
  return (
    <main className="bg-paper text-ink">
      {/* ===================== HERO ===================== */}
      <header className="relative border-b border-line">
        <GridBeam
          theme="dark"
          colorVariant="ocean"
          rows={4}
          cols={6}
          strength={0.55}
          className="px-6 pt-16 pb-12 md:pt-28 md:pb-16"
        >
          <div className="mx-auto max-w-2xl">
          <Eyebrow>A folder-based structure advisor for Argentine freelancers billing in USD</Eyebrow>
          <h1 className="mb-8 leading-tight">
            <span className={cn(headingVariants({ size: "lg", weight: "semi" }))}>
              The structure call you make a few times a year.
            </span>{" "}
            <span className="text-accent text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight">
              Almost always, you make it late.
            </span>
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed text-ink/80">
            It reads your rolling-12, does the arithmetic, and tells you the month you
            cross. That part is deterministic. The harder call (jump to RI, form an SAS)
            belongs to your contador, and the folder hands it over with the brief already
            written.
          </p>
          <p className="text-mute text-base leading-relaxed mt-6">
            Miss the crossing and ARCA finds it before you do: a{" "}
            <code className="font-mono text-sm bg-panel px-1.5 py-0.5 rounded border border-line">
              recat de oficio
            </code>{" "}
            with up to a 50% penalty, or an{" "}
            <code className="font-mono text-sm bg-panel px-1.5 py-0.5 rounded border border-line">
              exclusión de oficio
            </code>{" "}
            that makes you Responsable Inscripto retroactively.
          </p>
          </div>
        </GridBeam>
      </header>

      {/* ===================== WHAT YOU GET BACK ===================== */}
      <section className="px-6 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>What you get back</Eyebrow>
          <h2 className="text-2xl md:text-3xl leading-tight font-semibold mb-10">
            The crossing month, and the move it commits you to.
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-mute text-xs tracking-wider uppercase mb-2 font-mono">You paste:</p>
              <blockquote className="text-base md:text-lg leading-relaxed bg-panel border border-line rounded-lg p-5 text-ink/90">
                I&apos;m Lucía, product designer in Buenos Aires, monotributo cat F. Over the last
                12 months I&apos;ve invoiced ~USD 30,000, all export to US clients, Factura E, IIBB
                CABA. I have a big project closing end of July (USD 8–9K in one shot) and a contador
                I email a couple times a year. Am I about to blow past my category?
              </blockquote>
            </div>

            <div>
              <p className="text-mute text-xs tracking-wider uppercase mb-2 font-mono">
                A generic tax tool recites the table. This returns:
              </p>
              <TextureCard>
                <TextureCardContent className="space-y-4 p-5 text-base leading-relaxed text-ink/90">
                <p>
                  Rolling-12 <span className="font-mono">$42.900.000,00</span> (USD 30K × BNA{" "}
                  <span className="font-mono">1.430</span>) is already over the cat F ceiling{" "}
                  <span className="font-mono">$38.642.048,36</span> → inside cat G at{" "}
                  <span className="font-mono">92,8%</span> → tier{" "}
                  <span className="text-rojo font-semibold">🔴 ROJO</span>. Your July project (
                  <span className="font-mono">$11.440.000,00–$12.870.000,00</span>) then lifts the
                  rolling-12 into cat H. Two-step F→G (already crossed) → G→H, not an RI question.
                </p>
                <p>
                  <span className="text-accent">Verdict:</span> stay in monotributo, recategorize
                  proactively F→G in the winter window (closes{" "}
                  <span className="font-mono">5-ago-2026</span>), then G→H after July. Your cuota goes{" "}
                  <span className="font-mono">$129.045,32</span> →{" "}
                  <span className="font-mono">$197.108,23</span> →{" "}
                  <span className="font-mono">$447.346,93</span>/mes. Two clean proactive moves.{" "}
                  <span className="font-mono">Bienes Personales</span>: below the MNI, no obligation.
                </p>
                <p className="font-mono text-sm border-l-2 border-line pl-4 text-ink/85">
                  <span className="text-verde">Confidence: HIGH</span>. A deterministic trigger, all
                  six inputs clean. Escalation: none active today; it fires only at mixed income or near
                  the cat-K límite.
                </p>
                <p className="text-ink/85">
                  <em>Plus the Reviewer Brief for your contador</em>: the same numbers, formatted as the
                  memo you hand across the table.
                </p>
                </TextureCardContent>
              </TextureCard>
            </div>

            <p className="text-mute text-sm leading-relaxed border-l-2 border-line pl-4">
              Figures convert USD→ARS at the BNA comprador (~<span className="font-mono">$1.430</span>/USD,
              BNA al 23-jun-2026); the folder recomputes against the day&apos;s rate on every paste, and flags when the
              next ARCA table makes a categorization stale.
            </p>

            <p className="text-mute text-base leading-relaxed">
              A generic tool would have recited the monotributo table. This one computes the crossing
              month and commits to the move.
            </p>
          </div>
        </div>
      </section>

      {/* ===================== LIVE DEMO ===================== */}
      <section className="px-6 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Run it yourself</Eyebrow>
          <h2 className="text-2xl md:text-3xl leading-tight font-semibold mb-4">
            Paste your own situation. Watch it compute, not recite.
          </h2>
          <p className="text-mute text-base leading-relaxed mb-8">
            The same folder the judge loads into a Claude Project, running live here on a
            free model. The figure-for-figure verdict runs on your own Claude. Spanish in,
            Spanish out. It computes the crossing month and commits, or, on thin inputs,
            asks for the six it needs instead of guessing.
          </p>
          <VerdictDemo />
        </div>
      </section>

      {/* ===================== BYLINE ===================== */}
      <section className="px-6 py-12 md:py-16 border-t border-line">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Built by</Eyebrow>
          <p className="text-lg md:text-xl leading-relaxed">
            I invoice US clients in USD from Argentina, and I learned the monotributo ceilings, the
            recategorización windows, and the exclusión de oficio retroactivity the expensive way, by
            almost missing a crossing and nearly eating a recat de oficio.
          </p>
          <p className="text-lg md:text-xl leading-relaxed mt-4 text-ink/80">
            The &quot;which channel do I cash my dollars in&quot; question is the easy one. A different
            specialist handles it. The one that costs you a year of back-tax is structural and episodic.
            This folder is the filter <em>before</em> the contador that I wish I&apos;d had on day one. A
            folder of plain markdown, no install, no API key. You drop it into a Claude Project and
            Claude becomes the operator.
          </p>
        </div>
      </section>

      {/* ===================== THE FLOW / METHOD ===================== */}
      <section className="px-6 py-16 md:py-24 border-t border-line">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>The flow on every paste</Eyebrow>
          <h2 className="text-2xl md:text-3xl leading-tight font-semibold mb-10">
            Compute the trigger. Never opine it.
          </h2>

          <div className="bg-panel border border-line rounded-lg p-6 font-mono text-sm leading-relaxed text-ink/85 mb-10 overflow-x-auto">
            <pre>{`1. MODE DETECTION   STRUCTURE (default) / TRANSITION (RI) / SETUP-CHECK
2. INTAKE GATE      6 structural inputs, 4-of-6 missing -> it asks, it
                    doesn't guess
3. COMPUTE TRIGGER  rolling-12 vs the ceiling, the crossing month
                    (arithmetic, not opinion)
4. VERDICT          structural call + confidence (HIGH / MEDIUM /
                    REQUIRES_PROFESSIONAL)
5. ESCALATION       the exact line where it stops being your call
                    (mandatory, every output)
6. REVIEWER BRIEF   the memo for your contador`}</pre>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">It computes the trigger, it doesn&apos;t recite the table</h3>
              <p className="text-ink/75 leading-relaxed">
                Rolling-12 against the ceiling, the headroom, the crossing month, pure arithmetic from a
                current reference figure. A spreadsheet reads the table; this one tells you the month you
                cross and commits to the move.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">It knows exactly where its jurisdiction ends</h3>
              <p className="text-ink/75 leading-relaxed">
                Proactive recategorización is yours to do. Jumping to RI, answering a recat de oficio,
                forming an SAS: those are the contador&apos;s. Every output names the exact escalation line,
                what&apos;s yours to do and what&apos;s the contador&apos;s.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">It commits, with a calibration date</h3>
              <p className="text-ink/75 leading-relaxed">
                Calibrated as of junio 2026 against the monotributo table, the export regime, and the BCRA
                cambiario rules. Figures that need a contador&apos;s confirmation are flagged, not asserted,
                and when ARCA publishes the next table, the folder says its numbers went stale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== QUICK TERMS ===================== */}
      <section className="px-6 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Quick terms (for the non-Argentine reader)</Eyebrow>
          <h2 className="text-2xl md:text-3xl leading-tight font-semibold mb-10">
            Eleven brackets, two regimes, one deadline you keep missing.
          </h2>
          <dl className="space-y-4">
            {quickTerms.map(({ term, means }) => (
              <div key={term} className="border-l-2 border-line pl-4">
                <dt className="font-mono text-sm text-accent">{term}</dt>
                <dd className="text-ink/75 leading-relaxed">{means}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ===================== HOW TO USE ===================== */}
      <section className="px-6 py-16 md:py-24 border-t border-line">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Getting started</Eyebrow>
          <h2 className="text-2xl md:text-3xl leading-tight font-semibold mb-10">Three paths.</h2>

          <div className="space-y-10">
            <div>
              <h3 className="text-lg font-semibold mb-2">A. 60-second cold test</h3>
              <p className="text-ink/75 leading-relaxed">
                In a{" "}
                <a className="underline decoration-mute hover:decoration-accent" href="https://claude.ai" target="_blank" rel="noopener">
                  Claude Project
                </a>{" "}
                with the folder loaded, paste <em>&quot;¿me conviene RI?&quot;</em> with nothing else. If it
                asks for the six structural inputs instead of guessing a verdict, it&apos;s working.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">B. A real evaluation</h3>
              <p className="text-ink/75 leading-relaxed">
                Paste your situation: category, rolling-12 USD volume, a 6–12 month projection, % export +
                client type, IIBB province, contador status. Get the crossing month, the verdict, and the
                Reviewer Brief back. See{" "}
                <code className="font-mono text-sm bg-panel px-1.5 py-0.5 rounded border border-line">JUDGE_GUIDE.md</code>{" "}
                for five paste-ready tests, glossary up top, one behavior each.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">C. Agent / CLI</h3>
              <p className="text-ink/75 leading-relaxed">
                The contract lives in{" "}
                <code className="font-mono text-sm bg-panel px-1.5 py-0.5 rounded border border-line">rules.md</code>.
                It runs in Claude Code or any agent that reads a folder. To adapt it, fork and edit the
                markdown: the folder <em>is</em> the program.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FILE MAP ===================== */}
      <section className="px-6 py-16 md:py-24 border-t border-line">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>What&apos;s in the folder</Eyebrow>
          <h2 className="text-2xl md:text-3xl leading-tight font-semibold mb-10">The folder is the program.</h2>

          <pre className="font-mono text-sm leading-relaxed text-ink/85 overflow-x-auto bg-panel border border-line rounded-lg p-6">{`structure-call-ar/
├─ identity.md       the structure call before the contador
├─ rules.md          how it responds: the contract. Load-bearing.
├─ examples.md       five worked outputs, one behavior each
├─ reference/        the monotributo table, monotributo-vs-RI cost
│                    model, Factura E + cambiario, IIBB, Bienes
│                    Personales, the escalation triggers (the thesis)
├─ identity-examples/   three real freelancer profiles
├─ JUDGE_GUIDE.md    five paste-and-go tests
└─ README.md         onboarding in under two minutes`}</pre>
        </div>
      </section>

      {/* ===================== PAID TIER TEASER ===================== */}
      <section className="px-6 py-16 md:py-20 border-t border-line">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Want it done with you?</Eyebrow>
          <h2 className="text-2xl md:text-3xl leading-tight font-semibold mb-6">
            The folder stays the free, auditable core.
          </h2>
          <p className="text-ink/75 leading-relaxed">
            An annual <strong>Calibration Pack</strong> (recalibrated against each new ARCA table so your numbers
            never go stale) and a <strong>done-with-you structure review</strong> are the paid tier, for the
            freelancer who wants the crossing watched for them. The markdown core is and stays free: fork it,
            swap the operator, adapt <span className="font-mono">reference/</span> to your own situation.
          </p>
        </div>
      </section>

      {/* ===================== CTA ===================== */}
      <section className="px-6 py-20 md:py-28 border-t border-line">
        <div className="mx-auto max-w-2xl">
          <Eyebrow>Next</Eyebrow>
          <h2 className="text-2xl md:text-3xl leading-tight font-semibold mb-10">
            Run it before your next recategorización window.
          </h2>

          <a
            href={repoUrl}
            target="_blank"
            rel="noopener"
            className="block w-full py-4 px-6 bg-accent text-paper font-semibold text-lg text-center rounded-lg hover:bg-accent/90 transition-colors"
          >
            See the repo on GitHub
          </a>

          <p className="text-mute text-sm leading-relaxed mt-10 text-center">
            It informs the structure call; it never signs your DDJJ, and it&apos;s no substitute for your
            contador on a binding decision.
          </p>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="px-6 py-12 border-t border-line">
        <div className="mx-auto max-w-2xl">
          <p className="text-mute text-sm leading-relaxed">
            An open tool for Argentine freelancers billing in USD. MIT licensed.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Page;
