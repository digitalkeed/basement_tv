"use client";

import { SERVICES_LIST } from "@/content/basement-studio";
import { Reveal } from "@/components/Reveal";

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} width={22} height={22}>
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}

export function ServicesStudio() {
  return (
    <section id="services" className="w-full max-w-[100vw] pt-28 md:pt-32 pb-24 md:pb-28 px-7 md:px-12 lg:px-16 bg-[#0a0a0a] box-border">
      <div className="max-w-[1280px] mx-auto w-full">
        <Reveal>
          <div className="mb-16 md:mb-20">
            <h2
              className="text-[clamp(42px,6vw,72px)] tracking-[0.02em] leading-none m-0 mb-1.5 font-display"
              style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
            >
              Capabilities.
            </h2>
            <p
              className="text-[11px] tracking-[0.2em] text-[#e5ff00] uppercase m-0"
              style={{ fontFamily: "var(--font-space-mono), monospace" }}
            >
              Production Systems
            </p>
          </div>
        </Reveal>

        <div className="border-t border-white/10">
          {SERVICES_LIST.map((service, i) => (
            <Reveal key={service.id} delay={i * 60}>
              <div
                className="service-row flex justify-between items-center py-8 md:py-10 border-b border-white/10 cursor-pointer group"
                onMouseEnter={(e) => {
                  const title = e.currentTarget.querySelector("h3");
                  const arrow = e.currentTarget.querySelector(".svc-arrow");
                  if (title) (title as HTMLElement).style.color = "#e5ff00";
                  if (arrow) (arrow as HTMLElement).style.opacity = "1";
                }}
                onMouseLeave={(e) => {
                  const title = e.currentTarget.querySelector("h3");
                  const arrow = e.currentTarget.querySelector(".svc-arrow");
                  if (title) (title as HTMLElement).style.color = "white";
                  if (arrow) (arrow as HTMLElement).style.opacity = "0";
                }}
              >
                <div className="flex items-center gap-5 md:gap-12">
                  <span
                    className="text-[13px] text-[#e5ff00] w-7 flex-shrink-0"
                    style={{ fontFamily: "var(--font-space-mono), monospace" }}
                  >
                    {service.id}
                  </span>
                  <h3
                    className="text-[clamp(28px,4.5vw,60px)] tracking-[0.02em] leading-none m-0 text-white transition-colors duration-[0.25s] line-clamp-2 font-display"
                    style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
                  >
                    {service.title}
                  </h3>
                </div>
                <span className="svc-arrow text-[#e5ff00] flex-shrink-0 opacity-0 transition-opacity duration-[0.25s]">
                  <ArrowUpRight />
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
