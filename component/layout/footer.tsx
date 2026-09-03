import Link from "next/link";

const experienceLinks = [
  ["Café", "/cafe"],
  ["Fitness", "/experiences/gym"],
  ["Padel", "/experiences/padel"],
  ["Pilates", "/experiences/pilates"],
  ["Yoga", "/experiences/yoga"],
  ["Studio", "/experiences/studio"],
];

const exploreLinks = [
  ["Schedule", "/schedule"],
  ["Memberships", "/memberships"],
  ["Events", "/events"],
  ["About", "/about"],
  ["Contact", "/contact"],
];

export default function Footer() {
  return (
    <footer className="bg-(--ora-burgundy-dark) px-(--ora-gutter) py-14 text-(--ora-cream) md:py-18">
      <div className="mx-auto grid max-w-(--ora-layout-max) gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <Link href="/" className="text-2xl font-semibold tracking-[0.2em]">
            ORA
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-6 text-white/90">
            Café, movement, wellness and community in Douala.
          </p>
          <div className="mt-8 text-sm leading-6 text-white/90">
            <p>Hydrocarbures, Douala</p>
            <p>Daily, 6:00 AM - 10:00 PM</p>
          </div>
        </div>

        <nav aria-label="Footer experiences">
          <p className="text-xs font-semibold text-(--ora-pink-light)">
            Experiences
          </p>
          <div className="mt-4 grid gap-3 text-sm text-white/90">
            {experienceLinks.map(([label, href]) => (
              <Link key={href} href={href} className="w-fit hover:text-white">
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <nav aria-label="Footer information">
          <p className="text-xs font-semibold text-(--ora-pink-light)">
            Explore
          </p>
          <div className="mt-4 grid gap-3 text-sm text-white/90">
            {exploreLinks.map(([label, href]) => (
              <Link key={href} href={href} className="w-fit hover:text-white">
                {label}
              </Link>
            ))}
            <a
              href="https://www.instagram.com/ora.cameroon"
              target="_blank"
              rel="noreferrer"
              aria-label="@ora.cameroon on Instagram (opens in new tab)"
              className="w-fit hover:text-white"
            >
              Instagram
            </a>
          </div>
        </nav>
      </div>

      <div className="mx-auto mt-12 flex max-w-(--ora-layout-max) flex-col gap-2 border-t border-white/18 pt-6 text-xs text-white/68 sm:flex-row sm:items-center sm:justify-between">
        <p>ORA Wellness Cameroon</p>
        <p>Douala, Cameroon</p>
      </div>
    </footer>
  );
}
