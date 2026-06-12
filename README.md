# Digital Business Studio — Landing Page

Single-page marketing site for Digital Business Studio ("We build and run your complete digital business"), aimed at creators, coaches, and digital founders. All CTAs drive toward booking a strategy call via Cal.com.

The original product/content brief lives in [about.md](about.md). Note that the color direction there (navy/gold on white) is superseded by the current black + neon green theme described below.

## Stack

- Next.js 15 (App Router, static output) + TypeScript
- Tailwind CSS v4 (theme tokens defined in CSS, no config file)
- Framer Motion for scroll reveals and micro-animations
- Cal.com embed for booking (`components/CalInit.tsx`)

## Running it

```bash
npm install
npm run dev    # local dev on http://localhost:3000
npm run build  # production build
```

## Page structure

`app/page.tsx` composes the sections in order, one component each in `components/`:

Nav → Hero → Problem → Solution → Services → Proof → Process → WhoFor → Faq → FinalCta → Footer

Notable behaviors:

- **Problem section** — the crossed-out vendor roles (Developer, Designer, …) flip on scroll into neon chips naming the service that replaces each one, ending on a "One operating partner" badge (`components/Problem.tsx`).
- **Reveal** (`components/Reveal.tsx`) is the shared scroll-into-view fade/rise wrapper; all sections use it with the easing curve `[0.22, 1, 0.36, 1]`.
- Booking buttons carry `data-cal-*` attributes; namespaces/links per offering are defined inline in `Services.tsx` and `CalInit.tsx`.

## Design system (black + neon green)

Everything color-related is centralized in `app/globals.css` under `@theme`. The token names predate the dark theme, so their meanings are:

| Token | Value | Role |
|---|---|---|
| `paper` | `#050807` | Page/surface background (near-black) |
| `paper-deep` | `#0a120d` | Raised/alternate dark surface |
| `ink` | `#e8f9ee` | Primary text (mint-white) |
| `ink-soft` / `ink-mute` | greens-greys | Secondary / muted text |
| `gold` | `#00e87b` | Primary neon green accent + CTA fill |
| `gold-bright` | `#66ffb0` | Brighter neon (hovers, highlights) |
| `clay` | `#9dffd2` | Pale mint for small uppercase labels |
| `line` / `line-dark` | neon-alpha | Hairline borders and rules |

Conventions that keep the theme coherent:

- Dark surfaces pair with `text-ink*`; neon fills (`bg-gold`, `bg-gold-bright`) always pair with `text-paper` (black text on neon).
- Primary CTAs are neon pills with a green glow shadow, brightening on hover.
- Utility classes in `globals.css`: `panel-paper` / `panel-dark` (dark glass panels with neon borders), `ambient-grid` / `ambient-grid-dark` (faint neon grid overlays), `neon-glow` (text glow), `grain` (film grain overlay on `<body>`).

To tune the look, the two highest-impact dials are `--color-gold` (neon hue/intensity) and the glow shadows on CTA buttons (search for `rgba(0,232,123` in components).
