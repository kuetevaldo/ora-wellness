import Image from "next/image";
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function MembershipsHero() {
  return (
    <section className="bg-(--ora-cream) pt-28 text-(--ora-burgundy-dark) md:pt-32">
      <div className="ora-container pb-16 md:pb-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7 lg:pb-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              ORA Memberships
            </p>

            <h1 className="font-display mt-5 max-w-4xl text-[clamp(4rem,7vw,7rem)] font-normal leading-[0.88] tracking-[-0.055em]">
              Make ORA
              <br />
              part of your
              <br />
              routine.
            </h1>

            <p className="mt-7 max-w-lg text-sm leading-7 text-(--ora-text-secondary) sm:text-base">
              Explore ways to make training, movement and the wider ORA
              experience part of your week.
            </p>

            <Link
              href="#membership-options"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-(--ora-burgundy-dark)"
            >
              Explore options

              <span className="flex size-9 items-center justify-center rounded-full border border-(--ora-burgundy-dark)/20 transition-[transform,background-color,color] duration-200 group-hover:translate-y-1 group-hover:bg-(--ora-burgundy) group-hover:text-white motion-reduce:transition-none">
                <ArrowDown size={14} strokeWidth={1.5} aria-hidden="true" />
              </span>
            </Link>
          </div>

          <div className="lg:col-span-5">
            <div className="relative min-h-92 overflow-hidden rounded-(--ora-radius-media) sm:min-h-120 lg:min-h-140">
              <Image
                src="/images/section-image/gym.JPG"
                alt="ORA training space in Douala"
                fill
                priority
                sizes="(min-width: 1024px) 42vw, 100vw"
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent"
              />

              <div className="absolute bottom-5 left-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white">
                  Move · Train · Connect
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}