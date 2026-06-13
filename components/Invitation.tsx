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
            <p className="section-label text-clay tracking-[0.3em]">An invitation</p>

            <h2 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-[-0.015em] sm:text-5xl">
              If the way we think about building and running digital businesses resonates, the most natural next step is a conversation.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-ink-mute max-w-xl mx-auto">
              We’ll look at what you’re building, the system you have today, and whether there’s a natural fit for a true operating partnership.
            </p>

            <div className="mt-10">
              <button
                data-cal-namespace={CAL_STRATEGY.namespace}
                data-cal-link={CAL_STRATEGY.link}
                data-cal-config='{"layout":"month_view"}'
                className="rounded-full bg-gold px-9 py-4 text-base font-semibold text-paper shadow-[0_0_32px_rgba(0,232,123,0.35)] transition-all hover:bg-gold-bright hover:shadow-[0_0_48px_rgba(102,255,176,0.5)]"
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
