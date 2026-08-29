import {
  MapPin,
  Clock,
  MessageCircle,
  Camera,
} from "lucide-react";

export default function ContactDetails() {
  return (
    <section className="bg-(--ora-sage-light) px-6 py-20 text-(--ora-burgundy-dark) md:px-10 md:py-24 lg:px-14">
      <div className="mx-auto max-w-375">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="border-t border-(--ora-burgundy)/15 pt-6">
            <MapPin size={20} strokeWidth={1.5} />
            <h2 className="mt-5 text-lg font-medium">
              Location
            </h2>
            <p className="mt-2 text-sm leading-6 text-(--ora-muted)">
              Hydrocarbures
              <br />
              Douala, Cameroon
            </p>
          </div>

          <div className="border-t border-(--ora-burgundy)/15 pt-6">
            <Clock size={20} strokeWidth={1.5} />
            <h2 className="mt-5 text-lg font-medium">
              Opening hours
            </h2>
            <p className="mt-2 text-sm leading-6 text-(--ora-muted)">
              Daily
              <br />
              6:00 AM — 10:00 PM
            </p>
          </div>

          <div className="border-t border-(--ora-burgundy)/15 pt-6">
            <MessageCircle size={20} strokeWidth={1.5} />
            <h2 className="mt-5 text-lg font-medium">
              Enquiries
            </h2>
            <p className="mt-2 text-sm leading-6 text-(--ora-muted)">
              Bookings, memberships and general questions.
            </p>
          </div>

          <div className="border-t border-(--ora-burgundy)/15 pt-6">
            <Camera size={20} strokeWidth={1.5} />
            <h2 className="mt-5 text-lg font-medium">
              Instagram
            </h2>
            <a
              href="https://www.instagram.com/ora.cameroon"
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex text-sm text-(--ora-burgundy)"
            >
              @ora.cameroon →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}