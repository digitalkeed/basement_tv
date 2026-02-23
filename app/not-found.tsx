import Link from "next/link";

const wrapStyles: React.CSSProperties = {
  minHeight: "60vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "var(--space-8)",
  textAlign: "center",
};

const titleStyles: React.CSSProperties = {
  fontSize: "var(--text-xl)",
  marginBottom: "var(--space-4)",
};

const linkStyles: React.CSSProperties = {
  fontSize: "var(--text-sm)",
  textDecoration: "underline",
};

export default function NotFound() {
  return (
    <div style={wrapStyles}>
      <h1 style={titleStyles}>Page not found</h1>
      <p style={{ color: "var(--text-muted)", marginBottom: "var(--space-6)" }}>
        The page you’re looking for doesn’t exist.
      </p>
      <Link href="/" style={linkStyles}>
        Back to home
      </Link>
    </div>
  );
}
