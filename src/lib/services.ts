export type Faq = { q: string; a: string };

export type Service = {
  /** City-page slug prefix, e.g. "seamless-gutter-installation" → /seamless-gutter-installation-nederland-tx */
  slug: string;
  /** Whether a standalone hub page exists at /<slug> (matches the original sitemap). */
  hasHubPage: boolean;
  name: string;
  /** Short name used in nav/cards. */
  short: string;
  /** One-line card blurb. */
  tagline: string;
  /** Intro paragraph used on hub + city pages. */
  intro: string;
  benefits: { title: string; text: string }[];
  faqs: Faq[];
  image: string;
  imageAlt: string;
};

export const services: Service[] = [
  {
    slug: "seamless-gutter-installation",
    hasHubPage: false,
    name: "Seamless Gutter Installation",
    short: "Seamless Gutters",
    tagline:
      "Custom aluminum gutters fabricated on-site in one continuous run — no seams, no leaks.",
    intro:
      "We roll-form each gutter on-site to the exact length of your roofline, so there are no mid-run joints to separate or leak. With aluminum, copper, and steel options in 20+ colors, a seamless system protects your foundation, landscaping, and siding from Southeast Texas downpours — and it's backed by our 10-year workmanship warranty.",
    benefits: [
      {
        title: "Fabricated at your home",
        text: "Each run is custom-measured and formed on-site for an exact fit — not pieced together from stock sections.",
      },
      {
        title: "Fewer leaks by design",
        text: "Joints are where sectional gutters fail. Seamless runs only have connections at corners and downspouts.",
      },
      {
        title: "Built for Gulf Coast rain",
        text: "We size gutters and downspouts for the intensity of Southeast Texas storms, not national averages.",
      },
      {
        title: "20+ colors, 3 materials",
        text: "Aluminum, copper, or steel in a finish that matches your trim — most residential jobs install in a single day.",
      },
      {
        title: "Protects your foundation",
        text: "Properly routed runoff keeps water away from your slab, beds, and walkways.",
      },
      {
        title: "10-year workmanship warranty",
        text: "If our installation fails, we fix it. Simple as that.",
      },
    ],
    faqs: [
      {
        q: "How much does seamless gutter installation cost?",
        a: "It depends on the length of your roofline, the material and gutter size you choose, and your home's height and complexity. We give free, no-obligation quotes with exact pricing — most homeowners are surprised how affordable a seamless system is.",
      },
      {
        q: "How long do seamless gutters last?",
        a: "A properly installed aluminum seamless system typically lasts 20–30 years in our climate. Copper lasts even longer. Keeping them clean (or adding guards) is the biggest factor in lifespan.",
      },
      {
        q: "What makes seamless gutters better than sectional?",
        a: "Sectional gutters have a joint every 10 feet or so, and every joint is a future leak. Seamless gutters are formed in one continuous piece, so they leak less, look cleaner, and need less maintenance.",
      },
      {
        q: "Do you haul away my old gutters?",
        a: "Yes. Removal and disposal of your existing gutters is included in every installation quote.",
      },
    ],
    image: "/images/services/service-seamless-gutter-machine-onsite.svg",
    imageAlt:
      "Seamless gutter machine roll-forming a continuous aluminum gutter on-site",
  },
  {
    slug: "gutter-cleaning",
    hasHubPage: true,
    name: "Gutter Cleaning",
    short: "Gutter Cleaning",
    tagline:
      "Debris removal, downspout flushing, and a full damage inspection — before small problems become big ones.",
    intro:
      "Clogged gutters overflow, and overflowing gutters rot fascia, stain siding, and dump water next to your foundation. Our cleaning service removes all debris by hand, flushes every downspout, checks drainage, and includes a written damage assessment so you know exactly what shape your system is in.",
    benefits: [
      {
        title: "Hand-cleaned, not just blown out",
        text: "We remove packed debris by hand and bag it — no mess left in your beds or on your lawn.",
      },
      {
        title: "Downspouts flushed and verified",
        text: "Every downspout is flushed with water and confirmed to drain freely before we leave.",
      },
      {
        title: "Free damage assessment",
        text: "While we're up there, we inspect hangers, seams, slope, fascia, and soffit — and give you a straight report.",
      },
      {
        title: "Protects fascia and foundation",
        text: "Routine cleaning is the cheapest insurance against rot, mosquito standing water, and slab-edge erosion.",
      },
    ],
    faqs: [
      {
        q: "How often should gutters be cleaned in Southeast Texas?",
        a: "Twice a year is the baseline — spring and late fall. Homes under pines or oaks often need three to four cleanings a year, or gutter guards to break the cycle.",
      },
      {
        q: "Do I need to be home for a gutter cleaning?",
        a: "No. As long as we can safely access your roofline, we can clean, flush, photograph anything concerning, and send your report the same day.",
      },
      {
        q: "What happens if you find damage?",
        a: "We document it with photos and give you a repair quote with no pressure. Many issues are minor if caught early — that's the point of the inspection.",
      },
      {
        q: "Do you clean gutters with guards installed?",
        a: "Yes. Guards dramatically reduce debris but systems should still be checked periodically. Guard-equipped cleanings are usually faster and cheaper.",
      },
    ],
    image: "/images/services/service-gutter-cleaning-debris-removal.svg",
    imageAlt:
      "Technician on a ladder removing leaves and debris from a residential gutter",
  },
  {
    slug: "gutter-guards",
    hasHubPage: true,
    name: "Gutter Guard Installation",
    short: "Gutter Guards",
    tagline:
      "Professional-grade mesh guards that keep leaves and pine needles out — and you off the ladder.",
    intro:
      "If your lot has oaks or pines, your gutters clog — it's just a matter of when. We install professional-grade mesh guard systems fitted to your existing gutters that keep out leaves, needles, and nesting pests while letting heavy Gulf Coast rain flow through at full capacity.",
    benefits: [
      {
        title: "Ends the clogging cycle",
        text: "Fine mesh keeps out leaves, pine needles, and roof grit — the three things that plug Southeast Texas gutters.",
      },
      {
        title: "Keeps pests out",
        text: "Guards close off the sheltered channel that birds, wasps, and rodents love to nest in.",
      },
      {
        title: "Rated for heavy rain",
        text: "We only install guard systems that can keep up with a Gulf Coast downpour without overshooting.",
      },
      {
        title: "Fits your existing gutters",
        text: "Guards install onto standard gutter sizes — no need to replace a system that's still in good shape.",
      },
    ],
    faqs: [
      {
        q: "Do gutter guards really work?",
        a: "Quality mesh guards, installed correctly, eliminate the vast majority of debris — but no guard is 100% maintenance-free. Expect an occasional rinse instead of scooping out packed gunk several times a year.",
      },
      {
        q: "Will guards handle heavy Texas rain?",
        a: "Yes — the systems we install are designed for high flow rates. Cheap box-store covers are usually what people are remembering when they say guards made overflow worse.",
      },
      {
        q: "Can you install guards on my existing gutters?",
        a: "In most cases, yes, as long as the gutters are sound and properly sloped. We check that during the free estimate and fix any issues first.",
      },
      {
        q: "Do gutter guards void my roof warranty?",
        a: "The systems we install attach to the gutter, not under your shingles, so they don't disturb the roof or its warranty.",
      },
    ],
    image: "/images/services/service-gutter-guard-mesh-installed.svg",
    imageAlt:
      "Close-up of stainless mesh gutter guard installed on a shingle-roof home",
  },
  {
    slug: "siding",
    hasHubPage: false,
    name: "Siding Installation & Repair",
    short: "Siding",
    tagline:
      "Vinyl, fiber cement, and engineered wood siding — installed clean or repaired with color-matched materials.",
    intro:
      "New siding transforms how your home looks and how it handles weather. We install vinyl, fiber cement, and engineered wood systems built for Gulf humidity and hurricanes — and we repair storm damage, cracks, warping, and rot with color-matched materials. If a storm caused the damage, we'll help you navigate the insurance claim.",
    benefits: [
      {
        title: "Materials that fit the Gulf Coast",
        text: "We'll walk you through vinyl, fiber cement, and engineered wood honestly — cost, durability, and maintenance for our climate.",
      },
      {
        title: "Color-matched repairs",
        text: "Storm damage doesn't have to mean re-siding the whole wall. We source matching profiles and colors whenever they exist.",
      },
      {
        title: "Energy efficiency gains",
        text: "New siding with proper house wrap and insulation board cuts drafts and eases the load on your AC.",
      },
      {
        title: "Insurance claim help",
        text: "We document storm damage properly and work with your adjuster so covered repairs get covered.",
      },
    ],
    faqs: [
      {
        q: "Which siding material is best for Southeast Texas?",
        a: "Fiber cement is the durability leader for humidity, heat, and windborne debris; quality vinyl is the value pick; engineered wood splits the difference with a warmer look. We quote options side-by-side so you can compare.",
      },
      {
        q: "Can you repair just the damaged section?",
        a: "Often, yes. If the profile and color are still made (or we can source reclaimed stock), a section repair is far cheaper than a full re-side. We'll tell you straight if a match isn't possible.",
      },
      {
        q: "Will insurance pay for my siding repair?",
        a: "If the damage came from a covered event like wind or hail, usually yes. We provide the photos and documentation adjusters need.",
      },
      {
        q: "How long does siding installation take?",
        a: "Most single-family homes take 3–7 working days depending on size, material, and how much prep the walls need.",
      },
    ],
    image: "/images/services/service-siding-installation-fiber-cement.svg",
    imageAlt:
      "Crew installing fiber cement lap siding on a single-story Texas home",
  },
  {
    slug: "soffit-repair",
    hasHubPage: true,
    name: "Soffit Repair & Replacement",
    short: "Soffit Repair",
    tagline:
      "Fix moisture and pest damage under your eaves, and restore the attic ventilation your home depends on.",
    intro:
      "Soffit is the underside of your roof overhang — and when it's damaged, moisture and pests get straight into your attic. We repair and replace soffit in vinyl, aluminum, and wood, color-match to your existing trim, seal gaps, and restore the ventilation that keeps your attic dry and your energy bills sane.",
    benefits: [
      {
        title: "Stops pest entry",
        text: "Squirrels, birds, and wasps exploit soffit gaps. We close every opening as part of the repair.",
      },
      {
        title: "Restores attic ventilation",
        text: "Vented soffit is how your attic breathes. We make sure airflow meets spec, not just looks closed up.",
      },
      {
        title: "Color-matched finish",
        text: "Repairs shouldn't be visible from the curb. We match material, profile, and color to your existing trim.",
      },
      {
        title: "Workmanship guarantee",
        text: "Every soffit job is backed by our workmanship guarantee.",
      },
    ],
    faqs: [
      {
        q: "How do I know my soffit needs repair?",
        a: "Peeling paint, visible sagging or holes, animal noises in the attic, and moisture stains on eaves are the big four. If you can see daylight through it from the attic, it needs attention.",
      },
      {
        q: "Vinyl, aluminum, or wood soffit — which should I pick?",
        a: "Vinyl and aluminum are low-maintenance and handle our humidity well; wood looks traditional but needs paint and vigilance. We'll match whatever the rest of your home uses unless you want to upgrade.",
      },
      {
        q: "Can you fix just the damaged section?",
        a: "Usually, yes. Soffit installs in panels, so localized damage often means replacing a few panels, not the whole run.",
      },
      {
        q: "Does soffit repair include fixing what caused the damage?",
        a: "We find the cause — usually overflowing gutters or roof leaks — and quote the fix, because replacing soffit without solving the source means doing it again in two years.",
      },
    ],
    image: "/images/services/service-soffit-repair-eave-panels.svg",
    imageAlt:
      "Installer replacing vented soffit panels under the eave of a brick home",
  },
  {
    slug: "fascia-repair",
    hasHubPage: true,
    name: "Fascia Repair & Replacement",
    short: "Fascia Repair",
    tagline:
      "Replace rotted fascia boards before your gutters pull loose — wood, vinyl, or aluminum-wrapped.",
    intro:
      "Fascia is the board your gutters hang from. When it rots — and in our climate, neglected fascia rots fast — gutters sag, pull away, and eventually fall. We replace damaged fascia in wood, vinyl, and aluminum, rehang gutters correctly, and back it all with our workmanship warranty.",
    benefits: [
      {
        title: "Solid anchoring for gutters",
        text: "Gutters are only as strong as the board they're screwed to. New fascia means hangers that hold.",
      },
      {
        title: "Stops rot from spreading",
        text: "Rotted fascia wicks moisture into rafter tails and roof decking. Replacing it early protects the structure behind it.",
      },
      {
        title: "Aluminum wrap option",
        text: "Wrapping new wood fascia in aluminum ends the repaint cycle and seals it from rain for good.",
      },
      {
        title: "Done with the gutter work",
        text: "Because we do both, fascia replacement and gutter rehanging happen in one visit — no coordinating two contractors.",
      },
    ],
    faqs: [
      {
        q: "What are the signs fascia needs replacing?",
        a: "Sagging or separated gutters, peeling paint on the trim behind them, soft spots you can dent with a fingernail, and visible rot or animal damage at the board ends.",
      },
      {
        q: "Can fascia be repaired without replacing the gutters?",
        a: "Yes. We detach your gutters, replace the bad boards, and rehang the same gutters with new hangers — assuming the gutters themselves are still in good shape.",
      },
      {
        q: "What causes fascia rot?",
        a: "Almost always water: clogged gutters overflowing behind the gutter, missing drip edge, or roof edge leaks. We fix the cause, not just the board.",
      },
      {
        q: "Wood, vinyl, or aluminum fascia — what do you recommend?",
        a: "For most homes, new wood wrapped in aluminum: the strength of wood for hangers with a sealed, no-paint finish. We'll quote alternatives if your home calls for them.",
      },
    ],
    image: "/images/services/service-fascia-board-replacement.svg",
    imageAlt:
      "Carpenter replacing a rotted fascia board along a residential roofline",
  },
];

export const serviceBySlug = (slug: string) =>
  services.find((s) => s.slug === slug);

/** Services that get standalone hub pages at /<slug> (matches original sitemap). */
export const hubServices = services.filter((s) => s.hasHubPage);
