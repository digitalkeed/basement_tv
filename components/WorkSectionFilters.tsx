"use client";

import type { ProjectCategory } from "@/content/projects";

const FILTER_OPTIONS: { value: ProjectCategory | ""; label: string }[] = [
  { value: "", label: "All" },
  { value: "music-videos", label: "Music Videos" },
  { value: "films", label: "Films" },
  { value: "the-lookout", label: "Commercial" },
  { value: "editors", label: "Editorial" },
];

const wrapStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--space-3)",
  marginBottom: "var(--space-6)",
};

const buttonBase: React.CSSProperties = {
  padding: "var(--space-2) var(--space-4)",
  fontSize: "var(--text-sm)",
  fontWeight: 500,
  letterSpacing: "var(--tracking-wide)",
  background: "transparent",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-button)",
  color: "var(--text-muted)",
  cursor: "pointer",
  transition: "color var(--motion-duration), border-color var(--motion-duration), background var(--motion-duration)",
};

type WorkSectionFiltersProps = {
  value: ProjectCategory | "";
  onChange: (value: ProjectCategory | "") => void;
};

export function WorkSectionFilters({ value, onChange }: WorkSectionFiltersProps) {
  return (
    <div style={wrapStyles} role="group" aria-label="Filter by type">
      {FILTER_OPTIONS.map((opt) => {
        const isActive = value === opt.value;
        return (
          <button
            key={opt.value || "all"}
            type="button"
            style={{
              ...buttonBase,
              ...(isActive
                ? { color: "var(--accent)", borderColor: "var(--accent)", background: "rgba(230,255,0,0.08)" }
                : {}),
            }}
            onClick={() => onChange(opt.value)}
            aria-pressed={isActive}
          >
            {opt.label}
          </button>
        );
      })}
    </div>
  );
}
