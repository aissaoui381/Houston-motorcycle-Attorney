import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, MapPin, Phone } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";
import { ContactForm } from "@/components/site/contact-form";
import {
  getAllLocationSlugs,
  getLocation,
  type LocationPage,
} from "@/content/locations";

const telHref = `tel:${site.telephone.replace(/[^+\d]/g, "")}`;

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllLocationSlugs().map((city) => ({ city }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ city: string }> },
): Promise<Metadata> {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) return buildMetadata({ title: "Not Found", noIndex: true });

  return buildMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/locations/${loc.slug}`,
    keywords: [
      `${loc.city} motorcycle accident attorney`,
      `${loc.city} motorcycle accident lawyer`,
      `${loc.county} motorcycle injury attorney`,
    ],
  });
}

export default async function LocationPage(
  { params }: { params: Promise<{ city: string }> },
) {
  const { city } = await params;
  const loc = getLocation(city);
  if (!loc) notFound();

  return (
    <>
      <Schemas loc={loc} />

      <article>
        <nav
          aria-label="Breadcrumb"
          className="mx-auto max-w-7xl px-4 pt-8 text-sm text-muted-foreground sm:px-6 lg:px-8"
        >
          <ol className="flex items-center gap-1">
            <li>
              <Link href="/" className="hover:text-foreground">Home</Link>
            </li>
            <ChevronRight aria-hidden className="h-4 w-4" />
            <li>
              <Link href="/locations" className="hover:text-foreground">Locations</Link>
            </li>
            <ChevronRight aria-hidden className="h-4 w-4" />
            <li aria-current="page" className="text-foreground">{loc.city}</li>
          </ol>
        </nav>

        <header className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
          <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            <MapPin aria-hidden className="h-3.5 w-3.5" />
            {loc.county}
          </p>
          <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {loc.metaTitle}
          </h1>
          <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {loc.intro}
          </p>

          <ul className="mt-8 grid gap-2 text-sm text-foreground sm:grid-cols-2">
            {loc.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5">
                <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-foreground" />
                {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-semibold text-background hover:opacity-90"
            >
              Free Consultation
              <ArrowRight aria-hidden className="h-4 w-4" />
            </Link>
            <a
              href={telHref}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background px-5 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
            >
              <Phone aria-hidden className="h-4 w-4" />
              Call {site.telephone.replace("+1-", "")}
            </a>
          </div>
        </header>

        <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {loc.localContent.map((s) => (
              <div key={s.heading}>
                <h2 className="text-2xl font-semibold tracking-tight">{s.heading}</h2>
                <div className="mt-4 space-y-4 text-base leading-relaxed text-muted-foreground">
                  {s.body.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto mt-16 max-w-3xl px-4 pb-24 sm:px-6 lg:px-8">
          <ContactForm
            practiceArea={`location:${loc.slug}`}
            heading={`Talk to a ${loc.city} motorcycle attorney`}
            description={`Tell us briefly what happened. An attorney will respond within one business day.`}
          />
        </section>
      </article>
    </>
  );
}

function Schemas({ loc }: { loc: LocationPage }) {
  const url = `${site.url}/locations/${loc.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: "Motorcycle Accident Representation",
    name: loc.metaTitle,
    description: loc.metaDescription,
    url,
    provider: { "@id": `${site.url}#legalservice` },
    areaServed: { "@type": "City", name: loc.city, containedInPlace: { "@type": "AdministrativeArea", name: loc.county } },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Locations", item: `${site.url}/locations` },
      { "@type": "ListItem", position: 3, name: loc.city, item: url },
    ],
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
    </>
  );
}
