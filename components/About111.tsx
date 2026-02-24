const services = [
  { num: "01", title: "Editing", desc: "Story-first cutting that keeps pace and clarity. We shape narrative and rhythm so the final cut lands exactly how it should.", pills: ["Offline", "Online", "Assembly", "Broadcast"] },
  { num: "02", title: "Color", desc: "Look development and final grade. From dailies to HDR, we match and elevate the image to its fullest potential.", pills: ["DaVinci Resolve", "4K / HDR", "Dailies", "Look Dev"] },
  { num: "03", title: "Sound Design", desc: "Dialogue, music, and design. Mix and master for spot, film, and broadcast. Every frame deserves a sonic identity.", pills: ["Dialogue Edit", "Final Mix", "Score", "SFX"] },
  { num: "04", title: "Motion Graphics", desc: "Titles, GFX, and animated elements. Clean, on-brand motion that supports the story without competing with it.", pills: ["Titles", "Lower Thirds", "GFX", "Animation"] },
];

const philosophy = [
  { label: "Boutique by design", body: "Small enough to stay nimble and focused. Experienced enough to deliver at the highest level without the overhead of a large facility.", strong: "Small enough to stay nimble and focused." },
  { label: "Right key creatives", body: "We match the project with the right editors, colorists, and sound designers. No bench warmers, no B-teams. The person pitching is the person cutting.", strong: "No bench warmers, no B-teams." },
  { label: "Scale-appropriate crews", body: "From solo edits to full post crews, we scale to fit the job and the budget — never overbuild, never underdeliver.", strong: "We scale to fit the job and the budget" },
  { label: "Process", body: "We start with the cut, then layer in color, sound, and motion — each step with the same care. Clear communication, delivery in the formats you need.", strong: "Each step with the same care." },
];

export function About111() {
  return (
    <section id="about" style={{ paddingTop: 88, overflow: "hidden" }}>
      <div
        className="reveal about-header-111"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 52,
          padding: "0 var(--pad) 68px",
          borderBottom: "1px solid var(--rule)",
          alignItems: "start",
        }}
      >
        <div>
          <div style={{ fontFamily: "var(--grot)", fontSize: 9.5, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 14 }}>
            About the Studio
          </div>
          <h2
            style={{
              fontFamily: "var(--sf)",
              fontSize: "clamp(44px, 6.2vw, 90px)",
              fontWeight: 600,
              letterSpacing: "-0.038em",
              lineHeight: 0.93,
              color: "var(--paper)",
            }}
          >
            Editing &amp;<br />
            Post.<br />
            <i style={{ display: "block", fontStyle: "italic", fontWeight: 300, color: "var(--paper-60)", fontSize: "0.76em", letterSpacing: "-0.02em", lineHeight: 1.18, marginTop: 10 }}>
              Work that<br />moves.
            </i>
          </h2>
        </div>
        <div className="a-copy-111" style={{ paddingTop: 4, display: "flex", flexDirection: "column", gap: 17 }}>
          <p style={{ fontFamily: "var(--grot)", fontSize: 15, fontWeight: 300, lineHeight: 1.82, color: "var(--paper-60)" }}>
            <strong style={{ color: "var(--paper)", fontWeight: 400 }}>We are Basement.</strong> A boutique studio specializing in moving pictures — built by editors who believe the cut is the most powerful tool in storytelling.
          </p>
          <p style={{ fontFamily: "var(--grot)", fontSize: 15, fontWeight: 300, lineHeight: 1.82, color: "var(--paper-60)" }}>
            We tailor each production to its scale and make sure the <strong style={{ color: "var(--paper)", fontWeight: 400 }}>right key creatives</strong> are on board. From solo offline edits to full post crews, we scale to fit the job without compromise.
          </p>
          <p style={{ fontFamily: "var(--grot)", fontSize: 15, fontWeight: 300, lineHeight: 1.82, color: "var(--paper-60)" }}>
            Flexible workflows. Remote and on-site. Clear communication. Delivery in whatever format you need — broadcast, digital, 4K, HDR.
          </p>
          <a href="#contact" className="a-link-111" style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--grot)", fontSize: 10.5, fontWeight: 500, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--paper)", width: "fit-content", borderBottom: "1px solid var(--paper-18)", paddingBottom: 5, marginTop: 6 }}>
            Work with us
            <svg width={11} height={11} viewBox="0 0 11 11" fill="none" style={{ flexShrink: 0 }}><path d="M1 10L10 1M10 1H3.5M10 1V7.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" /></svg>
          </a>
        </div>
      </div>

      {/* Services horizontal scroll */}
      <div className="reveal svc-scroll-111" style={{ overflowX: "auto", scrollbarWidth: "none", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "flex", width: "max-content" }}>
          {services.map((s) => (
            <div
              key={s.num}
              className="svc-card-111"
              style={{
                minWidth: 290,
                padding: "38px var(--pad)",
                borderRight: "1px solid var(--rule)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <div style={{ fontFamily: "var(--cond)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.22em", color: "var(--lime)" }}>{s.num}</div>
              <div style={{ fontFamily: "var(--sf)", fontSize: 28, fontWeight: 500, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--paper)" }}>{s.title}</div>
              <div style={{ fontFamily: "var(--grot)", fontSize: 13, fontWeight: 300, lineHeight: 1.78, color: "var(--paper-60)", flex: 1 }}>{s.desc}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginTop: 4 }} className="pills-111">
                {s.pills.map((p) => (
                  <span
                    key={p}
                    className="pill-111"
                    style={{
                      fontFamily: "var(--grot)",
                      fontSize: 9,
                      fontWeight: 400,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      background: "var(--paper-08)",
                      border: "1px solid var(--paper-18)",
                      padding: "3.5px 9px",
                      borderRadius: 99,
                      color: "var(--paper-60)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div style={{ minWidth: 200, padding: "38px var(--pad)", background: "rgba(200,242,52,0.025)", display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ fontFamily: "var(--cond)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.22em", color: "var(--lime)", opacity: 0.25 }}>→</div>
            <div style={{ fontFamily: "var(--sf)", color: "var(--lime)", fontSize: 20, fontWeight: 500, lineHeight: 1.2, marginTop: "auto" }}>One team.<br />Every<br />deliverable.</div>
            <a href="#contact" style={{ marginTop: "auto", fontFamily: "var(--grot)", fontSize: 10, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--lime)", borderBottom: "1px solid rgba(200,242,52,0.28)", paddingBottom: 4, width: "fit-content" }}>Start a project →</a>
          </div>
        </div>
      </div>

      {/* Philosophy split */}
      <div
        className="reveal about-split-111"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "1px solid var(--rule)" }}
      >
        <div className="about-split-left-111" style={{ padding: "58px var(--pad)", borderRight: "1px solid var(--rule)" }}>
          <div style={{ fontFamily: "var(--grot)", fontSize: 9.5, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 14 }}>Our Philosophy</div>
          <div style={{ fontFamily: "var(--sf)", fontSize: "clamp(28px, 3.2vw, 50px)", fontWeight: 600, letterSpacing: "-0.035em", lineHeight: 1.02, color: "var(--paper)", margin: "14px 0 24px" }}>
            Small enough<br />to stay sharp.
          </div>
          <p style={{ fontFamily: "var(--grot)", fontSize: 14, fontWeight: 300, lineHeight: 1.82, color: "var(--paper-60)" }}>
            Being boutique isn&apos;t a limitation — it&apos;s the whole point. We never take on more than we can give our best to. Every project gets the senior creative eye and direct communication that larger shops promise but rarely deliver.
          </p>
        </div>
        <div style={{ padding: "58px var(--pad)", display: "flex", flexDirection: "column" }}>
          {philosophy.map((item) => (
            <div key={item.label} className="ph-item-111" style={{ padding: "22px 0", borderBottom: "1px solid var(--rule-sm)" }}>
              <div style={{ fontFamily: "var(--grot)", fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 7 }}>{item.label}</div>
              <div style={{ fontFamily: "var(--grot)", fontSize: 13.5, fontWeight: 300, lineHeight: 1.78, color: "var(--paper-60)" }}>
                {item.strong
                  ? item.body.split(item.strong).map((part, i) => (
                      <span key={i}>
                        {part}
                        {i === 0 ? <strong style={{ color: "var(--paper)", fontWeight: 400 }}>{item.strong}</strong> : null}
                      </span>
                    ))
                  : item.body}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <div
        className="reveal"
        style={{
          padding: "76px var(--pad)",
          borderBottom: "1px solid var(--rule)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 18,
          background: "radial-gradient(ellipse 65% 90% at 50% 50%, rgba(200,242,52,0.035) 0%, transparent 68%)",
        }}
      >
        <q
          style={{
            fontFamily: "var(--sf)",
            fontStyle: "italic",
            fontSize: "clamp(19px, 2.7vw, 36px)",
            fontWeight: 300,
            letterSpacing: "-0.022em",
            lineHeight: 1.38,
            maxWidth: 820,
            color: "var(--paper-60)",
            quotes: "none",
          }}
        >
          The best post houses don&apos;t just <strong style={{ color: "var(--paper)", fontStyle: "normal", fontWeight: 500 }}>finish</strong> your film — they <strong style={{ color: "var(--paper)", fontStyle: "normal", fontWeight: 500 }}>find</strong> it. That&apos;s what we do at Basement. Every frame, every cut, every grade — until it&apos;s right.
        </q>
        <span style={{ fontFamily: "var(--grot)", fontSize: 9.5, fontWeight: 400, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--paper-35)" }}>
          — Basement Studio &nbsp;·&nbsp; Est. 2013
        </span>
      </div>
    </section>
  );
}
