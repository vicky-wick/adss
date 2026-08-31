import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Reveal, Section, SectionHead, Button } from "./ui.jsx";
import { GALLERY } from "../lib/images.js";

export default function Projects() {
  const preview = GALLERY.slice(0, 5);

  return (
    <Section id="projects" className="py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="Our work"
          title="Installations that work in the real world."
          sub="Rooftops across Bhubaneswar and Odisha — surveyed, installed, commissioned and supported by our own team."
        />
        <Reveal delay={0.1}>
          <Button as={Link} to="/gallery" variant="ghost">
            View full gallery →
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map((item, i) => (
          <Reveal
            key={item.src}
            delay={(i % 3) * 0.06}
            className={i === 0 ? "sm:col-span-2 lg:row-span-2" : ""}
          >
            <Link
              to="/gallery"
              className="group block h-full overflow-hidden rounded-3xl border border-line bg-white"
            >
              <div className={`overflow-hidden ${i === 0 ? "aspect-[16/11] lg:aspect-[4/3]" : "aspect-[4/3]"}`}>
                <motion.img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[15px] font-bold tracking-tight text-ink">{item.title}</h3>
                <p className="mt-1 text-[12px] text-mute">{item.meta}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
