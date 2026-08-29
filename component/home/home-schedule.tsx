import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const movementTypes = [
  ["Pilates", "Controlled movement, balance and focused strength."],
  ["Yoga", "Breath, mobility and a calmer movement practice."],
  ["Studio", "Guided group movement built around energy and community."],
  ["Fitness", "Strength, cardio and focused training."],
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
            The official class days and times will be published when the ORA
            timetable is confirmed.
          </p>
          <Link href="/schedule" className="ora-text-link mt-6">
            View schedule
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="rounded-(--ora-radius-panel) bg-(--ora-sage-light) p-5 sm:p-8 md:p-10">
          <p className="font-display text-3xl text-(--ora-burgundy-dark) sm:text-4xl">
            Schedule coming soon.
          </p>
          <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {movementTypes.map(([title, description]) => (
              <article key={title}>
                <h3 className="text-base font-semibold text-(--ora-burgundy-dark)">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
