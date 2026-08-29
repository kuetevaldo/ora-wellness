const classes = [
  {
    title: "Strength",
    copy: "Guided sessions focused on controlled strength, movement and consistency.",
    position: "lg:col-start-1",
  },
  {
    title: "Cardio",
    copy: "Higher-energy group movement designed around endurance and conditioning.",
    position: "lg:col-start-2 lg:mt-20",
  },
  {
    title: "Mobility",
    copy: "Sessions designed to support flexibility, movement quality and recovery.",
    position: "lg:col-start-3 lg:mt-40",
  },
];

export default function StudioClasses() {
  return (
    <section className="relative overflow-hidden bg-(--ora-pink-light) text-(--ora-burgundy-dark)">
      <div className="ora-container relative z-10 py-20 md:py-28">
        <div className="grid gap-7 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-sm font-medium text-(--ora-text-secondary)">
              Class energy
            </p>
            <h2 className="font-display mt-5 max-w-lg text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Different ways to move together.
            </h2>
          </div>
        </div>

        <div className="mt-12 grid gap-0 border-t border-(--ora-border-strong) lg:grid-cols-3 lg:gap-10">
          {classes.map((item) => (
            <article
              key={item.title}
              className={`border-b border-(--ora-border) py-7 lg:border-t lg:border-b-0 lg:py-8 ${item.position}`}
            >
              <h3 className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-4 max-w-xs text-sm leading-6 text-(--ora-text-secondary)">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
