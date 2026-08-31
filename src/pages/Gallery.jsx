import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button, Reveal, Section, ease } from "../components/ui.jsx";
import { GALLERY } from "../lib/images.js";
import { WHATSAPP } from "../lib/site.js";

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <Section className="pt-32 pb-4 sm:pt-40">
        <Reveal>
          <Link to="/" className="inline-block py-2 text-[13px] font-medium text-mute hover:text-forest-700">
            ← Back to home
          </Link>
        </Reveal>
        <Reveal delay={0.05}>
          <h1 className="mt-6 max-w-3xl text-[10vw] leading-[1.05] font-bold tracking-[-0.03em] text-ink sm:text-5xl md:text-[3.6rem]">
            Our work on rooftops
            <span className="block font-serif italic text-forest-500">across Odisha.</span>
          </h1>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-mute sm:text-base">
            Residential, commercial and institutional installations — surveyed, installed,
            commissioned and supported by the ADSS team.
          </p>
        </Reveal>
      </Section>

      <Section className="py-12 sm:py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {GALLERY.map((item, i) => (
            <Reveal key={item.src} delay={(i % 3) * 0.05}>
              <button
                onClick={() => setActive(item)}
                className="group block w-full overflow-hidden rounded-3xl border border-line bg-white text-left"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.title}
                    loading="lazy"
                    className="w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                  />
                </div>
                <div className="p-5">
                  <h2 className="text-[15px] font-bold tracking-tight text-ink">{item.title}</h2>
                  <p className="mt-1 text-[12px] text-mute">{item.meta}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-[12px] leading-relaxed text-mute">
            Representative imagery. Replace with ADSS project photographs before launch.
          </p>
        </Reveal>
      </Section>

      <Section className="pb-24">
        <div className="rounded-[2rem] bg-forest-700 px-7 py-14 text-center text-white sm:px-12">
          <h2 className="mx-auto max-w-xl text-3xl font-bold leading-tight tracking-[-0.02em] sm:text-4xl">
            Want your rooftop on this page?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-[15px] leading-relaxed text-white/65">
            Book a free site assessment and we will tell you the honest answer about what your roof
            can do.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button
              href={"https://wa.me/" + WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              variant="sun"
            >
              Book free assessment
            </Button>
            <Button as={Link} to="/#calculator" variant="light">
              Estimate my savings
            </Button>
          </div>
        </div>
      </Section>

      <AnimatePresence>
        {active && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-forest-900/90 p-4 backdrop-blur-md sm:p-8"
          >
            <motion.figure
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.97, opacity: 0 }}
              transition={{ duration: 0.35, ease }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl overflow-hidden rounded-3xl bg-white"
            >
              <img src={active.src} alt={active.title} className="max-h-[70vh] w-full object-cover" />
              <figcaption className="flex items-center justify-between gap-4 p-5">
                <span>
                  <span className="block text-[15px] font-bold tracking-tight text-ink">
                    {active.title}
                  </span>
                  <span className="mt-0.5 block text-[12px] text-mute">{active.meta}</span>
                </span>
                <button
                  onClick={() => setActive(null)}
                  className="shrink-0 rounded-full bg-forest-50 px-4 py-2 text-[13px] font-semibold text-forest-700"
                >
                  Close
                </button>
              </figcaption>
            </motion.figure>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
