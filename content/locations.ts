// City landing-page content. Slugs map 1:1 with /locations/[city].

export type LocationPage = {
  slug: string;
  city: string;
  county: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  highlights: string[];
  localContent: { heading: string; body: string[] }[];
};

export const locations: LocationPage[] = [
  {
    slug: "houston",
    city: "Houston",
    county: "Harris County",
    metaTitle: "Houston Motorcycle Accident Attorneys",
    metaDescription:
      "Motorcycle accident attorneys serving downtown Houston, the Heights, Midtown, and all of Harris County. Free consultation. No fee unless we recover.",
    intro:
      "Houston motorcyclists face freeway merges, distracted commuters, and complex multi-lane intersections that drivers of cars rarely think about — and that adjusters routinely use against riders. We represent injured riders across the entire city.",
    highlights: [
      "Office in downtown Houston, walking distance to Harris County courthouses",
      "Experience trying motorcycle cases in the 11th, 55th, 152nd, and 234th District Courts",
      "Hospital and home visits for injured riders who cannot travel",
    ],
    localContent: [
      {
        heading: "Where Houston motorcycle crashes happen most",
        body: [
          "TxDOT crash data consistently shows clusters along the 610 Loop, I-10 East and West, I-45 north of downtown, US-59/I-69, and the Beltway 8 frontage roads. Within the inner loop, intersections along Westheimer, Kirby, Shepherd, and Memorial generate a disproportionate share of left-turn collisions involving motorcyclists.",
        ],
      },
      {
        heading: "Harris County venue advantage",
        body: [
          "Cases filed in Harris County are heard by juries familiar with motorcycle culture and the rebuilding South. We file in Houston when it serves the client and remove cases to federal court when defendants try to push them there.",
        ],
      },
    ],
  },
  {
    slug: "sugar-land",
    city: "Sugar Land",
    county: "Fort Bend County",
    metaTitle: "Sugar Land Motorcycle Accident Attorneys",
    metaDescription:
      "Representing motorcycle accident victims in Sugar Land and Fort Bend County. Local counsel with downtown Houston resources. Free consultation.",
    intro:
      "Sugar Land riders deal with high-speed corridors along US-59/I-69, the Grand Parkway, and the West Belt — combinations of suburban commuter traffic and freeway speeds that produce severe motorcycle injuries.",
    highlights: [
      "Fort Bend County District Court experience",
      "Familiarity with Sugar Land PD and Fort Bend County Sheriff crash investigation procedures",
    ],
    localContent: [
      {
        heading: "Sugar Land–specific considerations",
        body: [
          "Fort Bend juries skew suburban and conservative. That is not a disadvantage if a case is properly developed — but it requires a different approach to themes and damages than a downtown Houston case.",
        ],
      },
    ],
  },
  {
    slug: "the-woodlands",
    city: "The Woodlands",
    county: "Montgomery County",
    metaTitle: "The Woodlands Motorcycle Accident Attorneys",
    metaDescription:
      "Motorcycle accident attorneys serving The Woodlands and Montgomery County. Downtown Houston firm with reach north of the city. Free consultation.",
    intro:
      "The I-45 corridor north of Houston has some of the worst motorcycle crash rates in the region. We represent riders injured throughout The Woodlands, Spring, and the broader Montgomery County area.",
    highlights: [
      "Montgomery County District Court venue experience",
      "Coverage of I-45, the Hardy Toll Road, and the Grand Parkway north corridor",
    ],
    localContent: [
      {
        heading: "I-45 north — the corridor that keeps producing fatalities",
        body: [
          "The stretch of I-45 from FM 1960 north through The Woodlands sees high-speed lane changes, frequent construction, and a mix of commuter and commercial traffic. It is one of the most consistently dangerous motorcycle routes in the Houston metro.",
        ],
      },
    ],
  },
  {
    slug: "katy",
    city: "Katy",
    county: "Harris / Fort Bend / Waller Counties",
    metaTitle: "Katy Motorcycle Accident Attorneys",
    metaDescription:
      "Motorcycle accident attorneys serving Katy, Cinco Ranch, and the I-10 West corridor. Free consultation. No fee unless we win.",
    intro:
      "Katy sits at the intersection of three counties and one of the busiest commuter corridors in Texas: I-10 West. Riders here face high closing speeds, frequent merges, and drivers who treat the Katy Freeway like a racetrack.",
    highlights: [
      "Experience in Harris, Fort Bend, and Waller County venues",
      "Familiar with Katy PD and county-line jurisdictional issues that affect crash investigations",
    ],
    localContent: [
      {
        heading: "I-10 West — the Katy Freeway",
        body: [
          "Multi-lane, high-speed, with managed lanes and frequent merging traffic. Motorcycle crashes along this corridor often involve lane changes, sudden stops in stop-and-go traffic, or commercial vehicles failing to check blind spots.",
        ],
      },
    ],
  },
  {
    slug: "pasadena",
    city: "Pasadena",
    county: "Harris County",
    metaTitle: "Pasadena Motorcycle Accident Attorneys",
    metaDescription:
      "Motorcycle accident representation for Pasadena, Deer Park, and the Houston Ship Channel area. Industrial-corridor crash experience. Free consultation.",
    intro:
      "Pasadena and the Ship Channel area present a unique mix: heavy industrial truck traffic, refinery shift commuters, and narrow secondary roads. Motorcycle crashes here often involve commercial defendants with significant policy limits.",
    highlights: [
      "Experience with commercial-defendant cases (trucking, refinery contractors)",
      "Familiar with Pasadena PD and Harris County Precinct 2 crash investigation",
    ],
    localContent: [
      {
        heading: "Industrial-corridor truck involvement",
        body: [
          "When a motorcycle is hit by a commercial vehicle, the case is governed not just by Texas tort law but by federal motor-carrier safety regulations. We evaluate every commercial-vehicle case for FMCSA violations that establish negligence per se.",
        ],
      },
    ],
  },
  {
    slug: "pearland",
    city: "Pearland",
    county: "Brazoria County",
    metaTitle: "Pearland Motorcycle Accident Attorneys",
    metaDescription:
      "Motorcycle accident attorneys serving Pearland and Brazoria County. Free, confidential consultation. No fee unless we recover for you.",
    intro:
      "Pearland's rapid growth has outpaced its road network. SH-288, FM 518, and the Beltway 8 South corridor see motorcycle crashes that the local insurance market is slow to value properly.",
    highlights: [
      "Brazoria County District Court experience",
      "Coverage of SH-288, FM 518, and the Beltway 8 South corridor",
    ],
    localContent: [
      {
        heading: "Brazoria County considerations",
        body: [
          "Brazoria County jurors take personal responsibility seriously, which is something defense lawyers exploit. Strong liability development and credible damages witnesses matter even more here than in Harris County.",
        ],
      },
    ],
  },
  {
    slug: "baytown",
    city: "Baytown",
    county: "Harris / Chambers Counties",
    metaTitle: "Baytown Motorcycle Accident Attorneys",
    metaDescription:
      "Representing motorcycle accident victims in Baytown and the eastern Houston metro. Free consultation. Contingency fee.",
    intro:
      "Baytown sits between Houston's eastern industrial corridor and the Beaumont commute. Riders here face refinery-shift traffic, I-10 East congestion, and the SH-146 corridor.",
    highlights: [
      "Harris and Chambers County venue experience",
      "Industrial-defendant case experience along the I-10 East corridor",
    ],
    localContent: [
      {
        heading: "I-10 East and SH-146",
        body: [
          "This stretch produces high-speed multi-vehicle crashes that frequently involve commercial trucks and industrial contractors. Cases require fast evidence preservation — surveillance footage along this corridor is routinely overwritten within days.",
        ],
      },
    ],
  },
];

export function getLocation(slug: string): LocationPage | undefined {
  return locations.find((l) => l.slug === slug);
}

export function getAllLocationSlugs(): string[] {
  return locations.map((l) => l.slug);
}
