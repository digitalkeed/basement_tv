import { getProjectsByCategory } from "@/content/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata = { title: "Films — Basement", description: "Films. Editing and post-production." };

export default function FilmsPage() {
  const projects = getProjectsByCategory("films");
  return (
    <section style={{ padding: "var(--space-12) var(--space-4)", maxWidth: "var(--page-max-width)", margin: "0 auto" }}>
      <SectionHeader>Films</SectionHeader>
      <WorkGrid projects={projects} featuredIndex={-1} />
    </section>
  );
}
