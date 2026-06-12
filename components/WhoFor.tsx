"use client";

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
    <section id="who-for" className="bg-paper-deep/80">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <div className="grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <div className="panel-dark h-full rounded-[2rem] p-7 text-ink sm:p-8">
              <p className="section-label text-clay">06 Who this fits</p>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
                For teams who would rather{" "}
                <span className="serif-accent font-normal text-gold-bright">
                  build the business
                </span>{" "}
                than babysit the stack.
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/72">
                If the business is meant to feel premium, the internal systems
                cannot feel improvised.
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
                <article className="h-full rounded-[1.75rem] border border-line bg-paper p-6 shadow-[0_18px_50px_rgba(0,232,123,0.06)] sm:p-7">
                  <h3 className="text-2xl font-bold tracking-tight text-ink">
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
      </div>
    </section>
  );
}
