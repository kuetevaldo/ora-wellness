import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import YogaHero from "@/component/yoga/yoga-hero";
import YogaIntro from "@/component/yoga/yoga-intro";
import YogaExperience from "@/component/yoga/yoga-experience";
import YogaCTA from "@/component/yoga/yoga-cta";
import RelatedExperiences from "@/component/shared/related-experiences";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Yoga",
  description:
    "Discover movement, breath and balance designed to help you reset at ORA Yoga in Douala.",
  path: "/experiences/yoga",
  imagePath: "/images/hero-image/yoga1.jpg",
});

export default function YogaPage() {
  return (
    <main>
      <Header />
      <YogaHero />
      <YogaIntro />
      <YogaExperience />
      <RelatedExperiences
        title="Stay with a slower, more considered rhythm."
        tone="cream"
        experiences={[
          {
            name: "Pilates",
            href: "/experiences/pilates",
            note: "Develop control and strength through precise reformer movement.",
          },
          {
            name: "Café",
            href: "/cafe",
            note: "Continue the pause over coffee, food or something fresh.",
          },
        ]}
      />
      <YogaCTA />
      <Footer />
    </main>
  );
}
