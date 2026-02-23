type SectionProps = React.ComponentPropsWithoutRef<"section"> & {
  /** Optional id for anchor links */
  id?: string;
};

const sectionStyles: React.CSSProperties = {
  paddingTop: "var(--space-14)",
  paddingBottom: "var(--space-14)",
};

export function Section({ children, id, style, ...rest }: SectionProps) {
  return (
    <section id={id} style={{ ...sectionStyles, ...style }} {...rest}>
      {children}
    </section>
  );
}
