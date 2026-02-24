const stats = [
  { num: "12", suffix: "+", desc: "Years in Post" },
  { num: "4", suffix: "K", desc: "Broadcast Delivery" },
  { num: "3", suffix: "", desc: "Studios · LA / NY / ATX" },
  { num: "100", suffix: "%", desc: "Boutique Finish" },
];

export function StatsStrip111() {
  return (
    <div
      className="reveal stats-strip-111"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        borderTop: "1px solid var(--rule)",
        borderBottom: "1px solid var(--rule)",
      }}
    >
      {stats.map((s) => (
        <div
          key={s.desc}
          style={{
            padding: "40px 32px",
            borderRight: "1px solid var(--rule)",
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sf)",
              fontSize: "clamp(40px, 4vw, 64px)",
              fontWeight: 300,
              letterSpacing: "0.02em",
              lineHeight: 1,
              color: "var(--white)",
            }}
          >
            {s.num}
            <em style={{ color: "var(--acid)", fontStyle: "normal" }}>{s.suffix}</em>
          </div>
          <div
            style={{
              fontSize: 11,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "var(--dim)",
            }}
          >
            {s.desc}
          </div>
        </div>
      ))}
    </div>
  );
}
