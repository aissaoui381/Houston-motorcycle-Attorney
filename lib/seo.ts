import type { Metadata } from "next";
import { site } from "./site";

type BuildMetadataInput = {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
  noIndex?: boolean;
  keywords?: string[];
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
};

export function buildMetadata({
  title,
  description = site.description,
  path = "/",
  image = "/og-default.jpg",
  noIndex = false,
  keywords,
  type = "website",
  publishedTime,
  modifiedTime,
}: BuildMetadataInput = {}): Metadata {
  const url = new URL(path, site.url).toString();
  const resolvedTitle = title ? `${title} | ${site.name}` : `${site.name} — Houston Motorcycle Accident Attorneys`;

  return {
    metadataBase: new URL(site.url),
    title: resolvedTitle,
    description,
    keywords,
    alternates: { canonical: url },
    robots: noIndex ? { index: false, follow: false } : { index: true, follow: true },
    openGraph: {
      title: resolvedTitle,
      description,
      url,
      siteName: site.name,
      locale: site.locale,
      type,
      images: [{ url: image, width: 1200, height: 630, alt: site.name }],
      ...(publishedTime ? { publishedTime } : {}),
      ...(modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description,
      images: [image],
    },
  };
}
