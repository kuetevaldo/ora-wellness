import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import GymHero from "@/component/gym/gym-hero";
import GymIntro from "@/component/gym/gym-intro";
import GymFacilities from "@/component/gym/gym-facilities";
import GymCTA from "@/component/gym/gym-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Fitness & Gym in Douala",
  description:
    "Train at ORA Fitness in Douala with strength, cardio, functional training and coaching in a premium wellness environment.",
  path: "/experiences/gym",
  imagePath: "/images/hero-image/fitness.jpg",
  imageAlt: "ORA Fitness gym in Douala, Cameroon",
});

import { setRequestLocale } from "next-intl/server";

export default async function GymPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return (
    <main>
      <Header />

      <GymHero />

      <GymIntro />

      <GymFacilities />

      <GymCTA />

      <Footer />
    </main>
  );
}