import Image from "next/image";

export default function GymIntro() {
  return (
    <section
      id="training"
      className="scroll-mt-18 bg-(--ora-cream) text-(--ora-burgundy-dark)"
    >
      <div className="ora-container py-20 md:py-28 lg:py-32">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-16">
          
          {/* Main Fitness space */}
          <div className="relative min-h-120 overflow-hidden rounded-(--ora-radius-media) sm:min-h-152 lg:col-span-7 lg:min-h-176">
            <Image
              src="/images/section-image/gym.JPG"
              alt="ORA Fitness training space in Douala"
              fill
              sizes="(max-width: 1023px) 100vw, 58vw"
              className="object-cover object-center"
            />
          </div>

          {/* Copy */}
          <div className="lg:col-span-4 lg:col-start-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink)">
              The space
            </p>

            <h2 className="font-display mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl">
              Built to train.
            </h2>

            <p className="mt-6 max-w-sm text-[0.9375rem] leading-7 text-(--ora-text-secondary)">
              Strength, cardio and conditioning in one focused environment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}