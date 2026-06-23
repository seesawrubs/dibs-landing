"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CAL_STRATEGY } from "./CalInit";
import Container from "./Container";

const links = [
  { label: "The Studio", href: "#the-studio" },
  { label: "Engage", href: "#engage" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#work" },
  { label: "Partners", href: "#who-for" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Controlled navigation for mobile menu links (Option 1).
  // We take over the click so we can reliably close the animated menu panel
  // *before* attempting to scroll. This avoids the browser suppressing the
  // fragment scroll while the fixed header is mutating height + the framer-motion
  // exit animation is running (the root cause of "hash updates but no scroll"
  // and "have to refresh on mobile").
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleMobileNavClick = (href: string) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMenuOpen(false);

    // Small delay lets the exit animation begin (header starts shrinking)
    // before we scroll. The existing scroll-margin-top on sections provides
    // the final clearance under the (now shorter) fixed header.
    setTimeout(() => {
      scrollToSection(href);
      // Ensure the hash is in the URL for sharing / refresh / history.
      window.history.replaceState(null, '', href);
    }, 80);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <Container
        as="div"
        className={`rounded-2xl border transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-hairline bg-noir-2/88 shadow-[0_18px_55px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-transparent bg-noir-2/55 backdrop-blur-md"
        }`}
      >
        <nav className="flex min-h-[4.5rem] items-center justify-between px-5 sm:px-6">
          <a
            href="#top"
            onClick={(e) => {
              if (menuOpen) {
                e.preventDefault();
                setMenuOpen(false);
                setTimeout(() => {
                  scrollToSection('#top');
                  window.history.replaceState(null, '', '#top');
                }, 80);
              }
              // When menu is closed we let the native href work (desktop + collapsed mobile)
            }}
            className="flex items-center gap-3"
          >
            <span className="font-display grid h-10 w-10 place-items-center rounded-xl bg-gold text-[1.05rem] font-semibold text-paper shadow-[0_0_24px_rgba(202,230,22,0.4)]">
              D
            </span>
            <div className="hidden md:block">
              <p className="font-display text-[1.05rem] font-semibold tracking-[-0.01em] text-ink">
                DIBS
              </p>
              <p className="mono-label mt-0.5 text-ink-mute">
                Digital Business Studio
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-hairline bg-noir/50 p-1.5 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-noir-3 hover:text-cyan"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              data-cal-namespace={CAL_STRATEGY.namespace}
              data-cal-link={CAL_STRATEGY.link}
              data-cal-config='{"layout":"month_view"}'
              className="hidden rounded-full border border-hairline bg-noir/60 px-5 py-2.5 text-sm font-medium text-ink-soft transition-all hover:border-gold hover:bg-gold hover:text-paper sm:block"
            >
              Begin a conversation
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="grid h-11 w-11 place-items-center rounded-full border border-hairline bg-noir/70 text-ink lg:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true">
                {menuOpen ? (
                  <path
                    d="M5 5l10 10M15 5L5 15"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M3 6h14M3 10h14M3 14h14"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-hairline lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={handleMobileNavClick(link.href)}
                    className="rounded-xl px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-noir-3 hover:text-cyan"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  data-cal-namespace={CAL_STRATEGY.namespace}
                  data-cal-link={CAL_STRATEGY.link}
                  data-cal-config='{"layout":"month_view"}'
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 rounded-full border border-hairline bg-gold px-5 py-3 text-sm font-semibold text-paper"
                >
                  Begin a conversation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
