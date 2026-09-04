import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PadelCompetition() {
  return (
    <section className="bg-white text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Competition
            </p>

            <h2 className="font-display mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Play for more.
            </h2>

            <p className="mt-6 max-w-md text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
              From social matches to organised competition, every match brings
              another level of energy to the court.
            </p>

            <Link href="/schedule" className="ora-text-link mt-7">
              View the schedule
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="relative min-h-120 overflow-hidden rounded-(--ora-radius-media) sm:min-h-152 lg:col-span-7 lg:min-h-176">
            <Image
              src="/images/section-image/tournament-women.JPG"
              alt="ORA Padel tournament"
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