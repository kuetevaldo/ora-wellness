import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import ProgrammeCard from "@/component/shared/programme-card";
import { yogaProgrammes } from "@/lib/programmes";

export default function YogaProgramme() {
  const weeklyYoga = yogaProgrammes[0];

  return (
    <section className="bg-(--ora-cream) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="relative min-h-128 overflow-hidden rounded-(--ora-radius-media) sm:min-h-152 lg:col-span-6 lg:min-h-176">
            <Image
              src="/images/hero-image/yoga-image.JPG"
              alt="ORA Yoga practice"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-5 lg:col-start-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Instructor & Practice
            </p>

            <h2 className="font-display mt-5 max-w-xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              A calmer flow for mind and body.
            </h2>

            <p className="mt-6 max-w-md text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
              Hatha, Vinyasa, Yin and Restorative flows led by Despina for all
              experience levels.
            </p>

            <div className="mt-9">
              <ProgrammeCard
                programme={weeklyYoga}
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
        </div>
      </div>
    </section>
  );
}