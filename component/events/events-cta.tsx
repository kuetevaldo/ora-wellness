import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

const instagramHref =
  "https://www.instagram.com/ora.cameroon?igsi=c2kxbThieWxqYWI4";

export default async function EventsCTA() {
  const t = await getTranslations("Events");

  return (
    <section className="bg-(--ora-burgundy) text-(--ora-cream)">
      <div className="ora-container py-16 md:py-20 lg:py-24">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink-light)">
              {t("ctaEyebrow")}
            </p>

            <h2 className="font-display mt-5 max-w-4xl whitespace-pre-line text-5xl leading-[0.95] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              {t("ctaHeading")}
            </h2>
          </div>

          <div className="lg:col-span-4">
            <p className="max-w-sm text-sm leading-6 text-white/70">
              {t("ctaBody")}
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="ora-button ora-button-light"
              >
                {t("followOra")}

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </a>

              <Link
                href={bookingHref}
                className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-white/25 px-6 text-sm font-semibold text-white transition-colors duration-180 hover:border-white"
              >
                {t("contactOra")}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}