import { Container } from "./Container";
import { Card } from "./Card";
import { Chip } from "./Chip";
import { capabilities } from "@/content/capabilities";

const cardInnerStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-4)",
};

const titleStyles: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--text-2xl)",
  fontWeight: 600,
  letterSpacing: "var(--tracking-tight)",
  color: "var(--text)",
};

const descStyles: React.CSSProperties = {
  fontSize: "var(--text-base)",
  lineHeight: "var(--leading-relaxed)",
  color: "var(--text-muted)",
};

const chipsWrapStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--space-2)",
};

export function CapabilitiesBento() {
  return (
    <Container>
      <div className="capabilities-bento" style={{ gap: "var(--grid-gap)" }}>
        {capabilities.map((cap) => (
          <div key={cap.id}>
            <Card style={{ height: "100%" }}>
              <div style={cardInnerStyles}>
                <h3 style={titleStyles}>{cap.title}</h3>
                <p style={descStyles}>{cap.description}</p>
                <div style={chipsWrapStyles}>
                  {cap.chips.map((label) => (
                    <Chip key={label}>{label}</Chip>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </Container>
  );
}
