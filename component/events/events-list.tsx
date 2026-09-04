import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const eventMoments = [
  {
    number: "01",
    title: "Padel",
    description:
      "Competition, play and shared moments around the ORA courts.",
    image: "/images/section-image/compete.JPG",
    alt: "Padel activity at ORA",
  },
  {
    number: "02",
    title: "Academies",
    description:
      "Programmes designed to bring children, adults and families into movement.",
    image: "/images/section-image/padel-kid.JPG",
    alt: "Young Padel player at ORA",
  },
  {
    number: "03",
    title: "Studio",
    description:
      "Group movement shaped by shared energy and the ORA community.",
    image: "/images/section-image/studio-workout.JPG",
    alt: "Group movement session at ORA",
  },
];

export default function EventsList() {
  return (
    <section
      id="events-community"
      className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        {/* Intro */}
        <div className="grid gap-8 border-t border-(--ora-burgundy-dark)/15 pt-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Events & community
            </p>

            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              ORA comes
              <br />
              alive together.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-sm leading-6 text-(--ora-text-secondary)">
              From the court to the Studio, ORA creates space for movement,
              participation and connection.
            </p>
          </div>
        </div>

        {/* Image stories */}
        <div className="mt-12 grid gap-5 lg:grid-cols-12">
          {/* Large feature */}
          <article className="group lg:col-span-7">
            <div className="relative min-h-120 overflow-hidden rounded-(--ora-radius-media) sm:min-h-152 lg:min-h-176">
              <Image
                src={eventMoments[0].image}
                alt={eventMoments[0].alt}
                fill
                sizes="(min-width: 1024px) 58vw, 100vw"
                className="object-cover transition-transform duration-500 ease-(--ora-ease-out) group-hover:scale-[1.02] motion-reduce:transition-none"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent"
              />

              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                  {eventMoments[0].number}
                </p>

                <h3 className="font-display mt-3 text-4xl tracking-[-0.04em] sm:text-5xl">
                  {eventMoments[0].title}
                </h3>

                <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                  {eventMoments[0].description}
                </p>
              </div>
            </div>
          </article>

          {/* Smaller stories */}
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            {eventMoments.slice(1).map((item) => (
              <article key={item.number} className="group">
                <div className="relative min-h-88 overflow-hidden rounded-(--ora-radius-media) lg:min-h-86">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 1024px) 42vw, 100vw"
                    className="object-cover transition-transform duration-500 ease-(--ora-ease-out) group-hover:scale-[1.025] motion-reduce:transition-none"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/60">
                      {item.number}
                    </p>

                    <h3 className="font-display mt-2 text-3xl tracking-[-0.035em]">
                      {item.title}
                    </h3>

                    <p className="mt-2 max-w-sm text-sm leading-6 text-white/80">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Tournament feature */}
        <div className="mt-20 grid overflow-hidden rounded-(--ora-radius-media) bg-(--ora-pink-light) lg:grid-cols-2">
          <div className="relative min-h-104 lg:min-h-136">
            <Image
              src="/images/section-image/winner-padel.JPG"
              alt="ORA Padel event moment"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="flex items-end p-7 sm:p-10 lg:p-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
                Padel at ORA
              </p>

              <h3 className="font-display mt-4 max-w-xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl">
                More than
                <br />
                the match.
              </h3>

              <p className="mt-5 max-w-md text-sm leading-6 text-(--ora-text-secondary)">
                Follow ORA for upcoming Padel activities and community moments.
              </p>
            </div>
          </div>
        </div>

        {/* What's next */}
        <div className="mt-16 flex flex-col gap-6 border-t border-(--ora-burgundy-dark)/15 pt-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              What&apos;s next
            </p>

            <h3 className="font-display mt-3 max-w-2xl text-3xl tracking-[-0.035em] sm:text-4xl">
              Explore the current ORA programme.
            </h3>
          </div>

          <Link
            href="/schedule"
            className="ora-button ora-button-primary"
          >
            View programme

            <ArrowUpRight
              size={16}
              strokeWidth={1.6}
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}