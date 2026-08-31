import { motion } from "framer-motion";
import { Reveal, SectionHead, Section, CountUp, Disclaimer, ease } from "./ui.jsx";

function Bar({ label, amount, width, tone, delay }) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <span className="text-[12px] font-semibold uppercase tracking-[0.12em] whitespace-nowrap text-mute">
          {label}
          <span className="ml-2 font-normal normal-case tracking-normal text-mute/70">per month</span>
        </span>
        <span className={`text-2xl font-bold tracking-tight sm:text-3xl ${tone === "sun" ? "text-forest-700" : "text-ink"}`}>
          ₹<CountUp to={amount} />
        </span>
      </div>
      <div className="mt-3 h-3 w-full overflow-hidden rounded-full bg-forest-50">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${width}%` }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1.2, delay, ease }}
          className={`h-full rounded-full ${tone === "sun" ? "bg-sun-400" : "bg-forest-700"}`}
        />
      </div>
    </div>
  );
}

export default function Savings() {
  return (
    <Section id="savings" className="py-20 sm:py-28">
      <SectionHead
        eyebrow="The point of all this"
        title={<>Solar is not the expense.<br />Your bill is.</>}
        sub="Right now you buy every unit from the grid. After solar, your roof makes most of them and you only pay for the rest."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-12">
        <Reveal className="md:col-span-7">
          <div className="rounded-3xl border border-line bg-white p-6 sm:p-9">
            <div className="space-y-8">
              <Bar label="Before solar" amount={4850} width={100} tone="ink" delay={0.1} />
              <Bar label="After solar" amount={650} width={14} tone="sun" delay={0.35} />
            </div>
            <div className="mt-8 border-t border-line pt-6">
              <Disclaimer>
                Example figures. Your saving depends on how much you use, your tariff, your
                roof and the weather.
              </Disclaimer>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="md:col-span-5">
          <div className="flex h-full flex-col justify-between rounded-3xl bg-gradient-to-br from-forest-600 to-forest-900 p-6 text-white sm:p-9">
            <div>
              <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sun-300">
                What that adds up to in a year
              </p>
              <div className="mt-4 text-5xl font-bold tracking-[-0.03em] sm:text-6xl">
                ₹<CountUp to={50400} />+
              </div>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                That is on an example ₹4,850 bill. Your number depends on how much power you
                actually use — we work it out on the visit.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/15 pt-6">
              {[["25 yrs", "Panels are warranted this long"], ["5–7 yrs", "Usual time to earn it back"]].map(
                ([a, b]) => (
                  <div key={a}>
                    <div className="text-xl font-bold tracking-tight text-sun-300">{a}</div>
                    <div className="mt-1 text-[12px] leading-snug text-white/60">{b}</div>
                  </div>
                )
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
