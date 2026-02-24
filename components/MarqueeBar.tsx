"use client";

const items = [
  "Editing",
  "Color Grading",
  "Sound Design",
  "Motion Graphics",
  "Boutique Studio",
  "LA · NY · Austin",
  "4K / HDR Broadcast",
  "Remote + On-Site",
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
        zIndex: 600,
        height: 26,
        background: "var(--lime)",
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
          animation: "marquee 32s linear infinite",
          willChange: "transform",
        }}
      >
        {[...items, ...items].flatMap((label, i) => [
          <span
            key={`${label}-${i}-t`}
            style={{
              fontFamily: "var(--cond)",
              fontSize: 9.5,
              fontWeight: 600,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(8,8,8,0.65)",
              padding: "0 22px",
            }}
          >
            {label}
          </span>,
          <span key={`${label}-${i}-d`} style={{ padding: 0, color: "rgba(8,8,8,0.3)", fontSize: 11 }}>·</span>,
        ])}
      </div>
      <style jsx>{`
        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
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
