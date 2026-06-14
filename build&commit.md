https://github.com/seesawrubs/dibs-landing

her is the link for the repo, you will intialize this repo and then append each and every single build and commit in bunches and the edtails of the each build and commimt in this file *keep it limited ot big builds ata a time)

---

## Build Log

### Build 5 — Mobile navbar section navigation fix (2026-06-14)

**What was fixed:**

- Mobile top navbar links ("The Studio", "Approach", "Work", "Partners") now correctly scroll the page to the target sections. Previously they did nothing on mobile/touch devices while working perfectly on desktop.
- Also made the logo link close the mobile menu cleanly when tapped (for #top).

**Root cause:**
The mobile menu rendered its links inside the conditionally-mounted framer-motion panel (`{menuOpen && <motion.div>}`). Each link had `onClick={() => setMenuOpen(false)}`. Calling state synchronously during the click started the exit animation (height collapse) on the fixed header container at the exact same time the browser tried to process the `href="#id"` fragment navigation. Mobile browsers (iOS Safari, Android) commonly suppress or cancel native hash scrolling in this situation. Desktop nav items had no `onClick` at all, so they were unaffected.

**Fix:**
- Mobile section links + logo now do `setTimeout(() => setMenuOpen(false), 0)` so the browser's default anchor behavior + `html { scroll-behavior: smooth }` can run first.
- Increased `section { scroll-margin-top }` from 6.5rem → 7.5rem in globals.css for safer clearance under the fixed header (especially right after the mobile menu begins closing).
- The Cal "Begin a conversation" button in the menu still closes immediately (no href navigation involved).

**Build verification:** `next build` ✓ compiled, type-checked, prerendered static. First Load JS: 150 kB.

**Commit:** `bc21fa5` fix(nav): mobile hamburger links now properly scroll to sections (pushed to `main`).

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

**Commit:** `2b0840d` Wire strategy-call CTAs to Cal.com; remove dead lead modal (pushed to `main`).

### Build 4 — Proof section cleanup (2026-06-10)

**What was built:**
- Removed the "Client work coming soon" banner from the Proof section — the section now showcases two client projects (402bazaar.com, pookiepartner), so the placeholder no longer applies.

**Build verification:** `next build` ✓ compiled, type-checked, prerendered static. First Load JS: 151 kB.

**Commit:** Remove "client work coming soon" banner from Proof (pushed to `main`). 