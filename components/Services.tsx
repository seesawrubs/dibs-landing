"use client";

import Reveal from "./Reveal";

const offerings = [
  {
    name: "Digital Business Launch Package",
    tag: "Launch",
    calNamespace: "dbs-launch",
    calLink: "godigitalstudio/dbs-launch",
    description:
      "We build and launch your complete digital business in 6–12 weeks — strategy, apps, payments, and operations, ready to run.",
    points: [
      "Full strategy & business design sprint",
      "Custom mobile + web app, built for your model",
      "Payments, operations & tracking wired in",
      "Launch support and full handover",
    ],
    featured: false,
  },
  {
    name: "Digital Business Management Retainer",
    tag: "Run & Grow",
    calNamespace: "dbs-runandgrow",
    calLink: "godigitalstudio/dbs-runandgrow",
    description:
      "We run and continuously improve your digital business every month — so it keeps getting better while you stay focused on your audience.",
    points: [
      "Ongoing development & improvements",
      "Operations monitoring & monthly reviews",
      "AI automation rollouts as you scale",
      "One accountable partner, every month",
    ],
    featured: true,
  },
  {
    name: "Custom / Modular Engagements",
    tag: "À la carte",
    calNamespace: "dbs-custom",
    calLink: "godigitalstudio/dbs-custom",
    description:
      "Strategy, apps, systems, or AI features — pick exactly what you need, à la carte or combined into a custom scope.",
    points: [
      "Strategy & roadmap engagements",
      "Standalone app or feature builds",
      "Payments & systems integrations",
      "AI automation projects",
    ],
    featured: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="section-label text-gold">03 — Services</p>
          <h2 className="mt-7 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Choose how we{" "}
            <span className="serif-accent font-normal text-gold">
              work together
            </span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {offerings.map((o, i) => (
            <Reveal key={o.name} delay={i * 0.1} className="h-full">
              <article
                className={`flex h-full flex-col rounded-2xl p-8 sm:p-9 ${
                  o.featured
                    ? "bg-ink text-paper shadow-xl shadow-ink/15"
                    : "border border-line bg-paper"
                }`}
              >
                <p
                  className={`section-label ${
                    o.featured ? "text-gold-bright" : "text-gold"
                  }`}
                >
                  {o.tag}
                </p>
                <h3 className="mt-4 text-xl font-bold leading-snug tracking-tight">
                  {o.name}
                </h3>
                <p
                  className={`mt-3 leading-relaxed ${
                    o.featured ? "text-paper/70" : "text-ink-mute"
                  }`}
                >
                  {o.description}
                </p>
                <ul className="mt-6 flex-1 space-y-3">
                  {o.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm">
                      <span
                        className={
                          o.featured ? "text-gold-bright" : "text-gold"
                        }
                        aria-hidden="true"
                      >
                        ✦
                      </span>
                      <span
                        className={
                          o.featured ? "text-paper/80" : "text-ink-soft"
                        }
                      >
                        {point}
                      </span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`mt-8 border-t pt-6 ${
                    o.featured ? "border-line-dark" : "border-line"
                  }`}
                >
                  <p
                    className={`text-sm ${
                      o.featured ? "text-paper/60" : "text-ink-mute"
                    }`}
                  >
                    Custom quote, scoped on your strategy call
                  </p>
                  <button
                    data-cal-namespace={o.calNamespace}
                    data-cal-link={o.calLink}
                    data-cal-config='{"layout":"month_view"}'
                    className={`mt-4 w-full rounded-full px-6 py-3 text-sm font-semibold transition-colors ${
                      o.featured
                        ? "bg-gold-bright text-ink hover:bg-gold"
                        : "bg-ink text-paper hover:bg-ink-soft"
                    }`}
                  >
                    Book a call to discuss your project
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
