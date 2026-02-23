"use client";

import Link from "next/link";
import Image from "next/image";
import type { BentoItem } from "@/content/grid";
import { VideoPlayer } from "./VideoPlayer";

const cellBase: React.CSSProperties = {
  background: "var(--bg-cell)",
  border: "1px solid var(--border)",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  minHeight: 0,
  height: "100%",
};

const wrapLink = (href: string | undefined, children: React.ReactNode) =>
  href ? <Link href={href} style={{ ...cellBase, display: "block" }}>{children}</Link> : <div style={cellBase}>{children}</div>;

export function BentoCell({ item }: { item: BentoItem }) {
  const colSpan = item.colSpan ?? 1;
  const rowSpan = item.rowSpan ?? 1;
  const style: React.CSSProperties = {
    gridColumn: `span ${colSpan}`,
    gridRow: `span ${rowSpan}`,
  };

  const content = (() => {
    switch (item.type) {
      case "image": {
        const inner = (
          <>
            <div style={{ position: "relative", width: "100%", flex: 1, minHeight: "160px" }}>
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            {(item.title || item.caption) && (
              <div style={{ padding: "var(--space-4)", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>
                {item.title ?? item.caption}
              </div>
            )}
          </>
        );
        return wrapLink(item.href, inner);
      }
      case "video": {
        const inner = (
          <>
            <div style={{ flex: 1, minHeight: "180px" }}>
              <VideoPlayer
                src={item.videoSrc}
                poster={item.poster}
                alt={item.title ?? "Video"}
                priority={false}
              />
            </div>
            {(item.title || item.caption) && (
              <div style={{ padding: "var(--space-4)", fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>
                {item.title ?? item.caption}
              </div>
            )}
          </>
        );
        return wrapLink(item.href, inner);
      }
      case "text": {
        const titleColor = item.accent ? "var(--accent)" : undefined;
        const inner = (
          <div style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", gap: "var(--space-2)" }}>
            <div style={{ fontSize: "var(--text-lg)", letterSpacing: "var(--tracking-tight)", lineHeight: "var(--leading-tight)", color: titleColor }}>
              {item.title}
            </div>
            {item.subtitle && (
              <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)" }}>{item.subtitle}</div>
            )}
            {item.body && (
              <div style={{ fontSize: "var(--text-sm)", color: "var(--text-muted)", marginTop: "var(--space-2)" }}>{item.body}</div>
            )}
          </div>
        );
        return wrapLink(item.href, inner);
      }
      case "place": {
        const inner = (
          <div style={{ padding: "var(--space-6)", display: "flex", flexDirection: "column", justifyContent: "center", height: "100%" }}>
            <div style={{ fontSize: "var(--text-sm)", fontWeight: 500 }}>{item.name}</div>
            {item.location && (
              <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: "var(--space-1)" }}>{item.location}</div>
            )}
            {item.caption && (
              <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)", marginTop: "var(--space-2)" }}>{item.caption}</div>
            )}
          </div>
        );
        return wrapLink(item.href, inner);
      }
      case "photoshoot": {
        const inner = (
          <div style={{ padding: "var(--space-4)", height: "100%", display: "flex", flexDirection: "column", gap: "var(--space-2)" }}>
            <div style={{ fontSize: "var(--text-xs)", letterSpacing: "var(--tracking-wide)", textTransform: "uppercase", color: "var(--text-muted)" }}>
              {item.title}
            </div>
            <div style={{ flex: 1, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--space-2)", minHeight: 0 }}>
              {item.images.slice(0, 4).map((img, i) => (
                <div key={i} style={{ position: "relative", aspectRatio: "1" }}>
                  <Image src={img.src} alt={img.alt} fill sizes="150px" style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
            {item.caption && (
              <div style={{ fontSize: "var(--text-xs)", color: "var(--text-muted)" }}>{item.caption}</div>
            )}
          </div>
        );
        return wrapLink(item.href, inner);
      }
    }
  })();

  return <div style={style}>{content}</div>;
}
