import { Container } from "./Container";
import { Card } from "./Card";
import type { About } from "@/content/about";

const sectionStyles: React.CSSProperties = {
  paddingTop: "var(--space-14)",
  paddingBottom: "var(--space-14)",
  borderTop: "1px solid var(--border-subtle)",
};

const gridStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "1fr",
  gap: "var(--grid-gap)",
  alignItems: "start",
};

const leftStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-6)",
};

const headingStyles: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--text-2xl)",
  fontWeight: 600,
  letterSpacing: "var(--tracking-tight)",
  color: "var(--text)",
};

const paragraphStyles: React.CSSProperties = {
  fontSize: "var(--text-base)",
  lineHeight: "var(--leading-relaxed)",
  color: "var(--text-muted)",
  maxWidth: "42ch",
};

const cardsColStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-6)",
};

const cardTitleStyles: React.CSSProperties = {
  fontSize: "var(--text-sm)",
  fontWeight: 500,
  letterSpacing: "var(--tracking-wide)",
  textTransform: "uppercase",
  color: "var(--text)",
  marginBottom: "var(--space-2)",
};

const cardCopyStyles: React.CSSProperties = {
  fontSize: "var(--text-base)",
  lineHeight: "var(--leading-relaxed)",
  color: "var(--text-muted)",
};

type HomeAboutProps = {
  paragraph: string;
  valueCards: About["valueCards"];
};

export function HomeAbout({ paragraph, valueCards }: HomeAboutProps) {
  return (
    <section id="about" style={sectionStyles} aria-labelledby="about-heading">
      <Container>
        <div className="about-grid" style={gridStyles}>
          <div style={leftStyles}>
            <h2 id="about-heading" style={headingStyles}>
              Who we are
            </h2>
            <p style={paragraphStyles}>{paragraph}</p>
          </div>
          <div style={cardsColStyles}>
            {valueCards.map((card) => (
              <Card key={card.title}>
                <h3 style={cardTitleStyles}>{card.title}</h3>
                <p style={cardCopyStyles}>{card.copy}</p>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
