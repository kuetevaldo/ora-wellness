export default function PadelIntro() {
  return (
    <section id="padel" className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)">
      <div className="ora-container grid gap-10 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-8 lg:col-start-2">
          <p className="text-sm font-medium text-(--ora-text-secondary)">The game</p>
          <h2 className="font-display mt-5 max-w-4xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Movement feels different when it becomes a game.
          </h2>
        </div>
        <div className="grid gap-6 border-t border-(--ora-border-strong) pt-7 md:grid-cols-2 lg:col-span-8 lg:col-start-5">
          <p className="max-w-md text-base leading-7 text-(--ora-text-secondary)">
            ORA Padel brings together movement, competition and social energy in
            one experience.
          </p>
          <p className="max-w-md text-base leading-7 text-(--ora-text-secondary)">
            Whether you come to play casually or compete with friends, the focus
            stays on movement, connection and enjoyment.
          </p>
        </div>
      </div>
    </section>
  );
}
