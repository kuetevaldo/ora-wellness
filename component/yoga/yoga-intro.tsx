export default function YogaIntro() {
  return (
    <section id="yoga" className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm font-medium text-(--ora-text-secondary)">
            The practice
          </p>
          <h2 className="font-display mt-5 text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Movement with more awareness.
          </h2>
          <div className="mt-9 grid gap-6 border-t border-(--ora-border-strong) pt-7 md:grid-cols-2">
            <p className="max-w-md text-base leading-7 text-(--ora-text-secondary)">
              ORA Yoga brings together movement, breathing and focus in a calmer
              training environment.
            </p>
            <p className="max-w-md text-base leading-7 text-(--ora-text-secondary)">
              The experience is designed around balance, mobility and creating
              space to reconnect with how your body feels.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
