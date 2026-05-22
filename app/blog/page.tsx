import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";

export const metadata: Metadata = buildMetadata({
  title: "Motorcycle Law Library",
  description:
    "Texas-specific guides on motorcycle accident claims, insurance, helmet law, and comparative fault — written for Houston-area riders.",
  path: "/blog",
});

const plannedPosts = [
  {
    slug: "what-to-do-after-motorcycle-accident-houston",
    title: "What to Do After a Motorcycle Accident in Houston: A Rider's Step-by-Step Guide",
    summary:
      "Practical, sequenced guide for riders in the first 72 hours after a crash — scene, police report, medical care, insurance, and when to call counsel.",
    eyebrow: "After the crash",
  },
  {
    slug: "texas-motorcycle-insurance-laws",
    title: "Insurance Laws Every Texas Motorcyclist Should Understand (Before a Crash)",
    summary:
      "Liability minimums, uninsured/underinsured motorist coverage, PIP, MedPay, and how carriers value motorcycle claims differently than car claims.",
    eyebrow: "Insurance",
  },
  {
    slug: "texas-motorcycle-helmet-law",
    title: "Texas Motorcycle Helmet Law Explained: Who's Exempt and What It Means for Your Claim",
    summary:
      "§661.003, the 21-and-older exemption, the medical-coverage requirement, and how defense lawyers try to use helmet status against injured riders.",
    eyebrow: "Texas law",
  },
  {
    slug: "comparative-fault-texas-motorcycle",
    title: "Comparative Fault in Texas Motorcycle Cases: The 51% Rule",
    summary:
      "How Texas's modified comparative-fault rule works in practice, with worked examples at 10%, 30%, and 51% fault — and how reconstructionists rebut the standard defense arguments.",
    eyebrow: "Texas law",
  },
  {
    slug: "houston-motorcycle-accident-settlement-value",
    title: "What's a Houston Motorcycle Accident Case Actually Worth?",
    summary:
      "Realistic look at how Texas damages are calculated and why the first carrier offer is almost always a fraction of true value.",
    eyebrow: "Case value",
  },
  {
    slug: "dangerous-roads-motorcycles-houston",
    title: "Houston's Most Dangerous Roads for Motorcyclists",
    summary:
      "Data-driven look at where Houston-area motorcycle crashes cluster: the 610 Loop, I-45, I-10, Beltway 8 frontage roads, and the intersections that keep producing left-turn collisions.",
    eyebrow: "Houston safety",
  },
];

export default function BlogIndexPage() {
  const url = `${site.url}/blog`;
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": `${url}#blog`,
    name: "Houston Motorcycle Law — Library",
    url,
    publisher: { "@id": `${site.url}#legalservice` },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: url },
    ],
  };

  return (
    <>
      <JsonLd data={blogSchema} />
      <JsonLd data={breadcrumbSchema} />

      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-7xl px-4 pt-8 text-sm text-muted-foreground sm:px-6 lg:px-8"
      >
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-foreground">Home</Link>
          </li>
          <ChevronRight aria-hidden className="h-4 w-4" />
          <li aria-current="page" className="text-foreground">Blog</li>
        </ol>
      </nav>

      <header className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Library
        </p>
        <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Texas motorcycle law, explained for riders.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          We are building a library of Houston- and Texas-specific resources for
          motorcyclists. Below is what is on deck — each will be published with
          a treating-attorney byline and Texas case citations.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <Clock aria-hidden className="h-3.5 w-3.5" />
          Coming soon — articles publishing throughout the year
        </p>
        <ul className="grid gap-4 md:grid-cols-2">
          {plannedPosts.map((p) => (
            <li
              key={p.slug}
              className="rounded-xl border border-border bg-background p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {p.eyebrow}
              </p>
              <h2 className="mt-3 text-lg font-semibold tracking-tight text-foreground">
                {p.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
