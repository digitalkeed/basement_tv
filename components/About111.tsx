const services = [
  { num: "01", title: "Editing", desc: "Story-first cutting that keeps pace and clarity. We shape narrative and rhythm so the final cut lands exactly how it should.", pills: ["Offline", "Online", "Assembly", "Broadcast", "Delivery"] },
  { num: "02", title: "Color", desc: "Look development and final grade. From dailies to HDR deliverables, we match and elevate the image to its fullest potential.", pills: ["DaVinci Resolve", "4K / HDR", "Dailies", "Look Dev", "Final Grade"] },
  { num: "03", title: "Sound Design", desc: "Dialogue, music, and design. Mix and master for spot, film, and broadcast. Every frame deserves a sonic identity.", pills: ["Dialogue Edit", "Final Mix", "Score", "SFX", "Broadcast"] },
  { num: "04", title: "Motion Graphics", desc: "Titles, GFX, and animated elements. Clean, on-brand motion that supports the story without competing with it.", pills: ["Titles", "Lower Thirds", "GFX", "After Effects", "Animation"] },
];

const philosophy = [
  { label: "Boutique by Design", body: "Small enough to stay nimble and focused. Experienced enough to deliver at the highest level without the overhead of a large facility." },
  { label: "Right Key Creatives", body: "We match the project with the right editors, colorists, and sound designers. No bench warmers, no B-teams. The person pitching is the person cutting." },
  { label: "Scale-Appropriate Crews", body: "From solo offline edits to full post crews, we scale to fit the job and the budget — never overbuild, never underdeliver." },
  { label: "Process", body: "We start with the cut. Then we layer in color, sound, and motion — each step with the same care. Flexible workflows, clear communication, delivery in the formats you need." },
];

export function About111() {
  return (
    <section id="about" style={{ padding: "100px 0 0", overflow: "hidden" }}>
      <div
        className="reveal about-header-111"
        style={{
          padding: "0 32px 60px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 40,
          alignItems: "start",
          borderBottom: "1px solid var(--rule)",
        }}
      >
        <div>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--acid)", marginBottom: 6 }}>
            About the Studio
          </div>
          <h2
            style={{
              fontFamily: "var(--font-sf)",
              fontSize: "clamp(52px, 6.5vw, 100px)",
              letterSpacing: "0.03em",
              lineHeight: 0.95,
              color: "var(--white)",
            }}
          >
            Editing &<br />
            <em style={{ fontStyle: "italic", fontFamily: "var(--font-sf)", color: "var(--acid)" }}>Post.</em>
            <br />
            Work that
            <br />
            moves.
          </h2>
        </div>
        <div style={{ paddingTop: 8, display: "flex", flexDirection: "column", gap: 20 }}>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(245,242,235,0.65)", fontWeight: 300 }}>
            <strong style={{ color: "var(--white)", fontWeight: 400 }}>We are Basement.</strong> A boutique studio specializing in moving pictures, built by editors who believe the cut is the most powerful tool in storytelling.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(245,242,235,0.65)", fontWeight: 300 }}>
            We tailor each production to its scale — from solo offline edits to full post crews — and make sure the <strong style={{ color: "var(--white)", fontWeight: 400 }}>right key creatives</strong> are on board to deliver the highest-possible outcome, consistently.
          </p>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "rgba(245,242,235,0.65)", fontWeight: 300 }}>
            Flexible workflows. Remote and on-site. Clear communication. Delivery in whatever format you need — broadcast, digital, 4K, HDR.
          </p>
        </div>
      </div>

      {/* Services horizontal scroll */}
      <div className="reveal" style={{ overflowX: "auto", scrollbarWidth: "none", borderBottom: "1px solid var(--rule)" }}>
        <div style={{ display: "flex", width: "max-content" }}>
          {services.map((s) => (
            <div
              key={s.num}
              style={{
                minWidth: 280,
                padding: "40px 32px",
                borderRight: "1px solid var(--rule)",
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
              className="service-card-111"
            >
              <div style={{ fontFamily: "var(--font-sf)", fontSize: 13, letterSpacing: "0.2em", color: "var(--acid)" }}>{s.num}</div>
              <div style={{ fontFamily: "var(--font-sf)", fontSize: 28, fontWeight: 400, lineHeight: 1.1 }}>{s.title}</div>
              <div style={{ fontSize: 13, lineHeight: 1.7, color: "var(--dim)" }}>{s.desc}</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: "auto" }}>
                {s.pills.map((p) => (
                  <span
                    key={p}
                    style={{
                      fontSize: 9,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      background: "rgba(245,242,235,0.07)",
                      border: "1px solid rgba(245,242,235,0.1)",
                      padding: "4px 10px",
                      borderRadius: 20,
                      color: "rgba(245,242,235,0.55)",
                    }}
                  >
                    {p}
                  </span>
                ))}
              </div>
            </div>
          ))}
          <div style={{ minWidth: 200, padding: "40px 32px", background: "rgba(212,242,68,0.04)" }}>
            <div style={{ fontFamily: "var(--font-sf)", fontSize: 13, letterSpacing: "0.2em", color: "var(--acid)", opacity: 0.3 }}>→</div>
            <div style={{ fontFamily: "var(--font-sf)", fontSize: 20, color: "var(--acid)" }}>All services</div>
            <div style={{ fontSize: 13, color: "var(--dim)", marginTop: 8 }}>Every project. Any scale. One boutique team.</div>
            <a href="#contact" style={{ marginTop: "auto", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--acid)", borderBottom: "1px solid rgba(212,242,68,0.4)", paddingBottom: 4, display: "inline-block" }}>
              Work with us →
            </a>
          </div>
        </div>
      </div>

      {/* Philosophy split */}
      <div
        className="reveal about-split-111"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderTop: "1px solid var(--rule)" }}
      >
        <div className="about-split-left-111" style={{ padding: "60px 32px", borderRight: "1px solid var(--rule)" }}>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--acid)" }}>Our Philosophy</div>
          <div style={{ fontFamily: "var(--font-sf)", fontSize: "clamp(32px, 3.5vw, 52px)", letterSpacing: "0.04em", lineHeight: 1, margin: "16px 0 24px" }}>
            Small enough
            <br />
            to stay sharp.
          </div>
          <p style={{ fontSize: 14, lineHeight: 1.8, color: "var(--dim)" }}>
            Being boutique isn&apos;t a limitation — it&apos;s the whole point. We never take on more than we can give our best to. Every project gets the senior creative eye and the direct communication that bigger shops promise but rarely deliver.
          </p>
        </div>
        <div style={{ padding: "60px 32px", display: "flex", flexDirection: "column", gap: 32 }}>
          {philosophy.map((item) => (
            <div key={item.label} style={{ display: "flex", flexDirection: "column", gap: 6, paddingBottom: 24, borderBottom: "1px solid var(--rule)" }}>
              <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--acid)" }}>{item.label}</div>
              <div style={{ fontSize: 14, lineHeight: 1.7, color: "rgba(245,242,235,0.6)" }}>{item.body}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Manifesto */}
      <div
        className="reveal"
        style={{
          padding: "80px 32px",
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          background: "linear-gradient(135deg, rgba(212,242,68,0.03) 0%, transparent 60%)",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sf)",
            fontStyle: "italic",
            fontSize: "clamp(22px, 3vw, 42px)",
            lineHeight: 1.35,
            maxWidth: 820,
            color: "rgba(245,242,235,0.85)",
          }}
        >
          &ldquo;The best post houses in the world don&apos;t just <strong style={{ color: "var(--white)", fontStyle: "normal" }}>finish</strong> your film — they <strong style={{ color: "var(--white)", fontStyle: "normal" }}>find</strong> it. That&apos;s what we do at Basement. Every frame, every cut, every grade. Until it&apos;s right.&rdquo;
        </p>
      </div>
    </section>
  );
}
