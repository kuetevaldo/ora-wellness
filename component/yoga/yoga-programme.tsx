import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProgrammeCard from "@/component/shared/programme-card";
import { yogaProgrammes } from "@/lib/programmes";

export default function YogaProgramme() {
  const weeklyYoga = yogaProgrammes[0];

  return (
    <section
      id="yoga"
      className="scroll-mt-18 bg-(--ora-sage-light) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start lg:gap-8">
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-(--ora-radius-media) bg-[#dfc3c7]">
              <Image
                src="/images/hero-image/yoga-image.JPG"
                alt="ORA Yoga class artwork featuring a guided yoga pose"
                width={1170}
                height={2532}
                sizes="(max-width: 1023px) calc(100vw - 2.5rem), 40vw"
                className="h-auto w-full"
              />
            </div>
          </div>

          <div className="lg:col-span-7 lg:pl-6">
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              Meet your instructor
            </p>
            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              A warmer way to find your balance.
            </h2>
            <div className="mt-6 grid gap-5 text-base leading-7 text-(--ora-text-secondary) sm:grid-cols-2">
              <p>
                Despina brings experience across Hatha, Vinyasa, Yin and
                Restorative Yoga, with sessions designed for different ages and
                levels.
              </p>
              <p>
                Her practice combines alignment, breathwork and relaxation in
                an approachable space for calm, strength and connection.
              </p>
            </div>

            <div className="mt-10">
              <ProgrammeCard programme={weeklyYoga} showLink={false} />
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
