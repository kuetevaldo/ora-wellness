import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ExperiencesGrid() {
  return (
    <section
      id="experiences"
      aria-labelledby="experiences-heading"
      className="ora-section scroll-mt-20 bg-(--ora-cream)"
    >
      <div className="ora-container">
        {/* Minimal Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 border-b border-(--ora-border) pb-6">
          <h2
            id="experiences-heading"
            className="font-display text-4xl sm:text-5xl lg:text-6xl tracking-tight text-(--ora-burgundy-dark)"
          >
            Experiences
          </h2>
          <p className="text-sm text-(--ora-text-secondary) max-w-sm">
            Six spaces designed around movement, nourishment and recovery.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:gap-8">
          {/* 1. LARGE FITNESS BLOCK */}
          <Link
            href="/experiences/gym"
            className="group relative block overflow-hidden rounded-(--ora-radius-media) border border-(--ora-border) bg-(--ora-ink) text-white shadow-sm transition-transform duration-300 hover:shadow-md motion-reduce:transition-none"
          >
            <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
              <Image
                src="/images/hero-image/fitness.jpg"
                alt="ORA Fitness strength and cardio floor"
                fill
                sizes="(max-width: 1024px) 100vw, 90rem"
                className="object-cover object-[center_35%] transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white">
                    Fitness
                  </h3>
                  <p className="mt-2 max-w-md text-sm sm:text-base text-white/88">
                    Strength, cardio and focused conditioning designed for progressive performance.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-(--ora-burgundy-dark) transition-transform duration-200 group-hover:translate-x-0.5">
                  Explore Fitness
                  <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>

          {/* 2 & 3. CAFÉ (7 cols) + PADEL (5 cols) */}
          <div className="grid gap-6 md:grid-cols-12 lg:gap-8">
            {/* Café Block */}
            <Link
              href="/cafe"
              className="group relative block overflow-hidden rounded-(--ora-radius-media) border border-(--ora-border) bg-(--ora-surface-raised) p-6 sm:p-8 md:col-span-7 transition-colors hover:border-(--ora-border-strong)"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-(--ora-cream)">
                <Image
                  src="/images/hero-image/cafe-ora.JPG"
                  alt="ORA Café breakfast and specialty coffee"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-(--ora-burgundy-dark)">
                    Café
                  </h3>
                  <p className="mt-1.5 max-w-sm text-sm text-(--ora-text-secondary)">
                    Specialty coffee, fresh breakfast, nourishing bowls and protein shakes.
                  </p>
                </div>
                <span className="ora-text-link shrink-0">
                  View Café
                  <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>
            </Link>

            {/* Padel Block */}
            <Link
              href="/experiences/padel"
              className="group relative block overflow-hidden rounded-(--ora-radius-media) border border-(--ora-border) bg-(--ora-surface-raised) p-6 sm:p-8 md:col-span-5 transition-colors hover:border-(--ora-border-strong)"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-(--ora-cream)">
                <Image
                  src="/images/hero-image/padel-image.jpg"
                  alt="ORA Padel courts in Douala"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-(--ora-burgundy-dark)">
                    Padel
                  </h3>
                  <p className="mt-1.5 max-w-xs text-sm text-(--ora-text-secondary)">
                    Social matches, tournament competition and weekly academy coaching.
                  </p>
                </div>
                <span className="ora-text-link shrink-0">
                  Explore Padel
                  <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>

          {/* 4 & 5. PILATES (5 cols) + YOGA (7 cols) */}
          <div className="grid gap-6 md:grid-cols-12 lg:gap-8">
            {/* Pilates Block */}
            <Link
              href="/experiences/pilates"
              className="group relative block overflow-hidden rounded-(--ora-radius-media) border border-(--ora-border) bg-(--ora-surface-raised) p-6 sm:p-8 md:col-span-5 transition-colors hover:border-(--ora-border-strong)"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-(--ora-pink-light)/40">
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
                  <source src="/video/pilates.MP4" type="video/mp4" />
                </video>
                <Image
                  src="/images/hero-image/pilates.jpg"
                  alt="ORA Reformer Pilates studio"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover object-center hidden motion-reduce:block"
                />
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-(--ora-burgundy-dark)">
                    Pilates
                  </h3>
                  <p className="mt-1.5 max-w-xs text-sm text-(--ora-text-secondary)">
                    Controlled reformer and mat movement for core stability and mobility.
                  </p>
                </div>
                <span className="ora-text-link shrink-0">
                  Explore Pilates
                  <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>
            </Link>

            {/* Yoga Block */}
            <Link
              href="/experiences/yoga"
              className="group relative block overflow-hidden rounded-(--ora-radius-media) border border-(--ora-border) bg-(--ora-surface-raised) p-6 sm:p-8 md:col-span-7 transition-colors hover:border-(--ora-border-strong)"
            >
              <div className="relative aspect-[16/11] w-full overflow-hidden rounded-xl bg-(--ora-cream)">
                <Image
                  src="/images/hero-image/yoga1.jpg"
                  alt="ORA Yoga guided practice"
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover object-[50%_40%] transition-transform duration-700 ease-out group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
              </div>
              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl text-(--ora-burgundy-dark)">
                    Yoga
                  </h3>
                  <p className="mt-1.5 max-w-sm text-sm text-(--ora-text-secondary)">
                    Breathwork, intentional alignment and restorative flows to reset.
                  </p>
                </div>
                <span className="ora-text-link shrink-0">
                  Explore Yoga
                  <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
                </span>
              </div>
            </Link>
          </div>

          {/* 6. LARGE STUDIO BLOCK */}
          <Link
            href="/experiences/studio"
            className="group relative block overflow-hidden rounded-(--ora-radius-media) border border-(--ora-border) bg-(--ora-ink) text-white shadow-sm transition-transform duration-300 hover:shadow-md motion-reduce:transition-none"
          >
            <div className="relative aspect-[16/10] sm:aspect-[21/9] w-full overflow-hidden">
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
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10"
              />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white">
                    Studio
                  </h3>
                  <p className="mt-2 max-w-md text-sm sm:text-base text-white/88">
                    High-energy group training, dance academy and community movement.
                  </p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs sm:text-sm font-semibold text-(--ora-burgundy-dark) transition-transform duration-200 group-hover:translate-x-0.5">
                  Explore Studio
                  <ArrowUpRight size={16} strokeWidth={1.75} aria-hidden="true" />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
