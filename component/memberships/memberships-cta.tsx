import Link from "next/link";

import { bookingHref } from "@/lib/contact";

export default function MembershipsCTA() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy) px-6 py-24 text-(--ora-cream) md:px-10 md:py-32 lg:px-14">
      <div className="relative z-10 mx-auto max-w-375">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-(--ora-pink-light)">
          Join ORA
        </p>

        <h2 className="mt-7 max-w-4xl text-5xl font-normal leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
          Start with
          <br />
          a conversation.
        </h2>

        <p className="mt-8 max-w-xl text-[15px] leading-7 text-white/82">
          Contact the ORA team to learn about current membership plans,
          access and availability.
        </p>

        <Link
          href={bookingHref}
          className="mt-10 inline-flex rounded-full bg-(--ora-cream) px-7 py-3.5 text-[13px] font-medium text-(--ora-burgundy-dark) transition hover:bg-(--ora-pink-light)"
        >
          Ask about memberships
        </Link>
      </div>
    </section>
  );
}
