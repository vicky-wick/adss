const ITEMS = [
  "Free roof visit",
  "Subsidy filed by us",
  "All paperwork done",
  "Our own install team",
  "Meter and approvals",
  "We come back if anything breaks",
];

export default function TrustBar() {
  return (
    <div className="mt-16 border-y border-forest-700/10 bg-forest-700 sm:mt-20">
      <div className="no-scrollbar overflow-hidden">
        <div className="flex w-max animate-[drift_38s_linear_infinite] items-center gap-10 py-4">
          {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2.5 text-[13px] font-medium tracking-tight whitespace-nowrap text-white/85"
            >
              <span className="grid h-4 w-4 place-items-center rounded-full bg-sun-400 text-[9px] font-bold text-forest-900">
                ✓
              </span>
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
