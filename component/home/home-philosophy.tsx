const rhythm = [
  {
    title: "Move",
    description: "Fitness, Pilates, Yoga and Studio.",
  },
  {
    title: "Play",
    description: "Padel, movement and social competition.",
  },
  {
    title: "Nourish",
    description: "Breakfast, coffee, meals and wellness drinks.",
  },
  {
    title: "Connect",
    description: "Classes, events and community.",
  },
];

export default function HomePhilosophy() {
  return (
    <section className="bg-(--ora-cream) pb-(--ora-section-space)">
      <div className="ora-container">
        <div className="relative overflow-hidden rounded-(--ora-radius-panel) bg-(--ora-burgundy) px-6 py-14 text-(--ora-cream) sm:px-9 md:px-12 md:py-18 lg:px-16 lg:py-22">
          <div className="relative grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:gap-18">
            <div>
              <p className="text-xs font-semibold text-(--ora-pink-light)">
                The ORA philosophy
              </p>
              <h2 className="font-display mt-5 max-w-xl text-[clamp(3.5rem,7vw,7rem)] font-normal leading-[0.88] tracking-[-0.05em]">
                ORA, in rhythm.
              </h2>
            </div>

            <div className="lg:pt-7">
              <p className="max-w-xl text-lg leading-8 text-(--ora-cream)">
                ORA brings together movement, nourishment and wellness in one
                connected environment.
              </p>
              <p className="mt-5 max-w-xl text-[0.9375rem] leading-7 text-white/82">
                Train, play, breathe, refuel and connect. Each experience is
                different, but everything belongs to the same rhythm.
              </p>

              <div className="mt-12 grid gap-x-8 gap-y-9 sm:grid-cols-2">
                {rhythm.map((item) => (
                  <div key={item.title}>
                    <h3 className="font-display text-3xl font-normal">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/82">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
