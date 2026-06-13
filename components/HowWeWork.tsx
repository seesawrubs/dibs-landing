"use client";

import Container from "./Container";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discovery & direction",
    body: "We examine the business model, audience, current setup, and real friction. If the fit isn’t right, we say so early.",
  },
  {
    n: "02",
    title: "Scope & roadmap",
    body: "You receive a clear point of view, timeline, and recommendation on what should be built now versus later — and why.",
  },
  {
    n: "03",
    title: "Build as one system",
    body: "Product, payments, operational systems, and automation are developed together with regular, transparent feedback.",
  },
  {
    n: "04",
    title: "Launch & ownership transfer",
    body: "We ship, document, and train so the business can be run confidently once we hand it over.",
  },
  {
    n: "05",
    title: "Operate & improve (optional)",
    body: "Many partners ask us to stay on as the ongoing operator — tightening the system as the business grows.",
  },
];

export default function HowWeWork() {
  return (
    <section id="approach" className="relative overflow-hidden bg-paper-deep/60 text-ink">
      <div
        aria-hidden="true"
        className="ambient-grid-dark pointer-events-none absolute inset-0 opacity-60"
      />

      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] 2xl:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal>
              <p className="section-label text-clay">How we work</p>
              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.015em] leading-none sm:text-5xl">
                Clear steps.<br />No mystery handoffs.
              </h2>
              <p className="mt-5 max-w-[38ch] text-[14px] leading-relaxed text-ink-mute">
                We keep the process transparent so strategy, craft, and speed stay aligned from the first conversation onward.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-4">
            {steps.map((step, index) => (
              <Reveal key={step.n} delay={index * 0.04}>
                <article className="panel-dark relative rounded-[1.75rem] border border-line-dark p-7 sm:p-8">
                  <div className="flex items-start gap-5">
                    <span className="mt-1 shrink-0 font-mono text-sm tracking-[4px] text-gold/80">{step.n}</span>
                    <div>
                      <h3 className="text-[15px] font-medium tracking-[-0.1px] text-ink">{step.title}</h3>
                      <p className="mt-2 text-[13px] leading-relaxed text-ink-mute">{step.body}</p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Light narrative on engagement shapes (no hard tiers or per-card CTAs) */}
        <div className="mt-14 rounded-[1.5rem] border border-line bg-paper/60 p-8 text-[13px] leading-relaxed text-ink-mute">
          Engagements tend to take three natural shapes: a full launch partnership that gets the first complete version built properly, an ongoing operator relationship that keeps the system improving, or more focused, surgical work on a specific layer. The right shape always emerges from the first conversation.
        </div>
      </Container>
    </section>
  );
}
