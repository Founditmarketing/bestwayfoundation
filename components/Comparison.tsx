import Reveal from "@/components/Reveal";

function SectionalDiagram() {
  return (
    <svg viewBox="0 0 360 120" className="w-full" role="img" aria-label="Diagram of a sectional gutter with leaking joints">
      <defs>
        <linearGradient id="secMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#c9cfd9" />
          <stop offset="1" stopColor="#8e98a8" />
        </linearGradient>
      </defs>
      {/* fascia */}
      <rect x="10" y="18" width="340" height="10" rx="2" fill="#0d2a5c" opacity="0.25" />
      {/* gutter run in 3 pieces with gaps */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={14 + i * 116} y="30" width="106" height="26" rx="6" fill="url(#secMetal)" />
      ))}
      {/* joint markers + drips */}
      {[124, 240].map((x) => (
        <g key={x}>
          <rect x={x - 4} y="28" width="8" height="30" rx="2" fill="#0a1b3d" opacity="0.35" />
          <circle cx={x} cy="72" r="4" fill="#e8564f" />
          <path d={`M ${x} 84 c -5 9 -5 14 0 18 c 5 -4 5 -9 0 -18 z`} fill="#e8564f" opacity="0.85" />
          <path d={`M ${x - 8} 96 c -3 6 -3 9 0 12 c 3 -3 3 -6 0 -12 z`} fill="#e8564f" opacity="0.55" />
        </g>
      ))}
      <text x="180" y="116" textAnchor="middle" fontSize="11" fontWeight="700" fill="#e8564f">
        Joints every 10 ft — every one a future leak
      </text>
    </svg>
  );
}

function SeamlessDiagram() {
  return (
    <svg viewBox="0 0 360 120" className="w-full" role="img" aria-label="Diagram of one continuous seamless gutter">
      <defs>
        <linearGradient id="seamMetal" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#eef1f5" />
          <stop offset="0.55" stopColor="#c9cfd9" />
          <stop offset="1" stopColor="#9aa4b4" />
        </linearGradient>
      </defs>
      <rect x="10" y="18" width="340" height="10" rx="2" fill="#0d2a5c" opacity="0.25" />
      {/* one continuous run */}
      <rect x="14" y="30" width="332" height="26" rx="6" fill="url(#seamMetal)" stroke="#4aa3f0" strokeWidth="2" />
      {/* water flowing to downspout */}
      <path
        d="M 24 43 H 330"
        stroke="#4aa3f0"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="14 10"
        opacity="0.7"
      />
      <path d="M 336 56 v 34 q 0 8 8 8" stroke="#9aa4b4" strokeWidth="10" fill="none" strokeLinecap="round" />
      <text x="180" y="116" textAnchor="middle" fontSize="11" fontWeight="700" fill="#1e6fd9">
        One continuous piece — water goes where it should
      </text>
    </svg>
  );
}

const rows: [string, string, string][] = [
  ["Joints & seams", "A seam every 10 feet", "Zero — one continuous run"],
  ["Where it fails", "Every joint dries, splits, leaks", "No joints to fail"],
  ["Fit", "Off-the-shelf lengths, forced to fit", "Measured & formed at your house"],
  ["Look", "Visible seams and patch sealant", "Clean, unbroken line on the fascia"],
  ["Upkeep", "Re-sealing joints every few years", "Clean it out — that's it"],
];

export default function Comparison() {
  return (
    <section className="bg-navy-950 relative overflow-hidden py-20 text-white md:py-28">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(60% 50% at 80% 0%, rgba(30,111,217,0.35) 0%, transparent 70%), radial-gradient(50% 40% at 10% 100%, rgba(74,163,240,0.18) 0%, transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-bold tracking-[0.25em] text-water-300 uppercase">
            Why seamless?
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-extrabold tracking-tight md:text-5xl">
            Every seam is a leak waiting for a storm.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel-300 md:text-lg">
            Sectional gutters come in pieces and get stitched together on your
            fascia — and every joint depends on sealant that bakes, dries, and
            splits in the Texas sun. Seamless gutters are different: we
            roll-form a single continuous run on site, cut to the inch for your
            roofline. No joints. Nothing to re-seal. Nowhere to leak.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-steel-300">Sectional gutters</h3>
                <span className="rounded-full bg-[#e8564f]/15 px-3 py-1 text-xs font-bold text-[#ff9c96]">
                  The old way
                </span>
              </div>
              <div className="mt-6"><SectionalDiagram /></div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="shadow-lift h-full rounded-2xl border border-brand-400/40 bg-gradient-to-b from-brand-600/20 to-white/5 p-7 backdrop-blur-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-display text-lg font-bold text-white">Seamless gutters</h3>
                <span className="rounded-full bg-brand-500/25 px-3 py-1 text-xs font-bold text-water-300">
                  What we build
                </span>
              </div>
              <div className="mt-6"><SeamlessDiagram /></div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div className="mt-10 overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="bg-white/5 text-xs tracking-wider uppercase">
                  <th className="px-5 py-4 font-bold text-steel-500"> </th>
                  <th className="px-5 py-4 font-bold text-steel-300">Sectional</th>
                  <th className="px-5 py-4 font-bold text-water-300">Seamless</th>
                </tr>
              </thead>
              <tbody>
                {rows.map(([label, sectional, seamless]) => (
                  <tr key={label} className="border-t border-white/10">
                    <td className="px-5 py-4 font-semibold text-white">{label}</td>
                    <td className="px-5 py-4 text-steel-300">{sectional}</td>
                    <td className="px-5 py-4 font-semibold text-water-100">{seamless}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
