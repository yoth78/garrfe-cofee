import { HeroSection } from "@/components/home/hero-section";
import { FeaturedProducts } from "@/components/home/featured-products";
import { HeritageSection } from "@/components/home/heritage-section";
import { WhyGarfe } from "@/components/home/why-garfe";
import { CtaSection } from "@/components/home/cta-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturedProducts />
      <HeritageSection />
      <WhyGarfe />
      <CtaSection />
    </main>
  );
}
