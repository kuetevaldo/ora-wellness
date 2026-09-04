const practices = [
  {
    number: "01",
    title: "Breath",
    copy: "A calmer practice built around breathing, focus and presence.",
  },
  {
    number: "02",
    title: "Mobility",
    copy: "Movement that supports flexibility, control and everyday comfort.",
  },
  {
    number: "03",
    title: "Balance",
    copy: "A thoughtful approach to strength, stability and body awareness.",
  },
];

export default function YogaExperience() {
  return (
    <section className="bg-(--ora-sage-light) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-6 border-b border-(--ora-burgundy-dark)/20 pb-10 lg:grid-cols-12">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy-dark)/65 lg:col-span-3">
            The experience
          </p>

          <h2 className="font-display max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:col-span-8">
            Find balance through movement.
          </h2>
        </div>

        <div className="mt-10 grid border-t border-(--ora-burgundy-dark)/20 md:grid-cols-3">
          {practices.map((practice) => (
            <article
              key={practice.title}
              className="border-b border-(--ora-burgundy-dark)/20 py-8 md:min-h-72 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <span className="text-xs text-(--ora-burgundy-dark)/50">
                {practice.number}
              </span>

              <h3 className="font-display mt-8 text-3xl tracking-[-0.03em] sm:text-4xl">
                {practice.title}
              </h3>

              <p className="mt-4 max-w-sm text-sm leading-6 text-(--ora-burgundy-dark)/75">
                {practice.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}