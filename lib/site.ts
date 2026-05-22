// Single source of truth for firm details (NAP, links, schema).
// TODO: replace placeholders with verified firm info before launch.

// Resolve the canonical site URL. Precedence:
//   1. NEXT_PUBLIC_SITE_URL — set explicitly in Vercel / .env for production
//   2. VERCEL_URL           — auto-injected by Vercel for every deployment (no scheme)
//   3. localhost            — dev fallback
function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const site = {
  name: "Houston Motorcycle Law",
  legalName: "Houston Motorcycle Law, PLLC",
  shortName: "HML",
  description:
    "Houston motorcycle accident attorneys representing injured riders and families across Harris County and Greater Houston.",
  url: resolveSiteUrl(),
  locale: "en-US",
  telephone: "+1-713-555-0100",
  email: "intake@houstonmotorcyclelaw.com",
  address: {
    street: "1200 Smith Street, Suite 1600",
    city: "Houston",
    region: "TX",
    postalCode: "77002",
    country: "US",
  },
  geo: { latitude: 29.7589, longitude: -95.3677 },
  hours: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "18:00" },
    { days: ["Saturday", "Sunday"], opens: "00:00", closes: "23:59", note: "By appointment / 24-hour intake" },
  ],
  areaServed: ["Houston", "Sugar Land", "Pasadena", "The Woodlands", "Katy", "Pearland", "Baytown"],
  social: {
    facebook: "https://www.facebook.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://www.youtube.com/",
  },
  // Hub-and-spoke primary nav
  nav: [
    { href: "/", label: "Home" },
    { href: "/practice-areas", label: "Practice Areas" },
    { href: "/locations", label: "Locations" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  practiceAreasPreview: [
    { href: "/practice-areas/motorcycle-accidents", label: "Motorcycle Accidents" },
    { href: "/practice-areas/wrongful-death", label: "Wrongful Death" },
    { href: "/practice-areas/catastrophic-injury", label: "Catastrophic Injury" },
    { href: "/practice-areas/uninsured-motorist", label: "Uninsured Motorist Claims" },
  ],
  locationsPreview: [
    { href: "/locations/houston", label: "Houston" },
    { href: "/locations/sugar-land", label: "Sugar Land" },
    { href: "/locations/the-woodlands", label: "The Woodlands" },
    { href: "/locations/katy", label: "Katy" },
  ],
} as const;

export type Site = typeof site;
