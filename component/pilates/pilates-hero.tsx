import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import ExperienceMedia from "@/component/shared/experience-media";

export default function PilatesHero() {
  return (
    <section className="min-h-[calc(100svh-4.5rem)] overflow-hidden bg-(--ora-cream) pt-24 text-(--ora-burgundy-dark) md:pt-28">
      <div className="ora-container grid grid-cols-1 gap-y-8 lg:grid-cols-12 lg:gap-x-8">
        <div className="ora-experience-intro lg:col-span-7">
          <p className="text-sm font-medium text-(--ora-text-secondary)">
            ORA Pilates, Douala
          </p>
          <h1 className="font-display mt-4 max-w-3xl text-[clamp(3.6rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.055em]">
            Move with intention.
          </h1>
        </div>

        <div className="ora-experience-intro-delayed flex items-end lg:col-span-4 lg:col-start-9 lg:pb-4">
          <div>
            <p className="max-w-md text-base leading-7 text-(--ora-text-secondary) sm:text-lg">
              Reformer-led movement for greater control, balance and strength.
            </p>
            <Link
              href="#pilates"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-(--ora-burgundy) underline decoration-(--ora-pink) decoration-2 underline-offset-8"
            >
              Explore Pilates
              <ArrowDownRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative z-10 -mb-14 mt-1 lg:col-span-10 lg:col-start-3 lg:-mb-20 lg:mt-2">
          <ExperienceMedia
            kind="video"
            label="PILATES VIDEO"
            src="/video/pilates.MP4"
            poster="/images/IMG_E5270.JPG"
            priority
            tone="pink"
            className="h-60 rounded-t-[2rem] sm:h-72 md:h-80 lg:h-[22rem]"
            desktopPosition="center 46%"
            mobilePosition="center 42%"
            desktopFocus={{ x: "67%", y: "40%" }}
            mobileFocus={{ x: "50%", y: "38%" }}
            overlay="soft"
            preload="metadata"
            sizes="(max-width: 1024px) 100vw, 84vw"
            labelPosition="right"
          />
        </div>
      </div>
    </section>
  );
}
