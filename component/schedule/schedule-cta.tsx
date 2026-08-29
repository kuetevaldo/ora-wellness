import Link from "next/link";

export default function ScheduleCTA() {
  return (
    <section className="bg-(--ora-sage) px-6 py-24 text-(--ora-burgundy-dark) md:px-10 md:py-32 lg:px-14">
      <div className="mx-auto max-w-375">
        <p className="text-[10px] font-medium uppercase tracking-[0.24em] text-(--ora-burgundy-dark)/55">
          Need help?
        </p>

        <h2 className="mt-7 max-w-4xl text-5xl font-normal leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-7xl">
          Find the session
          <br />
          that fits your day.
        </h2>

        <p className="mt-8 max-w-xl text-[15px] leading-7 text-(--ora-burgundy-dark)/60">
          Contact the ORA team for current availability and class information.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex rounded-full bg-(--ora-burgundy) px-7 py-3.5 text-[13px] font-medium text-white transition hover:bg-(--ora-burgundy-dark)"
        >
          Contact ORA
        </Link>
      </div>
    </section>
  );
}