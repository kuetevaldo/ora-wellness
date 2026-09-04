import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProgrammeCard from "@/component/shared/programme-card";
import { padelProgrammes } from "@/lib/programmes";

export default function PadelAcademies() {
  return (
    <section className="bg-(--ora-cream) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        
        {/* Academy story */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          
          <div className="relative min-h-128 overflow-hidden rounded-(--ora-radius-media) lg:col-span-7 lg:min-h-168">
            <Image
              src="/images/section-image/padel-kid.JPG"
              alt="Young players at ORA Padel academy"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Padel Academies
            </p>

            <h2 className="font-display mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Coaching for every stage.
            </h2>

            <p className="mt-6 max-w-md text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
              Weekly group sessions for adults and children aged 4 to 13.
            </p>

            <Link href="/schedule" className="ora-text-link mt-7">
              View the full programme
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Secondary academy image */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12">
          <div className="relative min-h-96 overflow-hidden rounded-(--ora-radius-media) sm:min-h-120 lg:col-span-5">
            <Image
              src="/images/section-image/padel-kid1.JPG"
              alt="Young ORA Padel player"
              fill
              sizes="(max-width: 1023px) 100vw, 42vw"
              className="object-cover object-center"
            />
          </div>

          {/* Existing real programme information */}
          <div className="grid gap-6 lg:col-span-7 lg:grid-cols-2">
            {padelProgrammes.map((programme) => (
              <ProgrammeCard
                key={programme.id}
                programme={programme}
                showLink={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}