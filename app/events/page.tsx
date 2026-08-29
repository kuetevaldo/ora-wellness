import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import EventsHero from "@/component/events/events-hero";
import EventsList from "@/component/events/events-list";
import EventsCTA from "@/component/events/events-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Events & Community",
  description:
    "Discover ORA wellness experiences, Padel activities, group movement and community moments in Douala.",
  path: "/events",
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
