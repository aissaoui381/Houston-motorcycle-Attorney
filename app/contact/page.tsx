import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, Clock, Mail, MapPin, Phone } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { JsonLd } from "@/components/site/json-ld";
import { ContactForm } from "@/components/site/contact-form";

const telHref = `tel:${site.telephone.replace(/[^+\d]/g, "")}`;
const mailHref = `mailto:${site.email}`;

export const metadata: Metadata = buildMetadata({
  title: "Contact a Houston Motorcycle Attorney",
  description:
    "Free, confidential consultation. Call, email, or submit your case details. An attorney will respond within one business day.",
  path: "/contact",
});

export default function ContactPage() {
  const url = `${site.url}/contact`;
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${url}#page`,
    name: "Contact",
    url,
    isPartOf: { "@id": `${site.url}#legalservice` },
    about: { "@id": `${site.url}#legalservice` },
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Contact", item: url },
    ],
  };

  return (
    <>
      <JsonLd data={contactSchema} />
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
          <li aria-current="page" className="text-foreground">Contact</li>
        </ol>
      </nav>

      <header className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Contact
        </p>
        <h1 className="mt-3 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
          Talk to a motorcycle attorney.
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
          Free, confidential consultation. Call any time — we maintain 24/7 intake
          for new injuries and fatalities. Or send your case details below and an
          attorney will respond within one business day.
        </p>
      </header>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <h2 className="sr-only">Firm contact information</h2>
            <address className="not-italic">
              <ul className="space-y-6">
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Office
                  </p>
                  <p className="mt-2 flex items-start gap-3 text-foreground">
                    <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <span>
                      {site.address.street}
                      <br />
                      {site.address.city}, {site.address.region} {site.address.postalCode}
                    </span>
                  </p>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Phone
                  </p>
                  <a
                    href={telHref}
                    className="mt-2 inline-flex items-center gap-3 text-lg font-semibold text-foreground hover:underline"
                  >
                    <Phone aria-hidden className="h-4 w-4 text-muted-foreground" />
                    <span className="tabular-nums">{site.telephone.replace("+1-", "")}</span>
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Email
                  </p>
                  <a
                    href={mailHref}
                    className="mt-2 inline-flex items-center gap-3 text-foreground hover:underline"
                  >
                    <Mail aria-hidden className="h-4 w-4 text-muted-foreground" />
                    {site.email}
                  </a>
                </li>
                <li>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Hours
                  </p>
                  <div className="mt-2 flex items-start gap-3 text-sm text-foreground">
                    <Clock aria-hidden className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                    <div>
                      <p>Monday–Friday: 8:00 AM – 6:00 PM</p>
                      <p className="text-muted-foreground">
                        Weekend &amp; after-hours intake: 24/7
                      </p>
                    </div>
                  </div>
                </li>
              </ul>
            </address>

            <div className="mt-10 rounded-xl border border-border bg-secondary/40 p-6">
              <p className="text-sm leading-relaxed text-foreground">
                <span className="font-semibold">If you are in the hospital,</span>{" "}
                we travel to you. If you are calling on behalf of an injured
                family member, we can begin work before you formally retain us.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
