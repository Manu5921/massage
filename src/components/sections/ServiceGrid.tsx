'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  Sparkles, 
  Heart, 
  Brain, 
  Flower, 
  ArrowRight,
  Clock,
  Star
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const ServiceGrid = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Services data with unique themes
  const services = [
    {
      id: 'sophrologie',
      title: 'Sophrologie',
      subtitle: 'Relaxation profonde',
      description: 'Techniques de respiration et de relaxation pour retrouver équilibre et sérénité.',
      duration: '60 min',
      price: '75€',
      icon: Brain,
      color: 'from-blue-500 to-indigo-600',
      bgGradient: 'from-blue-50 to-indigo-50',
      size: 'large', // Prend 2 colonnes
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'relaxant',
      title: 'Rituels Relaxants',
      subtitle: 'Détente absolue',
      description: 'Massages doux aux huiles essentielles pour un lâcher-prise total.',
      duration: '90 min',
      price: '95€',
      icon: Flower,
      color: 'from-pink-500 to-rose-600',
      bgGradient: 'from-pink-50 to-rose-50',
      size: 'medium',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'cranien',
      title: 'Massages Crâniens',
      subtitle: 'Libération des tensions',
      description: 'Techniques spécialisées pour soulager stress et maux de tête.',
      duration: '45 min',
      price: '55€',
      icon: Sparkles,
      color: 'from-purple-500 to-violet-600',
      bgGradient: 'from-purple-50 to-violet-50',
      size: 'small',
      image: '/api/placeholder/300/250'
    },
    {
      id: 'excellence',
      title: 'Soins Excellence',
      subtitle: 'L\'expérience ultime',
      description: 'Protocole premium associant plusieurs techniques pour un bien-être optimal.',
      duration: '120 min',
      price: '150€',
      icon: Heart,
      color: 'from-amber-500 to-orange-600',
      bgGradient: 'from-amber-50 to-orange-50',
      size: 'large',
      featured: true,
      image: '/api/placeholder/600/400'
    },
    {
      id: 'gift',
      title: 'Coffrets Cadeaux',
      subtitle: 'Offrir le bien-être',
      description: 'Cartes cadeaux et coffrets pour partager un moment de détente.',
      duration: 'Variable',
      price: 'Dès 50€',
      icon: Sparkles,
      color: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      size: 'medium',
      image: '/api/placeholder/400/300'
    },
    {
      id: 'consultation',
      title: 'Consultation',
      subtitle: 'Bilan personnalisé',
      description: 'Évaluation de vos besoins pour un programme sur-mesure.',
      duration: '30 min',
      price: 'Gratuit',
      icon: Heart,
      color: 'from-slate-500 to-gray-600',
      bgGradient: 'from-slate-50 to-gray-50',
      size: 'small',
      image: '/api/placeholder/300/250'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut' as const,
      },
    },
  };

  const getGridClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'col-span-1 md:col-span-2 row-span-2';
      case 'medium':
        return 'col-span-1 row-span-1';
      case 'small':
        return 'col-span-1 row-span-1';
      default:
        return 'col-span-1';
    }
  };

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            variants={itemVariants}
          >
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary-600 mr-2" />
              <span className="text-sm font-medium text-primary-700">Nos soins signature</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Une expertise au service de votre{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                bien-être
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Découvrez notre gamme complète de soins, alliant traditions ancestrales 
              et techniques modernes pour une expérience unique de détente et de régénération.
            </p>
          </motion.div>

          {/* Bento Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-fr"
            variants={containerVariants}
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                className={cn(
                  getGridClasses(service.size),
                  'group relative'
                )}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' as const }}
              >
                <Card
                  variant="elevated"
                  size="lg"
                  className={cn(
                    'h-full overflow-hidden border-none',
                    `bg-gradient-to-br ${service.bgGradient}`,
                    service.featured && 'ring-2 ring-primary-200'
                  )}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at 20% 80%, ${service.color.split(' ')[1].replace('to-', '')} 0%, transparent 50%),
                                        radial-gradient(circle at 80% 20%, ${service.color.split(' ')[3]} 0%, transparent 50%)`
                      }}
                    />
                  </div>

                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center px-2 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-primary-200/50 shadow-sm">
                        <Star className="w-3 h-3 text-accent-500 mr-1" />
                        <span className="text-xs font-medium text-neutral-700">Populaire</span>
                      </div>
                    </div>
                  )}

                  <CardHeader className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={cn(
                        'w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg mb-4',
                        `bg-gradient-to-br ${service.color}`
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className="w-6 h-6" />
                    </motion.div>

                    {/* Title & Subtitle */}
                    <CardTitle className="text-xl lg:text-2xl font-bold text-neutral-900 mb-2">
                      {service.title}
                    </CardTitle>
                    
                    <div className="text-sm font-medium text-neutral-600 mb-3">
                      {service.subtitle}
                    </div>

                    {/* Duration & Price */}
                    <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                      <div className="font-bold text-primary-700">
                        {service.price}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10">
                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <Button
                      variant="outline"
                      size="sm"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                      className="w-full group-hover:bg-white group-hover:shadow-md transition-all duration-200"
                      asChild
                    >
                      <Link href={`/soins/${service.id}`}>
                        En savoir plus
                      </Link>
                    </Button>
                  </CardContent>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center mt-16"
            variants={itemVariants}
          >
            <Card variant="glass" size="lg" className="max-w-2xl mx-auto">
              <CardContent className="text-center py-12">
                <h3 className="text-2xl font-serif font-bold text-neutral-900 mb-4">
                  Besoin d&apos;un conseil personnalisé ?
                </h3>
                <p className="text-neutral-600 mb-8 leading-relaxed">
                  Nos thérapeutes sont à votre disposition pour vous orienter vers 
                  le soin le plus adapté à vos besoins.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="primary" 
                    size="lg"
                    rightIcon={<ArrowRight className="w-5 h-5" />}
                    asChild
                  >
                    <Link href="#contact">
                      Prendre rendez-vous
                    </Link>
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    asChild
                  >
                    <Link href="/institut">
                      Découvrir l&apos;institut
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceGrid;