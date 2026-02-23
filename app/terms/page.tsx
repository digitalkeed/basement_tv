const wrapStyles: React.CSSProperties = {
  maxWidth: "720px",
  margin: "0 auto",
  padding: "var(--space-24) var(--space-8)",
};

const titleStyles: React.CSSProperties = {
  fontSize: "var(--text-xl)",
  marginBottom: "var(--space-6)",
};

export default function TermsPage() {
  return (
    <div style={wrapStyles}>
      <h1 style={titleStyles}>Terms and Conditions</h1>
      <p style={{ color: "var(--text-muted)", lineHeight: 1.6 }}>
        Terms and conditions content goes here.
      </p>
    </div>
  );
}
