import React from 'react';
import Container from '@/components/ui/Container';
import ServiceCard from './ServiceCard';
import { Service } from '@/types';

interface ServiceGridProps {
  services: Service[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
  showFeatured?: boolean;
}

export default function ServiceGrid({ 
  services, 
  title,
  subtitle,
  columns = 3,
  showFeatured = true 
}: ServiceGridProps) {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
  };

  return (
    <section className="py-16 bg-neutral-50">
      <Container>
        {/* Header */}
        {(title || subtitle) && (
          <div className="text-center mb-12">
            {title && (
              <h2 className="text-3xl md:text-4xl font-serif text-neutral-900 mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Services Grid */}
        <div className={`grid ${gridClasses[columns]} gap-8`}>
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service}
              featured={showFeatured && service.featured}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}