import Image from "next/image";

export default function StudioAtmosphere() {
  return (
    <section className="bg-(--ora-cream) text-(--ora-burgundy-dark)">
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-4 lg:pt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              Studio in motion
            </p>

            <h2 className="font-display mt-5 max-w-md text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              More than a class.
            </h2>

            <p className="mt-6 max-w-sm text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
              Coaching, movement and music come together to create a shared
              Studio experience.
            </p>
          </div>

          <div className="lg:col-span-5 lg:col-start-5">
            <div className="relative min-h-136 overflow-hidden rounded-(--ora-radius-media) sm:min-h-168 lg:min-h-192">
              <Image
                src="/images/section-image/studio-coach.JPG"
                alt="Instructor leading movement at ORA Studio"
                fill
                sizes="(max-width: 1023px) 100vw, 42vw"
                className="object-cover object-center"
              />
            </div>
          </div>

          <div className="lg:col-span-3 lg:self-end">
            <div className="relative min-h-104 overflow-hidden rounded-(--ora-radius-media) sm:min-h-128 lg:min-h-136">
              <Image
                src="/images/section-image/studio-dj.JPG"
                alt="Music during an ORA Studio session"
                fill
                sizes="(max-width: 1023px) 100vw, 25vw"
                className="object-cover object-center"
              />
            </div>

            <p className="mt-4 max-w-xs text-xs leading-5 text-(--ora-text-secondary)">
              Movement, coaching and atmosphere — experienced together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}