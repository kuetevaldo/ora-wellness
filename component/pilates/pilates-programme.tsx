import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProgrammeCard from "@/component/shared/programme-card";
import { pilatesProgrammes } from "@/lib/programmes";

export default function PilatesProgramme() {
  const weeklyPilates = pilatesProgrammes[0];

  return (
    <section
      id="pilates"
      className="scroll-mt-18 bg-(--ora-pink-light) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-(--ora-radius-media) bg-(--ora-cream)">
              <Image
                src="/images/IMG_E5270.JPG"
                alt="The ORA Reformer Pilates studio in Douala"
                fill
                sizes="(max-width: 1023px) calc(100vw - 2.5rem), 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              Mat work and recovery
            </p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              A weekly rhythm for control and mobility.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-7 text-(--ora-text-secondary)">
              Mat Pilates now has a clear place in the ORA week, with morning
              and evening options plus a dedicated stretching session for
              mobility and recovery.
            </p>

            <div className="mt-10">
              <ProgrammeCard programme={weeklyPilates} showLink={false} />
            </div>

            <Link href="/schedule" className="ora-text-link mt-6">
              View the full programme
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
