import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import { Button, ease } from "./ui.jsx";
import { PHONE_TEL } from "../lib/site.js";

/* Soft CSS cloud bank — no external asset, renders instantly */
function Clouds() {
  const puffs = [
    { l: "-10%", b: "-8%", w: "42%", h: "82%", blur: 22 },
    { l: "12%", b: "-14%", w: "36%", h: "104%", blur: 20 },
    { l: "38%", b: "-6%", w: "40%", h: "76%", blur: 22 },
    { l: "62%", b: "-14%", w: "44%", h: "98%", blur: 24 },
    { l: "2%", b: "10%", w: "24%", h: "52%", blur: 16 },
    { l: "52%", b: "12%", w: "22%", h: "46%", blur: 16 },
  ];
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 h-[110px] sm:h-[150px]">
      {puffs.map((c, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{ left: c.l, bottom: c.b, width: c.w, height: c.h, filter: `blur(${c.blur}px)` }}
        />
      ))}
      <div className="absolute inset-x-0 -bottom-px h-[70%] bg-gradient-to-t from-cream via-cream/90 to-transparent" />
    </div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const earthY = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const skyFade = useTransform(scrollYProgress, [0, 0.9], [1, 0.3]);

  return (
    <section ref={ref} id="home" className="relative">
      {/* sky */}
      <div className="relative">
        <motion.div
          style={{ opacity: skyFade }}
          className="absolute inset-0 bg-[linear-gradient(180deg,#6FB3F5_0%,#8CC4F7_44%,#BADBFA_76%,#FBFAF7_100%)]"
        />
        {/* sun glow */}
        <div className="pointer-events-none absolute -top-28 right-[6%] h-[44vw] max-h-[440px] w-[44vw] max-w-[440px] rounded-full bg-[radial-gradient(circle,rgba(255,218,120,0.9)_0%,rgba(255,218,120,0.28)_42%,transparent_70%)] blur-2xl" />

        <div className="relative mx-auto w-full max-w-6xl px-5 pt-24 sm:px-8 sm:pt-28">
          {/* Brand lockup */}
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="text-[clamp(4rem,15vw,9rem)] leading-[0.88] font-extrabold tracking-[-0.05em] text-forest-900"
            >
              ADSS
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12, ease }}
              className="-mt-[0.06em] font-serif text-[clamp(2.9rem,11.5vw,6.75rem)] leading-[1.05] italic text-forest-500"
            >
              Solar Energy
            </motion.p>
          </div>

          {/* Earth sitting in the clouds */}
          <div className="relative mt-2 flex h-[44vw] max-h-[320px] min-h-[176px] justify-center sm:mt-1">
            <motion.div style={{ y: reduce ? 0 : earthY }} className="relative z-10">
              <motion.div
                animate={reduce ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              >
                <img
                  src="/earth.png"
                  alt="Globe covered in solar panels"
                  width="880"
                  height="880"
                  fetchPriority="high"
                  className="h-[68vw] max-h-[510px] min-h-[268px] w-[68vw] max-w-[510px] min-w-[268px] select-none object-contain drop-shadow-[0_28px_44px_rgba(18,58,88,0.28)]"
                  style={{ animation: "spin-slow 80s linear infinite" }}
                  draggable="false"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>

        <Clouds />
      </div>

      {/* Headline block on the cream base */}
      <div className="relative z-30 bg-cream pt-3 sm:pt-6">
        <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
          <div className="grid items-start gap-8 md:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease }}
              className="md:col-span-7"
            >
              <h1 className="text-[clamp(2.35rem,6.6vw,4.75rem)] leading-[1.03] font-bold tracking-[-0.04em] text-ink">
                Power your home with the sun.
                <span className="block text-forest-500">Cut your electricity bills.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease }}
              className="md:col-span-5 md:pt-3"
            >
              <p className="text-[15px] leading-relaxed text-mute sm:text-[17px]">
                Complete rooftop solar in Odisha — site assessment, government subsidy assistance,
                documentation, installation and commissioning, handled end to end.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href="#calculator" variant="primary">
                  Get your free estimate
                </Button>
                <Button href={"tel:" + PHONE_TEL} variant="ghost">
                  Talk to a solar expert
                </Button>
              </div>
            </motion.div>
          </div>

          {/* stat chips */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-4">
            {[
              ["Up to ₹78,000", "PM Surya Ghar central subsidy"],
              ["+ ₹60,000", "Odisha state support (3 kWp+)"],
              ["End to end", "Design → install → commissioning"],
              ["Bhubaneswar", "Local team, on-ground service"],
            ].map(([big, small], i) => (
              <motion.div
                key={big}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + i * 0.08, ease }}
                className="rounded-2xl border border-line bg-white p-4"
              >
                <div className="text-[15px] font-bold tracking-tight text-forest-700 sm:text-lg">
                  {big}
                </div>
                <div className="mt-1 text-[12px] leading-snug text-mute">{small}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
