import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import GymHero from "@/component/gym/gym-hero";
import GymIntro from "@/component/gym/gym-intro";
import GymFacilities from "@/component/gym/gym-facilities";
import GymCTA from "@/component/gym/gym-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Fitness",
  description:
    "Explore focused strength, cardio and conditioning at ORA Fitness in Douala.",
  path: "/experiences/gym",
  imagePath: "/images/hero-image/fitness.JPG",
});

export default function GymPage() {
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