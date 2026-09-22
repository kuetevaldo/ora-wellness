import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default async function ScheduleCTA() {
  const t = await getTranslations("SchedulePage");

  return (
    <section className="bg-(--ora-sage) text-(--ora-burgundy-dark)">
      <div className="ora-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy-dark)/60">
              {t("ctaEyebrow")}
            </p>

            <h2 className="font-display mt-5 max-w-4xl whitespace-pre-line text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {t("ctaHeading")}
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-6 text-(--ora-burgundy-dark)/65">
              {t("ctaBody")}
            </p>

            <Link
              href={bookingHref}
              className="ora-button ora-button-primary mt-7 inline-flex"
            >
              {t("contactOra")}

              <ArrowUpRight
                size={15}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}