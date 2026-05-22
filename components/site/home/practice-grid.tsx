"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { practiceAreas } from "@/content/practice-areas";

export function PracticeGrid() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="practice-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Practice Areas
            </p>
            <h2
              id="practice-heading"
              className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              What we handle.
            </h2>
          </div>
          <Link
            href="/practice-areas"
            className="group inline-flex items-center gap-2 self-start text-sm font-medium text-foreground hover:underline"
          >
            View all practice areas
            <ArrowUpRight
              aria-hidden
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>

        <ul className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area, i) => (
            <motion.li
              key={area.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{
                duration: reduceMotion ? 0 : 0.7,
                delay: reduceMotion ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <Link
                href={`/practice-areas/${area.slug}`}
                className="group relative flex h-full flex-col justify-between overflow-hidden rounded-xl border border-border bg-background p-7 transition-colors hover:border-foreground/40"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -inset-px -z-10 rounded-xl bg-gradient-to-br from-foreground/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    0{i + 1}
                  </p>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight">
                    {area.shortTitle}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {area.lede}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Learn more
                  </span>
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all duration-300 group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
