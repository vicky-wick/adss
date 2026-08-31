import { Link } from "react-router-dom";
import { ADDRESS_LINES, BRAND, PARENT } from "../lib/site.js";

const LINKS = [
  ["Services", "/services"],
  ["How it works", "/how-it-works"],
  ["Government subsidy", "/subsidy"],
  ["Gallery", "/gallery"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto w-full max-w-6xl px-5 py-14 sm:px-8 sm:py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-forest-700">
                <span className="h-3 w-3 rounded-full bg-sun-400" />
              </span>
              <span className="text-[15px] font-extrabold tracking-[-0.02em] text-forest-900">
                ADSS <span className="font-medium text-mute">Solar Energy</span>
              </span>
            </div>
            <p className="mt-4 max-w-sm text-[13px] leading-relaxed text-mute">
              {PARENT}. Rooftop solar design, installation, subsidy assistance, commissioning and
              after-sales support across Odisha.
            </p>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
              Pages
            </h3>
            <ul className="mt-2 space-y-0.5">
              {LINKS.map(([label, href]) => (
                <li key={label}>
                  <Link
                    to={href}
                    className="inline-block py-2 text-[13px] text-mute transition-colors hover:text-forest-700"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.14em] text-ink">
              Contact
            </h3>
            <address className="mt-4 space-y-1 text-[13px] not-italic leading-relaxed text-mute">
              {ADDRESS_LINES.map((l) => (
                <span key={l} className="block">
                  {l}
                </span>
              ))}
            </address>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6">
          <p className="text-[11px] leading-relaxed text-mute">
            Scheme references: PM Surya Ghar (MNRE) and Odisha state rooftop solar support. Subsidy
            amounts and eligibility are subject to prevailing scheme guidelines, consumer category
            and DISCOM requirements. {BRAND} is an independent solar installation company and is not
            a government agency or affiliated with one.
          </p>
          <p className="mt-4 text-[12px] text-mute">
            © {new Date().getFullYear()} {BRAND}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
