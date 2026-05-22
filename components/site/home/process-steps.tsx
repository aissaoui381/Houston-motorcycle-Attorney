"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    n: "01",
    title: "Tell us what happened",
    body:
      "Submit your information or call. An attorney — not an intake clerk — reviews every new matter and calls you back within one business day. Free, confidential.",
  },
  {
    n: "02",
    title: "We investigate the crash",
    body:
      "We preserve evidence, pull police and 911 records, secure surveillance and bodycam footage before it's overwritten, and retain reconstruction experts where needed.",
  },
  {
    n: "03",
    title: "We build the damages model",
    body:
      "Past medical, future care, lost earning capacity, mental anguish, impairment. We work with treating doctors and life-care planners to capture the full impact — not just the ER invoice.",
  },
  {
    n: "04",
    title: "We negotiate from a trial posture",
    body:
      "Carriers settle on terms when they believe you'll try the case. We prepare every file as if it will be tried, which is why our negotiated outcomes hold up.",
  },
];

export function ProcessSteps() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 70%", "end 30%"],
  });
  const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="process-heading"
      className="border-t border-border bg-secondary/30"
    >
      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            How we work
          </p>
          <h2
            id="process-heading"
            className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            From the first call to final recovery.
          </h2>
        </motion.div>

        <ol className="relative mt-16 grid gap-12 sm:gap-16">
          <div aria-hidden className="absolute left-4 top-2 bottom-2 w-px overflow-hidden sm:left-8">
            <div className="absolute inset-0 bg-border" />
            <motion.div
              style={reduceMotion ? { scaleY: 1 } : { scaleY: lineScaleY }}
              className="absolute inset-0 origin-top bg-foreground"
            />
          </div>

          {steps.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative grid grid-cols-[auto_1fr] items-start gap-6 pl-0 sm:gap-10"
            >
              <span className="relative z-10 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-xs font-semibold sm:h-16 sm:w-16 sm:text-base">
                {s.n}
              </span>
              <div className="pt-1 sm:pt-4">
                <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                  {s.body}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
