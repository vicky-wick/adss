import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { NAV, PHONE_TEL } from "../lib/site.js";
import { Button, ease } from "./ui.jsx";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4">
        <motion.nav
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className={`mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-full px-4 py-2.5 transition-all duration-500 sm:px-5 ${
            scrolled
              ? "bg-white/85 shadow-[0_8px_30px_-16px_rgba(13,21,18,0.35)] ring-1 ring-line backdrop-blur-xl"
              : "bg-white/45 ring-1 ring-white/50 backdrop-blur-md"
          }`}
        >
          <Link to="/" className="flex items-center gap-2.5 py-1.5">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-forest-700">
              <span className="h-3 w-3 rounded-full bg-sun-400" />
            </span>
            <span className="text-[15px] font-extrabold tracking-[-0.02em] text-forest-900">
              ADSS <span className="font-medium text-mute">Solar</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {NAV.map((n) => (
              <Link
                key={n.label}
                to={n.href}
                className={
                  "rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors " +
                  (pathname === n.href
                    ? "bg-forest-700 text-white"
                    : "text-mute hover:bg-forest-50 hover:text-forest-700")
                }
              >
                {n.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden sm:block">
              <Button as={Link} to="/contact" variant="sun" className="px-5 py-2.5 text-[13px]">
                Free estimate
              </Button>
            </span>
            <button
              onClick={() => setOpen((v) => !v)}
              aria-label="Menu"
              aria-expanded={open}
              className="grid h-10 w-10 place-items-center rounded-full ring-1 ring-line lg:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-[2px] w-4 rounded bg-forest-900 transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`}
                />
                <span
                  className={`absolute left-0 block h-[2px] w-4 rounded bg-forest-900 transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`}
                />
              </span>
            </button>
          </div>
        </motion.nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-forest-900/95 px-6 pt-24 pb-10 backdrop-blur-xl lg:hidden"
          >
            <div className="flex h-full flex-col">
              <div className="flex-1">
                {[{ label: "Home", href: "/" }, ...NAV].map((n, i) => (
                  <motion.div
                    key={n.label}
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.05, duration: 0.4, ease }}
                  >
                    <Link
                      to={n.href}
                      onClick={() => setOpen(false)}
                      className={
                        "flex items-center justify-between border-b border-white/10 py-4 text-2xl font-semibold tracking-tight " +
                        (pathname === n.href ? "text-sun-300" : "text-white")
                      }
                    >
                      {n.label}
                      <span className="text-base text-white/30">→</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
              <div className="grid gap-3">
                <Button as={Link} to="/contact" variant="sun" onClick={() => setOpen(false)}>
                  Get free estimate
                </Button>
                <Button href={`tel:${PHONE_TEL}`} variant="light">
                  Call ADSS
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
