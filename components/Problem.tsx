"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Container from "./Container";
import Reveal from "./Reveal";

const swaps = [
  { role: "Developer", service: "Custom web and mobile apps" },
  { role: "Designer", service: "Product and brand direction" },
  { role: "Payments expert", service: "Payments and monetization" },
  { role: "Ops tools", service: "Operations and tracking" },
  { role: "Marketer", service: "Launch and growth strategy" },
  { role: "Automation freelancer", service: "AI automations" },
];

const painCards = [
  {
    title: "No one owns the full machine",
    body: "Every specialist handles one slice, but nobody is responsible for how the business works as a whole.",
  },
  {
    title: "Every new tool creates another handoff",
    body: "The stack gets heavier, the workflows get brittle, and you become the person translating between everyone.",
  },
  {
    title: "Growth slows down under operational drag",
    body: "The audience might be there, but the backend keeps leaking time, revenue, and attention.",
  },
];

const FLIP_BASE_DELAY = 0.6;
const FLIP_STAGGER = 0.09;

function MorphChip({
  role,
  service,
  flipped,
  delay,
}: {
  role: string;
  service: string;
  flipped: boolean;
  delay: number;
}) {
  const reducedMotion = useReducedMotion();

  return (
    <span className="inline-grid" style={{ perspective: "600px" }}>
      <motion.span
        className="col-start-1 row-start-1 grid"
        style={{ transformStyle: "preserve-3d" }}
        initial={false}
        animate={{ rotateX: flipped ? 180 : 0 }}
        transition={{
          duration: reducedMotion ? 0 : 0.6,
          delay,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <span
          className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap rounded-full border border-line-dark px-4 py-2 text-sm text-ink/45 line-through decoration-gold/70"
          style={{ backfaceVisibility: "hidden" }}
        >
          {role}
        </span>
        <span
          className="col-start-1 row-start-1 flex items-center justify-center whitespace-nowrap rounded-full bg-gold px-4 py-2 text-sm font-semibold text-paper shadow-[0_0_24px_rgba(202,230,22,0.35)]"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
          }}
        >
          {service}
        </span>
      </motion.span>
    </span>
  );
}

export default function Problem() {
  const chipsRef = useRef<HTMLDivElement>(null);
  const inView = useInView(chipsRef, { once: true, margin: "-80px" });
  const reducedMotion = useReducedMotion();
  const punchlineDelay = FLIP_BASE_DELAY + swaps.length * FLIP_STAGGER + 0.2;

  return (
    <section id="problem" className="relative overflow-hidden bg-paper-deep/70 text-ink">
      <div
        aria-hidden="true"
        className="ambient-grid-dark pointer-events-none absolute inset-0 opacity-70"
      />
      <Container className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[1fr_22rem] lg:items-start">
          <div>
            <Reveal>
              <p className="section-label text-clay">The problem</p>
            </Reveal>
            <Reveal className="mt-6">
              <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Most digital businesses are not broken because of ambition.
                They are slowed down by{" "}
                  <span className="serif-accent font-normal text-gold-bright">
                    fragmentation
                  </span>
                .
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/72">
                You can have good offers, a real audience, and strong ideas and
                still lose momentum because the stack is stitched together by
                too many people, too many tools, and too many loose ends.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.18}>
            <div className="rounded-[1.75rem] border border-line-dark bg-ink/6 p-6 2xl:p-8">
              <p className="section-label text-clay">What it feels like</p>
              <p className="mt-4 text-2xl font-semibold leading-snug tracking-tight">
                You are the project manager for your own business instead of the
                operator of it.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-ink/68">
                The business works in pieces. It rarely works as one clean
                operating system.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18}>
          <div
            ref={chipsRef}
            className="mt-16 flex flex-wrap items-center gap-3"
          >
            {swaps.map((swap, index) => (
              <MorphChip
                key={swap.role}
                role={swap.role}
                service={swap.service}
                flipped={inView}
                delay={reducedMotion ? 0 : FLIP_BASE_DELAY + index * FLIP_STAGGER}
              />
            ))}
            <motion.span
              className="ml-1 whitespace-nowrap rounded-full bg-gold-bright px-4 py-2 text-sm font-semibold text-paper shadow-[0_0_32px_rgba(228,243,95,0.4)]"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : undefined}
              transition={{
                duration: 0.45,
                delay: reducedMotion ? 0 : punchlineDelay,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              One operating partner
            </motion.span>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-3 2xl:gap-6">
          {painCards.map((card, index) => (
            <Reveal key={card.title} delay={0.24 + index * 0.08}>
              <article className="rounded-[1.5rem] border border-line-dark bg-ink/6 p-6 2xl:p-7">
                <p className="text-lg font-semibold tracking-tight text-ink">
                  {card.title}
                </p>
                <p className="mt-3 leading-relaxed text-ink/68">{card.body}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
