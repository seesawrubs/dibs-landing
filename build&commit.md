https://github.com/seesawrubs/dibs-landing

her is the link for the repo, you will intialize this repo and then append each and every single build and commit in bunches and the edtails of the each build and commimt in this file *keep it limited ot big builds ata a time)

---

## Build Log

### Build 1 — Initial landing page (2026-06-10)

**What was built:**
- Scaffolded Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 + Framer Motion project from scratch.
- Full landing page per `about.md` spec, with all 10 sections:
  - Sticky nav (scroll-aware, mobile menu, "Book a Strategy Call" CTA)
  - Hero with staggered load animation, dual CTAs, trust line, and a scrolling discipline ticker
  - Problem section (dark navy band with struck-through "fragmented vendor" chips → "One studio")
  - Solution section: 5 pillars in a hairline-bordered grid + "Everything, integrated" card
  - Services: 3 offer cards (Launch Package, Management Retainer — featured, Modular), each with book-a-call CTA
  - Proof: Go Get Going + Live SOP production project cards + "client work coming soon" banner
  - Process: sticky-headline 5-step numbered timeline
  - Who This Is For: 4 editorial audience blocks
  - FAQ: 6-question animated accordion
  - Final CTA: full-bleed navy section with gold button
  - Footer with smooth-scroll links, copyright, "Built with intention in India"
- Lead capture modal (Name + Email + "What are you building?") wired to every CTA via React context, with success state.
- Design system: deep navy `#0A1628` ink, warm paper `#FAF8F3` background, gold accent, Satoshi (Fontshare) + Instrument Serif italic accents, grain overlay, scroll-triggered Framer Motion reveals, reduced-motion support.
- SEO: meta title/description, Open Graph tags, semantic sections; fully static prerender.

**Build verification:** `next build` ✓ compiled, type-checked, prerendered static. First Load JS: 151 kB.

**Commit:** `5e97e98` Initial build — full Digital Business Studio landing page (pushed to `main`).

### Build 2 — Cal.com booking embeds + Proof project updates (2026-06-10)

**What was built:**
- Added Cal.com popup embeds via the official `@calcom/embed-react` package. Each service card's "Book a call" button now opens its own booking flow in an on-page popup (light theme, navy brand color, month view):
  - Launch Package → `cal.com/godigitalstudio/dbs-launch`
  - Management Retainer (Run & Grow) → `cal.com/godigitalstudio/dbs-runandgrow`
  - Custom / Modular (À la carte) → `cal.com/godigitalstudio/dbs-custom`
- General CTAs (nav, hero, final CTA) still open the lead-capture modal.
- Proof section updated with current projects: **402bazaar.com** (production marketplace) and **pookiepartner** (dating/chat app, under development).

**Build verification:** `next build` ✓ compiled, type-checked, prerendered static. First Load JS: 152 kB.

**Commit:** `a69ae15` Cal.com embeds on service cards + Proof project refresh (pushed to `main`).

### Build 3 — Strategy-call CTAs wired to Cal.com, lead modal removed (2026-06-10)

**What was built:**
- All general "Book a Strategy Call" CTAs (nav desktop + mobile menu, hero, final CTA section) now open the `cal.com/godigitalstudio/dbs-strategy` booking popup.
- Removed the non-functional lead-capture modal — it stored/sent nothing; Cal.com now collects name + email through real bookings. (Recoverable from git history if a waitlist form is wanted later.)
- New `components/CalInit.tsx` initializes all four Cal.com namespaces (`dbs-strategy`, `dbs-launch`, `dbs-runandgrow`, `dbs-custom`) in one place; Services.tsx no longer self-initializes.

**Build verification:** `next build` ✓ compiled, type-checked, prerendered static. First Load JS: 151 kB.

**Commit:** Wire strategy-call CTAs to Cal.com; remove dead lead modal (pushed to `main`). 