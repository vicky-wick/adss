import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Section, SectionHead, Button, Disclaimer, ease } from "./ui.jsx";
import { WHATSAPP, PHONE_TEL } from "../lib/site.js";

const TARIFF = 6.5; // ₹ per unit — indicative residential average
const UNITS_PER_KW = 120; // units/month per kW (≈4 kWh/kW/day)

const CENTRAL = (kw) => (kw >= 3 ? 78000 : kw >= 2 ? 60000 : kw >= 1 ? 30000 : 0);
const STATE = (kw) => (kw >= 3 ? 60000 : kw >= 2 ? 50000 : kw >= 1 ? 25000 : 0);
const inr = (n) => "₹" + Math.round(n).toLocaleString("en-IN");

export default function Calculator() {
  const [bill, setBill] = useState(4500);
  const [type, setType] = useState("home");
  const [shown, setShown] = useState(false);

  const result = useMemo(() => {
    const units = bill / TARIFF;
    const raw = units / UNITS_PER_KW;
    const kw = Math.min(20, Math.max(1, Math.round(raw * 2) / 2));
    const newBill = Math.max(200, bill * 0.15);
    const monthlySaving = Math.max(0, bill - newBill);
    const residential = type === "home";
    return {
      kw,
      genLow: Math.round(kw * 100),
      genHigh: Math.round(kw * 150),
      newBill,
      monthlySaving,
      yearly: monthlySaving * 12,
      central: residential ? CENTRAL(kw) : 0,
      state: residential ? STATE(kw) : 0,
      residential,
    };
  }, [bill, type]);

  const waText = encodeURIComponent(
    "Hi ADSS Solar Energy, my average monthly bill is about Rs " +
      bill +
      ". I would like a free rooftop assessment."
  );

  return (
    <Section id="calculator" className="py-20 sm:py-28">
      <div className="overflow-hidden rounded-[2rem] border border-line bg-white">
        <div className="grid lg:grid-cols-2">
          {/* Inputs */}
          <div className="p-7 sm:p-10 lg:p-12">
            <SectionHead
              eyebrow="Free estimate"
              title="How much solar do you actually need?"
              sub="Enter your average monthly electricity bill for an indicative system size and savings range."
            />

            <div className="mt-9 space-y-8">
              <div>
                <label
                  htmlFor="bill"
                  className="text-[12px] font-semibold uppercase tracking-[0.14em] text-mute"
                >
                  Average monthly electricity bill
                </label>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-mute">₹</span>
                  <input
                    id="bill"
                    type="number"
                    inputMode="numeric"
                    min={500}
                    max={200000}
                    value={bill}
                    onChange={(e) => setBill(Math.max(0, Number(e.target.value) || 0))}
                    className="w-full min-w-0 border-b-2 border-line bg-transparent pb-2 text-4xl font-bold tracking-[-0.03em] text-ink outline-none transition-colors focus:border-forest-500 sm:text-5xl"
                  />
                </div>
                <input
                  type="range"
                  min={500}
                  max={30000}
                  step={100}
                  value={Math.min(30000, bill)}
                  onChange={(e) => setBill(Number(e.target.value))}
                  aria-label="Monthly bill slider"
                  className="slider mt-3 w-full accent-[#146A4C]"
                />
                <div className="-mt-1 flex justify-between text-[11px] text-mute">
                  <span>₹500</span>
                  <span>₹30,000+</span>
                </div>
              </div>

              <div>
                <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-mute">
                  Property type
                </span>
                <div className="mt-3 inline-flex rounded-full bg-forest-50 p-1">
                  {[
                    ["home", "Home"],
                    ["business", "Business"],
                  ].map(([v, l]) => (
                    <button
                      key={v}
                      onClick={() => setType(v)}
                      className={
                        "rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-300 " +
                        (type === v
                          ? "bg-forest-700 text-white shadow-sm"
                          : "text-forest-700/70 hover:text-forest-700")
                      }
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              <Button
                as="button"
                onClick={() => setShown(true)}
                variant="primary"
                className="w-full sm:w-auto"
              >
                Calculate my estimate →
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="relative border-t border-line bg-forest-700 p-7 text-white sm:p-10 lg:border-t-0 lg:border-l lg:border-white/10 lg:p-12">
            <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(255,197,49,0.35),transparent_70%)] blur-xl" />

            <AnimatePresence mode="wait">
              {!shown ? (
                <motion.div
                  key="idle"
                  exit={{ opacity: 0, y: -10 }}
                  className="flex h-full min-h-[320px] flex-col items-start justify-center"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sun-300">
                    Your estimate
                  </p>
                  <p className="mt-4 max-w-sm text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                    Tell us your bill and we will show you the system size, the subsidy that may
                    apply and what you could save.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                  className="relative"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-sun-300">
                    Indicative estimate
                  </p>

                  <div className="mt-5 flex items-end gap-3">
                    <span className="text-6xl font-bold tracking-[-0.04em] sm:text-7xl">
                      {result.kw}
                    </span>
                    <span className="mb-2 text-2xl font-semibold text-white/60">kW</span>
                  </div>
                  <p className="mt-1 text-sm text-white/60">
                    Estimated generation ~{result.genLow}–{result.genHigh} units per month
                  </p>

                  <dl className="mt-8 divide-y divide-white/10 border-y border-white/10">
                    {[
                      ["Estimated bill after solar", inr(result.newBill) + " / month"],
                      ["Potential monthly saving", inr(result.monthlySaving)],
                      ["Potential yearly saving", inr(result.yearly)],
                      [
                        "Potential subsidy support",
                        result.residential
                          ? inr(result.central + result.state) + " (central + Odisha)"
                          : "Residential scheme not applicable",
                      ],
                    ].map(([k, v]) => (
                      <div key={k} className="flex items-center justify-between gap-4 py-3.5">
                        <dt className="text-[13px] text-white/60">{k}</dt>
                        <dd className="text-right text-[15px] font-bold tracking-tight text-sun-300">
                          {v}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-7 flex flex-wrap gap-3">
                    <Button
                      href={"https://wa.me/" + WHATSAPP + "?text=" + waText}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="sun"
                    >
                      Book a free rooftop visit
                    </Button>
                    <Button href={"tel:" + PHONE_TEL} variant="light">
                      Call us
                    </Button>
                  </div>

                  <p className="mt-6 text-[12px] leading-relaxed text-white/45">
                    Estimates are indicative and depend on your consumption, roof orientation,
                    shading, tariff and system performance. Final sizing requires a site assessment.
                    Subsidy amounts are subject to eligibility and prevailing scheme guidelines.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <Reveal>
        <Disclaimer className="mt-5">
          Calculation assumes an indicative average tariff of ₹{TARIFF}/unit and about{" "}
          {UNITS_PER_KW} units generated per kW per month.
        </Disclaimer>
      </Reveal>
    </Section>
  );
}
