"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CAL_STRATEGY } from "./CalInit";
import Container from "./Container";

const links = [
  { label: "The Studio", href: "#the-studio" },
  { label: "Approach", href: "#approach" },
  { label: "Work", href: "#selected-work" },
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <Container
        as="div"
        className={`rounded-[1.6rem] border transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-line bg-paper/88 shadow-[0_18px_55px_rgba(0,0,0,0.55)] backdrop-blur-xl"
            : "border-transparent bg-paper/62 backdrop-blur-md"
        }`}
      >
        <nav className="flex min-h-[4.5rem] items-center justify-between px-5 sm:px-6">
          <a href="#top" className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gold text-[0.72rem] font-black tracking-[0.18em] text-paper shadow-[0_0_28px_rgba(0,232,123,0.45)]">
              DBS
            </span>
            <div className="hidden md:block">
              <p className="text-[0.9rem] font-bold tracking-tight text-ink">
                Digital Business Studio
              </p>
              <p className="text-xs text-ink-mute">
                Strategy, build, operations, and growth
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-2 rounded-full border border-line bg-paper/80 p-1.5 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
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
              className="hidden rounded-full border border-line bg-paper/70 px-5 py-2.5 text-sm font-medium text-ink-soft transition-all hover:bg-gold hover:text-paper sm:block"
            >
              Begin a conversation
            </button>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="grid h-11 w-11 place-items-center rounded-full border border-line bg-paper/80 text-ink lg:hidden"
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
              className="overflow-hidden border-t border-line lg:hidden"
            >
              <div className="flex flex-col gap-1 px-5 pb-6 pt-2">
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="rounded-2xl px-4 py-3 text-base font-medium text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
                  >
                    {link.label}
                  </a>
                ))}
                <button
                  data-cal-namespace={CAL_STRATEGY.namespace}
                  data-cal-link={CAL_STRATEGY.link}
                  data-cal-config='{"layout":"month_view"}'
                  onClick={() => setMenuOpen(false)}
                  className="mt-3 rounded-full border border-line bg-paper/70 px-5 py-3 text-sm font-medium text-ink"
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
