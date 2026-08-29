const eventTypes = [
  {
    number: "01",
    title: "Padel",
    description:
      "Matches, tournaments and social padel experiences.",
  },
  {
    number: "02",
    title: "Movement",
    description:
      "Group sessions, challenges and wellness-focused activities.",
  },
  {
    number: "03",
    title: "Community",
    description:
      "Social experiences designed to bring the ORA community together.",
  },
];

export default function EventsList() {
  return (
    <section className="bg-(--ora-pink-light) px-6 py-24 text-(--ora-burgundy-dark) md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-375">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-(--ora-muted)">
              Events & Community
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-4xl font-normal leading-[1.03] tracking-[-0.035em] sm:text-5xl md:text-6xl">
              More ways to
              <br />
              experience ORA.
            </h2>

            <div className="mt-14 grid gap-8 md:grid-cols-3">
              {eventTypes.map((item) => (
                <article
                  key={item.number}
                  className="border-t border-(--ora-burgundy)/15 pt-6"
                >
                  <p className="text-[10px] font-medium tracking-[0.18em] text-(--ora-burgundy)">
                    {item.number}
                  </p>

                  <h3 className="mt-5 text-2xl font-normal tracking-tight">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-(--ora-burgundy-dark)/60">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-16 border-t border-(--ora-burgundy)/15 pt-10">
              <p className="text-[10px] uppercase tracking-[0.2em] text-(--ora-muted)">
                Upcoming events
              </p>

              <h3 className="mt-5 text-4xl font-normal tracking-[-0.035em]">
                Event calendar coming soon.
              </h3>

              <p className="mt-5 max-w-xl text-[15px] leading-7 text-(--ora-muted)">
                ORA&apos;s official upcoming event dates and registrations
                will appear here once available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}