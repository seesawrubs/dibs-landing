"use client";

import Reveal from "./Reveal";
import { useLeadModal } from "./LeadModal";

export default function FinalCta() {
  const { open } = useLeadModal();

  return (
    <section className="relative overflow-hidden bg-ink text-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-48 -left-48 h-[36rem] w-[36rem] rounded-full border border-line-dark"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-24 h-[22rem] w-[22rem] rounded-full border border-line-dark"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-28 text-center sm:px-8 sm:py-36">
        <Reveal>
          <h2 className="text-3xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            Ready to stop juggling tools and start running a{" "}
            <span className="serif-accent font-normal text-gold-bright">
              real digital business?
            </span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-paper/70">
            Book a free 30-minute strategy call. We&rsquo;ll assess your
            current setup and show you exactly how we can help.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <button
            onClick={open}
            className="mt-12 rounded-full bg-gold-bright px-10 py-4 text-base font-bold text-ink transition-all hover:bg-gold hover:shadow-xl hover:shadow-gold-bright/20"
          >
            Book Your Strategy Call
          </button>
        </Reveal>
      </div>
    </section>
  );
}
