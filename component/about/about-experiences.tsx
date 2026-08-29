const pillars = [
  {
    number: "01",
    title: "Move",
    description: "Fitness, Pilates, Yoga and Studio.",
  },
  {
    number: "02",
    title: "Play",
    description: "Padel and social movement.",
  },
  {
    number: "03",
    title: "Nourish",
    description: "Café, meals, coffee, juices and wellness drinks.",
  },
  {
    number: "04",
    title: "Connect",
    description: "Community, classes and shared experiences.",
  },
];

export default function AboutExperiences() {
  return (
    <section className="bg-(--ora-sage-light) px-6 py-24 text-(--ora-burgundy-dark) md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-375">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-(--ora-muted)">
              The ORA experience
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-normal leading-[1.03] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Different experiences.
              <br />
              One rhythm.
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-2">
              {pillars.map((item) => (
                <article
                  key={item.number}
                  className="border-t border-(--ora-burgundy)/15 pt-6"
                >
                  <p className="text-[10px] font-medium tracking-[0.18em] text-(--ora-pink)">
                    {item.number}
                  </p>

                  <h3 className="mt-5 text-3xl font-normal tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-(--ora-muted)">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
