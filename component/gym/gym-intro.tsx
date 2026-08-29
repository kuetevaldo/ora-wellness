export default function GymIntro() {
  return (
    <section
      id="training"
      className="scroll-mt-18 bg-(--ora-cream) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container ora-section">
        <h2 className="font-display max-w-5xl text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
          A space designed for consistent progress.
        </h2>

        <div className="mt-12 grid gap-8 border-t border-(--ora-border-strong) pt-8 md:grid-cols-2 md:gap-14 lg:ml-[18%]">
          <p className="max-w-md text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
            ORA Fitness is built around a focused training experience:
            strength, cardio, movement and personal progress in one
            environment.
          </p>
          <p className="max-w-md text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
            The goal is simple: make every session feel intentional, balanced
            and part of the broader ORA wellness experience.
          </p>
        </div>
      </div>
    </section>
  );
}
