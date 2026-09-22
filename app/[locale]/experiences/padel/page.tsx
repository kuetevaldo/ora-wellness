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
  title: "Padel in Douala",
  description:
    "Play padel at ORA in Douala with courts, academy sessions and a welcoming community for adults and children.",
  path: "/experiences/padel",
  imagePath: "/images/hero-image/padel1.webp",
  imageAlt: "ORA Padel in Douala, Cameroon",
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