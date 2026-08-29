const qualities = [
  {
    title: "Control",
    copy: "Build a steadier connection between breath, alignment and movement.",
  },
  {
    title: "Strength",
    copy: "Develop support from the centre with deliberate, progressive work.",
  },
  {
    title: "Mobility",
    copy: "Create space and ease through a balanced range of guided movement.",
  },
];

export default function PilatesExperience() {
  return (
    <section className="relative overflow-hidden bg-(--ora-pink-light) text-(--ora-burgundy-dark)">
      <div className="ora-container relative z-10 grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-(--ora-text-secondary)">
            The experience
          </p>
          <h2 className="font-display mt-5 max-w-lg text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Built around quality of movement.
          </h2>
        </div>

        <div className="border-t border-(--ora-border-strong) lg:col-span-6 lg:col-start-7">
          {qualities.map((quality) => (
            <article
              key={quality.title}
              className="grid gap-3 border-b border-(--ora-border) py-7 sm:grid-cols-[10rem_1fr] sm:gap-8 md:py-9"
            >
              <h3 className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">
                {quality.title}
              </h3>
              <p className="max-w-sm text-sm leading-6 text-(--ora-text-secondary) sm:pt-2">
                {quality.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
