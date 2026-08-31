import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Section, SectionHead, ease } from "./ui.jsx";

const FAQS = [
  [
    "How much subsidy can I get?",
    "For eligible residential rooftop systems, central assistance under PM Surya Ghar is currently ₹30,000 for 1 kW, ₹60,000 for 2 kW and ₹78,000 for 3 kW and above. Odisha material reports additional state support of ₹25,000 / ₹50,000 / ₹60,000 for 1, 2 and 3 kWp and above. Final eligibility depends on prevailing scheme guidelines and your consumer category.",
  ],
  [
    "Am I eligible for PM Surya Ghar?",
    "The scheme is designed for residential households with a valid electricity connection and a suitable, shade-free roof. We check your consumer category, roof and sanctioned load during the free site assessment and tell you plainly what applies.",
  ],
  [
    "How much does a rooftop system cost?",
    "Cost depends on capacity, structure, component selection and site conditions. We give a written quotation after the site assessment, with the subsidy that may apply shown separately so you can see the net figure.",
  ],
  [
    "How long does installation take?",
    "A typical residential rooftop installation takes a few days on site. The overall timeline — application, approvals, net metering and commissioning — depends on DISCOM processing.",
  ],
  [
    "How much roof space is required?",
    "As a rough guide, allow roughly 80–100 sq ft of shade-free roof per kW. We confirm the usable area during the site visit.",
  ],
  [
    "Do you help with the subsidy documentation?",
    "Yes. Documentation and coordination through the applicable government process is a core part of what we do, including support through the subsidy-release stage.",
  ],
  [
    "Can you repair or service an existing solar system?",
    "Yes. We handle troubleshooting, servicing, cleaning and maintenance for existing rooftop systems, including ones we did not install.",
  ],
  [
    "Does solar work during a power cut?",
    "A standard grid-tied system shuts down during an outage for safety. If backup during outages matters to you, we can discuss hybrid systems with battery storage.",
  ],
  [
    "What happens to the excess electricity I generate?",
    "With net metering, surplus generation is exported to the grid and adjusted against your consumption as per DISCOM rules.",
  ],
  [
    "How long does a solar system last?",
    "Solar modules typically carry long performance warranties in the region of 25 years. Inverters generally have a shorter service life and may need replacement during that period.",
  ],
];

function Item({ q, a, open, onToggle }) {
  return (
    <div className="border-b border-line">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-6 py-5 text-left"
      >
        <span
          className={`text-[15px] font-semibold tracking-tight transition-colors duration-300 sm:text-[17px] ${
            open ? "text-forest-700" : "text-ink"
          }`}
        >
          {q}
        </span>
        <span
          className={`mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full text-lg leading-none transition-all duration-300 ${
            open ? "rotate-45 bg-forest-700 text-white" : "bg-forest-50 text-forest-700"
          }`}
        >
          +
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-6 text-[14px] leading-relaxed text-mute sm:text-[15px]">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <Section id="faq" className="py-20 sm:py-28">
      <SectionHead
        eyebrow="Questions"
        title="What most people ask us first."
        sub="Straight answers, no sales pressure."
      />
      <Reveal delay={0.1}>
        <div className="mt-10 border-t border-line">
          {FAQS.map(([q, a], i) => (
            <Item key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
