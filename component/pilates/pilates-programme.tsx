import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProgrammeCard from "@/component/shared/programme-card";
import { pilatesProgrammes } from "@/lib/programmes";

export default function PilatesProgramme() {
  const weeklyPilates = pilatesProgrammes[0];

  return (
    <section className="bg-(--ora-cream) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Programme information */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Pilates programme
            </p>

            <h2 className="font-display mt-5 max-w-xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Control, balance and mobility.
            </h2>

            <p className="mt-6 max-w-md text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
              Explore the current Pilates programme and find the session that
              fits your rhythm.
            </p>

            <div className="mt-9">
              <ProgrammeCard
                programme={weeklyPilates}
                showLink={false}
              />
            </div>

            <Link href="/schedule" className="ora-text-link mt-7">
              View the full programme
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </div>

          {/* Pilates image */}
          <div className="relative min-h-128 overflow-hidden rounded-(--ora-radius-media) sm:min-h-152 lg:col-span-7 lg:min-h-176">
            <Image
              src="/images/IMG_E5270.JPG"
              alt="The ORA Reformer Pilates studio in Douala"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}