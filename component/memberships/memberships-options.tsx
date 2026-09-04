import Image from "next/image";

const options = [
  {
    number: "01",
    title: "Fitness",
    description:
      "For members focused on strength, cardio and consistent training.",
    image: "/images/section-image/gym1.JPG",
    alt: "ORA Fitness training space",
  },
  {
    number: "02",
    title: "Movement",
    description:
      "Explore Pilates, Yoga and guided Studio movement at ORA.",
    image: "/images/hero-image/pilates.jpg",
    alt: "Pilates at ORA",
  },
  {
    number: "03",
    title: "ORA Experience",
    description:
      "Ask ORA about combining different experiences into your weekly routine.",
    image: "/images/hero-image/ora-interior.jpg",
    alt: "ORA wellness destination in Douala",
  },
];

export default function MembershipsOptions() {
  return (
    <section
      id="membership-options"
      className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-8 border-t border-(--ora-burgundy-dark)/15 pt-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Membership options
            </p>

            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Find the routine
              <br />
              that fits you.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-sm leading-6 text-(--ora-text-secondary)">
              Speak with the ORA team to understand current membership
              availability and the options that match your routine.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {options.map((option) => (
            <article
              key={option.number}
              className="group overflow-hidden rounded-(--ora-radius-media) bg-(--ora-cream)"
            >
              <div className="relative min-h-84 overflow-hidden">
                <Image
                  src={option.image}
                  alt={option.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover transition-transform duration-500 ease-(--ora-ease-out) group-hover:scale-[1.025] motion-reduce:transition-none"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-linear-to-t from-black/75 via-black/15 to-transparent"
                />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-7">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/65">
                    {option.number}
                  </p>

                  <h3 className="font-display mt-3 text-3xl tracking-[-0.035em]">
                    {option.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/80">
                    {option.description}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs leading-5 text-(--ora-text-secondary)">
          Membership details, access and availability are provided directly by
          ORA.
        </p>
      </div>
    </section>
  );
}