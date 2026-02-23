import type { ReactNode } from "react";

const tagStyles: React.CSSProperties = {
  display: "inline-block",
  padding: "var(--space-1) var(--space-2)",
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  border: "1px solid var(--border)",
  borderRadius: "var(--radius-sm)",
};

export function Tag({ children }: { children: ReactNode }) {
  return <span style={tagStyles}>{children}</span>;
}
