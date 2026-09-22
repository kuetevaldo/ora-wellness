import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";

import ProgrammeCard from "@/component/shared/programme-card";
import { pilatesProgrammes } from "@/lib/programmes";

export default async function PilatesProgramme() {
  const t = await getTranslations("Pilates");
  const weeklyPilates = pilatesProgrammes[0];

  return (
    <section className="bg-(--ora-cream) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          {/* Programme information */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              {t("programmeEyebrow")}
            </p>

            <h2 className="font-display mt-5 max-w-xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {t("programmeHeading")}
            </h2>

            <p className="mt-6 max-w-md text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
              {t("programmeBody")}
            </p>

            <div className="mt-9">
              <ProgrammeCard
                programme={weeklyPilates}
                showLink={false}
              />
            </div>

            <Link href="/schedule" className="ora-text-link mt-7">
              {t("viewFullProgramme")}
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