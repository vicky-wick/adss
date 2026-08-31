import { PageHero } from "../components/ui.jsx";
import Services from "../components/Services.jsx";
import WhyADSS from "../components/WhyADSS.jsx";
import CTA from "../components/CTA.jsx";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="What we can do"
        accent="for your roof."
        sub="New systems for homes and businesses, and repairs for systems that are already up there."
        tone="forest"
      />
      <Services />
      <div className="bg-sky-50">
        <WhyADSS />
      </div>
      <CTA />
    </>
  );
}
