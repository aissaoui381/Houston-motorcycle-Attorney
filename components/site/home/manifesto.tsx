"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const lines = [
  "Insurance carriers",
  "treat riders differently.",
  "We don't.",
];

const supporting = [
  "Adjusters dismiss riders as risk-takers. Defense lawyers play to juror bias. The first offer is almost always a fraction of true value.",
  "We try motorcycle cases — not personal-injury cases in general. We bring reconstructionists who understand counter-steering and braking dynamics, medical experts who can explain a 40-mph impact, and a trial posture that creates leverage long before any settlement conversation.",
];

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const lineY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="manifesto-heading"
      className="relative overflow-hidden bg-background"
    >
      <motion.div
        aria-hidden
        style={reduceMotion ? undefined : { y: lineY }}
        className="absolute left-1/2 top-0 -z-0 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent"
      />

      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:py-32">
        <h2 id="manifesto-heading" className="sr-only">
          Why a motorcycle-specific firm matters
        </h2>

        <div className="text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
          {lines.map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20% 0px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.8,
                delay: reduceMotion ? 0 : i * 0.18,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="block"
            >
              {line}
            </motion.span>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-t border-border pt-12 md:grid-cols-2 md:gap-12">
          {supporting.map((p, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : 0.1 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              {p}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
