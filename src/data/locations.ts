/**
 * Location (service area) page content.
 *
 * Each entry drives one page at /service-areas/:slug, rendered by
 * LocationTemplate. Copy is written to stay accurate for a Longview-based
 * crew that travels across Deep East Texas — no claims of a physical office
 * outside Longview.
 */

export interface LocalFactor {
  title: string;
  desc: string;
}

export interface LocationFaq {
  q: string;
  a: string;
}

export interface Location {
  /** URL segment under /service-areas/ */
  slug: string;
  /** City name as displayed in copy */
  city: string;
  /** "Kilgore, TX" — used in headings and schema */
  cityState: string;
  county: string;
  /** Short distance/drive note from the Longview shop */
  distance: string;
  /** Google Maps embed query */
  mapQuery: string;
  /** Photo used behind the page banner */
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  /** One-line hook under the H1 */
  tagline: string;
  /** Body copy — rendered as paragraphs */
  intro: string[];
  /** Why foundations move in this specific area */
  localFactors: LocalFactor[];
  /** Communities, neighborhoods and landmarks nearby */
  nearby: string[];
  faqs: LocationFaq[];
}

export const locations: Location[] = [
  {
    slug: 'longview-tx',
    city: 'Longview',
    cityState: 'Longview, TX',
    county: 'Gregg County',
    distance: 'Our home base — same-week inspections in most cases',
    mapQuery: 'Longview,+TX',
    heroImage: '/jacitgallery2.jpeg',
    metaTitle: 'Foundation Repair in Longview, TX | Best Way Foundation Repair',
    metaDescription:
      'Longview foundation repair and house leveling from a second-generation, locally owned crew. Free inspections, warranted work, owner on every job. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Longview, Texas',
    intro: [
      'Longview is home for us. Best Way Foundation Repair LLC is headquartered right here in Gregg County, and for more than 25 years we have been lifting, leveling and stabilizing houses across the city — from the older pier and beam homes near downtown and South Longview to the newer slab-on-grade subdivisions spreading north and west toward Highway 259 and Loop 281.',
      'Because we live and work in Longview, you are not waiting on a crew to drive in from Dallas or Houston. Owner James Wilson inspects the property himself, explains exactly what he sees, and stays on-site while the work is done. No call centers, no commission-driven sales pitch, and no cut corners.',
      'If you are seeing cracks creeping up a brick wall, doors that will not latch the way they used to, or floors that feel like they tilt toward one corner of the room, we will come look at it for free and tell you honestly whether it needs repair now, monitoring, or nothing at all.',
    ],
    localFactors: [
      {
        title: 'Gregg County Clay Soils',
        desc: 'Much of Longview sits on sandy topsoil over dense clay subsoil. That clay swells when it takes on water and shrinks back as it dries, and the foundation above it moves right along with it.',
      },
      {
        title: 'Wet Springs, Dry Summers',
        desc: 'East Texas swings from soaking spring storms to hard late-summer dry spells. That repeated shrink-and-swell cycle is the single most common reason Longview homes end up out of level.',
      },
      {
        title: 'A Wide Mix of Home Ages',
        desc: 'Longview has everything from 1930s pier and beam cottages to modern slabs. We work on both, and the right repair for a post-war frame house is not the same as the right repair for a 2000s slab.',
      },
    ],
    nearby: ['White Oak', 'Gladewater', 'Kilgore', 'Hallsville', 'Judson', 'Lakeport', 'Spring Hill', 'Pine Tree'],
    faqs: [
      {
        q: 'Do you charge for a foundation inspection in Longview?',
        a: 'No. Inspections are free and carry no obligation. We will walk the property, take measurements, show you what we find, and give you a written repair plan and price if repairs are warranted.',
      },
      {
        q: 'How fast can you get out to my house?',
        a: 'Longview is our home base, so we can usually schedule an inspection within the same week. Call (903) 932-8150 and we will find a time that works.',
      },
      {
        q: 'Do you repair both slab and pier and beam foundations?',
        a: 'Yes. We handle concrete slab stabilization, pier and beam repair including joists, sills and piers, full house leveling, and the drainage work that keeps the problem from coming back.',
      },
    ],
  },
  {
    slug: 'kilgore-tx',
    city: 'Kilgore',
    cityState: 'Kilgore, TX',
    county: 'Gregg & Rusk Counties',
    distance: 'Roughly 15 miles from our Longview shop',
    mapQuery: 'Kilgore,+TX',
    heroImage: '/jacitgallery3.jpeg',
    metaTitle: 'Foundation Repair in Kilgore, TX | Best Way Foundation Repair',
    metaDescription:
      'Kilgore foundation repair, house leveling and pier & beam work from a local East Texas crew. Free inspections and warranted work. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Kilgore, Texas',
    intro: [
      'Kilgore is a short drive from our Longview shop, and it is one of the areas we work in most. The city grew up around the oil boom, which means a lot of Kilgore houses are older than the neighborhoods around them — and older houses settle in ways newer construction does not.',
      'We repair both concrete slabs and pier and beam structures throughout Kilgore, from the historic streets near the college and downtown to the newer builds out toward Highway 259 and FM 349. Owner James Wilson inspects every property personally and is on-site while your repair is done.',
      'Whether it is a corner of the house that has dropped, a chimney pulling away from the brick, or a floor that has developed a noticeable slope, we will give you a free inspection and a straight answer about what is actually going on underneath.',
    ],
    localFactors: [
      {
        title: 'Older Housing Stock',
        desc: 'Many Kilgore homes date to the boom years and sit on original piers or early slabs. Decades of soil movement add up, and sills, beams and joists often need attention alongside the foundation itself.',
      },
      {
        title: 'Shifting Clay Subsoil',
        desc: 'Like most of Gregg and Rusk County, Kilgore soils hold water unevenly. One side of a house can stay damp under a downspout while the other bakes dry, and the foundation twists between the two.',
      },
      {
        title: 'Drainage Around the Slab',
        desc: 'Poor grading and roof runoff dumping next to the foundation are two of the most common problems we find in Kilgore. Fixing the water is often as important as fixing the concrete.',
      },
    ],
    nearby: ['Longview', 'White Oak', 'Liberty City', 'Overton', 'Henderson', 'New London', 'Lakeport'],
    faqs: [
      {
        q: 'How long does foundation repair take on a Kilgore home?',
        a: 'Most residential jobs take a few days once we start. The exact timeline depends on how much of the perimeter needs support and whether interior work is involved — we give you that estimate up front, before you commit.',
      },
      {
        q: 'Will you work on an older pier and beam house?',
        a: 'Absolutely. Older pier and beam homes are some of our most common work in Kilgore. We level the structure, replace rotted or cracked framing members, and set new supports where the originals have failed.',
      },
      {
        q: 'Is your work warranted?',
        a: 'Yes. Our lifting and leveling work carries a long-term warranty. We will go over exactly what is covered when we present your repair plan.',
      },
    ],
  },
  {
    slug: 'gladewater-tx',
    city: 'Gladewater',
    cityState: 'Gladewater, TX',
    county: 'Gregg & Upshur Counties',
    distance: 'Roughly 15 miles northwest of Longview',
    mapQuery: 'Gladewater,+TX',
    heroImage: '/jacitgallery4.jpeg',
    metaTitle: 'Foundation Repair in Gladewater, TX | Best Way Foundation Repair',
    metaDescription:
      'Foundation repair and house leveling in Gladewater, TX. Second-generation local crew, free inspections, warranted work. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Gladewater, Texas',
    intro: [
      'Gladewater sits just up the road from us, straddling the Gregg and Upshur county line. It is an older town with a lot of character — and a lot of homes built long before anyone was thinking about how the clay underneath would behave in a drought year.',
      'We handle slab stabilization, complete house leveling, pier and beam repair and drainage correction throughout Gladewater and the surrounding country. Being 20 minutes out means we can get to you quickly and come back if you ever need us.',
      'Sticking doors, hairline cracks that keep getting wider, gaps opening above windows, or a floor that has started to feel springy in one spot are all worth a look. The inspection is free, and if your foundation is fine we will tell you that too.',
    ],
    localFactors: [
      {
        title: 'Rural Lots and Uneven Grading',
        desc: 'Many Gladewater properties sit on larger, sloping lots where water runs toward the house instead of away from it. Regrading and drainage work often go hand in hand with the structural repair.',
      },
      {
        title: 'Historic Homes on Original Piers',
        desc: 'Gladewater has a great stock of older frame homes. Original wood piers and sills eventually rot or crush, letting the floor system sag between supports.',
      },
      {
        title: 'Seasonal Soil Movement',
        desc: 'The same shrink-swell clay that moves houses in Longview runs under Gladewater. Long dry stretches pull moisture out from under the perimeter and the corners drop first.',
      },
    ],
    nearby: ['Longview', 'White Oak', 'Gilmer', 'Big Sandy', 'Union Grove', 'Clarksville City', 'Warren City'],
    faqs: [
      {
        q: 'Do you travel to Gladewater for a free inspection?',
        a: 'Yes — Gladewater is well inside our normal service area and there is no charge or travel fee for the inspection.',
      },
      {
        q: 'My floors sag in the middle of the house. Is that a foundation problem?',
        a: 'On a pier and beam home it usually means interior supports, beams or joists have settled or deteriorated. That is a repair we do often. We will get under the house, find the failing members, and rebuild that support properly.',
      },
      {
        q: 'Can drainage work alone fix my problem?',
        a: 'Sometimes. If the structure has not moved much yet, correcting drainage can stop the problem where it stands. If the house has already shifted, it needs to be lifted back to true and then protected with better drainage.',
      },
    ],
  },
  {
    slug: 'white-oak-tx',
    city: 'White Oak',
    cityState: 'White Oak, TX',
    county: 'Gregg County',
    distance: 'Roughly 10 miles from our Longview shop',
    mapQuery: 'White+Oak,+TX',
    heroImage: '/jacitgallery.jpeg',
    metaTitle: 'Foundation Repair in White Oak, TX | Best Way Foundation Repair',
    metaDescription:
      'White Oak foundation repair, house leveling and drainage solutions from a locally owned East Texas crew. Free inspections. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in White Oak, Texas',
    intro: [
      'White Oak is one of our closest neighbors — barely ten minutes from the shop. We have worked on houses all over town, on both the established streets near the schools and the newer slab construction that has filled in around them.',
      'Our approach does not change because a job is close by: a free inspection, a clear explanation of the cause, engineering-approved materials, and owner James Wilson on-site until the work is finished.',
      'If you have noticed brick cracks, a door that suddenly drags, or a gap opening between the slab and the wall, give us a call. We would rather look at it early, while it is still a small repair.',
    ],
    localFactors: [
      {
        title: 'Mixed Slab and Pier Construction',
        desc: 'White Oak has both mid-century frame homes on piers and newer slab foundations. Each fails differently, and each needs a different repair method — we do both.',
      },
      {
        title: 'Water Movement Along the Perimeter',
        desc: 'Flat lots with poor fall let rainwater sit against the foundation. Persistent moisture on one side of a slab is a reliable way to end up with an unlevel house.',
      },
      {
        title: 'Tree Roots and Dry Pockets',
        desc: 'Large East Texas hardwoods pull an enormous amount of water out of the soil in summer. A big tree close to the house often shows up as settlement on that exact corner.',
      },
    ],
    nearby: ['Longview', 'Gladewater', 'Kilgore', 'Union Grove', 'Clarksville City', 'Judson'],
    faqs: [
      {
        q: 'Are small brick cracks something to worry about?',
        a: 'Hairline cracks are common and not always structural. What matters is whether they are growing, stair-stepping through the mortar joints, or paired with doors and windows that no longer fit. That combination is worth an inspection.',
      },
      {
        q: 'Do I need an engineer before you can start?',
        a: 'Not usually for standard residential repair. We use engineering-approved methods and materials, and if a job genuinely calls for an engineer\'s involvement we will tell you plainly rather than talking you into extra work.',
      },
      {
        q: 'How much does foundation repair cost in White Oak?',
        a: 'It depends entirely on how many supports the house needs and how far it has moved. We price by the actual scope after the inspection, in writing, with no hidden add-ons.',
      },
    ],
  },
  {
    slug: 'hallsville-tx',
    city: 'Hallsville',
    cityState: 'Hallsville, TX',
    county: 'Harrison County',
    distance: 'Roughly 12 miles east of Longview',
    mapQuery: 'Hallsville,+TX',
    heroImage: '/jacitgallery5.png',
    metaTitle: 'Foundation Repair in Hallsville, TX | Best Way Foundation Repair',
    metaDescription:
      'Foundation repair and house leveling in Hallsville, TX. Free inspections, warranted work, owner on every job. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Hallsville, Texas',
    intro: [
      'Hallsville sits just east of Longview in Harrison County, and it is an easy trip for our crew. A lot of the homes out here are on larger rural lots, which brings its own set of foundation issues — septic fields, long driveways that channel water, and grading that was never quite right to begin with.',
      'We repair slab foundations, level houses back to true, rebuild pier and beam support systems, and correct the drainage that caused the trouble in the first place. Owner James Wilson inspects and oversees every job personally.',
      'If your floors have developed a slope, a wall has started to bow, or cracks keep reopening after you patch them, we will come out and take a look at no charge.',
    ],
    localFactors: [
      {
        title: 'Harrison County Clay',
        desc: 'The clay soils east of Longview hold water stubbornly and give it up slowly. Foundations sitting on them move seasonally unless they are properly supported below the active zone.',
      },
      {
        title: 'Rural Drainage Patterns',
        desc: 'On acreage, water often has nowhere to go but toward the house. We look at the whole lot, not just the four walls, when we diagnose a Hallsville foundation.',
      },
      {
        title: 'Older Frame Homes',
        desc: 'Pier and beam houses are common out here. Rotted sills, crushed piers and sagging joists are frequent findings, and all are repairable without rebuilding the house.',
      },
    ],
    nearby: ['Longview', 'Marshall', 'Elysian Fields', 'Lakeport', 'Karnack', 'Waskom'],
    faqs: [
      {
        q: 'Do you service rural properties outside the Hallsville city limits?',
        a: 'Yes. We work throughout Harrison County and the surrounding rural areas. If you are not sure whether you are in range, call and ask — we will tell you straight.',
      },
      {
        q: 'What causes cracks to reopen after I patch them?',
        a: 'Patching treats the symptom. If the foundation is still moving, the crack will come back every season. Stabilizing the structure first is what makes the cosmetic repair last.',
      },
      {
        q: 'Is the inspection really free?',
        a: 'It is. No charge, no travel fee, and no obligation to hire us afterward.',
      },
    ],
  },
  {
    slug: 'marshall-tx',
    city: 'Marshall',
    cityState: 'Marshall, TX',
    county: 'Harrison County',
    distance: 'Roughly 25 miles east of Longview',
    mapQuery: 'Marshall,+TX',
    heroImage: '/jacitgallery6.png',
    metaTitle: 'Foundation Repair in Marshall, TX | Best Way Foundation Repair',
    metaDescription:
      'Marshall, TX foundation repair, house leveling and pier & beam restoration. Second-generation local crew with warranted work. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Marshall, Texas',
    intro: [
      'Marshall has some of the finest historic homes in East Texas, and historic homes need a repair crew that understands how they were built. We have spent 25-plus years working on structures like these — original piers, heavy timber framing, deep porches and additions layered on over decades.',
      'We also handle plenty of modern slab work in Marshall\'s newer neighborhoods. Whichever you have, the process is the same: a free inspection, an honest diagnosis, a written plan, and owner James Wilson on-site while the repair is made.',
      'Doors that stick in one season and swing free in another, cracks stair-stepping through brick mortar, sloping floors, or a chimney separating from the wall are all reasons to have someone look underneath.',
    ],
    localFactors: [
      {
        title: 'Historic Construction',
        desc: 'Marshall\'s older homes were built on materials that were never meant to last a century underground. Original wood piers and sills eventually give way, and the floor system settles unevenly on top of them.',
      },
      {
        title: 'Additions and Add-Ons',
        desc: 'Rooms added years after the original build often sit on shallower footings than the main house. The two sections then move at different rates, and the joint between them cracks.',
      },
      {
        title: 'Expansive Soils and Big Trees',
        desc: 'Mature tree cover plus shrink-swell clay is a demanding combination. Roots draw moisture from under the perimeter in dry months and the foundation follows the soil down.',
      },
    ],
    nearby: ['Hallsville', 'Longview', 'Waskom', 'Karnack', 'Elysian Fields', 'Jefferson', 'Scottsville'],
    faqs: [
      {
        q: 'Can you repair a historic home without damaging the original structure?',
        a: 'That is a large part of what we do. We lift slowly and in controlled stages, support the original framing rather than replacing it wherever it is sound, and take care with plaster, trim and masonry.',
      },
      {
        q: 'Do you travel to Marshall for small jobs?',
        a: 'Yes. Marshall is a regular stop for us and we will look at a single sagging corner just as readily as a whole-house level.',
      },
      {
        q: 'How do I know if my house actually needs leveling?',
        a: 'We take elevation measurements throughout the house so the answer is a number, not an opinion. If the variance is within normal tolerance, we will say so and you owe us nothing.',
      },
    ],
  },
  {
    slug: 'tyler-tx',
    city: 'Tyler',
    cityState: 'Tyler, TX',
    county: 'Smith County',
    distance: 'Roughly 40 miles west of Longview',
    mapQuery: 'Tyler,+TX',
    heroImage: '/jacitgallery7.png',
    metaTitle: 'Foundation Repair in Tyler, TX | Best Way Foundation Repair',
    metaDescription:
      'Tyler, TX foundation repair and house leveling from a second-generation East Texas company. Free inspections, transparent pricing, warranted work. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Tyler, Texas',
    intro: [
      'Tyler is the largest city we serve, and we make the drive west regularly. Smith County has a huge range of housing — the older brick and frame homes in the Azalea District and around downtown, mid-century ranch houses, and thousands of newer slabs on the south and southeast sides.',
      'What Tyler homeowners tell us they want most is a straight answer, and that is what we sell. We inspect for free, show you the measurements, explain what the soil is doing, and quote only the work the house actually needs. Owner James Wilson is on-site for the repair itself.',
      'Cracks in brick or sheetrock, doors and windows that have gone out of square, sloping floors, or separation between the slab and the framing are all worth having checked before they get expensive.',
    ],
    localFactors: [
      {
        title: 'Sandy Soils Over Clay',
        desc: 'Much of Tyler has sandy surface soil over a clay layer. Water moves quickly through the sand and then stalls at the clay, so moisture builds unevenly under the foundation.',
      },
      {
        title: 'Sloping Building Sites',
        desc: 'Tyler is hillier than most of East Texas. Homes built into a grade have unequal soil pressure and drainage across the footprint, and the downhill side is usually where the settling shows first.',
      },
      {
        title: 'Rapid New Construction',
        desc: 'Newer slabs are not immune. A slab poured on fill that was never properly compacted can start moving within a few years, and it often shows up as a single dropping corner.',
      },
    ],
    nearby: ['Jacksonville', 'Whitehouse', 'Chandler', 'Lindale', 'Bullard', 'Flint', 'Arp', 'Kilgore'],
    faqs: [
      {
        q: 'Do you really come all the way to Tyler?',
        a: 'Yes. Tyler and the surrounding Smith County communities are part of our regular service area, and there is no travel charge for the inspection.',
      },
      {
        q: 'My house is only eight years old. Can it already need foundation work?',
        a: 'It can. New does not mean settled. If the pad was built on poorly compacted fill or drainage was never finished correctly, a newer slab can move as much as an old one.',
      },
      {
        q: 'Will foundation repair hurt my resale value?',
        a: 'Properly documented, warranted repair generally helps. Buyers and inspectors are far more concerned about an unaddressed moving foundation than about one that was repaired correctly and can be shown to be stable.',
      },
    ],
  },
  {
    slug: 'henderson-tx',
    city: 'Henderson',
    cityState: 'Henderson, TX',
    county: 'Rusk County',
    distance: 'Roughly 25 miles south of Longview',
    mapQuery: 'Henderson,+TX',
    heroImage: '/jacitgallery2.jpeg',
    metaTitle: 'Foundation Repair in Henderson, TX | Best Way Foundation Repair',
    metaDescription:
      'Henderson, TX foundation repair, house leveling and pier & beam work. Locally owned, free inspections, warranted results. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Henderson, Texas',
    intro: [
      'Henderson is an easy run south from Longview and a town we know well. Rusk County has a lot of older housing stock along with rural properties spread out on acreage, and both tend to develop foundation problems the same way — slowly, then all at once.',
      'We stabilize slabs, level houses, rebuild pier and beam support systems, and fix the drainage problems that started it. Every inspection is free, every price is written down before work begins, and owner James Wilson is on the job site.',
      'If you have a floor that slopes, a wall pulling away at a corner, or cracks that reappear every summer, let us take a look under the house before the next dry spell.',
    ],
    localFactors: [
      {
        title: 'Rusk County Soil Movement',
        desc: 'The clay under much of Rusk County expands and contracts significantly with the seasons. Foundations that are not supported below that active layer ride up and down with it.',
      },
      {
        title: 'Acreage and Well Water',
        desc: 'Rural lots often have drainage, septic and irrigation all interacting near the foundation. Concentrated moisture in one spot is a very common cause of one-sided settling out here.',
      },
      {
        title: 'Long-Standing Pier Homes',
        desc: 'Henderson has many homes that have been on their original piers for generations. Crushed or rotted supports are normal at that age and entirely repairable.',
      },
    ],
    nearby: ['Kilgore', 'Tatum', 'Overton', 'Longview', 'New London', 'Mount Enterprise', 'Laird Hill'],
    faqs: [
      {
        q: 'How soon should I act on a foundation problem?',
        a: 'Sooner is cheaper. Foundation movement does not reverse itself, and the framing, brick, plumbing and finishes above it keep taking the strain. Early repairs are almost always smaller repairs.',
      },
      {
        q: 'Do you fix the drainage too, or just the foundation?',
        a: 'Both. Correcting how water moves around the house is what keeps the repair from being undone in a few seasons, so we treat it as part of the job rather than an upsell.',
      },
      {
        q: 'Who will actually be at my house?',
        a: 'Our own crew, trained under James Wilson, with James on-site. We do not subcontract the work out.',
      },
    ],
  },
  {
    slug: 'gilmer-tx',
    city: 'Gilmer',
    cityState: 'Gilmer, TX',
    county: 'Upshur County',
    distance: 'Roughly 25 miles northwest of Longview',
    mapQuery: 'Gilmer,+TX',
    heroImage: '/jacitgallery3.jpeg',
    metaTitle: 'Foundation Repair in Gilmer, TX | Best Way Foundation Repair',
    metaDescription:
      'Gilmer, TX foundation repair and house leveling. Second-generation crew, free inspections, engineering-approved materials. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Gilmer, Texas',
    intro: [
      'Gilmer sits northwest of us in Upshur County, and we cover it regularly. It is a mix of in-town homes and country properties, many of them older and many of them on pier and beam foundations that have been carrying the load for a very long time.',
      'We handle full house leveling, slab stabilization, joist and beam replacement, pier resetting and drainage correction. The inspection is free, the pricing is transparent, and owner James Wilson is on-site for the work.',
      'If a room has started to feel like it tilts, if you can see daylight where the trim meets the floor, or if brick cracks keep widening, that is worth a free look.',
    ],
    localFactors: [
      {
        title: 'Upshur County Terrain',
        desc: 'Rolling ground and sandy-over-clay soils mean water collects in pockets rather than draining evenly. Foundations settle where the moisture concentrates.',
      },
      {
        title: 'Country Homes on Original Supports',
        desc: 'Wood piers and sills eventually rot, especially where crawl space ventilation is poor. Replacing them with properly set supports is straightforward work when it is done right.',
      },
      {
        title: 'Crawl Space Moisture',
        desc: 'Standing water or persistent damp under a pier and beam house attacks the framing from below. We look at the crawl space conditions, not just the visible cracks.',
      },
    ],
    nearby: ['Gladewater', 'Big Sandy', 'Ore City', 'Longview', 'Diana', 'Union Grove'],
    faqs: [
      {
        q: 'Can you replace rotted floor joists and sills?',
        a: 'Yes, that is routine work for us. We support the structure, cut out the failed members, and rebuild the framing with sound material before setting the house back to level.',
      },
      {
        q: 'Do you serve rural Upshur County addresses?',
        a: 'We do. Gilmer and the surrounding country are part of our normal service area.',
      },
      {
        q: 'What does "house leveling" actually involve?',
        a: 'We measure elevations throughout the house, install or reset supports where they are needed, then lift in small controlled increments until the structure is back within tolerance and evenly carried.',
      },
    ],
  },
  {
    slug: 'carthage-tx',
    city: 'Carthage',
    cityState: 'Carthage, TX',
    county: 'Panola County',
    distance: 'Roughly 40 miles southeast of Longview',
    mapQuery: 'Carthage,+TX',
    heroImage: '/jacitgallery4.jpeg',
    metaTitle: 'Foundation Repair in Carthage, TX | Best Way Foundation Repair',
    metaDescription:
      'Carthage, TX foundation repair, house leveling and pier & beam restoration from a locally owned East Texas crew. Free inspections. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Carthage, Texas',
    intro: [
      'Carthage and the rest of Panola County are within our regular reach, and we make the trip southeast often. Many properties out this way sit on acreage where drainage was never engineered, and that shows up in the foundation sooner or later.',
      'We repair slabs, level houses back to true, rebuild failing pier and beam support, and correct the water problems underneath it all. Free inspection, written pricing, and owner James Wilson on-site for the repair.',
      'Cracks that keep coming back, floors that have gone out of level, doors that will not close square — call us and we will come look at no charge.',
    ],
    localFactors: [
      {
        title: 'Panola County Clay',
        desc: 'Heavy clay content holds water long after the rain stops. Foundations bearing on it move seasonally unless their support reaches stable soil below.',
      },
      {
        title: 'Large Lots, Uncontrolled Runoff',
        desc: 'On rural property, roof and yard runoff often has no planned path away from the house. Concentrated water at the perimeter is one of the most common causes we find here.',
      },
      {
        title: 'Aging Pier Systems',
        desc: 'Older frame homes on original piers are common in and around Carthage. Failed supports let the floor system sag between bearing points.',
      },
    ],
    nearby: ['Tatum', 'Beckville', 'Henderson', 'Longview', 'Deberry', 'Gary City', 'Panola'],
    faqs: [
      {
        q: 'Is Carthage too far for you to service?',
        a: 'Not at all. Panola County is part of our service area and we do not charge extra for the drive.',
      },
      {
        q: 'What happens during the free inspection?',
        a: 'We walk the exterior and interior, take elevation readings, look at drainage and grading, get under the house when there is a crawl space, then explain what we found and what — if anything — needs to be done.',
      },
      {
        q: 'Do you offer any guarantee?',
        a: 'Yes. Our lifting and leveling work is warranted, and we go over the terms with you in person before you sign anything.',
      },
    ],
  },
  {
    slug: 'tatum-tx',
    city: 'Tatum',
    cityState: 'Tatum, TX',
    county: 'Rusk & Panola Counties',
    distance: 'Roughly 20 miles southeast of Longview',
    mapQuery: 'Tatum,+TX',
    heroImage: '/jacitgallery.jpeg',
    metaTitle: 'Foundation Repair in Tatum, TX | Best Way Foundation Repair',
    metaDescription:
      'Tatum, TX foundation repair and house leveling from a second-generation local crew. Free inspections, warranted work, owner on every job. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Tatum, Texas',
    intro: [
      'Tatum is a short drive southeast of Longview, near Martin Creek Lake, and it is well inside the area we cover every week. Lakeside and rural properties bring extra moisture into the equation, which makes drainage a bigger part of the picture here than in town.',
      'We do complete house leveling, slab stabilization, pier and beam repair and drainage correction. The inspection costs nothing, the plan is written down before we start, and owner James Wilson is on-site while the work is done.',
      'If your floors slope, your doors have quit latching, or you have cracks that widen every summer, we will come out and tell you honestly what is happening below.',
    ],
    localFactors: [
      {
        title: 'Lake-Area Moisture',
        desc: 'Properties near Martin Creek Lake and the surrounding creek bottoms deal with higher, more variable soil moisture. That means more movement for foundations that are not properly supported.',
      },
      {
        title: 'Shrink-Swell Clay',
        desc: 'The clay soils across Rusk and Panola County expand when wet and contract hard in a dry summer, taking the foundation with them.',
      },
      {
        title: 'Older Rural Housing',
        desc: 'Many Tatum-area homes are pier and beam on original supports. Rotted sills, sagging joists and settled piers are the usual findings, and all are fixable.',
      },
    ],
    nearby: ['Henderson', 'Carthage', 'Longview', 'Beckville', 'Easton', 'Lakeport'],
    faqs: [
      {
        q: 'Do you work on lake houses and cabins?',
        a: 'Yes. Structures near the water frequently need pier and beam repair and improved drainage, and both are core services for us.',
      },
      {
        q: 'How do I schedule an inspection?',
        a: 'Call (903) 932-8150 or send us a message through the form on this page and we will get you on the schedule.',
      },
      {
        q: 'Will you try to sell me repairs I do not need?',
        a: 'No. If the house is within tolerance we tell you so and there is no charge. That reputation is why most of our work comes by word of mouth.',
      },
    ],
  },
  {
    slug: 'jacksonville-tx',
    city: 'Jacksonville',
    cityState: 'Jacksonville, TX',
    county: 'Cherokee County',
    distance: 'Roughly 60 miles southwest of Longview',
    mapQuery: 'Jacksonville,+TX',
    heroImage: '/jacitgallery5.png',
    metaTitle: 'Foundation Repair in Jacksonville, TX | Best Way Foundation Repair',
    metaDescription:
      'Jacksonville, TX foundation repair and house leveling. Free inspections, engineering-approved methods, warranted work. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Jacksonville, Texas',
    intro: [
      'Jacksonville is the western edge of our regular service area, and we cover Cherokee County right along with the rest of Deep East Texas. There is a lot of older housing here, much of it on pier and beam, plus newer slab neighborhoods on the outskirts.',
      'Slab stabilization, whole-house leveling, joist and beam replacement, pier resetting and drainage correction are all work we do here. Free inspection, honest diagnosis, transparent price, owner on-site.',
      'Cracks in brick or drywall, floors that pitch to one side, doors that stick in humid weather and swing loose in dry weather — any of those is a good reason to have the foundation looked at.',
    ],
    localFactors: [
      {
        title: 'Cherokee County Soils',
        desc: 'Sandy surface soils over clay make for uneven drainage. Water passes through the top layer and collects at the clay, loading the foundation unevenly.',
      },
      {
        title: 'Hilly Building Sites',
        desc: 'Homes built on slopes carry different soil pressure across the footprint, and the downhill portion typically settles first.',
      },
      {
        title: 'Long-Lived Pier Homes',
        desc: 'A large share of Jacksonville\'s housing has been standing on original supports for decades. Replacing failed piers and framing restores the structure without major reconstruction.',
      },
    ],
    nearby: ['Tyler', 'Bullard', 'Rusk', 'Troup', 'Frankston', 'New Summerfield', 'Whitehouse'],
    faqs: [
      {
        q: 'Do you charge extra to come to Jacksonville?',
        a: 'No. It is a longer drive than Longview, but the inspection is still free and there is no travel surcharge on the work.',
      },
      {
        q: 'Can you fix a house that has already had foundation work done badly?',
        a: 'Often, yes. We inspect what is already there, tell you what is holding and what is not, and correct the parts that failed.',
      },
      {
        q: 'How long will the repair last?',
        a: 'Our lifting work is warranted long-term. Using engineering-approved materials and fixing the drainage that caused the movement is what makes that possible.',
      },
    ],
  },
  {
    slug: 'rusk-tx',
    city: 'Rusk',
    cityState: 'Rusk, TX',
    county: 'Cherokee County',
    distance: 'Roughly 60 miles south-southwest of Longview',
    mapQuery: 'Rusk,+TX',
    heroImage: '/jacitgallery6.png',
    metaTitle: 'Foundation Repair in Rusk, TX | Best Way Foundation Repair',
    metaDescription:
      'Rusk, TX foundation repair, house leveling and pier & beam work. Free inspections, warranted results, owner on every job. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Rusk, Texas',
    intro: [
      'Rusk is the Cherokee County seat, and it has the housing stock you would expect from a town that old — homes near the courthouse square that have been standing on their original piers for generations, alongside newer slab construction out toward the highways.',
      'We level houses, stabilize slabs, rebuild pier and beam support systems, and correct the drainage that caused the movement in the first place. The inspection is free, the price is written down before anything starts, and owner James Wilson is on-site for the work.',
      'Floors that pitch toward one corner, a door that has started dragging on the jamb, or a crack in the brick that opens up every August are all worth a look before the next dry spell makes them worse.',
    ],
    localFactors: [
      {
        title: 'Rolling Cherokee County Terrain',
        desc: 'Rusk sits in genuinely hilly country. A house built across a grade carries different soil pressure from one end to the other, and the downhill side is usually the first to drop.',
      },
      {
        title: 'Sandy Surface Over Tight Clay',
        desc: 'Rain moves quickly through the sandy topsoil and then stalls at the clay underneath. That perched water loads one part of the foundation harder than the rest.',
      },
      {
        title: 'Century-Old Housing Near the Square',
        desc: 'Older homes in Rusk were built on shallow piers and cedar or brick supports. Crushed, leaning or rotted supports are normal at that age and are straightforward to replace.',
      },
    ],
    nearby: ['Jacksonville', 'Alto', 'New Summerfield', 'Reklaw', 'Mount Enterprise', 'Gallatin', 'Cuney'],
    faqs: [
      {
        q: 'Do you serve the city of Rusk and Rusk County?',
        a: 'Both. The city of Rusk is in Cherokee County, while Rusk County is just east with Henderson as its seat — we cover the city of Rusk, Henderson and the communities across both counties.',
      },
      {
        q: 'Is the inspection really free this far from Longview?',
        a: 'Yes. The inspection and the written repair plan are free with no obligation, whatever the distance. Call (903) 932-8150 and we will confirm scheduling for your area.',
      },
      {
        q: 'Can an old pier and beam house be leveled without tearing it up?',
        a: 'In most cases, yes. We work from underneath, replacing failed piers and rotted framing and bringing the house back to level in controlled stages so the finishes above take as little strain as possible.',
      },
    ],
  },
  {
    slug: 'nacogdoches-tx',
    city: 'Nacogdoches',
    cityState: 'Nacogdoches, TX',
    county: 'Nacogdoches County',
    distance: 'Roughly 70 miles south of Longview',
    mapQuery: 'Nacogdoches,+TX',
    heroImage: '/jacitgallery7.png',
    metaTitle: 'Foundation Repair in Nacogdoches, TX | Best Way Foundation Repair',
    metaDescription:
      'Nacogdoches, TX foundation repair and house leveling. Historic pier & beam homes and modern slabs. Free inspections, warranted work. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Nacogdoches, Texas',
    intro: [
      'Nacogdoches is the oldest town in Texas, and it has the foundations to prove it. The historic neighborhoods around the older parts of town are full of homes that have been on pier and beam for a century or more, and they move in ways a modern slab simply does not.',
      'We handle the whole range here — whole-house leveling, pier and sill replacement, joist and beam repair, slab stabilization, and the drainage corrections that keep a repair from being undone in a few wet seasons. Free inspection, honest diagnosis, written price, owner on the job.',
      'If you are managing a rental property near the university or living in a house your family has owned for decades, the warning signs are the same: sloping floors, sticking doors, cracks that come and go with the weather, and gaps opening at trim or brick.',
    ],
    localFactors: [
      {
        title: 'Red Clay Redland Soils',
        desc: 'Nacogdoches sits in the Redlands, where iron-rich red clay runs deep. That clay holds water and swells, then gives it up and shrinks, and the foundation follows it both directions.',
      },
      {
        title: 'Creek Bottoms and Low Lots',
        desc: 'Creeks cut through town and a lot of homes sit on the low ground near them. Persistent moisture under one side of a house is one of the most common causes of uneven settling here.',
      },
      {
        title: 'Very Old Housing Stock',
        desc: 'In the historic districts it is normal to find original shallow supports still carrying the house. Replacing them restores the structure without disturbing the character of the home.',
      },
    ],
    nearby: ['Lufkin', 'Appleby', 'Cushing', 'Garrison', 'Douglass', 'Chireno', 'Martinsville', 'Etoile'],
    faqs: [
      {
        q: 'Do you work on historic homes in Nacogdoches?',
        a: 'Yes, and they are a large part of what we do. Older homes need to be lifted slowly and in stages to protect plaster, trim and masonry, which is exactly how we approach them.',
      },
      {
        q: 'How do I know whether it is the foundation or just an old house settling?',
        a: 'That is what the free inspection answers. We take measurements across the floor, look at the support system underneath, and tell you plainly whether it needs repair, monitoring, or nothing at all.',
      },
      {
        q: 'Do you handle rental and investment properties?',
        a: 'Yes. We can inspect, provide a written scope and price for your records, and schedule the work around tenants where that is needed.',
      },
    ],
  },
  {
    slug: 'lufkin-tx',
    city: 'Lufkin',
    cityState: 'Lufkin, TX',
    county: 'Angelina County',
    distance: 'Roughly 90 miles south of Longview',
    mapQuery: 'Lufkin,+TX',
    heroImage: '/jacitgallery2.jpeg',
    metaTitle: 'Foundation Repair in Lufkin, TX | Best Way Foundation Repair',
    metaDescription:
      'Lufkin, TX foundation repair, house leveling and pier & beam repair. Free inspections, engineering-approved methods, warranted work. Call (903) 932-8150.',
    tagline: 'Foundation Repair & House Leveling in Lufkin, Texas',
    intro: [
      'Lufkin marks the southern end of our service area, and Angelina County gets the wettest weather of anywhere we work. More rain means more soil movement, and it shows up in foundations across the city.',
      'We stabilize slabs, level houses back to true, replace failed piers, joists and sills, and fix the grading and drainage that let water sit against the house. Every inspection is free, every price is in writing first, and our own crew does the work with owner James Wilson on-site.',
      'Doors and windows that bind, floors with a noticeable slope, cracks stair-stepping through brick, or a wall pulling away at a corner all point back to what is happening under the house.',
    ],
    localFactors: [
      {
        title: 'The Region\'s Heaviest Rainfall',
        desc: 'Deep East Texas takes on more rain each year than the counties north of it. Saturated clay under a foundation loses bearing strength, and the house settles into the soft spots.',
      },
      {
        title: 'Big Pines Close to the House',
        desc: 'Mature pines and hardwoods pull large amounts of moisture out of the soil on one side of a house during dry spells. That localized drying is a very common cause of one-sided settling in the piney woods.',
      },
      {
        title: 'Timber-Era and Mid-Century Homes',
        desc: 'Lufkin grew with the lumber and foundry industry, leaving a lot of mid-century slab and pier and beam homes now well past the age where original supports and drainage need attention.',
      },
    ],
    nearby: ['Nacogdoches', 'Diboll', 'Huntington', 'Hudson', 'Zavalla', 'Burke', 'Central', 'Pollok'],
    faqs: [
      {
        q: 'Do you really come all the way to Lufkin?',
        a: 'Yes. Lufkin and Angelina County are part of our service area. It is a longer drive than Longview, so call (903) 932-8150 and we will confirm scheduling — the inspection itself is still free.',
      },
      {
        q: 'Will fixing the foundation stop the problem from coming back?',
        a: 'Only if the water is dealt with too. In a climate this wet, correcting drainage and grading is part of the repair rather than an add-on, because that is what keeps the house where we put it.',
      },
      {
        q: 'What kind of warranty comes with the work?',
        a: 'Our lifting work is warranted long-term. We use engineering-approved materials and methods, and we put the scope and the warranty in writing before the job starts.',
      },
    ],
  },
];

export const getLocation = (slug?: string): Location | undefined =>
  locations.find((l) => l.slug === slug);

/** Other locations, used for the internal "nearby areas" cross-links. */
export const getOtherLocations = (slug: string): Location[] =>
  locations.filter((l) => l.slug !== slug);
