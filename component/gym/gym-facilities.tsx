import Image from "next/image";

const facilities = [
  {
    number: "01",
    title: "Strength",
    description:
      "Free weights and resistance equipment for progressive strength training.",
  },
  {
    number: "02",
    title: "Cardio",
    description:
      "Treadmills, rowers and bikes for endurance and conditioning.",
  },
  {
    number: "03",
    title: "Functional training",
    description:
      "Space and equipment for agility, stability and dynamic movement.",
  },
  {
    number: "04",
    title: "Coaching",
    description:
      "Personal guidance and technique support aligned with your training goals.",
  },
];

export default function GymFacilities() {
  return (
    <section
      aria-labelledby="training-heading"
      className="bg-(--ora-sage) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        
        {/* Heading */}
        <div className="grid gap-6 border-b border-(--ora-burgundy-dark)/20 pb-10 lg:grid-cols-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy-dark)/65 lg:col-span-3">
            ORA Fitness
          </p>

          <h2
            id="training-heading"
            className="font-display max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:col-span-8"
          >
            Train your way.
          </h2>
        </div>

        {/* Large equipment image */}
        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="relative min-h-112 overflow-hidden rounded-(--ora-radius-media) sm:min-h-144 lg:col-span-8 lg:min-h-168">
            <Image
              src="/images/section-image/gym1.JPG"
              alt="Training equipment inside ORA Fitness"
              fill
              sizes="(max-width: 1023px) 100vw, 66vw"
              className="object-cover object-center"
            />
          </div>

          <div className="grid gap-0 lg:col-span-4">
            {facilities.slice(0, 2).map((facility) => (
              <article
                key={facility.title}
                className="border-t border-(--ora-burgundy-dark)/20 py-7"
              >
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-xs text-(--ora-burgundy-dark)/55">
                    {facility.number}
                  </span>

                  <div>
                    <h3 className="font-display text-3xl tracking-[-0.03em]">
                      {facility.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-(--ora-burgundy-dark)/75">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Detail image + remaining training areas */}
        <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
          <div className="grid gap-0 lg:col-span-5">
            {facilities.slice(2).map((facility) => (
              <article
                key={facility.title}
                className="border-t border-(--ora-burgundy-dark)/20 py-7"
              >
                <div className="flex items-start gap-5">
                  <span className="pt-1 text-xs text-(--ora-burgundy-dark)/55">
                    {facility.number}
                  </span>

                  <div>
                    <h3 className="font-display text-3xl tracking-[-0.03em]">
                      {facility.title}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-(--ora-burgundy-dark)/75">
                      {facility.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="relative min-h-100 overflow-hidden rounded-(--ora-radius-media) sm:min-h-120 lg:col-span-6 lg:col-start-7 lg:min-h-144">
            <Image
              src="/images/section-image/gym-masse.JPG"
              alt="Fitness equipment detail at ORA Fitness"
              fill
              sizes="(max-width: 1023px) 100vw, 50vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}