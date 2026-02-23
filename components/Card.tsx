type CardProps = React.ComponentPropsWithoutRef<"div"> & {
  /** Optional padding override */
  padding?: string;
};

const cardStyles: React.CSSProperties = {
  background: "var(--bg-cell)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-card)",
  padding: "var(--space-6)",
};

export function Card({ children, style, padding, ...rest }: CardProps) {
  return (
    <div style={{ ...cardStyles, ...(padding ? { padding } : {}), ...style }} {...rest}>
      {children}
    </div>
  );
}
