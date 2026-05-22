"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Award, GraduationCap, Scale } from "lucide-react";
import { lawyers } from "@/content/lawyers";

const lawyer = lawyers["lead-attorney"];

export function LeadAttorney() {
  const reduceMotion = useReducedMotion();

  if (!lawyer) return null;

  return (
    <section
      aria-labelledby="lead-attorney-heading"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Meet your attorney
          </p>
          <h2
            id="lead-attorney-heading"
            className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
          >
            The lawyer you call is the lawyer who tries your case.
          </h2>
        </motion.div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 24 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: reduceMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-2xl bg-secondary lg:max-w-none">
              <Image
                src={lawyer.image}
                alt={lawyer.imageAlt}
                fill
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
              <motion.div
                aria-hidden
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 1.2, delay: 0.2 }}
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"
              />
              <motion.figcaption
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.35 }}
                className="absolute bottom-5 left-5 right-5 text-white"
              >
                <p className="text-base font-semibold">{lawyer.name}</p>
                <p className="text-xs text-white/80">{lawyer.title}</p>
              </motion.figcaption>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-2"
            >
              {lawyer.credentials.map((c) => (
                <span
                  key={c}
                  className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
                >
                  <Award aria-hidden className="h-3.5 w-3.5" />
                  {c}
                </span>
              ))}
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                {lawyer.yearsExperience}+ years
              </span>
            </motion.div>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              {lawyer.bio.map((p, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.7,
                    delay: reduceMotion ? 0 : 0.18 + i * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {p}
                </motion.p>
              ))}
            </div>

            <motion.dl
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.4 }}
              className="mt-8 grid gap-6 border-t border-border pt-8 sm:grid-cols-2"
            >
              <div>
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                  <Scale aria-hidden className="h-3.5 w-3.5" />
                  Bar admissions
                </dt>
                <dd className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {lawyer.barAdmissions.map((b) => (
                    <p key={b}>{b}</p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
                  <GraduationCap aria-hidden className="h-3.5 w-3.5" />
                  Education
                </dt>
                <dd className="mt-2 space-y-1 text-sm text-muted-foreground">
                  {lawyer.education.map((e) => (
                    <p key={`${e.degree}-${e.school}`}>
                      <span className="font-medium text-foreground">{e.degree}</span>, {e.school}
                    </p>
                  ))}
                </dd>
              </div>
            </motion.dl>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: reduceMotion ? 0 : 0.7, delay: 0.55 }}
              className="mt-10"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:underline"
              >
                Read the full firm story
                <ArrowUpRight
                  aria-hidden
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
