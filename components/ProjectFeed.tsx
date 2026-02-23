import type { Project } from "@/content/projects";
import { ProjectFeedItem } from "./ProjectFeedItem";

const feedStyles: React.CSSProperties = {
  paddingTop: "var(--space-12)",
  paddingBottom: "var(--space-12)",
};

interface ProjectFeedProps {
  projects: Project[];
}

export function ProjectFeed({ projects }: ProjectFeedProps) {
  return (
    <section style={feedStyles} aria-label="Project feed">
      {projects.map((project, i) => (
        <ProjectFeedItem key={project.slug} project={project} priority={i < 2} />
      ))}
    </section>
  );
}
