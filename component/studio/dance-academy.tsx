import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProgrammeCard from "@/component/shared/programme-card";
import { studioProgrammes } from "@/lib/programmes";

export default function DanceAcademy() {
  const danceAcademy = studioProgrammes[0];

  return (
    <section className="bg-(--ora-sage-light) text-(--ora-burgundy-dark)">
      <div className="ora-container grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <p className="text-xs font-semibold text-(--ora-burgundy)">
            Dance for every early stage
          </p>
          <h2 className="font-display mt-4 max-w-xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            The 2026/27 Dance Academy.
          </h2>
          <p className="mt-6 max-w-md text-base leading-7 text-(--ora-text-secondary)">
            Four age-based groups help children from 2 to 11 build confidence,
            coordination and a lasting relationship with movement.
          </p>
          <Link href="/schedule" className="ora-text-link mt-5">
            View all programmes
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          <ProgrammeCard programme={danceAcademy} showLink={false} />
        </div>
      </div>
    </section>
  );
}
