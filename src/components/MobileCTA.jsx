import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PHONE_TEL, WHATSAPP } from "../lib/site.js";

export default function MobileCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-white/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-xl lg:hidden"
        >
          <div className="flex gap-2.5">
            <a
              href={"tel:" + PHONE_TEL}
              className="flex flex-1 items-center justify-center gap-2 rounded-full border border-line py-3.5 text-sm font-semibold text-forest-700"
            >
              Call
            </a>
            <a
              href={"https://wa.me/" + WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-[1.6] items-center justify-center gap-2 rounded-full bg-forest-700 py-3.5 text-sm font-semibold text-white"
            >
              Get free quote
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
