"use client";

const items = [
  "Editing",
  "Color",
  "Sound Design",
  "Motion Graphics",
  "Boutique Studio",
  "LA · NY · Austin",
  "4K / HDR Broadcast",
  "Remote & On-Site",
];

export function MarqueeBar() {
  return (
    <div
      className="marquee-bar"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 400,
        height: "30px",
        background: "var(--acid)",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
      aria-hidden
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          whiteSpace: "nowrap",
          animation: "marquee 28s linear infinite",
          willChange: "transform",
        }}
      >
        {[...items, ...items].flatMap((label, i) => [
          <span
            key={`${label}-${i}-t`}
            style={{
              fontSize: "10px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "var(--black)",
              padding: "0 28px",
            }}
          >
            {label}
          </span>,
          <span key={`${label}-${i}-d`} style={{ padding: 0, opacity: 0.4, fontSize: "14px" }}>·</span>,
        ])}
      </div>
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
}
