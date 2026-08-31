import Link from "next/link";
import { ArrowUpRight, Check, Phone } from "lucide-react";

import { oraBookingPhone } from "@/lib/contact";

const bookingSteps = [
  "Choose the experience you want to try.",
  "Share your preferred day and time.",
  "Let the ORA team confirm availability.",
];

export default function ContactForm() {
  return (
    <section
      id="booking"
      className="scroll-mt-18 bg-(--ora-cream) px-6 py-24 text-(--ora-burgundy-dark) md:px-10 md:py-32 lg:px-14"
    >
      <div className="mx-auto max-w-375">
        <div className="grid gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              Book your visit
            </p>
            <h2 className="font-display mt-5 max-w-md text-5xl font-normal leading-[0.96] tracking-[-0.04em] sm:text-6xl">
              Make your first step simple.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-(--ora-text-secondary)">
              You do not need to know the perfect programme before you call.
              Tell the team what you want from your visit and they will guide
              you to the right ORA experience.
            </p>
          </div>

          <div className="rounded-(--ora-radius-panel) border border-(--ora-border) bg-(--ora-surface-raised) p-6 sm:p-9 md:p-11">
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              Fastest way to confirm a place
            </p>
            <h3 className="font-display mt-4 max-w-2xl text-4xl leading-[1] tracking-[-0.04em] sm:text-5xl">
              Speak with ORA and plan the right visit.
            </h3>

            <ol className="mt-8 grid gap-4">
              {bookingSteps.map((step, index) => (
                <li key={step} className="flex items-start gap-4">
                  <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-(--ora-sage-light) text-xs font-semibold text-(--ora-burgundy-dark)">
                    {index + 1}
                  </span>
                  <span className="pt-1 text-sm leading-6 text-(--ora-text-secondary)">
                    {step}
                  </span>
                </li>
              ))}
            </ol>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={oraBookingPhone.href}
                className="ora-button ora-button-primary"
              >
                <Phone size={16} strokeWidth={1.6} aria-hidden="true" />
                Call {oraBookingPhone.display}
              </a>
              <Link href="/schedule" className="ora-button ora-button-secondary">
                Check class times
                <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>

            <p className="mt-7 flex items-start gap-2 text-xs leading-5 text-(--ora-text-secondary)">
              <Check
                size={15}
                strokeWidth={1.8}
                className="mt-0.5 shrink-0 text-(--ora-burgundy)"
                aria-hidden="true"
              />
              The ORA team confirms current availability before you visit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
