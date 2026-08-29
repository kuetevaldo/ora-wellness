import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import CafeHero from "@/component/cafe/cafe-hero";
import CafeMenu from "@/component/cafe/cafe-menu";
import CafeClosing from "@/component/cafe/cafe-closing";
import CafeLocation from "@/component/cafe/cafe-location";
import RelatedExperiences from "@/component/shared/related-experiences";
import {
  cafeJsonLd,
  createPageMetadata,
  serializeJsonLd,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Café",
  description:
    "Discover breakfast, specialty coffee, nourishing meals, fresh juices and protein shakes at ORA Café in Douala.",
  path: "/cafe",
  imagePath: "/images/hero-image/ora-interior.jpg",
});

export default function CafePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(cafeJsonLd) }}
      />
      <Header />
      <CafeHero />
      <CafeMenu />
      <RelatedExperiences
        title="Pair a thoughtful pause with the way you move."
        tone="pink"
        experiences={[
          {
            name: "Fitness",
            href: "/experiences/gym",
            note: "Train with focus before settling in at the Café.",
          },
          {
            name: "Padel",
            href: "/experiences/padel",
            note: "Bring play, pace and community into your day.",
          },
        ]}
      />
      <CafeClosing />
      <CafeLocation />
      <Footer />
    </main>
  );
}
