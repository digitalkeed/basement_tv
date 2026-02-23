import { notFound } from "next/navigation";
import Link from "next/link";
import { getProjectBySlug, getAdjacentProjects } from "@/content/projects";
import { VideoPlayer } from "@/components/VideoPlayer";

const heroStyles: React.CSSProperties = {
  padding: "var(--space-16) var(--space-8)",
  marginBottom: "var(--space-8)",
};

const clientStyles: React.CSSProperties = {
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "var(--space-2)",
};

const titleStyles: React.CSSProperties = {
  fontSize: "var(--text-xl)",
  letterSpacing: "var(--tracking-tight)",
  marginBottom: "var(--space-2)",
  lineHeight: "var(--leading-tight)",
};

const creditsStyles: React.CSSProperties = {
  fontSize: "var(--text-sm)",
  color: "var(--text-muted)",
};

const videoWrapStyles: React.CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto var(--space-16)",
  padding: "0 var(--space-8)",
};

const navStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  padding: "var(--space-8)",
  borderTop: "1px solid var(--border)",
  fontSize: "var(--text-sm)",
  letterSpacing: "var(--tracking-wide)",
};

export async function generateStaticParams() {
  const { getProjects } = await import("@/content/projects");
  return getProjects().map((p) => ({ slug: p.slug }));
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const { prev, next } = getAdjacentProjects(slug);

  return (
    <article>
      <header style={heroStyles}>
        <div style={clientStyles}>{project.client}</div>
        <h1 style={titleStyles}>{project.title}</h1>
        {(project.credits || project.year) && (
          <div style={creditsStyles}>
            {project.credits}
            {project.year && ` · ${project.year}`}
          </div>
        )}
      </header>
      <div style={videoWrapStyles}>
        <VideoPlayer
          src={project.videoSrc}
          poster={project.poster}
          alt={`${project.client} — ${project.title}`}
          priority
        />
      </div>
      <nav style={navStyles} aria-label="Project navigation">
        <span>
          {prev ? (
            <Link href={`/work/${prev.slug}`}>← Previous</Link>
          ) : (
            <span style={{ color: "var(--text-muted)" }}>← Previous</span>
          )}
        </span>
        <span>
          {next ? (
            <Link href={`/work/${next.slug}`}>Next →</Link>
          ) : (
            <span style={{ color: "var(--text-muted)" }}>Next →</span>
          )}
        </span>
      </nav>
    </article>
  );
}
