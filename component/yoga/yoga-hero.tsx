import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import ExperienceMedia from "@/component/shared/experience-media";

export default function YogaHero() {
  return (
    <section className="relative overflow-hidden bg-(--ora-cream) pt-24 text-(--ora-burgundy-dark) md:pt-28 lg:min-h-[calc(100svh-4.5rem)]">
      <div className="ora-container relative z-10 grid gap-12 pb-20 lg:grid-cols-12 lg:items-center lg:gap-8">
        <div className="ora-experience-intro lg:col-span-5 lg:pr-8">
          <p className="text-sm font-medium text-(--ora-text-secondary)">
            ORA Yoga, Douala
          </p>
          <h1 className="font-display mt-5 text-[clamp(4rem,7.6vw,7.7rem)] leading-[0.88] tracking-[-0.055em]">
            Breathe.
            <br />
            Move.
            <br />
            Reset.
          </h1>
          <p className="mt-7 max-w-md text-base leading-7 text-(--ora-text-secondary)">
            A quieter space for movement, breath and balance, designed to help
            you reconnect with your body and your rhythm.
          </p>
          <Link
            href="#yoga"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--ora-burgundy) underline decoration-(--ora-sage) decoration-2 underline-offset-8"
          >
            Discover Yoga
            <ArrowDownRight size={17} aria-hidden="true" />
          </Link>
        </div>

        <div className="ora-experience-intro-delayed relative h-[38rem] lg:col-span-7 lg:h-[calc(100svh-10.5rem)] lg:min-h-[34rem] lg:max-h-[44rem]">
          <div className="absolute top-0 right-0 h-[31rem] w-[88%] lg:h-full lg:w-[82%]">
            <ExperienceMedia
              kind="photo"
              label="YOGA GROUP PHOTOGRAPHY"
              poster="/images/hero-image/yoga1.jpg"
              priority
              tone="sage"
              className="h-full rounded-[2rem]"
              desktopPosition="58% center"
              mobilePosition="center 38%"
              desktopFocus={{ x: "68%", y: "30%" }}
              mobileFocus={{ x: "52%", y: "32%" }}
              overlay="soft"
              labelPosition="right"
              sizes="(max-width: 1024px) 88vw, 48vw"
            />
          </div>

          <div className="absolute bottom-0 left-0 h-52 w-[47%] lg:bottom-6 lg:h-64 lg:w-[38%]">
            <ExperienceMedia
              kind="photo"
              label="YOGA ENVIRONMENT PHOTOGRAPHY"
              poster="/images/hero-image/yoga2.png"
              tone="cream"
              className="h-full rounded-[1.5rem] border border-(--ora-border-strong)"
              desktopPosition="center center"
              mobilePosition="center center"
              desktopFocus={{ x: "58%", y: "45%" }}
              mobileFocus={{ x: "50%", y: "45%" }}
              overlay="none"
              sizes="(max-width: 1024px) 47vw, 23vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
