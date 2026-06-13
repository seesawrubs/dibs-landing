"use client";

import { motion } from "framer-motion";
import { CAL_STRATEGY } from "./CalInit";
import Container from "./Container";

const operatingLayers = [
  {
    title: "Business design",
    body: "Offers, positioning, pricing, and funnels mapped before any code.",
  },
  {
    title: "Product & platform",
    body: "Custom web and mobile experiences built around how the business actually runs.",
  },
  {
    title: "Payments & operations",
    body: "Revenue systems, dashboards, and internal processes wired together.",
  },
  {
    title: "Automation & growth",
    body: "AI workflows that remove repetition and compound performance over time.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-[6.5rem] sm:pt-[7.5rem]"
    >
      {/* Atmospheric foundation — kept and made more cinematic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-14 h-[42rem] bg-[radial-gradient(circle_at_top,_rgba(0,232,123,0.13),_transparent_48%)]"
      />
      <div
        aria-hidden="true"
        className="ambient-grid pointer-events-none absolute inset-x-0 top-8 h-[40rem] opacity-50"
      />

      <Container className="pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center 2xl:gap-16">
          {/* Left — confident, editorial headline */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease }}
              className="section-label text-clay tracking-[0.28em]"
            >
              A studio for complete digital businesses
            </motion.p>

            <h1 className="mt-5 max-w-[18ch] text-[3.1rem] font-semibold leading-[0.95] tracking-[-0.025em] text-ink sm:text-7xl lg:text-[5.75rem] 2xl:text-[6.1rem]">
              We design and run the operating systems behind exceptional digital businesses.
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12, ease }}
              className="mt-6 max-w-[42ch] text-[15px] leading-relaxed text-ink-mute sm:text-lg"
            >
              Strategy, product, payments, operations, and growth — composed as one coherent system rather than five separate vendors.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease }}
              className="mt-9"
            >
              <button
                data-cal-namespace={CAL_STRATEGY.namespace}
                data-cal-link={CAL_STRATEGY.link}
                data-cal-config='{"layout":"month_view"}'
                className="rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold tracking-[0.01em] text-paper shadow-[0_0_28px_rgba(0,232,123,0.32)] transition-all hover:bg-gold-bright hover:shadow-[0_0_42px_rgba(102,255,176,0.45)]"
              >
                Begin a conversation
              </button>

              <a
                href="#the-studio"
                className="ml-5 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                The studio
                <span className="text-gold">→</span>
              </a>
            </motion.div>
          </div>

          {/* Right — quiet, elegant operating layers in a card treatment */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.18, ease }}
          >
            <div className="panel-dark rounded-[1.75rem] border border-line-dark p-8 text-ink/90 lg:p-9">
              <p className="section-label text-clay">What we compose as one</p>

              <div className="mt-6 space-y-6">
                {operatingLayers.map((layer, index) => (
                  <div key={index} className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="text-gold/90 text-sm tabular-nums tracking-[3px]">{(index + 1).toString().padStart(2, "0")}</span>
                      <p className="text-[15px] font-medium tracking-[-0.1px] text-ink group-hover:text-gold transition-colors">
                        {layer.title}
                      </p>
                    </div>
                    <p className="mt-1.5 pl-[2.35rem] text-[13px] leading-snug text-ink-mute">
                      {layer.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Very light, confident closer — removed the old "modes" and friction chips for air */}
        <div className="mt-16 border-t border-line pt-6 text-xs text-ink-mute/70 2xl:mt-20">
          One studio. Complete accountability. Built to run.
        </div>
      </Container>
    </section>
  );
}
