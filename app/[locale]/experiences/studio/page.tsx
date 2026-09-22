import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";

import StudioHero from "@/component/studio/studio-hero";
import StudioIntro from "@/component/studio/studio-intro";
import StudioClasses from "@/component/studio/studio-classes";
import StudioAtmosphere from "@/component/studio/studio-atmosphere";
import DanceAcademy from "@/component/studio/dance-academy";
import StudioCTA from "@/component/studio/studio-cta";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Group Fitness & Studio Classes in Douala",
  description:
    "Join ORA Studio in Douala for group fitness, movement and dance experiences in an energetic community setting.",
  path: "/experiences/studio",
  imagePath: "/images/section-image/studio-workout.JPG",
  imageAlt: "ORA Studio group fitness in Douala, Cameroon",
});

export default function StudioPage() {
  return (
    <main>
      <Header />

      <StudioHero />

      <StudioIntro />

      <StudioClasses />

      <StudioAtmosphere />

      <DanceAcademy />

      <StudioCTA />

      <Footer />
    </main>
  );
}