"use client";

import Reveal from "./Reveal";

const pillars = [
  {
    n: "01",
    title: "Strategy & Business Design",
    body: "We map your offers, audience, and revenue model before a single line of code — so everything we build serves the business.",
  },
  {
    n: "02",
    title: "Custom Mobile + Web Apps",
    body: "Production-grade apps designed around your exact workflows — not templates bent out of shape.",
  },
  {
    n: "03",
    title: "Operations, Processes & Tracking",
    body: "Systems that make the business run itself: SOPs, dashboards, and accountability loops you can actually see.",
  },
  {
    n: "04",
    title: "Monetization & Payments",
    body: "Razorpay, global gateways, subscriptions, one-time offers — money flows in cleanly from day one.",
  },
  {
    n: "05",
    title: "AI Automation & Ongoing Management",
    body: "AI-powered workflows that remove busywork, plus a partner who keeps improving the machine every month.",
  },
];

export default function Solution() {
  return (
    <section id="how-it-works" className="bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="section-label text-gold">02 — The Solution</p>
          <h2 className="mt-7 max-w-3xl text-3xl font-bold leading-tight tracking-tight text-ink sm:text-5xl">
            One studio.{" "}
            <span className="serif-accent font-normal text-gold">
              Complete
            </span>{" "}
            digital business.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal
              key={p.n}
              delay={i * 0.08}
              className={`group bg-paper p-8 transition-colors hover:bg-paper-deep sm:p-10 ${
                i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <p className="serif-accent text-2xl text-gold">{p.n}</p>
              <h3 className="mt-5 text-xl font-bold tracking-tight text-ink">
                {p.title}
              </h3>
              <p className="mt-3 leading-relaxed text-ink-mute">{p.body}</p>
            </Reveal>
          ))}
          <Reveal
            delay={0.4}
            className="flex flex-col justify-between bg-ink p-8 sm:p-10"
          >
            <p className="serif-accent text-2xl italic text-gold-bright">
              Everything, integrated.
            </p>
            <p className="mt-3 leading-relaxed text-paper/70">
              Each pillar is built to work with the others — one coherent
              system instead of five disconnected vendors.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
