"use client";

import Reveal from "./Reveal";

const fragments = [
  "Developer",
  "Designer",
  "Payments expert",
  "Ops tools",
  "Marketer",
  "Automation freelancer",
];

export default function Problem() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="section-label text-gold-bright">01 — The Problem</p>
        </Reveal>
        <div className="mt-8 grid gap-12 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Most digital businesses are held back by{" "}
              <span className="serif-accent font-normal text-gold-bright">
                fragmentation.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-paper/70">
              You have to coordinate developers, designers, payment experts,
              operations tools, and marketers — and still nothing feels truly
              integrated. The tech works but the business doesn&rsquo;t run
              smoothly. You spend more time managing systems than growing.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <div className="mt-16 flex flex-wrap items-center gap-3">
            {fragments.map((f) => (
              <span
                key={f}
                className="rounded-full border border-line-dark px-4 py-2 text-sm text-paper/45 line-through decoration-gold-bright/70"
              >
                {f}
              </span>
            ))}
            <span className="ml-1 rounded-full bg-gold-bright px-4 py-2 text-sm font-semibold text-ink">
              One studio
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
