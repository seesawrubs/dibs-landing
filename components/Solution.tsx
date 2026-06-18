"use client";

import Container from "./Container";
import Reveal from "./Reveal";

const pillars = [
  {
    n: "01",
    title: "Strategy before software",
    body: "We shape the offer, buyer journey, monetization model, and business logic before build decisions lock you in.",
  },
  {
    n: "02",
    title: "Custom product, not a stretched template",
    body: "Your app, website, or member experience is designed around your workflows, not around a generic stack pretending to fit.",
  },
  {
    n: "03",
    title: "Payments and operations wired in",
    body: "Revenue, internal dashboards, handoffs, reporting, and accountability loops are built into the system from the start.",
  },
  {
    n: "04",
    title: "Automation that actually removes work",
    body: "We use AI and automation to remove repetitive operational load, not to add another layer of complexity to manage.",
  },
  {
    n: "05",
    title: "A business that keeps improving",
    body: "Launch is not the finish line. We can stay on to operate, iterate, and sharpen the system month after month.",
  },
];

export default function Solution() {
  return (
    <section id="how-it-works" className="bg-transparent">
      <Container className="py-24 sm:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.76fr_1.24fr] 2xl:gap-16">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="section-label text-gold">02 The model</p>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
                We do not just build deliverables. We design a{" "}
                <span className="serif-accent font-normal text-gold">
                  complete operating layer
                </span>
                .
              </h2>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-mute">
                That means the business logic, product, payments, back office,
                and automation decisions are made together instead of in random
                sequence.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="mt-8 rounded-[1.75rem] border border-line bg-paper/74 p-6">
                <p className="section-label text-gold">What that changes</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                  <li>Fewer rebuilds caused by early wrong decisions.</li>
                  <li>Cleaner ownership across launch and post-launch work.</li>
                  <li>A stack that supports growth instead of resisting it.</li>
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="space-y-4">
            {pillars.map((pillar, index) => (
              <Reveal
                key={pillar.n}
                delay={index * 0.08}
                className={index % 2 === 0 ? "lg:pr-10" : "lg:pl-10"}
              >
                <article className="rounded-[1.9rem] border border-line bg-paper/78 p-6 shadow-[0_18px_50px_rgba(202,230,22,0.06)] sm:p-8 2xl:p-9">
                  <div className="grid gap-4 sm:grid-cols-[5rem_1fr] sm:items-start">
                    <p className="serif-accent text-4xl text-gold">{pillar.n}</p>
                    <div>
                      <h3 className="text-xl font-bold tracking-tight text-ink sm:text-2xl">
                        {pillar.title}
                      </h3>
                      <p className="mt-3 max-w-2xl leading-relaxed text-ink-mute">
                        {pillar.body}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
