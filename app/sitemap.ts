import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { practiceAreas } from "@/content/practice-areas";
import { locations } from "@/content/locations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: site.url, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${site.url}/practice-areas`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/locations`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${site.url}/about`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${site.url}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/privacy`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${site.url}/disclaimer`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const practiceAreaRoutes: MetadataRoute.Sitemap = practiceAreas.map((p) => ({
    url: `${site.url}/practice-areas/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const locationRoutes: MetadataRoute.Sitemap = locations.map((l) => ({
    url: `${site.url}/locations/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticRoutes, ...practiceAreaRoutes, ...locationRoutes];
}
