import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function GymCTA() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy) text-(--ora-cream)">
      <div className="ora-container ora-section relative z-10">
        <h2 className="font-display max-w-4xl text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
          Make training part of your routine.
        </h2>
        <p className="mt-7 max-w-xl text-[0.9375rem] leading-7 text-white/82">
          Visit ORA and speak with the team about the training option that fits
          your goals.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href={bookingHref} className="ora-button ora-button-light">
            Book a Fitness visit
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
          <Link href="/memberships" className="ora-button ora-button-outline-light">
            Explore memberships
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-14 border-t border-white/18 pt-8">
          <p className="text-xs uppercase tracking-wider text-(--ora-pink-light)">
            Next experience
          </p>
          <div className="mt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="font-display text-2xl text-white">
                ORA Café
              </h3>
              <p className="mt-1 text-sm text-white/80">
                Post-workout protein shakes, specialty coffee and nourishing meals.
              </p>
            </div>
            <Link href="/cafe" className="ora-button ora-button-outline-light shrink-0">
              View Café
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
