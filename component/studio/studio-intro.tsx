export default function StudioIntro() {
  return (
    <section id="studio" className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)">
      <div className="ora-container grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-7 lg:col-start-2">
          <p className="text-sm font-medium text-(--ora-text-secondary)">
            The studio
          </p>
          <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Shared energy.
            <br />
            Guided movement.
          </h2>
        </div>

        <div className="grid gap-6 border-t border-(--ora-border-strong) pt-7 sm:grid-cols-2 lg:col-span-9 lg:col-start-4">
          <p className="max-w-md text-base leading-7 text-(--ora-text-secondary)">
            ORA Studio brings people together through guided group movement and
            shared training experiences.
          </p>
          <p className="max-w-md text-base leading-7 text-(--ora-text-secondary)">
            The studio is designed for variety, motivation and a stronger sense of
            community around movement.
          </p>
        </div>
      </div>
    </section>
  );
}
