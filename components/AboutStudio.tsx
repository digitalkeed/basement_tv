import { Reveal } from "@/components/Reveal";
import { SafeZone } from "@/components/SafeZone";

export function AboutStudio() {
  return (
    <section id="about" className="section-layout w-full max-w-[100vw] bg-[#0a0a0a] box-border">
      <SafeZone className="flex-1 flex flex-col justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 min-w-0 items-start">

          {/* Left column — display type */}
          <div className="lg:col-span-5">
            <Reveal>
              <p
                className="text-[11px] tracking-[0.2em] text-[#e5ff00] uppercase mb-6"
                style={{ fontFamily: "var(--font-space-mono), monospace" }}
              >
                EST. 2025 · PRISTINA, KOSOVO
              </p>
              <h3
                className="text-[clamp(56px,8vw,120px)] tracking-[0.01em] leading-[0.9] m-0 uppercase font-display"
                style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
              >
                PRECISION.<br />
                <span className="text-[#333]">CONTROL.</span>
              </h3>
            </Reveal>
          </div>

          {/* Right column — body copy */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            <Reveal delay={100}>
              <div className="flex flex-col gap-5">
                <p className="text-[clamp(16px,1.8vw,20px)] text-[#b0b0b0] leading-[1.7] font-light">
                  Basement Studio is a communication and video production company founded in 2025 and based in Pristina. The team brings over 15 years of professional experience across music, commercial, and film production.
                </p>
                <p className="text-[clamp(14px,1.4vw,16px)] text-[#555] leading-[1.8] font-light">
                  We develop and produce music videos, commercials, branded campaigns, and narrative projects through structured production systems and controlled execution.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="border-t border-white/10 pt-8 flex flex-col gap-5">
                <h4
                  className="text-[11px] tracking-[0.2em] text-[#e5ff00] uppercase"
                  style={{ fontFamily: "var(--font-space-mono), monospace" }}
                >
                  / Our Standard
                </h4>
                <p
                  className="text-[clamp(24px,3vw,38px)] tracking-[0.02em] leading-[1.1] text-white font-display"
                  style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
                >
                  &quot;Production begins with direction. Equipment follows vision.&quot;
                </p>
                <p className="text-[clamp(14px,1.4vw,16px)] text-[#555] leading-[1.8] font-light">
                  Our workflow is structured, disciplined, and aligned with international production standards. We collaborate with brands, agencies, and artists who value detail, atmosphere, and long-term visual identity.
                </p>
              </div>
            </Reveal>
          </div>

        </div>
      </SafeZone>
    </section>
  );
}
