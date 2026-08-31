import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import YogaHero from "@/component/yoga/yoga-hero";
import YogaExperience from "@/component/yoga/yoga-experience";
import YogaCTA from "@/component/yoga/yoga-cta";
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
      <YogaExperience />
      <YogaCTA />
      <Footer />
    </main>
  );
}
