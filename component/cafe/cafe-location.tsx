import Link from "next/link";
import { ArrowUpRight, Camera, Clock, MapPin, MessageCircle } from "lucide-react";

const details = [
  {
    title: "Location",
    icon: MapPin,
    content: (
      <p className="mt-3 text-sm leading-6 text-(--ora-text-secondary)">
        Hydrocarbures
        <br />
        Douala, Cameroon
      </p>
    ),
  },
  {
    title: "Opening hours",
    icon: Clock,
    content: (
      <p className="mt-3 text-sm leading-6 text-(--ora-text-secondary)">
        Daily
        <br />
        6:00 AM - 10:00 PM
      </p>
    ),
  },
  {
    title: "Contact",
    icon: MessageCircle,
    content: (
      <Link
        href="/contact"
        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-(--ora-burgundy)"
      >
        Contact ORA
        <ArrowUpRight size={16} aria-hidden="true" />
      </Link>
    ),
  },
  {
    title: "Instagram",
    icon: Camera,
    content: (
      <a
        href="https://www.instagram.com/ora.cameroon"
        target="_blank"
        rel="noreferrer"
        className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-(--ora-burgundy)"
      >
        @ora.cameroon
        <ArrowUpRight size={16} aria-hidden="true" />
      </a>
    ),
  },
];

export default function CafeLocation() {
  return (
    <section className="bg-white text-(--ora-burgundy-dark)">
      <div className="ora-container grid gap-12 py-20 md:py-28 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-5">
          <p className="text-sm font-medium text-(--ora-text-secondary)">Visit ORA</p>
          <h2 className="font-display mt-5 max-w-xl text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl md:text-6xl">
            Your next pause starts here.
          </h2>
        </div>

        <div className="grid border-t border-(--ora-border-strong) sm:grid-cols-2 lg:col-span-6 lg:col-start-7">
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <article
                key={detail.title}
                className="min-h-44 border-b border-(--ora-border) py-7 sm:px-6 sm:odd:border-r"
              >
                <Icon size={19} strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-5 text-base font-semibold">{detail.title}</h3>
                {detail.content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
