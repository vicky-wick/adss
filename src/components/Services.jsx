import { Reveal, SectionHead, Section } from "./ui.jsx";

const SERVICES = [
  ["Solar for your home", "A rooftop system sized to your family's actual monthly usage.", "🏠", "bg-sun-100"],
  ["Solar for your business", "Shops, offices and factories — cut a running cost that only goes up.", "🏢", "bg-sky-100"],
  ["Installation", "Our own team puts it up. No subcontractors you have never met.", "🔩", "bg-mint-200"],
  ["Repair and cleaning", "Panels not making what they should? We service any system, even one we did not install.", "🔧", "bg-ember-100"],
  ["Subsidy paperwork", "We fill the forms, file the application and follow it until the money lands.", "📑", "bg-sun-100"],
  ["Meter and approvals", "Inspection, net metering, grid connection — we chase all of it.", "⚡", "bg-sky-100"],
];

export default function Services() {
  return (
    <Section id="solutions" className="py-20 sm:py-28">
      <SectionHead
        eyebrow="What we do"
        title="One team for the whole job."
        sub="You will not be passed between a dealer, an electrician and a consultant. It is all us."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map(([title, body, icon, tint], i) => (
          <Reveal key={title} delay={(i % 3) * 0.06}>
            <div className="group h-full rounded-3xl border border-line bg-white p-6 transition-all duration-400 hover:-translate-y-1 hover:border-forest-100 hover:shadow-[0_20px_50px_-30px_rgba(13,21,18,0.45)] sm:p-7">
              <div className={"grid h-11 w-11 place-items-center rounded-2xl text-lg transition-transform duration-400 group-hover:scale-110 " + tint}>
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
