const qualities = [
  {
    number: "01",
    title: "Control",
    copy: "Build a steadier connection between breath, alignment and movement.",
  },
  {
    number: "02",
    title: "Strength",
    copy: "Develop support from the centre through deliberate, progressive movement.",
  },
  {
    number: "03",
    title: "Mobility",
    copy: "Create space and ease through a balanced range of guided movement.",
  },
];

export default function PilatesExperience() {
  return (
    <section className="bg-(--ora-pink-light) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-6 border-b border-(--ora-burgundy-dark)/20 pb-10 lg:grid-cols-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy-dark)/65 lg:col-span-3">
            The experience
          </p>

          <h2 className="font-display max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:col-span-8">
            Built around quality of movement.
          </h2>
        </div>

        <div className="mt-10 grid border-t border-(--ora-burgundy-dark)/20 md:grid-cols-3">
          {qualities.map((quality) => (
            <article
              key={quality.title}
              className="border-b border-(--ora-burgundy-dark)/20 py-8 md:min-h-72 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-xs text-(--ora-burgundy-dark)/50">
                {quality.number}
              </span>

              <h3 className="font-display mt-8 text-3xl tracking-[-0.03em] sm:text-4xl">
                {quality.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-(--ora-burgundy-dark)/75">
                {quality.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}