"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const navStyle: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 500,
  height: "var(--nav-h)",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 var(--pad)",
  transition: "background 0.4s, border-color 0.4s",
  borderBottom: "1px solid transparent",
};

const logoWrapStyle: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  color: "var(--paper)",
  flexShrink: 0,
};

const linksStyle: React.CSSProperties = {
  display: "flex",
  gap: "36px",
  listStyle: "none",
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  margin: 0,
  padding: 0,
};

const linkStyle: React.CSSProperties = {
  fontFamily: "var(--grot)",
  fontSize: "11px",
  fontWeight: 400,
  letterSpacing: "0.15em",
  textTransform: "uppercase",
  color: "var(--paper-35)",
  transition: "color 0.2s",
  position: "relative",
};

const actionsStyle: React.CSSProperties = {
  display: "flex",
  gap: "18px",
  alignItems: "center",
  marginLeft: "auto",
};

const ctaStyle: React.CSSProperties = {
  fontFamily: "var(--grot)",
  fontSize: "10.5px",
  fontWeight: 500,
  letterSpacing: "0.13em",
  textTransform: "uppercase",
  color: "var(--ink)",
  background: "var(--lime)",
  padding: "8px 16px",
  borderRadius: "2px",
  transition: "background 0.18s",
};

export function Nav111() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = [
    { label: "Work", href: isHome ? "#work" : "/#work", path: "/" },
    { label: "About Us", href: isHome ? "#about" : "/#about", path: "/" },
    { label: "Contact Us", href: isHome ? "#contact" : "/#contact", path: "/" },
  ];

  return (
    <nav
      id="nav"
      style={{
        ...navStyle,
        ...(scrolled
          ? {
              background: "rgba(8,8,8,0.9)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              borderBottomColor: "var(--rule)",
            }
          : {}),
      }}
      aria-label="Main navigation"
    >
      <Link href="/" style={logoWrapStyle} aria-label="Basement home">
        <Image src="/logo-white.svg" alt="Basement" width={140} height={27} style={{ height: "auto", width: "auto", maxHeight: "28px" }} priority />
      </Link>
      <ul className="nav-links-111" style={linksStyle}>
        {navItems.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              style={linkStyle}
              className="nav-link-underline"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <div style={actionsStyle}>
        <a
          href={site.follow?.href ?? "https://instagram.com"}
          target="_blank"
          rel="noopener noreferrer"
          style={linkStyle}
          aria-label="Follow on Instagram"
        >
          Follow
        </a>
        <a href={site.cta.href} style={ctaStyle} className="nav-cta" aria-label="Get in touch">
          Get in touch
        </a>
      </div>
      <style jsx>{`
        .nav-link-underline:hover {
          color: var(--paper);
        }
        .nav-link-underline::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 1px;
          background: var(--lime);
          transition: width 0.35s var(--ease);
        }
        .nav-link-underline:hover::after {
          width: 100%;
        }
        .nav-cta:hover {
          background: #d6f740 !important;
        }
      `}</style>
    </nav>
  );
}
