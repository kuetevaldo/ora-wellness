import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import CafeHero from "@/component/cafe/cafe-hero";
import CafeCraft from "@/component/cafe/cafe-craft";
import CafeMenu from "@/component/cafe/cafe-menu";
import CafeClosing from "@/component/cafe/cafe-closing";

import {
  createPageMetadata,
  cafeJsonLd,
  serializeJsonLd,
} from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Café Douala | Coffee, Breakfast & Wellness Food",
  description:
    "Visit ORA Café in Douala for specialty coffee, breakfast, nourishing food and wellness drinks at ORA Wellness, Hydrocarbures.",
  path: "/cafe",
  imagePath: "/images/section-image/cafe-section.jpg",
  imageAlt: "ORA Café in Douala, Cameroon",
  absoluteTitle: true,
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

      <CafeCraft />

      <CafeMenu />

      <CafeClosing />

      <Footer />
    </main>
  );
}