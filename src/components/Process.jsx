import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, SectionHead, Section } from "./ui.jsx";

const STEPS = [
  ["Site assessment", "We review your electricity usage, roof area, shading and requirement."],
  ["System design", "We recommend the right capacity and configuration for your consumption."],
  ["Subsidy & documentation", "Assistance with the applicable government process and paperwork."],
  ["Installation", "Professional rooftop installation with quality components and structure."],
  ["Inspection & commissioning", "Coordination through inspection, net metering and commissioning."],
  ["Subsidy follow-up", "Support through the applicable subsidy-release process."],
];

export default function Process() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.6"] });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section id="process" className="py-20 sm:py-28">
      <SectionHead
        eyebrow="How it works"
        title={<>Solar is simple.<br />The paperwork shouldn't be your problem.</>}
        sub="Six steps, one team. You approve the decisions — we run the process."
      />

      <div ref={ref} className="relative mt-14 pl-10 sm:pl-14">
        {/* rail */}
        <div className="absolute left-[13px] top-2 bottom-2 w-px bg-line sm:left-[21px]" />
        <motion.div
          style={{ height }}
          className="absolute left-[13px] top-2 w-px origin-top bg-forest-500 sm:left-[21px]"
        />

        <div className="space-y-10 sm:space-y-12">
          {STEPS.map(([title, body], i) => (
            <Reveal key={title} delay={i * 0.04}>
              <div className="relative">
                <span className="absolute -left-10 top-0 grid h-[27px] w-[27px] place-items-center rounded-full border border-line bg-white text-[11px] font-bold text-forest-700 sm:-left-14 sm:h-[43px] sm:w-[43px] sm:text-[13px]">
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
