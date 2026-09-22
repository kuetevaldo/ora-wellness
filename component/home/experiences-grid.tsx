"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const experienceKeys = [
  {
    key: "fitness",
    href: "/experiences/gym",
    image: "/images/hero-image/fitness.jpg",
  },
  {
    key: "cafe",
    href: "/cafe",
    image: "/images/section-image/cafe-section.JPG",
  },
  {
    key: "padel",
    href: "/experiences/padel",
    image: "/images/section-image/padel-image.JPG",
  },
  {
    key: "pilates",
    href: "/experiences/pilates",
    image: "/images/hero-image/pilates.jpg",
  },
  {
    key: "yoga",
    href: "/experiences/yoga",
    image: "/images/hero-image/yoga1.jpg",
  },
  {
    key: "studio",
    href: "/experiences/studio",
    image: "/images/section-image/studio-workout.JPG",
  },
] as const;

export default function ExperiencesGrid() {
  const t = useTranslations("Experiences");

  return (
    <section
      id="experiences"
      aria-labelledby="experiences-heading"
      className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        {/* Minimal introduction */}
        <div className="flex flex-col gap-5 border-b border-(--ora-burgundy-dark)/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              {t("eyebrow")}
            </p>

            <h2
              id="experiences-heading"
              className="font-display mt-3 text-5xl leading-none tracking-[-0.04em] sm:text-6xl"
            >
              {t("heading")}
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-(--ora-text-secondary)">
            {t("tagline")}
          </p>
        </div>

        {/* Experience cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
          {experienceKeys.map((experience) => {
            const title = t(`items.${experience.key}.title`);
            const description = t(`items.${experience.key}.description`);
            const alt = t(`items.${experience.key}.alt`);

            return (
              <Link
                key={experience.key}
                href={experience.href}
                aria-label={t("exploreLabel", { title })}
                className="group relative block overflow-hidden rounded-(--ora-radius-media) bg-(--ora-ink) text-white outline-none focus-visible:ring-4 focus-visible:ring-(--ora-pink) focus-visible:ring-offset-4"
              >
                <article className="relative min-h-108 sm:min-h-128 lg:min-h-144">
                  <Image
                    src={experience.image}
                    alt={alt}
                    fill
                    sizes="(max-width: 767px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-[1.025] group-focus-visible:scale-[1.025] motion-reduce:transition-none motion-reduce:group-hover:scale-100 motion-reduce:group-focus-visible:scale-100"
                  />

                  {/* Accessibility/readability overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-black/5"
                  />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                    <div className="flex items-end justify-between gap-6">
                      <div>
                        <h3 className="font-display text-4xl leading-none tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                          {title}
                        </h3>

                        <p className="mt-3 max-w-sm text-sm leading-6 text-white/85 sm:text-[0.9375rem]">
                          {description}
                        </p>
                      </div>

                      <span
                        aria-hidden="true"
                        className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-(--ora-burgundy-dark) transition-transform duration-200 group-hover:-translate-y-1 group-hover:translate-x-1 group-focus-visible:-translate-y-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                      >
                        <ArrowUpRight
                          size={18}
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}