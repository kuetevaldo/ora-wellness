import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function PadelCTA() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy-dark) text-white">
      <div className="ora-container relative z-10 grid gap-8 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-white/65">ORA Padel</p>
          <h2 className="font-display mt-5 text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Ready for your next match?
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="max-w-md text-base leading-7 text-white/72">
            Contact ORA to learn more about the Padel experience and current court
            availability.
          </p>
          <Link href={bookingHref} className="ora-button ora-button-light mt-7">
            Book your Padel visit
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="lg:col-span-12 mt-12 border-t border-white/18 pt-8">
          <p className="text-xs uppercase tracking-wider text-white/60">
            Next experience
          </p>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl text-white">
                ORA Café
              </h3>
              <p className="mt-1 text-sm text-white/75">
                Cool down with fresh juices, specialty coffee and post-match meals.
              </p>
            </div>
            <Link href="/cafe" className="ora-button ora-button-outline-light shrink-0">
              View Café
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
