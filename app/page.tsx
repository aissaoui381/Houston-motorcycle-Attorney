import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Hero } from "@/components/site/hero";

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
    </>
  );
}
