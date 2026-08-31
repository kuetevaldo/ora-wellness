"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProgrammeCard from "@/component/shared/programme-card";
import {
  programmes,
  type ProgrammeCategory,
} from "@/lib/programmes";

type ProgrammeFilter = "all" | ProgrammeCategory;

const filters: { value: ProgrammeFilter; label: string }[] = [
  { value: "all", label: "All programmes" },
  { value: "padel", label: "Padel" },
  { value: "studio", label: "Dance & Studio" },
];

const enquiryExperiences = ["Fitness", "Pilates", "Yoga", "Studio classes"];

export default function ScheduleGrid() {
  const [activeFilter, setActiveFilter] = useState<ProgrammeFilter>("all");
  const visibleProgrammes =
    activeFilter === "all"
      ? programmes
      : programmes.filter(
          (programme) => programme.category === activeFilter,
        );

  return (
    <section className="bg-(--ora-cream) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28">
        <div className="flex flex-col gap-7 border-t border-(--ora-border-strong) pt-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              Published weekly programmes
            </p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              A schedule you can actually plan around.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-6 text-(--ora-text-secondary)">
            These times come from ORA programme announcements. Availability can
            change, so confirm your place before visiting.
          </p>
        </div>

        <div
          className="mt-10 flex flex-wrap gap-3"
          role="group"
          aria-label="Filter programmes"
        >
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              onClick={() => setActiveFilter(filter.value)}
              aria-pressed={activeFilter === filter.value}
              aria-controls="programme-results"
              className={`min-h-11 rounded-full px-5 py-2.5 text-sm font-semibold transition ${
                activeFilter === filter.value
                  ? "bg-(--ora-burgundy) text-white"
                  : "border border-(--ora-border-strong) text-(--ora-burgundy) hover:border-(--ora-burgundy)"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <p className="sr-only" aria-live="polite">
          Showing {visibleProgrammes.length} programme
          {visibleProgrammes.length === 1 ? "" : "s"}.
        </p>

        <div
          id="programme-results"
          className="mt-8 grid gap-6 lg:grid-cols-2"
        >
          {visibleProgrammes.map((programme) => (
            <ProgrammeCard key={programme.id} programme={programme} />
          ))}
        </div>

        <div className="mt-14 rounded-[1.5rem] bg-(--ora-sage-light) p-6 sm:p-8 md:flex md:items-end md:justify-between md:gap-10 md:p-10">
          <div>
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              More movement at ORA
            </p>
            <h3 className="font-display mt-4 text-3xl tracking-[-0.035em] sm:text-4xl">
              Ask about the latest class timetable.
            </h3>
            <ul
              className="mt-5 flex flex-wrap gap-2"
              aria-label="Other ORA experiences"
            >
              {enquiryExperiences.map((experience) => (
                <li
                  key={experience}
                  className="rounded-full border border-(--ora-border-strong) px-4 py-2 text-xs font-semibold"
                >
                  {experience}
                </li>
              ))}
            </ul>
          </div>
          <Link href="/contact" className="ora-button ora-button-primary mt-7 md:mt-0">
            Check availability
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
