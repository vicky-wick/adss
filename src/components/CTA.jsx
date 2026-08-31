import { Reveal, Section, Button } from "./ui.jsx";
import {
  ADDRESS_LINES,
  EMAIL,
  MAPS_EMBED,
  MAPS_URL,
  PHONE_DISPLAY,
  PHONE_TEL,
  WHATSAPP,
} from "../lib/site.js";

export default function CTA() {
  return (
    <Section id="contact" className="pb-20 sm:pb-28">
      <div className="relative overflow-hidden rounded-[2rem] bg-forest-900 px-7 py-16 text-white sm:px-12 sm:py-20">
        <div className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,197,49,0.28),transparent_70%)] blur-2xl" />
        <div className="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(20,106,76,0.55),transparent_70%)] blur-2xl" />

        <div className="relative grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="text-[9vw] leading-[1.05] font-bold tracking-[-0.03em] sm:text-5xl md:text-[3.4rem]">
                Your roof can start
                <span className="block text-sun-300">saving you money.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-white/65 sm:text-base">
                Book a free assessment and find out whether rooftop solar makes sense for your home
                or business — including what subsidy you may be eligible for.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  href={"https://wa.me/" + WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="sun"
                >
                  Get free solar assessment
                </Button>
                <Button href={"tel:" + PHONE_TEL} variant="light">
                  Call ADSS
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5 lg:pl-8">
            <Reveal delay={0.12}>
              <dl className="space-y-6 border-t border-white/15 pt-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sun-300">
                    Visit us
                  </dt>
                  <dd className="mt-2 text-sm leading-relaxed text-white/75">
                    {ADDRESS_LINES.map((l) => (
                      <span key={l} className="block">
                        {l}
                      </span>
                    ))}
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 inline-block py-2 text-white underline underline-offset-4 hover:text-sun-300"
                    >
                      Get directions
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sun-300">
                    Call
                  </dt>
                  <dd className="mt-0.5">
                    <a href={"tel:" + PHONE_TEL} className="inline-block py-2 text-sm text-white/75 hover:text-white">
                      {PHONE_DISPLAY}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sun-300">
                    Email
                  </dt>
                  <dd className="mt-0.5">
                    <a href={"mailto:" + EMAIL} className="inline-block py-2 text-sm break-all text-white/75 hover:text-white">
                      {EMAIL}
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 overflow-hidden rounded-2xl border border-white/15 bg-white/5 lg:ml-10">
                <iframe
                  src={MAPS_EMBED}
                  title="ADSS Solar Energy on Google Maps"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-[190px] w-full border-0 grayscale-[0.15]"
                  allowFullScreen
                />
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-h-[44px] items-center justify-between gap-3 border-t border-white/10 px-4 py-3 text-[12px] font-semibold text-white/80 transition-colors hover:text-sun-300"
                >
                  <span>Bapuji Nagar, Bhubaneswar — 751009</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </Section>
  );
}
