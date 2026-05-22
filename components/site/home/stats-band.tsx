"use client";

import { useEffect, useRef } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
} from "framer-motion";
import { Briefcase, Clock3, Gavel, TrendingUp, type LucideIcon } from "lucide-react";

type Stat = {
  Icon: LucideIcon;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  sub?: string;
};

const stats: Stat[] = [
  {
    Icon: Gavel,
    value: 18,
    suffix: "+",
    label: "Years trying motorcycle cases",
    sub: "In Texas state and federal court",
  },
  {
    Icon: Briefcase,
    value: 500,
    suffix: "+",
    label: "Riders represented",
    sub: "Across Harris County and Greater Houston",
  },
  {
    Icon: TrendingUp,
    value: 100,
    suffix: "M+",
    prefix: "$",
    label: "Recovered for clients",
    sub: "Combined verdicts and settlements",
  },
  {
    Icon: Clock3,
    value: 24,
    suffix: "/7",
    label: "Intake availability",
    sub: "Talk to an attorney, not a chatbot",
  },
];

export function StatsBand() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const reduceMotion = useReducedMotion();

  return (
    <section
      ref={ref}
      aria-label="Firm by the numbers"
      className="border-y border-border bg-secondary/40"
    >
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: reduceMotion ? 0 : 0.6,
                delay: reduceMotion ? 0 : i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span
                  aria-hidden
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-background text-foreground"
                >
                  <s.Icon className="h-4 w-4" />
                </span>
                <div className="mt-4">
                  <Counter
                    to={s.value}
                    prefix={s.prefix}
                    suffix={s.suffix}
                    active={inView}
                    reduceMotion={!!reduceMotion}
                  />
                </div>
                <p className="mt-2 text-sm font-medium text-foreground">{s.label}</p>
                {s.sub && (
                  <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
                )}
              </dd>
            </motion.div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function Counter({
  to,
  prefix = "",
  suffix = "",
  active,
  reduceMotion,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  active: boolean;
  reduceMotion: boolean;
}) {
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!active) return;
    if (reduceMotion) {
      mv.set(to);
      return;
    }
    const controls = animate(mv, to, {
      duration: 1.6,
      ease: [0.22, 1, 0.36, 1],
    });
    return () => controls.stop();
  }, [active, to, reduceMotion, mv]);

  return (
    <p className="flex items-baseline gap-0.5 text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
      {prefix && <span>{prefix}</span>}
      <motion.span>{rounded}</motion.span>
      {suffix && <span>{suffix}</span>}
    </p>
  );
}
