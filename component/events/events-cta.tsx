import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

const instagramHref =
  "https://www.instagram.com/ora.cameroon?igsi=c2kxbThieWxqYWI4";

export default function EventsCTA() {
  return (
    <section className="bg-(--ora-burgundy) text-(--ora-cream)">
      <div className="ora-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink-light)">
              Stay connected
            </p>

            <h2 className="font-display mt-5 max-w-4xl text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Be part of
              <br />
              what&apos;s next.
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-6 text-white/70">
              Follow ORA or contact the team for upcoming events and community
              activities.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="ora-button ora-button-light"
              >
                Follow ORA

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </a>

              <Link
                href={bookingHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition-colors duration-180 hover:border-white"
              >
                Contact ORA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}