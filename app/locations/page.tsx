import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, ChevronRight, MapPin } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";
import { locations } from "@/content/locations";

export const metadata: Metadata = buildMetadata({
  title: "Locations We Serve",
  description:
    "Motorcycle accident representation across Houston, Sugar Land, The Woodlands, Katy, Pasadena, Pearland, and Baytown.",
  path: "/locations",
});

export default function LocationsIndexPage() {
  const url = `${site.url}/locations`;
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${url}#page`,
    name: "Locations We Serve",
    url,
    isPartOf: { "@id": `${site.url}#legalservice` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: locations.map((l, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `${site.url}/locations/${l.slug}`,
        name: l.city,
      })),
    },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Locations", item: url },
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
          <li aria-current="page" className="text-foreground">Locations</li>
        </ol>
      </nav>

      <header className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Service Area
        </p>
        <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Where we represent riders.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Based in downtown Houston, we handle motorcycle cases throughout the
          Greater Houston metro and the surrounding counties. If you are hurt,
          we travel to you.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((l) => (
            <li key={l.slug}>
              <Link
                href={`/locations/${l.slug}`}
                className="group flex h-full flex-col justify-between rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/40"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground">
                    <MapPin aria-hidden className="h-3.5 w-3.5" />
                    {l.county}
                  </div>
                  <h2 className="mt-3 text-xl font-semibold tracking-tight">
                    {l.city}
                  </h2>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {l.intro}
                  </p>
                </div>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  See {l.city} page
                  <ArrowUpRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
