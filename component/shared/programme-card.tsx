"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight, CalendarDays } from "lucide-react";

import type { OraProgramme } from "@/lib/programmes";

type ProgrammeCardProps = {
  programme: OraProgramme;
  showLink?: boolean;
};

export default function ProgrammeCard({
  programme,
  showLink = true,
}: ProgrammeCardProps) {
  const tCommon = useTranslations("Common");
  const tData = useTranslations("ProgrammesData");

  const categoryLabel = tData(`categories.${programme.category}`);

  return (
    <article className="flex h-full flex-col rounded-3xl border border-(--ora-border) bg-(--ora-surface-raised) p-5 sm:p-7">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-xs font-semibold text-(--ora-burgundy)">
            {programme.eyebrow}
          </p>
          <h3 className="font-display mt-3 text-3xl leading-none tracking-[-0.035em] sm:text-4xl">
            {programme.title}
          </h3>
        </div>
        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-(--ora-pink-light) text-(--ora-burgundy-dark)">
          <CalendarDays size={19} strokeWidth={1.6} aria-hidden="true" />
        </span>
      </div>

      <p className="mt-5 max-w-xl text-sm leading-6 text-(--ora-text-secondary)">
        {programme.description}
      </p>

      <div className="mt-7 grid gap-3 sm:hidden">
        {programme.schedule.map((entry) => (
          <dl
            key={`${entry.group}-${entry.age}-${entry.day}-mobile`}
            className="rounded-2xl border border-(--ora-border) p-4"
          >
            <div>
              <dt className="sr-only">{tCommon("groupAndAge")}</dt>
              <dd className="text-sm font-semibold">
                {entry.group} · {entry.age}
              </dd>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4 border-t border-(--ora-border) pt-4">
              <div>
                <dt className="text-xs text-(--ora-text-secondary)">{tCommon("day")}</dt>
                <dd className="mt-1 text-sm font-semibold">{entry.day}</dd>
              </div>
              <div>
                <dt className="text-xs text-(--ora-text-secondary)">{tCommon("time")}</dt>
                <dd className="mt-1 text-sm font-semibold tabular-nums">
                  {entry.time}
                </dd>
              </div>
            </div>
          </dl>
        ))}
      </div>

      <div className="mt-7 hidden overflow-x-auto rounded-2xl border border-(--ora-border) sm:block">
        <table className="w-full border-collapse text-left text-sm">
          <caption className="sr-only">
            {programme.title}
          </caption>
          <thead className="bg-(--ora-sage-light)/55 text-xs text-(--ora-text-secondary)">
            <tr>
              <th scope="col" className="px-4 py-3 font-semibold">
                {tCommon("groupAndAge")}
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                {tCommon("day")}
              </th>
              <th scope="col" className="px-4 py-3 font-semibold">
                {tCommon("time")}
              </th>
            </tr>
          </thead>
          <tbody>
            {programme.schedule.map((entry) => (
              <tr
                key={`${entry.group}-${entry.age}-${entry.day}`}
                className="border-t border-(--ora-border)"
              >
                <th scope="row" className="px-4 py-3 font-semibold">
                  {entry.group} ({entry.age})
                </th>
                <td className="px-4 py-3 text-(--ora-text-secondary)">
                  {entry.day}
                </td>
                <td className="px-4 py-3 font-semibold tabular-nums">
                  {entry.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-auto pt-6">
        <p className="text-xs font-semibold text-(--ora-burgundy-dark)">
          {programme.status}
        </p>
        <p className="mt-2 max-w-xl text-xs leading-5 text-(--ora-text-secondary)">
          {programme.availabilityNote}
        </p>
        {showLink ? (
          <Link href={programme.href} className="ora-text-link mt-4">
            {tCommon("viewProgramme")} · {categoryLabel}
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        ) : null}
      </div>
    </article>
  );
}
