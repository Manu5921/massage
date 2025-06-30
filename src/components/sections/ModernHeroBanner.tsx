'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Calendar, Phone, MapPin, Star, Play, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import { Container } from '@/components/ui/Container';

const ModernHeroBanner = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  
  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: 'easeOut' as const,
      },
    },
  };

  return (
    <section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary-50 via-neutral-50 to-primary-50"
    >
      {/* Background Elements with Parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y, scale }}
      >
        {/* Geometric Background Patterns */}
        <div className="absolute inset-0">
          {/* Floating Circles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full bg-gradient-to-r from-primary-200/30 to-accent-200/30 blur-xl`}
              style={{
                width: `${200 + i * 100}px`,
                height: `${200 + i * 100}px`,
                left: `${10 + (i * 15)}%`,
                top: `${5 + (i * 10)}%`,
                x: mousePosition.x * (i + 1) * 0.5,
                y: mousePosition.y * (i + 1) * 0.3,
              }}
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: 'easeInOut' as const,
              }}
            />
          ))}
          
          {/* Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(139, 69, 19, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 69, 19, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px',
            }}
          />
        </div>
      </motion.div>

      {/* Gradient Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-white/20 z-10"
        style={{ opacity }}
      />

      {/* Main Content */}
      <Container className="relative z-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-primary-200/50 shadow-sm mb-6"
          >
            <Star className="w-4 h-4 text-accent-500 mr-2" />
            <span className="text-sm font-medium text-neutral-700">
              ✨ Institut de référence depuis 2018
            </span>
          </motion.div>

          {/* Main Headline NOUVEAU CONTENU */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl lg:text-7xl font-serif font-bold text-neutral-900 mb-6 leading-tight"
          >
            Votre bulle de{' '}
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                sérénité
              </span>
              <motion.div
                className="absolute -bottom-2 left-0 right-0 h-3 bg-gradient-to-r from-primary-200/50 to-accent-200/50 rounded-full -z-10"
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              />
            </span>
            <br />
            au cœur de Paris
          </motion.h1>

          {/* Subtitle NOUVEAU CONTENU */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-neutral-600 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Découvrez l&apos;art du massage thérapeutique et de la sophrologie dans un écrin de paix. 
            Soléane vous invite à un voyage vers le bien-être authentique.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button
              variant="primary"
              size="xl"
              rightIcon={<Calendar className="w-5 h-5" />}
              asChild
              motionProps={{
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
              }}
            >
              <Link href="#contact">
                Réserver un soin
              </Link>
            </Button>
            
            <Button
              variant="outline"
              size="xl"
              leftIcon={<Play className="w-5 h-5" />}
              motionProps={{
                whileHover: { scale: 1.05 },
                whileTap: { scale: 0.95 },
              }}
              asChild
            >
              <Link href="/soins">
                Découvrir nos soins
              </Link>
            </Button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto"
          >
            <Card
              variant="glass"
              size="sm"
              hover={false}
              motionProps={cardVariants}
              className="text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white mb-3 shadow-lg">
                  <Star className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">4.9/5</div>
                <div className="text-sm text-neutral-600">Note moyenne</div>
              </div>
            </Card>

            <Card
              variant="glass"
              size="sm"
              hover={false}
              motionProps={cardVariants}
              className="text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center text-white mb-3 shadow-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">Paris 11e</div>
                <div className="text-sm text-neutral-600">Métro Bastille</div>
              </div>
            </Card>

            <Card
              variant="glass"
              size="sm"
              hover={false}
              motionProps={cardVariants}
              className="text-center"
            >
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center text-white mb-3 shadow-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="text-2xl font-bold text-neutral-900 mb-1">7j/7</div>
                <div className="text-sm text-neutral-600">Ouvert tous les jours</div>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center text-neutral-600"
          animate={{
            y: [0, 8, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut' as const,
          }}
        >
          <span className="text-sm font-medium mb-2">Découvrir</span>
          <ArrowRight className="w-5 h-5 rotate-90" />
        </motion.div>
      </motion.div>

      {/* Floating Action Button - Mobile */}
      <motion.div
        className="fixed bottom-6 right-6 lg:hidden z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 3, duration: 0.4 }}
      >
        <Button
          variant="accent"
          size="lg"
          className="rounded-full shadow-2xl shadow-accent-500/25"
          rightIcon={<Phone className="w-5 h-5" />}
          asChild
          motionProps={{
            whileHover: { scale: 1.1 },
            whileTap: { scale: 0.9 },
          }}
        >
          <Link href="tel:0612345678">
            Appeler
          </Link>
        </Button>
      </motion.div>
    </section>
  );
};

export default ModernHeroBanner;