"use client";

import Container from "./Container";
import Reveal from "./Reveal";

const audiences = [
  {
    title: "Creators",
    body: "People turning attention and expertise into products, communities, and digital ecosystems they actually own.",
  },
  {
    title: "Coaches",
    body: "Operators who are tired of duct-taping third-party tools together when the customer experience should feel cohesive.",
  },
  {
    title: "Founders",
    body: "Teams building digital-first businesses and wanting product, systems, and monetization handled with one point of accountability.",
  },
];

export default function WhoFor() {
  return (
    <section id="who-for" className="bg-noir-2/60">
      <Container className="py-24 sm:py-32">
        <div className="grid gap-6 lg:grid-cols-12 2xl:gap-8">
          <Reveal className="lg:col-span-5">
            <div className="hairline-panel hud-ticks h-full rounded-2xl p-7 text-ink sm:p-8 2xl:p-9">
              <p className="mono-label text-cyan">Partners</p>
              <h2 className="font-display mt-6 text-3xl font-semibold tracking-[-0.01em] leading-[1.05] sm:text-5xl">
                We work best with people who would rather{" "}
                <span className="text-gold bloom-lime">
                  build the business
                </span>{" "}
                than babysit the stack.
              </h2>
              <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-mute">
                If the business is meant to feel considered, the systems underneath it cannot feel improvised.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:col-span-7 sm:grid-cols-2">
            {audiences.map((audience, index) => (
              <Reveal
                key={audience.title}
                delay={index * 0.08}
                className={index === 2 ? "sm:col-span-2" : ""}
              >
                <article className="hairline-panel group h-full rounded-2xl p-6 sm:p-7 2xl:p-8">
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.01em] text-ink transition-colors group-hover:text-gold">
                    {audience.title}
                  </h3>
                  <p className="mt-4 max-w-xl leading-relaxed text-ink-mute">
                    {audience.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
