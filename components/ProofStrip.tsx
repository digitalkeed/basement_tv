import { Container } from "./Container";
import { Chip } from "./Chip";
import { home } from "@/content/home";

const stripStyles: React.CSSProperties = {
  paddingTop: "var(--space-8)",
  paddingBottom: "var(--space-8)",
  borderBottom: "1px solid var(--border-subtle)",
};

const innerStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  justifyContent: "space-between",
  gap: "var(--space-6)",
};

const lineStyles: React.CSSProperties = {
  fontSize: "var(--text-base)",
  fontWeight: 500,
  letterSpacing: "var(--tracking-tight)",
  color: "var(--text)",
};

const chipsStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--space-3)",
};

export function ProofStrip() {
  const { proofStrip } = home;
  return (
    <div style={stripStyles}>
      <Container>
        <div style={innerStyles}>
          <p style={lineStyles}>{proofStrip.line}</p>
          <div style={chipsStyles}>
            {proofStrip.stats.map((stat) => (
              <Chip key={stat}>{stat}</Chip>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
