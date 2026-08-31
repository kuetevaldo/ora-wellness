import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import CafeHero from "@/component/cafe/cafe-hero";
import CafeMenu from "@/component/cafe/cafe-menu";
import CafeClosing from "@/component/cafe/cafe-closing";
import CafeLocation from "@/component/cafe/cafe-location";
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
      <CafeClosing />
      <CafeLocation />
      <Footer />
    </main>
  );
}
