import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import ExperienceMedia from "@/component/shared/experience-media";

export default function PadelHero() {
  return (
    <section className="relative overflow-hidden bg-(--ora-cream) pt-24 text-(--ora-burgundy-dark) md:pt-28">
      <div className="ora-container relative z-10 pb-16 md:pb-20">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="ora-experience-intro lg:col-span-8">
            <p className="text-sm font-medium text-(--ora-text-secondary)">
              ORA Padel, Douala
            </p>
            <h1 className="font-display mt-5 max-w-5xl text-[clamp(4rem,8.2vw,8rem)] leading-[0.88] tracking-[-0.055em]">
              Play. Compete. Connect.
            </h1>
          </div>

          <div className="ora-experience-intro-delayed lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-base leading-7 text-(--ora-text-secondary)">
              A social, energetic way to move, bringing competition, community
              and fun together at ORA.
            </p>
            <Link
              href="#padel"
              className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-(--ora-burgundy) underline decoration-(--ora-pink) decoration-2 underline-offset-8"
            >
              Discover Padel
              <ArrowDownRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative mt-12 h-[43rem] md:h-[39rem] lg:mt-14">
          <div className="absolute inset-x-0 top-0 h-80 md:inset-y-0 md:left-auto md:h-auto md:w-[76%]">
            <ExperienceMedia
              kind="photo"
              label="PADEL ACTION PHOTOGRAPHY"
              tone="ink"
              className="h-full rounded-[2rem]"
              desktopPosition="62% center"
              mobilePosition="58% center"
              desktopFocus={{ x: "72%", y: "36%" }}
              mobileFocus={{ x: "55%", y: "38%" }}
              overlay="soft"
              labelPosition="right"
              sizes="(max-width: 768px) 100vw, 76vw"
            />
          </div>

          <div className="absolute bottom-0 left-0 h-64 w-[calc(50%-0.5rem)] overflow-hidden rounded-[1.5rem] bg-(--ora-pink) md:bottom-8 md:h-[19rem] md:w-[32%]">
            <Image
              src="/images/IMG_5268.JPG"
              alt="Padel racket and ball on the ORA court"
              fill
              priority
              sizes="(max-width: 768px) 50vw, 32vw"
              className="object-cover object-center"
            />
          </div>

          <div className="absolute right-0 bottom-0 h-64 w-[calc(50%-0.5rem)] overflow-hidden rounded-[1.5rem] bg-(--ora-pink) md:top-0 md:right-auto md:bottom-auto md:left-0 md:h-44 md:w-[23%]">
            <Image
              src="/images/IMG_E5235.JPG"
              alt="ORA branded balls ready for play"
              fill
              sizes="(max-width: 768px) 50vw, 23vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
