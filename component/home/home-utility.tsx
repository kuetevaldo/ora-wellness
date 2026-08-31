import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

const utilityItems = [
  {
    label: "Open daily",
    value: "6:00 AM - 10:00 PM",
  },
  {
    label: "All in one place",
    value: "Six ORA experiences",
  },
  {
    label: "Find us",
    value: "Hydrocarbures, Douala",
  },
];

export default function HomeUtility() {
  return (
    <section aria-label="Visit information" className="border-y border-(--ora-border) bg-(--ora-surface-raised)">
      <div className="ora-container grid sm:grid-cols-2 lg:grid-cols-4">
        {utilityItems.map((item) => (
          <div
            key={item.label}
            className="flex min-h-24 flex-col justify-center border-b border-(--ora-border) py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:pr-6 sm:last:border-r-0 sm:last:pr-0"
          >
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              {item.label}
            </p>
            <p className="mt-1 text-sm text-(--ora-text-secondary)">
              {item.value}
            </p>
          </div>
        ))}

        <div className="flex min-h-24 items-center py-5 lg:pl-6">
          <Link href={bookingHref} className="ora-text-link">
            Book your first visit
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
