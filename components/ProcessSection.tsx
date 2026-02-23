import { Container } from "./Container";
import { home } from "@/content/home";

const wrapStyles: React.CSSProperties = {
  textAlign: "center",
  maxWidth: "42ch",
  margin: "0 auto",
};

const titleStyles: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--text-sm)",
  letterSpacing: "var(--tracking-wider)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
  marginBottom: "var(--space-4)",
};

const copyStyles: React.CSSProperties = {
  fontSize: "var(--text-base)",
  lineHeight: "var(--leading-relaxed)",
  color: "var(--text-muted)",
};

export function ProcessSection() {
  const { process } = home;
  return (
    <Container>
      <div style={wrapStyles}>
        <h2 style={titleStyles}>{process.title}</h2>
        <p style={copyStyles}>{process.copy}</p>
      </div>
    </Container>
  );
}
