import Image from "next/image";

export default function AboutPhilosophy() {
  return (
    <section
      id="about-ora"
      className="scroll-mt-24 bg-white text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid gap-8 border-t border-(--ora-burgundy-dark)/15 pt-7 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              The idea
            </p>

            <h2 className="font-display mt-4 max-w-3xl text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              More than
              <br />
              a fitness space.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <p className="max-w-md text-sm leading-6 text-(--ora-text-secondary)">
              Movement, food and social connection come together as one ORA
              experience.
            </p>
          </div>
        </div>

        <div className="relative mt-12 min-h-128 overflow-hidden rounded-(--ora-radius-media) sm:min-h-160 lg:min-h-184">
          <Image
            src="/images/hero-image/ora-interior.jpg"
            alt="Inside ORA Wellness in Douala"
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-transparent"
          />

          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8 md:p-10">
            <p className="max-w-xl text-sm leading-6 text-white/80 sm:text-base sm:leading-7">
              A place to train, move, pause, eat and spend time together.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}