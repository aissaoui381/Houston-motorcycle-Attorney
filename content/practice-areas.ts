// Practice-area content. Easy to swap for a CMS later — keep the PracticeArea
// type stable and any CMS adapter can map into it.

export type PracticeAreaSection = {
  heading: string;
  body: string[];
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PracticeArea = {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  lede: string;
  highlights: string[];
  sections: PracticeAreaSection[];
  commonInjuries?: string[];
  texasLawNotes?: string[];
  faqs: FaqItem[];
  attorneySlug: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    slug: "motorcycle-accidents",
    title: "Houston Motorcycle Accident Attorneys",
    shortTitle: "Motorcycle Accidents",
    metaTitle: "Houston Motorcycle Accident Attorneys",
    metaDescription:
      "Injured in a motorcycle crash in Houston? Our motorcycle accident attorneys handle Harris County cases involving negligent drivers, lane-change collisions, and uninsured motorists. Free consultation.",
    eyebrow: "Practice Area",
    lede: "Texas drivers routinely fail to see motorcyclists at intersections, on freeway merges, and during lane changes. When that inattention causes injury, we hold them — and their insurers — accountable.",
    highlights: [
      "Decades of Texas motorcycle trial experience",
      "Direct access to your attorney, not a case manager",
      "No fee unless we recover compensation",
      "24/7 intake for new injuries and fatalities",
    ],
    sections: [
      {
        heading: "How Houston motorcycle accidents happen",
        body: [
          "The Texas Department of Transportation reports thousands of motorcycle crashes statewide each year, with Harris County consistently among the highest in motorcycle fatalities. Most are not single-vehicle wrecks — they happen when a driver of a car, SUV, or commercial truck fails to yield, changes lanes without checking blind spots, or pulls into an intersection in front of a rider.",
          "Common scenarios our firm handles include left-turn collisions at intersections like Westheimer and Kirby, freeway merge crashes on I-10, I-45, and the 610 Loop, rear-end impacts at stoplights, and hit-and-runs involving riders who were following the rules of the road.",
        ],
      },
      {
        heading: "Compensation available under Texas law",
        body: [
          "Texas allows injured motorcyclists to recover economic damages (medical bills, future medical care, lost earnings, loss of earning capacity, property damage) and non-economic damages (physical pain, mental anguish, disfigurement, physical impairment, loss of consortium).",
          "In cases involving gross negligence — for example, an intoxicated driver or a commercial carrier that ignored safety regulations — exemplary (punitive) damages may also be available. We evaluate every case for the full scope of recovery, not just the medical-bill total the insurance adjuster wants to anchor on.",
        ],
      },
      {
        heading: "Why riders need a motorcycle-specific firm",
        body: [
          "Insurance carriers exploit anti-rider bias. Adjusters frequently argue that a motorcyclist was speeding, lane-splitting (which is not legal in Texas), or assumed the risk simply by riding. Defense lawyers play to the same juror instincts.",
          "Effective representation requires more than a personal-injury template. It requires reconstruction experts who understand counter-steering and braking dynamics, medical experts who can explain how a 40-mph impact translates into specific orthopedic and neurological injuries, and a trial lawyer who can put the jury in the rider's helmet.",
        ],
      },
    ],
    commonInjuries: [
      "Traumatic brain injury (TBI) and concussion",
      "Spinal cord injury and paralysis",
      "Compound fractures of the femur, tibia, and pelvis",
      "Road rash and degloving injuries requiring grafts",
      "Internal organ damage and crush injuries",
      "Amputations",
    ],
    texasLawNotes: [
      "Texas is a modified comparative-fault state (51% bar). A rider can recover damages if found 50% or less at fault, with damages reduced by the percentage of fault assigned.",
      "Texas Transportation Code § 661.003 requires helmets for riders under 21; riders 21+ may go without a helmet if they carry the required medical coverage. Not wearing a helmet is not, by itself, evidence of negligence.",
      "Statute of limitations for personal injury is generally two years from the date of the crash. Wrongful-death claims also carry a two-year limit. Talk to counsel early — evidence disappears.",
    ],
    faqs: [
      {
        question: "How much does it cost to hire a motorcycle accident attorney?",
        answer:
          "We work on a contingency-fee basis. There is no upfront cost, no hourly billing, and no fee unless we recover compensation for you. The initial case review is free.",
      },
      {
        question: "What if the driver who hit me had no insurance?",
        answer:
          "Texas insurance policies often include uninsured/underinsured motorist (UM/UIM) coverage that can apply when the at-fault driver has no policy or insufficient limits. Carriers routinely undervalue these claims; we pursue them aggressively.",
      },
      {
        question: "I was not wearing a helmet. Do I still have a case?",
        answer:
          "Yes. Under Texas law, riders 21 and older with the required medical coverage are not legally required to wear a helmet. Failure to wear one is not, by itself, evidence of negligence. Defense lawyers may try to use it to argue comparative fault on head injuries — we know how to counter that.",
      },
      {
        question: "How long will my motorcycle accident case take?",
        answer:
          "It depends on the severity of injuries, the disputed issues, and whether the carrier negotiates in good faith. Straightforward cases may resolve in months; cases that require litigation typically take 12 to 24 months. We do not rush settlements for short-term cash at the expense of long-term medical needs.",
      },
    ],
    attorneySlug: "lead-attorney",
  },
  {
    slug: "wrongful-death",
    title: "Houston Motorcycle Wrongful Death Attorneys",
    shortTitle: "Wrongful Death",
    metaTitle: "Houston Motorcycle Wrongful Death Attorneys",
    metaDescription:
      "Lost a loved one in a Houston motorcycle crash? Our wrongful death attorneys help Texas families pursue accountability and recovery. Free, confidential consultation.",
    eyebrow: "Practice Area",
    lede: "When a motorcycle crash ends in fatality, the law allows surviving family members to bring two related claims: a wrongful-death claim for their own losses, and a survival action for the rider's losses before death. Both require precise handling.",
    highlights: [
      "Confidential, no-pressure consultation with surviving family",
      "Coordination with funeral, probate, and benefits issues",
      "Experience with Texas Wrongful Death Act and Survival Statute",
    ],
    sections: [
      {
        heading: "Who can file a wrongful death claim in Texas",
        body: [
          "Under Texas Civil Practice and Remedies Code § 71.004, a wrongful-death claim may be brought by the surviving spouse, children, and parents of the deceased. Siblings cannot bring the claim. If no eligible family member files within three months, the estate's executor or administrator may do so.",
          "A separate survival action under § 71.021 belongs to the estate and recovers what the decedent could have recovered had they lived — including conscious pain and suffering before death, medical expenses, and property damage.",
        ],
      },
      {
        heading: "Damages available",
        body: [
          "Wrongful-death damages include loss of financial support, loss of household services, loss of companionship and society, mental anguish, and loss of inheritance. Survival damages include the decedent's pre-death pain and suffering, medical and funeral expenses, and any earnings lost between the crash and death.",
          "Where the at-fault driver acted with gross negligence — for example, driving drunk, fleeing the scene, or operating a commercial vehicle in violation of federal safety rules — exemplary damages may also be available.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long do we have to file a wrongful death claim?",
        answer:
          "Texas imposes a two-year statute of limitations for wrongful-death claims, measured from the date of death. There are limited exceptions, but you should not wait. Evidence, witnesses, and crash data are time-sensitive.",
      },
      {
        question: "We do not want a public trial. Can a wrongful death case be settled?",
        answer:
          "Yes. The majority of wrongful-death cases resolve through negotiated settlement, often with confidentiality terms. We prepare every case as if it will be tried — that posture creates leverage for settlement on favorable terms.",
      },
    ],
    attorneySlug: "lead-attorney",
  },
  {
    slug: "catastrophic-injury",
    title: "Houston Catastrophic Motorcycle Injury Attorneys",
    shortTitle: "Catastrophic Injury",
    metaTitle: "Houston Catastrophic Motorcycle Injury Attorneys",
    metaDescription:
      "Catastrophic motorcycle injuries — TBI, spinal cord injury, amputation — require attorneys who understand the long-term cost. Houston-based representation, free consultation.",
    eyebrow: "Practice Area",
    lede: "Catastrophic injuries — traumatic brain injury, spinal cord injury, amputations, severe burns — change the trajectory of a rider's entire life. The legal claim must capture that future, not just the emergency-room invoice.",
    highlights: [
      "Life-care planners and vocational economists on every catastrophic case",
      "Direct work with treating specialists at TIRR Memorial Hermann and the Texas Medical Center",
      "Structured-settlement experience for long-term care planning",
    ],
    sections: [
      {
        heading: "Building the full picture of future loss",
        body: [
          "Catastrophic-injury cases turn on the credibility of future damages. We retain certified life-care planners, vocational economists, and treating specialists to project lifetime medical costs, attendant care, home modifications, adaptive equipment, and lost earning capacity.",
          "Without that work, insurance carriers anchor on past medical bills and offer a fraction of true value. With it, juries see the full impact and award accordingly.",
        ],
      },
    ],
    faqs: [
      {
        question: "Will I have to testify if my case goes to trial?",
        answer:
          "In most catastrophic-injury cases, the client does testify if the case is tried. We prepare every client thoroughly. Many catastrophic cases settle before trial once the defense sees the strength of the damages model.",
      },
    ],
    attorneySlug: "lead-attorney",
  },
];

export function getPracticeArea(slug: string): PracticeArea | undefined {
  return practiceAreas.find((p) => p.slug === slug);
}

export function getAllPracticeAreaSlugs(): string[] {
  return practiceAreas.map((p) => p.slug);
}
