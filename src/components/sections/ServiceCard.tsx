import React from 'react';
import Link from 'next/link';
import { Clock, Euro } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import OptimizedImage from '@/components/ui/OptimizedImage';
import { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
  featured?: boolean;
}

export default function ServiceCard({ service, featured = false }: ServiceCardProps) {
  return (
    <Card className={`overflow-hidden group ${featured ? 'ring-2 ring-primary-500' : ''}`}>
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <OptimizedImage
          src={service.image}
          alt={service.title}
          fill
          objectFit="cover"
          className="group-hover:scale-105 transition-transform duration-500"
        />
        {featured && (
          <div className="absolute top-4 right-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Nouveauté
          </div>
        )}
      </div>

      <CardContent className="p-6">
        {/* Title */}
        <h3 className="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors duration-200">
          {service.title}
        </h3>

        {/* Description */}
        <p className="text-neutral-600 text-sm leading-relaxed mb-4 line-clamp-3">
          {service.description}
        </p>

        {/* Meta Info */}
        <div className="flex items-center justify-between text-sm text-neutral-500 mb-4">
          <div className="flex items-center space-x-1">
            <Clock size={16} />
            <span>{service.duration}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Euro size={16} />
            <span className="font-semibold text-primary-600">{service.price}</span>
          </div>
        </div>

        {/* Benefits */}
        {service.benefits && service.benefits.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-medium text-neutral-700 mb-2">Bienfaits :</h4>
            <ul className="text-sm text-neutral-600 space-y-1">
              {service.benefits.slice(0, 3).map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </CardContent>

      <CardFooter className="p-6 pt-0 flex space-x-3">
        <Button 
          variant="outline" 
          size="sm"
          className="flex-1"
        >
          <Link href={`/soins/${service.id}`}>
            En savoir plus
          </Link>
        </Button>
        <Button 
          variant="primary" 
          size="sm"
          className="flex-1"
        >
          Réserver
        </Button>
      </CardFooter>
    </Card>
  );
}