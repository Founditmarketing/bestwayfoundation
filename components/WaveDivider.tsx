/**
 * Curved section divider — echoes the gutter curve in the logo.
 * Sits at the bottom of a section; `fill` is the color of the NEXT section.
 */
export default function WaveDivider({
  fill = "#ffffff",
  flip = false,
  className = "",
}: {
  fill?: string;
  flip?: boolean;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""} ${className}`}
    >
      <svg
        viewBox="0 0 1440 90"
        preserveAspectRatio="none"
        className="block h-[50px] w-full md:h-[90px]"
      >
        <path
          d="M0,20 C360,95 1080,95 1440,20 L1440,90 L0,90 Z"
          fill={fill}
        />
      </svg>
    </div>
  );
}
