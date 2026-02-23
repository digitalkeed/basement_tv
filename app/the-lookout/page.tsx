import { getProjectsByCategory } from "@/content/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { WorkGrid } from "@/components/WorkGrid";

export const metadata = { title: "The Lookout — Basement", description: "The Lookout. Editing and post-production." };

export default function TheLookoutPage() {
  const projects = getProjectsByCategory("the-lookout");
  return (
    <section style={{ padding: "var(--space-12) var(--space-4)", maxWidth: "var(--page-max-width)", margin: "0 auto" }}>
      <SectionHeader>The Lookout</SectionHeader>
      <WorkGrid projects={projects} featuredIndex={-1} />
    </section>
  );
}
