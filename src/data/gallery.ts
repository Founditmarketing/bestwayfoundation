/**
 * Project gallery.
 *
 * The gallery page previously said "coming soon" and linked to Facebook — a
 * thin page sitting in the sitemap. These are the real project photographs
 * already in the repo, captioned so they carry keywords and so the page can
 * emit ImageObject schema.
 */

export interface GalleryItem {
  src: string;
  title: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    src: '/img/press-piers-installation.jpg',
    title: 'Steel Press Pier Installation',
    caption:
      'Steel press piers driven to refusal beneath a settled slab. Depth is set by the soil rather than by an estimate.',
  },
  {
    src: '/img/house-leveling-hydraulic-lift.jpg',
    title: 'Hydraulic House Leveling',
    caption:
      'Multi-point hydraulic jacking underway. Lifting across many points at once is what brings a house back without cracking finishes.',
  },
  {
    src: '/img/pier-and-beam-joist-repair.jpg',
    title: 'Pier & Beam Framework Repair',
    caption:
      'Interior joist framework secured and re-supported on a pier and beam home in East Texas.',
  },
  {
    src: '/img/floor-joist-replacement.jpg',
    title: 'Floor Joist Replacement',
    caption:
      'Split and rotted joists cut out and replaced with treated material sized for the actual span.',
  },
  {
    src: '/img/subfloor-installation.jpg',
    title: 'Structural Subfloor Installation',
    caption:
      'New structural subfloor going down over rebuilt framing after the supports beneath it were replaced.',
  },
  {
    src: '/img/foundation-repair-crew-east-texas.jpg',
    title: 'Foundation Repair Crew On Site',
    caption:
      'Our own crew, with owner James Wilson on site — no subcontractors and no commission salespeople.',
  },
  {
    src: '/img/house-leveling-kilgore-tx.jpg',
    title: 'Completed House Leveling',
    caption:
      'A completed interior after leveling. Doors that had dragged for years latch again once the structure is back to elevation.',
  },
  {
    src: '/img/foundation-drainage-french-drain.jpg',
    title: 'Foundation Drainage Work',
    caption:
      'Drainage correction around the foundation — the work that keeps the structural repair holding in East Texas clay.',
  },
  {
    src: '/img/foundation-repair-longview-tx.jpg',
    title: 'Slab Foundation Repair, Longview',
    caption:
      'Perimeter slab work on a Longview home, with the grading corrected as part of the same job.',
  },
  {
    src: '/img/foundation-crack-inspection.jpg',
    title: 'Foundation Crack Inspection',
    caption:
      'Assessing crack width and displacement during a free inspection, alongside elevation readings across the whole structure.',
  },
];
