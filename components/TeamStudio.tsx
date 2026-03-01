"use client";

import { TEAM_MEMBERS } from "@/content/basement-studio";
import { Reveal } from "@/components/Reveal";
import { SafeZone } from "@/components/SafeZone";

export function TeamStudio() {
  return (
    <section id="team" className="section-layout w-full max-w-[100vw] bg-[#050505] border-t border-white/5 box-border">
      <SafeZone className="flex-1 flex flex-col">
        <Reveal>
          <div className="flex justify-between items-end gap-4 flex-wrap mb-10 md:mb-14">
            <h2
              className="text-[clamp(42px,6vw,72px)] tracking-[0.02em] leading-none m-0 font-display"
              style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
            >
              Roster.
            </h2>
            <span
              className="text-[11px] tracking-[0.2em] text-[#e5ff00] uppercase shrink-0"
              style={{ fontFamily: "var(--font-space-mono), monospace" }}
            >
              [ The Basement Team ]
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 border-t border-white/10 flex-1">
          {TEAM_MEMBERS.map((member, i) => (
            <Reveal key={i} delay={i * 40}>
              <div
                className="flex justify-between items-center py-6 border-b border-white/[0.08] transition-[border-color_0.3s] tm-row group"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#e5ff00";
                  const name = e.currentTarget.querySelector(".tm-name");
                  if (name) (name as HTMLElement).style.color = "#e5ff00";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
                  const name = e.currentTarget.querySelector(".tm-name");
                  if (name) (name as HTMLElement).style.color = "white";
                }}
              >
                <h4
                  className="tm-name text-[clamp(20px,2.5vw,26px)] tracking-[0.04em] m-0 text-white transition-colors duration-[0.25s] font-display min-w-0 truncate"
                  style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
                >
                  {member.name}
                </h4>
                <p
                  className="text-[10px] tracking-[0.14em] text-[#555] uppercase m-0 text-right max-w-[150px] shrink-0"
                  style={{ fontFamily: "var(--font-space-mono), monospace" }}
                >
                  {member.role}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </SafeZone>
    </section>
  );
}
