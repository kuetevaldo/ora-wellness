import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import ContactHero from "@/component/contact/contact-hero";
import ContactDetails from "@/component/contact/contact-details";
import ContactForm from "@/component/contact/contact-form";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact ORA",
  description:
    "Find ORA Wellness in Hydrocarbures, Douala, and learn how to enquire about Café, Fitness, Padel, Pilates, Yoga and Studio experiences.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <main>
      <Header />
      <ContactHero />
      <ContactDetails />
      <ContactForm />
      <Footer />
    </main>
  );
}
