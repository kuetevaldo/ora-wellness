import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function YogaIntro() {
  const t = await getTranslations("Yoga");

  return (
    <section
      id="yoga"
      className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              {t("introEyebrow")}
            </p>

            <h2 className="font-display mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              {t("introHeading")}
            </h2>

            <p className="mt-6 max-w-sm text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
              {t("introBody")}
            </p>
          </div>

          <div className="relative min-h-120 overflow-hidden rounded-(--ora-radius-media) sm:min-h-152 lg:col-span-7 lg:col-start-6 lg:min-h-176">
            <Image
              src="/images/hero-image/yoga2.png"
              alt="Yoga practice at ORA"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}