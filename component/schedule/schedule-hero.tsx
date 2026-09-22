import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { ArrowDown } from "lucide-react";

export default async function ScheduleHero() {
  const t = await getTranslations("SchedulePage");

  return (
    <section className="bg-(--ora-cream) pt-28 text-(--ora-burgundy-dark) md:pt-32">
      <div className="ora-container pb-16 md:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          {/* Content */}
          <div className="lg:col-span-7 lg:pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              {t("heroEyebrow")}
            </p>

            <h1 className="font-display mt-5 max-w-4xl whitespace-pre-line text-[clamp(4rem,7vw,7rem)] font-normal leading-[0.88] tracking-[-0.055em]">
              {t("heroHeading")}
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-(--ora-text-secondary) sm:text-base">
              {t("heroBody")}
            </p>

            <Link
              href="#programme-list"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-(--ora-burgundy-dark)"
            >
              {t("exploreProgramme")}

              <span className="flex size-9 items-center justify-center rounded-full border border-(--ora-burgundy-dark)/20 transition-[transform,background-color,color] duration-200 group-hover:translate-y-1 group-hover:bg-(--ora-burgundy) group-hover:text-white motion-reduce:transition-none">
                <ArrowDown
                  size={14}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>

          {/* Image */}
          <div className="lg:col-span-5">
            <div className="relative min-h-88 overflow-hidden rounded-(--ora-radius-media) sm:min-h-112 lg:min-h-136">
              <Image
                src="/images/section-image/studio-workout.JPG"
                alt="Group movement session at ORA"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent"
              />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  Move · Play · Connect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}