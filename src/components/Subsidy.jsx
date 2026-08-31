import { Reveal, SectionHead, Section, Disclaimer, Button, CountUp } from "./ui.jsx";

const CENTRAL = [
  ["1 kW", "₹30,000"],
  ["2 kW", "₹60,000"],
  ["3 kW and above", "₹78,000"],
];
const STATE = [
  ["1 kWp", "₹25,000"],
  ["2 kWp", "₹50,000"],
  ["3 kWp and above", "₹60,000"],
];

function Table({ tag, title, note, rows, tone }) {
  const light = tone === "light";
  return (
    <div
      className={`rounded-3xl border p-6 sm:p-8 ${
        light ? "border-white/15 bg-forest-700 text-white" : "border-line bg-white"
      }`}
    >
      <span
        className={`inline-flex rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ${
          light ? "bg-white/10 text-sun-300" : "bg-sun-100 text-forest-700"
        }`}
      >
        {tag}
      </span>
      <h3 className={`mt-4 text-xl font-bold tracking-tight sm:text-2xl ${light ? "text-white" : "text-ink"}`}>
        {title}
      </h3>
      <p className={`mt-2 text-[13px] leading-relaxed ${light ? "text-white/60" : "text-mute"}`}>{note}</p>

      <dl className={`mt-6 divide-y ${light ? "divide-white/10" : "divide-line"}`}>
        {rows.map(([cap, amt]) => (
          <div key={cap} className="flex items-center justify-between py-3.5">
            <dt className={`text-sm font-medium ${light ? "text-white/80" : "text-mute"}`}>{cap}</dt>
            <dd className={`text-lg font-bold tracking-tight ${light ? "text-sun-300" : "text-forest-700"}`}>
              {amt}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export default function Subsidy() {
  return (
    <Section id="subsidy" className="py-20 sm:py-28">
      <SectionHead
        eyebrow="The numbers"
        title="What is actually on the table."
        sub="Two separate schemes — one from the centre, one from Odisha. A home system can draw on both."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        <Reveal className="lg:col-span-1">
          <Table
            tag="Central"
            title="PM Surya Ghar"
            note="Central money for eligible home rooftops."
            rows={CENTRAL}
          />
        </Reveal>

        <Reveal delay={0.08} className="lg:col-span-1">
          <Table
            tag="Odisha"
            title="Odisha state support"
            note="Reported additional support on top of the central amount."
            rows={STATE}
          />
        </Reveal>

        <Reveal delay={0.16} className="lg:col-span-1">
          <div className="flex h-full flex-col justify-between rounded-3xl border border-sun-300/60 bg-sun-100 p-6 sm:p-8">
            <div>
              <span className="inline-flex rounded-full bg-forest-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-sun-300">
                Combined · 3 kW
              </span>
              <div className="mt-6 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-forest-700/70">Central subsidy</span>
                  <span className="font-semibold text-forest-700">₹78,000</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-forest-700/70">Odisha support</span>
                  <span className="font-semibold text-forest-700">₹60,000</span>
                </div>
              </div>
              <div className="mt-5 border-t border-forest-700/15 pt-5">
                <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-forest-700/60">
                  Potential support
                </p>
                <div className="mt-2 text-4xl font-bold tracking-[-0.03em] text-forest-900 sm:text-[2.75rem]">
                  ₹<CountUp to={138000} />
                </div>
              </div>
            </div>
            <div className="mt-6">
              <Button href="#calculator" variant="primary" className="w-full">
                Am I eligible? Ask us
              </Button>
            </div>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <Disclaimer className="mt-8 max-w-3xl">
          These are the amounts currently on offer for eligible home installations. What you
          actually receive depends on the scheme rules in force, your consumer category and your
          DISCOM — we confirm your position before you commit to anything. PM Surya Ghar
          applications go through the National Portal. ADSS Solar Energy is a private installer,
          not a government body.
        </Disclaimer>
      </Reveal>
    </Section>
  );
}
