"use client";

import Container from "./Container";
import Reveal from "./Reveal";
import { CAL_STRATEGY } from "./CalInit";

export default function FinalCta() {
  return (
    <section className="bg-transparent py-20 text-ink sm:py-24">
      <Container>
        <div className="panel-paper relative overflow-hidden rounded-[2rem] px-6 py-10 text-ink sm:px-8 sm:py-12 lg:px-10 2xl:px-12 2xl:py-14">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-line"
          />
          <Reveal>
            <p className="section-label text-clay">Start with clarity</p>
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center 2xl:gap-10">
              <div>
                <h2 className="text-3xl font-black leading-[1.08] tracking-tight sm:text-5xl">
                  If the business feels scattered, the first step is to see the
                  system clearly.
                </h2>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-mute">
                  Book the strategy call. We will look at your offer, current
                  stack, operational drag, and what should actually happen next.
                </p>
              </div>

              <div className="rounded-[1.75rem] border border-line bg-paper-deep p-6 2xl:p-8">
                <p className="section-label text-clay">On the call</p>
                <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink-soft">
                  <li>A direct view of where the current system is leaking.</li>
                  <li>What should be fixed now versus later.</li>
                  <li>Whether a full build, modular scope, or retainer fits best.</li>
                </ul>
                <button
                  data-cal-namespace={CAL_STRATEGY.namespace}
                  data-cal-link={CAL_STRATEGY.link}
                  data-cal-config='{"layout":"month_view"}'
                  className="mt-6 rounded-full bg-gold px-6 py-3.5 text-sm font-semibold text-paper shadow-[0_0_32px_rgba(202,230,22,0.35)] transition-colors hover:bg-gold-bright"
                >
                  Book Your Strategy Call
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
