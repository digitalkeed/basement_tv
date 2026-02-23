import { getProjects } from "@/content/projects";
import { parseWorkFilters } from "@/lib/urlState";
import type { ProjectCategory } from "@/content/projects";
import type { Project } from "@/content/projects";
import { SectionHeader } from "@/components/SectionHeader";
import { WorkGrid } from "@/components/WorkGrid";
import { WorkFilters } from "@/components/WorkFilters";

export const metadata = {
  title: "Work — Basement",
  description: "All work. Editing and post-production.",
};

function filterProjects(projects: Project[], type: ProjectCategory | "", year: string, search: string): Project[] {
  let out = projects;
  if (type) out = out.filter((p) => p.category === type);
  if (year) out = out.filter((p) => p.year != null && String(p.year) === year);
  if (search) {
    const q = search.toLowerCase();
    out = out.filter(
      (p) =>
        p.client.toLowerCase().includes(q) ||
        p.title.toLowerCase().includes(q) ||
        (p.credits?.toLowerCase().includes(q) ?? false)
    );
  }
  return out;
}

function getUniqueYears(projects: Project[]): number[] {
  const set = new Set(projects.map((p) => p.year).filter((y): y is number => y != null));
  return Array.from(set).sort((a, b) => b - a);
}

export default async function WorkPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const toStr = (v: string | string[] | undefined) => (Array.isArray(v) ? v[0] : v) ?? "";
  const searchParamsObj = new URLSearchParams();
  if (params.type) searchParamsObj.set("type", toStr(params.type));
  if (params.year) searchParamsObj.set("year", toStr(params.year));
  if (params.q) searchParamsObj.set("q", toStr(params.q));
  const filters = parseWorkFilters(searchParamsObj);
  const allProjects = getProjects();
  const projects = filterProjects(allProjects, filters.type, filters.year, filters.search);
  const years = getUniqueYears(allProjects);

  return (
    <section style={{ padding: "var(--space-12) var(--space-4)", maxWidth: "var(--page-max-width)", margin: "0 auto" }}>
      <SectionHeader>All Work</SectionHeader>
      <WorkFilters years={years} />
      <WorkGrid projects={projects} featuredIndex={-1} useVideoHover />
    </section>
  );
}
