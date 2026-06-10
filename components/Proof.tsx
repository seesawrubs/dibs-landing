"use client";

import Reveal from "./Reveal";

const projects = [
  {
    name: "402bazaar.com",
    status: "Built and running in production",
    description:
      "A complete end to end marketplace for buying and selling everything on the internet for humans and AI agents, built on Next.js, Prisma, and Postgres. Built, Launched and Managed by digitalbusiness.studio",
  },
  {
    name: "pookiepartner",
    status: "Under Development",
    description:
      "A traditional yet modern dating and chat application built with a focus on user experience and community building.",
  }
];

export default function Proof() {
  return (
    <section id="proof" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="section-label text-gold-bright">04 — Proof</p>
          <h2 className="mt-7 max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Real systems.{" "}
            <span className="serif-accent font-normal text-gold-bright">
              Real results.
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/70">
            We don&rsquo;t just advise — we ship. These are production-grade
            apps and systems we&rsquo;ve built and operated ourselves, end to
            end.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.12}>
              <article className="group h-full rounded-2xl border border-line-dark p-8 transition-colors hover:border-gold-bright/40 sm:p-10">
                <div className="flex items-center gap-2.5">
                  <span
                    className="h-2 w-2 rounded-full bg-emerald-400"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-medium uppercase tracking-[0.18em] text-paper/50">
                    {project.status}
                  </p>
                </div>
                <h3 className="mt-6 text-2xl font-bold tracking-tight">
                  {project.name}
                </h3>
                <p className="mt-4 leading-relaxed text-paper/70">
                  {project.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
