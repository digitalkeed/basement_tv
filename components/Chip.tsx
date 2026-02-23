const chipStyles: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  padding: "var(--space-1) var(--space-3)",
  fontSize: "var(--text-xs)",
  fontWeight: 500,
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-button)",
};

export function Chip({ children, style, ...rest }: React.ComponentPropsWithoutRef<"span">) {
  return (
    <span style={{ ...chipStyles, ...style }} {...rest}>
      {children}
    </span>
  );
}
