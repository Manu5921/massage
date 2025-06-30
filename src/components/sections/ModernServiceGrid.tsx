'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { 
  Brain, 
  Heart, 
  Sparkles, 
  Flower, 
  ArrowRight,
  Clock,
  Star,
  User
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const ModernServiceGrid = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Services data avec thèmes visuels uniques - SANS IMAGES
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
      accent: 'blue',
      size: 'large',
      featured: true,
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
      accent: 'amber',
      size: 'large',
      featured: true,
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
      accent: 'pink',
      size: 'medium',
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
      accent: 'purple',
      size: 'medium',
    },
    {
      id: 'consultation',
      title: 'Consultation',
      subtitle: 'Bilan personnalisé',
      description: 'Évaluation de vos besoins pour un programme sur-mesure.',
      duration: '30 min',
      price: 'Gratuit',
      icon: User,
      color: 'from-emerald-500 to-teal-600',
      bgGradient: 'from-emerald-50 to-teal-50',
      accent: 'emerald',
      size: 'medium',
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

          {/* Bento Grid Moderne */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr mb-16"
            variants={containerVariants}
          >
            {services.map((service, index) => (
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
                    'h-full overflow-hidden border-none relative',
                    `bg-gradient-to-br ${service.bgGradient}`,
                    service.featured && 'ring-2 ring-primary-200 shadow-2xl'
                  )}
                >
                  {/* Decorative Pattern */}
                  <div className="absolute inset-0 opacity-[0.03]">
                    <svg 
                      className="w-full h-full" 
                      viewBox="0 0 100 100" 
                      fill="none"
                    >
                      <defs>
                        <pattern 
                          id={`pattern-${service.id}`} 
                          x="0" 
                          y="0" 
                          width="20" 
                          height="20" 
                          patternUnits="userSpaceOnUse"
                        >
                          <circle cx="10" cy="10" r="1" fill="currentColor" />
                        </pattern>
                      </defs>
                      <rect 
                        width="100%" 
                        height="100%" 
                        fill={`url(#pattern-${service.id})`} 
                        className={`text-${service.accent}-500`}
                      />
                    </svg>
                  </div>

                  {/* Featured Badge */}
                  {service.featured && (
                    <div className="absolute top-4 right-4 z-10">
                      <div className="flex items-center px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full border border-primary-200/50 shadow-sm">
                        <Star className="w-3 h-3 text-accent-500 mr-1" />
                        <span className="text-xs font-medium text-neutral-700">Populaire</span>
                      </div>
                    </div>
                  )}

                  <CardHeader className="relative z-10 pb-4">
                    {/* Icon avec animation */}
                    <motion.div
                      className={cn(
                        'w-14 h-14 rounded-xl flex items-center justify-center text-white shadow-lg mb-4',
                        `bg-gradient-to-br ${service.color}`
                      )}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <service.icon className="w-7 h-7" />
                    </motion.div>

                    {/* Titre et sous-titre */}
                    <CardTitle className="text-xl lg:text-2xl font-bold text-neutral-900 mb-2 leading-tight">
                      {service.title}
                    </CardTitle>
                    
                    <div className="text-sm font-medium text-neutral-600 mb-4">
                      {service.subtitle}
                    </div>

                    {/* Durée et Prix */}
                    <div className="flex items-center justify-between text-sm text-neutral-600 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {service.duration}
                      </div>
                      <div className="font-bold text-lg text-primary-700">
                        {service.price}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="relative z-10 pt-0">
                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed mb-6 text-sm lg:text-base">
                      {service.description}
                    </p>

                    {/* CTA Button */}
                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        rightIcon={<ArrowRight className="w-4 h-4" />}
                        className="flex-1 group-hover:bg-white group-hover:shadow-md transition-all duration-200"
                        asChild
                      >
                        <Link href={`/soins/${service.id}`}>
                          En savoir plus
                        </Link>
                      </Button>
                      
                      {service.price !== 'Gratuit' && (
                        <Button
                          variant="primary"
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600"
                          asChild
                        >
                          <Link href="#contact">
                            Réserver
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA */}
          <motion.div 
            className="text-center"
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

export default ModernServiceGrid;