"use client";

import { useMemo, useState } from "react";
import { cafeMenu } from "@/data/cafe-menu";
import Image from "next/image";


const groups = [
  { id: "breakfast", label: "Breakfast" },
  { id: "food", label: "Food" },
  { id: "coffee", label: "Coffee" },
  { id: "wellness", label: "Wellness Drinks" },
];

const breakfastSections = [
  "viennoiserie",
  "sale",
  "oeufs",
  "avoine",
  "yaourt",
];

const foodSections = [
  "salades",
  "sandwichs",
  "tartines",
  "bao",
  "snacks",
  "desserts",
];

const coffeeSections = [
  "cafes-chauds",
  "cafes-glaces",
  "frappuccino",
  "the-infusion",
  "nouvelles-boissons",
  "boissons-froides",
  "complements",
];

const wellnessSections = [
  "protein-shakes",
  "jus-frais",
];

function formatPrice(price: number) {
  return `${new Intl.NumberFormat("fr-FR").format(price)} FCFA`;
}

export default function CafeMenu() {
  const [activeGroup, setActiveGroup] = useState("breakfast");

  const visibleSections = useMemo(() => {
    const sectionGroups: Record<string, string[]> = {
      breakfast: breakfastSections,
      food: foodSections,
      coffee: coffeeSections,
      wellness: wellnessSections,
    };

    const allowed = sectionGroups[activeGroup] ?? [];

    return cafeMenu.filter((section) => allowed.includes(section.id));
  }, [activeGroup]);

  return (

<section
  id="menu"
  className="bg-(--ora-cream) text-(--ora-burgundy-dark)"
>
  <div className="ora-container pt-24 pb-20 md:pt-32 md:pb-28">
    <div className="border-b border-(--ora-burgundy)/15 pb-12">
      <div className="grid items-center gap-4 md:grid-cols-[1fr_auto_1fr] md:gap-6">
        
        {/* Left image */}
        <div className="relative mx-auto aspect-square w-full max-w-64 md:max-w-80">
          <Image
            src="/images/section-image/menu-image2.PNG"
            alt=""
            fill
            sizes="(max-width: 767px) 65vw, 28vw"
            className="object-contain"
          />
        </div>

        {/* Title */}
       <div className="text-center">
  <div className="relative mx-auto h-12 w-32 sm:h-14 sm:w-36 md:h-20 md:w-48">
    <Image
      src="/images/logos/ora-cafe.png"
      alt="ORA Café"
      fill
      sizes="160px"
      className="object-contain"
    />
  </div>

  <h2 className="font-display mt-5 text-4xl leading-[0.98] tracking-[-0.04em] sm:text-5xl md:text-6xl lg:text-7xl">
    What&apos;s on the menu.
  </h2>
</div>

        {/* Right image */}
        <div className="relative mx-auto aspect-square w-full max-w-64 md:max-w-80">
          <Image
            src="/images/section-image/menu-image1.PNG"
            alt=""
            fill
            sizes="(max-width: 767px) 65vw, 28vw"
            className="object-contain"
          />
        </div>

      </div>
    </div>
        <div
          className="sticky top-18 z-30 -mx-5 overflow-x-auto overscroll-x-contain border-b border-(--ora-border) bg-(--ora-cream)/95 px-5 py-5 backdrop-blur md:-mx-8 md:px-8 lg:-mx-12 lg:px-12"
          aria-label="Café menu sections"
        >
          <div className="mx-auto flex w-max min-w-full max-w-375 snap-x snap-mandatory scroll-px-5 gap-2 whitespace-nowrap">
            {groups.map((group) => {
              const active = activeGroup === group.id;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveGroup(group.id)}
                  aria-pressed={active}
                  className={`min-h-11 shrink-0 snap-start rounded-full px-5 py-2.5 text-sm transition-[color,background-color,border-color] duration-180 ${
                    active
                      ? "bg-(--ora-burgundy) text-white"
                      : "border border-(--ora-burgundy)/20 text-(--ora-burgundy) hover:border-(--ora-burgundy)"
                  }`}
                >
                  {group.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-16 space-y-24">
          {visibleSections.map((section, sectionIndex) => (
            <section
              key={section.id}
              className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr]"
            >
              <div>
                {section.eyebrow && (
                  <p className="mb-3 text-xs uppercase tracking-[0.28em] text-(--ora-muted)">
                    {section.eyebrow}
                  </p>
                )}

                <div className="flex items-start gap-5">
                  <span className="pt-2 text-xs text-(--ora-pink)">
                    {String(sectionIndex + 1).padStart(2, "0")}
                  </span>

                  <h3 className="font-display text-3xl tracking-[-0.03em] sm:text-4xl">
                    {section.title}
                  </h3>
                </div>
              </div>

              <div className="divide-y divide-(--ora-burgundy)/10 border-t border-(--ora-burgundy)/20">
                {section.items.map((item) => (
                  <article
                    key={`${section.id}-${item.name}`}
                    className="grid gap-3 py-6 sm:grid-cols-[1fr_auto] sm:gap-8"
                  >
                    <div>
                      <h4 className="text-base font-medium">
                        {item.name}
                      </h4>

                      {item.description && (
                        <p className="mt-2 max-w-2xl text-sm leading-6 text-(--ora-muted)">
                          {item.description}
                        </p>
                      )}
                    </div>

                    <p className="text-sm font-medium text-(--ora-burgundy) sm:text-right">
                      {formatPrice(item.price)}
                    </p>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
