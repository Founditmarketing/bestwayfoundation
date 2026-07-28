import Link from "next/link";
import SitePhoto from "./SitePhoto";
import type { Service } from "@/lib/services";

type Props = {
  service: Service;
  /** Optional override for where the card links (e.g. a city-specific page). */
  href?: string;
};

export default function ServiceCard({ service, href }: Props) {
  const target = href ?? (service.hasHubPage ? `/${service.slug}` : "/services");
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg border border-ink-100 bg-white shadow-sm transition-shadow hover:shadow-md">
      <SitePhoto
        src={service.image}
        alt={service.imageAlt}
        width={640}
        height={400}
        className="aspect-[8/5] w-full object-cover"
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
      />
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-ink-900">
          <Link href={target} className="after:absolute after:inset-0 relative">
            {service.name}
          </Link>
        </h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{service.tagline}</p>
        <p className="mt-4 text-sm font-bold text-amber-450 group-hover:underline">
          Learn more →
        </p>
      </div>
    </article>
  );
}
