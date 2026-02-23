"use client";

import Link from "next/link";
import { site } from "@/content/site";

const navStyles: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "var(--space-4) var(--space-8)",
  backgroundColor: "var(--bg-pure)",
  borderBottom: "1px solid var(--border)",
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
};

const leftStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "var(--space-8)",
};

const rightStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "var(--space-8)",
};

export function Navbar() {
  return (
    <nav style={navStyles} aria-label="Main navigation">
      <div style={leftStyles}>
        <Link href="/" style={{ fontWeight: 500 }} aria-label="Basement home">
          Basement
        </Link>
        {site.nav.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <a
          href={site.externalLink.href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {site.externalLink.label}
        </a>
      </div>
      <div style={rightStyles}>
        <a href={site.follow.href} target="_blank" rel="noopener noreferrer">
          {site.follow.label}
        </a>
        <a href={site.email.href}>{site.email.label}</a>
      </div>
    </nav>
  );
}
