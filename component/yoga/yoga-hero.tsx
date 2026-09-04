import Link from "next/link";
import { ArrowDown } from "lucide-react";

import ExperienceMedia from "@/component/shared/experience-media";

export default function YogaHero() {
  return (
    <section className="relative min-h-dvh overflow-hidden bg-(--ora-ink) text-white [--experience-intro-duration:420ms]">
      <ExperienceMedia
        kind="photo"
        label="ORA Yoga practice"
        poster="/images/hero-image/yoga1.jpg"
        priority
        tone="sage"
        className="absolute inset-3 top-20 min-h-[calc(100dvh-6rem)] rounded-(--ora-radius-media) md:inset-5 md:top-22"
        desktopPosition="center center"
        mobilePosition="63% center"
        overlay="strong"
        sizes="100vw"
        layout="absolute"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-5 h-28 bg-linear-to-b from-(--ora-cream)/80 via-(--ora-cream)/20 to-transparent"
      />

      <div className="ora-container relative z-10 flex min-h-dvh items-end pb-12 pt-32 md:pb-16 lg:pb-20">
        <div className="ora-experience-intro max-w-3xl">
          <p className="text-xs font-semibold tracking-[0.12em] text-white/88">
            ORA Yoga, Douala
          </p>

          <h1 className="font-display mt-5 text-[clamp(3.5rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.055em]">
            Breathe. Move. Reset.
          </h1>

          <p className="mt-7 max-w-lg text-[0.9375rem] leading-7 text-white/88 md:text-base">
            Guided movement and breath designed to restore balance, mobility
            and calm.
          </p>

          <Link href="#yoga" className="ora-button ora-button-light mt-8">
            Discover Yoga
            <ArrowDown size={15} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}