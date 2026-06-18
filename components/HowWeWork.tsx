"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import Container from "./Container";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Discovery & direction",
    body: "We examine the business model, audience, current setup, and real friction. If the fit isn’t right, we say so early.",
  },
  {
    n: "02",
    title: "Scope & roadmap",
    body: "You receive a clear point of view, timeline, and recommendation on what should be built now versus later — and why.",
  },
  {
    n: "03",
    title: "Build as one system",
    body: "Product, payments, operational systems, and automation are developed together with regular, transparent feedback.",
  },
  {
    n: "04",
    title: "Launch & ownership transfer",
    body: "We ship, document, and train so the business can be run confidently once we hand it over.",
  },
  {
    n: "05",
    title: "Operate & improve (optional)",
    body: "Many partners ask us to stay on as the ongoing operator — tightening the system as the business grows.",
  },
];

export default function HowWeWork() {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop: pin the region and scrub the card track horizontally as you scroll.
      mm.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
          const track = trackRef.current;
          const pin = pinRef.current;
          if (!track || !pin) return;

          // ease: "none" is required for scroll position and x to stay 1:1.
          const distance = () => track.scrollWidth - window.innerWidth;

          const tween = gsap.to(track, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: pin,
              start: "top top",
              end: () => "+=" + distance(),
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Thin progress bar tied to the same horizontal travel.
          if (progressRef.current) {
            gsap.fromTo(
              progressRef.current,
              { scaleX: 0 },
              {
                scaleX: 1,
                ease: "none",
                scrollTrigger: {
                  trigger: pin,
                  start: "top top",
                  end: () => "+=" + distance(),
                  scrub: true,
                },
              }
            );
          }

          return () => {
            tween.kill();
          };
        }
      );

      // Mobile/tablet: simple staggered fade-up for the stacked cards.
      mm.add(
        "(max-width: 1023px) and (prefers-reduced-motion: no-preference)",
        () => {
          const cards = gsap.utils.toArray<HTMLElement>(
            trackRef.current?.querySelectorAll("[data-step]") ?? []
          );
          const batch = ScrollTrigger.batch(cards, {
            start: "top 85%",
            onEnter: (els) =>
              gsap.to(els, {
                autoAlpha: 1,
                y: 0,
                duration: 0.7,
                ease: "power3.out",
                stagger: 0.1,
                overwrite: true,
              }),
          });
          gsap.set(cards, { autoAlpha: 0, y: 28 });

          return () => batch.forEach((st) => st.kill());
        }
      );
    },
    { scope: pinRef }
  );

  return (
    <section
      id="approach"
      className="relative overflow-hidden bg-paper-deep/60 text-ink"
    >
      <div
        aria-hidden="true"
        className="ambient-grid-dark pointer-events-none absolute inset-0 opacity-60"
      />

      <div
        ref={pinRef}
        className="relative flex flex-col justify-center lg:h-screen"
      >
        <Container className="pt-20 sm:pt-28 lg:pt-0 lg:pb-10">
          <Reveal>
            <p className="section-label text-clay">How we work</p>
            <h2 className="mt-5 max-w-[16ch] text-4xl font-semibold tracking-[-0.015em] leading-[0.98] sm:text-5xl lg:text-6xl">
              Clear steps. No mystery handoffs.
            </h2>
            <p className="mt-5 max-w-[44ch] text-[14px] leading-relaxed text-ink-mute">
              We keep the process transparent so strategy, craft, and speed stay
              aligned from the first conversation onward. On desktop, scroll to
              move through the sequence.
            </p>
          </Reveal>

          {/* Progress rail (desktop horizontal scrub) */}
          <div className="mt-8 hidden h-px w-40 overflow-hidden rounded-full bg-line lg:block">
            <div
              ref={progressRef}
              className="h-full w-full origin-left bg-gold shadow-[0_0_12px_rgba(0,232,123,0.7)]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
        </Container>

        {/* Card track: vertical stack on mobile, horizontal scrub track on desktop */}
        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex flex-col gap-4 px-5 pb-20 sm:px-8 lg:flex-row lg:flex-nowrap lg:gap-7 lg:px-12 lg:pb-0 lg:pt-10 2xl:px-16"
          >
            {steps.map((step) => (
              <article
                key={step.n}
                data-step
                className="panel-dark relative rounded-[1.75rem] border border-line-dark p-7 sm:p-8 lg:flex lg:w-[24rem] lg:shrink-0 lg:flex-col lg:p-9"
              >
                <span className="font-mono text-sm tracking-[4px] text-gold/80">
                  {step.n}
                </span>
                <h3 className="mt-4 text-[17px] font-medium tracking-[-0.1px] text-ink lg:text-xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-[13px] leading-relaxed text-ink-mute lg:mt-4 lg:text-sm">
                  {step.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>

      {/* Light narrative on engagement shapes (no hard tiers or per-card CTAs) */}
      <Container className="pb-20 sm:pb-28">
        <div className="rounded-[1.5rem] border border-line bg-paper/60 p-8 text-[13px] leading-relaxed text-ink-mute">
          Engagements tend to take three natural shapes: a full launch
          partnership that gets the first complete version built properly, an
          ongoing operator relationship that keeps the system improving, or more
          focused, surgical work on a specific layer. The right shape always
          emerges from the first conversation.
        </div>
      </Container>
    </section>
  );
}
