const practices = [
  {
    title: "Breath",
    copy: "A calmer practice built around breathing, focus and presence.",
    position: "lg:ml-0",
  },
  {
    title: "Mobility",
    copy: "Movement that supports flexibility, control and everyday comfort.",
    position: "lg:ml-16",
  },
  {
    title: "Balance",
    copy: "A thoughtful approach to strength, stability and body awareness.",
    position: "lg:ml-32",
  },
];

export default function YogaExperience() {
  return (
    <section className="bg-(--ora-sage-light) text-(--ora-burgundy-dark)">
      <div className="ora-container grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <h2 className="font-display max-w-lg text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Find balance through movement.
          </h2>
        </div>

        <div className="space-y-0 lg:col-span-6 lg:col-start-7">
          {practices.map((practice) => (
            <article
              key={practice.title}
              className={`max-w-md border-t border-(--ora-border-strong) py-7 ${practice.position}`}
            >
              <h3 className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">
                {practice.title}
              </h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-(--ora-text-secondary)">
                {practice.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
