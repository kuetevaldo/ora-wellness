import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const pillars = [
  {
    number: "01",
    title: "Move",
    description: "Fitness, Pilates, Yoga and Studio.",
    image: "/images/section-image/gym.JPG",
    alt: "Fitness training at ORA",
    href: "/experiences/gym",
  },
  {
    number: "02",
    title: "Play",
    description: "Padel and shared moments on court.",
    image: "/images/section-image/padel-image.JPG",
    alt: "Padel at ORA",
    href: "/experiences/padel",
  },
  {
    number: "03",
    title: "Nourish",
    description: "Coffee, food, juices and wellness drinks.",
    image: "/images/section-image/cafe-section.JPG",
    alt: "ORA Café",
    href: "/cafe",
  },
  {
    number: "04",
    title: "Connect",
    description: "Movement, programmes and community.",
    image: "/images/section-image/studio-workout.JPG",
    alt: "Group movement at ORA",
    href: "/experiences/studio",
  },
];

export default function AboutExperiences() {
  return (
    <section className="bg-(--ora-sage-light) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              The ORA experience
            </p>

            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Different experiences.
              <br />
              One rhythm.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-sm leading-6 text-(--ora-text-secondary)">
              Discover the different ways ORA fits into your day.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {pillars.map((item) => (
            <Link
              key={item.number}
              href={item.href}
              className="group relative min-h-104 overflow-hidden rounded-(--ora-radius-media) focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ora-burgundy) focus-visible:ring-offset-2"
            >
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 ease-(--ora-ease-out) group-hover:scale-[1.025] motion-reduce:transition-none"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-6 p-6 text-white sm:p-7">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                    {item.number}
                  </p>

                  <h3 className="font-display mt-3 text-4xl tracking-[-0.04em]">
                    {item.title}
                  </h3>

                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/75">
                    {item.description}
                  </p>
                </div>

                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-(--ora-burgundy-dark) transition-transform duration-180 group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none">
                  <ArrowUpRight
                    size={17}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}