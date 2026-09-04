import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type RelatedExperience = {
  name: string;
  href: string;
  note: string;
};

export default function RelatedExperiences({
  title,
  experiences,
  tone = "cream",
}: {
  title: string;
  experiences: [RelatedExperience, RelatedExperience];
  tone?: "cream" | "sage" | "pink";
}) {
  const toneClass = {
    cream: "bg-(--ora-cream)",
    sage: "bg-(--ora-sage-light)",
    pink: "bg-(--ora-pink-light)",
  }[tone];

  return (
    <section className={`${toneClass} text-(--ora-burgundy-dark)`}>
      <div className="ora-container py-18 md:py-24">
        <p className="text-sm font-medium text-(--ora-text-secondary)">
          Continue at ORA
        </p>
        <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
          {title}
        </h2>

        <div className="mt-10 grid border-t border-(--ora-border-strong) md:grid-cols-2">
          {experiences.map((experience) => (
            <Link
              key={experience.href}
              href={experience.href}
              className="ora-related-link group flex min-h-36 items-end justify-between gap-6 border-b border-(--ora-border) py-7 md:min-h-44 md:px-7 md:first:border-r"
            >
              <span>
                <span className="font-display block text-3xl tracking-[-0.03em] sm:text-4xl">
                  {experience.name}
                </span>
                <span className="mt-2 block max-w-xs text-sm leading-6 text-(--ora-text-secondary)">
                  {experience.note}
                </span>
              </span>
              <ArrowUpRight
                size={20}
                strokeWidth={1.5}
                aria-hidden="true"
                className="shrink-0 transition-transform duration-180 ease-(--ora-ease-out)"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
