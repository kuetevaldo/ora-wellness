import Link from "next/link";
import { ArrowDownRight } from "lucide-react";

import ExperienceMedia from "@/component/shared/experience-media";

export default function CafeHero() {
  return (
    <section className="relative overflow-hidden bg-(--ora-cream) pt-24 text-(--ora-burgundy-dark) md:pt-28">
      <div className="ora-container relative z-10">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="ora-experience-intro lg:col-span-8">
            <p className="text-sm font-medium text-(--ora-text-secondary)">
              ORA Café, Douala
            </p>
            <h1 className="font-display mt-5 max-w-5xl text-[clamp(3.7rem,8vw,7.8rem)] leading-[0.9] tracking-[-0.055em]">
              A refined pause in your day.
            </h1>
          </div>

          <div className="ora-experience-intro-delayed lg:col-span-4 lg:pb-2">
            <p className="max-w-md text-base leading-7 text-(--ora-text-secondary)">
              Breakfast, specialty coffee, nourishing meals, fresh juices and
              protein shakes, all part of the ORA experience.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="#menu" className="ora-button ora-button-primary">
                Explore the menu
              </Link>
              <Link href="/contact" className="ora-button ora-button-secondary">
                Visit ORA
                <ArrowDownRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="relative z-10 -mb-20 mt-11 md:-mb-28 md:mt-14">
          <ExperienceMedia
            kind="video"
            label="CAFÉ VIDEO"
            src="/video/ora-cafe2.MP4"
            poster="/images/hero-image/ora-interior.jpg"
            priority
            tone="burgundy"
            className="h-[46svh] min-h-80 rounded-[2rem] md:min-h-96"
            desktopPosition="center 56%"
            mobilePosition="58% center"
            desktopFocus={{ x: "72%", y: "28%" }}
            mobileFocus={{ x: "55%", y: "32%" }}
            overlay="soft"
            preload="metadata"
            labelPosition="right"
          />
        </div>
      </div>
    </section>
  );
}
