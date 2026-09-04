import Link from "next/link";
import { ArrowDown } from "lucide-react";

import ExperienceMedia from "@/component/shared/experience-media";

export default function StudioHero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-(--ora-ink) text-white [--experience-intro-duration:420ms]">
      <ExperienceMedia
        kind="video"
        label="STUDIO VIDEO"
        src="/video/studio.MP4"
        tone="pink"
        className="absolute inset-3 top-20 min-h-[calc(100dvh-6rem)] rounded-(--ora-radius-media) md:inset-5 md:top-22"
        desktopPosition="58% center"
        mobilePosition="center 42%"
        overlay="strong"
        preload="metadata"
        layout="absolute"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-5 h-28 bg-linear-to-b from-(--ora-cream)/80 via-(--ora-cream)/20 to-transparent"
      />

      <div className="ora-container relative z-10 flex min-h-dvh items-end pb-12 pt-32 md:pb-16 lg:pb-20">
        <div className="ora-experience-intro max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.12em] text-white/88">
            ORA Studio, Douala
          </p>

          <h1 className="font-display mt-5 text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.055em]">
            Move together.
          </h1>

          <p className="mt-7 max-w-lg text-[0.9375rem] leading-7 text-white/88 md:text-base">
            Guided group sessions built around shared energy, variety and
            progress.
          </p>

          <Link href="#studio" className="ora-button ora-button-light mt-8">
            Explore Studio
            <ArrowDown size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}