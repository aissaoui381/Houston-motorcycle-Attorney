"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

const telHref = `tel:${site.telephone.replace(/[^+\d]/g, "")}`;

export function ClosingCta() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="closing-cta-heading"
      className="relative isolate overflow-hidden border-t border-border bg-foreground text-background"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: reduceMotion ? 0 : 1.2 }}
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,_rgba(255,255,255,0.08),_transparent_55%),radial-gradient(circle_at_85%_80%,_rgba(255,255,255,0.05),_transparent_50%)]"
      />

      <div className="mx-auto max-w-5xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-xs font-semibold uppercase tracking-[0.18em] text-background/70"
        >
          Talk to a motorcycle attorney
        </motion.p>

        <motion.h2
          id="closing-cta-heading"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
        >
          Your case deserves more
          <span className="block text-background/70">than a settlement mill.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.18 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-background/80 sm:text-lg"
        >
          Free consultation. No fee unless we recover for you. Available 24/7
          for new injuries and fatalities anywhere in the Houston area.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.7, delay: reduceMotion ? 0 : 0.26 }}
          className="mt-12 flex flex-col gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-md bg-background px-7 py-4 text-sm font-semibold text-foreground transition-opacity hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-background"
          >
            Start your free consultation
            <ArrowRight
              aria-hidden
              className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            />
          </Link>
          <a
            href={telHref}
            className="inline-flex items-center justify-center gap-2 rounded-md border border-background/30 bg-transparent px-7 py-4 text-sm font-semibold text-background transition-colors hover:bg-background/10"
          >
            <Phone aria-hidden className="h-4 w-4" />
            Call {site.telephone.replace("+1-", "")}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
