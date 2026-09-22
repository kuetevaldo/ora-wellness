"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

import { ArrowUpRight, Mail } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";

const experienceLinks = [
  { key: "cafe", href: "/cafe" },
  { key: "fitness", href: "/experiences/gym" },
  { key: "padel", href: "/experiences/padel" },
  { key: "pilates", href: "/experiences/pilates" },
  { key: "yoga", href: "/experiences/yoga" },
  { key: "studio", href: "/experiences/studio" },
] as const;

const exploreLinks = [
  { key: "schedule", href: "/schedule" },
  { key: "memberships", href: "/memberships" },
  { key: "events", href: "/events" },
  { key: "about", href: "/about" },
  { key: "contact", href: "/contact" },
] as const;

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ora.cameroon?igsi=c2kxbThieWxqYWI4",
    icon: faInstagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CekxhK5UQ/?mibextid=wwXIfr",
    icon: faFacebookF,
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@oracameroon?_r=1&_t=ZS-99QxaftgirF",
    icon: faTiktok,
  },
];

const appStoreUrl =
  "https://apps.apple.com/app/id6753169416";

const googleMapsUrl =
  "https://maps.app.goo.gl/N1TAxq6LhVsQkhHC8";

const email = "info@oracomplex.com";

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="bg-(--ora-cream) text-(--ora-burgundy-dark)">
      <div className="ora-container py-12 md:py-14">
        {/* Main footer */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Link
              href="/"
              aria-label="ORA homepage"
              className="inline-block"
            >
              <div className="relative h-20 w-40 sm:h-24 sm:w-48">
                <Image
                  src="/images/footer-image/ora-wellness.png"
                  alt="ORA Wellness"
                  fill
                  sizes="192px"
                  className="object-contain object-left"
                />
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-6 text-(--ora-text-secondary)">
              {t("tagline")}
            </p>

            {/* App */}
            <div className="mt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
                {t("downloadApp")}
              </p>

              <a
                href={appStoreUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={t("downloadApp")}
                className="group mt-3 block w-fit"
              >
                <div className="relative aspect-3/2 w-52 overflow-hidden rounded-2xl sm:w-56">
                  <Image
                    src="/images/footer-image/download-image.PNG"
                    alt="Download ORA on the App Store and Google Play"
                    fill
                    sizes="224px"
                    className="object-contain transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transition-none"
                  />
                </div>
              </a>
            </div>
          </div>

          {/* Experiences */}
          <nav
            aria-label={t("footerExperiences")}
            className="lg:col-span-2"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              {t("experiences")}
            </p>

            <div className="mt-5 grid gap-2.5">
              {experienceLinks.map(({ key, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="w-fit text-sm text-(--ora-text-secondary) transition-colors duration-150 hover:text-(--ora-burgundy-dark)"
                >
                  {t(`links.${key}`)}
                </Link>
              ))}
            </div>
          </nav>

          {/* Explore */}
          <nav
            aria-label={t("footerInformation")}
            className="lg:col-span-2"
          >
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              {t("explore")}
            </p>

            <div className="mt-5 grid gap-2.5">
              {exploreLinks.map(({ key, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="w-fit text-sm text-(--ora-text-secondary) transition-colors duration-150 hover:text-(--ora-burgundy-dark)"
                >
                  {t(`links.${key}`)}
                </Link>
              ))}
            </div>
          </nav>

          {/* Visit */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              {t("visit")}
            </p>

            <div className="mt-5 space-y-4 text-sm">
              <div>
                <p className="font-medium text-(--ora-burgundy-dark)">
                  Hydrocarbures
                </p>

                <p className="mt-1 text-(--ora-text-secondary)">
                  Douala, Cameroon
                </p>
              </div>

              <div>
                <p className="font-medium text-(--ora-burgundy-dark)">
                  {t("daily")}
                </p>

                <p className="mt-1 text-(--ora-text-secondary)">
                  6:00 AM – 10:00 PM
                </p>
              </div>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm font-semibold text-(--ora-burgundy-dark) transition-opacity hover:opacity-65"
              >
                {t("getDirections")}

                <ArrowUpRight
                  size={13}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                />
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="lg:col-span-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-(--ora-burgundy)">
              {t("connect")}
            </p>

            {/* Email */}
            <a
              href={`mailto:${email}`}
              className="group mt-5 inline-flex items-center gap-2 text-sm text-(--ora-text-secondary) transition-colors duration-150 hover:text-(--ora-burgundy-dark)"
            >
              <Mail
                size={14}
                strokeWidth={1.5}
                aria-hidden="true"
              />

              {email}

              <ArrowUpRight
                size={12}
                strokeWidth={1.5}
                aria-hidden="true"
                className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
              />
            </a>

            {/* Socials */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${social.label} — ORA Cameroon`}
                  title={social.label}
                  className="flex size-10 items-center justify-center rounded-full border border-(--ora-burgundy-dark)/15 text-(--ora-burgundy-dark) transition-[transform,background-color,color,border-color] duration-200 hover:-translate-y-1 hover:border-(--ora-burgundy-dark) hover:bg-(--ora-burgundy-dark) hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-(--ora-burgundy) focus-visible:ring-offset-2 focus-visible:ring-offset-(--ora-cream) motion-reduce:transition-none"
                >
                  <FontAwesomeIcon
                    icon={social.icon}
                    className="h-4 w-4"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-(--ora-burgundy-dark)/15 pt-5 text-[11px] text-(--ora-burgundy-dark)/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ORA Wellness Cameroon
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>Hydrocarbures, Douala</span>

            <a
              href={`mailto:${email}`}
              className="transition-colors hover:text-(--ora-burgundy-dark)"
            >
              {email}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}