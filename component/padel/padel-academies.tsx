import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProgrammeCard from "@/component/shared/programme-card";
import { padelProgrammes } from "@/lib/programmes";

export default function PadelAcademies() {
  return (
    <section className="bg-(--ora-cream) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-wider text-(--ora-burgundy)">
              Padel Academies
            </span>
            <h2 className="font-display mt-3 max-w-3xl text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Coaching for every stage.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-sm sm:text-base leading-relaxed text-(--ora-text-secondary)">
              Weekly group sessions for adults and children aged 4 to 13.
            </p>
            <Link href="/schedule" className="ora-text-link mt-5">
              View the full programme
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {padelProgrammes.map((programme) => (
            <ProgrammeCard
              key={programme.id}
              programme={programme}
              showLink={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
