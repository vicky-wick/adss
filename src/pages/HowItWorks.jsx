import { PageHero } from "../components/ui.jsx";
import Process from "../components/Process.jsx";
import FAQ from "../components/FAQ.jsx";
import CTA from "../components/CTA.jsx";

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="From your first call"
        accent="to a lower bill."
        sub="Here is exactly what happens, in order, and which parts are our job rather than yours."
        tone="forest"
      />
      <Process />
      <div className="bg-mint-50">
        <FAQ
          topic="process"
          eyebrow="Practical questions"
          title="Things worth asking before you start."
          sub="The honest answers, including the ones that are not flattering."
        />
      </div>
      <CTA />
    </>
  );
}
