import { Link } from "react-router-dom";
import { Band, Button, CountUp, Reveal, SectionHead } from "./ui.jsx";
import { GALLERY } from "../lib/images.js";

/* ── What we do, in four plain lines ─────────────────────────────────────── */
const WHAT = [
  {
    n: "01",
    t: "We come and look at your roof",
    d: "Free visit. We check your roof, your shade and your last electricity bill.",
    tone: "bg-sky-100 text-sky-700",
  },
  {
    n: "02",
    t: "We tell you the size and the price",
    d: "One clear number. How many kW you need, what it costs, what you get back.",
    tone: "bg-sun-100 text-forest-700",
  },
  {
    n: "03",
    t: "We do the government paperwork",
    d: "Subsidy application, DISCOM forms, approvals. You sign — we run around.",
    tone: "bg-mint-200 text-forest-700",
  },
  {
    n: "04",
    t: "We install it and switch it on",
    d: "Panels up, meter connected, subsidy followed up until it reaches your account.",
    tone: "bg-ember-100 text-ember-600",
  },
];

export function WhatWeDo() {
  return (
    <Band tone="white" className="py-20 sm:py-28">
      <SectionHead
        eyebrow="In plain words"
        title="What we actually do for you."
        sub="Four steps. That is the whole job."
      />

      <div className="mt-12 grid gap-4 sm:grid-cols-2">
        {WHAT.map((s, i) => (
          <Reveal key={s.n} delay={(i % 2) * 0.07}>
            <div className="flex h-full gap-4 rounded-3xl border border-line bg-cream p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-32px_rgba(13,21,18,0.5)] sm:p-7">
              <span
                className={`grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-[13px] font-bold ${s.tone}`}
              >
                {s.n}
              </span>
              <div>
                <h3 className="text-[17px] leading-snug font-bold tracking-tight text-ink">{s.t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-mute">{s.d}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10">
          <Button as={Link} to="/how-it-works" variant="ghost">
            See the full process →
          </Button>
        </div>
      </Reveal>
    </Band>
  );
}

/* ── Subsidy, reduced to the one number people care about ────────────────── */
export function SubsidyTeaser() {
  return (
    <Band tone="sun" className="py-20 sm:py-28">
      <div className="grid items-center gap-10 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <Reveal>
            <span className="inline-flex rounded-full bg-forest-700 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-sun-300">
              Government subsidy
            </span>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-6 text-[clamp(2rem,5.4vw,3.2rem)] leading-[1.08] font-bold tracking-[-0.03em] text-ink">
              The government pays for a big part of it.
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-forest-700/75 sm:text-[17px]">
              A 3 kW home system can get up to ₹78,000 from the centre and up to ₹60,000 more from
              Odisha. We check if you qualify and file everything for you.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8">
              <Button as={Link} to="/subsidy" variant="primary">
                Check what you can get →
              </Button>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.12} className="lg:col-span-6">
          <div className="rounded-3xl border border-forest-700/10 bg-white p-7 sm:p-9">
            <p className="text-[12px] font-semibold uppercase tracking-[0.14em] text-mute">
              Example · 3 kW home
            </p>
            <dl className="mt-6 space-y-4">
              {[
                ["Central subsidy", "₹78,000", "text-forest-700"],
                ["Odisha support", "₹60,000", "text-forest-700"],
              ].map(([k, v, c]) => (
                <div key={k} className="flex items-center justify-between">
                  <dt className="text-sm text-mute">{k}</dt>
                  <dd className={`text-lg font-bold tracking-tight ${c}`}>{v}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 rounded-2xl bg-forest-700 p-5 text-white">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sun-300">
                You could get back
              </p>
              <div className="mt-2 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">
                ₹<CountUp to={138000} />
              </div>
            </div>
            <p className="mt-4 text-[11px] leading-relaxed text-mute">
              If you are eligible. Amounts follow the current scheme rules and your DISCOM.
            </p>
          </div>
        </Reveal>
      </div>
    </Band>
  );
}

/* ── A glimpse of the work, links to the gallery ─────────────────────────── */
export function WorkTeaser() {
  const shots = GALLERY.slice(0, 3);
  return (
    <Band tone="cream" className="py-20 sm:py-28">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          eyebrow="Our work"
          title="Roofs we have already done."
          sub="Homes, shops and offices around Bhubaneswar and across Odisha."
        />
        <Reveal delay={0.1}>
          <Button as={Link} to="/gallery" variant="ghost">
            See the gallery →
          </Button>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-4 sm:grid-cols-3">
        {shots.map((item, i) => (
          <Reveal key={item.src} delay={i * 0.07}>
            <Link
              to="/gallery"
              className="group block overflow-hidden rounded-3xl border border-line bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
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
    </Band>
  );
}
