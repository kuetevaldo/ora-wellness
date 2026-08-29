"use client";

import { useState } from "react";

const filters = [
  "Pilates",
  "Yoga",
  "Studio",
  "Fitness",
];

export default function ScheduleGrid() {
  const [active, setActive] = useState("Pilates");

  return (
    <section className="bg-(--ora-cream) px-6 py-20 text-(--ora-burgundy-dark) md:px-10 md:py-28 lg:px-14">
      <div className="mx-auto max-w-375">
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActive(filter)}
              aria-pressed={active === filter}
              className={`min-h-11 rounded-full px-5 py-2.5 text-sm transition ${
                active === filter
                  ? "bg-(--ora-burgundy) text-white"
                  : "border border-(--ora-burgundy)/20 text-(--ora-burgundy) hover:border-(--ora-burgundy)"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="mt-14 border-t border-(--ora-burgundy)/15">
          <div className="py-14">
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-(--ora-muted)">
              {active}
            </p>

            <h2 className="mt-5 text-4xl font-normal tracking-[-0.035em] sm:text-5xl">
              Schedule coming soon.
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-7 text-(--ora-muted)">
              ORA’s current class days and times will be displayed here once
              the official timetable is available.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
