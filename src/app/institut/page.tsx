import { Metadata } from 'next';
import Container from '@/components/ui/Container';
import OptimizedImage from '@/components/ui/OptimizedImage';
import ValueProposition from '@/components/sections/ValueProposition';
import { placeholderImages } from '@/lib/data';

export const metadata: Metadata = {
  title: 'L\'Institut - Soléane',
  description: 'Découvrez l\'histoire de Soléane, notre philosophie du bien-être et notre équipe dédiée à votre détente dans un cadre exceptionnel à Paris.',
};

export default function InstitutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-primary-50 to-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-serif text-neutral-900 mb-6">
                L&apos;Institut Soléane
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed mb-6">
                Votre havre de paix au cœur de Paris, où tradition et innovation 
                se rencontrent pour vous offrir une expérience de bien-être unique.
              </p>
              <p className="text-neutral-600 leading-relaxed">
                Depuis plus de 15 ans, nous cultivons l&apos;art du soin et de la détente, 
                en alliant techniques ancestrales et approches modernes pour votre bien-être.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <OptimizedImage
                src={placeholderImages.institut}
                alt="Institut Soléane - Espace de détente"
                fill
                objectFit="cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* Notre Histoire */}
      <section className="py-16 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-serif text-neutral-900 mb-8">
              Notre Histoire
            </h2>
            <div className="prose prose-lg mx-auto text-neutral-600 leading-relaxed space-y-6">
              <p>
                Née de la passion pour le bien-être et la beauté, Soléane a vu le jour 
                avec une vision simple : créer un espace où chaque personne peut se reconnecter 
                avec elle-même et retrouver l&apos;harmonie corps-esprit.
              </p>
              <p>
                Notre fondatrice, formée aux techniques traditionnelles de massage et à la sophrologie, 
                a souhaité créer un institut qui allie efficacité des soins et profondeur de l&apos;accompagnement. 
                Chaque soin est pensé comme un voyage vers votre bien-être intérieur.
              </p>
              <p>
                Aujourd&apos;hui, notre équipe de praticiennes certifiées perpétue cette tradition 
                d&apos;excellence, en adaptant nos soins aux besoins uniques de chaque client.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Notre Philosophie */}
      <section className="py-16 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden">
              <OptimizedImage
                src={placeholderImages.sophroMassage}
                alt="Philosophie du bien-être"
                fill
                objectFit="cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-serif text-neutral-900 mb-6">
                Notre Philosophie
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                <p>
                  <strong className="text-primary-600">Approche holistique :</strong> 
                  Nous considérons chaque personne dans sa globalité, corps et esprit unis 
                  vers un même objectif de bien-être.
                </p>
                <p>
                  <strong className="text-primary-600">Personnalisation :</strong> 
                  Chaque soin est adapté à vos besoins spécifiques, pour une expérience 
                  unique et des résultats optimaux.
                </p>
                <p>
                  <strong className="text-primary-600">Excellence :</strong> 
                  Nous sélectionnons les meilleures techniques et les produits les plus 
                  qualitatifs pour vous garantir une expérience exceptionnelle.
                </p>
                <p>
                  <strong className="text-primary-600">Bienveillance :</strong> 
                  Notre équipe vous accueille dans un cadre chaleureux et sécurisant, 
                  propice à la détente et au lâcher-prise.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Nos Valeurs */}
      <ValueProposition />

      {/* L'Équipe */}
      <section className="py-16 bg-white">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif text-neutral-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Des praticiennes passionnées et certifiées, dédiées à votre bien-être
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Sophie Morel",
                role: "Fondatrice & Sophrologue",
                speciality: "Sophro-massage, Relaxation",
                experience: "15 ans d'expérience"
              },
              {
                name: "Marie Dubois",
                role: "Esthéticienne",
                speciality: "Soins du visage, Sothys",
                experience: "10 ans d'expérience"
              },
              {
                name: "Léa Martin",
                role: "Massothérapeute",
                speciality: "Massages thérapeutiques",
                experience: "8 ans d'expérience"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-primary-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-serif text-primary-600">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium mb-1">{member.role}</p>
                <p className="text-sm text-neutral-600 mb-1">{member.speciality}</p>
                <p className="text-sm text-neutral-500">{member.experience}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}