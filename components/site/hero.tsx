"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { site } from "@/lib/site";

const telHref = `tel:${site.telephone.replace(/[^+\d]/g, "")}`;

type HeroProps = {
  videoSrc?: string;
  posterSrc?: string;
  eyebrow?: string;
  headline?: string;
  subheadline?: string;
};

export function Hero({
  videoSrc = "/hero.mp4",
  posterSrc = "/hero-poster.jpg",
  eyebrow = "Trial-tested. Rider-focused.",
  headline = "Houston Motorcycle Accident Attorneys",
  subheadline = "We represent injured riders and grieving families across Harris County and Greater Houston. No fee unless we recover for you.",
}: HeroProps) {
  const reduceMotion = useReducedMotion();

  const container = {
    hidden: {},
    show: {
      transition: {
        delayChildren: reduceMotion ? 0 : 0.15,
        staggerChildren: reduceMotion ? 0 : 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-[calc(100svh-4rem)] w-full items-center overflow-hidden bg-black text-white"
    >
      <div aria-hidden className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={posterSrc}
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.45)_75%)]" />
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={item}
            className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70"
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            id="hero-heading"
            variants={item}
            className="mt-5 text-balance text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {headline}
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-white/80 sm:text-lg"
          >
            {subheadline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-white px-6 py-3.5 text-sm font-semibold text-black shadow-sm transition-all hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Free Consultation
              <ArrowRight
                aria-hidden
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
              />
            </Link>
            <a
              href={telHref}
              aria-label={`Call ${site.name} now at ${site.telephone}`}
              className="group inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              <Phone aria-hidden className="h-4 w-4" />
              Call Now
              <span className="tabular-nums text-white/70">
                {site.telephone.replace("+1-", "")}
              </span>
            </a>
          </motion.div>

          <motion.p
            variants={item}
            className="mt-8 text-xs text-white/60"
          >
            Available 24/7 · Free case review · Contingency fee
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
