"use client";

import Container from "./Container";
import Reveal from "./Reveal";
import { CAL_STRATEGY } from "./CalInit";

export default function Invitation() {
  return (
    <section className="bg-transparent py-20 sm:py-28">
      <Container>
        <div className="panel-paper relative overflow-hidden rounded-[2rem] px-8 py-12 text-center sm:px-12 sm:py-16 lg:px-16">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full border border-line"
          />

          <Reveal>
            <p className="section-label text-clay tracking-[0.3em]">Next step</p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.015em] sm:text-5xl">
              Ready to stop stitching tools together and start running one coherent system?
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-ink-mute max-w-xl mx-auto">
              Book a free strategy call. We’ll look at your offer, current stack, and exactly what should happen next — no pitch, just clarity.
            </p>

            <div className="mt-10">
              <button
                data-cal-namespace={CAL_STRATEGY.namespace}
                data-cal-link={CAL_STRATEGY.link}
                data-cal-config='{"layout":"month_view"}'
                className="rounded-full bg-gold px-9 py-4 text-base font-semibold text-paper shadow-[0_0_32px_rgba(202,230,22,0.35)] transition-all hover:bg-gold-bright hover:shadow-[0_0_48px_rgba(228,243,95,0.5)]"
              >
                Begin a conversation
              </button>
            </div>

            <p className="mt-5 text-sm text-ink-mute/70">
              No pitch. Just clarity.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
