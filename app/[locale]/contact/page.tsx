import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";

import ContactHero from "@/component/contact/contact-hero";
import ContactDetails from "@/component/contact/contact-details";
import ContactForm from "@/component/contact/contact-form";

import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact ORA Wellness Douala",
  description:
    "Contact ORA Wellness in Douala for information about Fitness, Padel, Pilates, Yoga, Studio, Café and planning your visit.",
  path: "/contact",
  imagePath: "/images/hero-image/ora-building-hero.jpg",
  imageAlt: "ORA Wellness in Douala, Cameroon",
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