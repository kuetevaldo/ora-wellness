export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-(--ora-cream) px-6 pb-20 pt-36 text-(--ora-burgundy-dark) md:px-10 md:pb-28 lg:px-14">
      <div className="relative z-10 mx-auto max-w-375">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-(--ora-burgundy)">
          About ORA
        </p>

        <h1 className="mt-7 max-w-5xl text-[clamp(4rem,8vw,8rem)] font-normal leading-[0.9] tracking-tighter">
          Wellness,
          <br />
          reimagined
          <br />
          as a lifestyle.
        </h1>

        <p className="mt-8 max-w-xl text-[15px] leading-7 text-(--ora-muted)">
          ORA brings movement, nourishment and community together in one
          destination in Douala.
        </p>
      </div>
    </section>
  );
}
