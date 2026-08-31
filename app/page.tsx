import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import HomeHero from "@/component/home/home-hero-full";
import HomeUtility from "@/component/home/home-utility";
import ExperiencesGrid from "@/component/home/experiences-grid";
import HomeSchedule from "@/component/home/home-schedule";
import HomeMembership from "@/component/home/home-membership";
import HomeLocation from "@/component/home/home-location";
import {
  createPageMetadata,
  serializeJsonLd,
  siteDescription,
  siteName,
  wellnessJsonLd,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: siteName,
  description: siteDescription,
  path: "/",
  absoluteTitle: true,
});

export default function HomePage() {
  return (
    <main aria-label="ORA Wellness homepage">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(wellnessJsonLd) }}
      />
      <Header />
      <HomeHero />
      <HomeUtility />
      <ExperiencesGrid />
      <HomeSchedule />
      <HomeMembership />
      <HomeLocation />
      <Footer />
    </main>
  );
}
