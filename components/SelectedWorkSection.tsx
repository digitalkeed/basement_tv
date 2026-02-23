"use client";

import { useState, useMemo } from "react";
import type { Project } from "@/content/projects";
import type { ProjectCategory } from "@/content/projects";
import { SectionHeader } from "./SectionHeader";
import { WorkGrid } from "./WorkGrid";
import { WorkSectionFilters } from "./WorkSectionFilters";
import { Container } from "./Container";

type SelectedWorkSectionProps = {
  projects: Project[];
};

export function SelectedWorkSection({ projects }: SelectedWorkSectionProps) {
  const [category, setCategory] = useState<ProjectCategory | "">("");
  const filtered = useMemo(() => {
    if (!category) return projects;
    return projects.filter((p) => p.category === category);
  }, [projects, category]);

  return (
    <Container>
      <SectionHeader>Selected Work</SectionHeader>
      <WorkSectionFilters value={category} onChange={setCategory} />
      <WorkGrid projects={filtered} featuredIndex={0} useVideoHover />
    </Container>
  );
}
