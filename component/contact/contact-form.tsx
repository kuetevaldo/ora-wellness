import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
  Check,
  Phone,
} from "lucide-react";

import { oraBookingPhone } from "@/lib/contact";

const stepConfig = [
  {
    number: "01",
    key: "choose" as const,
  },
  {
    number: "02",
    key: "plan" as const,
  },
  {
    number: "03",
    key: "confirm" as const,
  },
];

type StepKey = (typeof stepConfig)[number]["key"];

export default async function ContactForm() {
  const t = await getTranslations("Contact");

  return (
    <section
      id="booking"
      className="scroll-mt-24 bg-(--ora-sage-light) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              {t("formEyebrow")}
            </p>

            <h2 className="font-display mt-4 max-w-lg whitespace-pre-line text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {t("formHeading")}
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-(--ora-text-secondary)">
              {t("formBody")}
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <div className="rounded-(--ora-radius-panel) bg-white p-6 sm:p-8 md:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-(--ora-text-secondary)">
                {t("howItWorks")}
              </p>

              <div className="mt-7 border-t border-(--ora-burgundy-dark)/15">
                {stepConfig.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-4 border-b border-(--ora-burgundy-dark)/15 py-6 sm:grid-cols-[3rem_1fr]"
                  >
                    <span className="text-xs font-semibold tracking-[0.14em] text-(--ora-burgundy)">
                      {step.number}
                    </span>

                    <div>
                      <h3 className="font-display text-2xl tracking-[-0.03em]">
                        {t(`steps.${step.key}.title` as `steps.${StepKey}.title`)}
                      </h3>

                      <p className="mt-2 max-w-md text-sm leading-6 text-(--ora-text-secondary)">
                        {t(`steps.${step.key}.copy` as `steps.${StepKey}.copy`)}
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
                  {t("callOra")}
                </a>

                <Link
                  href="/schedule"
                  className="ora-button ora-button-secondary"
                >
                  {t("viewProgramme")}

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

                {t("confirmedNotice")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}