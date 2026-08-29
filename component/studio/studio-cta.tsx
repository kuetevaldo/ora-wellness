import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function StudioCTA() {
  return (
    <section className="bg-(--ora-burgundy-dark) text-white">
      <div className="ora-container flex flex-col items-start justify-between gap-9 py-20 md:flex-row md:items-end md:py-28">
        <div>
          <p className="text-sm font-medium text-white/65">ORA Studio</p>
          <h2 className="font-display mt-5 max-w-3xl text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl md:text-7xl">
            Join the energy.
          </h2>
        </div>
        <div className="max-w-md md:pb-1">
          <p className="text-base leading-7 text-white/72">
            Contact ORA to learn more about current Studio classes and availability.
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
