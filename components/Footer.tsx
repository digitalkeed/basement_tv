import Link from "next/link";
import { site } from "@/content/site";

const footerStyles: React.CSSProperties = {
  marginTop: "var(--space-24)",
  padding: "var(--space-16) var(--space-8)",
  borderTop: "1px solid var(--border)",
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-wide)",
};

const navStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--space-8)",
  marginBottom: "var(--space-12)",
  textTransform: "uppercase",
};

const locationsStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
  gap: "var(--space-8)",
  marginBottom: "var(--space-8)",
  color: "var(--text-muted)",
  lineHeight: 1.5,
};

const bottomStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--space-6)",
  color: "var(--text-muted)",
};

export function Footer() {
  return (
    <footer style={footerStyles} role="contentinfo">
      <div style={navStyles}>
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </div>
      <div style={locationsStyles}>
        {site.locations.map((loc) => (
          <div key={loc.city}>
            <div style={{ fontWeight: 500, color: "var(--text)", marginBottom: "var(--space-2)" }}>
              {loc.city}
            </div>
            <div>{loc.address}</div>
            <div>{loc.phone}</div>
          </div>
        ))}
      </div>
      <div style={bottomStyles}>
        <span>{site.copyright}</span>
        {site.footerLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </footer>
  );
}
