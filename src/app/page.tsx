import HeroBanner from '@/components/sections/HeroBanner';
import ServiceGrid from '@/components/sections/ServiceGrid';
import ValueProposition from '@/components/sections/ValueProposition';
import GiftCardSection from '@/components/sections/GiftCardSection';
import ServiceRecommendations from '@/components/sections/ServiceRecommendations';
import { servicesWithImages, placeholderImages } from '@/lib/data';

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <HeroBanner
        title="Sophro massage (nouveauté)"
        subtitle="Soléane - Tous nos soins"
        backgroundImage={placeholderImages.hero}
        ctaText="Découvrir nos soins"
        ctaLink="/soins"
      />

      {/* Services Section */}
      <ServiceGrid
        services={servicesWithImages}
        title="Nos Soins Signature"
        subtitle="Découvrez notre gamme complète de soins pour votre bien-être"
        columns={3}
        showFeatured={true}
      />

      {/* Value Proposition */}
      <ValueProposition />

      {/* Gift Card Section */}
      <GiftCardSection
        image={placeholderImages.coffretCadeau}
      />

      {/* Service Recommendations Assistant */}
      <ServiceRecommendations />
    </main>
  );
}
