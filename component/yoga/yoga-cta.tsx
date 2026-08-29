import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function YogaCTA() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy) text-white">
      <div className="ora-container relative z-10 py-20 text-center md:py-28">
        <p className="text-sm font-medium text-white/82">ORA Yoga</p>
        <h2 className="font-display mx-auto mt-5 max-w-4xl text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl md:text-7xl">
          Make space for yourself.
        </h2>
        <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-white/82">
          Contact ORA to learn more about Yoga sessions and current availability.
        </p>
        <Link href="/contact" className="ora-button ora-button-light mt-8">
          Contact ORA
          <ArrowUpRight size={17} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
