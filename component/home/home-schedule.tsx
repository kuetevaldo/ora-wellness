import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";
import { ArrowUpRight } from "lucide-react";

const programmeHighlights = [
  {
    number: "01",
    category: "Yoga",
    title: "Yoga with Despina",
    detail: "Wednesday, Friday & Saturday",
    time: "Three weekly flows",
    image: "/images/hero-image/yoga1.jpg",
  },
  {
    number: "02",
    category: "Pilates",
    title: "Mat Pilates",
    detail: "Monday, Tuesday & Thursday",
    time: "Three weekly classes",
    image: "/images/hero-image/pilates.jpg",
  },
  {
    number: "03",
    category: "Padel",
    title: "Adult Padel Academy",
    detail: "Monday & Friday",
    time: "17:00–18:30",
    image: "/images/section-image/adult-padel1.JPG",
  },
  {
    number: "04",
    category: "Padel",
    title: "Kids Padel Academy",
    detail: "Weekly groups",
    time: "Ages 4–13",
    image: "/images/section-image/padel-kid.JPG",
  },
  {
    number: "05",
    category: "Studio",
    title: "Dance Academy",
    detail: "2026/27 programme",
    time: "Ages 2–11",
    image: "/images/section-image/studio-workout.JPG",
  },
];

export default function HomeSchedule() {
  return (
    <section
      id="programme"
      aria-labelledby="schedule-heading"
      className="scroll-mt-24 bg-(--ora-cream) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Introduction */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="flex size-12 items-center justify-center rounded-full bg-(--ora-pink-light) text-(--ora-burgundy)">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="h-4.5 w-4.5"
                  aria-hidden="true"
                />
              </div>

              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
                This week at ORA
              </p>

              <h2
                id="schedule-heading"
                className="font-display mt-4 max-w-md text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl"
              >
                Find your
                <br />
                next session.
              </h2>

              <p className="mt-6 max-w-xs text-sm leading-7 text-(--ora-text-secondary)">
                Yoga. Pilates. Padel. Studio.
              </p>

              <Link
                href="/schedule"
                className="ora-button ora-button-primary mt-8 inline-flex"
              >
                View full schedule

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Programme list */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="border-t border-(--ora-burgundy-dark)/15">
              {programmeHighlights.map((programme) => (
                <Link
                  key={programme.title}
                  href="/schedule"
                  aria-label={`View schedule for ${programme.title}`}
                  className="group block border-b border-(--ora-burgundy-dark)/15 py-6 outline-none transition-colors duration-200 hover:bg-white/45 focus-visible:bg-white/45 sm:px-4"
                >
                  <article className="grid items-center gap-5 sm:grid-cols-[2.5rem_92px_minmax(0,1fr)_auto]">
                    {/* Number */}
                    <span
                      aria-hidden="true"
                      className="hidden text-[10px] font-semibold tabular-nums tracking-[0.16em] text-(--ora-burgundy)/45 sm:block"
                    >
                      {programme.number}
                    </span>

                    {/* Image */}
                    <div className="relative hidden aspect-square overflow-hidden rounded-xl sm:block">
                      <Image
                        src={programme.image}
                        alt=""
                        fill
                        sizes="92px"
                        className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05] motion-reduce:transition-none"
                      />
                    </div>

                    {/* Main info */}
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
                        {programme.category}
                      </p>

                      <h3 className="font-display mt-2 text-3xl leading-none tracking-[-0.035em] sm:text-[2.15rem]">
                        {programme.title}
                      </h3>

                      <p className="mt-2 text-sm text-(--ora-text-secondary)">
                        {programme.detail}
                      </p>
                    </div>

                    {/* Time */}
                    <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                      <span className="rounded-full bg-(--ora-pink-light) px-3.5 py-1.5 text-xs font-semibold whitespace-nowrap text-(--ora-burgundy-dark)">
                        {programme.time}
                      </span>

                      <span
                        aria-hidden="true"
                        className="flex size-9 items-center justify-center rounded-full border border-(--ora-burgundy-dark)/15 text-(--ora-burgundy) transition-[transform,background-color,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-(--ora-burgundy) group-hover:text-white motion-reduce:transition-none"
                      >
                        <ArrowUpRight
                          size={15}
                          strokeWidth={1.5}
                        />
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Fitness */}
            <div className="mt-8 flex flex-col gap-4 rounded-(--ora-radius-panel) bg-(--ora-pink-light)/55 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
                  Fitness
                </p>

                <p className="mt-1 text-sm font-medium text-(--ora-burgundy-dark)">
                  Gym floor open daily
                </p>

                <p className="mt-1 text-xs text-(--ora-text-secondary)">
                  6:00 AM – 10:00 PM
                </p>
              </div>

              <Link
                href="/experiences/gym"
                className="ora-text-link shrink-0"
              >
                Explore Fitness

                <ArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}