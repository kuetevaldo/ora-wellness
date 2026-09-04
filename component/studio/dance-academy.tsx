import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProgrammeCard from "@/component/shared/programme-card";
import { studioProgrammes } from "@/lib/programmes";

export default function DanceAcademy() {
  const danceAcademy = studioProgrammes[0];

  return (
    <section className="bg-(--ora-sage-light) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-start lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Dance Academy
            </p>

            <h2 className="font-display mt-5 max-w-xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Movement starts young.
            </h2>

            <p className="mt-6 max-w-md text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
              Four age-based groups for children from 2 to 11, designed to
              build confidence, coordination and a lasting relationship with
              movement.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-3xl tracking-[-0.03em]">
                2026
              </span>

              <span className="h-px w-10 bg-(--ora-burgundy-dark)/30" />

              <span className="font-display text-3xl tracking-[-0.03em]">
                2027
              </span>
            </div>

            <Link href="/schedule" className="ora-text-link mt-8">
              View all programmes
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ProgrammeCard
              programme={danceAcademy}
              showLink={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}