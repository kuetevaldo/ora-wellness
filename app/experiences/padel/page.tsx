import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import PadelHero from "@/component/padel/padel-hero";
import PadelIntro from "@/component/padel/padel-intro";
import PadelExperience from "@/component/padel/padel-experience";
import PadelCTA from "@/component/padel/padel-cta";
import RelatedExperiences from "@/component/shared/related-experiences";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Padel",
  description:
    "Explore social, energetic Padel experiences that bring competition, movement and community together at ORA in Douala.",
  path: "/experiences/padel",
  imagePath: "/images/IMG_5268.JPG",
});

export default function PadelPage() {
  return (
    <main>
      <Header />
      <PadelHero />
      <PadelIntro />
      <PadelExperience />
      <RelatedExperiences
        title="Keep the momentum going beyond the court."
        tone="cream"
        experiences={[
          {
            name: "Café",
            href: "/cafe",
            note: "Settle in for coffee, food or something fresh after play.",
          },
          {
            name: "Fitness",
            href: "/experiences/gym",
            note: "Build strength and conditioning with focused training.",
          },
        ]}
      />
      <PadelCTA />
      <Footer />
    </main>
  );
}
