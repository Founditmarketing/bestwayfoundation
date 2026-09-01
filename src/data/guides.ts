/**
 * Long-form guide content — the cost and comparison pages.
 *
 * These exist because the site previously answered none of the questions
 * homeowners actually type ("what does this cost", "slab or pier and beam",
 * "which pier system"). Comparison tables and direct answers are what AI
 * search engines quote, so each guide leads with the answer and then explains
 * it rather than building up to it.
 *
 * NOTE(client): no dollar figures appear anywhere in this content. Quoting
 * price bands we have not verified with Best Way would be worse than useless
 * to a homeowner and would expose the business. The cost guide is built to
 * accept verified ranges — see PRICE_BANDS below.
 */

export interface GuideSection {
  heading: string;
  /** Paragraphs of prose */
  body: string[];
  /** Optional bullet list rendered after the prose */
  list?: string[];
}

export interface ComparisonRow {
  label: string;
  a: string;
  b: string;
}

export interface Comparison {
  heading: string;
  /** Column headers */
  aLabel: string;
  bLabel: string;
  rows: ComparisonRow[];
}

export interface Guide {
  slug: string;
  path: string;
  metaTitle: string;
  metaDescription: string;
  /** H1 */
  title: string;
  /** One-line summary under the H1 */
  tagline: string;
  /** The direct answer, rendered in a callout above the fold */
  answer: string;
  heroImage: string;
  /** 1200x630 social card */
  ogImage: string;
  /** Card blurb on the guides index */
  summary: string;
  sections: GuideSection[];
  comparison?: Comparison;
  faqs: { q: string; a: string }[];
  /** ISO date used for schema datePublished + sitemap lastmod */
  published: string;
}

/**
 * TODO(client): supply verified typical price bands for the East Texas market
 * and set `enabled: true`. Until then the cost guide teaches cost *drivers*,
 * which is honest and still ranks, rather than inventing numbers.
 */
export const PRICE_BANDS = { enabled: false } as const;

export const guides: Guide[] = [
  {
    slug: 'foundation-repair-cost-east-texas',
    path: '/guides/foundation-repair-cost-east-texas',
    metaTitle: 'Foundation Repair Cost in East Texas | Best Way',
    metaDescription:
      'What drives foundation repair cost in East Texas, what a fair quote includes, and how to compare bids without getting burned. Free inspections.',
    title: 'What Foundation Repair Costs in East Texas',
    tagline: 'What actually drives the price, and how to compare two quotes fairly',
    answer:
      'Foundation repair is priced by the number of piers your house needs and how deep they have to go — not by square footage and not by a flat rate. Two houses on the same street can differ by a factor of five. Any contractor who quotes you a price before taking elevation readings is guessing, and a guess is not a quote.',
    heroImage: '/img/foundation-repair-crew-east-texas.jpg',
    ogImage: '/social/og-guides.jpg',
    summary:
      'The honest version: what changes the price, what a real quote includes, and the red flags that mean you are being sold to rather than measured.',
    published: '2026-09-01',
    sections: [
      {
        heading: 'The price is pier count times depth',
        body: [
          'Almost all of the variation in a foundation repair bill comes from two numbers: how many piers the structure needs, and how far down each one has to be driven before it reaches soil that will carry the load. Everything else — access, interior work, drainage, cosmetic repair — moves the total by comparatively little.',
          'That is why square footage is a poor predictor. A 1,400 square foot house with one badly settled corner over deep fill can easily cost more to repair than a 2,600 square foot house that needs shimming along one elevation. The house does not set the price; the soil under it does.',
          'It is also why an over-the-phone price is meaningless. Until somebody has run elevation readings across the whole slab and worked out where the load-bearing points are and how far the house is out of level, nobody knows the pier count. A number given before that is a sales tactic.',
        ],
      },
      {
        heading: 'What actually moves your number',
        body: [
          'When we price a job in Longview, Tyler, Nacogdoches or anywhere else in Deep East Texas, these are the variables that matter, roughly in order of impact:',
        ],
        list: [
          'Pier count — driven by how much of the perimeter and interior is out of tolerance, not by the size of the house.',
          'Pier depth — how far down competent load-bearing strata sits. Deep fill, creek bottoms and low lots cost more because the piers go further.',
          'Foundation type — slab work and pier and beam work are different jobs. Pier and beam is usually more accessible but often adds sill, beam and joist replacement.',
          'Condition of the wood — on pier and beam, rotted sills and beams are frequently a larger line item than the supports themselves.',
          'Interior versus exterior piers — interior piers require breaking and repouring floor sections, and cost meaningfully more per pier than exterior ones.',
          'Access — tight side yards, mature landscaping, decks, patios and outbuildings all add labour.',
          'Drainage correction — grading, downspout discharge and French drains. In East Texas clay this is part of the repair rather than an optional extra, and skipping it shortens the life of everything else.',
          'Plumbing — if a leak under the slab caused the movement, it has to be fixed first or the repair will not hold. That is a plumber\'s bill, not ours, and we will tell you when we suspect it.',
        ],
      },
      {
        heading: 'What a real quote includes',
        body: [
          'A quote you can actually compare against another quote has to be specific enough to be checkable. Ours is written, and it names the pier count, the pier type, the placement plan, the expected lift, the drainage work included, the schedule and the warranty terms.',
          'If a quote does not tell you how many piers you are buying and where they go, you cannot compare it to anything. Two bids that both say "foundation repair" with a single number at the bottom may be describing completely different amounts of work, and the cheaper one is often the one that leaves out half the piers.',
        ],
        list: [
          'Before-and-after elevation readings, in writing',
          'The number of piers and exactly where they are being placed',
          'Pier type and the depth they will be driven to',
          'What drainage or grading correction is included',
          'What cosmetic repair is and is not included',
          'The schedule, and who is on site',
          'Warranty terms in writing, not described verbally',
        ],
      },
      {
        heading: 'Red flags in foundation pricing',
        body: [
          'The foundation trade has a reputation problem for a reason. These are the patterns that should make you slow down, whoever you are talking to:',
        ],
        list: [
          'A price quoted before anyone took elevation readings.',
          'A discount that expires today. Foundations move over decades; the urgency is manufactured.',
          'A quote with one line and one number on it.',
          'Commission-paid salespeople who are not the people doing the work and who cannot answer a technical question.',
          'A recommendation to pier the entire perimeter when only part of the house is out of tolerance.',
          'No mention of drainage anywhere in the proposal.',
          'A warranty that is described but never written down, or one that is void if you sell the house.',
          'Pressure to sign before you have had the plan explained to you in terms you understand.',
        ],
      },
      {
        heading: 'Is it always worth repairing?',
        body: [
          'No, and we say so regularly. A meaningful share of the inspections we run end with us telling the homeowner that the house is within tolerance and to keep an eye on it. Some cracking is cosmetic, some settlement is historic and finished, and some houses have simply always been a little out of level.',
          'What tips it toward repair is movement that is active, differential across the structure, and producing damage that is getting worse — doors that have stopped latching, cracks that have widened over a season, floors that have developed a slope you can feel. Those are worth addressing early, because pier count grows as the movement continues, and pier count is the price.',
        ],
      },
      {
        heading: 'How we quote',
        body: [
          'We inspect free, anywhere in our Deep East Texas service area, with no obligation and no travel charge. Owner James Wilson runs the elevation survey himself, walks you through what the readings say, and gives you the repair plan and the price in writing.',
          'If the house does not need work, that is what the report will say, and it still costs you nothing. Call (903) 932-8150 and we will find a time.',
        ],
      },
    ],
    faqs: [
      {
        q: 'Why will nobody give me a price over the phone?',
        a: 'Because the price is pier count times depth, and neither number is knowable until somebody takes elevation readings at your house. Anyone who gives you a figure over the phone is either guessing or planning to revise it once they arrive.',
      },
      {
        q: 'Is foundation repair covered by homeowners insurance?',
        a: 'Usually not when the cause is soil movement, which is what causes most East Texas foundation problems. Policies more often respond when the movement was caused by a covered event such as a sudden plumbing leak. Check with your carrier — and if we suspect a plumbing leak caused it, we will tell you, because that changes your claim.',
      },
      {
        q: 'Does foundation repair cost more on a pier and beam house?',
        a: 'Not inherently. Pier and beam is generally more accessible and cheaper to work on than a slab, but it adds a category of cost slabs do not have: rotted sills, beams and joists. Which way it lands depends entirely on the condition of the wood.',
      },
      {
        q: 'Do interior piers cost more than exterior ones?',
        a: 'Yes, meaningfully. Interior piers mean breaking out and repouring sections of the slab, working inside the house, and restoring the floor afterwards. We only recommend them when the readings show the interior is where the problem is.',
      },
      {
        q: 'Should I get more than one quote?',
        a: 'Yes, and we encourage it. Just make sure you are comparing pier counts and placement plans rather than bottom-line numbers, because two quotes for "foundation repair" can describe very different amounts of work.',
      },
      {
        q: 'Will the price change once you start?',
        a: 'The written scope is the price. What can change it is something nobody could see beforehand — rotted structural wood hidden behind a wall, or a plumbing leak that turns up mid-job. If that happens we stop, show you, and agree the change before continuing.',
      },
      {
        q: 'Is the inspection really free?',
        a: 'Yes, everywhere we work, with no obligation and no travel charge — Longview, Tyler, Marshall, Nacogdoches, Lufkin and everywhere in between.',
      },
      {
        q: 'Does foundation repair add value to my house?',
        a: 'Documented, warranted repair is far easier to sell around than an unrepaired foundation problem. Buyers and inspectors want evidence it was addressed properly, which is exactly what the written scope, the elevation readings and the warranty give you.',
      },
    ],
  },

  {
    slug: 'slab-vs-pier-and-beam',
    path: '/guides/slab-vs-pier-and-beam',
    metaTitle: 'Slab vs Pier and Beam in East Texas | Best Way',
    metaDescription:
      'Slab or pier and beam? How each foundation fails in East Texas clay, what repairs cost more, and which is better for your house.',
    title: 'Slab vs Pier and Beam Foundations',
    tagline: 'How each one fails in East Texas soil, and which is easier to live with',
    answer:
      'Neither is inherently better in East Texas. Slabs have fewer failure modes and no wood to rot, but repairs are more disruptive and plumbing under them is expensive to reach. Pier and beam is more accessible, cheaper to repair and far easier to re-level, but the wood under it needs a dry crawlspace to survive. What matters more than the type is the drainage around it.',
    heroImage: '/img/pier-and-beam-joist-repair.jpg',
    ogImage: '/social/og-guides.jpg',
    summary:
      'A straight comparison of the two foundation types we work on daily — failure modes, repair cost, and what each one needs from you.',
    published: '2026-09-01',
    sections: [
      {
        heading: 'The short version',
        body: [
          'A concrete slab is a single poured platform sitting directly on prepared soil. A pier and beam foundation lifts the house off the ground on piers, with beams and joists spanning between them and a crawlspace underneath.',
          'In Deep East Texas both types move for the same underlying reason: expansive clay that swells when wet and shrinks when dry. What differs is how the movement shows up, how it is repaired, and what else can go wrong along the way.',
        ],
      },
      {
        heading: 'How a slab fails here',
        body: [
          'Slab movement is a soil story almost every time. Clay under one part of the slab takes on water and swells, or dries out and shrinks, and the slab has to bridge the difference. Because the slab is a single rigid element, it cannot flex much, so the stress shows up as cracking in the finishes above it.',
          'The classic signs are stair-step cracks in exterior brick, sheetrock cracks running diagonally from the corners of doors and windows, doors dragging or refusing to latch, and cracked floor tile in a line. A slab that has dropped at one corner often does it because roof water has been discharging there for years.',
          'The other slab-specific risk is the plumbing running through and under it. A leaking supply or drain line saturates the soil in one place and drops that section of the house — and finding and fixing it means going through the slab.',
        ],
      },
      {
        heading: 'How pier and beam fails here',
        body: [
          'Pier and beam houses fail from the wood up at least as often as from the soil down. A pier can be perfectly sound while the sill plate on top of it has gone soft with rot, or a beam has split at a splice, or joists have been notched out for plumbing until they no longer carry their span.',
          'The tell is different from a slab: floors that bounce or feel springy, a soft spot or a dip in one room, squeaks that have got noticeably worse, a musty smell, and skirting separating near the ground. Because the structure is jointed rather than monolithic, it tends to sag rather than crack.',
          'The single biggest factor in whether a pier and beam foundation lasts is the crawlspace. Dry crawlspace, and the wood lasts generations. Standing water and no vapor barrier, and the sills and beams are on a clock.',
        ],
      },
      {
        heading: 'Which is cheaper to repair?',
        body: [
          'Pier and beam usually, but not always. Re-leveling a pier and beam house is comparatively straightforward: the supports are accessible, the house can be lifted at many points, and nothing has to be broken out to get at them. Slab repair means driving piers around and sometimes through the foundation and lifting a rigid element carefully enough not to crack it.',
          'What flips the comparison is the wood. A pier and beam house with rotted sills and beams across two elevations can easily cost more to put right than a slab needing piers on one corner. The condition of the crawlspace is what decides it, and that is exactly what a free inspection is for.',
        ],
      },
    ],
    comparison: {
      heading: 'Side by side',
      aLabel: 'Concrete Slab',
      bLabel: 'Pier & Beam',
      rows: [
        {
          label: 'Typical failure mode',
          a: 'Differential soil movement cracking a rigid platform',
          b: 'Rotted sills and beams, settled or under-spaced piers',
        },
        {
          label: 'How it shows up',
          a: 'Stair-step brick cracks, sticking doors, cracked tile',
          b: 'Springy or sloping floors, dips, squeaks, musty smell',
        },
        {
          label: 'Repair method',
          a: 'Press or concrete piers driven to refusal, controlled lift',
          b: 'Re-level at supports, replace sills/beams/joists, add piers',
        },
        { label: 'Repair disruption', a: 'Higher — perimeter excavation, occasional interior piers', b: 'Lower — most work happens in the crawlspace' },
        { label: 'Relative repair cost', a: 'Driven by pier count and depth', b: 'Driven by how much wood needs replacing' },
        { label: 'Plumbing access', a: 'Poor — lines run under the slab', b: 'Excellent — lines are reachable from the crawlspace' },
        { label: 'Wood rot risk', a: 'None in the foundation itself', b: 'Significant if the crawlspace stays wet' },
        { label: 'Adaptability to movement', a: 'Rigid — stress goes into finishes', b: 'Jointed — can be re-shimmed and re-levelled' },
        { label: 'What it needs from you', a: 'Consistent perimeter moisture, roof water kept away', b: 'A dry, ventilated crawlspace with a vapor barrier' },
      ],
    },
    faqs: [
      {
        q: 'Which foundation is better in East Texas clay?',
        a: 'Neither is clearly better. Both move with the clay. Slabs have no wood to rot but are harder to repair and hide the plumbing; pier and beam is easier to repair and re-level but depends on a dry crawlspace. Drainage matters more than the choice between them.',
      },
      {
        q: 'Can you convert a pier and beam house to a slab?',
        a: 'It is technically possible and almost never worth it. The cost is enormous relative to simply repairing and properly supporting the pier and beam structure, and you would be giving up the easy plumbing access in the process.',
      },
      {
        q: 'Is a pier and beam house harder to sell?',
        a: 'Not in this part of Texas, where a large share of the older housing stock is pier and beam. What affects a sale is the condition of the structure and whether problems were documented and repaired, not the foundation type.',
      },
      {
        q: 'Do slabs or pier and beam homes need repair more often?',
        a: 'In our experience the rates are comparable across Deep East Texas — they just fail differently and at different points in a house\'s life. Pier and beam problems tend to be wood and moisture; slab problems tend to be soil and drainage.',
      },
      {
        q: 'My house has both. Is that a problem?',
        a: 'It is common where an addition was built on a slab against an original pier and beam house, and it is worth watching. The two systems settle at different rates, so separation at the junction is the usual complaint. It is repairable — we measure both and bring them back into alignment.',
      },
      {
        q: 'Which one has the higher risk of expensive surprises?',
        a: 'Slabs, mostly because of plumbing. A leak under a slab is expensive to locate and expensive to reach, and it can be the actual cause of a foundation problem you were about to pay to pier.',
      },
    ],
  },

  {
    slug: 'press-piers-vs-drilled-piers',
    path: '/guides/press-piers-vs-drilled-piers',
    metaTitle: 'Press Piers vs Drilled Piers | Best Way Foundation',
    metaDescription:
      'Steel press piers or poured concrete piers? How each is installed, what soil suits each, and which one your East Texas house needs.',
    title: 'Press Piers vs Drilled Concrete Piers',
    tagline: 'Two ways to underpin a house, and how to tell which one you are being sold',
    answer:
      'Steel press piers are hydraulically driven to refusal using the weight of your house, so their depth is set by the soil rather than by an estimate — which is why they are our default on East Texas slab work. Drilled and poured concrete piers are placed to a designed depth and cured before loading, and suit particular sites well. The wrong answer is a contractor who only ever installs one because it is the only thing they own equipment for.',
    heroImage: '/img/press-piers-installation.jpg',
    ogImage: '/social/og-guides.jpg',
    summary:
      'How each pier system is installed, what soil conditions favour each, and the questions to ask before you sign.',
    published: '2026-09-01',
    sections: [
      {
        heading: 'How a steel press pier works',
        body: [
          'A press pier is a column of steel sections hydraulically pressed into the ground beneath a load-bearing point, using the weight of the structure itself as the reaction force. Sections are added until the pier stops advancing — refusal — which means it has reached soil capable of carrying the load.',
          'The important property is that the soil determines the depth. Nobody has to predict how deep competent strata sits, because the pier keeps going until it finds it. On East Texas sites where fill depth and clay layers vary from one corner of a house to the other, that is a real advantage.',
          'Once every pier is at refusal, the lift is done across many piers simultaneously in small increments, so the structure comes back to elevation as one piece rather than being jacked up corner by corner.',
        ],
      },
      {
        heading: 'How a drilled and poured concrete pier works',
        body: [
          'A drilled pier is a hole bored to a designed depth, reinforced with steel and filled with concrete, which then cures before it takes any load. Depth comes from the design rather than from refusal, so the quality of the site assessment matters more.',
          'Poured piers have real advantages: a large bearing area at the base, good performance in stable soils, and no dependence on the structure\'s own weight during installation. They also need cure time before the lift, which lengthens the job.',
        ],
      },
      {
        heading: 'What actually decides which one',
        body: [
          'Soil profile first. Where competent strata sits at an unpredictable depth — deep or variable fill, creek bottoms, made ground — a pier driven to refusal removes the guesswork. Where soils are consistent and well understood, a designed poured pier performs excellently.',
          'Then the structure and access. Press piers need enough structural weight to react against, which is not an issue on a typical brick-veneer house but can be on a light structure. Drilled piers need equipment access to the pier locations, which tight side yards and mature landscaping sometimes rule out.',
          'Then schedule. Press piers are loaded the same day; poured piers need to cure. On an occupied house that difference is worth considering.',
        ],
      },
      {
        heading: 'The question to actually ask',
        body: [
          'Ask what the contractor installs when the answer is not the system they just quoted you, and why they chose this one for your house specifically. A contractor who works with both should be able to explain the soil reasoning in a couple of sentences.',
          'We use both, chosen by soil and access rather than by what we would rather sell. On most East Texas slab work that means steel press piers driven to refusal, and we will tell you plainly when your site is better served by poured concrete.',
        ],
      },
    ],
    comparison: {
      heading: 'Side by side',
      aLabel: 'Steel Press Piers',
      bLabel: 'Drilled Concrete Piers',
      rows: [
        { label: 'Depth determined by', a: 'Refusal — the soil decides', b: 'Design — the engineer or contractor decides' },
        { label: 'Installation force', a: 'Hydraulic, reacting against the structure', b: 'Augered hole, poured and cured' },
        { label: 'Load transfer', a: 'Same day', b: 'After the concrete cures' },
        { label: 'Best suited to', a: 'Variable or deep fill, unpredictable strata', b: 'Consistent, well-characterised soils' },
        { label: 'Access needs', a: 'Modest — works in tight side yards', b: 'Drilling equipment must reach each location' },
        { label: 'Bearing area', a: 'Smaller, but at depth on competent soil', b: 'Larger base area' },
        { label: 'Structure weight', a: 'Needs enough weight to react against', b: 'Independent of structure weight' },
        { label: 'Job duration', a: 'Shorter — no cure time', b: 'Longer — cure time before lifting' },
      ],
    },
    faqs: [
      {
        q: 'Which pier system lasts longer?',
        a: 'Both last indefinitely when installed correctly on soil that carries the load. Pier failures are nearly always installation failures — too shallow, too few, or badly placed — rather than the material giving out.',
      },
      {
        q: 'Do steel piers rust out?',
        a: 'Not in any practical timeframe. They sit in oxygen-poor soil well below grade, and the sections are specified for the application. It is not the failure mode you should be worrying about.',
      },
      {
        q: 'What does "driven to refusal" actually mean?',
        a: 'That the pier stopped advancing under hydraulic pressure because it reached soil capable of carrying the load. It is a measured result rather than a prediction, which is the main argument for the system.',
      },
      {
        q: 'How deep do piers go in East Texas?',
        a: 'It varies enormously — that is the whole point of driving to refusal. Depth depends on where competent strata sits under your particular lot, and it can differ between two corners of the same house.',
      },
      {
        q: 'How many piers will my house need?',
        a: 'Only the elevation survey can answer that. It depends on how much of the structure is out of tolerance and where the load-bearing points are. We give you the count and the placement plan in writing before any work begins.',
      },
      {
        q: 'Can piers be added later if more settling happens?',
        a: 'Yes, additional piers can be installed later if a different part of the structure begins to move. Correcting drainage is what usually prevents that from being necessary.',
      },
    ],
  },

  {
    slug: 'signs-of-foundation-problems',
    path: '/guides/signs-of-foundation-problems',
    metaTitle: 'Signs of Foundation Problems | Best Way Foundation',
    metaDescription:
      'The warning signs that matter, the ones that do not, and when an East Texas foundation needs repair rather than monitoring.',
    title: 'Signs of Foundation Problems',
    tagline: 'Which cracks matter, which do not, and when to actually call somebody',
    answer:
      'The signs worth acting on are the ones that are changing: a crack that has widened over a season, a door that used to latch and now does not, a floor slope you can feel. Static hairline cracks in sheetrock and a house that has always been slightly out of level are usually not urgent. Movement that is active and differential across the structure is what needs measuring.',
    heroImage: '/img/foundation-crack-inspection.jpg',
    ogImage: '/social/og-guides.jpg',
    summary:
      'A plain checklist of what to look for inside and outside the house, and the difference between cosmetic and structural.',
    published: '2026-09-01',
    sections: [
      {
        heading: 'Outside the house',
        body: [
          'Start at the brick. Stair-step cracking that follows the mortar joints diagonally is the classic differential settlement pattern, and the wider the crack the more worth measuring it is. Look at whether the crack is wider at the top or the bottom — that tells you which way the wall is moving.',
        ],
        list: [
          'Stair-step cracks in brick or mortar joints, particularly near corners',
          'A gap opening between the brick and the slab, or between brick and window frames',
          'Brick courses that are no longer level along a long wall',
          'A chimney leaning or separating from the wall',
          'Cracks in the visible edge of the slab',
          'Doors and windows visibly out of square in their openings',
          'Water standing against the foundation after rain, or ground sloping toward the house',
        ],
      },
      {
        heading: 'Inside the house',
        body: [
          'Interior signs are usually about movement rather than cracks. Doors are the most sensitive instrument in the house — they were hung square, so when they stop closing properly something has moved.',
        ],
        list: [
          'Doors that stick, drag on the frame, or will not latch',
          'Doors that swing open or closed on their own',
          'Diagonal sheetrock cracks running up from the corners of door and window openings',
          'Gaps opening between the wall and the ceiling, or the floor and the baseboard',
          'Cracked floor tile or grout running in a line rather than in one spot',
          'Floors that slope, bounce or feel soft underfoot',
          'Cabinets or countertops separating from the wall',
        ],
      },
      {
        heading: 'What does not necessarily mean trouble',
        body: [
          'Not every crack is a foundation crack, and plenty of houses have cosmetic damage from ordinary curing, seasonal humidity and settlement that finished decades ago.',
        ],
        list: [
          'Fine hairline cracks in sheetrock joints that have not changed in years',
          'Small vertical cracks in a mortar joint with no displacement either side',
          'Nail pops in the ceiling',
          'Minor surface cracking in a garage slab or driveway with no elevation difference',
          'A house that has always been slightly out of level and has not moved since',
        ],
      },
      {
        heading: 'How to tell whether it is getting worse',
        body: [
          'Measure it and date it. Mark the end of a crack with a pencil line and write the date next to it, and photograph it with a tape measure across the width. Do it again in three months. A crack that has not moved is a very different problem from one that has.',
          'The other thing worth doing is paying attention to doors, because they change before cracks do. A door that started dragging this year is telling you the structure is moving now, not that it moved in 1998.',
        ],
      },
      {
        heading: 'When to call',
        body: [
          'Call when something is actively changing, when a door has stopped working, when you can feel a slope, or when the cracking is wide enough that you have started photographing it. Call sooner rather than later — the number of piers a house needs grows as the movement continues, and pier count is what you pay for.',
          'Our inspection is free anywhere in Deep East Texas, and it ends with elevation readings and a written answer. If the answer is that your house is fine, that is what we will tell you, and it still costs nothing. Call (903) 932-8150.',
        ],
      },
    ],
    faqs: [
      {
        q: 'How wide does a crack have to be before it matters?',
        a: 'Width matters less than change. A quarter-inch crack that has been exactly that width for twenty years is less concerning than a hairline that has doubled since spring. Mark it, date it, and watch it.',
      },
      {
        q: 'Are hairline cracks in sheetrock a foundation problem?',
        a: 'Usually not on their own. Sheetrock cracks from humidity, framing shrinkage and ordinary settling. What raises the concern is diagonal cracking from the corners of openings, combined with doors that have stopped working.',
      },
      {
        q: 'My floor slopes. How much is too much?',
        a: 'If you can feel it walking across the room, it is worth measuring. The number that matters is the differential across the structure rather than the absolute slope, which is why we take readings across every room rather than in one spot.',
      },
      {
        q: 'Should I wait and see, or act now?',
        a: 'If nothing is changing, monitoring is a legitimate answer and we will tell you so. If something is actively moving, waiting costs money — the longer differential movement continues, the more piers the eventual repair needs.',
      },
      {
        q: 'Can I check the level myself?',
        a: 'You can get a rough idea by rolling a ball or using a long level, and it is worth doing. It will not substitute for a manometer survey across the whole footprint, which is what determines where piers actually go.',
      },
      {
        q: 'Do foundation problems get worse in summer or winter?',
        a: 'Both, in different ways. A hard late-summer dry spell shrinks the clay and drops the house; a soaking spring swells it and pushes back. It is the swing between the two that does the damage, which is why symptoms often appear seasonally.',
      },
    ],
  },
];

export const getGuide = (slug?: string): Guide | undefined => guides.find((g) => g.slug === slug);
