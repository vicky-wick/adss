import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionHead, Section } from "./ui.jsx";

const STEPS = [
  ["We visit your roof", "Free. We measure the space, check for shade and look at your last bill.", "bg-sky-100 text-sky-700"],
  ["We give you one number", "How many kW you need, what it will cost, and what you get back. In writing.", "bg-sun-100 text-forest-700"],
  ["We file your subsidy", "We prepare and submit the application and the DISCOM forms for you.", "bg-mint-200 text-forest-700"],
  ["We install it", "Our team fits the structure, the panels and the inverter. Usually a few days.", "bg-ember-100 text-ember-600"],
  ["We get it connected", "Inspection, net meter, grid connection. We follow it up until it is live.", "bg-sky-100 text-sky-700"],
  ["We chase your money", "We stay on the subsidy until it reaches your bank account.", "bg-sun-100 text-forest-700"],
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="process" className="py-20 sm:py-28">
      <SectionHead
        eyebrow="The steps"
        title={<>Six steps.<br />You only have to say yes.</>}
        sub="This is the whole job, start to finish. The forms and the follow-ups are our side of it."
      />

      <div ref={ref} className="relative mt-14 pl-10 sm:pl-14">
        {/* rail */}
        <div className="absolute left-[13px] top-2 bottom-2 w-px bg-line sm:left-[21px]" />
        <motion.div
          style={{ height }}
          className="absolute left-[13px] top-2 w-px origin-top bg-forest-500 sm:left-[21px]"
        />

        <div className="space-y-10 sm:space-y-12">
          {STEPS.map(([title, body, tint], i) => (
            <Reveal key={title} delay={i * 0.04}>
              <div className="relative">
                <span className={"absolute -left-10 top-0 grid h-[27px] w-[27px] place-items-center rounded-full text-[11px] font-bold sm:-left-14 sm:h-[43px] sm:w-[43px] sm:text-[13px] " + tint}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">{title}</h3>
                <p className="mt-1.5 max-w-xl text-[14px] leading-relaxed text-mute sm:text-[15px]">{body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
