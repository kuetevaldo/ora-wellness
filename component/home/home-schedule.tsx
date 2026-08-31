import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

const programmeHighlights = [
  {
    title: "Yoga with Despina",
    detail: "Wednesday, Friday & Saturday",
    time: "Three weekly flows",
  },
  {
    title: "Mat Pilates",
    detail: "Monday, Tuesday & Thursday",
    time: "Three weekly classes",
  },
  {
    title: "Adult Padel Academy",
    detail: "Monday & Friday",
    time: "17:00–18:30",
  },
  {
    title: "Kids Padel Academy",
    detail: "Weekly groups",
    time: "Ages 4–13",
  },
  {
    title: "Dance Academy",
    detail: "2026/27 programme",
    time: "Ages 2–11",
  },
];

export default function HomeSchedule() {
  return (
    <section className="ora-section bg-(--ora-cream) text-(--ora-burgundy-dark)">
      <div className="ora-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start lg:gap-20">
        <div className="lg:sticky lg:top-30">
          <p className="text-xs font-semibold text-(--ora-burgundy)">
            Classes and movement
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-[clamp(3.25rem,6vw,6rem)] font-normal leading-[0.9] tracking-[-0.045em]">
            Find the way you want to move.
          </h2>
          <p className="mt-6 max-w-lg text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
            Published Yoga, Mat Pilates, Padel and Dance times make it easier to
            plan movement into the week. Contact ORA to confirm your place.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link href={bookingHref} className="ora-button ora-button-primary">
              Reserve your place
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <Link href="/schedule" className="ora-button ora-button-secondary">
              View all times
            </Link>
          </div>
        </div>

        <div className="rounded-(--ora-radius-panel) bg-(--ora-sage-light) p-5 sm:p-8 md:p-10">
          <p className="text-xs font-semibold text-(--ora-burgundy)">
            Programme highlights
          </p>
          <h3 className="font-display mt-3 text-3xl tracking-[-0.035em] text-(--ora-burgundy-dark) sm:text-4xl">
            A week with more ways to move.
          </h3>
          <div className="mt-8 border-t border-(--ora-border-strong)">
            {programmeHighlights.map((programme) => (
              <article
                key={programme.title}
                className="grid gap-2 border-b border-(--ora-border) py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6"
              >
                <div>
                  <h4 className="text-sm font-semibold text-(--ora-burgundy-dark)">
                    {programme.title}
                  </h4>
                  <p className="mt-1 text-xs text-(--ora-text-secondary)">
                    {programme.detail}
                  </p>
                </div>
                <p className="text-sm font-semibold tabular-nums text-(--ora-burgundy-dark)">
                  {programme.time}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
