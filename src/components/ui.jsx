import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export const ease = [0.22, 1, 0.36, 1];

/* Fade + rise on scroll into view */
export function Reveal({ children, delay = 0, y = 18, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, className = "", children }) {
  return (
    <section id={id} className={`scroll-mt-24 ${className}`}>
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children, tone = "forest" }) {
  const tones = {
    forest: "text-forest-500 bg-forest-50 ring-forest-100",
    sun: "text-forest-700 bg-sun-100 ring-sun-300/50",
    light: "text-sun-300 bg-white/10 ring-white/15",
  };
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] ring-1 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}

export function Button({ as = "a", variant = "primary", className = "", children, ...rest }) {
  const Tag = as;
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold transition-all duration-300 will-change-transform active:scale-[0.98]";
  const variants = {
    primary:
      "bg-forest-700 text-white hover:bg-forest-600 shadow-[0_10px_30px_-12px_rgba(11,59,46,0.7)] hover:shadow-[0_16px_40px_-14px_rgba(11,59,46,0.75)] hover:-translate-y-0.5",
    sun: "bg-sun-400 text-forest-900 hover:bg-sun-300 shadow-[0_10px_30px_-12px_rgba(245,166,35,0.8)] hover:-translate-y-0.5",
    ghost:
      "bg-white/80 text-forest-700 ring-1 ring-line backdrop-blur hover:bg-white hover:ring-forest-100 hover:-translate-y-0.5",
    light: "bg-white text-forest-700 hover:bg-sun-100 hover:-translate-y-0.5",
  };
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}

/* Count-up number, triggers once in view */
export function CountUp({ to, prefix = "", suffix = "", duration = 1.4, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const mv = useMotionValue(0);
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, {
      duration,
      ease,
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {Math.round(val).toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

export function Disclaimer({ children, className = "" }) {
  return (
    <p className={`text-[12px] leading-relaxed text-mute ${className}`}>{children}</p>
  );
}

export function SectionHead({ eyebrow, title, sub, tone = "forest", align = "left" }) {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && <Reveal><Eyebrow tone={tone}>{eyebrow}</Eyebrow></Reveal>}
      <Reveal delay={0.06}>
        <h2
          className={`mt-5 text-3xl leading-[1.1] font-bold tracking-[-0.02em] sm:text-4xl md:text-[2.9rem] ${
            tone === "light" ? "text-white" : "text-ink"
          }`}
        >
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.12}>
          <p className={`mt-4 text-[15px] leading-relaxed sm:text-base ${tone === "light" ? "text-white/70" : "text-mute"}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}
