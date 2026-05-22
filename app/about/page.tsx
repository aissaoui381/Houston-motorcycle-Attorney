import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";
import { LawyerBio } from "@/components/site/lawyer-bio";
import { getLawyer } from "@/content/lawyers";

export const metadata: Metadata = buildMetadata({
  title: "About the Firm",
  description:
    "Houston Motorcycle Law represents injured riders and their families across Greater Houston. Trial-tested, rider-focused, contingency-fee representation.",
  path: "/about",
});

const values = [
  {
    title: "Riders first",
    body: "We do not take car-accident cases as a sideline. Motorcycle litigation is what we do, which is why we understand the bike, the rider, and the bias we have to overcome.",
  },
  {
    title: "Direct attorney access",
    body: "When you call, you talk to the attorney handling your case — not a case manager. We keep client volume deliberately low so that doesn't change.",
  },
  {
    title: "Built for trial",
    body: "We prepare every case as if it will be tried. Settlements that hold up are the byproduct of trial-ready preparation, not the goal.",
  },
];

export default function AboutPage() {
  const url = `${site.url}/about`;
  const lawyer = getLawyer("lead-attorney");

  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": `${url}#page`,
    name: "About",
    url,
    isPartOf: { "@id": `${site.url}#legalservice` },
    about: { "@id": `${site.url}#legalservice` },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "About", item: url },
    ],
  };

  return (
    <>
      <JsonLd data={aboutSchema} />
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
          <li aria-current="page" className="text-foreground">About</li>
        </ol>
      </nav>

      <header className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          About the Firm
        </p>
        <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          A Houston law firm built around motorcyclists.
        </h1>
        <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
          We represent injured riders and grieving families across Greater
          Houston. Our practice is narrow on purpose: motorcycle accidents,
          catastrophic injury, and wrongful death. That focus is the reason
          insurance carriers treat our files differently than they treat the
          high-volume personal-injury shops.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">What we stand for</h2>
        <ul className="mt-8 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <li
              key={v.title}
              className="rounded-xl border border-border bg-background p-6"
            >
              <h3 className="text-base font-semibold">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {v.body}
              </p>
            </li>
          ))}
        </ul>
      </section>

      {lawyer && (
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold tracking-tight">
            Lead attorney
          </h2>
          <div className="mt-8">
            <LawyerBio lawyer={lawyer} />
          </div>
        </section>
      )}
    </>
  );
}
