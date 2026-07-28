export type Block =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  dateDisplay: string;
  category: string;
  readMinutes: number;
  image: string;
  imageAlt: string;
  body: Block[];
};

export const posts: Post[] = [
  {
    slug: "gutter-installation-cost-beaumont-port-arthur-tx",
    title: "How Much Does Gutter Installation Cost in Beaumont & Port Arthur, TX?",
    description:
      "What drives seamless gutter pricing in Southeast Texas — material, gutter size, roofline complexity — and how to compare quotes fairly.",
    date: "2026-05-20",
    dateDisplay: "May 20, 2026",
    category: "Gutters",
    readMinutes: 4,
    image: "/images/blog/blog-gutter-installation-cost.svg",
    imageAlt: "New seamless gutters installed on a Beaumont-area home",
    body: [
      {
        type: "p",
        text: "The honest answer to \"what do gutters cost?\" is: it depends on your house. But \"it depends\" isn't useful when you're budgeting, so here's what actually moves the number in Beaumont, Port Arthur, and the rest of the Golden Triangle.",
      },
      { type: "h2", text: "The four things that drive your price" },
      {
        type: "ul",
        items: [
          "Linear footage — the total length of gutter your roofline needs, which is what quotes are primarily based on.",
          "Material and size — 5\" aluminum is the standard; 6\" oversized gutters, copper, or steel cost more but carry more water and last longer.",
          "Height and complexity — a single-story ranch with four straight runs is cheaper per foot than a two-story home with multiple gables and tight corners.",
          "Extras — downspout count, gutter guards, and any fascia repair needed before gutters can be hung.",
        ],
      },
      { type: "h2", text: "Why rot repair sometimes shows up on gutter quotes" },
      {
        type: "p",
        text: "Gutters attach to your fascia boards. If those boards are rotted — very common on homes where old gutters overflowed for years — they can't hold hangers, and the fascia has to be replaced first. A good contractor checks this during the estimate rather than surprising you on install day.",
      },
      { type: "h2", text: "How to compare quotes fairly" },
      {
        type: "p",
        text: "Make sure every quote covers the same scope: removal and haul-off of old gutters, the same gutter size and gauge, the same number of downspouts, and a written workmanship warranty. A low bid that skips haul-off and uses thinner aluminum isn't actually low.",
      },
      {
        type: "p",
        text: "We give free, exact quotes for homes across Southeast Texas — measured at your house, honored when we show up. Call (409) 338-6602 or request a quote online.",
      },
    ],
  },
  {
    slug: "how-to-choose-siding-southeast-texas",
    title: "How to Choose the Right Siding for Southeast Texas Weather",
    description:
      "Vinyl, fiber cement, or engineered wood? How each siding material handles Gulf humidity, heat, and hurricane season.",
    date: "2026-05-06",
    dateDisplay: "May 6, 2026",
    category: "Siding",
    readMinutes: 5,
    image: "/images/blog/blog-choose-siding-materials.svg",
    imageAlt: "Samples of vinyl, fiber cement, and engineered wood siding",
    body: [
      {
        type: "p",
        text: "Siding in Southeast Texas has a harder job than siding almost anywhere else: 60+ inches of rain a year, brutal humidity, summer heat that bakes south-facing walls, and the occasional hurricane throwing debris at it. Here's how the three main materials hold up.",
      },
      { type: "h2", text: "Vinyl: the value pick" },
      {
        type: "p",
        text: "Modern vinyl is far better than the wavy, faded panels you remember from the '90s. It never needs paint, shrugs off humidity, and costs the least installed. Its weaknesses: it can crack under hard impacts, and dark colors can distort in intense heat. For rentals and budget-conscious re-sides, it's a solid choice.",
      },
      { type: "h2", text: "Fiber cement: the durability leader" },
      {
        type: "p",
        text: "Fiber cement (cement, sand, and cellulose pressed into boards) doesn't rot, doesn't burn, laughs at humidity, and handles windborne debris better than anything else in its price range. It costs more up front and needs repainting every 10–15 years, but for a long-term home it's the strongest all-around performer in our climate.",
      },
      { type: "h2", text: "Engineered wood: the warm middle ground" },
      {
        type: "p",
        text: "Engineered wood gives you a real-wood look with resin-treated durability at a price between vinyl and fiber cement. It's tougher than vinyl against impacts, but in our humidity the details matter enormously — flashing, gaps, and paint maintenance have to be right, which makes installer quality the deciding factor.",
      },
      { type: "h2", text: "The part that matters more than material" },
      {
        type: "p",
        text: "Any of the three fails early if it's installed over bad house wrap, without proper flashing, or with nailing that doesn't meet wind-zone requirements. Ask any siding bidder how they handle moisture barrier, window flashing, and fastening schedule for wind. If the answer is vague, keep shopping.",
      },
      {
        type: "p",
        text: "Want numbers for your house? We quote materials side-by-side so you can compare real costs, not brochure claims — call (409) 338-6602.",
      },
    ],
  },
  {
    slug: "signs-fascia-needs-replacing",
    title: "7 Signs Your Fascia Board Needs Replacing",
    description:
      "Sagging gutters, peeling trim paint, soft wood — the warning signs of fascia rot and why catching it early saves real money.",
    date: "2026-05-01",
    dateDisplay: "May 1, 2026",
    category: "Fascia & Soffit",
    readMinutes: 3,
    image: "/images/blog/blog-fascia-rot-warning-signs.svg",
    imageAlt: "Rotted fascia board with a sagging gutter pulling away from the roofline",
    body: [
      {
        type: "p",
        text: "Fascia is the trim board that runs along your roof edge — the one your gutters are screwed into. Because it sits behind the gutter, most homeowners never look at it until something visibly fails. Here are the seven signs it's time.",
      },
      {
        type: "ul",
        items: [
          "1. Gutters sagging or pulling away from the house — the #1 symptom. Hangers only hold in solid wood.",
          "2. Peeling or bubbling paint along the roofline — moisture is pushing through from inside the board.",
          "3. Soft spots — if a screwdriver (or fingernail) sinks in, the rot is already established.",
          "4. Visible cracks, splits, or crumbling board ends, especially at corners and downspouts.",
          "5. Water stains on soffit or exterior walls below the roof edge after rain.",
          "6. Animal activity — woodpeckers, squirrels, and wasps all target softened fascia.",
          "7. Mold or mildew streaks on the board face behind the gutter.",
        ],
      },
      { type: "h2", text: "Why early replacement is the cheap option" },
      {
        type: "p",
        text: "Fascia rot never stays in the fascia. It spreads into rafter tails and roof decking — and repairing structure costs multiples of replacing a trim board. If you're seeing two or more of the signs above, get it looked at this season, not next year.",
      },
      {
        type: "p",
        text: "We inspect fascia free with every gutter estimate in the Golden Triangle. Call (409) 338-6602 and we'll tell you honestly whether it's a repair, a replacement, or nothing to worry about yet.",
      },
    ],
  },
  {
    slug: "do-gutter-guards-work-southeast-texas",
    title: "Do Gutter Guards Really Work? What Southeast Texas Homeowners Should Know",
    description:
      "A contractor's honest take on gutter guards: what mesh systems actually deliver, where cheap covers fail, and who benefits most.",
    date: "2026-05-12",
    dateDisplay: "May 12, 2026",
    category: "Gutter Guards",
    readMinutes: 4,
    image: "/images/blog/blog-gutter-guards-honest-review.svg",
    imageAlt: "Rain flowing through mesh gutter guard while leaves stay on top",
    body: [
      {
        type: "p",
        text: "Gutter guards have a credibility problem, and it's earned — by cheap plastic covers and by TV ads promising you'll never think about gutters again. Here's the honest version from people who install and clean gutters for a living.",
      },
      { type: "h2", text: "What quality guards actually do" },
      {
        type: "p",
        text: "A well-made mesh guard, installed at the right angle, keeps out the three things that clog Southeast Texas gutters: leaves, pine needles, and shingle grit. That turns \"scoop out packed sludge three times a year\" into \"occasional rinse.\" For homes under oaks or pines, that's a genuinely different life.",
      },
      { type: "h2", text: "What no guard does" },
      {
        type: "p",
        text: "No guard is maintenance-free. Fine debris and pollen film still accumulate on top and occasionally need brushing off, and the system should still be inspected periodically. Anyone who tells you \"never touch your gutters again\" is selling, not advising.",
      },
      { type: "h2", text: "Where guards go wrong" },
      {
        type: "ul",
        items: [
          "Cheap box-store covers that collapse into the gutter or launch water over the edge in heavy rain.",
          "Guards installed under shingles, which can disturb the roof and its warranty.",
          "Guards slapped onto gutters that were already sagging or badly sloped — the guard just hides the problem.",
        ],
      },
      { type: "h2", text: "Who should get them" },
      {
        type: "p",
        text: "If your lot is wooded, if you're tired of paying for cleanings, or if you have no business being on a ladder — guards pay for themselves. If your roof sheds almost no debris, save the money and stick with an annual cleaning.",
      },
      {
        type: "p",
        text: "We'll give you a straight recommendation either way with a free estimate: (409) 338-6602.",
      },
    ],
  },
  {
    slug: "how-often-clean-gutters-southeast-texas",
    title: "How Often Should You Clean Your Gutters in Southeast Texas?",
    description:
      "Our region gets 60+ inches of rain a year. Here's a realistic gutter cleaning schedule based on your trees and roofline.",
    date: "2025-05-15",
    dateDisplay: "May 15, 2025",
    category: "Gutter Cleaning",
    readMinutes: 3,
    image: "/images/blog/blog-gutter-cleaning-schedule.svg",
    imageAlt: "Gutter packed with oak leaves and pine needles before cleaning",
    body: [
      {
        type: "p",
        text: "Southeast Texas gets more rain than Seattle — around 60 inches a year, much of it in intense bursts. Gutters here don't get the luxury of being half-clogged and getting away with it. Here's the schedule we recommend after cleaning hundreds of them.",
      },
      { type: "h2", text: "The baseline: twice a year" },
      {
        type: "p",
        text: "For a typical home with few overhanging trees: once in late spring after the oak pollen and catkin drop, and once in late fall after the leaves finish. That timing catches the two big debris loads before storm season tests your system.",
      },
      { type: "h2", text: "Wooded lots: three to four times a year" },
      {
        type: "p",
        text: "If you're under live oaks or pines — common in Vidor, Lumberton, and older Groves neighborhoods — twice a year isn't enough. Pine needles in particular mat into a thatch that water can't penetrate. Quarterly cleaning, or a one-time investment in mesh guards, is the realistic answer.",
      },
      { type: "h2", text: "Always check after a named storm" },
      {
        type: "p",
        text: "Tropical systems load gutters with leaves, twigs, and shingle grit in a single day. A quick post-storm check (or inspection visit) prevents the next rain from overflowing into your fascia and foundation beds.",
      },
      {
        type: "p",
        text: "Every cleaning we do includes downspout flushing and a written condition report. Book one at (409) 338-6602 — or ask us about guards if you're done with the ladder.",
      },
    ],
  },
  {
    slug: "signs-gutters-need-replacing",
    title: "7 Signs Your Gutters Need to Be Replaced (Not Just Cleaned)",
    description:
      "Cleaning fixes clogs — it doesn't fix failing gutters. How to tell separation, rust, and bad slope from a simple maintenance problem.",
    date: "2025-04-10",
    dateDisplay: "April 10, 2025",
    category: "Gutters",
    readMinutes: 3,
    image: "/images/blog/blog-gutters-replace-vs-clean.svg",
    imageAlt: "Old rusted sectional gutter separating at a seam",
    body: [
      {
        type: "p",
        text: "Plenty of \"gutter problems\" are just clogs, and a cleaning solves them. But some problems mean the system itself is done. Here's how to tell the difference before you pay to clean gutters that need replacing.",
      },
      {
        type: "ul",
        items: [
          "1. Seams that drip after every rain — sealant fails repeatedly; resealing old sectional joints is a treadmill.",
          "2. Rust spots or orange streaks on steel gutters — once rust starts, it only spreads.",
          "3. Sagging runs or standing water — the slope is gone, and rehanging old, fatigued gutters rarely holds.",
          "4. Gutters pulling away from the fascia — often a fascia rot problem too (see our fascia guide).",
          "5. Cracks and splits, even hairline ones on plastic gutters — they widen every summer.",
          "6. Peeling paint or rot on the fascia behind gutters — evidence of chronic overflow behind the system.",
          "7. Pooling or erosion at the foundation line after storms — the system isn't moving water where it should.",
        ],
      },
      { type: "h2", text: "Repair, or replace?" },
      {
        type: "p",
        text: "One bad hanger or a single leaking end cap is a repair. Multiple symptoms across multiple runs means you're funding a slow-motion replacement one service call at a time — and a new seamless system usually costs less than people expect.",
      },
      {
        type: "p",
        text: "Not sure which side you're on? We'll inspect and tell you honestly — free estimates at (409) 338-6602.",
      },
    ],
  },
  {
    slug: "seamless-vs-sectional-gutters",
    title: "Seamless vs. Sectional Gutters: Which Is Right for Your Home?",
    description:
      "The real differences between seamless and sectional gutters — joints, leaks, looks, and long-term cost — explained without the sales pitch.",
    date: "2025-03-18",
    dateDisplay: "March 18, 2025",
    category: "Gutters",
    readMinutes: 4,
    image: "/images/blog/blog-seamless-vs-sectional.svg",
    imageAlt: "Side-by-side comparison of a seamless gutter run and a jointed sectional run",
    body: [
      {
        type: "p",
        text: "Sectional gutters come in 10-foot pieces you join together; seamless gutters are roll-formed on-site into one continuous run per side of your roof. That single difference — joints or no joints — drives almost everything else.",
      },
      { type: "h2", text: "Leaks" },
      {
        type: "p",
        text: "Every sectional joint is sealed with caulk, and every bead of caulk in a Texas gutter bakes, shrinks, and eventually leaks. A seamless run only has connections at corners and downspout outlets — a fraction of the failure points.",
      },
      { type: "h2", text: "Strength and looks" },
      {
        type: "p",
        text: "A continuous run is stiffer than a chain of joined sections, holds its slope better, and reads as one clean line from the curb. Sectional systems telegraph every joint, especially as they age and stain.",
      },
      { type: "h2", text: "Cost" },
      {
        type: "p",
        text: "Sectional wins on day-one price — it's the DIY option from the box store. Seamless costs more up front because it requires a fabrication machine and a crew, but it typically lasts 20–30 years with less maintenance and no joint-chasing. Over the life of the system, seamless is usually the cheaper gutter.",
      },
      { type: "h2", text: "Our take" },
      {
        type: "p",
        text: "For a shed or detached garage, sectional is fine. For your home — in a region that gets 60 inches of rain a year — seamless is the right tool. It's the only kind we install, and we back it with a 10-year workmanship warranty.",
      },
      {
        type: "p",
        text: "Get an exact, measured quote for your roofline: (409) 338-6602.",
      },
    ],
  },
];

export const postBySlug = (slug: string) => posts.find((p) => p.slug === slug);

/** Posts sorted newest first for the index page. */
export const postsByDate = [...posts].sort((a, b) =>
  b.date.localeCompare(a.date),
);
