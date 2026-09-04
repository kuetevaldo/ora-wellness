import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import PadelHero from "@/component/padel/padel-hero";
import PadelIntro from "@/component/padel/padel-intro";
import PadelExperience from "@/component/padel/padel-experience";
import PadelAcademies from "@/component/padel/padel-academies";
import PadelCompetition from "@/component/padel/padel-competition";
import PadelCTA from "@/component/padel/padel-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Padel",
  description:
    "Explore ORA Padel in Douala, including adult and kids academies, weekly training, social play and organised tournaments.",
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

      <PadelAcademies />

      <PadelCompetition />

      <PadelCTA />

      <Footer />
    </main>
  );
}