'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { Building2, Award, Heart, Users, Sparkles } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Card, CardContent } from '@/components/ui/Card';

const ValueProposition = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const values = [
    {
      icon: Building2,
      title: 'Un institut',
      description: 'Un cadre apaisant et professionnel au cœur de Paris pour votre bien-être absolu',
      color: 'from-primary-500 to-primary-600',
      bgColor: 'from-primary-50 to-primary-100'
    },
    {
      icon: Award,
      title: 'Un savoir-faire',
      description: 'Une expertise reconnue depuis 2018 dans les soins de relaxation et sophrologie',
      color: 'from-accent-500 to-accent-600',
      bgColor: 'from-accent-50 to-accent-100'
    },
    {
      icon: Heart,
      title: 'Des grandes marques',
      description: 'Des produits de qualité premium sélectionnés pour des résultats optimaux',
      color: 'from-secondary-500 to-secondary-600',
      bgColor: 'from-secondary-50 to-secondary-100'
    },
    {
      icon: Users,
      title: 'Un accompagnement',
      description: 'Un suivi personnalisé et bienveillant pour répondre à tous vos besoins',
      color: 'from-tertiary-500 to-tertiary-600',
      bgColor: 'from-tertiary-50 to-tertiary-100'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-neutral-50">
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
              <span className="text-sm font-medium text-primary-700">Pourquoi nous choisir</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-neutral-900 mb-6">
              Quatre piliers qui font{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                notre différence
              </span>
            </h2>
            
            <p className="text-lg lg:text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Chez Soléane, chaque détail compte pour vous offrir une expérience 
              de bien-être exceptionnelle et personnalisée.
            </p>
          </motion.div>

          {/* Values Grid */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: 'easeOut' as const }}
              >
                <Card
                  variant="elevated"
                  size="lg"
                  className={`h-full text-center bg-gradient-to-br ${value.bgColor} border-none relative overflow-hidden`}
                >
                  {/* Background Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div 
                      className="w-full h-full"
                      style={{
                        backgroundImage: `radial-gradient(circle at 50% 50%, ${value.color.split(' ')[1].replace('to-', '')} 0%, transparent 70%)`
                      }}
                    />
                  </div>

                  <CardContent className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center text-white shadow-lg mb-6 bg-gradient-to-br ${value.color}`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <value.icon className="w-8 h-8" />
                    </motion.div>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-neutral-900 mb-4 capitalize">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-neutral-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Stats */}
          <motion.div 
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
            variants={containerVariants}
          >
            {[
              { number: '500+', label: 'Clients satisfaits' },
              { number: '5+', label: 'Années d\'expérience' },
              { number: '4.9/5', label: 'Note moyenne' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
              >
                <div className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-neutral-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ValueProposition;