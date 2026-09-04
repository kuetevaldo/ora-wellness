import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import LiveClockIcon from "@/component/ui/live-clock-icon";
import LiveOpeningHours from "@/component/ui/live-opening-hours";

const googleMapsUrl =
  "https://maps.app.goo.gl/N1TAxq6LhVsQkhHC8";

export default function HomeLocation() {
  return (
    <section
      aria-labelledby="location-heading"
      className="bg-white text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        {/* Heading */}
        <div className="mb-10 flex flex-col gap-5 border-b border-(--ora-burgundy-dark)/15 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="animate-[oraFadeUp_700ms_cubic-bezier(.23,1,.32,1)_both]">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Visit ORA
            </p>

            <h2
              id="location-heading"
              className="font-display mt-3 text-5xl leading-none tracking-[-0.045em] sm:text-6xl lg:text-7xl"
            >
              Find your way
              <br />
              to ORA.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-(--ora-text-secondary) animate-[oraFadeUp_700ms_cubic-bezier(.23,1,.32,1)_150ms_both]">
            Movement. Wellness. Café. One destination in Douala.
          </p>
        </div>

        {/* Destination image */}
        <div className="group relative min-h-144 overflow-hidden rounded-(--ora-radius-media) sm:min-h-176 lg:min-h-208">
          <Image
  src="/images/hero-image/ora-building-hero.jpg"
  alt="ORA Wellness and Café building in Douala"
  fill
  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 90vw, 1200px"
  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
/>

          {/* Image overlay */}
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-black/5"
          />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 lg:p-10">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
              {/* Main location */}
              <div className="lg:col-span-6 animate-[oraFadeUp_700ms_cubic-bezier(.23,1,.32,1)_200ms_both]">
                <div className="flex size-11 items-center justify-center rounded-full bg-white/15 backdrop-blur-md transition-transform duration-200 group-hover:-translate-y-1 motion-reduce:transition-none">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="h-4.25 w-4.25"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/65">
                  Douala, Cameroon
                </p>

                <h3 className="font-display mt-2 text-2xl leading-none tracking-[-0.04em] text-white sm:text-5xl">
                  Hydrocarbures
                </h3>

                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Get directions to ORA Wellness and Café"
                  className="group/link mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
                >
                  Get directions

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                    className="transition-transform duration-200 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
                  />
                </a>
              </div>

              {/* Information cards */}
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-6">
                {/* Live opening hours */}
                <div className="group/card rounded-2xl border border-white/15 bg-black/20 p-5 backdrop-blur-md transition-[transform,background-color] duration-200 hover:-translate-y-1 hover:bg-black/30 motion-reduce:transition-none sm:p-6 animate-[oraFadeUp_700ms_cubic-bezier(.23,1,.32,1)_300ms_both]">
                  <div className="flex size-10 items-center justify-center rounded-full bg-white/10 text-white">
                    <LiveClockIcon />
                  </div>

                  <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Opening hours
                  </p>

                 <LiveOpeningHours dark />
                </div>

                {/* Contact */}
                <div className="group/card rounded-2xl border border-white/15 bg-black/20 p-5 backdrop-blur-md transition-[transform,background-color] duration-200 hover:-translate-y-1 hover:bg-black/30 motion-reduce:transition-none sm:p-6 animate-[oraFadeUp_700ms_cubic-bezier(.23,1,.32,1)_400ms_both]">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/55">
                    Plan your visit
                  </p>

                  <p className="mt-3 max-w-xs text-sm leading-6 text-white/80">
                    Questions or enquiries before your visit?
                  </p>

                  <Link
                    href="/contact"
                    className="group/link mt-5 inline-flex items-center gap-2 text-sm font-semibold text-white transition-opacity hover:opacity-80"
                  >
                    Contact ORA

                    <ArrowUpRight
                      size={15}
                      strokeWidth={1.5}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instagram */}
        <div className="mt-6 flex items-center justify-between border-t border-(--ora-burgundy-dark)/10 pt-6 animate-[oraFadeUp_700ms_cubic-bezier(.23,1,.32,1)_500ms_both]">
          <p className="text-xs text-(--ora-text-secondary)">
            Follow life at ORA
          </p>

          <a
            href="https://www.instagram.com/ora.cameroon"
            target="_blank"
            rel="noreferrer"
            aria-label="@ora.cameroon on Instagram"
            className="group/link ora-text-link"
          >
            @ora.cameroon

            <ArrowUpRight
              size={14}
              strokeWidth={1.5}
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none"
            />
          </a>
        </div>
      </div>
    </section>
  );
}