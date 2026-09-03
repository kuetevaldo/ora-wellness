import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

const practicalItems = [
  {
    label: "Hours",
    value: "Daily · 6:00 AM – 10:00 PM",
    href: undefined,
  },
  {
    label: "Location",
    value: "Hydrocarbures, Douala",
    href: "/contact",
  },
  {
    label: "Schedule",
    value: "View class & court times",
    href: "/schedule",
  },
  {
    label: "Book",
    value: "Reserve your visit",
    href: bookingHref,
  },
];

export default function HomeUtility() {
  return (
    <section
      aria-label="Practical information"
      className="border-y border-(--ora-border) bg-(--ora-surface-raised)"
    >
      <div className="ora-container grid grid-cols-2 divide-y divide-(--ora-border) sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        {practicalItems.map((item) => {
          const content = (
            <div className="flex flex-col justify-center py-5 sm:px-4 lg:px-6">
              <span className="text-[11px] font-semibold tracking-wider text-(--ora-burgundy) uppercase">
                {item.label}
              </span>
              <span className="mt-1 flex items-center gap-1.5 text-sm font-medium text-(--ora-burgundy-dark)">
                {item.value}
                {item.href && (
                  <ArrowUpRight
                    size={14}
                    strokeWidth={1.5}
                    className="shrink-0 text-(--ora-burgundy)"
                    aria-hidden="true"
                  />
                )}
              </span>
            </div>
          );

          if (item.href) {
            return (
              <Link
                key={item.label}
                href={item.href}
                className="group transition-colors hover:bg-(--ora-pink-light)/30"
              >
                {content}
              </Link>
            );
          }

          return <div key={item.label}>{content}</div>;
        })}
      </div>
    </section>
  );
}
