import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";

import HomeHero from "@/component/home/home-hero-full";
import HomeUtility from "@/component/home/home-utility";
import ExperiencesGrid from "@/component/home/experiences-grid";
import HomeSchedule from "@/component/home/home-schedule";
import HomeLocation from "@/component/home/home-location";
import HomeActionBlock from "@/component/home/home-action-block";

import {
  createPageMetadata,
  serializeJsonLd,
  wellnessJsonLd,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title:
    "ORA Wellness Douala | Fitness, Padel, Pilates, Yoga & Café",
  description:
    "Discover ORA Wellness in Douala: Fitness, Padel, Pilates, Yoga, Studio and Café in one premium wellness destination at Hydrocarbures.",
  path: "/",
  imagePath: "/images/hero-image/ora-building-hero.jpg",
  imageAlt: "ORA Wellness destination in Douala, Cameroon",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <main aria-label="ORA Wellness homepage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(wellnessJsonLd),
        }}
      />

      <Header />
      <HomeHero />
      <HomeUtility />
      <ExperiencesGrid />
      <HomeSchedule />
      <HomeLocation />
      <HomeActionBlock />
      <Footer />
    </main>
  );
}