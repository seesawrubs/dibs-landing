"use client";

// Central GSAP entry point. Registers the plugins this site uses exactly once
// (registering inside components that re-render is wasteful — see gsap-plugins).
// Import { gsap, ScrollTrigger, SplitText, useGSAP } from "@/lib/gsap" everywhere
// so registration is guaranteed before any tween runs.
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

// GSAP only runs in the browser; guard so nothing executes during SSR.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText, useGSAP);
}

export { gsap, ScrollTrigger, SplitText, useGSAP };
