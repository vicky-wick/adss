const ITEMS = [
  "Government scheme assistance",
  "Complete documentation",
  "Professional installation",
  "Commissioning support",
  "After-sales service",
];

export default function TrustBar() {
  return (
    <div className="mt-16 border-y border-line bg-white sm:mt-20">
      <div className="no-scrollbar overflow-hidden">
        <div className="flex w-max animate-[drift_38s_linear_infinite] items-center gap-10 py-4">
          {[...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
            <span
              key={i}
              className="flex shrink-0 items-center gap-2.5 text-[13px] font-medium tracking-tight whitespace-nowrap text-mute"
            >
              <span className="grid h-4 w-4 place-items-center rounded-full bg-forest-50 text-[9px] font-bold text-forest-500">
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
