import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import MobileCTA from "./components/MobileCTA.jsx";
import SmoothScroll from "./components/SmoothScroll.jsx";
import Home from "./pages/Home.jsx";
import Gallery from "./pages/Gallery.jsx";
import ServicesPage from "./pages/Services.jsx";
import HowItWorksPage from "./pages/HowItWorks.jsx";
import SubsidyPage from "./pages/SubsidyPage.jsx";
import ContactPage from "./pages/Contact.jsx";

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
  }, [pathname, hash]);
  return null;
}

export default function App() {
  return (
    <>
      <SmoothScroll />
      <ScrollToTop />
      <Navbar />
      <main className="pb-20 lg:pb-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/subsidy" element={<SubsidyPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <MobileCTA />
    </>
  );
}
