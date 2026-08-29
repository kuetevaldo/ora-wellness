import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import AboutHero from "@/component/about/about-hero";
import AboutPhilosophy from "@/component/about/about-philosophy";
import AboutExperiences from "@/component/about/about-experiences";
import AboutCTA from "@/component/about/about-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "About ORA",
  description:
    "Learn how ORA brings movement, nourishment and community together in one wellness destination in Douala.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main>
      <Header />
      <AboutHero />
      <AboutPhilosophy />
      <AboutExperiences />
      <AboutCTA />
      <Footer />
    </main>
  );
}
