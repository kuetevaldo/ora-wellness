import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import ExperienceMedia from "@/component/shared/experience-media";

export default function StudioHero() {
  return (
    <section className="relative overflow-hidden bg-(--ora-cream) pt-24 text-(--ora-burgundy-dark) md:pt-28 lg:min-h-[calc(100svh-4.5rem)]">
      <div className="ora-container relative z-10 grid gap-10 pb-14 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-18">
        <div className="ora-experience-intro lg:col-span-5 lg:pr-8">
          <p className="text-sm font-medium text-(--ora-text-secondary)">
            ORA Studio, Douala
          </p>
          <h1 className="font-display mt-5 text-[clamp(4rem,7.4vw,7.4rem)] leading-[0.89] tracking-[-0.055em]">
            Move together.
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-(--ora-text-secondary)">
            Group movement, shared energy and guided sessions designed to keep
            training varied, social and motivating.
          </p>
          <Link
            href="#studio"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--ora-burgundy) underline decoration-(--ora-pink) decoration-2 underline-offset-8"
          >
            Explore Studio
            <ArrowDownRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="ora-experience-intro-delayed lg:col-span-7">
          <ExperienceMedia
            kind="video"
            label="STUDIO VIDEO"
            src="/video/studio.MP4"
            poster="/images/hero-image/ora-building-hero.jpg"
            priority
            tone="pink"
            className="h-72 rounded-4xl sm:h-96 lg:h-[calc(100svh-10.5rem)] lg:min-h-124 lg:max-h-172"
            desktopPosition="58% center"
            mobilePosition="center 42%"
            desktopFocus={{ x: "70%", y: "35%" }}
            mobileFocus={{ x: "48%", y: "34%" }}
            overlay="soft"
            preload="metadata"
            sizes="(max-width: 1024px) 100vw, 58vw"
            labelPosition="right"
          />
        </div>
      </div>
    </section>
  );
}
