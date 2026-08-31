import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const eventTypes = [
  {
    number: "01",
    title: "Academies",
    description:
      "Recurring Padel and Dance programmes create a clear path for children, adults and families.",
  },
  {
    number: "02",
    title: "Tournaments",
    description:
      "ORA has hosted organised Padel competition across levels, formats and player communities.",
  },
  {
    number: "03",
    title: "Challenges",
    description:
      "Team-based Fitness challenges turn individual training into shared energy and friendly competition.",
  },
  {
    number: "04",
    title: "Social moments",
    description:
      "The Café and wider ORA spaces help each match or movement session become a community occasion.",
  },
];

const eventSystem = [
  {
    label: "Learn",
    copy: "Weekly, age-based academies make participation easier to understand and plan.",
  },
  {
    label: "Compete",
    copy: "Past formats have included group stages, guaranteed play and structured knockout draws.",
  },
  {
    label: "Gather",
    copy: "Players, families and visitors can stay connected beyond the court or studio.",
  },
];

export default function EventsList() {
  return (
    <section className="bg-(--ora-pink-light) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              Events & community
            </p>
            <h2 className="font-display mt-4 max-w-lg text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              ORA works as a living programme, not just a place.
            </h2>
          </div>

          <div className="grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:col-span-7 lg:col-start-6">
            {eventTypes.map((item) => (
              <article
                key={item.number}
                className="border-t border-(--ora-border-strong) pt-6"
              >
                <p className="text-xs font-semibold text-(--ora-burgundy)">
                  {item.number}
                </p>
                <h3 className="font-display mt-4 text-3xl tracking-[-0.03em]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-sm text-sm leading-6 text-(--ora-text-secondary)">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 rounded-[1.75rem] bg-(--ora-burgundy-dark) p-6 text-white sm:p-9 md:p-12">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="text-xs font-semibold text-(--ora-pink-light)">
                The ORA event system
              </p>
              <h3 className="font-display mt-4 text-4xl leading-none tracking-[-0.04em] sm:text-5xl">
                Learn. Compete. Gather.
              </h3>
            </div>
            <ol className="grid gap-6 md:grid-cols-3 lg:col-span-7 lg:col-start-6">
              {eventSystem.map((step, index) => (
                <li key={step.label} className="border-t border-white/20 pt-5">
                  <span className="text-xs font-semibold text-white/55">
                    0{index + 1}
                  </span>
                  <h4 className="font-display mt-3 text-2xl">{step.label}</h4>
                  <p className="mt-3 text-sm leading-6 text-white/70">
                    {step.copy}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-(--ora-border-strong) pt-7 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs font-semibold text-(--ora-burgundy)">
              What&apos;s next
            </p>
            <h3 className="font-display mt-3 text-3xl tracking-[-0.035em] sm:text-4xl">
              Confirmed event dates are published as they become available.
            </h3>
          </div>
          <Link href="/schedule" className="ora-button ora-button-primary">
            View weekly programmes
            <ArrowUpRight size={16} strokeWidth={1.6} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
