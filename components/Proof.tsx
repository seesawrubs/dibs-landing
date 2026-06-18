"use client";

import Container from "./Container";
import Reveal from "./Reveal";

const projects = [
  {
    name: "402bazaar.com",
    status: "Built and running in production",
    description:
      "An end-to-end marketplace for buying and selling online for both humans and AI agents, built, launched, and managed by Digital Business Studio.",
    stack: ["Next.js", "Prisma", "Postgres", "Marketplace flows"],
    featured: true,
  },
  {
    name: "pookiepartner",
    status: "Under development",
    description:
      "A dating and chat application designed around a traditional but modern product experience with strong community considerations.",
    stack: ["Product UX", "Mobile-first", "Community systems"],
    featured: false,
  },
];

export default function Proof() {
  const featured = projects.find((project) => project.featured)!;
  const secondary = projects.find((project) => !project.featured)!;

  return (
    <section id="work" className="bg-transparent">
      <Container className="py-16 sm:py-24">
        <Reveal>
          <p className="section-label text-gold">Work</p>
          <h2 className="mt-6 max-w-3xl text-3xl font-semibold tracking-[-0.01em] leading-none text-ink sm:text-5xl">
            Systems we’ve shaped and continue to run.
          </h2>
          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-ink-mute">
            Real products and platforms we’ve built, launched, and operated as one studio.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 2xl:gap-8">
          <Reveal delay={0.08} className="lg:col-span-7">
            <article className="panel-dark h-full rounded-[2rem] p-7 text-ink sm:p-9 2xl:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="h-2.5 w-2.5 rounded-full bg-gold shadow-[0_0_12px_rgba(202,230,22,0.8)]" />
                <p className="section-label text-clay">
                  {featured.status}
                </p>
              </div>
              <h3 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                {featured.name}
              </h3>
              <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/74">
                {featured.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {featured.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line-dark px-3.5 py-2 text-sm text-ink/78"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.16} className="lg:col-span-5">
            <article className="h-full rounded-[2rem] border border-line bg-paper p-7 shadow-[0_18px_50px_rgba(202,230,22,0.06)] sm:p-8 2xl:p-9">
              <p className="section-label text-gold">{secondary.status}</p>
              <h3 className="mt-5 text-3xl font-bold tracking-tight text-ink">
                {secondary.name}
              </h3>
              <p className="mt-5 leading-relaxed text-ink-mute">
                {secondary.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {secondary.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-paper-deep px-3.5 py-2 text-sm text-ink-soft"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
