"use client";

import Reveal from "./Reveal";

const projects = [
  {
    name: "Go Get Going",
    status: "Built and running in production",
    description:
      "A comprehensive life & business tracking platform with voice input, flexible data models, and accountability systems.",
  },
  {
    name: "Live SOP",
    status: "Built and running in production",
    description:
      "An operations platform that turns standard operating procedures into living, trackable workflows — so processes get followed, not forgotten.",
  },
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

        <Reveal delay={0.2}>
          <div className="mt-10 rounded-2xl border border-gold-bright/30 bg-gold-bright/[0.06] p-8 sm:flex sm:items-center sm:justify-between sm:gap-8">
            <p className="text-lg leading-relaxed text-paper/85">
              <span className="font-semibold text-gold-bright">
                Client work coming soon
              </span>{" "}
              — early partners get priority access and case study
              opportunities.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
