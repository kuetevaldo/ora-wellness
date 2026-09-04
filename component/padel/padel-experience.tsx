"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/section-image/adult-padel1.JPG",
    alt: "Players together at ORA Padel",
  },
  {
    src: "/images/section-image/padel-image1.JPG",
    alt: "ORA Padel players",
  },
  {
    src: "/images/section-image/padel-image.JPG",
    alt: "ORA Padel community",
  },
  {
    src: "/images/section-image/compete.JPG",
    alt: "Padel competition at ORA",
  },
  {
    src: "/images/section-image/winner-padel.JPG",
    alt: "Padel winner at ORA",
  },
];

const moments = [
  {
    number: "01",
    title: "Play",
    copy: "Friendly matches, practice sessions and social rallies.",
  },
  {
    number: "02",
    title: "Compete",
    copy: "Organised competition that brings another level of energy to the court.",
  },
  {
    number: "03",
    title: "Connect",
    copy: "A social experience built around people, movement and the game.",
  },
];

export default function PadelExperience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    );

    const updatePreference = () => {
      setReduceMotion(mediaQuery.matches);
    };

    updatePreference();

    mediaQuery.addEventListener("change", updatePreference);

    return () => {
      mediaQuery.removeEventListener("change", updatePreference);
    };
  }, []);

  useEffect(() => {
    if (isPaused || reduceMotion) return;

    const interval = window.setInterval(() => {
      setActiveIndex(
        (current) => (current + 1) % images.length
      );
    }, 4500);

    return () => {
      window.clearInterval(interval);
    };
  }, [isPaused, reduceMotion]);

  const previousImage = () => {
    setActiveIndex((current) =>
      current === 0
        ? images.length - 1
        : current - 1
    );
  };

  const nextImage = () => {
    setActiveIndex(
      (current) => (current + 1) % images.length
    );
  };

  return (
    <section
      aria-labelledby="padel-experience-heading"
      className="bg-(--ora-pink-light) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        {/* Heading */}
        <div className="grid gap-6 border-b border-(--ora-burgundy-dark)/20 pb-10 lg:grid-cols-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy-dark)/65 lg:col-span-3">
            Around the court
          </p>

          <h2
            id="padel-experience-heading"
            className="font-display max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:col-span-8"
          >
            Built around the social side of sport.
          </h2>
        </div>

        {/* Image slider */}
        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocusCapture={() => setIsPaused(true)}
          onBlurCapture={() => setIsPaused(false)}
        >
          <div className="relative h-120 overflow-hidden rounded-(--ora-radius-media) sm:h-152 lg:h-184">
            {images.map((image, index) => (
              <div
                key={image.src}
                className={`absolute inset-0 ${
                  reduceMotion
                    ? ""
                    : "transition-all duration-700 ease-out"
                } ${
                  index === activeIndex
                    ? "translate-x-0 opacity-100"
                    : index < activeIndex
                      ? "-translate-x-6 opacity-0"
                      : "translate-x-6 opacity-0"
                }`}
                aria-hidden={index !== activeIndex}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="100vw"
                  className="object-cover object-center"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Subtle gradient */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-32 bg-linear-to-t from-black/30 to-transparent"
            />

            {/* Controls */}
            <div className="absolute bottom-5 right-5 z-20 flex gap-2">
              <button
                type="button"
                onClick={previousImage}
                aria-label="Previous image"
                className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-[transform,background-color] duration-150 hover:bg-black/35 active:scale-[0.97] motion-reduce:transition-none"
              >
                <ChevronLeft
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>

              <button
                type="button"
                onClick={nextImage}
                aria-label="Next image"
                className="flex size-11 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md transition-[transform,background-color] duration-150 hover:bg-black/35 active:scale-[0.97] motion-reduce:transition-none"
              >
                <ChevronRight
                  size={18}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-6 left-6 z-20 text-xs font-medium tracking-[0.12em] text-white">
              {String(activeIndex + 1).padStart(2, "0")}
              <span className="mx-2 text-white/50">
                /
              </span>
              {String(images.length).padStart(2, "0")}
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-5 flex justify-center gap-2">
            {images.map((image, index) => (
              <button
                key={image.src}
                type="button"
                onClick={() => setActiveIndex(index)}
                aria-label={`Show image ${index + 1}`}
                aria-current={
                  index === activeIndex
                    ? "true"
                    : undefined
                }
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "w-8 bg-(--ora-burgundy)"
                    : "w-1.5 bg-(--ora-burgundy)/25"
                } motion-reduce:transition-none`}
              />
            ))}
          </div>
        </div>

        {/* Play / Compete / Connect */}
        <div className="mt-14 grid border-t border-(--ora-burgundy-dark)/20 md:grid-cols-3">
          {moments.map((moment) => (
            <article
              key={moment.title}
              className="border-b border-(--ora-burgundy-dark)/20 py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-xs text-(--ora-burgundy-dark)/55">
                {moment.number}
              </span>

              <h3 className="font-display mt-5 text-3xl tracking-[-0.03em] md:text-4xl">
                {moment.title}
              </h3>

              <p className="mt-3 max-w-sm text-sm leading-6 text-(--ora-burgundy-dark)/75">
                {moment.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}