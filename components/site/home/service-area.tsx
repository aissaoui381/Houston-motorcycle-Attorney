"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin } from "lucide-react";
import { site } from "@/lib/site";

export function ServiceArea() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="service-area-heading"
      className="border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ duration: reduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Service area
            </p>
            <h2
              id="service-area-heading"
              className="mt-3 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            >
              Riders we represent — across Greater Houston.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Based in downtown Houston, we handle motorcycle accident matters
              throughout Harris County and the surrounding region. If you&apos;re
              hurt, we come to you.
            </p>
            <p className="mt-8 text-sm text-foreground">
              <span className="font-semibold">{site.address.street}</span>
              <br />
              <span className="text-muted-foreground">
                {site.address.city}, {site.address.region} {site.address.postalCode}
              </span>
            </p>
          </motion.div>

          <div className="lg:col-span-7">
            <ul className="flex flex-wrap gap-3">
              {site.areaServed.map((city, i) => (
                <motion.li
                  key={city}
                  initial={{ opacity: 0, scale: 0.92 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-10% 0px" }}
                  transition={{
                    duration: reduceMotion ? 0 : 0.5,
                    delay: reduceMotion ? 0 : i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
                >
                  <MapPin aria-hidden className="h-3.5 w-3.5 text-muted-foreground" />
                  {city}
                </motion.li>
              ))}
            </ul>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: reduceMotion ? 0 : 0.8, delay: reduceMotion ? 0 : 0.5 }}
              className="mt-10 text-xs text-muted-foreground"
            >
              Not on the list? Call us. We routinely handle cases from across
              East and Southeast Texas.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
