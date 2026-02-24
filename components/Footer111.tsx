import Link from "next/link";
import Image from "next/image";
import { site } from "@/content/site";

export function Footer111() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--rule)",
        padding: "28px 32px 60px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <div>
        <div style={{ color: "var(--acid)", marginBottom: "8px" }}>
          <Image src="/logo.svg" alt="Basement" width={160} height={31} style={{ height: "auto", width: "auto", maxHeight: "40px" }} />
        </div>
        <div
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "var(--dim)",
          }}
        >
          Editing & Post-Production
        </div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Link href="/#work" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dim)" }}>
          Work
        </Link>
        <Link href="/#about" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dim)" }}>
          About Us
        </Link>
        <Link href="/#contact" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dim)" }}>
          Contact Us
        </Link>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dim)" }}>
          Instagram
        </a>
        <a href={site.email.href} style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dim)" }}>
          hello@basement.tv
        </a>
        <Link href="/careers" style={{ fontSize: "11px", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dim)" }}>
          Careers
        </Link>
      </div>
      <div
        style={{
          width: "100%",
          borderTop: "1px solid var(--rule)",
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <span style={{ fontSize: "11px", color: "rgba(245,242,235,0.25)", letterSpacing: "0.06em" }}>
          © 2025 Basement Studio
        </span>
        <div style={{ display: "flex", gap: "20px" }}>
          <Link href="/privacy" style={{ fontSize: "11px", color: "rgba(245,242,235,0.25)", letterSpacing: "0.06em" }}>
            Privacy
          </Link>
          <Link href="/terms" style={{ fontSize: "11px", color: "rgba(245,242,235,0.25)", letterSpacing: "0.06em" }}>
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
