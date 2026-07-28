import Image from "next/image";
import WaveDivider from "@/components/WaveDivider";
import Reveal from "@/components/Reveal";

/** Interior-page hero: navy gradient (optionally over a photo), kicker + big title. */
export default function PageHero({
  kicker,
  title,
  body,
  image,
  imageAlt = "",
  nextSectionFill = "#ffffff",
}: {
  kicker: string;
  title: string;
  body?: string;
  image?: string;
  imageAlt?: string;
  nextSectionFill?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      {image && (
        <>
          <Image
            src={image}
            alt={imageAlt}
            fill
            priority
            className="object-cover opacity-30"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/60 to-navy-950/90" />
        </>
      )}
      {!image && <div className="water-gradient absolute inset-0" />}
      <div className="relative mx-auto max-w-7xl px-4 pt-36 pb-16 sm:px-6 md:pt-44 md:pb-24 lg:px-8">
        <Reveal>
          <p className="font-display text-sm font-bold tracking-[0.25em] text-water-300 uppercase">
            {kicker}
          </p>
          <h1 className="font-display mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white md:text-6xl">
            {title}
          </h1>
          {body && (
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-steel-300 md:text-lg">
              {body}
            </p>
          )}
        </Reveal>
      </div>
      <WaveDivider fill={nextSectionFill} className="relative" />
    </section>
  );
}
