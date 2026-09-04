import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function StudioCTA() {
  return (
    <section className="bg-(--ora-burgundy-dark) text-white">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink-light)">
              ORA Studio
            </p>

            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Join the energy.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-md text-[0.9375rem] leading-7 text-white/75">
              Contact ORA to learn more about Studio classes and the Dance
              Academy.
            </p>

            <Link
              href={bookingHref}
              className="ora-button ora-button-light mt-7"
            >
              Explore Studio sessions
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/18 pt-8 md:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/55">
            Next at ORA
          </p>

          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">
                ORA Fitness
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                Continue with strength, cardio and individual conditioning.
              </p>
            </div>

            <Link
              href="/experiences/gym"
              className="ora-button ora-button-outline-light shrink-0"
            >
              Explore Fitness
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