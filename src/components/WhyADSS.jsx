import { Reveal, Section, SectionHead } from "./ui.jsx";
import { IMG } from "../lib/images.js";

const REASONS = [
  ["Local expertise", "Based in Bhubaneswar, serving customers across Odisha."],
  ["Complete support", "From the first consultation through installation and commissioning."],
  ["Scheme assistance", "We help you understand and navigate the applicable subsidy process."],
  ["Transparent process", "Clear communication on sizing, cost, timeline and documentation."],
  ["After-sales service", "We do not disappear once the system is switched on."],
  ["Built for the long run", "The goal is lower bills for years, not just panels on a roof."],
];

export default function WhyADSS() {
  return (
    <Section id="about" className="py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Why ADSS"
            title="A local team you can actually reach."
            sub="ADSS Solar Energy is a division of ADSS Enterprises Pvt. Ltd., working with homeowners, businesses and institutions across Odisha."
          />
          <Reveal delay={0.15}>
            <div className="mt-9 overflow-hidden rounded-3xl border border-line">
              <img
                src={IMG.roofSunset}
                alt="Rooftop solar installation at sunset"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <div className="grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {REASONS.map(([title, body], i) => (
              <Reveal key={title} delay={(i % 2) * 0.06}>
                <div className="h-full bg-white p-6 sm:p-7">
                  <span className="text-[11px] font-bold tracking-[0.14em] text-sun-500">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 text-[16px] font-bold tracking-tight text-ink">{title}</h3>
                  <p className="mt-2 text-[14px] leading-relaxed text-mute">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
