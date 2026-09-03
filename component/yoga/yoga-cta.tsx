import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function YogaCTA() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy) text-white">
      <div className="ora-container relative z-10 py-16 md:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/20 pb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-(--ora-pink-light)">
              Start your practice
            </p>
            <h2 className="font-display mt-3 max-w-2xl text-4xl leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
              Make space for yourself.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-lg">
              Reserve your mat with the ORA team and join an upcoming flow.
            </p>
          </div>
          <Link href={bookingHref} className="ora-button ora-button-light shrink-0">
            Book a Yoga class
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-12">
          <p className="text-xs uppercase tracking-wider text-white/60">
            Next experience
          </p>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl text-white">
                ORA Pilates
              </h3>
              <p className="mt-1 text-sm text-white/75">
                Reformer and mat movement focused on core strength, control and alignment.
              </p>
            </div>
            <Link href="/experiences/pilates" className="ora-button ora-button-outline-light shrink-0">
              Explore Pilates
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
