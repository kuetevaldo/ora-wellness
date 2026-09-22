import { getTranslations } from "next-intl/server";

const qualityKeys = [
  { number: "01", key: "control" as const },
  { number: "02", key: "strength" as const },
  { number: "03", key: "mobility" as const },
];

export default async function PilatesExperience() {
  const t = await getTranslations("Pilates");

  return (
    <section className="bg-(--ora-pink-light) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-6 border-b border-(--ora-burgundy-dark)/20 pb-10 lg:grid-cols-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy-dark)/65 lg:col-span-3">
            {t("experienceEyebrow")}
          </p>

          <h2 className="font-display max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:col-span-8">
            {t("experienceHeading")}
          </h2>
        </div>

        <div className="mt-10 grid border-t border-(--ora-burgundy-dark)/20 md:grid-cols-3">
          {qualityKeys.map((quality) => (
            <article
              key={quality.key}
              className="border-b border-(--ora-burgundy-dark)/20 py-8 md:min-h-72 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-xs text-(--ora-burgundy-dark)/50">
                {quality.number}
              </span>

              <h3 className="font-display mt-8 text-3xl tracking-[-0.03em] sm:text-4xl">
                {t(`qualities.${quality.key}.title`)}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-(--ora-burgundy-dark)/75">
                {t(`qualities.${quality.key}.copy`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}