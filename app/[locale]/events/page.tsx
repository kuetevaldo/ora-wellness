import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import EventsHero from "@/component/events/events-hero";
import EventsList from "@/component/events/events-list";
import EventsCTA from "@/component/events/events-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Events in Douala",
  description:
    "Discover events and community experiences at ORA Wellness in Douala across Padel, Studio and wellness activities.",
  path: "/events",
  imagePath: "/images/section-image/tournament-women.JPG",
  imageAlt: "ORA Wellness event in Douala, Cameroon",
});

export default function EventsPage() {
  return (
    <main>
      <Header />
      <EventsHero />
      <EventsList />
      <EventsCTA />
      <Footer />
    </main>
  );
}
