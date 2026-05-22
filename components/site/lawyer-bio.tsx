import Image from "next/image";
import { Award, GraduationCap, Scale } from "lucide-react";
import type { Lawyer } from "@/content/lawyers";

type LawyerBioProps = {
  lawyer: Lawyer;
};

export function LawyerBio({ lawyer }: LawyerBioProps) {
  return (
    <article
      aria-labelledby={`bio-${lawyer.slug}`}
      className="grid gap-8 rounded-xl border border-border bg-background p-6 sm:p-8 md:grid-cols-[180px_1fr] md:gap-10"
    >
      <div className="flex md:block">
        <div className="relative h-32 w-32 overflow-hidden rounded-lg bg-secondary md:h-44 md:w-44">
          <Image
            src={lawyer.image}
            alt={lawyer.imageAlt}
            fill
            sizes="(min-width: 768px) 180px, 128px"
            className="object-cover"
          />
        </div>
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Meet your attorney
        </p>
        <h2 id={`bio-${lawyer.slug}`} className="mt-1 text-2xl font-semibold tracking-tight">
          {lawyer.name}
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          {lawyer.title} · {lawyer.yearsExperience}+ years
        </p>

        <ul className="mt-4 flex flex-wrap gap-2">
          {lawyer.credentials.map((c) => (
            <li
              key={c}
              className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground"
            >
              <Award aria-hidden className="h-3.5 w-3.5" />
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
          {lawyer.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-6 grid gap-5 border-t border-border pt-6 sm:grid-cols-2">
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
              <Scale aria-hidden className="h-3.5 w-3.5" />
              Bar admissions
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {lawyer.barAdmissions.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground">
              <GraduationCap aria-hidden className="h-3.5 w-3.5" />
              Education
            </h3>
            <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
              {lawyer.education.map((e) => (
                <li key={`${e.degree}-${e.school}`}>
                  <span className="font-medium text-foreground">{e.degree}</span>, {e.school}
                  {e.year ? ` (${e.year})` : ""}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}
