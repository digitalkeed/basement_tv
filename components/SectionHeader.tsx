type SectionHeaderProps = {
  children: React.ReactNode;
  /** Use tracked-out uppercase (Radioaktive-style) */
  tracked?: boolean;
};

const baseStyles: React.CSSProperties = {
  fontSize: "var(--text-sm)",
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "var(--space-6)",
};

export function SectionHeader({ children, tracked = true }: SectionHeaderProps) {
  return (
    <h2 style={baseStyles} className={tracked ? "section-header--tracked" : ""}>
      {children}
    </h2>
  );
}
