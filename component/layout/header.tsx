"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowUpRight,
  ChevronDown,
  Phone,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

import {
  bookingHref,
  oraBookingPhone,
} from "@/lib/contact";

const mainNavigation = [
  {
    number: "01",
    label: "Café",
    href: "/cafe",
  },
  {
    number: "02",
    label: "Fitness",
    href: "/experiences/gym",
  },
  {
    number: "03",
    label: "Padel",
    href: "/experiences/padel",
  },
  {
    number: "04",
    label: "Pilates",
    href: "/experiences/pilates",
  },
  {
    number: "05",
    label: "Yoga",
    href: "/experiences/yoga",
  },
  {
    number: "06",
    label: "Studio",
    href: "/experiences/studio",
  },
];

const secondaryNavigation = [
  {
    label: "Schedule",
    href: "/schedule",
  },
  {
    label: "Memberships",
    href: "/memberships",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

const headerLogos: Record<
  string,
  {
    src: string;
    alt: string;
  }
> = {
  "/": {
    src: "/images/logos/ora-wellness.png",
    alt: "ORA Wellness",
  },

  "/cafe": {
    src: "/images/logos/ora-cafe.png",
    alt: "ORA Café",
  },

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
  logo: {
    src: string;
    alt: string;
  };
  priority?: boolean;
}) {
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

function isActiveRoute(
  pathname: string,
  href: string
) {
  if (href === "/") {
    return pathname === "/";
  }

  return (
    pathname === href ||
    pathname.startsWith(`${href}/`)
  );
}

export default function Header() {
  const pathname = usePathname();

  const defaultLogo = headerLogos["/"];

  const headerLogo =
    headerLogos[pathname] ?? defaultLogo;

  const [mobileOpen, setMobileOpen] =
    useState(false);

  const [moreOpen, setMoreOpen] =
    useState(false);

  const [scrolled, setScrolled] =
    useState(false);

  const topSentinelRef =
    useRef<HTMLSpanElement>(null);

  const moreRef =
    useRef<HTMLDivElement>(null);

  const moreButtonRef =
    useRef<HTMLButtonElement>(null);

  const menuButtonRef =
    useRef<HTMLButtonElement>(null);

  const closeButtonRef =
    useRef<HTMLButtonElement>(null);

  const mobilePanelRef =
    useRef<HTMLElement>(null);

  useEffect(() => {
    const sentinel =
      topSentinelRef.current;

    if (!sentinel) return;

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          setScrolled(
            !entry.isIntersecting
          );
        },
        {
          threshold: 0,
        }
      );

    observer.observe(sentinel);

    return () =>
      observer.disconnect();
  }, []);

  useEffect(() => {
    if (!moreOpen) return;

    function handlePointerDown(
      event: PointerEvent
    ) {
      if (
        !moreRef.current?.contains(
          event.target as Node
        )
      ) {
        setMoreOpen(false);
      }
    }

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (
        event.key === "Escape"
      ) {
        setMoreOpen(false);

        moreButtonRef.current?.focus();
      }
    }

    document.addEventListener(
      "pointerdown",
      handlePointerDown
    );

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "pointerdown",
        handlePointerDown
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [moreOpen]);

  useEffect(() => {
    if (!mobileOpen) return;

    const panel =
      mobilePanelRef.current;

    const previouslyFocused =
      document.activeElement as
        | HTMLElement
        | null;

    const menuButton =
      menuButtonRef.current;

    document.body.dataset.navigationOpen =
      "true";

    const focusTimer =
      window.setTimeout(() => {
        closeButtonRef.current?.focus();
      }, 0);

    function handleKeyDown(
      event: KeyboardEvent
    ) {
      if (
        event.key === "Escape"
      ) {
        setMobileOpen(false);
        return;
      }

      if (
        event.key !== "Tab" ||
        !panel
      ) {
        return;
      }

      const focusable =
        Array.from(
          panel.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
          )
        );

      if (
        focusable.length === 0
      ) {
        return;
      }

      const first =
        focusable[0];

      const last =
        focusable[
          focusable.length - 1
        ];

      if (
        event.shiftKey &&
        document.activeElement ===
          first
      ) {
        event.preventDefault();

        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement ===
          last
      ) {
        event.preventDefault();

        first.focus();
      }
    }

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      window.clearTimeout(
        focusTimer
      );

      delete document.body.dataset
        .navigationOpen;

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      (
        previouslyFocused ??
        menuButton
      )?.focus();
    };
  }, [mobileOpen]);

  const secondaryActive =
    secondaryNavigation.some(
      (item) =>
        isActiveRoute(
          pathname,
          item.href
        )
    );

  return (
    <>
      <span
        ref={topSentinelRef}
        className="absolute left-0 top-0 h-px w-px"
      />

      {/* HEADER */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200 ${
          scrolled
            ? "border-(--ora-border) bg-[rgba(246,243,238,0.96)] shadow-[0_12px_36px_rgba(99,51,65,0.08)] backdrop-blur-md"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="ora-container flex h-18 items-center justify-between">
          {/* Brand */}
          <Link
            href="/"
            className="block shrink-0 rounded-sm"
            aria-label={`${headerLogo.alt}, home`}
          >
            <HeaderBrand
              logo={headerLogo}
              priority
            />
          </Link>

          {/* DESKTOP */}
          <nav
            aria-label="Primary navigation"
            className="hidden items-center gap-6 xl:flex"
          >
            {mainNavigation.map(
              (item) => {
                const active =
                  isActiveRoute(
                    pathname,
                    item.href
                  );

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={
                      active
                        ? "page"
                        : undefined
                    }
                    className={`flex min-h-11 items-center border-b-2 px-0.5 text-[0.9rem] font-semibold tracking-[-0.01em] transition-[color,border-color] duration-180 ${
                      active
                        ? "border-(--ora-burgundy) text-(--ora-burgundy-dark)"
                        : "border-transparent text-(--ora-text-secondary) hover:text-(--ora-burgundy)"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              }
            )}

            {/* MORE */}
            <div
              ref={moreRef}
              className="relative"
            >
              <button
                ref={moreButtonRef}
                type="button"
                aria-expanded={
                  moreOpen
                }
                aria-controls="ora-more-navigation"
                aria-haspopup="true"
                onClick={() =>
                  setMoreOpen(
                    (open) =>
                      !open
                  )
                }
                className={`flex min-h-11 items-center gap-1.5 border-b-2 px-0.5 text-[0.9rem] font-semibold tracking-[-0.01em] transition-[color,border-color] duration-180 ${
                  secondaryActive ||
                  moreOpen
                    ? "border-(--ora-burgundy) text-(--ora-burgundy-dark)"
                    : "border-transparent text-(--ora-text-secondary) hover:text-(--ora-burgundy)"
                }`}
              >
                More

                <ChevronDown
                  size={15}
                  strokeWidth={1.7}
                  aria-hidden="true"
                  className={`transition-transform duration-200 ease-(--ora-ease-out) ${
                    moreOpen
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>

              <div
                id="ora-more-navigation"
                role="menu"
                aria-hidden={
                  !moreOpen
                }
                className={`absolute right-0 top-[calc(100%+0.65rem)] w-56 origin-top-right rounded-[1.35rem] border border-(--ora-border) bg-(--ora-surface-raised) p-2.5 shadow-[0_24px_60px_rgba(99,51,65,0.14)] transition-[opacity,transform] duration-200 ease-(--ora-ease-out) ${
                  moreOpen
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none -translate-y-1 scale-[0.98] opacity-0"
                }`}
              >
                {secondaryNavigation.map(
                  (item) => {
                    const active =
                      isActiveRoute(
                        pathname,
                        item.href
                      );

                    return (
                      <Link
                        key={
                          item.label
                        }
                        href={
                          item.href
                        }
                        role="menuitem"
                        tabIndex={
                          moreOpen
                            ? 0
                            : -1
                        }
                        aria-current={
                          active
                            ? "page"
                            : undefined
                        }
                        onClick={() =>
                          setMoreOpen(
                            false
                          )
                        }
                        className={`flex min-h-11 items-center justify-between rounded-xl px-3.5 text-sm font-medium transition-colors duration-180 ${
                          active
                            ? "bg-(--ora-pink-light)/60 text-(--ora-burgundy-dark)"
                            : "text-(--ora-text-secondary) hover:bg-(--ora-pink-light)/35 hover:text-(--ora-burgundy)"
                        }`}
                      >
                        {
                          item.label
                        }

                        <ArrowUpRight
                          size={14}
                          strokeWidth={
                            1.5
                          }
                          aria-hidden="true"
                          className="opacity-45"
                        />
                      </Link>
                    );
                  }
                )}
              </div>
            </div>

            <Link
              href={bookingHref}
              className="ora-button ora-button-primary ml-1"
            >
              Book a visit
            </Link>
          </nav>

          {/* PREMIUM MOBILE TOGGLE */}
          <button
            ref={menuButtonRef}
            type="button"
            aria-label="Open navigation"
            aria-expanded={
              mobileOpen
            }
            aria-controls="ora-mobile-navigation"
            onClick={() =>
              setMobileOpen(true)
            }
            className="group flex min-h-11 items-center gap-3 rounded-full border border-(--ora-burgundy-dark)/15 bg-(--ora-cream)/75 px-4 text-(--ora-burgundy-dark) shadow-[0_8px_30px_rgba(99,51,65,0.06)] backdrop-blur-md transition-[background-color,border-color,transform] duration-180 active:scale-[0.97] xl:hidden"
          >
            <span className="text-[0.72rem] font-semibold uppercase tracking-[0.14em]">
              Menu
            </span>

            <span
              aria-hidden="true"
              className="relative block h-3.5 w-5"
            >
              <span className="absolute left-0 top-0.75 h-px w-5 bg-current transition-transform duration-200" />

              <span className="absolute bottom-0.75 right-0 h-px w-3.5 bg-current transition-[width,transform] duration-200 group-hover:w-5" />
            </span>
          </button>
        </div>
      </header>

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 z-100 overflow-hidden xl:hidden ${
          mobileOpen
            ? "pointer-events-auto"
            : "pointer-events-none"
        }`}
        aria-hidden={
          !mobileOpen
        }
        inert={
          !mobileOpen
            ? true
            : undefined
        }
      >
        {/* backdrop */}
        <div
          aria-hidden="true"
          onClick={() =>
            setMobileOpen(false)
          }
          className={`absolute inset-0 bg-(--ora-burgundy-dark)/45 backdrop-blur-[2px] transition-opacity duration-300 ${
            mobileOpen
              ? "opacity-100"
              : "opacity-0"
          }`}
        />

        {/* DRAWER */}
        <aside
          ref={mobilePanelRef}
          id="ora-mobile-navigation"
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute inset-y-0 right-0 flex w-[min(92vw,30rem)] flex-col overflow-hidden rounded-l-4xl bg-(--ora-cream) shadow-[-30px_0_80px_rgba(48,42,43,0.22)] transition-transform duration-350 ease-(--ora-ease-drawer) ${
            mobileOpen
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          {/* Drawer top */}
          <div className="flex h-20 shrink-0 items-center justify-between border-b border-(--ora-border) px-6 sm:px-8">
            <Link
              href="/"
              onClick={() =>
                setMobileOpen(false)
              }
              aria-label={`${headerLogo.alt}, home`}
            >
              <HeaderBrand
                logo={headerLogo}
              />
            </Link>

            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close navigation"
              onClick={() =>
                setMobileOpen(false)
              }
              className="flex size-11 items-center justify-center rounded-full border border-(--ora-burgundy-dark)/15 bg-white/45 text-(--ora-burgundy-dark) transition-[background-color,transform] duration-180 hover:bg-white active:scale-[0.96]"
            >
              <X
                size={19}
                strokeWidth={1.5}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* Drawer navigation */}
          <nav
            className="flex flex-1 flex-col overflow-y-auto px-6 pb-7 pt-7 sm:px-8"
            aria-label="Mobile navigation"
          >
            <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-(--ora-text-secondary)">
              Experiences
            </p>

            {/* Main experiences */}
            <div className="border-t border-(--ora-burgundy-dark)/15">
              {mainNavigation.map(
                (item) => {
                  const active =
                    isActiveRoute(
                      pathname,
                      item.href
                    );

                  return (
                    <Link
                      key={
                        item.label
                      }
                      href={
                        item.href
                      }
                      aria-current={
                        active
                          ? "page"
                          : undefined
                      }
                      onClick={() =>
                        setMobileOpen(
                          false
                        )
                      }
                      className="group flex min-h-18 items-center justify-between gap-5 border-b border-(--ora-burgundy-dark)/12"
                    >
                      <div className="flex items-baseline gap-4">
                        <span
                          className={`text-[0.62rem] font-semibold tracking-[0.14em] ${
                            active
                              ? "text-(--ora-burgundy)"
                              : "text-(--ora-text-secondary)"
                          }`}
                        >
                          {
                            item.number
                          }
                        </span>

                        <span
                          className={`font-display text-[2rem] leading-none tracking-[-0.04em] transition-colors duration-180 ${
                            active
                              ? "text-(--ora-burgundy)"
                              : "text-(--ora-burgundy-dark) group-hover:text-(--ora-burgundy)"
                          }`}
                        >
                          {
                            item.label
                          }
                        </span>
                      </div>

                      <ArrowUpRight
                        size={17}
                        strokeWidth={
                          1.4
                        }
                        aria-hidden="true"
                        className={`transition-[transform,opacity] duration-180 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${
                          active
                            ? "text-(--ora-burgundy) opacity-100"
                            : "opacity-35"
                        }`}
                      />
                    </Link>
                  );
                }
              )}
            </div>

            {/* Explore */}
            <div className="mt-9">
              <p className="mb-4 text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-(--ora-text-secondary)">
                Explore ORA
              </p>

              <div className="grid grid-cols-2 gap-x-5 border-t border-(--ora-burgundy-dark)/15">
                {secondaryNavigation.map(
                  (item) => {
                    const active =
                      isActiveRoute(
                        pathname,
                        item.href
                      );

                    return (
                      <Link
                        key={
                          item.label
                        }
                        href={
                          item.href
                        }
                        aria-current={
                          active
                            ? "page"
                            : undefined
                        }
                        onClick={() =>
                          setMobileOpen(
                            false
                          )
                        }
                        className={`flex min-h-13 items-center border-b border-(--ora-burgundy-dark)/12 text-sm font-semibold ${
                          active
                            ? "text-(--ora-burgundy)"
                            : "text-(--ora-text-secondary)"
                        }`}
                      >
                        {
                          item.label
                        }
                      </Link>
                    );
                  }
                )}
              </div>
            </div>

            {/* Bottom utility */}
            <div className="mt-auto pt-10">
              <div className="rounded-3xl bg-(--ora-burgundy-dark) p-5 text-white">
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-white/55">
                  Visit ORA
                </p>

                <p className="font-display mt-3 text-2xl tracking-[-0.03em]">
                  Hydrocarbures,
                  <br />
                  Douala
                </p>

                <div className="mt-5 flex items-center gap-2">
                  <Link
                    href={
                      bookingHref
                    }
                    onClick={() =>
                      setMobileOpen(
                        false
                      )
                    }
                    className="ora-button ora-button-light min-w-0 flex-1"
                  >
                    Plan your visit
                  </Link>

                  <a
                    href={
                      oraBookingPhone.href
                    }
                    aria-label={`Call ORA at ${oraBookingPhone.display}`}
                    className="flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:bg-white/10"
                  >
                    <Phone
                      size={17}
                      strokeWidth={
                        1.5
                      }
                      aria-hidden="true"
                    />
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </aside>
      </div>

      {/* MOBILE QUICK CTA */}
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
          Plan your visit
        </Link>

        <a
          href={
            oraBookingPhone.href
          }
          aria-label={`Call ORA at ${oraBookingPhone.display}`}
          className="flex size-11 shrink-0 items-center justify-center rounded-full border border-(--ora-border-strong) text-(--ora-burgundy-dark)"
        >
          <Phone
            size={18}
            strokeWidth={1.6}
            aria-hidden="true"
          />
        </a>
      </nav>
    </>
  );
}