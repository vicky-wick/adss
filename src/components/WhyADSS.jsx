import { Reveal, Section, SectionHead } from "./ui.jsx";
import { IMG } from "../lib/images.js";

const REASONS = [
  ["We are here", "Our office is in Bapuji Nagar. You can walk in and find a person."],
  ["One team, whole job", "Survey, design, install, meter, subsidy — nobody else to chase."],
  ["We know the forms", "The subsidy process is our daily work, not something we look up."],
  ["No surprise pricing", "The number we give you is the number you pay."],
  ["We pick up the phone", "After the install too. That is the part most people get wrong."],
  ["Built to last 25 years", "We would rather fit it properly than fit it fast."],
];

export default function WhyADSS() {
  return (
    <Section id="about" className="py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <SectionHead
            eyebrow="Why ADSS"
            title="Why people pick us."
            sub="ADSS Solar Energy is a division of ADSS Enterprises Pvt. Ltd. We work with homes, shops and offices across Odisha."
          />
          <Reveal delay={0.15}>
            <div className="mt-9 overflow-hidden rounded-3xl border border-line">
              <img
                src={IMG.roofSunset}
                alt="A rooftop solar installation at sunset"
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
