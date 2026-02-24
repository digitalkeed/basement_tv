import { site } from "@/content/site";

export function Contact111() {
  return (
    <section id="contact" style={{ padding: "100px 0 0", borderTop: "1px solid var(--rule)" }}>
      <div
        className="reveal contact-wrapper-111"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
      >
        <div className="contact-left-111" style={{ padding: "60px 32px 80px", borderRight: "1px solid var(--rule)", display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--acid)" }}>Get in Touch</div>
          <div
            style={{
              fontFamily: "var(--font-sf)",
              fontSize: "clamp(56px, 7vw, 110px)",
              letterSpacing: "0.02em",
              lineHeight: 0.9,
              margin: "16px 0 32px",
            }}
          >
            Let&apos;s
            <br />
            make
            <br />
            <em style={{ fontStyle: "italic", fontFamily: "var(--font-sf)", color: "var(--acid)", display: "block" }}>something.</em>
          </div>
          <a
            href={site.email.href}
            style={{
              fontFamily: "var(--font-sf)",
              fontStyle: "italic",
              fontSize: "clamp(18px, 2vw, 26px)",
              color: "var(--white)",
              borderBottom: "1px solid rgba(245,242,235,0.2)",
              paddingBottom: 12,
              marginBottom: 24,
              width: "fit-content",
            }}
            className="contact-email-link-111"
          >
            hello@basement.tv
          </a>
          <p style={{ fontSize: 13, lineHeight: 1.8, color: "var(--dim)", marginBottom: 32 }}>
            Have a project in mind? Tell us about it. Whether it&apos;s a single offline edit or a full post package — we want to hear from you.
          </p>
          <p style={{ fontSize: 12, letterSpacing: "0.08em", color: "var(--dim)", marginTop: "auto" }}>Replies within 24–48 hours.</p>
        </div>
        <div className="reveal" style={{ padding: "60px 32px 80px", display: "flex", flexDirection: "column", gap: 0 }}>
          <div style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--acid)", marginBottom: 28 }}>Studios</div>
          {site.locations.map((loc) => (
            <div
              key={loc.city}
              style={{
                padding: "28px 0",
                borderBottom: "1px solid var(--rule)",
                display: "grid",
                gridTemplateColumns: "110px 1fr",
                gap: 20,
                alignItems: "start",
              }}
            >
              <div style={{ fontSize: 10, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--acid)", paddingTop: 2 }}>{loc.city}</div>
              <div style={{ fontSize: 13, lineHeight: 1.8, color: "rgba(245,242,235,0.55)" }}>
                <strong style={{ display: "block", color: "var(--white)", fontWeight: 400, marginBottom: 2 }}>{loc.city}</strong>
                {loc.address.replace(/, /g, ", ")}
                {loc.phone && (
                  <>
                    <br />
                    <a href={`tel:${loc.phone.replace(/-/g, "")}`} style={{ color: "inherit" }}>{loc.phone}</a>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
