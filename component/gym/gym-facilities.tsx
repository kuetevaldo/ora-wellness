const facilities = [
  {
    title: "Strength",
    description:
      "A dedicated environment for resistance training, controlled movement and progressive strength work.",
    className: "md:col-span-7",
  },
  {
    title: "Cardio",
    description:
      "Cardio-focused training designed to support endurance, conditioning and everyday performance.",
    className: "md:col-span-5",
  },
  {
    title: "Functional training",
    description:
      "Space for mobility, functional movement and dynamic training sessions.",
    className: "md:col-span-5 md:ml-10",
  },
  {
    title: "Coaching",
    description:
      "A training environment that can support guided sessions and more personalized fitness goals.",
    className: "md:col-span-7",
  },
];

export default function GymFacilities() {
  return (
    <section className="bg-(--ora-sage) text-(--ora-burgundy-dark)">
      <div className="ora-container ora-section">
        <h2 className="font-display max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
          What the space supports.
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-12">
          {facilities.map((facility) => (
            <article
              key={facility.title}
              className={`${facility.className} min-h-48 border-t border-(--ora-burgundy-dark)/22 py-7 md:min-h-56`}
            >
              <h3 className="font-display text-3xl tracking-[-0.03em] md:text-4xl">
                {facility.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-6 text-(--ora-burgundy-dark)/72">
                {facility.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
