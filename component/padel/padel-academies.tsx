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
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              Learn the game
            </p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              An academy pathway from first swing to adult play.
            </h2>
          </div>
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-base leading-7 text-(--ora-text-secondary)">
              Weekly, age-based sessions make it easier for children and adults
              to find the right place to start—and a consistent way to improve.
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
