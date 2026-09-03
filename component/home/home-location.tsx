import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function HomeLocation() {
  return (
    <section aria-labelledby="location-heading" className="ora-section bg-(--ora-pink-light) text-(--ora-burgundy-dark)">
      <div className="ora-container">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-(--ora-border-strong) pb-6">
          <div>
            <h2
              id="location-heading"
              className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight"
            >
              Visit ORA
            </h2>
            <p className="mt-2 text-sm text-(--ora-text-secondary)">
              Daily access in the heart of Douala.
            </p>
          </div>
          <Link href={bookingHref} className="ora-button ora-button-primary shrink-0">
            Book a visit
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold">Location</h3>
            <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
              Hydrocarbures
              <br />
              Douala, Cameroon
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Opening hours</h3>
            <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
              Daily
              <br />
              6:00 AM - 10:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
              Questions, bookings and enquiries.
            </p>
            <Link href={bookingHref} className="ora-text-link mt-2">
              Book your visit
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Instagram</h3>
            <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
              Classes, events and updates.
            </p>
            <a
              href="https://www.instagram.com/ora.cameroon"
              target="_blank"
              rel="noreferrer"
              aria-label="@ora.cameroon on Instagram (opens in new tab)"
              className="ora-text-link mt-2"
            >
              @ora.cameroon
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
