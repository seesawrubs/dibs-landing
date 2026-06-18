"use client";

import Container from "./Container";
import Reveal from "./Reveal";

const offerings = [
  {
    name: "Digital Business Launch Package",
    tag: "Flagship engagement",
    calNamespace: "dbs-launch",
    calLink: "godigitalstudio/dbs-launch",
    summary:
      "The full strategy, build, payments, operations, and launch engagement for businesses that want the first version built properly.",
    fit: "Best for new platforms, products, communities, or service businesses becoming digital-first.",
    points: [
      "Strategy and business design sprint",
      "Custom web and mobile product build",
      "Payments, admin workflows, and tracking setup",
      "Launch support and handover",
    ],
    featured: true,
  },
  {
    name: "Run and Grow Retainer",
    tag: "Ongoing operator",
    calNamespace: "dbs-runandgrow",
    calLink: "godigitalstudio/dbs-runandgrow",
    summary:
      "Ongoing development, operations refinement, automation rollouts, and monthly iteration after the business is already in motion.",
    fit: "Best for teams that want one partner to keep the machine improving after launch.",
    points: [
      "Monthly product and operations improvements",
      "Automation releases as complexity increases",
      "Ongoing review of friction and bottlenecks",
    ],
    featured: false,
  },
  {
    name: "Custom and Modular Engagements",
    tag: "Surgical scope",
    calNamespace: "dbs-custom",
    calLink: "godigitalstudio/dbs-custom",
    summary:
      "Use us for a strategy sprint, app build, payments repair, or targeted systems work when the whole stack does not need to be rebuilt.",
    fit: "Best for fixing one important layer without pretending the rest of the system does not matter.",
    points: [
      "Strategy and roadmap engagements",
      "Standalone platform or feature builds",
      "Payments and systems integration work",
    ],
    featured: false,
  },
];

function BookingButton({
  namespace,
  link,
  children,
  dark = false,
}: {
  namespace: string;
  link: string;
  children: string;
  dark?: boolean;
}) {
  return (
    <button
      data-cal-namespace={namespace}
      data-cal-link={link}
      data-cal-config='{"layout":"month_view"}'
      className={`rounded-full px-5 py-3 text-sm font-semibold transition-colors ${
        dark
          ? "bg-gold text-paper shadow-[0_0_28px_rgba(202,230,22,0.35)] hover:bg-gold-bright"
          : "border border-line bg-paper/75 text-ink hover:bg-paper-deep"
      }`}
    >
      {children}
    </button>
  );
}

export default function Services() {
  const featured = offerings.find((offering) => offering.featured)!;
  const secondary = offerings.filter((offering) => !offering.featured);

  return (
    <section id="engage" className="bg-paper-deep/70">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <p className="section-label text-gold">Engagements</p>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <h2 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
              Choose the level of ownership you want us to{" "}
              <span className="serif-accent font-normal text-gold">take on</span>
              .
            </h2>
            <p className="max-w-xl text-lg leading-relaxed text-ink-mute">
              The shape changes, but the principle stays the same: we look at
              the business as a system, not as a disconnected task list.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-12 2xl:gap-8">
          <Reveal delay={0.08} className="lg:col-span-7 2xl:col-span-8">
            <article className="panel-dark h-full rounded-[2rem] p-7 text-ink sm:p-9">
              <p className="section-label text-clay">{featured.tag}</p>
              <h3 className="mt-5 max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                {featured.name}
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/74">
                {featured.summary}
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-4">
                {featured.points.map((point) => (
                  <div
                    key={point}
                    className="rounded-[1.35rem] border border-line-dark bg-ink/7 p-4"
                  >
                    <p className="text-sm font-medium leading-relaxed text-ink/84">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-[1.5rem] border border-line-dark bg-ink/7 p-5">
                <p className="section-label text-clay">Best fit</p>
                <p className="mt-3 leading-relaxed text-ink/72">
                  {featured.fit}
                </p>
              </div>

              <div className="mt-8">
                <BookingButton
                  namespace={featured.calNamespace}
                  link={featured.calLink}
                  dark
                >
                  Book a Launch Call
                </BookingButton>
              </div>
            </article>
          </Reveal>

          <div className="grid gap-6 lg:col-span-5 2xl:col-span-4">
            {secondary.map((offering, index) => (
              <Reveal key={offering.name} delay={0.14 + index * 0.08}>
                <article className="h-full rounded-[1.85rem] border border-line bg-paper p-6 shadow-[0_18px_50px_rgba(202,230,22,0.06)] sm:p-7">
                  <p className="section-label text-gold">{offering.tag}</p>
                  <h3 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-ink">
                    {offering.name}
                  </h3>
                  <p className="mt-4 leading-relaxed text-ink-mute">
                    {offering.summary}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {offering.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-ink-soft">
                        <span className="text-gold" aria-hidden="true">
                          +
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-ink-mute">
                    {offering.fit}
                  </p>

                  <div className="mt-6">
                    <BookingButton
                      namespace={offering.calNamespace}
                      link={offering.calLink}
                    >
                      Book This Call
                    </BookingButton>
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
