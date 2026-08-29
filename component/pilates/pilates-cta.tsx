import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function PilatesCTA() {
  return (
    <section className="bg-(--ora-burgundy) text-white">
      <div className="ora-container grid gap-8 py-20 md:py-28 lg:grid-cols-12 lg:items-end">
        <div className="lg:col-span-7">
          <p className="text-sm font-medium text-white/82">Start at ORA</p>
          <h2 className="font-display mt-5 text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Find your rhythm.
          </h2>
        </div>
        <div className="lg:col-span-4 lg:col-start-9">
          <p className="max-w-md text-base leading-7 text-white/82">
            Contact ORA to learn more about Pilates sessions, availability and the
            best place to begin.
          </p>
          <Link href="/contact" className="ora-button ora-button-light mt-7">
            Contact ORA
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
