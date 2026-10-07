// Used only for the GitHub Pages static export (see next.config.ts). Pages can't resize images,
// so every width points at the original file; `w` just keeps each srcset entry distinct.
export default function imageLoader({ src, width }: { src: string; width: number; quality?: number }) {
  if (!src.startsWith("/")) return src;
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${src}?w=${width}`;
}
