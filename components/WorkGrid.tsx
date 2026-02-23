"use client";

import type { Project } from "@/content/projects";
import { WorkCard } from "./WorkCard";

const gridStyles: React.CSSProperties = {
  display: "grid",
  gap: "var(--grid-gutter)",
  gridTemplateColumns: "repeat(2, 1fr)",
};

type WorkGridProps = {
  projects: Project[];
  /** Index of the featured item that spans 2 columns (default 0) */
  featuredIndex?: number;
  /** Use VideoHover on cards (desktop hover preview) */
  useVideoHover?: boolean;
};

export function WorkGrid({ projects, featuredIndex = 0, useVideoHover = true }: WorkGridProps) {
  return (
    <div
      style={gridStyles}
      className="work-grid"
      role="list"
      aria-label="Work"
    >
      {projects.map((project, i) => (
        <div
          key={project.slug}
          role="listitem"
          style={i === featuredIndex ? { gridColumn: "1 / -1" } : undefined}
        >
          <WorkCard
            project={project}
            useVideoHover={useVideoHover}
            featured={i === featuredIndex}
          />
        </div>
      ))}
    </div>
  );
}
