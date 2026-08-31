import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import ExperienceMedia from "@/component/shared/experience-media";

export default function CafeHero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-(--ora-ink) text-white [--experience-intro-duration:420ms]">
      <ExperienceMedia
        kind="video"
        label="CAFÉ VIDEO"
        src="/video/ora-cafe2.MP4"
        tone="burgundy"
        className="absolute inset-3 top-20 min-h-[calc(100dvh-6rem)] rounded-(--ora-radius-media) md:inset-5 md:top-22"
        desktopPosition="center 56%"
        mobilePosition="58% center"
        overlay="strong"
        preload="metadata"
        layout="absolute"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-28 bg-linear-to-b from-(--ora-cream)/80 via-(--ora-cream)/20 to-transparent"
      />

      <div className="ora-container relative z-10 flex min-h-dvh items-end pb-12 pt-32 md:pb-16 lg:pb-20">
        <div className="ora-experience-intro max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.12em] text-white/88">
            ORA Café, Douala
          </p>
          <h1 className="font-display mt-5 text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.055em]">
            A refined pause in your day.
          </h1>
          <p className="mt-7 max-w-xl text-[0.9375rem] leading-7 text-white/88 md:text-base">
            Breakfast, specialty coffee, nourishing meals, fresh juices and
            protein shakes, all part of the ORA experience.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#menu" className="ora-button ora-button-light">
              Explore the menu
            </Link>
            <Link href="/contact" className="ora-button ora-button-outline-light">
              Visit ORA
              <ArrowDownRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
