import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";

import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";
import { ContactForm } from "@/components/site/contact-form";
import { LawyerBio } from "@/components/site/lawyer-bio";
import { getLawyer } from "@/content/lawyers";
import {
  getAllPracticeAreaSlugs,
  getPracticeArea,
  practiceAreas,
  type PracticeArea,
} from "@/content/practice-areas";

const telHref = `tel:${site.telephone.replace(/[^+\d]/g, "")}`;

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllPracticeAreaSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
): Promise<Metadata> {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) return buildMetadata({ title: "Not Found", noIndex: true });

  return buildMetadata({
    title: area.metaTitle,
    description: area.metaDescription,
    path: `/practice-areas/${area.slug}`,
    keywords: [
      `${area.shortTitle} attorney Houston`,
      `${area.shortTitle} lawyer Houston`,
      "Houston motorcycle accident",
      "Texas motorcycle injury",
    ],
  });
}

export default async function PracticeAreaPage(
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params;
  const area = getPracticeArea(slug);
  if (!area) notFound();

  const lawyer = getLawyer(area.attorneySlug);

  return (
    <>
      <PageSchemas area={area} />

      <article>
        <Breadcrumbs area={area} />
        <Header area={area} />
        <Sections area={area} />
        {area.commonInjuries && <CommonInjuries items={area.commonInjuries} />}
        {area.texasLawNotes && <TexasLawNotes items={area.texasLawNotes} />}

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <FaqList area={area} />
              {lawyer && (
                <div className="mt-16">
                  <LawyerBio lawyer={lawyer} />
                </div>
              )}
            </div>
            <aside className="lg:col-span-5 lg:sticky lg:top-24">
              <ContactForm
                practiceArea={area.slug}
                heading="Discuss your case confidentially"
                description={`Tell us about your ${area.shortTitle.toLowerCase()} matter. An attorney will respond within one business day.`}
              />
            </aside>
          </div>
        </section>

        <RelatedAreas currentSlug={area.slug} />
      </article>
    </>
  );
}

function Breadcrumbs({ area }: { area: PracticeArea }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="mx-auto max-w-7xl px-4 pt-8 text-sm text-muted-foreground sm:px-6 lg:px-8"
    >
      <ol className="flex flex-wrap items-center gap-1">
        <li>
          <Link href="/" className="hover:text-foreground">Home</Link>
        </li>
        <ChevronRight aria-hidden className="h-4 w-4" />
        <li>
          <Link href="/practice-areas" className="hover:text-foreground">Practice Areas</Link>
        </li>
        <ChevronRight aria-hidden className="h-4 w-4" />
        <li aria-current="page" className="text-foreground">{area.shortTitle}</li>
      </ol>
    </nav>
  );
}

function Header({ area }: { area: PracticeArea }) {
  return (
    <header className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {area.eyebrow}
      </p>
      <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
        {area.title}
      </h1>
      <p className="mt-6 max-w-3xl text-pretty text-lg leading-relaxed text-muted-foreground">
        {area.lede}
      </p>

      <ul className="mt-8 grid gap-2 text-sm text-foreground sm:grid-cols-2">
        {area.highlights.map((h) => (
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
  );
}

function Sections({ area }: { area: PracticeArea }) {
  return (
    <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
      <div className="space-y-12">
        {area.sections.map((s) => (
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
  );
}

function CommonInjuries({ items }: { items: string[] }) {
  return (
    <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold tracking-tight">Common injuries we handle</h2>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {items.map((i) => (
          <li
            key={i}
            className="rounded-md border border-border bg-background px-4 py-3 text-sm text-foreground"
          >
            {i}
          </li>
        ))}
      </ul>
    </section>
  );
}

function TexasLawNotes({ items }: { items: string[] }) {
  return (
    <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-semibold tracking-tight">Texas law you should know</h2>
      <ol className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
        {items.map((n, i) => (
          <li key={i} className="flex gap-4">
            <span
              aria-hidden
              className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-foreground"
            >
              {i + 1}
            </span>
            <span>{n}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function FaqList({ area }: { area: PracticeArea }) {
  return (
    <section aria-labelledby={`faq-${area.slug}`}>
      <h2 id={`faq-${area.slug}`} className="text-2xl font-semibold tracking-tight">
        Frequently asked questions
      </h2>
      <div className="mt-6 divide-y divide-border rounded-xl border border-border bg-background">
        {area.faqs.map((f) => (
          <details key={f.question} className="group px-5 py-4 sm:px-6">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-base font-medium text-foreground">
              <span>{f.question}</span>
              <ChevronRight
                aria-hidden
                className="mt-1 h-4 w-4 shrink-0 transition-transform group-open:rotate-90"
              />
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

function RelatedAreas({ currentSlug }: { currentSlug: string }) {
  const others = practiceAreas.filter((p) => p.slug !== currentSlug).slice(0, 3);
  if (others.length === 0) return null;

  return (
    <section className="border-t border-border bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold tracking-tight">Related practice areas</h2>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((o) => (
            <li key={o.slug}>
              <Link
                href={`/practice-areas/${o.slug}`}
                className="group block h-full rounded-xl border border-border bg-background p-6 transition-colors hover:border-foreground/30"
              >
                <h3 className="text-base font-semibold tracking-tight">{o.shortTitle}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{o.lede}</p>
                <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground">
                  Learn more
                  <ArrowRight
                    aria-hidden
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  />
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function PageSchemas({ area }: { area: PracticeArea }) {
  const url = `${site.url}/practice-areas/${area.slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    serviceType: area.shortTitle,
    name: area.title,
    description: area.metaDescription,
    url,
    provider: { "@id": `${site.url}#legalservice` },
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Practice Areas",
        item: `${site.url}/practice-areas`,
      },
      { "@type": "ListItem", position: 3, name: area.shortTitle, item: url },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: area.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
    </>
  );
}
