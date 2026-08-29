import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import MediaPlaceholder from "@/component/shared/media-placeholder";

export default function HomeLocation() {
  return (
    <section className="ora-section bg-(--ora-pink-light) text-(--ora-burgundy-dark)">
      <div className="ora-container">
        <div className="max-w-4xl">
          <p className="text-xs font-semibold text-(--ora-burgundy)">
            Visit ORA
          </p>
          <h2 className="font-display mt-4 text-[clamp(3.5rem,7vw,7rem)] font-normal leading-[0.88] tracking-[-0.05em]">
            Everything starts here.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-(--ora-text-secondary)">
            Discover Café, Fitness, Padel, Pilates, Yoga and Studio in one
            wellness destination in Douala.
          </p>
        </div>

        <div className="mt-12 grid gap-8 border-t border-(--ora-border-strong) pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-sm font-semibold">Location</h3>
            <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
              Hydrocarbures
              <br />
              Douala, Cameroon
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Opening hours</h3>
            <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
              Daily
              <br />
              6:00 AM - 10:00 PM
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
              Questions, bookings and enquiries.
            </p>
            <Link href="/contact" className="ora-text-link mt-2">
              Contact ORA
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </div>

          <div>
            <h3 className="text-sm font-semibold">Instagram</h3>
            <p className="mt-2 text-sm leading-6 text-(--ora-text-secondary)">
              Classes, events and updates.
            </p>
            <a
              href="https://www.instagram.com/ora.cameroon"
              target="_blank"
              rel="noreferrer"
              className="ora-text-link mt-2"
            >
              @ora.cameroon
              <ArrowUpRight size={15} strokeWidth={1.5} aria-hidden="true" />
            </a>
          </div>
        </div>

        <MediaPlaceholder
          label="ORA ARRIVAL PHOTOGRAPHY"
          tone="cream"
          desktopPosition="center 52%"
          mobilePosition="center 44%"
          desktopFocus={{ x: "72%", y: "48%" }}
          mobileFocus={{ x: "50%", y: "46%" }}
          className="mt-12 aspect-[4/3] md:aspect-[16/7]"
        />
      </div>
    </section>
  );
}
