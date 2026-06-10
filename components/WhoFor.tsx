"use client";

import Reveal from "./Reveal";

const audiences = [
  {
    title: "Creators",
    body: "Ready to productize their knowledge into courses, communities, and digital products.",
  },
  {
    title: "Coaches",
    body: "Wanting their own platform instead of relying on third-party tools they don't control.",
  },
  {
    title: "Founders",
    body: "Building digital-first businesses and want the whole stack done right, from day one.",
  },
  {
    title: "The tired-of-juggling",
    body: "Done with fragmented tools and five vendors — they want one accountable partner.",
  },
];

export default function WhoFor() {
  return (
    <section className="bg-paper-deep">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="section-label text-gold">06 — Who This Is For</p>
          <h2 className="mt-7 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            Made for people who&rsquo;d rather{" "}
            <span className="serif-accent font-normal text-gold">build</span>{" "}
            than babysit tools
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2">
          {audiences.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.08}>
              <div className="border-t-2 border-ink pt-6">
                <h3 className="text-xl font-bold tracking-tight text-ink">
                  {a.title}
                </h3>
                <p className="mt-3 max-w-md leading-relaxed text-ink-mute">
                  {a.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
