import { getProjectsByCategory } from "@/content/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata = { title: "Editors — Basement", description: "Editors. Editing and post-production." };

export default function EditorsPage() {
  const projects = getProjectsByCategory("editors");
  return (
    <section style={{ padding: "var(--space-12) var(--space-4)", maxWidth: "var(--page-max-width)", margin: "0 auto" }}>
      <SectionHeader>Editors</SectionHeader>
      <WorkGrid projects={projects} featuredIndex={-1} />
    </section>
  );
}
