"use client";

import {
  createContext,
  useCallback,
  useContext,
  useState,
  type ReactNode,
} from "react";
import { AnimatePresence, motion } from "framer-motion";

type LeadModalContextType = {
  open: () => void;
};

const LeadModalContext = createContext<LeadModalContextType>({
  open: () => {},
});

export function useLeadModal() {
  return useContext(LeadModalContext);
}

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const open = useCallback(() => {
    setSubmitted(false);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <LeadModalContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-end justify-center bg-ink/60 backdrop-blur-sm sm:items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Book a strategy call"
              className="w-full max-w-lg rounded-t-2xl bg-paper p-8 sm:rounded-2xl sm:p-10"
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {submitted ? (
                <div className="py-6 text-center">
                  <p className="serif-accent text-3xl text-ink">
                    You&rsquo;re on the list.
                  </p>
                  <p className="mt-4 text-ink-mute">
                    We&rsquo;ll reach out within one business day to schedule
                    your free strategy call.
                  </p>
                  <button
                    onClick={close}
                    className="mt-8 rounded-full border border-line px-6 py-2.5 text-sm font-medium text-ink transition-colors hover:border-ink"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="section-label text-gold">
                        Free strategy call
                      </p>
                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-ink">
                        Tell us what you&rsquo;re building
                      </h3>
                    </div>
                    <button
                      onClick={close}
                      aria-label="Close"
                      className="-mr-2 -mt-2 rounded-full p-2 text-ink-mute transition-colors hover:text-ink"
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M5 5l10 10M15 5L5 15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                        />
                      </svg>
                    </button>
                  </div>
                  <form
                    className="mt-8 space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div>
                      <label
                        htmlFor="lead-name"
                        className="mb-1.5 block text-sm font-medium text-ink-soft"
                      >
                        Name
                      </label>
                      <input
                        id="lead-name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        placeholder="Your name"
                        className="w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-mute/60 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lead-email"
                        className="mb-1.5 block text-sm font-medium text-ink-soft"
                      >
                        Email
                      </label>
                      <input
                        id="lead-email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="w-full rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-mute/60 focus:border-gold"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lead-building"
                        className="mb-1.5 block text-sm font-medium text-ink-soft"
                      >
                        What are you building?
                      </label>
                      <textarea
                        id="lead-building"
                        name="building"
                        rows={3}
                        placeholder="A course platform, a community app, a coaching business…"
                        className="w-full resize-none rounded-lg border border-line bg-white px-4 py-3 text-ink outline-none transition-colors placeholder:text-ink-mute/60 focus:border-gold"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-paper transition-colors hover:bg-ink-soft"
                    >
                      Request my strategy call
                    </button>
                    <p className="text-center text-xs text-ink-mute">
                      Free 30 minutes. No pitch, no pressure — just clarity.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </LeadModalContext.Provider>
  );
}
