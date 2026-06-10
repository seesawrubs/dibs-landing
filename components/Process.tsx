"use client";

import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discovery & Strategy Call",
    body: "We learn your business, audience, and goals — and tell you honestly whether we're the right fit.",
  },
  {
    n: "02",
    title: "Custom Proposal & Roadmap",
    body: "A clear scope, timeline, and plan tailored to your business — no vague estimates.",
  },
  {
    n: "03",
    title: "Build + Integrate",
    body: "Apps, systems, payments, and AI — built in tight loops with your feedback along the way.",
  },
  {
    n: "04",
    title: "Launch & Handover",
    body: "We ship, train you on everything, and hand over a business that runs.",
  },
  {
    n: "05",
    title: "Ongoing Management",
    body: "Optional — we keep operating and improving the machine month after month.",
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="section-label text-gold">05 — Process</p>
                <h2 className="mt-7 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                  How it works,{" "}
                  <span className="serif-accent font-normal text-gold">
                    step by step
                  </span>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-mute">
                  A simple, transparent process — from first conversation to a
                  business that runs without the chaos.
                </p>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ol>
              {steps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.06}>
                  <li className="group flex gap-6 border-b border-line py-8 first:pt-0 sm:gap-10">
                    <span className="serif-accent mt-0.5 text-2xl text-gold sm:text-3xl">
                      {step.n}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 leading-relaxed text-ink-mute">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
