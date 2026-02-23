"use client";

import Link from "next/link";
import Image from "next/image";
import { useCursorLabel } from "@/contexts/CursorContext";
import { Tag } from "./Tag";
import { Chip } from "./Chip";
import { VideoHover } from "./VideoHover";
import type { Project } from "@/content/projects";

const DEFAULT_SERVICE_TAGS = ["Edit", "Color", "Sound", "Motion"];

const cardStyles: React.CSSProperties = {
  display: "block",
  border: "1px solid var(--border-subtle)",
  backgroundColor: "var(--bg-cell)",
  borderRadius: "var(--radius-card)",
  overflow: "hidden",
  transition: "opacity var(--motion-duration)",
};

const mediaWrapStyles: React.CSSProperties = {
  position: "relative",
  aspectRatio: "16/9",
  minHeight: 0,
  overflow: "hidden",
  borderRadius: "var(--radius-card)",
};

const overlayStyles: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to top, rgba(11,13,16,0.7) 0%, transparent 50%)",
  opacity: 0,
  pointerEvents: "none",
};

const metaStyles: React.CSSProperties = {
  padding: "var(--space-4)",
  display: "flex",
  flexWrap: "wrap",
  alignItems: "baseline",
  gap: "var(--space-2)",
};

const clientStyles: React.CSSProperties = {
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
};

const titleStyles: React.CSSProperties = {
  fontSize: "var(--text-base)",
  letterSpacing: "var(--tracking-tight)",
  lineHeight: "var(--leading-tight)",
  padding: "0 var(--space-4) var(--space-4)",
};

const tagRowStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--space-2)",
  padding: "0 var(--space-4) var(--space-4)",
};

const categoryToLabel: Record<string, string> = {
  editors: "Editorial",
  "the-lookout": "Commercial",
  "music-videos": "Music Videos",
  films: "Films",
};

type WorkCardProps = {
  project: Project;
  /** Label shown on soft cursor hover: PLAY, VIEW, OPEN */
  cursorLabel?: "PLAY" | "VIEW" | "OPEN";
  /** Use video hover preview (desktop); otherwise static poster */
  useVideoHover?: boolean;
  /** First card in grid (featured) - larger aspect or same with span */
  featured?: boolean;
};

export function WorkCard({ project, cursorLabel = "VIEW", useVideoHover = true, featured = false }: WorkCardProps) {
  const setLabel = useCursorLabel();
  const tags = project.serviceTags ?? DEFAULT_SERVICE_TAGS;
  const typeLabel = categoryToLabel[project.category] ?? project.category;

  return (
    <Link
      href={`/work/${project.slug}`}
      className="work-card"
      style={cardStyles}
      onMouseEnter={() => setLabel(cursorLabel)}
      onMouseLeave={() => setLabel(null)}
      aria-label={`View ${project.title}, ${project.client}`}
    >
      <div className="work-card-media" style={mediaWrapStyles}>
        {useVideoHover ? (
          <VideoHover
            videoSrc={project.videoSrc}
            poster={project.poster}
            alt={`${project.client} — ${project.title}`}
            aspectRatio={featured ? "16/9" : "16/9"}
          />
        ) : (
          <div style={{ position: "relative", width: "100%", height: "100%" }}>
            <Image
              src={project.poster}
              alt={`${project.client} — ${project.title}`}
              fill
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              style={{ objectFit: "cover" }}
            />
          </div>
        )}
        <div className="work-card-overlay" style={overlayStyles} aria-hidden />
      </div>
      <div style={metaStyles}>
        <span style={clientStyles}>{project.client}</span>
        <Tag>{typeLabel}</Tag>
        {project.year != null && (
          <span style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{project.year}</span>
        )}
      </div>
      <div className="work-card-title" style={titleStyles}>
        {project.title}
      </div>
      <div style={tagRowStyles}>
        {tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </Link>
  );
}
