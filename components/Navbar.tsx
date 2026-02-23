"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";

const navStyles: React.CSSProperties = {
  position: "sticky",
  top: 0,
  zIndex: 50,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "var(--space-4) var(--container-padding-mobile)",
  background: "rgba(11, 13, 16, 0.85)",
  backdropFilter: "blur(12px)",
  WebkitBackdropFilter: "blur(12px)",
  borderBottom: "1px solid var(--border-subtle)",
  fontFamily: "var(--font-sans)",
  fontSize: "var(--text-sm)",
  fontWeight: 500,
};

const leftStyles: React.CSSProperties = { flex: 1, display: "flex", justifyContent: "flex-start" };
const centerStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "var(--space-8)",
};
const rightStyles: React.CSSProperties = { flex: 1, display: "flex", justifyContent: "flex-end" };

const linkStyles: React.CSSProperties = {
  color: "var(--text)",
  letterSpacing: "var(--tracking-wide)",
  transition: "opacity var(--motion-duration)",
};

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav style={navStyles} aria-label="Main navigation">
      <div style={leftStyles}>
        <Link href="/" aria-label="Basement home" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/logo.svg"
            alt="Basement"
            width={120}
            height={23}
            style={{ height: "auto", width: "auto", maxHeight: "24px" }}
            priority
          />
        </Link>
      </div>
      <div style={centerStyles}>
        {site.nav.map((item) => {
          const href = isHome && item.anchor ? item.anchor : item.href;
          const isActive = pathname === item.href || (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <Link
              key={item.href}
              href={href}
              aria-current={isActive ? "page" : undefined}
              style={{
                ...linkStyles,
                ...(isActive ? { borderBottom: "1px solid var(--accent)", paddingBottom: 2 } : {}),
              }}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
      <div style={rightStyles}>
        <a href={site.cta.href} style={{ ...linkStyles, fontSize: "var(--text-sm)" }} aria-label="Get in touch">
          {site.cta.label}
        </a>
      </div>
    </nav>
  );
}
