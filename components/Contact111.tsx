import { site } from "@/content/site";

const OFFICE_LABELS: Record<string, string> = {
  "Los Angeles": "Santa Monica",
  "New York": "Lower Manhattan",
  "Austin": "East Austin",
};

export function Contact111() {
  return (
    <section id="contact" style={{ borderTop: "1px solid var(--rule)" }}>
      <div
        className="reveal contact-wrapper-111"
        style={{ display: "grid", gridTemplateColumns: "1.08fr 1fr" }}
      >
        <div className="contact-left-111" style={{ padding: "70px var(--pad) 80px", borderRight: "1px solid var(--rule)", display: "flex", flexDirection: "column" }}>
          <div style={{ fontFamily: "var(--grot)", fontSize: 9.5, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--lime)" }}>Get in Touch</div>
          <div
            style={{
              fontFamily: "var(--sf)",
              fontSize: "clamp(52px, 8vw, 108px)",
              fontWeight: 600,
              letterSpacing: "-0.042em",
              lineHeight: 0.9,
              color: "var(--paper)",
              margin: "14px 0 34px",
            }}
          >
            Let&apos;s<br />make<br />
            <span style={{ display: "block", fontWeight: 300, color: "var(--lime)", fontSize: "0.8em" }}>something.</span>
          </div>
          <a
            href={site.email.href}
            style={{
              fontFamily: "var(--sf)",
              fontSize: "clamp(15px, 1.7vw, 21px)",
              fontWeight: 400,
              letterSpacing: "-0.01em",
              color: "var(--paper)",
              width: "fit-content",
              borderBottom: "1px solid var(--paper-18)",
              paddingBottom: 12,
            }}
            className="contact-email-link-111"
          >
            hello@basement.tv
          </a>
          <p style={{ fontFamily: "var(--grot)", fontSize: 13.5, fontWeight: 300, lineHeight: 1.82, color: "var(--paper-35)", marginTop: 20, maxWidth: 360 }}>
            Have a project in mind? Tell us about it. Whether it&apos;s a single offline edit or a full post package — we want to hear from you.
          </p>
          <span style={{ fontFamily: "var(--grot)", fontSize: 10, fontWeight: 400, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--paper-35)", marginTop: "auto", paddingTop: 40 }}>
            Replies within 24–48 hours
          </span>
        </div>
        <div className="reveal c-r-111" data-d="1" style={{ padding: "70px var(--pad) 80px" }}>
          <div style={{ fontFamily: "var(--grot)", fontSize: 9, fontWeight: 500, letterSpacing: "0.24em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 26 }}>Studios</div>
          {site.locations.map((loc) => (
            <div
              key={loc.city}
              style={{
                padding: "22px 0",
                borderBottom: "1px solid var(--rule)",
                display: "grid",
                gridTemplateColumns: "86px 1fr",
                gap: 16,
                alignItems: "start",
              }}
            >
              <div style={{ fontFamily: "var(--cond)", fontSize: 10.5, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--paper-35)", paddingTop: 2 }}>{loc.city}</div>
              <div style={{ fontFamily: "var(--grot)", fontSize: 13, fontWeight: 300, lineHeight: 1.88, color: "var(--paper-35)" }}>
                <strong style={{ display: "block", fontFamily: "var(--sf)", fontSize: 13.5, fontWeight: 500, letterSpacing: "-0.01em", color: "var(--paper)", marginBottom: 1 }}>{OFFICE_LABELS[loc.city] ?? loc.city}</strong>
                {loc.address}
                {loc.phone && loc.phone !== "xxx-xxx-xxxx" && (
                  <>
                    <br />
                    <a href={`tel:${loc.phone.replace(/\D/g, "")}`}>{loc.phone}</a>
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
