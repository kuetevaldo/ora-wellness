import Image from "next/image";

export default function PilatesLifestyle() {
  return (
    <section className="bg-white text-(--ora-burgundy-dark)">
      <div className="ora-container py-16 md:py-24">
        <div className="grid items-center gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5 lg:col-start-2">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              The ritual
            </p>

            <h2 className="font-display mt-5 max-w-lg text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl">
              More than the session.
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-(--ora-text-secondary)">
              Movement, routine and the small rituals that make Pilates part of
              your day.
            </p>
          </div>

          <div className="lg:col-span-4 lg:col-start-8">
            <div className="relative mx-auto aspect-square w-full max-w-md overflow-hidden rounded-(--ora-radius-media)">
              <Image
                src="/images/section-image/pilate-image.JPG"
                alt="ORA Pilates lifestyle"
                fill
                sizes="(max-width: 1023px) 90vw, 34vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}