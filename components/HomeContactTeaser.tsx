import Link from "next/link";
import { Container } from "./Container";
import { Card } from "./Card";
import { Button } from "./Button";

const sectionStyles: React.CSSProperties = {
  paddingTop: "var(--space-14)",
  paddingBottom: "var(--space-14)",
  borderTop: "1px solid var(--border-subtle)",
};

const gridStyles: React.CSSProperties = {
  display: "grid",
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

const ctaCopyStyles: React.CSSProperties = {
  fontSize: "var(--text-base)",
  lineHeight: "var(--leading-relaxed)",
  color: "var(--text-muted)",
};

const microcopyStyles: React.CSSProperties = {
  fontSize: "var(--text-sm)",
  color: "var(--text-muted)",
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

const cardMetaStyles: React.CSSProperties = {
  fontSize: "var(--text-sm)",
  lineHeight: 1.5,
  color: "var(--text-muted)",
};

type Location = { city: string; address: string; phone: string };

type HomeContactTeaserProps = {
  locations: Location[];
  emailHref: string;
};

export function HomeContactTeaser({ locations, emailHref }: HomeContactTeaserProps) {
  const emailDisplay = emailHref.replace("mailto:", "");
  return (
    <section id="contact" style={sectionStyles} aria-labelledby="contact-heading">
      <Container>
        <div className="contact-grid" style={gridStyles}>
          <div style={leftStyles}>
            <h2 id="contact-heading" style={headingStyles}>
              Get in touch
            </h2>
            <p style={ctaCopyStyles}>
              Have a project in mind? Send us an email and we&apos;ll get back to you.
            </p>
            <Button href={emailHref} variant="primary">
              {emailDisplay}
            </Button>
            <p style={microcopyStyles}>Replies within 24–48h.</p>
          </div>
          <div style={cardsColStyles}>
            {locations.map((loc) => (
              <Card key={loc.city}>
                <h3 style={cardTitleStyles}>{loc.city}</h3>
                <div style={cardMetaStyles}>
                  <div>{loc.address}</div>
                  <div>{loc.phone}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
