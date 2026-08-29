import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import StudioHero from "@/component/studio/studio-hero";
import StudioIntro from "@/component/studio/studio-intro";
import StudioClasses from "@/component/studio/studio-classes";
import StudioCTA from "@/component/studio/studio-cta";
import RelatedExperiences from "@/component/shared/related-experiences";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Studio",
  description:
    "Explore guided strength, cardio and mobility sessions with shared group energy at ORA Studio in Douala.",
  path: "/experiences/studio",
});

export default function StudioPage() {
  return (
    <main>
      <Header />
      <StudioHero />
      <StudioIntro />
      <StudioClasses />
      <RelatedExperiences
        title="Carry the energy into the rest of your day."
        tone="cream"
        experiences={[
          {
            name: "Fitness",
            href: "/experiences/gym",
            note: "Build a focused training routine in the Fitness space.",
          },
          {
            name: "Café",
            href: "/cafe",
            note: "Take a considered pause after moving together.",
          },
        ]}
      />
      <StudioCTA />
      <Footer />
    </main>
  );
}
