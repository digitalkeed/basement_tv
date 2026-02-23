# Basement — UI Components

All UI components live in `/components`. Pages only compose these; no page-specific layout components or one-offs unless listed here.

---

## Layout & chrome

| Component    | Purpose |
|-------------|---------|
| **Navbar**  | Sticky top nav: logo, main links (Work, Editors, Films, Music Videos, Contact), one external link, Follow + Email. Minimal (Cartel-like). Active state from route. Uses design tokens only. |
| **Footer**  | Nav links, 3 location blocks (city, address, phone), copyright, Privacy / Terms / Careers. Tokens only. |

---

## Work & content

| Component     | Purpose |
|---------------|---------|
| **WorkCard**  | One work item: media (image or video preview), client, title, type tag, year. Clean props; no hardcoded spacing. Used in WorkGrid and on home “Selected Work”. |
| **WorkGrid**  | Responsive grid of WorkCards. 2–3 columns from grid tokens; gap from spacing scale. Composable; no layout logic in pages. |
| **VideoHover**| Wraps hover-to-preview behavior: on desktop hover, silent autoplay preview (mp4/webm) fades in. Respects reduced motion and touch (poster only). Used inside WorkCard or standalone. |
| **Tag**       | Category/type pill (e.g. Ads, Film, MV). Used on WorkCards and in filter UI. Small type, uppercase, optional border. |
| **SectionHeader** | Section title; optional tracked-out uppercase (Radioaktive-style). Uses typography tokens. |

---

## Cursor & transitions

| Component        | Purpose |
|------------------|---------|
| **SoftCursor**   | Small follower dot + optional label on work card hover (“PLAY”, “VIEW”, “OPEN”). Disabled on touch and when `prefers-reduced-motion: reduce`. Never blocks pointer events or clicks. |
| **PageTransition** | Optional wrapper for route change: shows page title with spaced lettering 250–400ms, then fades. Respects reduced motion. |

---

## Other

| Component   | Purpose |
|------------|---------|
| **VideoPlayer** | Autoplay muted loop for inline video (feed/detail). Poster fallback; respects reduced motion (poster only). Can be used inside VideoHover or standalone. |

---

## Not in scope (do not add as new components)

- One-off “home hero” or “about block” that is not reusable. Use SectionHeader + standard layout + content instead.
- Generic “Card” or “Box” unless it becomes the canonical WorkCard or a documented primitive.
