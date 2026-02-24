"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { getProjects } from "@/content/projects";
import type { Project } from "@/content/projects";
import type { ProjectCategory } from "@/content/projects";

const CAT_TO_FILTER: Record<ProjectCategory, string> = {
  editors: "editorial",
  "the-lookout": "commercial",
  "music-videos": "music",
  films: "film",
};

const FILTERS = [
  { id: "all", label: "All" },
  { id: "commercial", label: "Commercial" },
  { id: "music", label: "Music Videos" },
  { id: "film", label: "Films" },
  { id: "editorial", label: "Editorial" },
] as const;

export function WorkSection111() {
  const projects = getProjects();
  const [filter, setFilter] = useState("all");
  const filtered =
    filter === "all"
      ? projects
      : projects.filter((p) => CAT_TO_FILTER[p.category] === filter);

  return (
    <section
      id="work"
      style={{
        paddingTop: "var(--nav-h)",
        paddingBottom: "30px",
      }}
    >
      {/* Hero reel */}
      <div className="reveal reel-hero-111" style={{ position: "relative", width: "100%", aspectRatio: "16/7", overflow: "hidden", background: "#0a0a0a" }}>
        {projects[0] && (
          <>
            <Image
              src={projects[0].poster}
              alt="Showreel"
              fill
              sizes="100vw"
              style={{ objectFit: "cover" }}
              priority
            />
            <video
              muted
              loop
              playsInline
              autoPlay
              src={projects[0].videoSrc}
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
              aria-hidden
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, transparent 35%, rgba(5,5,5,0.6) 100%)",
                zIndex: 2,
              }}
            />
            <Link
              href={`/work/${projects[0].slug}`}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 3,
                width: 70,
                height: 70,
                border: "1px solid rgba(245,242,235,0.35)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              aria-label="Play showreel"
            >
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" style={{ marginLeft: 4 }}>
                <polygon points="6,3 20,12 6,21" fill="currentColor" />
              </svg>
            </Link>
            <div style={{ position: "absolute", bottom: 32, left: 32, zIndex: 3, display: "flex", alignItems: "flex-end", gap: 24 }}>
              <div style={{ fontFamily: "var(--font-sf)", fontSize: "clamp(40px, 5vw, 72px)", letterSpacing: "0.04em", lineHeight: 1 }}>
                2025 Showreel
              </div>
              <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--dim)", paddingBottom: 6 }}>
                Basement Studio · LA / NY / Austin
              </div>
            </div>
          </>
        )}
      </div>

      {/* Filter bar */}
      <div
        className="reveal"
        style={{
          display: "flex",
          alignItems: "center",
          borderTop: "1px solid var(--rule)",
          borderBottom: "1px solid var(--rule)",
          padding: "0 32px",
          overflowX: "auto",
        }}
      >
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            style={{
              fontSize: 11,
              fontWeight: 400,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: filter === f.id ? "var(--white)" : "var(--dim)",
              padding: "16px 20px",
              border: "none",
              background: "none",
              borderBottom: `2px solid ${filter === f.id ? "var(--acid)" : "transparent"}`,
              marginBottom: -1,
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Work grid */}
      <div
        className="work-grid-111"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 2,
          background: "#111",
          paddingBottom: 2,
        }}
      >
        {filtered.map((project, i) => (
          <WorkItem111 key={project.slug} project={project} wide={i === 0} />
        ))}
      </div>
    </section>
  );
}

function WorkItem111({ project, wide }: { project: Project; wide?: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hover, setHover] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
  }, []);

  useEffect(() => {
    if (!videoRef.current || reducedMotion) return;
    if (hover) videoRef.current.play().catch(() => {});
    else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [hover, reducedMotion]);

  const tags = project.serviceTags ?? ["Edit", "Color", "Sound", "Motion"];
  const typeLabel = CAT_TO_FILTER[project.category];

  return (
    <Link
      href={`/work/${project.slug}`}
      className={`reveal work-item-111 ${wide ? "wide" : ""}`}
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#090909",
        aspectRatio: wide ? "16/6" : "16/9",
        display: "block",
        gridColumn: wide ? "1 / -1" : undefined,
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label={`View ${project.title}`}
    >
      <div className="work-item-img">
        <Image
          src={project.poster}
          alt=""
          fill
          sizes={wide ? "100vw" : "50vw"}
          style={{ objectFit: "cover" }}
        />
      </div>
      <video
        ref={videoRef}
        className="work-item-preview"
        muted
        loop
        playsInline
        src={project.videoSrc}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: hover && !reducedMotion ? 1 : 0,
          transition: "opacity 0.5s",
          zIndex: 1,
        }}
      />
      <div
        className="work-item-meta"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "24px 28px",
          background: "linear-gradient(transparent 40%, rgba(5,5,5,0.88))",
          opacity: hover ? 1 : 0,
          transform: hover ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.35s, transform 0.35s var(--easing)",
        }}
      >
        <div style={{ fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--acid)", marginBottom: 5 }}>
          {project.client}
        </div>
        <div style={{ fontFamily: "var(--font-sf)", fontSize: wide ? "clamp(24px, 3vw, 42px)" : "clamp(16px, 1.8vw, 22px)", fontWeight: 400, lineHeight: 1.2, marginBottom: 10 }}>
          {project.title}
        </div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {[...tags, typeLabel, project.year].filter(Boolean).map((t) => (
            <span
              key={String(t)}
              style={{
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                border: "1px solid rgba(245,242,235,0.25)",
                padding: "3px 8px",
                borderRadius: 20,
                color: "rgba(245,242,235,0.7)",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <style jsx>{`
        .work-item-img {
          position: absolute;
          inset: 0;
          transition: transform 0.8s var(--easing), filter 0.4s;
          filter: brightness(0.88) saturate(0.85);
        }
        .work-item-111:hover .work-item-img {
          transform: scale(1.04);
          filter: brightness(0.7) saturate(0.7);
        }
        .work-item-img :global(img) {
          object-fit: cover;
        }
      `}</style>
    </Link>
  );
}
