import { getProjectsByCategory } from "@/content/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata = { title: "Music Videos — Basement", description: "Music videos. Editing and post-production." };

export default function MusicVideosPage() {
  const projects = getProjectsByCategory("music-videos");
  return (
    <section style={{ padding: "var(--space-12) var(--space-4)", maxWidth: "var(--page-max-width)", margin: "0 auto" }}>
      <SectionHeader>Music Videos</SectionHeader>
      <WorkGrid projects={projects} featuredIndex={-1} />
    </section>
  );
}
