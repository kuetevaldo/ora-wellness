import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Phone,
} from "lucide-react";

import { oraBookingPhone } from "@/lib/contact";

const steps = [
  {
    number: "01",
    title: "Choose",
    copy: "Tell ORA which experience you are interested in.",
  },
  {
    number: "02",
    title: "Plan",
    copy: "Share the day or time that works best for you.",
  },
  {
    number: "03",
    title: "Confirm",
    copy: "The ORA team confirms current availability.",
  },
];

export default function ContactForm() {
  return (
    <section
      id="booking"
      className="scroll-mt-24 bg-(--ora-sage-light) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Plan your visit
            </p>

            <h2 className="font-display mt-4 max-w-lg text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Keep it
              <br />
              simple.
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-(--ora-text-secondary)">
              You do not need to know the exact programme before contacting ORA.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-(--ora-radius-panel) bg-white p-6 sm:p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--ora-text-secondary)">
                How it works
              </p>

              <div className="mt-7 border-t border-(--ora-burgundy-dark)/15">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-4 border-b border-(--ora-burgundy-dark)/15 py-6 sm:grid-cols-[3rem_1fr]"
                  >
                    <span className="text-xs font-semibold tracking-[0.14em] text-(--ora-burgundy)">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-display text-2xl tracking-[-0.03em]">
                        {step.title}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-(--ora-text-secondary)">
                        {step.copy}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href={oraBookingPhone.href}
                  className="ora-button ora-button-primary"
                >
                  <Phone
                    size={16}
                    strokeWidth={1.6}
                    aria-hidden="true"
                  />
                  Call ORA
                </a>

                <Link
                  href="/schedule"
                  className="ora-button ora-button-secondary"
                >
                  View programme

                  <ArrowUpRight
                    size={15}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                </Link>
              </div>

              <p className="mt-7 flex items-start gap-2 text-xs leading-5 text-(--ora-text-secondary)">
                <Check
                  size={15}
                  strokeWidth={1.8}
                  className="mt-0.5 shrink-0 text-(--ora-burgundy)"
                  aria-hidden="true"
                />

                Current availability is confirmed directly by the ORA team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}