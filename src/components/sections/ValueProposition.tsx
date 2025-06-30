import React from 'react';
import { Building2, Award, Heart, Users } from 'lucide-react';
import Container from '@/components/ui/Container';
import { ValueProposition as ValueProp } from '@/types';

const defaultValues: ValueProp[] = [
  {
    icon: 'building',
    title: 'un institut',
    description: 'Un cadre apaisant et professionnel pour votre bien-être'
  },
  {
    icon: 'award',
    title: 'un savoir-faire',
    description: 'Une expertise reconnue dans les soins de relaxation'
  },
  {
    icon: 'heart',
    title: 'des grandes marques',
    description: 'Des produits de qualité premium pour des résultats optimaux'
  },
  {
    icon: 'users',
    title: 'un accompagnement',
    description: 'Un suivi personnalisé pour répondre à vos besoins'
  }
];

const iconMap = {
  building: Building2,
  award: Award,
  heart: Heart,
  users: Users
};

interface ValuePropositionProps {
  values?: ValueProp[];
  title?: string;
  subtitle?: string;
}

export default function ValueProposition({ 
  values = defaultValues,
  title = "Pourquoi choisir Soléane",
  subtitle = "Quatre piliers qui font notre différence"
}: ValuePropositionProps) {
  return (
    <section className="py-16 bg-white">
      <Container>
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
            {title}
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const IconComponent = iconMap[value.icon as keyof typeof iconMap] || Building2;
            
            return (
              <div 
                key={index}
                className="text-center group hover:scale-105 transition-transform duration-300"
              >
                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-full mb-4 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                  <IconComponent size={32} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-neutral-900 mb-2 capitalize">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}