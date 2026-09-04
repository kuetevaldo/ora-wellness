import Image from "next/image";

export default function StudioIntro() {
  return (
    <section
      id="studio"
      className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              The studio
            </p>

            <h2 className="font-display mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Shared energy.
              <br />
              Guided movement.
            </h2>

            <p className="mt-6 max-w-sm text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
              Group movement designed around variety, motivation and the
              energy of training together.
            </p>
          </div>

          <div className="relative min-h-128 overflow-hidden rounded-(--ora-radius-media) sm:min-h-160 lg:col-span-7 lg:col-start-6 lg:min-h-184">
            <Image
              src="/images/section-image/studio-workout.JPG"
              alt="Group movement session at ORA Studio in Douala"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}