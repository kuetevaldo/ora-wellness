import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function CafeCraft() {
  const t = await getTranslations("Cafe");

  return (
    <section className="bg-white text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="relative min-h-136 overflow-hidden rounded-(--ora-radius-media) lg:col-span-7">
            <Image
              src="/images/section-image/cafe-section.JPG"
              alt={t("craftImageAlt")}
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink)">
              {t("craftEyebrow")}
            </p>

            <h2 className="font-display mt-5 text-4xl leading-none tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              {t("craftHeading")}
            </h2>

            <p className="mt-6 max-w-sm text-sm leading-7 text-(--ora-text-secondary)">
              {t("craftBody")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}