import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

const experiences = {
  fitness: {
    title: "Fitness",
    description:
      "Strength, cardio and focused training designed around consistent progress.",
    href: "/experiences/gym",
    cta: "See Fitness and join",
  },
  cafe: {
    title: "Café",
    description:
      "Breakfast, specialty coffee, nourishing meals, fresh juices and protein shakes.",
    href: "/cafe",
    cta: "See the menu and visit",
  },
  padel: {
    title: "Padel",
    description:
      "Social sport, competition and movement brought together in one experience.",
    href: "/experiences/padel",
    cta: "See Padel and book",
  },
  pilates: {
    title: "Pilates",
    description:
      "Controlled movement, balance, mobility and focused strength.",
    href: "/experiences/pilates",
    cta: "See classes and book",
  },
  yoga: {
    title: "Yoga",
    description:
      "Breath, mobility and a calmer approach to movement and balance.",
    href: "/experiences/yoga",
    cta: "See classes and book",
  },
  studio: {
    title: "Studio",
    description:
      "Guided group classes built around energy, variety and community.",
    href: "/experiences/studio",
    cta: "See classes and book",
  },
};

function ExperienceCopy({
  title,
  description,
  cta,
}: {
  title: string;
  description: string;
  cta: string;
}) {
  return (
    <div className="flex h-full flex-col justify-between gap-6">
      <div>
        <h3 className="font-display text-[clamp(2rem,4vw,4rem)] font-normal leading-none tracking-[-0.035em] text-(--ora-burgundy-dark)">
          {title}
        </h3>

        <p className="mt-4 max-w-md text-sm leading-6 text-(--ora-text-secondary)">
          {description}
        </p>
      </div>

      <span
        className="ora-text-link w-fit"
        aria-hidden="true"
      >
        {cta}

        <ArrowUpRight
          size={15}
          strokeWidth={1.5}
        />
      </span>
    </div>
  );
}

export default function ExperiencesGrid() {
  return (
    <section
      id="experiences"
      className="ora-section scroll-mt-20 bg-(--ora-cream)"
    >
      <div className="ora-container">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold tracking-[0.08em] text-(--ora-burgundy)">
            Experiences
          </p>

          <h2 className="font-display mt-4 text-[clamp(3.25rem,7vw,6.75rem)] font-normal leading-[0.9] tracking-tighter text-(--ora-burgundy-dark)">
            Start with what brings you in.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-(--ora-text-secondary)">
            Choose one experience for today. ORA makes it easy to add another
            when you are ready.
          </p>
        </div>

        {/* Fitness */}
        <Link
          href={experiences.fitness.href}
          className="group ora-editorial-link mt-14 grid gap-6 rounded-(--ora-radius-panel) bg-(--ora-surface-raised) p-4 sm:p-6 md:grid-cols-[1.35fr_0.65fr] md:items-stretch lg:mt-18 lg:gap-10 lg:p-8"
        >
          <div className="relative aspect-4/3 min-h-44 overflow-hidden rounded-(--ora-radius-media) sm:min-h-56 md:aspect-16/10">
            <Image
              src="/images/hero-image/fitness.jpg"
              alt="ORA Fitness"
              fill
              sizes="(max-width: 767px) 100vw, 60vw"
              className="object-cover object-[center_30%] transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"
            />
          </div>

          <div className="p-2 md:py-4 lg:p-5">
            <ExperienceCopy
              {...experiences.fitness}
            />
          </div>
        </Link>

        {/* Café + Padel */}
        <div className="mt-8 grid gap-8 md:grid-cols-12">
          <Link
            href={experiences.cafe.href}
            className="ora-editorial-link grid grid-cols-[0.9fr_1.1fr] items-center gap-5 border-t border-(--ora-border) pt-6 sm:grid-cols-[0.95fr_1.05fr] md:col-span-7 md:border-0 md:bg-(--ora-sage-light) md:p-6"
          >
  <div className="relative aspect-4/5 overflow-hidden rounded-(--ora-radius-media) sm:aspect-square">
  <Image
    src="/images/cafe.png"
    alt="ORA Café"
    fill
    sizes="(max-width: 767px) 45vw, 30vw"
    className="object-contain object-center scale-140 transition-transform duration-500 ease-out group-hover:scale-[1.14] motion-reduce:transition-none"
  />
</div>

            <div className="md:px-2 md:py-2">
              <ExperienceCopy
                {...experiences.cafe}
              />
            </div>
          </Link>

          <Link
            href={experiences.padel.href}
            className="ora-editorial-link grid grid-cols-[0.9fr_1.1fr] items-center gap-5 border-t border-(--ora-border) pt-6 sm:grid-cols-[0.9fr_1.1fr] md:col-span-5 md:border-0 md:pt-0"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-(--ora-radius-media) sm:aspect-square">
  <Image
    src="/images/hero-image/padel1.webp"
    alt="ORA Padel"
    fill
    sizes="(max-width: 767px) 45vw, 30vw"
    className="object-contain object-center scale-140 transition-transform duration-500 ease-out group-hover:scale-[1.14] motion-reduce:transition-none"
  />
</div>

            <div>
              <ExperienceCopy
                {...experiences.padel}
              />
            </div>
          </Link>
        </div>

        {/* Pilates + Yoga */}
        <div className="mt-8 grid gap-8 md:grid-cols-[0.72fr_1.28fr] md:items-end">
          <Link
            href={experiences.pilates.href}
            className="ora-editorial-link grid grid-cols-[0.9fr_1.1fr] items-center gap-5 border-t border-(--ora-border) pt-6 sm:grid-cols-[0.9fr_1.1fr] md:border-0 md:pt-0"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-(--ora-radius-media) sm:aspect-square">
  <Image
    src="/images/hero-image/pilates.jpg"
    alt="ORA Pilates"
    fill
    sizes="(max-width: 767px) 45vw, 30vw"
    className="object-cover object-[58%_center] transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
  />
</div>
            <div>
              <ExperienceCopy
                {...experiences.pilates}
              />
            </div>
          </Link>

          <Link
            href={experiences.yoga.href}
            className="ora-editorial-link grid grid-cols-[0.9fr_1.1fr] items-center gap-5 border-t border-(--ora-border) pt-6 sm:grid-cols-[0.95fr_1.05fr] md:border-0 md:bg-(--ora-pink-light) md:p-6"
          >
            <div className="relative aspect-4/5 overflow-hidden rounded-(--ora-radius-media) sm:aspect-square">
  <Image
    src="/images/hero-image/yoga1.jpg"
    alt="ORA Yoga"
    fill
    sizes="(max-width: 767px) 45vw, 30vw"
    className="object-cover object-[58%_center] transition-transform duration-500 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
  />
</div>
            <div className="md:px-2 md:py-2">
              <ExperienceCopy
                {...experiences.yoga}
              />
            </div>
          </Link>
        </div>

        {/* Studio */}
        <Link
          href={experiences.studio.href}
          className="ora-editorial-link mt-8 grid grid-cols-[0.9fr_1.1fr] items-center gap-5 border-t border-(--ora-border) pt-6 sm:grid-cols-1 md:grid-cols-[0.62fr_1.38fr] md:gap-10 md:pt-8"
        >
          <div className="order-2 sm:order-2 md:order-1 md:py-6">
            <ExperienceCopy
              {...experiences.studio}
            />
          </div>

          <div className="relative order-1 aspect-4/5 overflow-hidden rounded-(--ora-radius-media) bg-(--ora-burgundy) sm:aspect-16/7 md:order-2">
            <video
              className="h-full w-full object-cover motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden="true"
              tabIndex={-1}
            >
              <source src="/video/studio.MP4" type="video/mp4" />
            </video>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent"
            />
          </div>
        </Link>

        <div className="mt-12 grid gap-7 rounded-(--ora-radius-panel) bg-(--ora-burgundy) px-6 py-9 text-white sm:px-9 md:grid-cols-[1fr_auto] md:items-end md:px-12 md:py-12">
          <div>
            <p className="text-xs font-semibold text-(--ora-pink-light)">
              Need a recommendation?
            </p>
            <h3 className="font-display mt-3 max-w-2xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl">
              Tell us your goal. We will help you choose where to start.
            </h3>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/78">
              Share the experience you want and your preferred time. The ORA
              team will confirm the best available option for your visit.
            </p>
          </div>
          <Link href={bookingHref} className="ora-button ora-button-light">
            Get guidance and book
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
