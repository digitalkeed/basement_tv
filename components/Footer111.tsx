import Link from "next/link";
import { site } from "@/content/site";

export function Footer111() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--rule)",
        padding: "32px var(--pad) 50px",
        display: "grid",
        gridTemplateColumns: "1fr auto auto",
        gap: 48,
        alignItems: "start",
      }}
    >
      <div className="f-brand-111">
        <div style={{ fontFamily: "var(--sf)", fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--lime)", lineHeight: 1, marginBottom: 5 }}>Basement</div>
        <div style={{ fontFamily: "var(--grot)", fontSize: 9.5, fontWeight: 400, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--paper-35)" }}>Editing &amp; Post-Production</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        <div style={{ fontFamily: "var(--grot)", fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--paper-35)", marginBottom: 2 }}>Navigate</div>
        <Link href="/#work" style={{ fontFamily: "var(--grot)", fontSize: 12, fontWeight: 300, letterSpacing: "0.05em", color: "var(--paper-35)" }}>Work</Link>
        <Link href="/#about" style={{ fontFamily: "var(--grot)", fontSize: 12, fontWeight: 300, letterSpacing: "0.05em", color: "var(--paper-35)" }}>About Us</Link>
        <Link href="/#contact" style={{ fontFamily: "var(--grot)", fontSize: 12, fontWeight: 300, letterSpacing: "0.05em", color: "var(--paper-35)" }}>Contact Us</Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        <div style={{ fontFamily: "var(--grot)", fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: "var(--paper-35)", marginBottom: 2 }}>Connect</div>
        <a href={site.follow?.href ?? "https://instagram.com"} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--grot)", fontSize: 12, fontWeight: 300, letterSpacing: "0.05em", color: "var(--paper-35)" }}>Instagram</a>
        <a href={site.email.href} style={{ fontFamily: "var(--grot)", fontSize: 12, fontWeight: 300, letterSpacing: "0.05em", color: "var(--paper-35)" }}>hello@basement.tv</a>
        <Link href="/careers" style={{ fontFamily: "var(--grot)", fontSize: 12, fontWeight: 300, letterSpacing: "0.05em", color: "var(--paper-35)" }}>Careers</Link>
      </div>
      <div
        className="f-bottom-111"
        style={{
          gridColumn: "1 / -1",
          borderTop: "1px solid var(--rule)",
          paddingTop: 20,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span style={{ fontFamily: "var(--grot)", fontSize: 10.5, fontWeight: 300, letterSpacing: "0.06em", color: "var(--paper-35)" }}>© 2025 Basement Studio</span>
        <div style={{ display: "flex", gap: 20 }}>
          <Link href="/privacy" style={{ fontFamily: "var(--grot)", fontSize: 10.5, fontWeight: 300, letterSpacing: "0.06em", color: "var(--paper-35)" }}>Privacy</Link>
          <Link href="/terms" style={{ fontFamily: "var(--grot)", fontSize: 10.5, fontWeight: 300, letterSpacing: "0.06em", color: "var(--paper-35)" }}>Terms &amp; Conditions</Link>
        </div>
      </div>
    </footer>
  );
}
