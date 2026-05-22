import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { site } from "@/lib/site";

const telHref = `tel:${site.telephone.replace(/[^+\d]/g, "")}`;
const mailHref = `mailto:${site.email}`;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="flex items-center gap-2 text-base font-semibold">
              <span aria-hidden className="inline-block h-7 w-7 rounded-sm bg-foreground" />
              <span>{site.name}</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {site.description}
            </p>

            <address className="mt-6 not-italic">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-3 text-muted-foreground">
                  <MapPin aria-hidden className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.region} {site.address.postalCode}
                  </span>
                </li>
                <li>
                  <a
                    href={telHref}
                    className="inline-flex items-center gap-3 text-foreground hover:underline"
                  >
                    <Phone aria-hidden className="h-4 w-4" />
                    <span className="tabular-nums">{site.telephone.replace("+1-", "")}</span>
                  </a>
                </li>
                <li>
                  <a
                    href={mailHref}
                    className="inline-flex items-center gap-3 text-foreground hover:underline"
                  >
                    <Mail aria-hidden className="h-4 w-4" />
                    <span>{site.email}</span>
                  </a>
                </li>
              </ul>
            </address>
          </div>

          <nav aria-label="Footer" className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Practice Areas
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {site.practiceAreasPreview.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/practice-areas"
                    className="font-medium text-foreground hover:underline"
                  >
                    View all →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Locations
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                {site.locationsPreview.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/locations"
                    className="font-medium text-foreground hover:underline"
                  >
                    View all →
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-foreground">
                Firm
              </h2>
              <ul className="mt-4 space-y-3 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/disclaimer"
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    Legal Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p className="max-w-2xl text-balance sm:text-right">
            Attorney advertising. Prior results do not guarantee a similar outcome. The information
            on this website is for general information purposes only and is not legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
