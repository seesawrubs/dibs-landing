"use client";

import { motion } from "framer-motion";
import { CAL_STRATEGY } from "./CalInit";

const operatingLayers = [
  {
    title: "Business design",
    body: "Offers, positioning, pricing, and funnels get mapped before build starts.",
  },
  {
    title: "Product and platform",
    body: "Custom web and mobile experiences built around how the business actually runs.",
  },
  {
    title: "Payments and operations",
    body: "Revenue flows, dashboards, SOPs, and internal systems wired into one stack.",
  },
  {
    title: "Automation and growth",
    body: "AI workflows and monthly improvements that remove repetition and sharpen performance.",
  },
];

const heroModes = [
  {
    label: "Launch",
    body: "Build the first version of your business properly, not from scattered tools.",
  },
  {
    label: "Repair",
    body: "Untangle a messy setup and rebuild the parts blocking revenue or operations.",
  },
  {
    label: "Run and grow",
    body: "Keep shipping, automating, and improving after the initial launch.",
  },
];

const frictionPoints = [
  "Developers",
  "Design freelancers",
  "Payment setup",
  "Ops handoffs",
  "Disconnected automations",
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[6.5rem] sm:pt-[7.5rem]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-14 h-[38rem] bg-[radial-gradient(circle_at_top,_rgba(0,232,123,0.16),_transparent_42%)]"
      />
      <div
        aria-hidden="true"
        className="ambient-grid pointer-events-none absolute inset-x-0 top-10 h-[34rem] opacity-60"
      />

      <div className="mx-auto max-w-6xl px-5 pb-10 sm:px-8">
        <div className="panel-paper relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-line"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 left-1/3 h-56 w-56 rounded-full border border-line"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease }}
                className="section-label text-clay"
              >
                Digital business systems for creators, coaches, and founders
              </motion.p>

              <h1 className="mt-6 max-w-4xl text-[2.85rem] font-black leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-[5.35rem]">
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.08, ease }}
                >
                  Build a business
                </motion.span>
                <motion.span
                  className="block"
                  initial={{ opacity: 0, y: 28 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.18, ease }}
                >
                  that runs like{" "}
                  <span className="serif-accent neon-glow font-normal text-gold">
                    one system
                  </span>
                  .
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.32, ease }}
                className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-mute sm:text-xl"
              >
                We handle the strategy, custom apps, payments, operations, AI
                workflows, and ongoing improvements so you stop coordinating
                five vendors and start running one coherent business.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.46, ease }}
                className="mt-9 flex flex-col items-start gap-4 sm:flex-row sm:items-center"
              >
                <button
                  data-cal-namespace={CAL_STRATEGY.namespace}
                  data-cal-link={CAL_STRATEGY.link}
                  data-cal-config='{"layout":"month_view"}'
                  className="rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-paper shadow-[0_0_36px_rgba(0,232,123,0.35)] transition-all hover:bg-gold-bright hover:shadow-[0_0_48px_rgba(102,255,176,0.5)]"
                >
                  Book a Free Strategy Call
                </button>
                <a
                  href="#services"
                  className="group inline-flex items-center gap-2 rounded-full border border-line bg-paper/80 px-5 py-3.5 text-sm font-semibold text-ink transition-colors hover:bg-paper-deep"
                >
                  Explore Engagements
                  <span className="transition-transform group-hover:translate-x-0.5">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 7h8M8.5 3.5L12 7l-3.5 3.5"
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

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.58, ease }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {frictionPoints.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-paper/72 px-3.5 py-2 text-sm text-ink-soft"
                  >
                    No more {item.toLowerCase()}
                  </span>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease }}
              className="grid gap-4"
            >
              <div className="panel-dark relative overflow-hidden rounded-[1.75rem] p-6 text-ink sm:p-7">
                <div
                  aria-hidden="true"
                  className="ambient-grid-dark pointer-events-none absolute inset-0 opacity-70"
                />
                <div className="relative">
                  <p className="section-label text-clay">
                    Your operating stack, designed end to end
                  </p>
                  <div className="mt-5 space-y-3">
                    {operatingLayers.map((layer) => (
                      <div
                        key={layer.title}
                        className="rounded-2xl border border-line-dark bg-ink/6 px-4 py-4"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-base font-semibold tracking-tight text-ink">
                              {layer.title}
                            </p>
                            <p className="mt-1 text-sm leading-relaxed text-ink/70">
                              {layer.body}
                            </p>
                          </div>
                          <span className="text-clay" aria-hidden="true">
                            +
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-[0.92fr_1.08fr]">
                <div className="rounded-[1.5rem] border border-line bg-paper/78 p-5">
                  <p className="section-label text-gold">Best fit if</p>
                  <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                    <li>You are launching a new offer, community, or platform.</li>
                    <li>Your current setup feels fragmented or fragile.</li>
                    <li>You want one accountable partner after launch too.</li>
                  </ul>
                </div>
                <div className="rounded-[1.5rem] border border-line bg-paper-deep p-5">
                  <p className="section-label text-gold">What changes</p>
                  <p className="mt-4 text-lg font-semibold tracking-tight text-ink">
                    Fewer handoffs. Cleaner operations. Better decisions before
                    code.
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-ink-mute">
                    Strategy comes first, then build, then operations and growth
                    loops that hold together over time.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {heroModes.map((mode, index) => (
            <motion.div
              key={mode.label}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.62 + index * 0.08, ease }}
              className="rounded-[1.5rem] border border-line bg-paper/74 p-5 shadow-[0_16px_48px_rgba(0,232,123,0.05)]"
            >
              <p className="section-label text-gold">{mode.label}</p>
              <p className="mt-3 text-lg font-semibold tracking-tight text-ink">
                {mode.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
