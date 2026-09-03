import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

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
    <section
      aria-labelledby="schedule-heading"
      className="ora-section bg-(--ora-cream) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container">
        <div className="rounded-(--ora-radius-panel) border border-(--ora-border) bg-(--ora-surface-raised) p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-(--ora-border) pb-6">
            <div>
              <h2
                id="schedule-heading"
                className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight text-(--ora-burgundy-dark)"
              >
                Schedule
              </h2>
              <p className="mt-2 text-sm text-(--ora-text-secondary) max-w-md">
                Confirmed weekly sessions across Yoga, Pilates, Padel and Dance.
              </p>
            </div>
            <Link href="/schedule" className="ora-button ora-button-primary shrink-0">
              View full schedule
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-8 divide-y divide-(--ora-border)">
            {programmeHighlights.map((programme) => (
              <div
                key={programme.title}
                className="grid gap-2 py-4.5 sm:grid-cols-12 sm:items-center"
              >
                <div className="sm:col-span-6">
                  <p className="text-base font-semibold text-(--ora-burgundy-dark)">
                    {programme.title}
                  </p>
                </div>
                <div className="sm:col-span-3">
                  <p className="text-xs sm:text-sm text-(--ora-text-secondary)">
                    {programme.detail}
                  </p>
                </div>
                <div className="sm:col-span-3 sm:text-right">
                  <span className="inline-block rounded-full bg-(--ora-pink-light)/50 px-3 py-1 text-xs font-semibold text-(--ora-burgundy-dark) tabular-nums">
                    {programme.time}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
