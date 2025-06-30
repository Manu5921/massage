'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { MessageCircle, Phone, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const ServiceRecommendations = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const contactMethods = [
    {
      icon: Phone,
      title: 'Par téléphone',
      description: 'Appelez-nous directement pour un conseil personnalisé',
      action: 'Appeler maintenant',
      href: 'tel:0612345678',
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Calendar,
      title: 'Consultation gratuite',
      description: 'Réservez un rendez-vous de 30 minutes pour évaluer vos besoins',
      action: 'Réserver',
      href: '#contact',
      color: 'from-accent-500 to-accent-600'
    },
    {
      icon: MessageCircle,
      title: 'Chat en ligne',
      description: 'Échangez avec nos thérapeutes via notre chat',
      action: 'Démarrer',
      href: '#contact',
      color: 'from-secondary-500 to-secondary-600'
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
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
              <span className="text-sm font-medium text-primary-700">Conseil personnalisé</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Besoin d'aide pour{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                choisir ?
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Nos thérapeutes experts vous accompagnent pour identifier le soin idéal 
              selon vos besoins, votre profil et vos attentes.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
            variants={containerVariants}
          >
            {contactMethods.map((method, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' as const }}
              >
                <Card
                  variant="elevated"
                  size="lg"
                  className="h-full text-center border-none bg-white shadow-lg hover:shadow-xl"
                >
                  <CardHeader>
                    <motion.div
                      className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-white shadow-lg mb-4 bg-gradient-to-br ${method.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <method.icon className="w-8 h-8" />
                    </motion.div>
                    
                    <CardTitle className="text-xl font-bold text-neutral-900 mb-2">
                      {method.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent>
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {method.description}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="md"
                      rightIcon={<ArrowRight className="w-4 h-4" />}
                      className="w-full group-hover:bg-primary-50 group-hover:border-primary-200"
                      asChild
                    >
                      <Link href={method.href}>
                        {method.action}
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div 
            className="text-center"
            variants={itemVariants}
          >
            <Card 
              variant="gradient" 
              size="lg" 
              className="max-w-4xl mx-auto bg-gradient-to-r from-primary-50 to-accent-50 border-primary-200"
            >
              <CardContent className="py-12">
                <h3 className="text-2xl lg:text-3xl font-serif font-bold text-neutral-900 mb-4">
                  Vous hésitez encore ?
                </h3>
                <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Profitez de notre consultation gratuite de 30 minutes pour découvrir 
                  l'approche Soléane et identifier ensemble le parcours bien-être qui vous correspond.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                  <Button
                    variant="primary"
                    size="lg"
                    rightIcon={<Calendar className="w-5 h-5" />}
                    asChild
                    className="flex-1"
                  >
                    <Link href="#contact">
                      Consultation gratuite
                    </Link>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    leftIcon={<Phone className="w-5 h-5" />}
                    asChild
                    className="flex-1"
                  >
                    <Link href="tel:0612345678">
                      06 12 34 56 78
                    </Link>
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                  {[
                    { metric: '15 min', label: 'Temps de réponse moyen' },
                    { metric: '98%', label: 'Clients satisfaits' },
                    { metric: '7j/7', label: 'Disponibilité' },
                  ].map((stat, index) => (
                    <div key={index} className="border-l border-primary-200 first:border-l-0 pl-6 first:pl-0">
                      <div className="text-2xl font-bold text-primary-700">{stat.metric}</div>
                      <div className="text-sm text-neutral-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ServiceRecommendations;