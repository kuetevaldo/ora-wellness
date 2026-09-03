import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function StudioCTA() {
  return (
    <section className="bg-(--ora-burgundy-dark) text-white">
      <div className="ora-container py-16 md:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/20 pb-8">
          <div>
            <h2 className="font-display max-w-2xl text-4xl leading-[0.98] tracking-tight sm:text-5xl md:text-6xl">
              Join the energy.
            </h2>
            <p className="mt-3 text-sm sm:text-base text-white/80 max-w-lg">
              Reserve your spot in group classes or enquire about the Dance Academy.
            </p>
          </div>
          <Link href={bookingHref} className="ora-button ora-button-light shrink-0">
            Reserve a Studio class
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
                ORA Fitness
              </h3>
              <p className="mt-1 text-sm text-white/75">
                Targeted strength, cardio and individual conditioning.
              </p>
            </div>
            <Link href="/experiences/gym" className="ora-button ora-button-outline-light shrink-0">
              Explore Fitness
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
