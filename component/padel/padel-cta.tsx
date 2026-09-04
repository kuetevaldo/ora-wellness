import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function PadelCTA() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy-dark) text-white">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        
        {/* Main CTA */}
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              ORA Padel
            </p>

            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Ready for your next match?
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-md text-[0.9375rem] leading-7 text-white/72">
              Contact ORA for court availability and the current Padel
              programme.
            </p>

            <Link
              href={bookingHref}
              className="ora-button ora-button-light mt-7"
            >
              Plan your match
              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        {/* Café cross-sell */}
        <div className="mt-16 border-t border-white/18 pt-8 md:mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
            Next at ORA
          </p>

          <div className="mt-5 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h3 className="font-display text-3xl tracking-[-0.03em] text-white sm:text-4xl">
                ORA Café
              </h3>

              <p className="mt-2 max-w-md text-sm leading-6 text-white/75">
                Coffee, fresh drinks and food after your match.
              </p>
            </div>

            <Link
              href="/cafe"
              className="ora-button ora-button-outline-light shrink-0"
            >
              View Café
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