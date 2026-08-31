import Link from "next/link";

import { bookingHref } from "@/lib/contact";

export default function GymCTA() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy) text-(--ora-cream)">
      <div className="ora-container ora-section relative z-10">
        <h2 className="font-display max-w-4xl text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
          Make training part of your routine.
        </h2>
        <p className="mt-7 max-w-xl text-[0.9375rem] leading-7 text-white/82">
          Visit ORA and speak with the team about the training option that fits
          your goals.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href={bookingHref} className="ora-button ora-button-light">
            Book a Fitness visit
          </Link>
          <Link href="/memberships" className="ora-button ora-button-outline-light">
            Memberships
          </Link>
        </div>
      </div>
    </section>
  );
}
