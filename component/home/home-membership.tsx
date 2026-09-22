"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { ArrowUpRight } from "lucide-react";

const membershipKeys = [
  { key: "fitness" as const },
  { key: "movement" as const },
  { key: "oraExperience" as const },
];

export default function HomeMembership() {
  const t = useTranslations("Membership");

  return (
    <section
      aria-labelledby="membership-heading"
      className="ora-section bg-(--ora-sage-light) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container">
        <div className="rounded-(--ora-radius-panel) border border-(--ora-border-strong) bg-(--ora-surface) p-6 sm:p-10 lg:p-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b border-(--ora-border-strong) pb-8">
            <div className="max-w-xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-(--ora-burgundy)">
                {t("eyebrow")}
              </span>
              <h2
                id="membership-heading"
                className="font-display mt-3 text-3xl sm:text-4xl lg:text-5xl tracking-tight"
              >
                {t("heading")}
              </h2>
              <p className="mt-3 text-sm text-(--ora-text-secondary) max-w-md">
                {t("tagline")}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Link href="/memberships" className="ora-button ora-button-primary">
                {t("explore")}
                <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {membershipKeys.map((opt) => (
              <div
                key={opt.key}
                className="rounded-xl border border-(--ora-border) bg-(--ora-surface-raised) p-5 sm:p-6"
              >
                <h3 className="font-display text-2xl text-(--ora-burgundy-dark)">
                  {t(`items.${opt.key}.title`)}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-(--ora-text-secondary) leading-relaxed">
                  {t(`items.${opt.key}.detail`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
