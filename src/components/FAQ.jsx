import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Reveal, Section, SectionHead, ease } from "./ui.jsx";

export const FAQS = {
  subsidy: [
    [
      "How much subsidy will I get?",
      "For a home, the centre currently gives ₹30,000 for 1 kW, ₹60,000 for 2 kW and ₹78,000 for 3 kW and above. Odisha material reports a further ₹25,000 / ₹50,000 / ₹60,000 on top. What you actually get depends on the current scheme rules and your connection type — we check this before you commit to anything.",
    ],
    [
      "Do I qualify for PM Surya Ghar?",
      "It is for homes with their own electricity connection and a roof that gets proper sun. We check your connection type, your roof and your sanctioned load on the free visit and tell you straight away.",
    ],
    [
      "Who fills in the forms?",
      "We do. The application, the DISCOM paperwork and the follow-ups are our job. You sign, and give us a few documents.",
    ],
    [
      "When does the subsidy money arrive?",
      "After the system is installed, inspected and connected. It goes to your bank account, not to us. We keep chasing it until it lands.",
    ],
    [
      "Is ADSS a government office?",
      "No. We are a private solar company that helps you through the government process. The official PM Surya Ghar applications go through the National Portal.",
    ],
  ],
  process: [
    [
      "What will it cost me?",
      "It depends on the size, the roof and the parts. We give you a written quote after the visit, with the likely subsidy shown separately so you can see what you actually pay.",
    ],
    [
      "How long does it take?",
      "The install itself is usually a few days. The full timeline — application, approvals, net meter — depends on how fast the DISCOM moves.",
    ],
    [
      "How much roof do I need?",
      "Roughly 80–100 sq ft of shade-free roof per kW. We measure it properly on the visit.",
    ],
    [
      "Will it work in a power cut?",
      "A normal grid-connected system switches off during an outage, for the safety of the linemen. If you want backup, ask us about a hybrid system with a battery.",
    ],
    [
      "What happens to the extra power I make?",
      "With a net meter it goes to the grid and is adjusted against what you use, as per DISCOM rules.",
    ],
    [
      "How long will the system last?",
      "Panels usually carry performance warranties around 25 years. The inverter has a shorter life and may need replacing once in that time.",
    ],
    [
      "Can you fix a system someone else installed?",
      "Yes. We service, clean and repair existing rooftop systems too.",
    ],
    [
      "Will my bill actually become zero?",
      "Usually not zero, but much smaller. There are fixed charges, and you still draw from the grid at night. We would rather tell you that now than promise zero.",
    ],
  ],
};

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

export default function FAQ({
  topic = "process",
  eyebrow = "Questions",
  title = "What people ask us first.",
  sub = "Straight answers. No sales talk.",
}) {
  const [open, setOpen] = useState(0);
  const items = FAQS[topic] || [];

  return (
    <Section id="faq" className="py-20 sm:py-28">
      <SectionHead eyebrow={eyebrow} title={title} sub={sub} />
      <Reveal delay={0.1}>
        <div className="mt-10 border-t border-line">
          {items.map(([q, a], i) => (
            <Item key={q} q={q} a={a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
