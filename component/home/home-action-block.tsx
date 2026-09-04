import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function HomeActionBlock() {
  return (
    <section
      aria-labelledby="action-heading"
      className="overflow-hidden bg-(--ora-burgundy-dark) text-white"
    >
      <div className="ora-container py-16 md:py-20 lg:py-24">
        {/* Label */}
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="h-px w-10 bg-(--ora-pink-light)/60"
          />

          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-pink-light)">
            Begin at ORA
          </p>
        </div>

        {/* Main message */}
        <div className="mt-7 grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <h2
              id="action-heading"
              className="font-display max-w-4xl text-5xl leading-[0.95] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl"
            >
              Your next ORA
              <br />
              experience starts here.
            </h2>
          </div>

          <div className="lg:col-span-4 lg:pb-1">
            <p className="max-w-sm text-sm leading-6 text-white/65 sm:text-base">
              Find your next session or get in touch with the ORA team.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-10 border-t border-white/15 md:mt-12">
          <Link
            href="/schedule"
            className="group flex items-center justify-between gap-6 border-b border-white/15 py-5 transition-colors duration-200 hover:bg-white/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70 sm:px-4 sm:py-6"
          >
            <div className="flex items-baseline gap-5 sm:gap-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                01
              </span>

              <span className="font-display text-2xl tracking-tight text-white sm:text-3xl">
                View schedule
              </span>
            </div>

            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-[transform,background-color,color] duration-200 group-hover:translate-x-1 group-hover:bg-white group-hover:text-(--ora-burgundy-dark) motion-reduce:transition-none sm:size-11">
              <ArrowRight
                size={17}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
          </Link>

          <Link
            href="/contact"
            className="group flex items-center justify-between gap-6 border-b border-white/15 py-5 transition-colors duration-200 hover:bg-white/4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-white/70 sm:px-4 sm:py-6"
          >
            <div className="flex items-baseline gap-5 sm:gap-8">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/40">
                02
              </span>

              <span className="font-display text-2xl tracking-tight text-white sm:text-3xl">
                Contact ORA
              </span>
            </div>

            <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-white/25 text-white transition-[transform,background-color,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:bg-white group-hover:text-(--ora-burgundy-dark) motion-reduce:transition-none sm:size-11">
              <ArrowUpRight
                size={17}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}