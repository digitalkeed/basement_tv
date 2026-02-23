"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { buildWorkFiltersUrl, parseWorkFilters, type WorkFilters } from "@/lib/urlState";
import type { ProjectCategory } from "@/content/projects";
import { Tag } from "./Tag";

const formStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "var(--space-4)",
  marginBottom: "var(--space-8)",
  fontSize: "var(--text-sm)",
};

const labelStyles: React.CSSProperties = {
  color: "var(--text-muted)",
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
};

const inputStyles: React.CSSProperties = {
  background: "var(--bg-cell)",
  border: "1px solid var(--border)",
  color: "var(--text)",
  padding: "var(--space-2) var(--space-4)",
  fontSize: "var(--text-sm)",
};

const CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: "editors", label: "Editors" },
  { value: "the-lookout", label: "The Lookout" },
  { value: "music-videos", label: "Music Videos" },
  { value: "films", label: "Films" },
];

type WorkFiltersProps = {
  years: number[];
};

export function WorkFilters({ years }: WorkFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const filters = parseWorkFilters(searchParams);

  const update = useCallback(
    (next: Partial<WorkFilters>) => {
      const url = buildWorkFiltersUrl({ ...filters, ...next });
      router.push(url);
    },
    [router, filters]
  );

  return (
    <form style={formStyles} onSubmit={(e) => e.preventDefault()} role="search" aria-label="Filter work">
      <span style={labelStyles}>Type</span>
      <select
        style={inputStyles}
        value={filters.type}
        onChange={(e) => update({ type: e.target.value as ProjectCategory | "" })}
        aria-label="Filter by type"
      >
        <option value="">All</option>
        {CATEGORIES.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>
      <span style={labelStyles}>Year</span>
      <select
        style={inputStyles}
        value={filters.year}
        onChange={(e) => update({ year: e.target.value })}
        aria-label="Filter by year"
      >
        <option value="">All</option>
        {years.map((y) => (
          <option key={y} value={String(y)}>
            {y}
          </option>
        ))}
      </select>
      <span style={labelStyles}>Search</span>
      <input
        type="search"
        style={inputStyles}
        placeholder="Client, title…"
        value={filters.search}
        onChange={(e) => update({ search: e.target.value.trim() })}
        aria-label="Search work"
      />
    </form>
  );
}
