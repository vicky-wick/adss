import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ease } from "./ui.jsx";

/* The one word that cycles: Hindi → English → Odia */
const WORDS = [
  { text: "बिजली", font: "font-deva", lang: "hi" },
  { text: "electricity", font: "", lang: "en" },
  { text: "ବିଦ୍ୟୁତ୍", font: "font-odia", lang: "or" },
];

export default function LangLine() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  const word = WORDS[i];

  return (
    <section className="relative overflow-hidden bg-forest-900 py-20 sm:py-28">
      {/* warm sun wash */}
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,197,49,0.28),transparent_68%)] blur-2xl" />
      <div className="pointer-events-none absolute -bottom-40 -right-20 h-[380px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(121,184,245,0.22),transparent_68%)] blur-2xl" />

      <div className="relative mx-auto w-full max-w-5xl px-5 text-center sm:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease }}
          className="text-[11px] font-semibold uppercase tracking-[0.22em] text-sun-300"
        >
          Same sun · Same saving
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.08, ease }}
          className="mt-6 text-[clamp(2.1rem,7vw,4.25rem)] leading-[1.15] font-bold tracking-[-0.03em] text-white"
        >
          Your roof can make its own
          {/* the rotating word gets its own line so the line box never collapses */}
          <span className="mt-1 grid min-h-[1.35em] justify-items-center">
            <AnimatePresence initial={false}>
              <motion.span
                key={word.text}
                lang={word.lang}
                initial={reduce ? false : { opacity: 0, y: "0.35em", filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduce ? {} : { opacity: 0, y: "-0.35em", filter: "blur(6px)" }}
                transition={{ duration: 0.5, ease }}
                className={`col-start-1 row-start-1 whitespace-nowrap text-sun-400 ${word.font}`}
              >
                {word.text}.
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.16, ease }}
          className="mx-auto mt-7 max-w-lg text-[15px] leading-relaxed text-white/65 sm:text-[17px]"
        >
          Sunlight is free. Right now you are paying the grid for something your own roof
          could be making. Solar just stops that.
        </motion.p>
      </div>
    </section>
  );
}
