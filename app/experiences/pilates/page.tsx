import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import PilatesHero from "@/component/pilates/pilates-hero";
import PilatesIntro from "@/component/pilates/pilates-intro";
import PilatesExperience from "@/component/pilates/pilates-experience";
import PilatesCTA from "@/component/pilates/pilates-cta";
import RelatedExperiences from "@/component/shared/related-experiences";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Pilates",
  description:
    "Discover deliberate Pilates movement focused on control, strength and mobility at ORA in Douala.",
  path: "/experiences/pilates",
  imagePath: "/images/IMG_E5270.JPG",
});

export default function PilatesPage() {
  return (
    <main>
      <Header />
      <PilatesHero />
      <PilatesIntro />
      <PilatesExperience />
      <RelatedExperiences
        title="Keep the pace gentle and connected."
        tone="cream"
        experiences={[
          {
            name: "Yoga",
            href: "/experiences/yoga",
            note: "Make space for breath, balance and stillness.",
          },
          {
            name: "Café",
            href: "/cafe",
            note: "Pause over something thoughtful after your practice.",
          },
        ]}
      />
      <PilatesCTA />
      <Footer />
    </main>
  );
}
