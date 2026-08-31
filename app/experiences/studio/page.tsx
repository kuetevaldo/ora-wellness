import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import StudioHero from "@/component/studio/studio-hero";
import StudioClasses from "@/component/studio/studio-classes";
import DanceAcademy from "@/component/studio/dance-academy";
import StudioCTA from "@/component/studio/studio-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Studio",
  description:
    "Explore guided group movement and the ORA Studio Dance Academy for children aged 2 to 11 in Douala.",
  path: "/experiences/studio",
});

export default function StudioPage() {
  return (
    <main>
      <Header />
      <StudioHero />
      <StudioClasses />
      <DanceAcademy />
      <StudioCTA />
      <Footer />
    </main>
  );
}
