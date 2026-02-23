"use client";

import Link from "next/link";
import { VideoPlayer } from "./VideoPlayer";
import { Button } from "./Button";
import { Container } from "./Container";
import { home } from "@/content/home";
import type { Project } from "@/content/projects";

const heroSectionStyles: React.CSSProperties = {
  paddingTop: "var(--space-14)",
  paddingBottom: "var(--space-14)",
};

const gridStyles: React.CSSProperties = {
  display: "grid",
  gap: "var(--grid-gap)",
  gridTemplateColumns: "1fr",
  alignItems: "center",
};

const leftColStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "var(--space-6)",
};

const labelStyles: React.CSSProperties = {
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-wider)",
  textTransform: "uppercase",
  color: "var(--text-muted)",
};

const titleStyles: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(2.25rem, 5vw, var(--text-hero))",
  fontWeight: 600,
  letterSpacing: "var(--tracking-hero)",
  lineHeight: "var(--leading-tight)",
  color: "var(--text)",
};

const subcopyStyles: React.CSSProperties = {
  fontSize: "var(--text-lg)",
  lineHeight: "var(--leading-relaxed)",
  color: "var(--text-muted)",
  maxWidth: "28ch",
};

const ctaRowStyles: React.CSSProperties = {
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--space-4)",
  marginTop: "var(--space-2)",
};

const videoFrameStyles: React.CSSProperties = {
  position: "relative",
  borderRadius: "var(--radius-hero-media)",
  overflow: "hidden",
  background: "var(--bg-cell)",
};

const overlayStyles: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(to top, rgba(11,13,16,0.6) 0%, transparent 40%, transparent 60%, rgba(11,13,16,0.2) 100%)",
  pointerEvents: "none",
};

const microCardsWrapStyles: React.CSSProperties = {
  position: "absolute",
  bottom: "var(--space-6)",
  left: "var(--space-6)",
  right: "var(--space-6)",
  display: "flex",
  flexWrap: "wrap",
  gap: "var(--space-3)",
  pointerEvents: "none",
};

const microCardStyles: React.CSSProperties = {
  padding: "var(--space-2) var(--space-3)",
  background: "rgba(11,13,16,0.85)",
  border: "1px solid var(--border-subtle)",
  borderRadius: "var(--radius-button)",
  fontSize: "var(--text-xs)",
  letterSpacing: "var(--tracking-wide)",
  color: "var(--text)",
};

type HomeHeroProps = {
  featured?: Project | null;
};

export function HomeHero({ featured }: HomeHeroProps) {
  const { hero } = home;
  return (
    <header style={heroSectionStyles}>
      <Container>
        <div style={gridStyles} className="hero-grid">
          <div style={leftColStyles}>
            <span style={labelStyles}>{hero.label}</span>
            <h1 style={titleStyles}>{hero.title}</h1>
            <p style={subcopyStyles}>{hero.subcopy}</p>
            <div style={ctaRowStyles}>
              <Button href={hero.ctaPrimary.href} variant="primary">
                {hero.ctaPrimary.label}
              </Button>
              <Button href={hero.ctaSecondary.href} variant="secondary">
                {hero.ctaSecondary.label}
              </Button>
            </div>
          </div>
          <div style={videoFrameStyles}>
            {featured ? (
              <Link href={`/work/${featured.slug}`} aria-label={`View ${featured.title}`} style={{ display: "block" }}>
                <VideoPlayer
                  src={featured.videoSrc}
                  poster={featured.poster}
                  alt={`${featured.client} — ${featured.title}`}
                  priority
                  className="hero-video"
                />
              </Link>
            ) : (
              <div style={{ aspectRatio: "16/9", background: "var(--bg-cell)" }} />
            )}
            <div style={overlayStyles} aria-hidden />
            <div style={microCardsWrapStyles}>
              <span style={microCardStyles}>{hero.microCards.services}</span>
              <span style={microCardStyles}>{hero.microCards.locations}</span>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
