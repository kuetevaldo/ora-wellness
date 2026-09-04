"use client";

import { useState } from "react";

import ProgrammeCard from "@/component/shared/programme-card";
import {
  programmes,
  type ProgrammeCategory,
} from "@/lib/programmes";

type ProgrammeFilter = "all" | ProgrammeCategory;

const filters: {
  value: ProgrammeFilter;
  label: string;
}[] = [
  { value: "all", label: "All" },
  { value: "padel", label: "Padel" },
  { value: "pilates", label: "Pilates" },
  { value: "yoga", label: "Yoga" },
  { value: "studio", label: "Studio" },
];

export default function ScheduleGrid() {
  const [activeFilter, setActiveFilter] =
    useState<ProgrammeFilter>("all");

  const visibleProgrammes =
    activeFilter === "all"
      ? programmes
      : programmes.filter(
          (programme) =>
            programme.category === activeFilter
        );

  return (
    <section
      id="programme-list"
      className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        {/* Header */}
        <div className="grid gap-8 border-t border-(--ora-burgundy-dark)/15 pt-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Programme
            </p>

            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Choose how you
              <br className="hidden sm:block" />
              want to move.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-sm leading-6 text-(--ora-text-secondary)">
              Browse the published ORA programme and find the sessions that fit
              your week.
            </p>
          </div>
        </div>

        {/* Filters */}
        <div
          className="mt-10 flex gap-2 overflow-x-auto pb-2"
          role="group"
          aria-label="Filter programmes"
        >
          {filters.map((filter) => {
            const active =
              activeFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() =>
                  setActiveFilter(filter.value)
                }
                aria-pressed={active}
                aria-controls="programme-results"
                className={`min-h-11 shrink-0 rounded-full px-5 text-sm font-semibold transition-[background-color,color,border-color,transform] duration-150 active:scale-[0.97] motion-reduce:transition-none ${
                  active
                    ? "border border-(--ora-burgundy) bg-(--ora-burgundy) text-white"
                    : "border border-(--ora-burgundy-dark)/15 bg-transparent text-(--ora-burgundy-dark) hover:border-(--ora-burgundy)"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <p
          className="sr-only"
          aria-live="polite"
        >
          Showing {visibleProgrammes.length} programme
          {visibleProgrammes.length === 1 ? "" : "s"}.
        </p>

        {/* Programmes */}
        <div
          id="programme-results"
          className="mt-10 grid gap-5 lg:grid-cols-2"
        >
          {visibleProgrammes.map(
            (programme) => (
              <ProgrammeCard
                key={programme.id}
                programme={programme}
              />
            )
          )}
        </div>
      </div>
    </section>
  );
}