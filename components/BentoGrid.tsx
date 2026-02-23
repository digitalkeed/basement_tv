"use client";

import type { BentoItem } from "@/content/grid";
import { BentoCell } from "./BentoCell";

const gridStyles: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gridAutoRows: "minmax(200px, auto)",
  gap: "var(--gap)",
  padding: "var(--space-8)",
  maxWidth: "1400px",
  margin: "0 auto",
};

const responsiveGrid = `
  .bento-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(160px, auto);
  }
  @media (min-width: 768px) {
    .bento-grid {
      grid-template-columns: repeat(4, 1fr);
      grid-auto-rows: minmax(200px, auto);
    }
  }
`;

export function BentoGrid({ items }: { items: BentoItem[] }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: responsiveGrid }} />
      <section className="bento-grid" style={gridStyles} aria-label="Featured work and content">
        {items.map((item) => (
          <BentoCell key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}
