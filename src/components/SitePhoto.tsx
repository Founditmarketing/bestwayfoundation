import Image from "next/image";

type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

/**
 * Wrapper around next/image for site photos.
 *
 * Current images are SVG placeholders (see PHOTOS-NEEDED.md), which skip
 * Next's optimizer via `unoptimized`. When real .jpg/.webp photos are swapped
 * in, this component automatically routes them through next/image optimization
 * — no call-site changes needed.
 */
export default function SitePhoto({
  src,
  alt,
  width,
  height,
  priority,
  className,
  sizes,
}: Props) {
  const isSvgPlaceholder = src.endsWith(".svg");
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      sizes={sizes}
      unoptimized={isSvgPlaceholder}
    />
  );
}
