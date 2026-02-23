"use client";

import Link from "next/link";
import type { Project } from "@/content/projects";
import { VideoPlayer } from "./VideoPlayer";

const blockStyles: React.CSSProperties = {
  display: "block",
  width: "100%",
  maxWidth: "100%",
  padding: "0 var(--space-8)",
  marginBottom: "var(--space-16)",
  transition: "opacity 0.2s ease",
};

const labelStyles: React.CSSProperties = {
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "var(--space-2)",
};

const titleStyles: React.CSSProperties = {
  fontSize: "var(--text-lg)",
  letterSpacing: "var(--tracking-tight)",
  marginBottom: "var(--space-4)",
  lineHeight: "var(--leading-tight)",
};

interface ProjectFeedItemProps {
  project: Project;
  priority?: boolean;
}

export function ProjectFeedItem({ project, priority = false }: ProjectFeedItemProps) {
  return (
    <Link
      href={`/work/${project.slug}`}
      style={blockStyles}
      className="feed-item"
      aria-label={`View project: ${project.title}`}
      onMouseEnter={(e) => {
        e.currentTarget.style.opacity = "var(--hover-opacity)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.opacity = "1";
      }}
    >
      <div style={labelStyles}>{project.client}</div>
      <div style={titleStyles}>{project.title}</div>
      <VideoPlayer
        src={project.videoSrc}
        poster={project.poster}
        alt={`${project.client} — ${project.title}`}
        priority={priority}
      />
    </Link>
  );
}
