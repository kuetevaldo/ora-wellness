import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import PilatesHero from "@/component/pilates/pilates-hero";
import PilatesProgramme from "@/component/pilates/pilates-programme";
import PilatesCTA from "@/component/pilates/pilates-cta";
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
      <PilatesProgramme />
      <PilatesCTA />
      <Footer />
    </main>
  );
}
