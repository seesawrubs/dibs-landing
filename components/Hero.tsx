"use client";

import { motion } from "framer-motion";
import { CAL_STRATEGY } from "./CalInit";

const disciplines = [
  "Strategy",
  "Custom Apps",
  "Payments",
  "Operations",
  "AI Automation",
  "Monetization",
  "Ongoing Growth",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-[4.5rem]">
      {/* Faint oversized ring, anchoring the editorial composition */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-64 -top-40 h-[44rem] w-[44rem] rounded-full border border-line"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-16 h-[30rem] w-[30rem] rounded-full border border-line"
      />

      <div className="mx-auto max-w-6xl px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
          className="section-label text-gold"
        >
          A full-stack digital studio
        </motion.p>

        <h1 className="mt-7 max-w-4xl text-[2.75rem] font-black leading-[1.04] tracking-tight text-ink sm:text-6xl lg:text-7xl">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            We build and run your
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
          >
            <span className="serif-accent font-normal text-gold">
              complete
            </span>{" "}
            digital business.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.38, ease }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-mute sm:text-xl"
        >
          From strategy and custom apps to operations, payments, AI systems,
          and ongoing growth — one partner handles everything so you can focus
          on your audience and offers.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.52, ease }}
          className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
        >
          <button
            data-cal-namespace={CAL_STRATEGY.namespace}
            data-cal-link={CAL_STRATEGY.link}
            data-cal-config='{"layout":"month_view"}'
            className="rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-paper transition-all hover:bg-ink-soft hover:shadow-lg hover:shadow-ink/10"
          >
            Book a Free Strategy Call
          </button>
          <a
            href="#how-it-works"
            className="group flex items-center gap-2 px-2 py-3.5 text-sm font-semibold text-ink"
          >
            See How It Works
            <span className="transition-transform group-hover:translate-y-0.5">
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path
                  d="M7 2v9M3 7.5L7 11l4-3.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>
            </span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 text-sm text-ink-mute"
        >
          Built for creators, coaches &amp; digital founders in India and
          worldwide
        </motion.p>
      </div>

      {/* Discipline ticker */}
      <div className="border-y border-line py-5">
        <div className="relative flex overflow-hidden">
          <motion.div
            className="flex shrink-0 items-center"
            animate={{ x: "-50%" }}
            transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
          >
            {[...disciplines, ...disciplines].map((item, i) => (
              <span
                key={i}
                className="flex items-center whitespace-nowrap text-sm font-medium tracking-wide text-ink-mute"
              >
                <span className="px-6">{item}</span>
                <span className="text-gold" aria-hidden="true">
                  ✦
                </span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
