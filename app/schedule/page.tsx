import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import ScheduleHero from "@/component/schedule/schedule-hero";
import ScheduleGrid from "@/component/schedule/schedule-grid";
import ScheduleCTA from "@/component/schedule/schedule-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Class & Activity Schedule",
  description:
    "Explore the ORA Wellness schedule for Yoga, Pilates, Padel and Studio activities in Douala.",
  path: "/schedule",
  imagePath: "/images/section-image/studio-workout.JPG",
  imageAlt: "ORA Wellness class and activity schedule in Douala",
});

export default function SchedulePage() {
  return (
    <main>
      <Header />
      <ScheduleHero />
      <ScheduleGrid />
      <ScheduleCTA />
      <Footer />
    </main>
  );
}
