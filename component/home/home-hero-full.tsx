import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function HomeHero() {
  return (
    <section className="ora-home-hero relative isolate min-h-dvh overflow-hidden bg-(--ora-ink) text-white lg:aspect-video lg:min-h-0">
      <Image
        src="/images/hero-image/ora-building-hero.jpg"
        alt="ORA Wellness building in Douala"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover object-[58%_center] sm:object-[56%_center] lg:object-center"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(28,22,24,0.78)_0%,rgba(28,22,24,0.48)_42%,rgba(28,22,24,0.08)_72%),linear-gradient(0deg,rgba(28,22,24,0.58)_0%,transparent_48%)]"
      />

      <div className="ora-home-hero__shell ora-container relative z-20 flex min-h-dvh items-end pb-12 pt-28 sm:pb-16 lg:min-h-0 lg:h-full lg:pb-[8%]">
        <div className="relative z-10 max-w-4xl">
          <p className="ora-page-intro text-xs font-semibold tracking-widest text-white/88">
            ORA Wellness, Douala
          </p>

          <h1 className="ora-home-hero__heading font-display ora-page-intro ora-page-intro-delay-1 mt-5 text-[clamp(3.2rem,10.5vw,7.8rem)] leading-[0.87] tracking-[-0.055em] text-white sm:text-[clamp(4.5rem,8vw,7.8rem)]">
            Move. Nourish.
            <br />
            Connect.
          </h1>

          <p className="ora-home-hero__body ora-page-intro ora-page-intro-delay-2 mt-6 max-w-lg text-[0.95rem] leading-7 text-white/88 md:mt-8 md:text-base">
            Café, movement, fitness and community, brought together in one
            wellness destination.
          </p>

          <div className="ora-home-hero__actions ora-page-intro ora-page-intro-delay-2 mt-7 flex flex-wrap items-center gap-3 md:mt-9">
            <Link href="#experiences" className="ora-button ora-button-light">
              Discover ORA
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
            <Link href="/schedule" className="ora-button ora-button-outline-light">
              View schedule
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
