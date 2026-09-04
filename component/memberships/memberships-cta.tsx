import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function MembershipsCTA() {
  return (
    <section className="bg-(--ora-burgundy) text-(--ora-cream)">
      <div className="ora-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink-light)">
              Join ORA
            </p>

            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Start with
              <br />
              a conversation.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-6 text-white/70">
              Contact the ORA team for current membership options, access and
              availability.
            </p>

            <Link
              href={bookingHref}
              className="ora-button ora-button-light mt-7 inline-flex"
            >
              Enquire about memberships

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