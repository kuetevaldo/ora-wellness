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
            <span className="text-xs font-semibold uppercase tracking-wider text-(--ora-burgundy)">
              Instructor & Practice
            </span>
            <h2 className="font-display mt-3 max-w-3xl text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              A calmer flow for mind and body.
            </h2>
            <p className="mt-4 max-w-xl text-sm sm:text-base leading-relaxed text-(--ora-text-secondary)">
              Hatha, Vinyasa, Yin and Restorative flows led by Despina for all experience levels.
            </p>

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
