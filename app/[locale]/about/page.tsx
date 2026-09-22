import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import AboutHero from "@/component/about/about-hero";
import AboutPhilosophy from "@/component/about/about-philosophy";
import AboutExperiences from "@/component/about/about-experiences";
import AboutCTA from "@/component/about/about-cta";
import { createPageMetadata } from "@/lib/seo";

import { setRequestLocale } from "next-intl/server";

export const metadata = createPageMetadata({
  title: "About ORA Wellness",
  description:
    "Learn about ORA Wellness, a premium wellness and lifestyle destination in Douala bringing together Fitness, Padel, Pilates, Yoga, Studio and Café.",
  path: "/about",
  imagePath: "/images/hero-image/ora-building-hero.jpg",
  imageAlt: "ORA Wellness building in Douala, Cameroon",
});

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main>
      <Header />
      <AboutHero />
      <AboutPhilosophy />
      <AboutExperiences />
      <AboutCTA />
      <Footer />
    </main>
  );
}
