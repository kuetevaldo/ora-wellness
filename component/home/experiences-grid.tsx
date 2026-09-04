import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const experiences = [
  {
    title: "Fitness",
    href: "/experiences/gym",
    description: "Strength, cardio and focused conditioning.",
    image: "/images/hero-image/fitness.jpg",
    alt: "ORA Fitness training space in Douala",
  },
  {
    title: "Café",
    href: "/cafe",
    description: "Coffee, breakfast and nourishing food.",
    image: "/images/section-image/cafe-section.JPG",
    alt: "Barista working at ORA Café in Douala",
  },
  {
    title: "Padel",
    href: "/experiences/padel",
    description: "Play, coaching and competition.",
    image: "/images/section-image/padel-image.JPG",
    alt: "Players together at ORA Padel in Douala",
  },
  {
    title: "Pilates",
    href: "/experiences/pilates",
    description: "Control, strength and intentional movement.",
    image: "/images/hero-image/pilates.jpg",
    alt: "ORA Pilates space in Douala",
  },
  {
    title: "Yoga",
    href: "/experiences/yoga",
    description: "Movement, breath and balance.",
    image: "/images/hero-image/yoga1.jpg",
    alt: "Guided Yoga practice at ORA in Douala",
  },
  {
    title: "Studio",
    href: "/experiences/studio",
    description: "Group movement and shared energy.",
    image: "/images/section-image/studio-workout.JPG",
    alt: "Group movement session at ORA Studio",
  },
];

export default function ExperiencesGrid() {
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
              Explore ORA
            </p>

            <h2
              id="experiences-heading"
              className="font-display mt-3 text-5xl leading-none tracking-[-0.04em] sm:text-6xl"
            >
              Experiences
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-(--ora-text-secondary)">
            Move. Play. Nourish. Connect.
          </p>
        </div>

        {/* Experience cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:gap-8">
          {experiences.map((experience) => (
            <Link
              key={experience.title}
              href={experience.href}
              aria-label={`Explore ORA ${experience.title}`}
              className="group relative block overflow-hidden rounded-(--ora-radius-media) bg-(--ora-ink) text-white outline-none focus-visible:ring-4 focus-visible:ring-(--ora-pink) focus-visible:ring-offset-4"
            >
              <article className="relative min-h-108 sm:min-h-128 lg:min-h-144">
                <Image
                  src={experience.image}
                  alt={experience.alt}
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
                        {experience.title}
                      </h3>

                      <p className="mt-3 max-w-sm text-sm leading-6 text-white/85 sm:text-[0.9375rem]">
                        {experience.description}
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
          ))}
        </div>
      </div>
    </section>
  );
}