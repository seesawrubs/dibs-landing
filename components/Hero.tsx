"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { CAL_STRATEGY } from "./CalInit";
import Container from "./Container";

const operatingLayers = [
  {
    title: "Business design",
    body: "Offers, positioning, pricing, and funnels — mapped before any code.",
  },
  {
    title: "Product & platform",
    body: "Custom web and mobile experiences built around how the business runs.",
  },
  {
    title: "Payments & operations",
    body: "Revenue systems, dashboards, and internal processes wired together.",
  },
  {
    title: "Automation & growth",
    body: "AI workflows that remove repetition and compound over time.",
  },
];

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        {
          animate: "(prefers-reduced-motion: no-preference)",
          reduce: "(prefers-reduced-motion: reduce)",
        },
        (ctx) => {
          const conditions = ctx.conditions as {
            animate: boolean;
            reduce: boolean;
          };

          const rows = panelRef.current
            ? gsap.utils.toArray<HTMLElement>(
                panelRef.current.querySelectorAll("[data-row]")
              )
            : [];
          const intro = [labelRef.current, subRef.current, ctaRef.current];

          // Reduced motion: show everything, animate nothing.
          if (conditions.reduce) {
            gsap.set([...intro, panelRef.current, headlineRef.current, ...rows], {
              autoAlpha: 1,
              clearProps: "transform,filter",
            });
            return;
          }

          // Hide the pieces up front so there's no flash before the intro plays.
          gsap.set([...intro, panelRef.current, headlineRef.current], {
            autoAlpha: 0,
          });

          let split: SplitText | null = null;
          let tl: gsap.core.Timeline | null = null;

          const build = () => {
            if (!headlineRef.current) return;

            // Split into lines, each wrapped in a clipped mask for a clean reveal.
            split = SplitText.create(headlineRef.current, {
              type: "lines",
              mask: "lines",
              linesClass: "hero-line",
            });

            gsap.set(headlineRef.current, { autoAlpha: 1 });

            tl = gsap.timeline({ defaults: { ease: "power3.out" } });
            // Cyber-noir reveal: lines rise AND resolve out of a blur, like
            // neon coming into focus through haze.
            tl.from(split.lines, {
              yPercent: 116,
              filter: "blur(14px)",
              duration: 1.2,
              stagger: 0.13,
            })
              .to(labelRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.1)
              .to(subRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.7")
              .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.55")
              .to(
                panelRef.current,
                { autoAlpha: 1, y: 0, duration: 0.9 },
                "-=0.7"
              )
              .from(
                rows,
                { autoAlpha: 0, x: -10, duration: 0.55, stagger: 0.1 },
                "-=0.55"
              );
          };

          // Start from a gently lowered position for the fade-up pieces.
          gsap.set(intro, { y: 18 });
          gsap.set(panelRef.current, { y: 26 });

          // Split lines only after fonts load, otherwise line breaks can be wrong.
          if (document.fonts && document.fonts.status !== "loaded") {
            document.fonts.ready.then(build);
          } else {
            build();
          }

          // Scroll-scrubbed parallax on the atmospheric layers + the panel.
          const parallax = gsap.timeline({
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: "bottom top",
              scrub: true,
            },
          });
          parallax
            .to(glowRef.current, { yPercent: 22, ease: "none" }, 0)
            .to(gridRef.current, { yPercent: 40, autoAlpha: 0.12, ease: "none" }, 0)
            .to(panelRef.current, { yPercent: -8, ease: "none" }, 0);

          return () => {
            tl?.kill();
            split?.revert();
          };
        }
      );
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="top"
      className="noir-base scanlines relative overflow-hidden pt-[6.5rem] sm:pt-[7.5rem]"
    >
      {/* Volumetric haze — neon blooms through atmosphere */}
      <div ref={glowRef} aria-hidden="true" className="fog" />
      <div aria-hidden="true" className="fog fog-2" />

      {/* Faint technical grid, masked to fade at the edges */}
      <div
        ref={gridRef}
        aria-hidden="true"
        className="ambient-grid pointer-events-none absolute inset-x-0 top-8 h-[40rem] opacity-40"
      />

      <Container className="relative pb-16 pt-10 sm:pb-24 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center 2xl:gap-16">
          {/* Left — short, loud, cinematic headline */}
          <div>
            <p
              ref={labelRef}
              className="mono-label flex items-center gap-3 text-cyan"
            >
              <span className="pip" aria-hidden="true" />
              DIBS — Digital Business Studio
            </p>

            <h1
              ref={headlineRef}
              className="font-display mt-6 max-w-[15ch] text-[3.4rem] font-semibold leading-[0.92] tracking-[-0.02em] text-ink sm:text-7xl lg:text-[5.4rem] 2xl:text-[5.9rem]"
            >
              We build &amp; run the whole{" "}
              <span
                className="aberrate bloom-lime text-gold"
                data-text="machine"
              >
                machine
              </span>
              .
            </h1>

            <p
              ref={subRef}
              className="mt-7 max-w-[44ch] text-[15px] leading-relaxed text-ink-soft/80 sm:text-lg"
            >
              Strategy, product, payments, operations, and growth — composed as
              one coherent system. Not five separate vendors.
            </p>

            <div ref={ctaRef} className="mt-9 flex flex-wrap items-center gap-5">
              <button
                data-cal-namespace={CAL_STRATEGY.namespace}
                data-cal-link={CAL_STRATEGY.link}
                data-cal-config='{"layout":"month_view"}'
                className="group relative overflow-hidden rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold tracking-[0.01em] text-paper shadow-[0_0_28px_rgba(202,230,22,0.32)] transition-all hover:shadow-[0_0_46px_rgba(202,230,22,0.5)]"
              >
                Begin a conversation
              </button>

              <a
                href="#the-studio"
                className="font-mono-tech group inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-soft transition-colors hover:text-cyan"
              >
                <span className="text-cyan">&#10095;</span>
                <span className="border-b border-transparent pb-0.5 transition-colors group-hover:border-cyan/50">
                  the studio
                </span>
              </a>
            </div>
          </div>

          {/* Right — operating layers as a hairline HUD readout */}
          <div ref={panelRef}>
            <div className="hairline-panel hud-ticks relative rounded-2xl p-7 lg:p-8">
              <div className="flex items-center justify-between">
                <p className="mono-label text-ink-mute">Operating layers</p>
                <p className="mono-label flex items-center gap-2 text-cyan/80">
                  <span className="pip" aria-hidden="true" />
                  online
                </p>
              </div>

              <div className="mt-7 space-y-0">
                {operatingLayers.map((layer, index) => (
                  <div
                    key={index}
                    data-row
                    className="group border-t border-hairline/60 py-4 first:border-t-0 first:pt-0"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono-tech text-[11px] tabular-nums tracking-[0.15em] text-cyan/70">
                        {(index + 1).toString().padStart(2, "0")}
                      </span>
                      <p className="text-[15px] font-medium tracking-[-0.1px] text-ink transition-colors group-hover:text-gold">
                        {layer.title}
                      </p>
                    </div>
                    <p className="mt-1.5 pl-[1.9rem] text-[12.5px] leading-snug text-ink-mute">
                      {layer.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Quiet mono closer */}
        <div className="font-mono-tech mt-16 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-hairline pt-6 text-[10px] uppercase tracking-[0.22em] text-ink-mute/70 2xl:mt-20">
          <span>One studio</span>
          <span className="text-cyan/50">/</span>
          <span>Complete accountability</span>
          <span className="text-cyan/50">/</span>
          <span>Built to run</span>
        </div>
      </Container>
    </section>
  );
}
