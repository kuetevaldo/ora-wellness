import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MediaPlaceholder from "@/component/shared/media-placeholder";

const communityItems = [
  {
    title: "Padel Events",
    description:
      "Matches, social play and community moments built around movement and competition.",
  },
  {
    title: "Wellness Sessions",
    description:
      "Movement-focused experiences designed around balance, recovery and wellbeing.",
  },
  {
    title: "ORA Community",
    description:
      "A space to connect through shared routines, movement and lifestyle experiences.",
  },
];

export default function HomeCommunity() {
  return (
    <section aria-labelledby="community-heading" className="ora-section bg-(--ora-cream) text-(--ora-burgundy-dark)">
      <div className="ora-container">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold text-(--ora-burgundy)">
            Community and events
          </p>
          <h2 id="community-heading" className="font-display mt-4 text-[clamp(3.25rem,6.5vw,6.5rem)] font-normal leading-[0.9] tracking-[-0.05em]">
            More reasons to come together.
          </h2>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.22fr_0.78fr] lg:items-start lg:gap-14">
          <MediaPlaceholder
            label="COMMUNITY PHOTOGRAPHY"
            tone="pink"
            desktopPosition="center 42%"
            mobilePosition="center 36%"
            desktopFocus={{ x: "62%", y: "34%" }}
            mobileFocus={{ x: "50%", y: "38%" }}
            overlay="soft"
            className="aspect-[4/3] md:aspect-[16/11]"
          />

          <div>
            <div className="border-t border-(--ora-border)">
              {communityItems.map((item) => (
                <article
                  key={item.title}
                  className="border-b border-(--ora-border) py-6"
                >
                  <h3 className="font-display text-2xl font-normal sm:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <Link href="/events" className="ora-text-link mt-6">
              Explore events
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
