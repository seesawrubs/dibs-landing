"use client";

import Container from "./Container";
import Reveal from "./Reveal";

const principles = [
  {
    title: "Strategy before software",
    body: "We shape the offer, the buyer journey, monetization, and business logic before any build decisions lock you in.",
  },
  {
    title: "Custom by nature, not by default",
    body: "Your product is designed around the real workflows of the business — not stretched templates pretending to fit.",
  },
  {
    title: "Payments and operations as first-class citizens",
    body: "Revenue, internal systems, reporting, and accountability are wired into the product from the very beginning.",
  },
  {
    title: "Automation that actually removes work",
    body: "AI and automation are used to remove operational load, not to add another layer of complexity to manage.",
  },
  {
    title: "A business that keeps improving",
    body: "Launch is never the finish line. We can stay on as the operator, iterating and sharpening the system month after month.",
  },
];

export default function TheStudio() {
  return (
    <section id="the-studio" className="bg-transparent">
      <Container className="py-20 sm:py-28">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mono-label text-cyan">The studio</p>
            <h2 className="font-display mt-5 text-4xl font-semibold tracking-[-0.015em] leading-[1.02] sm:text-6xl">
              We don’t deliver projects.<br />We design complete{" "}
              <span className="text-gold bloom-lime">operating layers</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-[15px] leading-relaxed text-ink-mute max-w-[44ch]">
              That means the business logic, the product, the payments, the back office, and the growth loops are decided together — not in random sequence by different people.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16">
          {principles.map((p, i) => (
            <Reveal key={i} delay={0.06 * i}>
              <article className="hairline-panel hud-ticks group h-full rounded-2xl p-7 text-ink sm:p-8 2xl:p-9">
                <span className="font-mono-tech text-[11px] tracking-[0.18em] text-cyan/60">
                  {(i + 1).toString().padStart(2, "0")}
                </span>
                <h3 className="font-display mt-4 text-base font-medium tracking-[-0.1px] text-ink transition-colors group-hover:text-gold">
                  {p.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-mute">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
