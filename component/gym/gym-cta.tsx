import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function GymCTA() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy) text-(--ora-cream)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        
        {/* Main conversion */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink-light)">
              ORA Fitness
            </p>

            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Make training part of your routine.
            </h2>

            <p className="mt-6 max-w-lg text-[0.9375rem] leading-7 text-white/80">
              Visit ORA and discover the training experience that works for you.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 lg:col-span-4 lg:justify-end">
            <Link
              href={bookingHref}
              className="ora-button ora-button-light"
            >
              Plan your visit
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>

            <Link
              href="/memberships"
              className="ora-button ora-button-outline-light"
            >
              Explore memberships
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Next ORA experience */}
        <div className="mt-16 border-t border-white/18 pt-8 md:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink-light)">
            Next at ORA
          </p>

          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-3xl tracking-[-0.03em] text-white sm:text-4xl">
                ORA Café
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                Coffee, food and recovery after your session.
              </p>
            </div>

            <Link
              href="/cafe"
              className="ora-button ora-button-outline-light shrink-0"
            >
              View Café
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}