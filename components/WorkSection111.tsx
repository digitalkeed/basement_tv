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

  const stats = [
    { num: "12", suffix: "+", desc: "Years in Post" },
    { num: "4", suffix: "K", desc: "Broadcast Delivery" },
    { num: "3", suffix: "", desc: "Studios · Nationwide" },
    { num: "100", suffix: "%", desc: "Senior Creatives" },
  ];

  return (
    <section
      id="work"
      style={{
        paddingTop: "var(--nav-h)",
        paddingBottom: "30px",
      }}
    >
      {/* Hero reel */}
      <Link
        href={projects[0] ? `/work/${projects[0].slug}` : "#work"}
        className="reveal reel-hero-111"
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16/6.8",
          overflow: "hidden",
          background: "#0c0c0c",
          display: "block",
        }}
      >
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
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", zIndex: 1 }}
              aria-hidden
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(8,8,8,.12) 0%, transparent 28%, transparent 52%, rgba(8,8,8,.78) 100%)",
                zIndex: 2,
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 4,
                width: 66,
                height: 66,
                border: "1px solid var(--paper-35)",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              className="play-btn-111"
              aria-hidden
            >
              <svg width={14} height={16} viewBox="0 0 14 16" fill="none" style={{ marginLeft: 4 }}>
                <polygon points="0,0 14,8 0,16" fill="rgba(238,236,229,.88)" />
              </svg>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: 3,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                padding: "26px var(--pad)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--sf)",
                  fontSize: "clamp(32px, 5vw, 72px)",
                  fontWeight: 600,
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                  color: "var(--paper)",
                }}
              >
                2025 Showreel
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4, paddingBottom: 4 }}>
                <span style={{ fontFamily: "var(--grot)", fontSize: 10, fontWeight: 400, letterSpacing: "0.17em", textTransform: "uppercase", color: "var(--paper-60)" }}>
                  Basement Studio
                </span>
                <span style={{ fontFamily: "var(--grot)", fontSize: 10, fontWeight: 400, letterSpacing: "0.17em", textTransform: "uppercase", color: "var(--paper-60)" }}>
                  LA · NY · Austin
                </span>
              </div>
            </div>
          </>
        )}
      </Link>

      {/* Stats bar */}
      <div className="reveal stats-strip-111" data-d="1" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid var(--rule)", borderBottom: "1px solid var(--rule)" }}>
        {stats.map((s) => (
          <div
            key={s.desc}
            className="stat"
            style={{
              padding: "20px var(--pad)",
              borderRight: "1px solid var(--rule)",
              display: "flex",
              alignItems: "baseline",
              gap: 7,
            }}
          >
            <span style={{ fontFamily: "var(--sf)", fontSize: 21, fontWeight: 600, letterSpacing: "-0.025em", color: "var(--paper)", lineHeight: 1 }}>
              {s.num}
              {s.suffix && <sup style={{ fontSize: 11, color: "var(--lime)", verticalAlign: "super", letterSpacing: 0 }}>{s.suffix}</sup>}
            </span>
            <span style={{ fontFamily: "var(--grot)", fontSize: 10, fontWeight: 400, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--paper-35)" }}>
              {s.desc}
            </span>
          </div>
        ))}
      </div>

      {/* Filter bar */}
      <div
        className="reveal filters-111"
        data-d="2"
        style={{
          display: "flex",
          padding: "0 var(--pad)",
          borderBottom: "1px solid var(--rule)",
          overflowX: "auto",
          scrollbarWidth: "none",
        }}
      >
        {FILTERS.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={filter === f.id ? "fb on" : "fb"}
            style={{
              fontFamily: "var(--grot)",
              fontSize: 10.5,
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: filter === f.id ? "var(--paper)" : "var(--paper-35)",
              padding: "15px 16px",
              marginBottom: -1,
              border: "none",
              borderBottom: `2px solid ${filter === f.id ? "var(--lime)" : "transparent"}`,
              background: "none",
              whiteSpace: "nowrap",
              cursor: "pointer",
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
          gap: "var(--gap)",
          background: "#131313",
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
        background: "#0a0a0a",
        aspectRatio: wide ? "16/6.8" : "16/9",
        display: "block",
        gridColumn: wide ? "1 / -1" : undefined,
        isolation: "isolate",
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
          padding: "22px 26px",
          background: "linear-gradient(transparent 30%, rgba(8,8,8,0.88))",
          opacity: hover ? 1 : 0,
          transform: hover ? "translateY(0)" : "translateY(8px)",
          transition: "opacity 0.32s, transform 0.38s var(--ease)",
        }}
      >
        <div style={{ fontFamily: "var(--grot)", fontSize: 9.5, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 5 }}>
          {project.client}
        </div>
        <div style={{ fontFamily: "var(--sf)", fontSize: wide ? "clamp(20px, 2.6vw, 36px)" : "clamp(14px, 1.55vw, 20px)", fontWeight: 500, letterSpacing: "-0.02em", lineHeight: 1.15, color: "var(--paper)", marginBottom: 11 }}>
          {project.title}
        </div>
        <div style={{ display: "flex", gap: 5, flexWrap: "wrap" }}>
          {[...tags, typeLabel, project.year].filter(Boolean).map((t) => (
            <span
              key={String(t)}
              style={{
                fontFamily: "var(--grot)",
                fontSize: 9,
                fontWeight: 400,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border: "1px solid var(--paper-18)",
                padding: "3px 8px",
                borderRadius: 99,
                color: "var(--paper-60)",
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
          transition: transform 0.9s var(--ease), filter 0.5s;
          filter: brightness(0.88) saturate(0.78);
        }
        .work-item-111:hover .work-item-img {
          transform: scale(1.04);
          filter: brightness(0.5) saturate(0.6);
        }
        .work-item-img :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      `}</style>
    </Link>
  );
}
