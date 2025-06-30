import ModernHeroBanner from '@/components/sections/ModernHeroBanner';
import ModernServiceGrid from '@/components/sections/ModernServiceGrid';
import ValueProposition from '@/components/sections/ValueProposition';
import GiftCardSection from '@/components/sections/GiftCardSection';
import ServiceRecommendations from '@/components/sections/ServiceRecommendations';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <ModernHeroBanner />

      {/* Services Section */}
      <ModernServiceGrid />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Gift Card Section */}
      <GiftCardSection />

      {/* Service Recommendations Assistant */}
      <ServiceRecommendations />
    </main>
  );
}
