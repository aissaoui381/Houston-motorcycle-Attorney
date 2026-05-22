// Lawyer bios. TODO: replace placeholder copy and headshots with real data.

export type Lawyer = {
  slug: string;
  name: string;
  title: string;
  credentials: string[];
  yearsExperience: number;
  bio: string[];
  barAdmissions: string[];
  education: { degree: string; school: string; year?: number }[];
  image: string;
  imageAlt: string;
};

export const lawyers: Record<string, Lawyer> = {
  "lead-attorney": {
    slug: "lead-attorney",
    name: "M. Reyes",
    title: "Founding Partner & Trial Attorney",
    credentials: ["J.D.", "Board Certified — Personal Injury Trial Law"],
    yearsExperience: 18,
    bio: [
      "M. Reyes has spent nearly two decades representing motorcycle riders and their families across Harris County and the Greater Houston area. The firm was founded on a simple principle: insurance carriers treat riders differently, and riders deserve counsel who understands the bike, the road, and the courtroom.",
      "Reyes has tried motorcycle cases to verdict in state and federal court, secured seven-figure recoveries for clients with catastrophic injuries, and lectured Texas trial lawyers on accident reconstruction and biomechanics in two-wheel collisions.",
    ],
    barAdmissions: [
      "State Bar of Texas",
      "U.S. District Court, Southern District of Texas",
      "U.S. Court of Appeals, Fifth Circuit",
    ],
    education: [
      { degree: "J.D.", school: "University of Houston Law Center" },
      { degree: "B.A.", school: "The University of Texas at Austin" },
    ],
    image: "/lawyers/lead-attorney.jpg",
    imageAlt: "Portrait of M. Reyes, Founding Partner",
  },
};

export function getLawyer(slug: string): Lawyer | undefined {
  return lawyers[slug];
}
