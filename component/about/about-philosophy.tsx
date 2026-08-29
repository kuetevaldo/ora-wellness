export default function AboutPhilosophy() {
  return (
    <section className="bg-(--ora-burgundy) px-6 py-24 text-(--ora-cream) md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-375">
        <div className="grid gap-12 lg:grid-cols-[0.55fr_1.45fr]">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-(--ora-pink-light)">
              The idea
            </p>
          </div>

          <div>
            <h2 className="max-w-5xl text-5xl font-normal leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              More than
              <br />
              a fitness space.
            </h2>

            <div className="mt-12 grid gap-8 border-t border-white/15 pt-8 md:grid-cols-2">
              <p className="max-w-md text-[15px] leading-7 text-white/82">
                ORA connects different parts of everyday wellbeing in one
                place — movement, food, recovery and social connection.
              </p>

              <p className="max-w-md text-[15px] leading-7 text-white/82">
                The experience is designed to feel balanced, intentional and
                part of a wider lifestyle rather than a single activity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
