# Basement — Style Guide (Video Studio Edition)

Single source of truth for design tokens. All components use CSS custom properties; no hardcoded values.

**Keywords:** cinematic, boutique, editorial, minimal, high-contrast, premium, modern grid, motion-forward.

**Avoid:** pure #000 everywhere, thin unreadable gray text, random font weights, huge empty blocks with no structure.

---

## Container

- `--container-max: 1240px`
- `--container-padding: 24px` (desktop)
- `--container-padding-mobile: 16px`

---

## Grid

- 12 columns; `--grid-gap: 24px`
- Use `.layout-grid.layout-grid--12` for 12-col layout

---

## Spacing scale

**4, 8, 12, 16, 24, 32, 40, 56, 72, 96** (px) → `--space-1` through `--space-24`. No arbitrary values.

---

## Typography (Sora + Inter)

- **Fonts:** Sora (display/headings) + Inter (UI/body). Loaded via `next/font/google`; CSS vars `--font-sora`, `--font-inter`.
- **H1:** 56–64px (`--text-hero`), weight 600–700, tracking `-0.04em` (`--tracking-hero`)
- **H2:** 32–40px (`--text-3xl` / `--text-4xl`), weight 600, tracking `-0.02em` (`--tracking-tight`)
- **Body:** 16–18px (`--text-base` / `--text-lg`), weight 400, line-height 1.6 (`--leading-relaxed`)
- **Nav:** 14–16px (`--text-sm` / `--text-base`), weight 500 (never bold)

---

## Radius

- Cards: `--radius-card: 16px`
- Hero media: `--radius-hero-media: 24px`
- Buttons: `--radius-button: 12px`

---

## Colors

- **Background:** Near-black `--bg: #0B0D10` (not pure #000)
- **Text:** `--text`, `--text-muted` (rgba white 60%)
- **Accent:** `--accent: #E6FF00`
- **Border:** `--border-subtle: rgba(255,255,255,0.1)` for dividers and subtle borders

---

## Motion

- Duration: `--motion-duration: 0.22s` (200–240ms); ease: `--motion-ease`
- When `prefers-reduced-motion: reduce`: `--motion-duration: 0s`

---

## Interaction

- Hover: opacity or underline; no heavy scale/color flip.
- Focus: `2px solid var(--accent)`, outline-offset 2px.
