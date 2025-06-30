import React from 'react';
import Link from 'next/link';
import { Gift } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';

interface GiftCardSectionProps {
  title?: string;
  description?: string;
  image?: string;
  ctaText?: string;
  ctaLink?: string;
}

export default function GiftCardSection({
  title = 'Offrez un moment de détente',
  description = 'Offrez un moment de détente, de bien-être et d\'évasion le temps d\'une parenthèse dans vos vies.',
  image = 'https://images.unsplash.com/photo-1549890762-0a3f8933bc97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  ctaText = 'Offrir',
  ctaLink = '/coffrets'
}: GiftCardSectionProps) {
  return (
    <section className="py-16 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <OptimizedImage
          src={image}
          alt="Coffret cadeau"
          fill
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Gift className="text-primary-400" size={32} />
              <span className="text-primary-400 font-medium text-lg">Coffret cadeaux</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              {title}
            </h2>
            
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              {description}
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full" />
                <span className="text-neutral-300">Valable 12 mois</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full" />
                <span className="text-neutral-300">Personnalisable selon vos envies</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary-400 rounded-full" />
                <span className="text-neutral-300">Coffret élégant inclus</span>
              </div>
            </div>

            <Button
              variant="primary"
              size="lg"
              className="bg-primary-500 hover:bg-primary-600 text-white"
            >
              <Link href={ctaLink} className="flex items-center space-x-2">
                <Gift size={20} />
                <span>{ctaText}</span>
              </Link>
            </Button>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="bg-primary-500/20 backdrop-blur-sm rounded-2xl p-8 border border-primary-400/30">
              <div className="text-center">
                <div className="w-24 h-24 bg-primary-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Gift size={40} className="text-white" />
                </div>
                
                <h3 className="text-2xl font-serif mb-4">Carte Cadeau</h3>
                
                <div className="space-y-3 text-neutral-300">
                  <div className="flex justify-between items-center py-2 border-b border-neutral-600">
                    <span>Soin Découverte</span>
                    <span className="text-primary-400 font-semibold">45€</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-600">
                    <span>Soin Signature</span>
                    <span className="text-primary-400 font-semibold">85€</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-neutral-600">
                    <span>Soin Excellence</span>
                    <span className="text-primary-400 font-semibold">120€</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span>Montant libre</span>
                    <span className="text-primary-400 font-semibold">À partir de 30€</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}