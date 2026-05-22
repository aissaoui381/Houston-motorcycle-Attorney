import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";
import { practiceAreas } from "@/content/practice-areas";

export const metadata: Metadata = buildMetadata({
  title: "Practice Areas",
  description:
    "Motorcycle accident, wrongful death, and catastrophic injury practice areas — Houston Motorcycle Law.",
  path: "/practice-areas",
});

export default function PracticeAreasIndexPage() {
  const url = `${site.url}/practice-areas`;
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#page`,
    name: "Practice Areas",
    url,
    isPartOf: { "@id": `${site.url}#legalservice` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: practiceAreas.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${site.url}/practice-areas/${p.slug}`,
        name: p.shortTitle,
      })),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Practice Areas", item: url },
    ],
  };

  return (
    <>
      <JsonLd data={collectionSchema} />
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
          <li aria-current="page" className="text-foreground">Practice Areas</li>
        </ol>
      </nav>

      <header className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Practice Areas
        </p>
        <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          What we handle.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          We represent motorcyclists and their families across Greater Houston in
          catastrophic-injury, wrongful-death, and complex liability matters. Each
          practice area below links to detailed Texas-specific information.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((p, i) => (
            <li key={p.slug}>
              <Link
                href={`/practice-areas/${p.slug}`}
                className="group relative flex h-full flex-col justify-between rounded-xl border border-border bg-background p-7 transition-colors hover:border-foreground/40"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    0{i + 1}
                  </p>
                  <h2 className="mt-4 text-xl font-semibold tracking-tight">
                    {p.shortTitle}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.lede}
                  </p>
                </div>
                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-medium text-foreground">
                    Read more
                  </span>
                  <span
                    aria-hidden
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border transition-all group-hover:border-foreground group-hover:bg-foreground group-hover:text-background"
                  >
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
