import Image from "next/image";
import { FEATURED_WORK } from "@/content/basement-studio";
import { Reveal } from "@/components/Reveal";

function PlayIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width={18} height={18} className={className} style={{ marginLeft: "2px" }}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  );
}

export function WorkStudio() {
  return (
    <section id="work" className="w-full max-w-[100vw] bg-[#050505] pt-28 md:pt-32 pb-20 md:pb-24 box-border overflow-hidden">
      <Reveal>
        <div className="px-7 md:px-12 lg:px-16 pb-16 md:pb-20 flex flex-wrap justify-between items-end gap-4">
          <h2
            className="text-[clamp(42px,6vw,72px)] tracking-[0.02em] leading-none m-0 font-display"
            style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
          >
            Work.
          </h2>
          <span
            className="text-[11px] tracking-[0.2em] text-[#e5ff00] uppercase"
            style={{ fontFamily: "var(--font-space-mono), monospace" }}
          >
            [ Curated Visuals ]
          </span>
        </div>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[100vw] border-t border-white/5">
        {FEATURED_WORK.map((project, idx) => (
          <a
            key={project.id}
            href={project.videoLink}
            target="_blank"
            rel="noreferrer"
            className={`work-card group relative aspect-[4/3] overflow-hidden block border-b border-white/5 ${
              idx % 2 === 0 ? "md:border-r border-white/5" : ""
            } text-white no-underline`}
          >
            <Image
              src={project.image}
              alt={project.title}
              width={1280}
              height={720}
              className="w-full h-full object-cover scale-[1.12] grayscale-[30%] transition-[transform_1.2s_cubic-bezier(0.25,0.46,0.45,0.94),opacity_0.6s,filter_0.6s group-hover:scale-[1.08] group-hover:opacity-25 group-hover:grayscale-0"
            />
            <div
              className="absolute inset-0 z-[5] pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, transparent 35%, rgba(0,0,0,0.7) 100%)",
              }}
            />
            <div className="absolute inset-0 p-5 md:p-12 flex flex-col justify-between z-10">
              <div className="flex justify-between items-start">
                <span
                  className="text-[11px] tracking-[0.18em] uppercase bg-black/60 px-3.5 py-1.5 border border-white/10 rounded-full"
                  style={{ fontFamily: "var(--font-space-mono), monospace" }}
                >
                  {project.year}
                </span>
                <div className="play-btn w-11 h-11 rounded-full bg-[#e5ff00] text-black flex items-center justify-center opacity-0 translate-y-2 transition-[opacity_0.4s,transform_0.4s]">
                  <PlayIcon />
                </div>
              </div>
              <h3
                className="text-[clamp(32px,5vw,64px)] tracking-[0.02em] leading-none m-0 font-display"
                style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
              >
                {project.title}
              </h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
