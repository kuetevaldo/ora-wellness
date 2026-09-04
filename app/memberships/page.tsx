import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import MembershipsHero from "@/component/memberships/memberships-hero";
import MembershipsOptions from "@/component/memberships/memberships-options";
import MembershipsCTA from "@/component/memberships/memberships-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "ORA Wellness Memberships",
  description:
    "Explore ORA Wellness membership options and find the right way to make Fitness, movement and wellness part of your routine in Douala.",
  path: "/memberships",
  imagePath: "/images/hero-image/ora-interior.jpg",
  imageAlt: "ORA Wellness membership experience in Douala",
});

export default function MembershipsPage() {
  return (
    <main>
      <Header />
      <MembershipsHero />
      <MembershipsOptions />
      <MembershipsCTA />
      <Footer />
    </main>
  );
}
