const options = [
  {
    number: "01",
    title: "Fitness",
    description:
      "For members focused on strength, cardio and consistent training.",
  },
  {
    number: "02",
    title: "Movement",
    description:
      "For members interested in Pilates, Yoga and guided Studio sessions.",
  },
  {
    number: "03",
    title: "ORA Experience",
    description:
      "For those looking to combine multiple ORA experiences into one routine.",
  },
];

export default function MembershipsOptions() {
  return (
    <section className="bg-(--ora-sage-light) px-6 py-24 text-(--ora-burgundy-dark) md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-375">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-(--ora-muted)">
              Membership options
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-normal leading-[1.03] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              Find the routine
              <br />
              that fits you.
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {options.map((option) => (
                <article
                  key={option.number}
                  className="border-t border-(--ora-burgundy)/15 pt-6"
                >
                  <p className="text-[10px] font-medium tracking-[0.18em] text-(--ora-pink)">
                    {option.number}
                  </p>

                  <h3 className="mt-5 text-2xl font-normal tracking-tight">
                    {option.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-(--ora-burgundy-dark)/60">
                    {option.description}
                  </p>

                  <p className="mt-8 text-[10px] font-medium uppercase tracking-[0.16em] text-(--ora-burgundy)">
                    Details available from ORA
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
