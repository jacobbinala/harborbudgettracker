"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import type { ProjectImage } from "@/lib/content";

type ImageCarouselProps = {
  images: ProjectImage[];
  label: string;
};

export function ImageCarousel({ images, label }: ImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const count = images.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % count) + count) % count);
    },
    [count],
  );

  const previous = useCallback(() => goTo(index - 1), [goTo, index]);
  const next = useCallback(() => goTo(index + 1), [goTo, index]);

  useEffect(() => {
    if (count <= 1) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % count);
    }, 5000);

    return () => window.clearInterval(id);
  }, [count]);

  if (count === 0) return null;

  const current = images[index];

  return (
    <div
      className="group relative overflow-hidden border border-border bg-white/5"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${label} screenshots`}
    >
      <div className="relative aspect-16/10">
        {images.map((image, i) => (
          <div
            key={image.src}
            className={`absolute inset-0 transition-opacity duration-500 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={i !== index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover object-top"
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          <button
            type="button"
            onClick={previous}
            aria-label="Previous slide"
            className="absolute left-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border bg-background/80 text-accent opacity-100 transition-opacity hover:bg-background sm:opacity-0 sm:group-hover:opacity-100"
          >
            <span aria-hidden className="text-lg leading-none">
              ‹
            </span>
          </button>
          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="absolute right-3 top-1/2 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center border border-border bg-background/80 text-accent opacity-100 transition-opacity hover:bg-background sm:opacity-0 sm:group-hover:opacity-100"
          >
            <span aria-hidden className="text-lg leading-none">
              ›
            </span>
          </button>

          <div className="absolute inset-x-0 bottom-3 z-10 flex justify-center gap-2">
            {images.map((image, i) => (
              <button
                key={image.src}
                type="button"
                aria-label={`Go to slide ${i + 1}`}
                aria-current={i === index}
                onClick={() => goTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index
                    ? "w-5 bg-accent"
                    : "w-1.5 bg-accent/35 hover:bg-accent/60"
                }`}
              />
            ))}
          </div>

          <p className="sr-only" aria-live="polite">
            Slide {index + 1} of {count}: {current?.alt}
          </p>
        </>
      )}
    </div>
  );
}
