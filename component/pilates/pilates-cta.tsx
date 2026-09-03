import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function PilatesCTA() {
  return (
    <section className="bg-(--ora-burgundy) text-white">
      <div className="ora-container grid gap-8 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-white/82">Start at ORA</p>
          <h2 className="font-display mt-5 text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Find your rhythm.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="max-w-md text-base leading-7 text-white/82">
            Contact ORA to learn more about Pilates sessions, availability and the
            best place to begin.
          </p>
          <Link href={bookingHref} className="ora-button ora-button-light mt-7">
            Book a Pilates session
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
                ORA Yoga
              </h3>
              <p className="mt-1 text-sm text-white/75">
                Complement your core training with intentional breath and restorative flows.
              </p>
            </div>
            <Link href="/experiences/yoga" className="ora-button ora-button-outline-light shrink-0">
              Explore Yoga
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
