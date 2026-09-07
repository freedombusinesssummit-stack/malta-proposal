import {
  Section,
  Exhibit,
  Grid,
  Kpi,
  Finding,
  SoWhat,
  Note,
  ReportNav,
} from "@/components/report/ui";
import {
  BarList,
  SplitBar,
  Donut,
  DotPlot,
  Matrix,
  TimeSeries,
  RankTable,
  Funnel,
  Quote,
  BLUE,
} from "@/components/report/charts";
import { report as R } from "@/lib/report-data";

const N = R.meta.respondents;
// Exact label match first, substring only as a fallback — several labels
// contain each other (e.g. "Malta" and "Europe (ex-Malta)").
function find<T extends { label: string }>(arr: readonly T[], q: string): T {
  const n = q.toLowerCase();
  return (arr.find((i) => i.label.toLowerCase() === n) ??
    arr.find((i) => i.label.toLowerCase().includes(n)))!;
}

export default function ReportPage() {
  const nearTerm = R.funnel.nearTerm;
  const capitalReady = R.income.capitalReady;
  const mprp = R.programs.pathway[0];
  const residencyFocus = R.programs.direction[0];
  const holding = R.programs.company[0];
  const founders = R.audience.seniority[0];
  const usShare = R.geo.usCitizen[0];
  const maltaRegion = find(R.geo.regions, "malta");
  const peak = R.timeline.reduce((a, b) => (b.n > a.n ? b : a));
  const last72 = R.timeline.slice(-8, -5).reduce((s, d) => s + d.n, 0);
  const maltaActive = N - find(R.funnel.active, "not active").value;

  return (
    <main id="top" className="rpt bg-white">
      <ReportNav />

      {/* ============================ HERO ============================ */}
      <header className="border-b border-[#0d3350] bg-[#051c2c] text-white">
        <div className="rpt-wrap py-16 sm:py-24">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-[#8fb8ff]">
            <span>Audience &amp; demand report</span>
            <span className="h-px w-8 bg-[#2251ff]" />
            <span>September 2026</span>
          </div>
          <h1 className="rpt-h1 mt-6 max-w-4xl">
            Freedom Business Summit 2026
            <span className="block text-[#8fb8ff]">Malta Event Edition</span>
          </h1>
          <p className="mt-6 max-w-2xl text-[16px] leading-relaxed text-[#c3d2e6]">
            Who applied, what they earn, where they come from and which Malta programmes
            they want. A demand read on {R.meta.respondents} qualified applicants captured
            over {R.meta.days} days, built to guide 2027 programming, partner mix and
            pipeline conversion.
          </p>

          <div className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { v: R.meta.respondents, l: "Unique applicants", n: `${R.meta.submissions} submissions, de-duplicated` },
              { v: R.meta.countries, l: "Countries represented", n: `${usShare.share}% U.S. citizens or residents` },
              { v: `${founders.share}%`, l: "Founders, owners, C-suite", n: "Plus 12.8% directors and investors" },
              { v: `${R.funnel.nearTermShare}%`, l: "Ready to act within 9 months", n: `${capitalReady} applicants already funded` },
            ].map((k) => (
              <div key={k.l} className="border-t-2 border-[#2251ff] pt-4">
                <div className="rpt-kpi text-white">{k.v}</div>
                <div className="mt-2 text-[13px] font-semibold text-white">{k.l}</div>
                <div className="mt-1 text-[12px] leading-snug text-[#8fa6bd]">{k.n}</div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ======================= EXECUTIVE SUMMARY ======================= */}
      <Section
        id="summary"
        eyebrow="01 — Executive summary"
        title="A high-intent, U.S.-led audience that wants Malta residency without full relocation"
        lead="Five findings shape how the summit should be programmed, sold and followed up."
      >
        <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2">
          <Finding n={1} title="Demand is concentrated in one product">
            Half of all applicants ({mprp.share}%) name the Malta Permanent Residence
            Programme as their most relevant pathway, and {residencyFocus.share}% define
            their objective as “residency without relocating full-time”. A further{" "}
            {R.programs.pathway[1].share}% cannot yet name a route and ask for guidance —
            the single largest advisory opening in the dataset.
          </Finding>
          <Finding n={2} title="Two audiences move at two speeds">
            North America supplies {find(R.geo.regions, "north america").share}% of volume
            but averages a lead score of {find(R.score.byRegion, "north america").avg}.
            The {maltaRegion.value} Malta-based applicants average{" "}
            {find(R.score.byRegion, "malta").avg} — {R.top.malta} of the {R.top.n} highest-scoring
            applicants sit on the island already.
          </Finding>
          <Finding n={3} title="Income qualifies, capital timing does not">
            {R.income.bands[0].share}% report personal income of $150,000–$350,000 and
            every applicant clears the $150,000 floor. Yet only {capitalReady} ({R.income.capitalReadyShare}%)
            are funded today, and just {R.funnel.qualified} are both funded and ready to move
            within nine months.
          </Finding>
          <Finding n={4} title="The corporate opportunity is larger than it looks">
            {holding.share}% point to a Malta holding company and {R.programs.company[1].share}%
            to a startup or technology vehicle — but only {find(R.programs.help, "tax").share}%
            name tax and structuring as their first-priority need. Structuring demand is real
            but unarticulated.
          </Finding>
          <Finding n={5} title="Attention peaks late and converts on content">
            {last72} of {R.meta.submissions} applications ({Math.round((last72 / R.meta.submissions) * 100)}%)
            arrived in the 72 hours around the event opening, and {R.programs.content[0].share}%
            asked for recordings, playbooks and audience insights afterwards.
          </Finding>
        </div>

        <SoWhat>
          Treat the summit as the top of a 9–12 month advisory funnel, not a point of sale.
          The commercial priorities are: a productised MPRP track for the U.S. cohort, a
          concierge desk for the Malta-based and already-active minority, and a paid
          content and partner layer to monetise the {R.programs.content[0].share}% who want
          the material after the event.
        </SoWhat>
      </Section>

      {/* ============================ AUDIENCE ============================ */}
      <Section
        id="audience"
        eyebrow="02 — Who the audience is"
        title="Owner-operators and private individuals, not corporate delegates"
        lead="Nearly half the room runs the business they applied from; a third are senior professionals planning a personal move."
        tone="tint"
      >
        <Grid cols={2}>
          <Exhibit
            n={1}
            title="Self-declared role in the Malta decision"
            subtitle="Share of respondents, %"
          >
            <BarList
              items={R.audience.persona.map((p) => ({
                ...p,
                label: p.label
                  .replace("I am ", "")
                  .replace("I provide ", "Provider of ")
                  .replace(/^./, (c) => c.toUpperCase()),
              }))}
            />
          </Exhibit>

          <Exhibit n={2} title="Seniority" subtitle="Share of respondents, %">
            <BarList items={R.audience.seniority} />
            <Note>
              Derived from free-text job titles. “Founder / owner / C-suite” includes
              company directors and managing partners of owner-managed firms.
            </Note>
          </Exhibit>

          <Exhibit
            n={3}
            title="Industry background"
            subtitle="Share of respondents, %"
            className="lg:col-span-2"
          >
            <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr]">
              <BarList items={R.audience.industries} />
              <div className="border-l border-[#e3e6ea] pl-8">
                <div className="rpt-eyebrow">Average lead score by industry</div>
                <div className="mt-5">
                  <DotPlot
                    items={R.score.byIndustry}
                    min={15}
                    max={45}
                    benchmark={R.score.avg}
                    benchmarkLabel="All applicants"
                  />
                </div>
              </div>
            </div>
            <Note>
              Industries classified from free-text answers into standard categories;
              segments with fewer than four respondents are excluded from the score view.
            </Note>
          </Exhibit>

          <Exhibit
            n={4}
            title="Who moves with them"
            subtitle="Share of the 54 respondents who answered the relocation-party question, %"
            source="Malta Event Edition application data; conditional question, n = 54."
          >
            <SplitBar items={R.audience.family} />
            <Note>
              A family move raises the economics of every pathway — schooling, healthcare
              and property requirements attach to {find(R.audience.family, "family").share}% of
              the relocating cohort.
            </Note>
          </Exhibit>

          <Exhibit
            n={5}
            title="Service providers inside the audience"
            subtitle="Applicants who sell into the Malta ecosystem"
          >
            <Donut
              share={(R.audience.providers / N) * 100}
              caption={`${R.audience.providers} of ${N} applicants are Malta-facing advisers`}
              sub={`They post the highest average lead score of any persona (${find(R.score.byPersona, "provide").avg} vs ${R.score.avg} overall) and represent a ready-made partner and sponsor pool.`}
            />
          </Exhibit>
        </Grid>

        <SoWhat>
          Programming should speak to owner-operators making a personal and corporate
          decision at the same time — not to corporate travel budgets. Financial and
          professional services ({R.audience.industries[0].share}% of the audience, highest
          average score) is the anchor segment for both content and sponsorship.
        </SoWhat>
      </Section>

      {/* ========================= INCOME & CAPITAL ========================= */}
      <Section
        id="capital"
        eyebrow="03 — Income and capital"
        title="A qualified income floor, an unqualified capital timeline"
        lead="Every applicant clears $150,000 of personal income, but fewer than a quarter have money allocated to a Malta plan."
      >
        <Grid cols={2}>
          <Exhibit
            n={6}
            title="Reported annual personal income"
            subtitle="Share of respondents, %"
          >
            <SplitBar items={R.income.bands} />
            <Note>
              Self-reported, single-select. With {R.income.bands[0].share}% in the entry band
              the result should be read as a qualification floor — every applicant earns at
              least $150,000 — rather than as a full income distribution. {R.income.bands[1].value + R.income.bands[2].value} applicants
              report more than $350,000.
            </Note>
          </Exhibit>

          <Exhibit
            n={7}
            title="Financial readiness for a Malta plan"
            subtitle="Share of respondents, %"
          >
            <BarList items={R.income.financialReadiness} />
            <Note>
              Funded cohort = “Capital allocated” + “Ready to invest” = {capitalReady} applicants
              ({R.income.capitalReadyShare}%).
            </Note>
          </Exhibit>

          <Exhibit
            n={8}
            title="Investment posture toward Malta assets"
            subtitle="Share of respondents, %"
            className="lg:col-span-2"
          >
            <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
              <BarList items={R.income.investment} />
              <div className="border-l border-[#e3e6ea] pl-8">
                <Donut
                  share={100 - R.income.investment[0].share}
                  caption="are already engaged with Malta assets"
                  sub="Assessing opportunities, exploring residential real estate, preparing to invest, or already owning assets on the island."
                  color={BLUE}
                />
                <div className="mt-6 border-t border-[#e3e6ea] pt-4 text-[13px] leading-relaxed text-[#4a5560]">
                  Residential property is the entry asset:{" "}
                  {find(R.income.investment, "residential").value} applicants are exploring
                  homes versus {find(R.income.investment, "commercial").value} looking at
                  commercial or hospitality assets.
                </div>
              </div>
            </div>
          </Exhibit>
        </Grid>

        <SoWhat>
          The audience is income-qualified but capital-unscheduled. Monetisation should
          lead with low-friction paid products — advisory hours, cost-and-timeline
          playbooks, property tours — and reserve high-ticket MPRP introductions for the{" "}
          {capitalReady} funded applicants.
        </SoWhat>
      </Section>

      {/* ============================ GEOGRAPHY ============================ */}
      <Section
        id="geography"
        eyebrow="04 — Geography"
        title="A U.S. core, a Malta-resident spine, a long European tail"
        lead={`${R.meta.countries} countries applied. Two-thirds of applicants are U.S. citizens or residents; the highest-value applicants are already on the island.`}
        tone="tint"
      >
        <Grid cols={2}>
          <Exhibit n={9} title="Applicants by region" subtitle="Share of respondents, %">
            <SplitBar items={R.geo.regions} />
          </Exhibit>

          <Exhibit
            n={10}
            title="Average lead score by region"
            subtitle="Form lead score, 0–71 scale"
          >
            <DotPlot
              items={R.score.byRegion}
              min={20}
              max={60}
              benchmark={R.score.avg}
              benchmarkLabel="All applicants"
            />
            <Note>
              Malta-based applicants score {find(R.score.byRegion, "malta").avg} against a{" "}
              {R.score.avg} average — they arrive with an existing setup, active projects or
              residency in hand.
            </Note>
          </Exhibit>

          <Exhibit n={11} title="Applicants by market" subtitle={`All ${R.meta.countries} countries`}>
            <RankTable items={R.geo.countries} flags={R.geo.iso} />
          </Exhibit>

          <div className="space-y-6">
            <Exhibit
              n={12}
              title="Where the U.S. cohort sits"
              subtitle={`Share of the ${R.geo.countries[0].value} U.S.-based applicants, %`}
              source="Malta Event Edition application data; self-declared location, U.S. respondents only."
            >
              <BarList items={R.geo.usStates.filter((s) => !s.label.startsWith("Other"))} />
              <Note>
                Sun-belt and coastal wealth centres lead: Florida, California, New York and
                Georgia account for{" "}
                {R.geo.usStates
                  .filter((s) => ["Florida", "California", "New York", "Georgia"].includes(s.label))
                  .reduce((a, b) => a + b.value, 0)}{" "}
                of the identifiable U.S. locations. Remaining respondents gave country-level
                answers only.
              </Note>
            </Exhibit>

            <Exhibit
              n={13}
              title="Citizenship and mobility"
              subtitle="Share of respondents, %"
            >
              <SplitBar items={R.geo.usCitizen} />
              <Note>
                {R.geo.usResidence[0].share}% of the U.S. cohort live full-time in the
                United States, and {R.geo.outsideHome} applicants filed from outside their
                home country — a small but already-mobile group.
              </Note>
            </Exhibit>
          </div>
        </Grid>

        <SoWhat>
          Run the funnel on two tracks. The U.S. cohort needs education, cost transparency
          and a 9–12 month nurture path; the Malta and Europe cohort needs introductions,
          providers and transactions now.
        </SoWhat>
      </Section>

      {/* ========================= PROGRAMME DEMAND ========================= */}
      <Section
        id="demand"
        eyebrow="05 — Programme demand"
        title="MPRP is the headline product; structuring is the hidden one"
        lead="Interest concentrates on residency that does not require full relocation, delivered through a Malta holding company."
      >
        <Grid cols={2}>
          <Exhibit
            n={14}
            title="Most relevant Malta pathway"
            subtitle="Share of respondents, %"
          >
            <BarList items={R.programs.pathway} />
          </Exhibit>

          <Exhibit
            n={15}
            title="Primary Malta objective"
            subtitle="Share of respondents, %"
          >
            <BarList items={R.programs.direction} />
            <Note>
              {residencyFocus.share}% want residency without relocating full-time — the
              defining product requirement of this audience.
            </Note>
          </Exhibit>

          <Exhibit
            n={16}
            title="Corporate vehicle of interest"
            subtitle="Share of respondents, %"
          >
            <BarList items={R.programs.company} />
          </Exhibit>

          <Exhibit
            n={17}
            title="Priority help requested"
            subtitle="Share of respondents, % — multiple answers allowed"
            source={`Malta Event Edition application data; multi-select, ${R.programs.helpMulti} respondents selected more than one priority.`}
          >
            <BarList items={R.programs.help} />
            <Note>
              Shares sum to more than 100%. Relocation and residency dominates stated
              priorities, while tax and structuring is named first by only{" "}
              {find(R.programs.help, "tax").share}% — against {holding.share}% who want a
              holding company.
            </Note>
          </Exhibit>

          <Exhibit
            n={18}
            title="Demand for post-event material"
            subtitle="Recordings, playbooks and audience insights"
            className="lg:col-span-2"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
              <Donut
                share={R.programs.content[0].share}
                caption="want the full post-summit package"
                sub={`${R.programs.content[0].value} of ${N} applicants opted in to recordings, playbooks and audience insights.`}
              />
              <div className="text-[14px] leading-relaxed text-[#4a5560]">
                Content demand is close to universal and independent of readiness: it is the
                only asset every segment of this audience says it wants. It is also the
                cheapest bridge across the 9–12 month decision window that most applicants
                are in — and the natural home for a paid tier, a partner-sponsored playbook
                and the annual audience insight report.
              </div>
            </div>
          </Exhibit>
        </Grid>

        <SoWhat>
          Build the 2027 agenda around one flagship MPRP track (cost, timeline, evidence of
          approvals), a structuring track that converts latent holding-company demand into
          stated demand, and a guided “I don’t know my route yet” clinic for the{" "}
          {R.programs.pathway[1].value} applicants who cannot self-select a pathway.
        </SoWhat>
      </Section>

      {/* ============================ READINESS ============================ */}
      <Section
        id="readiness"
        eyebrow="06 — Readiness and conversion"
        title="A 9–12 month pipeline with a small, high-value front edge"
        lead="Most applicants are early; the minority that is not is disproportionately valuable and easy to identify."
        tone="tint"
      >
        <Grid cols={2}>
          <Exhibit
            n={19}
            title="Malta readiness timeline"
            subtitle="Share of respondents, %"
          >
            <Funnel
              steps={R.funnel.readiness.map((s) => ({ ...s }))}
            />
          </Exhibit>

          <Exhibit n={20} title="Current Malta position" subtitle="Share of respondents, %">
            <div className="space-y-8">
              <div>
                <div className="rpt-eyebrow mb-3">Residency status</div>
                <BarList items={R.funnel.residency} showValue={false} />
              </div>
              <div>
                <div className="rpt-eyebrow mb-3">Legal, banking and tax setup</div>
                <BarList items={R.funnel.setup} showValue={false} />
              </div>
            </div>
          </Exhibit>

          <Exhibit
            n={21}
            title="Priority matrix: readiness against capital"
            subtitle="Number of respondents"
            className="lg:col-span-2"
          >
            <Matrix
              rows={R.funnel.matrix.rows}
              cols={R.funnel.matrix.cols}
              values={R.funnel.matrix.values as unknown as number[][]}
              rowTitle="Readiness to act"
              colTitle="Financial readiness"
            />
            <div className="mt-6 grid gap-6 sm:grid-cols-3">
              <Kpi
                value={R.funnel.qualified}
                label="Funded and moving within 9 months"
                note="Immediate advisory and MPRP pipeline"
              />
              <Kpi
                value={nearTerm}
                label="Ready to act within 9 months"
                note={`${R.funnel.nearTermShare}% of applicants, regardless of funding`}
              />
              <Kpi
                value={find(R.funnel.readiness, "9–12").value}
                label="In the 9–12 month exploration window"
                note="The core nurture cohort"
              />
            </div>
          </Exhibit>

          <Exhibit
            n={22}
            title="Lead score distribution"
            subtitle="Share of respondents by form lead score, %"
          >
            <BarList items={R.score.buckets} />
            <Note>
              Scores run {R.score.min}–{R.score.max}; the average is {R.score.avg} and the
              median {R.score.median}. The score is generated by the application form from
              residency status, activity in Malta, readiness and financial capacity.
            </Note>
          </Exhibit>

          <Exhibit
            n={23}
            title="Profile of the top-scoring applicants"
            subtitle={`The ${R.top.n} applicants scoring ${R.top.threshold} or above`}
            source={`Malta Event Edition application data; top-decile cohort, n = ${R.top.n}.`}
          >
            <dl className="divide-y divide-[#eef0f2]">
              {[
                ["Average lead score", `${R.top.avg} vs ${R.score.avg} overall`],
                ["Already active in Malta", `${R.top.active} of ${R.top.n}`],
                ["Acting within 9 months", `${R.top.nearTerm} of ${R.top.n}`],
                ["Based in Malta", `${R.top.malta} of ${R.top.n}`],
                ["Founders, owners, C-suite", `${R.top.founder} of ${R.top.n}`],
              ].map(([k, v]) => (
                <div key={k} className="flex items-baseline justify-between gap-6 py-3">
                  <dt className="text-[13px] text-[#4a5560]">{k}</dt>
                  <dd className="text-[14px] font-semibold tabular-nums text-[#051c2c]">{v}</dd>
                </div>
              ))}
            </dl>
            <Note>
              The scoring model rewards proximity and activity, so the top decile is
              effectively the Malta-resident and Malta-active segment. It is the sales list.
            </Note>
          </Exhibit>

          <Exhibit
            n={24}
            title="Average lead score by readiness"
            subtitle="Form lead score, 0–71 scale"
            className="lg:col-span-2"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <DotPlot
                items={R.score.byReadiness}
                min={20}
                max={60}
                benchmark={R.score.avg}
                benchmarkLabel="All applicants"
              />
              <DotPlot
                items={R.score.byPersona.map((s) => ({
                  ...s,
                  label: s.label
                    .replace("I am ", "")
                    .replace("I provide ", "Provider of ")
                    .replace(/^./, (c) => c.toUpperCase()),
                }))}
                min={20}
                max={60}
                benchmark={R.score.avg}
                benchmarkLabel="All applicants"
              />
            </div>
          </Exhibit>
        </Grid>

        <SoWhat>
          Segment the follow-up on day one: a named advisory desk for the {R.funnel.qualified}{" "}
          funded near-term applicants and the {R.top.n} top-decile leads, and an automated
          9–12 month education sequence for the {find(R.funnel.readiness, "9–12").value}{" "}
          explorers. Undifferentiated follow-up wastes the most valuable {Math.round((R.top.n / N) * 100)}%
          of the list.
        </SoWhat>
      </Section>

      {/* ============================ MOMENTUM ============================ */}
      <Section
        id="momentum"
        eyebrow="07 — Demand momentum"
        title="Registration is compressed into the final week"
        lead={`Applications ran from ${new Date(R.meta.from + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" })} to ${new Date(R.meta.to + "T00:00:00Z").toLocaleDateString("en-GB", { day: "numeric", month: "long", timeZone: "UTC" })}, with a single dominant spike at the event opening.`}
      >
        <Grid cols={1}>
          <Exhibit
            n={25}
            title="Applications per day and cumulative total"
            subtitle={`${R.meta.submissions} submissions over ${R.meta.days} days`}
            source={`Malta Event Edition application data; all ${R.meta.submissions} submissions including repeats.`}
          >
            <TimeSeries
              series={R.timeline as unknown as { date: string; n: number; cum: number }[]}
              peakLabel={`Peak: ${peak.n} applications`}
            />
            <Note>
              {last72} applications ({Math.round((last72 / R.meta.submissions) * 100)}% of
              the total) landed in the 72 hours spanning 31 August to 2 September. The
              audience registers at the last possible moment — which caps pre-event
              qualification and advisor scheduling.
            </Note>
          </Exhibit>
        </Grid>

        <Grid cols={2}>
          <Exhibit
            n={26}
            title="Attributed acquisition channel"
            subtitle="Share of respondents, %"
          >
            <BarList items={R.channel} emphasis={1} />
            <Note>
              UTM parameters were captured for only {N - R.channel[0].value} of {N}{" "}
              applicants, so attribution is directional. Within the attributed set, Meta
              (Facebook and Instagram) delivers{" "}
              {R.channel
                .filter((c) => c.label.startsWith("Meta"))
                .reduce((a, b) => a + b.value, 0)}{" "}
              of {N - R.channel[0].value} applicants.
            </Note>
          </Exhibit>

          <Exhibit
            n={27}
            title="Relocation intent within 12 months"
            subtitle="Share of respondents, %"
          >
            <SplitBar items={R.funnel.relocate12m} />
            <div className="mt-6 border-t border-[#e3e6ea] pt-4 text-[13px] leading-relaxed text-[#4a5560]">
              {find(R.funnel.relocate12m, "yes").value} applicants say they are actively
              considering a move within twelve months, against{" "}
              {find(R.funnel.active, "not active").value} who have no Malta connection at
              all today. The gap between intent and infrastructure is the service
              opportunity.
            </div>
          </Exhibit>
        </Grid>
      </Section>

      {/* ============================= VERBATIM ============================= */}
      <Section
        id="voice"
        eyebrow="08 — Voice of the audience"
        title="What applicants said they came for"
        lead="Unedited answers to “what would you like to discover?”, selected across segments and geographies."
        tone="tint"
      >
        <div className="grid gap-x-10 gap-y-8 md:grid-cols-2 xl:grid-cols-3">
          {R.quotes.map((q) => (
            <Quote key={q.text.slice(0, 40)} role={q.role} country={q.country}>
              {q.text}
            </Quote>
          ))}
        </div>
        <Note>
          Verbatim responses, reproduced without names or contact details. Selection
          prioritises coverage of segments rather than sentiment.
        </Note>
      </Section>

      {/* =========================== IMPLICATIONS =========================== */}
      <Section
        id="implications"
        eyebrow="09 — Implications"
        title="Three plays for the next twelve months"
        lead="Each play is sized against the applicant base captured in this dataset."
      >
        <div className="grid gap-8 lg:grid-cols-3">
          {[
            {
              tag: "Play 1 · Convert",
              title: "A named Malta desk for the active core",
              body: `${maltaActive} applicants already have live Malta connections and ${find(R.funnel.residency, "already hold").value} hold residency. Together with the ${R.top.n} top-decile leads they are a manageable book for one-to-one advisory, provider introductions and property viewings within 90 days.`,
              metric: `${R.funnel.qualified}`,
              metricLabel: "funded and near-term applicants to contact first",
            },
            {
              tag: "Play 2 · Nurture",
              title: "A 9–12 month MPRP education track",
              body: `${find(R.funnel.readiness, "9–12").value} applicants sit in the exploration window and ${find(R.income.financialReadiness, "planning").value} are still building the budget. A structured sequence — realistic cost, timeline, approval evidence, family logistics — carries them to the 2027 edition already qualified.`,
              metric: `${find(R.funnel.readiness, "9–12").value}`,
              metricLabel: "applicants in the core nurture cohort",
            },
            {
              tag: "Play 3 · Monetise",
              title: "Content and a provider marketplace",
              body: `${R.programs.content[0].share}% want recordings, playbooks and audience insights, and ${R.audience.providers} applicants sell services into the Malta ecosystem. Package the material as a paid tier and match demand — ${holding.share}% wanting a holding company, ${find(R.programs.help, "real estate").share}% wanting property — to vetted partners.`,
              metric: `${R.programs.content[0].value}`,
              metricLabel: "applicants opted in to post-event material",
            },
          ].map((p) => (
            <div key={p.tag} className="flex flex-col border-t-2 border-[#2251ff] pt-5">
              <div className="rpt-eyebrow text-[#2251ff]">{p.tag}</div>
              <h3 className="mt-3 text-[17px] font-semibold leading-snug text-[#051c2c]">
                {p.title}
              </h3>
              <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-[#4a5560]">{p.body}</p>
              <div className="mt-5 border-t border-[#e3e6ea] pt-4">
                <div className="rpt-kpi text-[#051c2c]">{p.metric}</div>
                <div className="mt-1 text-[12px] leading-snug text-[#6b7681]">
                  {p.metricLabel}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* =========================== METHODOLOGY =========================== */}
      <Section
        id="methodology"
        eyebrow="10 — Methodology"
        title="How this report was built"
        tone="tint"
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-5 text-[13.5px] leading-relaxed text-[#4a5560]">
            <p>
              <strong className="text-[#051c2c]">Base.</strong> {R.meta.submissions}{" "}
              applications submitted to the Freedom Business Summit 2026: Malta Event
              Edition form between {R.meta.from} and {R.meta.to}. Records were
              de-duplicated on email address, keeping the most complete submission per
              person, giving {N} unique respondents. All percentages are calculated on{" "}
              {N} unless an exhibit states otherwise.
            </p>
            <p>
              <strong className="text-[#051c2c]">Conditional questions.</strong> The form
              branched by profile, so several questions have a smaller base — family plans
              (n = 54), U.S. residence (n = 52). Each affected exhibit carries its own base
              in the source line.
            </p>
            <p>
              <strong className="text-[#051c2c]">Derived variables.</strong> Industry and
              seniority were classified from free-text answers into standard categories.
              Region groupings are built from the form’s detected country. U.S. state
              analysis uses self-declared location text and covers the subset that gave a
              state or city.
            </p>
            <p>
              <strong className="text-[#051c2c]">Lead score.</strong> Generated by the
              application form itself, combining residency status, Malta activity, readiness
              and financial capacity. It is used here as a relative ranking device, not an
              absolute measure.
            </p>
            <p>
              <strong className="text-[#051c2c]">Privacy.</strong> This report publishes
              aggregates only. Names, emails, phone numbers, company websites and LinkedIn
              profiles were used for de-duplication and classification and are not stored in
              or served by this site.
            </p>
          </div>
          <div className="space-y-5 text-[13.5px] leading-relaxed text-[#4a5560]">
            <div className="border-t-2 border-[#051c2c] pt-4">
              <div className="rpt-eyebrow">Read the numbers with care</div>
              <ul className="mt-4 space-y-3">
                <li>
                  <strong className="text-[#051c2c]">Income is a floor, not a spread.</strong>{" "}
                  With {R.income.bands[0].share}% in the entry band, the data confirms an
                  income qualification threshold rather than describing dispersion.
                </li>
                <li>
                  <strong className="text-[#051c2c]">Attribution is partial.</strong> UTM
                  data exists for {N - R.channel[0].value} of {N} applicants; channel shares
                  are directional only.
                </li>
                <li>
                  <strong className="text-[#051c2c]">Small cells.</strong> Several segments
                  contain fewer than ten respondents. Differences inside those segments are
                  indicative and should not be projected without a larger base.
                </li>
                <li>
                  <strong className="text-[#051c2c]">Stated, not revealed, preference.</strong>{" "}
                  All programme interest is self-reported at application, before any
                  advisory conversation or cost disclosure.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* ============================== FOOTER ============================== */}
      <footer className="bg-[#051c2c] text-white">
        <div className="rpt-wrap py-12">
          <div className="flex flex-wrap items-start justify-between gap-8">
            <div>
              <div className="text-[15px] font-semibold">
                Freedom Business Summit 2026 — Malta Event Edition
              </div>
              <div className="mt-2 text-[13px] text-[#8fa6bd]">
                Audience &amp; demand report · Prepared {R.meta.generated} · Internal and
                partner distribution
              </div>
            </div>
            <a
              href="https://fsummit.net"
              className="border border-white/40 px-5 py-2.5 text-[12.5px] font-semibold transition-colors hover:bg-white hover:text-[#051c2c]"
            >
              fsummit.net
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
