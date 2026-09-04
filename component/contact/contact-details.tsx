import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import LiveClockIcon from "@/component/ui/live-clock-icon";
import LiveOpeningHours from "@/component/ui/live-opening-hours";
import { oraBookingPhone } from "@/lib/contact";

const mapHref =
  "https://maps.app.goo.gl/N1TAxq6LhVsQkhHC8";

const instagramHref =
  "https://www.instagram.com/ora.cameroon?igsi=c2kxbThieWxqYWI4";

export default function ContactDetails() {
  return (
    <section
      id="contact-details"
      className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-8 border-t border-(--ora-burgundy-dark)/15 pt-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Visit & contact
            </p>

            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Everything you
              <br />
              need to reach ORA.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-sm leading-6 text-(--ora-text-secondary)">
              Find ORA, check opening hours or speak directly with the team.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {/* Location */}
          <a
            href={mapHref}
            target="_blank"
            rel="noreferrer"
            className="group rounded-(--ora-radius-panel) bg-(--ora-sage-light) p-6 transition-transform duration-180 hover:-translate-y-1 motion-reduce:transition-none sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="flex size-11 items-center justify-center rounded-full bg-white/60 text-(--ora-burgundy)">
                <MapPin size={18} strokeWidth={1.5} aria-hidden="true" />
              </span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-(--ora-burgundy)"
              />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-(--ora-text-secondary)">
              Location
            </p>

            <h3 className="font-display mt-3 text-3xl tracking-[-0.035em]">
              Hydrocarbures
              <br />
              Douala, Cameroon
            </h3>

            <p className="mt-5 text-sm font-semibold text-(--ora-burgundy)">
              Get directions
            </p>
          </a>

          {/* Hours */}
          <div className="rounded-(--ora-radius-panel) bg-(--ora-cream) p-6 sm:p-8">
            <div className="flex size-11 items-center justify-center rounded-full bg-white text-(--ora-burgundy)">
              <LiveClockIcon />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-(--ora-text-secondary)">
              Opening hours
            </p>

            <div className="mt-3">
              <LiveOpeningHours />
            </div>
          </div>

          {/* Phone */}
          <a
            href={oraBookingPhone.href}
            className="group rounded-(--ora-radius-panel) bg-(--ora-pink-light) p-6 transition-transform duration-180 hover:-translate-y-1 motion-reduce:transition-none sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="flex size-11 items-center justify-center rounded-full bg-white/60 text-(--ora-burgundy)">
                <Phone size={18} strokeWidth={1.5} aria-hidden="true" />
              </span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-(--ora-burgundy)"
              />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-(--ora-text-secondary)">
              Call ORA
            </p>

            <h3 className="font-display mt-3 text-3xl tracking-[-0.035em]">
              {oraBookingPhone.display}
            </h3>

            <p className="mt-5 text-sm text-(--ora-text-secondary)">
              Visits, classes, Café, Padel and membership enquiries.
            </p>
          </a>

          {/* Email */}
          <a
            href="mailto:info@oracomplex.com"
            className="group rounded-(--ora-radius-panel) bg-(--ora-burgundy-dark) p-6 text-white transition-transform duration-180 hover:-translate-y-1 motion-reduce:transition-none sm:p-8"
          >
            <div className="flex items-start justify-between gap-6">
              <span className="flex size-11 items-center justify-center rounded-full bg-white/10">
                <Mail size={18} strokeWidth={1.5} aria-hidden="true" />
              </span>

              <ArrowUpRight
                size={18}
                strokeWidth={1.5}
                aria-hidden="true"
                className="text-white/70"
              />
            </div>

            <p className="mt-8 text-xs font-semibold uppercase tracking-[0.16em] text-white/55">
              Email
            </p>

            <h3 className="font-display mt-3 break-all text-2xl tracking-[-0.03em] sm:text-3xl">
              info@oracomplex.com
            </h3>

            <p className="mt-5 text-sm text-white/65">
              General enquiries
            </p>
          </a>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-(--ora-burgundy-dark)/15 pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--ora-text-secondary)">
            Follow ORA
          </p>

          <a
            href={instagramHref}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-semibold text-(--ora-burgundy) transition-opacity hover:opacity-65"
          >
            Instagram ↗
          </a>
        </div>
      </div>
    </section>
  );
}