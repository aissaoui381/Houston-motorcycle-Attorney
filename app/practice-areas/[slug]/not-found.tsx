import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        404
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
        Practice area not found
      </h1>
      <p className="mt-4 text-base text-muted-foreground">
        The page you requested does not exist. Return to our list of practice areas, or contact
        the firm directly.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/practice-areas"
          className="inline-flex items-center justify-center rounded-md bg-foreground px-5 py-2.5 text-sm font-semibold text-background hover:opacity-90"
        >
          All practice areas
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center rounded-md border border-border bg-background px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-secondary"
        >
          Contact us
        </Link>
      </div>
    </section>
  );
}
