import Image from "next/image";

const moments = [
  {
    title: "Play",
    copy: "A dedicated padel environment for matches, practice and social play.",
  },
  {
    title: "Compete",
    copy: "A setting for friendly competition and organised matches.",
  },
  {
    title: "Connect",
    copy: "A social game that belongs naturally within ORA's wider community.",
  },
];

export default function PadelExperience() {
  return (
    <section className="bg-(--ora-pink-light) text-(--ora-burgundy-dark)">
      <div className="ora-container grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="relative h-96 overflow-hidden rounded-(--ora-radius-media) lg:col-span-5 lg:h-[34rem]">
          <Image
            src="/images/IMG_5206.JPG"
            alt="ORA Padel gathering details"
            fill
            sizes="(max-width: 1024px) 100vw, 42vw"
            className="object-cover object-center"
          />
        </div>

        <div className="lg:col-span-6 lg:col-start-7 lg:pt-12">
          <p className="text-sm font-medium text-(--ora-text-secondary)">
            Around the court
          </p>
          <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Built around the social side of sport.
          </h2>
          <div className="mt-9 border-t border-(--ora-border-strong)">
            {moments.map((moment) => (
              <article
                key={moment.title}
                className="grid gap-2 border-b border-(--ora-border) py-6 sm:grid-cols-[8rem_1fr] sm:gap-6"
              >
                <h3 className="font-display text-3xl tracking-[-0.03em]">
                  {moment.title}
                </h3>
                <p className="text-sm leading-6 text-(--ora-text-secondary) sm:pt-1">
                  {moment.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
