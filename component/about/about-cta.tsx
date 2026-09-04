import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function AboutCTA() {
  return (
    <section className="bg-(--ora-burgundy) text-(--ora-cream)">
      <div className="ora-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink-light)">
              Discover ORA
            </p>

            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Experience ORA
              <br />
              for yourself.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-6 text-white/70">
              Explore the experiences or contact the ORA team to plan your
              visit.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href={bookingHref}
                className="ora-button ora-button-light"
              >
                Plan your visit

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </Link>

              <Link
                href="/#experiences"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition-colors duration-180 hover:border-white"
              >
                Explore experiences
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}