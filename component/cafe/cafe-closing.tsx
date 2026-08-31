import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { bookingHref } from "@/lib/contact";

export default function CafeClosing() {
  return (
    <section className="relative overflow-hidden bg-(--ora-burgundy) text-white">
      <div className="ora-container relative z-10 py-20 md:py-28">
        <p className="text-sm font-medium text-white/82">ORA Café</p>
        <h2 className="font-display mt-5 max-w-5xl text-5xl leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
          Come for the coffee.
          <br />
          Stay for the feeling.
        </h2>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href={bookingHref} className="ora-button ora-button-light">
            Plan your ORA visit
            <ArrowUpRight size={17} aria-hidden="true" />
          </Link>
          <Link href="#menu" className="ora-button ora-button-outline-light">
            View menu
          </Link>
        </div>
      </div>
    </section>
  );
}
