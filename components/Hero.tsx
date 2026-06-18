"use client";

import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";
import { CAL_STRATEGY } from "./CalInit";
import Container from "./Container";

const operatingLayers = [
  {
    title: "Business design",
    body: "Offers, positioning, pricing, and funnels mapped before any code.",
  },
  {
    title: "Product & platform",
    body: "Custom web and mobile experiences built around how the business actually runs.",
  },
  {
    title: "Payments & operations",
    body: "Revenue systems, dashboards, and internal processes wired together.",
  },
  {
    title: "Automation & growth",
    body: "AI workflows that remove repetition and compound performance over time.",
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
              clearProps: "transform",
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
            tl.from(split.lines, {
              yPercent: 118,
              duration: 1.1,
              stagger: 0.12,
            })
              .to(labelRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, 0.15)
              .to(subRef.current, { autoAlpha: 1, y: 0, duration: 0.8 }, "-=0.65")
              .to(ctaRef.current, { autoAlpha: 1, y: 0, duration: 0.7 }, "-=0.55")
              .to(
                panelRef.current,
                { autoAlpha: 1, y: 0, duration: 0.9 },
                "-=0.7"
              )
              .from(
                rows,
                { autoAlpha: 0, y: 14, duration: 0.6, stagger: 0.09 },
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
            .to(glowRef.current, { yPercent: 24, ease: "none" }, 0)
            .to(gridRef.current, { yPercent: 38, autoAlpha: 0.15, ease: "none" }, 0)
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
      className="relative overflow-hidden pt-[6.5rem] sm:pt-[7.5rem]"
    >
      {/* Atmospheric foundation — kept and made more cinematic */}
      <div
        ref={glowRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-14 h-[42rem] bg-[radial-gradient(circle_at_top,_rgba(202,230,22,0.13),_transparent_48%)]"
      />
      <div
        ref={gridRef}
        aria-hidden="true"
        className="ambient-grid pointer-events-none absolute inset-x-0 top-8 h-[40rem] opacity-50"
      />

      <Container className="pb-16 pt-10 sm:pb-24 sm:pt-14">
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center 2xl:gap-16">
          {/* Left — confident, editorial headline */}
          <div>
            <p
              ref={labelRef}
              className="section-label text-clay tracking-[0.28em]"
            >
              A studio for complete digital businesses
            </p>

            <h1
              ref={headlineRef}
              className="mt-5 max-w-[18ch] text-[3.1rem] font-semibold leading-[0.95] tracking-[-0.025em] text-ink sm:text-7xl lg:text-[5.75rem] 2xl:text-[6.1rem]"
            >
              We design and run the operating systems behind exceptional digital businesses.
            </h1>

            <p
              ref={subRef}
              className="mt-6 max-w-[42ch] text-[15px] leading-relaxed text-ink-mute sm:text-lg"
            >
              Strategy, product, payments, operations, and growth — composed as one coherent system rather than five separate vendors.
            </p>

            <div ref={ctaRef} className="mt-9">
              <button
                data-cal-namespace={CAL_STRATEGY.namespace}
                data-cal-link={CAL_STRATEGY.link}
                data-cal-config='{"layout":"month_view"}'
                className="rounded-full bg-gold px-8 py-3.5 text-[13px] font-semibold tracking-[0.01em] text-paper shadow-[0_0_28px_rgba(202,230,22,0.32)] transition-all hover:bg-gold-bright hover:shadow-[0_0_42px_rgba(228,243,95,0.45)]"
              >
                Begin a conversation
              </button>

              <a
                href="#the-studio"
                className="ml-5 inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-ink"
              >
                The studio
                <span className="text-gold">→</span>
              </a>
            </div>
          </div>

          {/* Right — quiet, elegant operating layers in a card treatment */}
          <div ref={panelRef}>
            <div className="panel-dark rounded-[1.75rem] border border-line-dark p-8 text-ink/90 lg:p-9">
              <p className="section-label text-clay">What we compose as one</p>

              <div className="mt-6 space-y-6">
                {operatingLayers.map((layer, index) => (
                  <div key={index} data-row className="group">
                    <div className="flex items-baseline gap-3">
                      <span className="text-gold/90 text-sm tabular-nums tracking-[3px]">{(index + 1).toString().padStart(2, "0")}</span>
                      <p className="text-[15px] font-medium tracking-[-0.1px] text-ink group-hover:text-gold transition-colors">
                        {layer.title}
                      </p>
                    </div>
                    <p className="mt-1.5 pl-[2.35rem] text-[13px] leading-snug text-ink-mute">
                      {layer.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Very light, confident closer — removed the old "modes" and friction chips for air */}
        <div className="mt-16 border-t border-line pt-6 text-xs text-ink-mute/70 2xl:mt-20">
          One studio. Complete accountability. Built to run.
        </div>
      </Container>
    </section>
  );
}
