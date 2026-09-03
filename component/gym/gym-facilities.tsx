const facilities = [
  {
    title: "Strength",
    description:
      "Free weights, resistance machines and progressive strength training equipment.",
    className: "md:col-span-7",
  },
  {
    title: "Cardio",
    description:
      "Treadmills, rowers, bikes and conditioning equipment for endurance work.",
    className: "md:col-span-5",
  },
  {
    title: "Functional training",
    description:
      "Open turf and equipment for agility, core stability and dynamic movement.",
    className: "md:col-span-5 md:ml-10",
  },
  {
    title: "Coaching",
    description:
      "Tailored personal training and technique guidance aligned with your goals.",
    className: "md:col-span-7",
  },
];

export default function GymFacilities() {
  return (
    <section
      id="training"
      aria-labelledby="training-heading"
      className="bg-(--ora-sage) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container ora-section">
        <h2
          id="training-heading"
          className="font-display max-w-3xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl"
        >
          What the space supports.
        </h2>

        <div className="mt-12 grid gap-x-10 gap-y-6 md:grid-cols-12">
          {facilities.map((facility) => (
            <article
              key={facility.title}
              className={`${facility.className} min-h-40 border-t border-(--ora-burgundy-dark)/22 py-7 md:min-h-48`}
            >
              <h3 className="font-display text-3xl tracking-[-0.03em] md:text-4xl">
                {facility.title}
              </h3>
              <p className="mt-4 max-w-md text-sm leading-6 text-(--ora-burgundy-dark)/80">
                {facility.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
