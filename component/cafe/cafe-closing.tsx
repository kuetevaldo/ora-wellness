import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function CafeClosing() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy) text-white">
      <div className="ora-container relative z-10 py-16 md:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-white/20 pb-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-(--ora-pink-light)">
              Next experience
            </p>
            <h2 className="font-display mt-3 max-w-3xl text-3xl sm:text-4xl lg:text-5xl tracking-tight">
              Pair your coffee with movement.
            </h2>
            <p className="mt-2 text-sm text-white/80 max-w-lg">
              Explore the training floor at Fitness or book a court at Padel.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 shrink-0">
            <Link href="/experiences/gym" className="ora-button ora-button-light">
              Explore Fitness
              <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
            <Link href="/experiences/padel" className="ora-button ora-button-outline-light">
              Explore Padel
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
