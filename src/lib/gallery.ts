export type GalleryItem = {
  category: string;
  image: string;
  alt: string;
  caption: string;
};

/**
 * Placeholder gallery matching the categories and photo count of the previous
 * site (12 photos). Swap `image` paths for real project photos — see
 * PHOTOS-NEEDED.md for exactly what to request from the client.
 */
export const galleryCategories = [
  "All",
  "Gutters",
  "Gutter Guards",
  "Siding",
  "Siding Repair",
  "Completed Projects",
] as const;

export const galleryItems: GalleryItem[] = [
  {
    category: "Gutters",
    image: "/images/gallery/gallery-seamless-gutter-brick-home-port-arthur.svg",
    alt: "Seamless aluminum gutters installed on a brick home in Port Arthur, TX",
    caption: "Seamless gutter installation · Port Arthur",
  },
  {
    category: "Gutters",
    image: "/images/gallery/gallery-gutter-machine-fabrication-onsite.svg",
    alt: "Gutter machine roll-forming a continuous seamless gutter in a driveway",
    caption: "On-site fabrication — one continuous piece",
  },
  {
    category: "Gutters",
    image: "/images/gallery/gallery-oversized-gutters-two-story-nederland.svg",
    alt: "Oversized 6-inch seamless gutters on a two-story home in Nederland, TX",
    caption: "6\" oversized system · Nederland",
  },
  {
    category: "Gutters",
    image: "/images/gallery/gallery-downspout-detail-corner.svg",
    alt: "Clean downspout and mitered corner detail on new seamless gutters",
    caption: "Corner and downspout detail",
  },
  {
    category: "Gutters",
    image: "/images/gallery/gallery-gutter-color-match-fascia.svg",
    alt: "Color-matched gutters blending into painted fascia trim",
    caption: "Color-matched to existing trim",
  },
  {
    category: "Gutter Guards",
    image: "/images/gallery/gallery-gutter-guard-mesh-shingle-roof.svg",
    alt: "Stainless mesh gutter guard installed on a shingle roof",
    caption: "Mesh guard installation",
  },
  {
    category: "Gutter Guards",
    image: "/images/gallery/gallery-gutter-guard-pine-needles-vidor.svg",
    alt: "Gutter guards shedding pine needles on a wooded lot in Vidor, TX",
    caption: "Guards on a wooded lot · Vidor",
  },
  {
    category: "Siding",
    image: "/images/gallery/gallery-new-siding-installation-groves.svg",
    alt: "New siding installation on a home in Groves, TX",
    caption: "New siding installation · Groves",
  },
  {
    category: "Siding",
    image: "/images/gallery/gallery-fiber-cement-siding-two-tone.svg",
    alt: "Two-tone fiber cement siding on a renovated Southeast Texas home",
    caption: "Fiber cement re-side",
  },
  {
    category: "Siding Repair",
    image: "/images/gallery/gallery-storm-damage-siding-repair-color-match.svg",
    alt: "Color-matched siding repair after storm damage",
    caption: "Storm damage repair — color matched",
  },
  {
    category: "Completed Projects",
    image: "/images/gallery/gallery-full-exterior-gutters-siding-port-neches.svg",
    alt: "Completed exterior project with new gutters and siding in Port Neches, TX",
    caption: "Full exterior package · Port Neches",
  },
  {
    category: "Completed Projects",
    image: "/images/gallery/gallery-crew-on-the-job-beaumont.svg",
    alt: "Top Notch crew on the job finishing a gutter install in Beaumont, TX",
    caption: "On the job · Beaumont",
  },
];
