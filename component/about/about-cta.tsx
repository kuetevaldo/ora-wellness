import Link from "next/link";

export default function AboutCTA() {
  return (
    <section className="relative overflow-hidden bg-(--ora-cream) px-6 py-24 text-(--ora-burgundy-dark) md:px-10 md:py-32 lg:px-14">
      <div className="relative z-10 mx-auto max-w-375">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-(--ora-muted)">
          Discover ORA
        </p>

        <h2 className="mt-7 max-w-4xl text-5xl font-normal leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
          Experience it
          <br />
          for yourself.
        </h2>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-(--ora-burgundy) px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-(--ora-burgundy-dark)"
          >
            Visit ORA
          </Link>

          <Link
            href="/#experiences"
            className="rounded-full border border-(--ora-burgundy)/20 px-7 py-3.5 text-[13px] font-medium text-(--ora-burgundy) transition hover:border-(--ora-burgundy)"
          >
            Explore experiences
          </Link>
        </div>
      </div>
    </section>
  );
}
