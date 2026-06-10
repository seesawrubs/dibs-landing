"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "A complete Digital Business Launch typically takes 6–12 weeks depending on scope. Modular engagements — a single app, a payments integration, an AI automation — can be much faster. You'll get a clear timeline in your proposal before anything starts.",
  },
  {
    q: "Do you only work with big budgets?",
    a: "No. We work with creators and founders at different stages, which is exactly why we offer modular engagements alongside the full launch package. On your strategy call we'll be upfront about what's realistic for your budget — and what to prioritize first.",
  },
  {
    q: "Can you integrate with tools I already use?",
    a: "Yes. We build around your existing stack wherever it makes sense — payment gateways, email tools, communities, CRMs, spreadsheets. We replace tools only when they're genuinely holding you back, not for the sake of it.",
  },
  {
    q: "What if I want to manage parts myself?",
    a: "Perfect — we build for handover. Every launch includes training and documentation so you can run what you want yourself, and the management retainer is always optional. You choose how much we stay involved.",
  },
  {
    q: "Do you work with clients outside India?",
    a: "Absolutely. We're based in India and work with creators and founders worldwide. We support both Razorpay for Indian payments and global gateways for international audiences.",
  },
  {
    q: "What makes you different from a regular app development agency?",
    a: "An agency ships you an app and disappears. We design the business around the app — strategy, operations, payments, AI automation — and can keep running it with you. You get one accountable partner for the whole digital business, not just the code.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [openItem, setOpenItem] = useState(false);

  return (
    <div className="border-b border-line">
      <button
        onClick={() => setOpenItem((v) => !v)}
        aria-expanded={openItem}
        className="flex w-full items-center justify-between gap-6 py-6 text-left"
      >
        <span className="text-lg font-semibold tracking-tight text-ink">
          {q}
        </span>
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
    <section id="faq" className="bg-paper">
      <div className="mx-auto max-w-4xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="section-label text-gold">07 — FAQ</p>
          <h2 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Questions,{" "}
            <span className="serif-accent font-normal text-gold">
              answered honestly
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mt-12 border-t border-line">
            {faqs.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
