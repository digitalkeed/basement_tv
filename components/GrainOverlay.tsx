/**
 * Optional site-wide film grain overlay. Respects prefers-reduced-motion (hidden when set).
 * Opacity kept low (3–6%) so black space feels designed without distraction.
 */
export function GrainOverlay() {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
      <filter id="grain">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch" />
      </filter>
      <rect width="100%" height="100%" filter="url(#grain)" opacity="0.4" />
    </svg>
  `.trim().replace(/\s+/g, " ");
  const dataUri = `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;

  return (
    <div
      className="grain-overlay"
      aria-hidden
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        backgroundImage: dataUri,
        backgroundRepeat: "repeat",
        zIndex: 1,
      }}
    />
  );
}
