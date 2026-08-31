import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

const membershipFocus = [
  ["Try", "Start with one experience."],
  ["Feel", "Find the routine that suits you."],
  ["Return", "Turn a good visit into a habit."],
];

export default function HomeMembership() {
  return (
    <section className="ora-section bg-(--ora-sage-light) text-(--ora-burgundy-dark)">
      <div className="ora-container">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold text-(--ora-burgundy)">
            Membership
          </p>
          <h2 className="font-display mt-4 text-[clamp(3.5rem,7vw,7rem)] font-normal leading-[0.88] tracking-[-0.05em]">
            One visit can become your best routine.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-(--ora-text-secondary)">
            Begin with the experience that fits today. Once you know the space,
            the people and the feeling, choose the membership direction that
            makes ORA easier to return to.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href={bookingHref} className="ora-button ora-button-primary">
              Start with a visit
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <Link href="/memberships" className="ora-button ora-button-secondary">
              Compare memberships
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-8 border-t border-(--ora-border-strong) pt-8 sm:grid-cols-[1fr_0.8fr_1.2fr]">
          {membershipFocus.map(([title, description]) => (
            <div key={title}>
              <h3 className="font-display text-3xl font-normal">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
