import { Reveal, SectionHead, Section } from "./ui.jsx";

const SERVICES = [
  ["Residential solar", "Rooftop systems designed around your home's actual electricity consumption.", "🏠"],
  ["Commercial solar", "Reduce operating costs with efficient commercial and institutional rooftops.", "🏢"],
  ["Installation", "End-to-end rooftop installation handled by our own trained team.", "🔩"],
  ["Repair & maintenance", "Troubleshooting, servicing and cleaning for existing solar systems.", "🔧"],
  ["Subsidy & documentation", "Support with documentation and the applicable government scheme process.", "📑"],
  ["Commissioning support", "Assistance through inspection, net metering and grid connection.", "⚡"],
];

export default function Services() {
  return (
    <Section id="solutions" className="py-20 sm:py-28">
      <SectionHead
        eyebrow="What we do"
        title="Everything a rooftop needs, from one team."
        sub="No handing you off between vendors, contractors and consultants."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(([title, body, icon], i) => (
          <Reveal key={title} delay={(i % 3) * 0.06}>
            <div className="group h-full rounded-3xl border border-line bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-forest-100 hover:shadow-[0_20px_50px_-30px_rgba(13,21,18,0.45)] sm:p-7">
              <div className="grid h-11 w-11 place-items-center rounded-2xl bg-forest-50 text-lg transition-colors duration-400 group-hover:bg-sun-100">
                {icon}
              </div>
              <h3 className="mt-5 text-[17px] font-bold tracking-tight text-ink">{title}</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-mute">{body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
