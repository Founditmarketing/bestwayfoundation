/**
 * Service definitions.
 *
 * Drives /services/:slug, the service half of /services/:slug/:citySlug, the
 * navigation, the schema OfferCatalog and the sitemap. Copy is written to be
 * specific about method and materials — the location pages already carry the
 * local detail, and generic service prose was the weakest content on the site.
 */

export interface ServiceFaq {
  q: string;
  a: string;
}

export interface ProcessStep {
  title: string;
  desc: string;
}

export interface Service {
  slug: string;
  path: string;
  /** Schema + heading name */
  name: string;
  /** Short label for nav and cards */
  navLabel: string;
  /**
   * Label used in service x city page titles. Deliberately distinct from the
   * city page's own "Foundation Repair in <city>" title so the two pages do
   * not compete for the same query.
   */
  cityLabel: string;
  serviceType: string;
  metaTitle: string;
  metaDescription: string;
  tagline: string;
  /** Card blurb */
  summary: string;
  icon: string;
  heroImage: string;
  /** 1200x630 social card */
  ogImage: string;
  /** Body copy paragraphs */
  intro: string[];
  /** What we actually do, step by step */
  process: ProcessStep[];
  /** Named materials and equipment — entity density for AI search */
  equipment: { title: string; desc: string }[];
  /** Symptoms that point at this service specifically */
  symptoms: string[];
  faqs: ServiceFaq[];
  /** Used to build the service x city page opener */
  cityAngle: string;
}

export const services: Service[] = [
  {
    slug: 'house-leveling',
    path: '/services/house-leveling',
    name: 'Foundation Lifting & House Leveling',
    navLabel: 'Foundation Lifting',
    cityLabel: 'Foundation Lifting',
    serviceType: 'Concrete Foundation Lifting',
    metaTitle: 'Foundation Lifting & House Leveling | Best Way',
    metaDescription:
      'Concrete foundation lifting and house leveling across Deep East Texas. Controlled hydraulic lifting on concrete and steel piers. Call (903) 932-8150.',
    tagline: 'What We Do More Than Anything Else',
    summary: 'Our core work — controlled hydraulic lifting on concrete and steel piers, bringing a settled house back to true.',
    icon: '/img/icon-house-leveling.png',
    heroImage: '/img/house-leveling-hydraulic-lift.jpg',
    ogImage: '/social/og-house-leveling.jpg',
    intro: [
      'Lifting foundations is what Best Way does more than anything else. We are a concrete contractor by trade, and the concrete is the point: the piers that carry your house after the lift are what decide whether it stays where we put it. Owner James Wilson has spent his working life on this one job across Deep East Texas.',
      'Foundation lifting — house leveling, if that is the term you know it by — means physically returning a settled structure to a level plane and re-supporting it so it holds. On pier and beam homes that means lifting at the beams and piers; on a slab it means lifting the slab itself on piers driven beneath it. Either way the skill is in the lift, not the jack: going too fast is how contractors crack sheetrock, break tile and split framing.',
      'We lift in small increments across many points simultaneously, moving the whole structure together rather than jacking one corner up and hoping the rest follows. Between increments we check elevations and look at the framing, the door reveals and the existing cracks. If the house tells us to slow down, we slow down.',
      'A good leveling job ends with the structure supported on adequate piers at adequate spacing, shimmed with materials that will not compress or rot, and with the drainage corrected so the soil underneath stops moving. Anything less is a lift that will need doing again.',
    ],
    process: [
      {
        title: 'Full Elevation Map',
        desc: 'Readings across every room and every support point, so we know the true shape of the settlement before a single jack goes under the house.',
      },
      {
        title: 'Support Point Assessment',
        desc: 'On pier and beam we inspect every pier, sill, beam and joist. Rotten or undersized supports get replaced as part of the lift rather than jacked against.',
      },
      {
        title: 'Staged Hydraulic Lift',
        desc: 'Multiple jacks working together in small increments, with elevation checks between stages. The house moves as one piece.',
      },
      {
        title: 'Permanent Re-Support',
        desc: 'New or reset piers at proper spacing, shimmed with steel and treated material. Nothing that will rot, crush or work loose.',
      },
      {
        title: 'Post-Lift Verification',
        desc: 'A second full elevation survey confirming the result, handed to you alongside the before readings.',
      },
    ],
    equipment: [
      {
        title: 'Multi-Point Hydraulic Jacking',
        desc: 'Several jacks under load at once so the lift is distributed. This is the single biggest difference between a careful leveling job and a damaging one.',
      },
      {
        title: 'Steel Shims and Caps',
        desc: 'Steel rather than wood scraps at the bearing points, so the support does not compress or rot back out of level in five years.',
      },
      {
        title: 'Concrete and Steel Piers',
        desc: 'Sized and spaced to the actual span and load of your structure rather than to a standard spacing that may not fit it.',
      },
      {
        title: 'Digital Elevation Survey',
        desc: 'Before-and-after readings recorded in writing so the result is measurable rather than a matter of opinion.',
      },
    ],
    symptoms: [
      'Floors that slope, bounce or feel springy underfoot',
      'A visible dip or hump running across a room',
      'Furniture that rocks and balls that roll to one wall',
      'Gaps opening between the floor and the baseboard',
      'Exterior doors that swing open or shut on their own',
      'Separation at the corners of interior door frames',
    ],
    faqs: [
      {
        q: 'How much does house leveling cost?',
        a: 'It scales with the size of the house, how far out of level it is, and how many of the existing supports need replacing rather than resetting. A pier and beam home with sound framing that needs shimming and a few new piers is a modest job; one with rotten sills and beams is a larger one. The inspection and written quote are free.',
      },
      {
        q: 'Can you level a house without cracking the walls?',
        a: 'That is exactly what the incremental method is for. Lifting slowly across many points at once lets finishes move with the structure. Some existing cracks change shape as the house returns to level, and older brittle plaster can show new hairlines — we tell you what to expect before we lift.',
      },
      {
        q: 'How level does a house actually need to be?',
        a: 'Perfectly flat is neither realistic nor necessary on an older home. The goal is to bring the structure back within tolerance, close the differential that is causing the damage, and support it so it stops moving. We show you the numbers rather than promising a flat floor.',
      },
      {
        q: 'How long does leveling take?',
        a: 'Typically one to four days depending on the size of the structure, the number of support points and how much sill or beam work is needed underneath.',
      },
      {
        q: 'Can we stay in the house during the lift?',
        a: 'In most cases yes. You will hear the work and you may notice doors moving as the house comes back. We let you know in advance if any part of the job needs the house empty.',
      },
      {
        q: 'Do you level mobile and manufactured homes?',
        a: 'Our work is on permanent residential and light commercial structures. Call and describe what you have at (903) 932-8150 and we will tell you honestly whether it is in our wheelhouse or point you to someone better suited.',
      },
      {
        q: 'Why is my floor sagging in the middle of the house?',
        a: 'On pier and beam that usually means interior piers have settled, a beam has deflected, or a girder was undersized for its span. It is very common in older East Texas homes where interior supports were spaced further apart than modern practice.',
      },
      {
        q: 'Will my doors and windows work properly again?',
        a: 'Usually, and that is one of the most satisfying parts of the job. Doors that dragged for years often latch again once the structure is back to elevation. Some need rehanging afterward, which we will tell you about up front.',
      },
      {
        q: 'What keeps the house from settling again?',
        a: 'Adequate supports at proper spacing, plus correcting the drainage. If water keeps collecting under one side of the house, that side will keep moving no matter how well it was lifted.',
      },
      {
        q: 'Is the leveling work warranted?',
        a: 'Yes, our lifting work carries a long-term warranty with the terms in writing before we begin.',
      },
    ],
    cityAngle: 'settled foundations, sloping floors and doors that no longer latch',
  },
  {
    slug: 'foundation-repair',
    path: '/services/foundation-repair',
    name: 'Foundation Repair',
    navLabel: 'Foundation Repair',
    cityLabel: 'Slab Foundation Repair',
    serviceType: 'Foundation Repair',
    metaTitle: 'Slab Foundation Repair in East Texas | Best Way',
    metaDescription:
      'Slab foundation repair in Longview and Deep East Texas. Press piers, crack stabilization, free inspections, warranted work. Call (903) 932-8150.',
    tagline: 'Stabilizing Concrete Slab Foundations',
    summary: 'Concrete slab stabilization that pinpoints the root cause and corrects it for good.',
    icon: '/img/icon-foundation-repair.png',
    heroImage: '/img/foundation-repair-crew-east-texas.jpg',
    ogImage: '/social/og-foundation-repair.jpg',
    intro: [
      'Foundation repair on a concrete slab means getting the slab back to a stable elevation and keeping it there. In East Texas that almost always comes back to soil moisture: the clay under the slab swells when it takes on water and shrinks as it dries, and the slab moves with it. Repair that does not address why the soil moved is repair you pay for twice.',
      'We start every job with elevation readings across the whole footprint, not just the corner where the crack showed up. A manometer survey tells us how far out of level the slab actually is, where the low points sit, and whether the movement is settlement, heave, or a slab that was never poured level to begin with. That distinction changes the repair completely.',
      'Where piers are warranted we install them to refusal on load-bearing points, lift in controlled increments, and monitor the structure as it comes back. Where the slab needs stabilization rather than lifting, we say so. Owner James Wilson runs the elevation survey himself and is on-site while the work is done.',
    ],
    process: [
      {
        title: 'Manometer Elevation Survey',
        desc: 'We measure elevations across the full slab and map the differential in inches. That map, not a guess from the driveway, is what determines pier placement.',
      },
      {
        title: 'Cause Diagnosis',
        desc: 'Settlement, heave, plumbing leak and poor compaction all produce cracks, and they need different repairs. We identify which one you have before quoting anything.',
      },
      {
        title: 'Pier Placement Plan',
        desc: 'Piers go on load-bearing points at spacings the structure calls for. You get the plan and the price in writing before we start.',
      },
      {
        title: 'Controlled Lift',
        desc: 'We lift in small increments across multiple piers at once, watching the structure as it moves, so the slab comes back without cracking framing or breaking finishes.',
      },
      {
        title: 'Drainage Correction',
        desc: 'We correct the grading and drainage that let the soil move in the first place. On most East Texas jobs this is part of the repair, not an upsell.',
      },
    ],
    equipment: [
      {
        title: 'Steel Press Piers',
        desc: 'Hydraulically driven to refusal on load-bearing strata using the weight of the structure itself. Our default on slab work because depth is determined by the soil, not by a guess.',
      },
      {
        title: 'Poured Concrete Piers',
        desc: 'Used where soil conditions and access suit them. Engineering-approved, cured to strength before any load is transferred.',
      },
      {
        title: 'Manometer Survey Equipment',
        desc: 'Digital elevation measurement across the slab, recorded before and after the lift so you can see exactly what changed.',
      },
      {
        title: 'Polyurethane and Grout Void Fill',
        desc: 'Fills voids left under a slab after soil shrinkage so the slab bears evenly instead of spanning empty space.',
      },
    ],
    symptoms: [
      'Stair-step cracks in exterior brick or mortar joints',
      'Cracks in sheetrock above doors and windows',
      'Doors and windows that stick, drag or will not latch',
      'Gaps between the slab and the brick ledge',
      'Cracked floor tile or grout running in a line',
      'Floors that slope noticeably toward one corner',
    ],
    faqs: [
      {
        q: 'How much does foundation repair cost?',
        a: 'It depends almost entirely on how many piers the structure needs and how deep they have to go. A few piers on one settling corner is a very different job from a full perimeter lift. We give you a written price per the plan after the elevation survey, and the inspection that produces it is free.',
      },
      {
        q: 'How do I know if I actually need piers?',
        a: 'You need an elevation survey, not an opinion. Plenty of cracks are cosmetic and plenty of houses are within tolerance. We will tell you when the reading says monitor rather than repair, and we do not charge for that answer.',
      },
      {
        q: 'Will the cracks close up after the repair?',
        a: 'Many of them will close substantially as the slab comes back to elevation. Some hairline separation in brick and sheetrock stays visible and needs cosmetic patching afterward. We tell you which is which before we start so nothing is a surprise.',
      },
      {
        q: 'How long does the work take?',
        a: 'Most residential slab jobs run one to three working days depending on pier count and access. We give you a schedule with the written quote.',
      },
      {
        q: 'Do I need to move out during the repair?',
        a: 'No. Almost all of our slab work is done from outside the house with the family living in it normally. Interior piers are the exception, and we tell you in advance if any are needed.',
      },
      {
        q: 'Do you use steel or concrete piers?',
        a: 'Both, chosen by soil and access rather than by what we would rather sell. Steel press piers are driven to refusal so depth is set by the soil; poured concrete piers suit certain sites better. We explain which we are recommending and why.',
      },
      {
        q: 'Is the repair warranted?',
        a: 'Yes. Our lifting work carries a long-term warranty, and the scope and terms are in the written agreement before any work begins.',
      },
      {
        q: 'Will foundation repair hurt my resale value?',
        a: 'Documented, warranted repair by a local contractor is a far easier disclosure than an unrepaired foundation problem. Buyers and inspectors want to see that it was addressed properly, and we give you the paperwork to show it.',
      },
      {
        q: 'Could a plumbing leak be causing this?',
        a: 'It happens often enough that we look for it. A leaking supply or drain line under a slab saturates the soil in one spot and drops that part of the house. If the readings point that way we will tell you to get the plumbing tested before spending money on piers.',
      },
      {
        q: 'Do you charge for the inspection?',
        a: 'No. The inspection, the elevation readings and the written recommendation are free with no obligation anywhere in our Deep East Texas service area.',
      },
    ],
    cityAngle:
      'slab settlement, stair-step brick cracking and doors that have gone out of square',
  },
  {
    slug: 'pier-and-beam',
    path: '/services/pier-and-beam',
    name: 'Pier & Beam Repair',
    navLabel: 'Pier & Beam Repair',
    cityLabel: 'Pier & Beam Repair',
    serviceType: 'Pier and Beam Foundation Repair',
    metaTitle: 'Pier & Beam Repair in East Texas | Best Way',
    metaDescription:
      'Pier and beam foundation repair in Deep East Texas. Rotted sills, joists, beams and piers rebuilt. Free inspections. Call (903) 932-8150.',
    tagline: 'Rebuilding Crawlspace Foundations',
    summary: 'Joists, sills, beams and piers rebuilt on older and custom-framed homes.',
    icon: '/img/icon-pier-and-beam.png',
    heroImage: '/img/pier-and-beam-joist-repair.jpg',
    ogImage: '/social/og-pier-and-beam.jpg',
    intro: [
      'Pier and beam homes fail from the wood up as often as from the soil down. A pier can be perfectly sound while the sill plate resting on it has gone soft with rot, or a beam has split at a splice, or joists have been notched out for plumbing until they no longer carry. Any of those produces the same sagging floor as a settled pier, and jacking against rotten wood makes it worse.',
      'So we get under the house and look at all of it. Every pier, every sill, every beam, every joist and the condition of the crawlspace itself — standing water, missing vapor barrier, blocked vents, insufficient clearance. Then we tell you what is structural, what is maintenance, and what can wait.',
      'Repairs are made with treated, engineering-approved material sized for the actual span. Where a pier needs replacing we replace it rather than stacking blocks on it. Where a beam is undersized for its run we say so and size it properly, because putting the original back guarantees the same sag returns.',
    ],
    process: [
      {
        title: 'Full Crawlspace Inspection',
        desc: 'We go under the house and inspect every support and framing member, plus moisture, drainage and ventilation conditions in the crawlspace.',
      },
      {
        title: 'Structural vs Cosmetic Triage',
        desc: 'You get a written list separating what is carrying load and failing from what looks bad but is not structural. Both matter; only one is urgent.',
      },
      {
        title: 'Sill, Beam and Joist Replacement',
        desc: 'Rotted and split members are cut out and replaced with treated material sized for the span, spliced over bearing rather than mid-air.',
      },
      {
        title: 'Pier Replacement and Re-Spacing',
        desc: 'Failed piers are rebuilt and additional piers added where spans were originally too long — the usual cause of a mid-room sag.',
      },
      {
        title: 'Crawlspace Moisture Control',
        desc: 'Vapor barrier, drainage and ventilation corrected so the new wood does not go the way of the old wood.',
      },
    ],
    equipment: [
      {
        title: 'Pressure-Treated Sills and Beams',
        desc: 'Ground-contact rated material at every bearing point, because untreated lumber against a masonry pier in a damp East Texas crawlspace is a repair with an expiry date.',
      },
      {
        title: 'Concrete Piers and Footings',
        desc: 'Poured footings sized for the load rather than dry-stacked block on bare dirt, which is what we most often find under older homes.',
      },
      {
        title: 'Sistered and Replacement Joists',
        desc: 'Notched, split or sagging joists sistered or fully replaced so the floor system carries as designed.',
      },
      {
        title: 'Reinforced Vapor Barrier',
        desc: 'Sealed ground cover that keeps soil moisture out of the crawlspace air and off the framing.',
      },
    ],
    symptoms: [
      'Springy or bouncing floors, especially near the middle of the house',
      'A soft spot or dip in one area of the floor',
      'Musty smell in the house or visible moisture in the crawlspace',
      'Piers that are visibly leaning, cracked or no longer touching the beam',
      'Squeaking floors that have got noticeably worse',
      'Skirting or siding separating near the ground line',
    ],
    faqs: [
      {
        q: 'How much does pier and beam repair cost?',
        a: 'It depends on how much of the wood is going back in. Resetting piers and shimming is the low end; replacing rotted sills, beams and joists across a whole side of the house is the high end. We inspect the crawlspace and price the actual scope, free of charge.',
      },
      {
        q: 'How do I know whether it is the piers or the wood?',
        a: 'You have to get under it and look, which is exactly what the free inspection is. From inside the house the symptoms are identical, which is why houses get jacked when what they needed was new sills.',
      },
      {
        q: 'My crawlspace holds water after every rain. Is that the cause?',
        a: 'It is very often the cause, or at least the accelerant. Standing water rots sills and beams, softens the soil under the piers, and keeps the whole crawlspace at a moisture level wood cannot survive long term. Fixing the drainage is part of fixing the foundation.',
      },
      {
        q: 'Can you add piers where the floor sags in the middle?',
        a: 'Yes, and that is usually the correct fix. Mid-room sag is typically an over-long span between interior supports, which additional properly footed piers resolve permanently.',
      },
      {
        q: 'Do you replace rotted floor joists?',
        a: 'Yes — sistering where the member is sound enough to reinforce, full replacement where it is not. We also address what rotted them, because otherwise the new ones follow.',
      },
      {
        q: 'Is pier and beam worse than a slab?',
        a: 'No, just different. Pier and beam is more accessible and generally cheaper to repair, and plumbing under it is far easier to reach. Slabs have fewer wood-rot failure modes. Neither is inherently the better foundation in East Texas.',
      },
      {
        q: 'How long will the repair take?',
        a: 'Pier resets and shimming are often a day or two. Structural wood replacement across multiple bays can run several days. You get the schedule with the written quote.',
      },
      {
        q: 'Do we need to leave the house?',
        a: 'Almost never. Nearly all of the work happens in the crawlspace beneath you.',
      },
      {
        q: 'Should I add a vapor barrier?',
        a: 'In this climate, yes, in almost every case. It is inexpensive relative to the repair and it materially extends the life of the framing above it.',
      },
      {
        q: 'Is the work warranted?',
        a: 'Yes. Lifting and structural work is warranted long-term, with the terms written into the agreement before we start.',
      },
    ],
    cityAngle: 'rotted sills, settled piers and floors that have started to sag or bounce',
  },
  {
    slug: 'drainage-solutions',
    path: '/services/drainage-solutions',
    name: 'Drainage Solutions',
    navLabel: 'Drainage Solutions',
    cityLabel: 'Foundation Drainage',
    serviceType: 'Foundation Drainage',
    metaTitle: 'Foundation Drainage in East Texas | Best Way',
    metaDescription:
      'French drains, grading and vapor barriers that keep water off your foundation in Deep East Texas. Free inspections. Call (903) 932-8150.',
    tagline: 'Moving Water Away From The Foundation',
    summary: 'Moving water away from the foundation so the repair keeps holding.',
    icon: '/img/icon-drainage-solutions.png',
    heroImage: '/img/foundation-drainage-french-drain.jpg',
    ogImage: '/social/og-drainage-solutions.jpg',
    intro: [
      'Drainage is not a side service to foundation work in East Texas — it is half the repair. Expansive clay moves because its moisture content changes. Piers stop the house from following the soil down; drainage stops the soil from making the trip in the first place. Do one without the other and you have solved half the problem.',
      'The usual culprits are unglamorous and fixable: downspouts dumping at the corner of the slab, ground that slopes back toward the house instead of away, flower beds banked above the brick ledge holding water against the foundation, and a crawlspace with no ground cover and no way for water to leave.',
      'We correct the grade, get roof water out and away, install French drains where surface correction is not enough, and seal crawlspaces with proper vapor barrier. It is the least expensive foundation work you will ever buy and the work that most reliably keeps the expensive kind from coming back.',
    ],
    process: [
      {
        title: 'Water Path Survey',
        desc: 'We walk the property during or right after rain where we can, and trace where roof water, surface water and neighboring runoff actually go.',
      },
      {
        title: 'Grade Correction',
        desc: 'Re-establishing positive fall away from the foundation on every elevation. Often this alone resolves a chronic wet corner.',
      },
      {
        title: 'Roof Water Management',
        desc: 'Downspout extensions and buried discharge lines that carry roof water well clear of the slab instead of releasing it at the corner.',
      },
      {
        title: 'French Drain Installation',
        desc: 'Perforated pipe in washed rock with filter fabric, sloped to a proper daylight or discharge point, where surface grading cannot do the job alone.',
      },
      {
        title: 'Crawlspace Moisture Control',
        desc: 'Sealed vapor barrier, corrected drainage and adequate ventilation so the crawlspace stops feeding moisture into the framing.',
      },
    ],
    equipment: [
      {
        title: 'Perforated Pipe and Washed Rock',
        desc: 'Properly bedded and wrapped in filter fabric so the drain keeps working instead of silting closed in three years.',
      },
      {
        title: 'Filter Fabric',
        desc: 'The difference between a French drain that lasts and a trench full of mud. Non-negotiable on our installs.',
      },
      {
        title: 'Buried Downspout Discharge',
        desc: 'Solid pipe carrying roof water from the downspout to a discharge point clear of the foundation footprint.',
      },
      {
        title: 'Reinforced Vapor Barrier',
        desc: 'Sealed ground cover for crawlspaces, cutting the soil moisture that rots sills and beams from below.',
      },
    ],
    symptoms: [
      'Standing water or a soggy strip along the foundation after rain',
      'Erosion channels or mulch washing out of beds near the house',
      'A crawlspace that holds water or smells musty',
      'Downspouts discharging within a few feet of the slab',
      'Ground sloping toward the house rather than away from it',
      'One consistently wet corner where the cracking is worst',
    ],
    faqs: [
      {
        q: 'How much does a French drain cost?',
        a: 'It depends on linear footage, depth and where the water can be discharged to. A single problem elevation is a modest job; wrapping a whole house is larger. Grading correction is often cheaper than a drain and sometimes does the job on its own, and we will tell you when that is the case.',
      },
      {
        q: 'Will drainage work alone fix my foundation?',
        a: 'If the house has already moved, no — drainage stops it getting worse but it does not lift what has settled. If the movement is early and small, correcting drainage sometimes lets the soil stabilize with no structural work at all. The elevation survey tells us which situation you are in.',
      },
      {
        q: 'Do I really need a drain, or just better grading?',
        a: 'Grading first, always. It is cheaper and it solves a surprising number of problems. We recommend a French drain when the surface simply cannot shed the water — a low lot, a neighboring property draining toward you, or no fall available.',
      },
      {
        q: 'How far should downspouts discharge from the house?',
        a: 'Well clear of the foundation and the backfill zone around it — several feet at minimum, further on clay. Roof water released at the corner of a slab is one of the most common causes of localized settlement we see.',
      },
      {
        q: 'Can you fix a crawlspace that floods?',
        a: 'Yes. That is a combination of exterior water management, correcting the grade around and under the house, and sealing the ground with vapor barrier. Left alone it will take the sills and beams out eventually.',
      },
      {
        q: 'Should I water my foundation in a drought?',
        a: 'Consistent moisture is the goal, so soaker hoses run modestly and evenly around the perimeter during a hard dry spell genuinely help. What causes damage is the extreme swing — bone dry then saturated. We are happy to explain what to do for your specific lot.',
      },
      {
        q: 'Will a French drain damage my yard?',
        a: 'There is trenching involved and the line of the work is visible for a season until grass fills back in. We keep the disturbance to the run itself and restore the surface when we backfill.',
      },
      {
        q: 'Do you install drainage as part of a foundation repair?',
        a: 'Routinely, and we price it as part of the job rather than as an add-on. In this soil, repair without drainage correction is repair with a shorter life.',
      },
      {
        q: 'My neighbor’s lot drains onto mine. What can be done?',
        a: 'Quite a lot, on your own property — intercepting the flow with a drain along the property line and routing it past the house. We will show you what is achievable within your own lot lines.',
      },
      {
        q: 'Is the drainage work warranted?',
        a: 'Yes, with the terms in writing before installation, same as our structural work.',
      },
    ],
    cityAngle: 'standing water against the slab, poor fall and roof water discharging too close to the house',
  },
];

export const getService = (slug?: string): Service | undefined =>
  services.find((s) => s.slug === slug);

export const getOtherServices = (slug: string): Service[] =>
  services.filter((s) => s.slug !== slug);
