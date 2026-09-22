import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";

import PilatesHero from "@/component/pilates/pilates-hero";
import PilatesIntro from "@/component/pilates/pilates-intro";
import PilatesExperience from "@/component/pilates/pilates-experience";
import PilatesProgramme from "@/component/pilates/pilates-programme";
import PilatesLifestyle from "@/component/pilates/pilates-lifestyle";
import PilatesCTA from "@/component/pilates/pilates-cta";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Pilates in Douala",
  description:
    "Discover Pilates at ORA in Douala with guided sessions focused on control, strength, mobility and intentional movement.",
  path: "/experiences/pilates",
  imagePath: "/images/hero-image/pilates.jpg",
  imageAlt: "ORA Pilates in Douala, Cameroon",
});

export default function PilatesPage() {
  return (
    <main>
      <Header />

      <PilatesHero />

      <PilatesIntro />

      <PilatesExperience />

      <PilatesProgramme />

      <PilatesLifestyle />

      <PilatesCTA />

      <Footer />
    </main>
  );
}