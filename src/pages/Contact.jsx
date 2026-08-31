import { PageHero } from "../components/ui.jsx";
import Calculator from "../components/Calculator.jsx";
import CTA from "../components/CTA.jsx";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Talk to us"
        title="Book a free roof visit."
        accent="कोई शुल्क नहीं।"
        sub="No charge, no obligation. We look at your roof, look at your bill, and tell you honestly whether solar is worth it for you."
        tone="forest"
      />
      <Calculator />
      <CTA />
    </>
  );
}
