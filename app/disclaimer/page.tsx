import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = buildMetadata({
  title: "Legal Disclaimer",
  description: `Legal disclaimer and attorney advertising notice for ${site.name}.`,
  path: "/disclaimer",
});

export default function DisclaimerPage() {
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
          <li aria-current="page" className="text-foreground">Legal Disclaimer</li>
        </ol>
      </nav>

      <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <header>
          <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
            Legal Disclaimer
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">
            Attorney advertising under Tex. Disciplinary R. Prof. Conduct 7.01–7.05
          </p>
        </header>

        <div className="mt-12 space-y-10 text-base leading-relaxed text-muted-foreground">
          <section>
            <h2 className="text-xl font-semibold text-foreground">Not legal advice</h2>
            <p className="mt-3">
              The information on this website is provided by {site.legalName}{" "}
              for general informational purposes only and does not constitute
              legal advice. Reading this site, sending us an email, or
              submitting a contact form does not create an attorney-client
              relationship. You should not act or refrain from acting on the
              basis of anything on this site without seeking advice from a
              licensed attorney about your specific situation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">No guarantee of outcome</h2>
            <p className="mt-3">
              Prior results do not guarantee a similar outcome. Every case is
              different, and the facts and law applicable to your matter will
              determine its outcome. References to verdicts, settlements, or
              other recoveries describe past results and are not a promise of
              what we can achieve in any particular case.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Jurisdiction</h2>
            <p className="mt-3">
              {site.legalName} is licensed to practice law in the State of
              Texas. The Firm&apos;s attorneys may be admitted to practice in
              additional courts and jurisdictions as listed on individual
              attorney biographies. This website is intended for residents of
              Texas and persons whose legal matters arise in Texas; nothing on
              this site is intended to solicit clients in jurisdictions where
              the Firm is not authorized to practice.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Confidentiality of inquiries</h2>
            <p className="mt-3">
              Do not send confidential or time-sensitive information through
              this website. Until we have agreed to represent you and you have
              signed a written engagement agreement, communications you send
              are not protected by the attorney-client privilege.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Responsible attorney</h2>
            <p className="mt-3">
              The attorney responsible for this website&apos;s content is the
              firm&apos;s managing attorney, whose office is located at the
              address below.
            </p>
            <p className="mt-3">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.city}, {site.address.region} {site.address.postalCode}
              <br />
              {site.telephone}
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">Contingency-fee representation</h2>
            <p className="mt-3">
              The Firm offers contingency-fee representation in personal injury
              and wrongful-death matters. There is no attorney fee unless we
              recover compensation. Court costs, filing fees, expert fees, and
              other expenses may be advanced and are reimbursed from the
              recovery; in some cases, if there is no recovery, the client may
              still owe these case expenses depending on the terms of the
              written engagement agreement.
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
