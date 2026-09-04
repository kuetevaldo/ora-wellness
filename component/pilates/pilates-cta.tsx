import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function PilatesCTA() {
  return (
    <section className="bg-(--ora-burgundy) text-white">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink-light)">
              ORA Pilates
            </p>

            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Find your rhythm.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-md text-[0.9375rem] leading-7 text-white/80">
              Contact ORA to learn more about Pilates sessions and current
              availability.
            </p>

            <Link
              href={bookingHref}
              className="ora-button ora-button-light mt-7"
            >
              Plan your session
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 border-t border-white/18 pt-8 md:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink-light)">
            Next at ORA
          </p>

          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-3xl tracking-[-0.03em] text-white sm:text-4xl">
                ORA Yoga
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                Continue with breath, mobility and restorative movement.
              </p>
            </div>

            <Link
              href="/experiences/yoga"
              className="ora-button ora-button-outline-light shrink-0"
            >
              Explore Yoga
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