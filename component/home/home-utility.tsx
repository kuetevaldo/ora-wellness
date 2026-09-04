import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-regular-svg-icons";

import { bookingHref } from "@/lib/contact";
import LiveClockIcon from "@/component/ui/live-clock-icon";
import LiveOpeningHours from "@/component/ui/live-opening-hours";

const googleMapsUrl =
  "https://maps.app.goo.gl/N1TAxq6LhVsQkhHC8";

const practicalItems = [
  {
    type: "clock",
    label: "Opening hours",
    value: undefined,
    href: undefined,
    external: false,
    icon: undefined,
    action: undefined,
  },
  {
    type: "location",
    label: "Find ORA",
    value: "Hydrocarbures, Douala",
    href: googleMapsUrl,
    external: true,
    icon: faLocationDot,
    action: "Directions →",
  },
  {
    type: "schedule",
    label: "Programme",
    value: "Classes & court times",
    href: "/schedule",
    external: false,
    icon: faCalendarDays,
    action: "View programme →",
  },
  {
    type: "visit",
    label: "Plan your visit",
    value: "Contact ORA",
    href: bookingHref,
    external: false,
    icon: faCalendarCheck,
    action: "Contact ORA →",
  },
];

export default function HomeUtility() {
  return (
    <section
      aria-label="ORA practical information"
      className="relative z-20 bg-white"
    >
      <div className="ora-container">
        <div className="relative -mt-6 overflow-hidden rounded-(--ora-radius-media) border border-black/5 bg-(--ora-warm-white) shadow-[0_20px_60px_rgba(48,42,43,0.10)] sm:-mt-8 lg:-mt-10">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4">
            {practicalItems.map((item, index) => {
              const content = (
                <div className="group/item flex min-h-36 items-start gap-4 p-5 sm:p-6 lg:min-h-40 lg:p-7">
                  {/* Icon */}
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-(--ora-pink-light) text-(--ora-burgundy)">
  {item.type === "clock" ? (
    <LiveClockIcon />
  ) : (
    item.icon && (
      <FontAwesomeIcon
        icon={item.icon}
        className="h-4.25 w-4.25"
        aria-hidden="true"
      />
    )
  )}
</div>

                  {/* Text */}
                  <div className="min-w-0 pt-0.5">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.17em] text-(--ora-burgundy)/70">
                      {item.label}
                    </p>

                   {item.type === "clock" ? (
  <LiveOpeningHours />
) : (
  <p className="mt-2 max-w-48 text-sm font-medium leading-6 text-(--ora-burgundy-dark)">
    {item.value}
  </p>
)}

                    {item.href && (
                      <span className="mt-3 inline-block text-xs font-semibold text-(--ora-burgundy) transition-transform duration-200 group-hover/item:translate-x-1 motion-reduce:transition-none">
                        {item.action}
                      </span>
                    )}
                  </div>
                </div>
              );

              const borderClass =
                index < practicalItems.length - 1
                  ? "border-b border-(--ora-burgundy-dark)/10 sm:[&:nth-child(odd)]:border-r lg:border-b-0 lg:border-r"
                  : "";

              if (!item.href) {
                return (
                  <div key={item.label} className={borderClass}>
                    {content}
                  </div>
                );
              }

              if (item.external) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${item.label}: ${item.value}`}
                    className={`${borderClass} group block outline-none transition-colors duration-200 hover:bg-(--ora-pink-light)/30 focus-visible:bg-(--ora-pink-light)/30`}
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={`${item.label}: ${item.value}`}
                  className={`${borderClass} group block outline-none transition-colors duration-200 hover:bg-(--ora-pink-light)/30 focus-visible:bg-(--ora-pink-light)/30`}
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}