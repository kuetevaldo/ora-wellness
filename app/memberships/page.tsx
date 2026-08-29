import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import MembershipsHero from "@/component/memberships/memberships-hero";
import MembershipsOptions from "@/component/memberships/memberships-options";
import MembershipsCTA from "@/component/memberships/memberships-cta";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Memberships",
  description:
    "Explore ORA membership directions for Fitness, movement and the wider ORA wellness experience in Douala.",
  path: "/memberships",
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
