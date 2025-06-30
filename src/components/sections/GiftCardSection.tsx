'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Gift, Star, ArrowRight } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

const GiftCardSection = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const giftOptions = [
    { name: 'Soin Découverte', price: '45€', description: 'Parfait pour découvrir' },
    { name: 'Soin Signature', price: '85€', description: 'Notre expertise complète' },
    { name: 'Soin Excellence', price: '120€', description: 'L\'expérience ultime' },
    { name: 'Montant libre', price: 'À partir de 30€', description: 'Personnalisable' },
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
    <section className="py-20 lg:py-32 bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Floating Elements */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-primary-400/20 to-accent-400/20 blur-xl"
            style={{
              width: `${150 + i * 80}px`,
              height: `${150 + i * 80}px`,
              left: `${10 + (i * 20)}%`,
              top: `${15 + (i * 15)}%`,
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: 'easeInOut' as const,
            }}
          />
        ))}
      </div>

      <Container>
        <motion.div
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
        >
          {/* Content Side */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center">
                <Gift className="w-6 h-6 text-white" />
              </div>
              <span className="text-primary-400 font-medium text-lg">Coffrets cadeaux</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-6">
              Offrez un moment de{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">
                sérénité
              </span>
            </h2>
            
            <p className="text-xl text-neutral-300 leading-relaxed mb-8">
              Partagez l&apos;art du bien-être avec vos proches. Nos coffrets cadeaux sont 
              l&apos;occasion parfaite d&apos;offrir une expérience unique de détente et de régénération.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Valable 12 mois sans exception',
                'Personnalisable selon vos envies',
                'Coffret élégant inclus',
                'Réservation flexible en ligne'
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-3"
                  variants={itemVariants}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full" />
                  <span className="text-neutral-300">{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button
                variant="primary"
                size="lg"
                rightIcon={<ArrowRight className="w-5 h-5" />}
                className="bg-gradient-to-r from-primary-500 to-accent-500 hover:from-primary-600 hover:to-accent-600"
                asChild
              >
                <Link href="/coffrets">
                  Découvrir nos coffrets
                </Link>
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                leftIcon={<Gift className="w-5 h-5" />}
                className="border-white/30 text-white hover:bg-white/10"
                asChild
              >
                <Link href="#contact">
                  Conseils personnalisés
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Gift Card Visual */}
          <motion.div variants={itemVariants}>
            <Card
              variant="glass"
              size="lg"
              className="bg-white/10 backdrop-blur-xl border-white/20 shadow-2xl"
            >
              <CardContent>
                <div className="text-center mb-8">
                  <motion.div
                    className="w-20 h-20 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-2xl"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Gift className="w-10 h-10 text-white" />
                  </motion.div>
                  
                  <h3 className="text-2xl font-serif font-bold mb-2">Carte Cadeau Soléane</h3>
                  <p className="text-neutral-400 text-sm">Choisissez le montant parfait</p>
                </div>
                
                <div className="space-y-3">
                  {giftOptions.map((option, index) => (
                    <motion.div
                      key={index}
                      className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                      variants={itemVariants}
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div>
                        <span className="font-medium">{option.name}</span>
                        <p className="text-sm text-neutral-400">{option.description}</p>
                      </div>
                      <span className="text-primary-400 font-bold text-lg">{option.price}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/20 text-center">
                  <div className="flex items-center justify-center space-x-1 text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-neutral-400">
                    &ldquo;Le cadeau parfait pour prendre soin de soi&rdquo;
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
};

export default GiftCardSection;