export type City = {
  slug: string;
  name: string;
  zip: string;
  blurb: string;
};

export const cities: City[] = [
  {
    slug: "nederland",
    name: "Nederland",
    zip: "77627",
    blurb:
      "Our home base. When you call from Nederland, you're calling a neighbor — expect the fastest response times in our service area.",
  },
  {
    slug: "port-arthur",
    name: "Port Arthur",
    zip: "77640",
    blurb:
      "Coastal humidity and heavy Gulf storms are hard on gutters and siding in Port Arthur. We build exteriors that stand up to both.",
  },
  {
    slug: "groves",
    name: "Groves",
    zip: "77619",
    blurb:
      "We've worked on homes all over Groves — mature trees make gutter guards and regular cleaning especially worthwhile here.",
  },
  {
    slug: "port-neches",
    name: "Port Neches",
    zip: "77651",
    blurb:
      "Just minutes from our shop, Port Neches homeowners get quick scheduling and easy follow-up visits.",
  },
  {
    slug: "beaumont",
    name: "Beaumont",
    zip: "77701",
    blurb:
      "From historic neighborhoods to new construction, we handle gutter and siding projects of every size across Beaumont.",
  },
  {
    slug: "vidor",
    name: "Vidor",
    zip: "77662",
    blurb:
      "Heavily wooded lots in Vidor mean leaves, pine needles, and clogged gutters — a perfect fit for guards and seamless systems.",
  },
  {
    slug: "orange",
    name: "Orange",
    zip: "77630",
    blurb:
      "We serve Orange and the surrounding communities with the same owner-managed attention we give jobs in our own backyard.",
  },
  {
    slug: "lumberton",
    name: "Lumberton",
    zip: "77657",
    blurb:
      "Lumberton's fast-growing neighborhoods trust us for clean installs on new homes and upgrades on established ones.",
  },
];

export const cityBySlug = (slug: string) => cities.find((c) => c.slug === slug);
