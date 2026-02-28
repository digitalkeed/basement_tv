import { BasementLogo } from "./BasementLogo";
import { Reveal } from "./Reveal";

function MapPinIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M20 10c0 5-8 13-8 13S4 15 4 10a8 8 0 0 1 16 0" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function IGIcon() {
  return (
    <svg width={14} height={14} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

const CONTACT_ITEMS = [
  { icon: <MapPinIcon />, text: "PRISTINA, KS", href: null as string | null },
  { icon: <MailIcon />, text: "INFO@BASEMENTSTUDIO.TV", href: "mailto:info@basementstudio.tv" },
  { icon: <PhoneIcon />, text: "+383 44 640 474", href: "tel:+38344640474" },
  { icon: <IGIcon />, text: "@BASEMENT.TV", href: "https://instagram.com/basement.tv" },
];

export function ContactStudio() {
  return (
    <section id="contact" className="w-full max-w-[100vw] pt-28 md:pt-32 pb-16 px-7 md:px-12 lg:px-16 text-center bg-black border-t border-white/[0.08] box-border">
      <div className="max-w-[1100px] mx-auto w-full">
        <Reveal>
          <h2
            className="text-[clamp(60px,13vw,180px)] tracking-[0.01em] leading-[0.9] mb-5 cursor-pointer transition-colors duration-300 text-white hover:text-[#e5ff00] font-display"
            style={{ fontFamily: "var(--font-bebas), system-ui, sans-serif" }}
          >
            CONTACT.
          </h2>
          <p
            className="text-[11px] tracking-[0.25em] text-[#444] uppercase mb-[72px]"
            style={{ fontFamily: "var(--font-space-mono), monospace" }}
          >
            Inquiries & Collaborations
          </p>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 justify-items-center">
            {CONTACT_ITEMS.map((item, i) =>
              item.href ? (
                <a
                  key={i}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-2.5 text-[11px] tracking-[0.15em] text-[#555] uppercase no-underline transition-colors duration-[0.25s] hover:text-[#e5ff00]"
                  style={{ fontFamily: "var(--font-space-mono), monospace" }}
                >
                  <span className="text-zinc-400 [&>svg]:inline-block">{item.icon}</span>
                  {item.text}
                </a>
              ) : (
                <span
                  key={i}
                  className="flex items-center gap-2.5 text-[11px] tracking-[0.15em] text-[#555] uppercase"
                  style={{ fontFamily: "var(--font-space-mono), monospace" }}
                >
                  <span className="text-zinc-400 [&>svg]:inline-block">{item.icon}</span>
                  {item.text}
                </span>
              )
            )}
          </div>
        </Reveal>

        <div className="border-t border-white/[0.07] pt-9 flex flex-col items-center gap-8">
          <div className="opacity-[0.04] pointer-events-none select-none w-[min(70vw,600px)] [@media(prefers-contrast:more)]:opacity-[0.08]">
            <BasementLogo className="w-full h-auto fill-white block" />
          </div>
          <p
            className="text-[10px] tracking-[0.18em] text-[#333] uppercase m-0"
            style={{ fontFamily: "var(--font-space-mono), monospace" }}
          >
            © {new Date().getFullYear()} BASEMENT STUDIO. FOUNDED 2025. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </section>
  );
}
