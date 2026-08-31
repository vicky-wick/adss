import { PageHero } from "../components/ui.jsx";
import Subsidy from "../components/Subsidy.jsx";
import FAQ from "../components/FAQ.jsx";
import CTA from "../components/CTA.jsx";

export default function SubsidyPage() {
  return (
    <>
      <PageHero
        eyebrow="Government subsidy"
        title="The government pays"
        accent="for a big part of it."
        sub="Here is what is on offer for a home in Odisha right now — and what we do to get it for you."
        tone="forest"
      />
      <Subsidy />
      <div className="bg-sun-100">
        <FAQ
          topic="subsidy"
          eyebrow="Subsidy questions"
          title="What people ask about the money."
          sub="Plain answers about who qualifies and when it arrives."
        />
      </div>
      <CTA />
    </>
  );
}
