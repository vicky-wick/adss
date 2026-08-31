# ADSS Solar Energy — Landing Page

React + Vite + Tailwind v4 + Framer Motion + Lenis (smooth scroll).

## Run

```
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Pages

| Route            | Holds                                        |
| ---------------- | -------------------------------------------- |
| `/`              | Hero, trust strip, language line, savings, what-we-do, subsidy teaser, calculator, work teaser, CTA |
| `/services`      | Full service list + why ADSS                  |
| `/how-it-works`  | The six steps + practical FAQs                |
| `/subsidy`       | Central + Odisha tables + subsidy FAQs        |
| `/gallery`       | Project gallery with lightbox                 |
| `/contact`       | Calculator + contact details + map            |

The home page is deliberately short — it answers "what is this, what do I
save, what does the government give me" and sends people to a page for detail.

## Structure

```
src/
  lib/site.js      ← brand, phone, email, address, nav  (EDIT THIS FIRST)
  lib/images.js    ← image URLs + gallery items
  components/
    Hero, TrustBar, LangLine, Savings, Teasers, Calculator,
    Subsidy, Process, Services, WhyADSS, FAQ, CTA, Footer, MobileCTA
    ui.jsx         ← Band, PageHero, Reveal, Button, CountUp, SectionHead
  pages/           ← Home, Services, HowItWorks, SubsidyPage, Gallery, Contact
public/
  earth.png        ← rotating globe, desktop (880px)
  earth-520.png    ← same globe for phones, served via srcSet
```

## Copy rules

Write like you are explaining it to a neighbour. Short sentences, no
industry words. "We file your subsidy" beats "subsidy documentation
assistance". Where a claim involves money or eligibility, say what it
depends on — the disclaimers are deliberate, keep them.

Hindi and Odia appear in three places on purpose: the rotating word in
`LangLine.jsx`, the hero sub-line, and the contact page header. Devanagari
and Odia need extra line-height — if you add more, give the line
`leading-[1.32]` or the matras clip.

## Before launch — TODO

1. **`src/lib/site.js`** — replace `PHONE_DISPLAY`, `PHONE_TEL`, `WHATSAPP`, `EMAIL`
   with the real ADSS numbers. Everything on the page (call buttons, sticky mobile
   bar, WhatsApp lead links) reads from this one file.
2. **`src/lib/images.js`** — swap the Unsplash placeholders for real ADSS project
   photographs. Real installation photos convert far better than stock.
3. Verify the subsidy figures against the current PM Surya Ghar / Odisha scheme
   notifications before going live. The disclaimers in `Subsidy.jsx` and
   `Calculator.jsx` are deliberate — keep them.

## Calculator assumptions

`src/components/Calculator.jsx`: `TARIFF = 6.5` ₹/unit and `UNITS_PER_KW = 120`
units/kW/month. Adjust if ADSS uses different planning numbers.

## Deploy

Static build. `public/_redirects` is included for Netlify SPA routing (so
`/gallery` resolves on refresh). On Vercel add a rewrite of `/*` → `/index.html`.
