import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import ScheduleHero from "@/component/schedule/schedule-hero";
import ScheduleGrid from "@/component/schedule/schedule-grid";
import ScheduleCTA from "@/component/schedule/schedule-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Programme Schedule",
  description:
    "View published weekly times for ORA adult and kids Padel academies and the 2026/27 Dance Academy in Douala.",
  path: "/schedule",
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
