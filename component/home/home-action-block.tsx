import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function HomeActionBlock() {
  return (
    <section
      aria-labelledby="action-heading"
      className="bg-(--ora-burgundy-dark) text-white"
    >
      <div className="ora-container py-16 md:py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-8 border-b border-white/18 pb-8 md:pb-12">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-(--ora-pink-light)">
              Begin at ORA
            </p>
            <h2
              id="action-heading"
              className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white"
            >
              Ready to experience ORA?
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed text-white/80 max-w-lg">
              Check weekly class and court times, or get in touch with our team in Douala.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              href="/schedule"
              className="ora-button ora-button-light"
            >
              View schedule
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <Link
              href="/contact"
              className="ora-button ora-button-outline-light"
            >
              Contact ORA
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-white/65">
          <p>Open daily · 6:00 AM – 10:00 PM · Hydrocarbures, Douala</p>
          <Link
            href={bookingHref}
            className="ora-text-link text-(--ora-pink-light) hover:text-white"
          >
            Direct booking enquiry
            <ArrowUpRight size={14} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
