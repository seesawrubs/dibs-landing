"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A full launch engagement usually takes 6 to 12 weeks depending on scope. Smaller modular work can move faster. You get a concrete recommendation and timeline before anything begins.",
  },
  {
    q: "Do you only work with large budgets?",
    a: "No. We work with businesses at different stages. That is why modular engagements exist. The important part is being honest about what should be done now and what should wait.",
  },
  {
    q: "Can you work with the tools I already use?",
    a: "Yes. We build around the existing stack where it makes sense. We replace tools only when they are clearly creating friction or limiting the business.",
  },
  {
    q: "What if I want to manage some parts myself?",
    a: "That is fine. We build for handover. Documentation, training, and clear ownership are part of the process so you can keep what you want in house.",
  },
  {
    q: "Do you work outside India?",
    a: "Yes. We are based in India and work with founders and operators worldwide. We support both Indian and international payment setups where needed.",
  },
  {
    q: "How are you different from a normal dev agency?",
    a: "A typical agency delivers code. We design the business layer around the product as well: strategy, operations, payments, automation, and ongoing iteration when needed.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [openItem, setOpenItem] = useState(false);

  return (
    <div className="border-b border-line last:border-b-0">
      <button
        onClick={() => setOpenItem((value) => !value)}
        aria-expanded={openItem}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-semibold tracking-tight text-ink">{q}</span>
        <motion.span
          animate={{ rotate: openItem ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0 text-gold"
          aria-hidden="true"
        >
          <svg width="18" height="18" viewBox="0 0 18 18">
            <path
              d="M9 3v12M3 9h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {openItem && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="max-w-3xl pb-7 leading-relaxed text-ink-mute">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Faq() {
  return (
    <section id="faq" className="bg-transparent">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <Reveal>
              <p className="section-label text-gold">07 FAQ</p>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                Questions,{" "}
                <span className="serif-accent font-normal text-gold">
                  answered plainly
                </span>
                .
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-mute">
                The model is simple on purpose. If something matters to the
                buying decision, it should be easy to understand.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.08}>
            <div className="rounded-[2rem] border border-line bg-paper p-6 shadow-[0_18px_50px_rgba(0,232,123,0.06)] sm:p-8">
              {faqs.map((faq) => (
                <FaqItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
