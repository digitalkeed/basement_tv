import Link from "next/link";

const baseStyles: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "var(--space-2) var(--space-6)",
  fontSize: "var(--text-sm)",
  fontWeight: 500,
  borderRadius: "var(--radius-button)",
  border: "1px solid transparent",
  cursor: "pointer",
  transition: "opacity var(--motion-duration) var(--motion-ease), background var(--motion-duration), color var(--motion-duration)",
};

const primaryStyles: React.CSSProperties = {
  ...baseStyles,
  background: "var(--accent)",
  color: "var(--bg-pure)",
};

const secondaryStyles: React.CSSProperties = {
  ...baseStyles,
  background: "transparent",
  color: "var(--text)",
  borderColor: "var(--border-subtle)",
};

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  variant?: "primary" | "secondary";
  href?: string;
};

export function Button({ variant = "primary", href, children, style, ...rest }: ButtonProps) {
  const buttonStyle = variant === "primary" ? primaryStyles : secondaryStyles;
  if (href) {
    return (
      <Link href={href} style={{ ...buttonStyle, ...style }}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" style={{ ...buttonStyle, ...style }} {...rest}>
      {children}
    </button>
  );
}
