# ADSS Solar Energy — Landing Page

React + Vite + Tailwind v4 + Framer Motion + Lenis (smooth scroll).

## Run

```
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs to dist/
```

## Structure

```
src/
  lib/site.js      ← brand, phone, email, address, nav  (EDIT THIS FIRST)
  lib/images.js    ← image URLs + gallery items
  components/      ← Hero, TrustBar, Savings, Subsidy, Process, Services,
                     Calculator, Projects, WhyADSS, FAQ, CTA, Footer, MobileCTA
  pages/           ← Home.jsx, Gallery.jsx
public/earth.png   ← rotating globe (CSS spin, 80s loop)
```

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
