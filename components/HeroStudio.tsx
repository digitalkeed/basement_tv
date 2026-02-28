import { BasementLogo } from "./BasementLogo";

export function HeroStudio() {
  return (
    <section className="relative h-[100dvh] w-full max-w-[100vw] overflow-hidden flex items-center justify-center bg-black box-border">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <iframe
          src="https://player.vimeo.com/video/1167902633?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&dnt=1"
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 object-cover opacity-90"
          frameBorder={0}
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          title="Basement Studio Hero Reel"
        />
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center text-center px-6 w-full h-full cursor-default">
        <p
          className="text-[10px] tracking-[0.55em] uppercase text-[#e5ff00] opacity-50 mb-8 transition-opacity duration-500"
          style={{ fontFamily: "var(--font-space-mono), monospace" }}
        >
          Communication & Video Production
        </p>
        <div className="hero-logo w-[clamp(280px,55vw,720px)] mx-auto transition-filter duration-500 cursor-default">
          <span className="sr-only">Basement Studio</span>
          <BasementLogo className="w-full h-auto fill-white block" />
        </div>
      </div>

      <div
        className="absolute bottom-9 left-1/2 -translate-x-1/2 z-20 text-[10px] tracking-[0.25em] uppercase text-white/30"
        style={{ fontFamily: "var(--font-space-mono), monospace" }}
      >
        Scroll
      </div>
    </section>
  );
}
