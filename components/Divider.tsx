const dividerStyles: React.CSSProperties = {
  height: 1,
  margin: 0,
  border: "none",
  background: "var(--border-subtle)",
};

export function Divider({ style, ...rest }: React.ComponentPropsWithoutRef<"hr">) {
  return <hr style={{ ...dividerStyles, ...style }} {...rest} />;
}
