"use client";

import { useState, useEffect } from "react";
import { BasementLogo } from "./BasementLogo";

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M18 6 6 18" /><path d="m6 6 12 12" />
    </svg>
  );
}

const MENU_ITEMS = ["Work", "Services", "Team", "About", "Contact"];

export function NavStudio() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-300 px-6 py-6 flex justify-between items-center ${
          isScrolled && !isMenuOpen
            ? "backdrop-blur-xl py-4 border-b border-white/5 bg-[#0a0a0a]/90"
            : "bg-transparent"
        }`}
      >
        <div
          className={`transition-all duration-500 text-white ${
            !isScrolled ? "opacity-0 pointer-events-none" : "opacity-100 pointer-events-auto"
          }`}
        >
          <BasementLogo className="h-4 md:h-6 w-auto fill-current" />
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`p-2 hover:opacity-70 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e5ff00] focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505] ${
            !isMenuOpen ? "mix-blend-difference text-white" : "text-white"
          }`}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <XIcon /> : <MenuIcon />}
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[49] ${isMenuOpen ? "block" : "hidden"}`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden
      />

      <div
        className={`fixed top-0 right-0 w-[min(82vw,460px)] h-[100dvh] bg-[rgba(8,8,8,0.75)] backdrop-blur-[30px] border-l border-white/[0.08] z-[55] transition-transform duration-[0.65s] ease-[cubic-bezier(0.76,0,0.24,1)] flex flex-col px-12 overflow-y-auto ${
          isMenuOpen ? "translate-x-0 menu-open" : "translate-x-full"
        }`}
      >
        <div className="flex-1 flex flex-col justify-center pt-24 pb-12 min-h-max gap-5">
          {MENU_ITEMS.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsMenuOpen(false)}
              className="menu-item font-display text-[clamp(48px,8vw,72px)] tracking-[0.02em] text-white flex items-baseline gap-4 leading-none hover:text-[#e5ff00] transition-colors w-fit"
              style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
            >
              {item}
              <span
                className="text-[13px] text-[#e5ff00] tracking-[0.1em] opacity-70"
                style={{ fontFamily: "var(--font-space-mono), monospace" }}
              >
                0{index + 1}
              </span>
            </a>
          ))}
        </div>
        <div className="pb-12 flex flex-col gap-1.5 text-[11px] uppercase tracking-[0.15em] text-[#888] shrink-0" style={{ fontFamily: "var(--font-space-mono), monospace" }}>
          <a href="mailto:info@basementstudio.tv" className="hover:text-[#e5ff00] transition-colors">
            info@basementstudio.tv
          </a>
          <p>Pristina, Kosovo</p>
        </div>
      </div>
    </>
  );
}
