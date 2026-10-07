"use client";

import { useState } from "react";

type Props = { id: string; title: string; start?: number };

/**
 * Click-to-play facade, carried over from the previous site.
 *
 * The card shows YouTube's own poster and only builds the player — on the no-cookie domain —
 * once someone asks for it, so the page never pays for YouTube's scripts just by existing.
 * Before JS runs it is an ordinary link, so the video is still reachable either way.
 */
export default function VideoThumb({ id, title, start }: Props) {
  const [playing, setPlaying] = useState(false);

  const frame = "relative mt-5 aspect-video overflow-hidden rounded-card bg-night";

  if (playing) {
    const src =
      `https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}` +
      "?autoplay=1&rel=0&modestbranding=1&playsinline=1" +
      (start ? `&start=${start}` : "");

    return (
      <div className={frame}>
        <iframe
          // the keyboard follows the control the player replaced
          ref={(el) => {
            el?.focus();
          }}
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
    );
  }

  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}${start ? `&t=${start}s` : ""}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Play the video: ${title}, on YouTube`}
      onClick={(e) => {
        e.preventDefault();
        setPlaying(true);
      }}
      className={`group block ${frame} focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary`}
    >
      {/* eslint-disable-next-line @next/next/no-img-element -- YouTube's CDN poster, not a project asset */}
      <img
        src={`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`}
        alt=""
        width={1280}
        height={720}
        loading="lazy"
        decoding="async"
        className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute inset-0 bg-night/15 transition-colors group-hover:bg-night/5" />
      <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 text-primary shadow-[0_8px_24px_-8px_rgba(15,42,51,0.5)] transition-transform group-hover:scale-110">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="ml-[3px] size-6">
          <path d="M8 5.2v13.6a.7.7 0 0 0 1.07.6l10.7-6.8a.7.7 0 0 0 0-1.2L9.07 4.6A.7.7 0 0 0 8 5.2z" />
        </svg>
      </span>
      <span className="sr-only">{title}</span>
    </a>
  );
}
