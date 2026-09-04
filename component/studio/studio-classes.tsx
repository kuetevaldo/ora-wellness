const classes = [
  {
    number: "01",
    title: "Strength",
    copy: "Guided sessions focused on controlled strength, movement and consistency.",
  },
  {
    number: "02",
    title: "Cardio",
    copy: "Higher-energy group movement designed around endurance and conditioning.",
  },
  {
    number: "03",
    title: "Mobility",
    copy: "Sessions designed to support flexibility, movement quality and recovery.",
  },
];

export default function StudioClasses() {
  return (
    <section
      aria-labelledby="studio-classes-heading"
      className="bg-(--ora-pink-light) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-6 border-b border-(--ora-burgundy-dark)/20 pb-10 lg:grid-cols-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy-dark)/65 lg:col-span-3">
            Class energy
          </p>

          <h2
            id="studio-classes-heading"
            className="font-display max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:col-span-8"
          >
            Different ways to move together.
          </h2>
        </div>

        <div className="mt-10 grid border-t border-(--ora-burgundy-dark)/20 md:grid-cols-3">
          {classes.map((item) => (
            <article
              key={item.title}
              className="border-b border-(--ora-burgundy-dark)/20 py-8 md:min-h-72 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-xs text-(--ora-burgundy-dark)/50">
                {item.number}
              </span>

              <h3 className="font-display mt-8 text-3xl tracking-[-0.03em] sm:text-4xl">
                {item.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-(--ora-burgundy-dark)/75">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}