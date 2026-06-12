"use client";

import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discovery and strategy call",
    body: "We look at the business model, audience, current setup, and friction points. If the fit is wrong, we say so early.",
  },
  {
    n: "02",
    title: "Scope and roadmap",
    body: "You get a clear direction, timeline, and recommendation on what should be built now, what should wait, and why.",
  },
  {
    n: "03",
    title: "Build and integrate",
    body: "Product, payments, operational systems, and automations are developed as one stack with regular feedback loops.",
  },
  {
    n: "04",
    title: "Launch and handover",
    body: "We ship, document, train, and make sure the business can be run confidently after go-live.",
  },
  {
    n: "05",
    title: "Operate and improve",
    body: "If needed, we stay on as the ongoing operator, tightening the system as the business grows and changes.",
  },
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden bg-paper-deep text-ink">
      <div
        aria-hidden="true"
        className="ambient-grid-dark pointer-events-none absolute inset-0 opacity-70"
      />
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="section-label text-clay">05 Process</p>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                Clear steps, tight loops, and{" "}
                <span className="serif-accent font-normal text-gold-bright">
                  no mystery handoffs
                </span>
                .
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/72">
                We keep the process transparent so strategy, build quality, and
                execution speed do not pull in different directions.
              </p>
            </Reveal>
          </div>

          <div className="relative space-y-5 before:absolute before:left-[1.35rem] before:top-0 before:h-full before:w-px before:bg-line-dark sm:before:left-[1.7rem]">
            {steps.map((step, index) => (
              <Reveal key={step.n} delay={index * 0.06}>
                <article className="relative rounded-[1.75rem] border border-line-dark bg-ink/6 p-5 pl-16 sm:p-7 sm:pl-20">
                  <span className="absolute left-4 top-5 grid h-7 w-7 place-items-center rounded-full bg-gold text-xs font-bold text-paper shadow-[0_0_20px_rgba(0,232,123,0.4)] sm:left-6 sm:top-6 sm:h-8 sm:w-8">
                    {step.n}
                  </span>
                  <h3 className="text-xl font-bold tracking-tight text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-3 max-w-2xl leading-relaxed text-ink/70">
                    {step.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
