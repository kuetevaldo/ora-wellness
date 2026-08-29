import Link from "next/link";

export default function EventsCTA() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy) px-6 py-24 text-(--ora-cream) md:px-10 md:py-32 lg:px-14">
      <div className="relative z-10 mx-auto max-w-375">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-(--ora-pink-light)">
          Stay connected
        </p>

        <h2 className="mt-7 max-w-4xl text-5xl font-normal leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
          Be part
          <br />
          of what&apos;s next.
        </h2>

        <p className="mt-8 max-w-xl text-[15px] leading-7 text-white/82">
          Follow ORA or contact the team to learn about upcoming events and
          community activities.
        </p>

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href="https://www.instagram.com/ora.cameroon"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-(--ora-cream) px-7 py-3.5 text-[13px] font-medium text-(--ora-burgundy-dark) transition hover:bg-(--ora-pink-light)"
          >
            Follow ORA
          </a>

          <Link
            href="/contact"
            className="rounded-full border border-white/25 px-7 py-3.5 text-[13px] font-medium text-white transition hover:border-white"
          >
            Contact ORA
          </Link>
        </div>
      </div>
    </section>
  );
}
