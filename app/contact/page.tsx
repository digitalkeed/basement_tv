import { site } from "@/content/site";

export const metadata = { title: "Contact — Basement", description: "Get in touch. Editing and post-production." };

const wrapStyles: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto",
  padding: "var(--space-24) var(--space-8)",
};

const titleStyles: React.CSSProperties = {
  fontSize: "var(--text-xl)",
  letterSpacing: "var(--tracking-tight)",
  marginBottom: "var(--space-6)",
};

const textStyles: React.CSSProperties = {
  fontSize: "var(--text-base)",
  lineHeight: 1.6,
  color: "var(--text-muted)",
  marginBottom: "var(--space-8)",
};

export default function ContactPage() {
  return (
    <div style={wrapStyles}>
      <h1 style={titleStyles}>Contact</h1>
      <p style={textStyles}>
        Get in touch for collaborations and inquiries.
      </p>
      <p style={textStyles}>
        <a href={site.email.href}>{site.email.href.replace("mailto:", "")}</a>
      </p>
    </div>
  );
}
