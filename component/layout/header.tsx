"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, Phone, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { bookingHref, oraBookingPhone } from "@/lib/contact";

const mainNavigation = [
  { label: "Café", href: "/cafe" },
  { label: "Fitness", href: "/experiences/gym" },
  { label: "Padel", href: "/experiences/padel" },
  { label: "Pilates", href: "/experiences/pilates" },
  { label: "Yoga", href: "/experiences/yoga" },
  { label: "Studio", href: "/experiences/studio" },
];

const secondaryNavigation = [
  { label: "Schedule", href: "/schedule" },
  { label: "Memberships", href: "/memberships" },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
];

const headerLogos: Record<string, { src: string; alt: string }> = {
  "/": { src: "/images/logos/ora-wellness.png", alt: "ORA Wellness" },
  "/cafe": { src: "/images/logos/ora-cafe.png", alt: "ORA Café" },
  "/experiences/gym": {
    src: "/images/logos/ora-fitness.png",
    alt: "ORA Fitness",
  },
  "/experiences/padel": {
    src: "/images/logos/ora-padel.png",
    alt: "ORA Padel",
  },
  "/experiences/pilates": {
    src: "/images/logos/ora-pilates.png",
    alt: "ORA Pilates",
  },
  "/experiences/studio": {
    src: "/images/logos/ora-studio.png",
    alt: "ORA Studio",
  },
};

function HeaderBrand({
  logo,
  priority = false,
}: {
  logo?: { src: string; alt: string };
  priority?: boolean;
}) {
  if (!logo) {
    return (
      <span className="flex h-12 items-center text-[1.35rem] font-semibold tracking-[0.2em] text-(--ora-burgundy)">
        ORA
      </span>
    );
  }

  return (
    <span className="relative block h-12 w-24 sm:h-13 sm:w-28">
      <Image
        src={logo.src}
        alt={logo.alt}
        fill
        priority={priority}
        sizes="(max-width: 639px) 96px, 112px"
        className="object-contain object-left"
      />
    </span>
  );
}

function isActiveRoute(pathname: string, href: string) {
  if (href === "/") return pathname === href;
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const headerLogo = headerLogos[pathname];
  const [mobileOpen, setMobileOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const topSentinelRef = useRef<HTMLSpanElement>(null);
  const moreRef = useRef<HTMLDivElement>(null);
  const moreButtonRef = useRef<HTMLButtonElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const mobilePanelRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sentinel = topSentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 },
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!moreOpen) return;

    function handlePointerDown(event: PointerEvent) {
      if (!moreRef.current?.contains(event.target as Node)) {
        setMoreOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMoreOpen(false);
        moreButtonRef.current?.focus();
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [moreOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const panel = mobilePanelRef.current;
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const menuButton = menuButtonRef.current;
    document.body.dataset.navigationOpen = "true";
    const focusTimer = window.setTimeout(() => closeButtonRef.current?.focus(), 0);

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMobileOpen(false);
        return;
      }

      if (event.key !== "Tab" || !panel) return;

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      delete document.body.dataset.navigationOpen;
      document.removeEventListener("keydown", handleKeyDown);
      (previouslyFocused ?? menuButton)?.focus();
    };
  }, [mobileOpen]);

  const secondaryActive = secondaryNavigation.some((item) =>
    isActiveRoute(pathname, item.href),
  );

  return (
    <>
      <span ref={topSentinelRef} className="absolute left-0 top-0 h-px w-px" />

      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? "border-(--ora-border) bg-[rgba(246,243,238,0.96)] shadow-[0_12px_36px_rgba(99,51,65,0.08)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="ora-container flex h-18 items-center justify-between">
          <Link
            href="/"
            className="block shrink-0 rounded-sm"
            aria-label={headerLogo ? `${headerLogo.alt}, home` : "ORA, home"}
          >
            <HeaderBrand logo={headerLogo} priority />
          </Link>

          <nav aria-label="Primary navigation" className="hidden items-center gap-5 xl:flex">
            {mainNavigation.map((item) => {
              const active = isActiveRoute(pathname, item.href);

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`flex min-h-11 items-center border-b-2 px-0.5 text-[0.8125rem] font-medium transition-[color,border-color] duration-180 ${
                    active
                      ? "border-(--ora-burgundy) text-(--ora-burgundy-dark)"
                      : "border-transparent text-(--ora-text-secondary) hover:text-(--ora-burgundy)"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <div ref={moreRef} className="relative">
              <button
                ref={moreButtonRef}
                type="button"
                aria-expanded={moreOpen}
                aria-controls="ora-more-navigation"
                onClick={() => setMoreOpen((open) => !open)}
                className={`flex min-h-11 items-center gap-1.5 border-b-2 px-0.5 text-[0.8125rem] font-medium transition-[color,border-color] duration-180 ${
                  secondaryActive || moreOpen
                    ? "border-(--ora-burgundy) text-(--ora-burgundy-dark)"
                    : "border-transparent text-(--ora-text-secondary) hover:text-(--ora-burgundy)"
                }`}
              >
                More
                <ChevronDown
                  size={15}
                  strokeWidth={1.5}
                  aria-hidden="true"
                  className={`transition-transform duration-200 ease-(--ora-ease-out) ${
                    moreOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                id="ora-more-navigation"
                className={`absolute right-0 top-[calc(100%+0.5rem)] w-52 origin-top-right rounded-(--ora-radius-panel) border border-(--ora-border) bg-(--ora-surface-raised) p-2 shadow-[0_24px_60px_rgba(99,51,65,0.14)] transition-[opacity,transform] duration-200 ease-(--ora-ease-out) ${
                  moreOpen
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"
                }`}
                aria-hidden={!moreOpen}
              >
                {secondaryNavigation.map((item) => {
                  const active = isActiveRoute(pathname, item.href);

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      tabIndex={moreOpen ? 0 : -1}
                      aria-current={active ? "page" : undefined}
                      onClick={() => setMoreOpen(false)}
                      className={`flex min-h-11 items-center rounded-xl px-3 text-[0.8125rem] transition-colors duration-180 ${
                        active
                          ? "bg-(--ora-pink-light)/55 font-semibold text-(--ora-burgundy-dark)"
                          : "text-(--ora-text-secondary) hover:bg-(--ora-pink-light)/35 hover:text-(--ora-burgundy)"
                      }`}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            </div>

            <Link href={bookingHref} className="ora-button ora-button-primary ml-1">
              Book a visit
            </Link>
          </nav>

          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Open navigation"
            aria-expanded={mobileOpen}
            aria-controls="ora-mobile-navigation"
            onClick={() => setMobileOpen(true)}
            className="flex size-11 items-center justify-center rounded-full border border-(--ora-border-strong) text-(--ora-burgundy) transition-colors duration-180 hover:bg-(--ora-pink-light)/40 xl:hidden"
          >
            <Menu size={22} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-100 overflow-hidden xl:hidden ${
          mobileOpen ? "pointer-events-auto" : "hidden"
        }`}
        aria-hidden={!mobileOpen}
        inert={!mobileOpen ? true : undefined}
      >
        <div
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
          className={`ora-mobile-backdrop absolute inset-0 bg-(--ora-burgundy-dark)/35 transition-opacity duration-180 ${
            mobileOpen ? "opacity-100" : "opacity-0"
          }`}
        />

        <aside
          ref={mobilePanelRef}
          id="ora-mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`ora-mobile-drawer absolute inset-y-0 right-0 flex w-full max-w-110 flex-col bg-(--ora-cream) shadow-[-24px_0_70px_rgba(99,51,65,0.15)] transition-transform duration-320 ease-(--ora-ease-drawer) ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-18 shrink-0 items-center justify-between border-b border-(--ora-border) px-5 sm:px-7">
            <Link
              href="/"
              onClick={() => setMobileOpen(false)}
              className="block rounded-sm"
              aria-label={headerLogo ? `${headerLogo.alt}, home` : "ORA, home"}
            >
              <HeaderBrand logo={headerLogo} />
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation"
              onClick={() => setMobileOpen(false)}
              className="flex size-11 items-center justify-center rounded-full border border-(--ora-border-strong) text-(--ora-burgundy)"
            >
              <X size={22} strokeWidth={1.5} aria-hidden="true" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col overflow-y-auto px-5 pb-7 pt-7 sm:px-7" aria-label="Mobile navigation">
            <p className="mb-3 text-xs font-semibold text-(--ora-text-secondary)">
              Experiences
            </p>

            <div className="grid grid-cols-2 gap-x-3 border-t border-(--ora-border) sm:gap-x-5">
              {mainNavigation.map((item) => {
                const active = isActiveRoute(pathname, item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`font-display flex min-h-15 items-center border-b border-(--ora-border) px-0.5 text-[clamp(1.1rem,6vw,1.45rem)] leading-none transition-colors duration-180 ${
                      active
                        ? "font-medium text-(--ora-burgundy)"
                        : "text-(--ora-burgundy-dark)"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <p className="mb-3 mt-8 text-xs font-semibold text-(--ora-text-secondary)">
              Explore
            </p>

            <div className="grid border-t border-(--ora-border)">
              {secondaryNavigation.map((item) => {
                const active = isActiveRoute(pathname, item.href);

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-12 items-center border-b border-(--ora-border) text-[0.9375rem] ${
                      active
                        ? "font-semibold text-(--ora-burgundy)"
                        : "text-(--ora-text-secondary)"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <div className="mt-auto pt-8">
              <Link
                href={bookingHref}
                onClick={() => setMobileOpen(false)}
                className="ora-button ora-button-primary w-full"
              >
                Book your visit
              </Link>
              <p className="mt-5 text-xs text-(--ora-text-secondary)">
                Hydrocarbures, Douala
              </p>
            </div>
          </nav>
        </aside>
      </div>

      <nav
        aria-label="Quick booking actions"
        className={`fixed inset-x-4 bottom-4 z-40 flex items-center gap-2 rounded-full border border-white/65 bg-[rgba(246,243,238,0.94)] p-1.5 shadow-[0_18px_55px_rgba(48,42,43,0.2)] backdrop-blur-md transition-[opacity,transform] duration-200 md:hidden ${
          mobileOpen
            ? "pointer-events-none translate-y-3 opacity-0"
            : "translate-y-0 opacity-100"
        }`}
      >
        <Link
          href={bookingHref}
          className="ora-button ora-button-primary min-w-0 flex-1"
        >
          Book your visit
        </Link>
        <a
          href={oraBookingPhone.href}
          aria-label={`Call ORA at ${oraBookingPhone.display}`}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-(--ora-border-strong) text-(--ora-burgundy-dark)"
        >
          <Phone size={18} strokeWidth={1.6} aria-hidden="true" />
        </a>
      </nav>
    </>
  );
}
