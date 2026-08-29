import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const membershipFocus = [
  ["Train", "Fitness and performance."],
  ["Move", "Pilates, Yoga and Studio."],
  ["Belong", "Community and events."],
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
            Make ORA part of your routine.
          </h2>
          <p className="mt-7 max-w-2xl text-base leading-7 text-(--ora-text-secondary)">
            Whether your focus is training, movement, recovery or a more
            balanced routine, ORA brings different experiences together in
            one place.
          </p>
          <Link href="/memberships" className="ora-button ora-button-primary mt-8">
            Explore memberships
            <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
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
