"use client";

const TEXT = "BASEMENT STUDIO · PRISTINA · VIDEO PRODUCTION · ";

export function MarqueeStudio() {
  return (
    <div className="bg-[#e5ff00] overflow-hidden py-3.5 border-t-0">
      <div className="marquee-track flex whitespace-nowrap w-max">
        {Array.from({ length: 16 }).map((_, i) => (
          <span
            key={i}
            className="font-display text-lg tracking-[0.12em] text-black pr-0"
            style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
          >
            {TEXT}
          </span>
        ))}
      </div>
    </div>
  );
}
