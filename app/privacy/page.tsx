import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${site.name}.`,
  path: "/privacy",
  noIndex: false,
});

export default function PrivacyPage() {
  return (
    <>
      <nav
        aria-label="Breadcrumb"
        className="mx-auto max-w-3xl px-4 pt-8 text-sm text-muted-foreground sm:px-6 lg:px-8"
      >
        <ol className="flex items-center gap-1">
          <li>
            <Link href="/" className="hover:text-foreground">Home</Link>
          </li>
          <ChevronRight aria-hidden className="h-4 w-4" />
          <li aria-current="page" className="text-foreground">Privacy Policy</li>
        </ol>
      </nav>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </header>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Overview</h2>
            <p className="mt-3">
              {site.legalName} (&quot;the Firm,&quot; &quot;we,&quot; &quot;us&quot;)
              respects your privacy. This policy describes what information we
              collect when you visit {site.url} or contact us, how we use it, and
              the choices you have. It applies to information collected through
              this website only.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Information we collect</h2>
            <p className="mt-3">
              <strong className="text-foreground">Information you provide.</strong>{" "}
              When you submit a contact form or call us, we collect the
              information you choose to share — typically name, phone number,
              email address, and a description of your potential matter.
            </p>
            <p className="mt-3">
              <strong className="text-foreground">Automatically collected.</strong>{" "}
              Standard server logs may record your IP address, browser type,
              pages visited, and timestamps. We use this information to operate
              and secure the site.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">How we use information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>To respond to your inquiry and evaluate whether we can assist you.</li>
              <li>To send communications about your matter if we agree to represent you.</li>
              <li>To operate, maintain, and improve the website.</li>
              <li>To comply with applicable law and Texas Disciplinary Rules of Professional Conduct.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Confidentiality and attorney-client relationship</h2>
            <p className="mt-3">
              Submitting information through this website does <em>not</em>{" "}
              create an attorney-client relationship. We will treat the
              information you provide as confidential, but until we have a
              signed engagement agreement we cannot guarantee the legal
              protections that attach to attorney-client communications.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Sharing of information</h2>
            <p className="mt-3">
              We do not sell your information. We share it only with service
              providers who help us operate the website and intake process
              (such as email, hosting, and CRM vendors), and as required by law
              or to enforce our rights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Cookies</h2>
            <p className="mt-3">
              The site may use cookies and similar technologies for analytics
              and to remember preferences. You can disable cookies through your
              browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Your choices</h2>
            <p className="mt-3">
              You may request access to, correction of, or deletion of personal
              information you have submitted by contacting us at{" "}
              <a href={`mailto:${site.email}`} className="text-foreground underline">
                {site.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Changes</h2>
            <p className="mt-3">
              We may update this policy from time to time. The &quot;Last updated&quot;
              date at the top reflects the most recent revision.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Contact</h2>
            <p className="mt-3">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
              <br />
              {site.telephone} · {site.email}
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
