import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import ModernServiceGrid from '@/components/sections/ModernServiceGrid';

export const metadata: Metadata = {
  title: 'Nos Soins - Soléane Institut',
  description: 'Découvrez notre gamme complète de soins : sophro-massage, rituels relaxants, massages crâniens et soins excellence. Réservez votre moment de détente.',
};

export default function SoinsPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
              Nos Soins Signature
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed mb-8">
              Découvrez notre gamme exclusive de soins conçus pour votre bien-être. 
              Chaque soin est pensé pour vous offrir une expérience unique de détente et de régénération.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">4</div>
                <div className="text-neutral-600">Soins signature</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                <div className="text-neutral-600">Années d&apos;expérience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 mb-2">100%</div>
                <div className="text-neutral-600">Satisfaction client</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <ModernServiceGrid />

      {/* CTA Section */}
      <section className="py-16 bg-primary-500">
        <Container>
          <div className="text-center text-white">
            <h2 className="text-3xl font-serif mb-4">
              Prêt(e) pour votre moment de détente ?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              Réservez dès maintenant votre soin signature et offrez-vous une pause bien-être.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-200">
                Réserver en ligne
              </button>
              <a 
                href="tel:+33123456789"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-all duration-200"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}