import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/site/hero";
import { StatsBand } from "@/components/site/home/stats-band";
import { Manifesto } from "@/components/site/home/manifesto";
import { PracticeGrid } from "@/components/site/home/practice-grid";
import { ProcessSteps } from "@/components/site/home/process-steps";
import { ServiceArea } from "@/components/site/home/service-area";
import { LeadAttorney } from "@/components/site/home/lead-attorney";
import { ClosingCta } from "@/components/site/home/closing-cta";

export const metadata: Metadata = buildMetadata({
  title: "Houston Motorcycle Accident Attorneys",
  description:
    "Trial-tested motorcycle accident attorneys serving Houston and Harris County. Free consultation. No fee unless we win.",
  path: "/",
  keywords: [
    "Houston motorcycle accident attorney",
    "Houston motorcycle accident lawyer",
    "Texas motorcycle injury lawyer",
    "motorcycle wrongful death attorney Houston",
  ],
});

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsBand />
      <Manifesto />
      <PracticeGrid />
      <ProcessSteps />
      <ServiceArea />
      <LeadAttorney />
      <ClosingCta />
    </>
  );
}
