import Hero from "../components/Hero.jsx";
import TrustBar from "../components/TrustBar.jsx";
import LangLine from "../components/LangLine.jsx";
import Savings from "../components/Savings.jsx";
import Calculator from "../components/Calculator.jsx";
import CTA from "../components/CTA.jsx";
import { WhatWeDo, SubsidyTeaser, WorkTeaser } from "../components/Teasers.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <LangLine />
      <Savings />
      <WhatWeDo />
      <SubsidyTeaser />
      <Calculator />
      <WorkTeaser />
      <CTA />
    </>
  );
}
