import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function ScheduleCTA() {
  return (
    <section className="bg-(--ora-sage) text-(--ora-burgundy-dark)">
      <div className="ora-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy-dark)/60">
              Need help?
            </p>

            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Find the session
              <br />
              that fits your day.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-6 text-(--ora-burgundy-dark)/65">
              Contact the ORA team for current availability and class
              information.
            </p>

            <Link
              href={bookingHref}
              className="ora-button ora-button-primary mt-7 inline-flex"
            >
              Contact ORA

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