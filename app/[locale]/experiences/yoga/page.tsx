import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";

import YogaHero from "@/component/yoga/yoga-hero";
import YogaIntro from "@/component/yoga/yoga-intro";
import YogaExperience from "@/component/yoga/yoga-experience";
import YogaProgramme from "@/component/yoga/yoga-programme";
import YogaCTA from "@/component/yoga/yoga-cta";

import { createPageMetadata } from "@/lib/seo";

import { setRequestLocale } from "next-intl/server";

export const metadata = createPageMetadata({
  title: "Yoga Classes in Douala",
  description:
    "Practice yoga at ORA in Douala with guided sessions designed around breath, mobility, balance and mindful movement.",
  path: "/experiences/yoga",
  imagePath: "/images/hero-image/yoga1.jpg",
  imageAlt: "ORA Yoga in Douala, Cameroon",
});

export default async function YogaPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <Header />

      <YogaHero />

      <YogaIntro />

      <YogaExperience />

      <YogaProgramme />

      <YogaCTA />

      <Footer />
    </main>
  );
}