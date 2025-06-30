'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Institut', href: '/institut' },
    { name: 'Soins', href: '/soins' },
    { name: 'Contact', href: '#contact' },
  ];

  const contactInfo = [
    { icon: Phone, text: '06 12 34 56 78', href: 'tel:0612345678' },
    { icon: MapPin, text: 'Paris 11ème', href: '#contact' },
    { icon: Clock, text: '9h-19h', href: '#horaires' },
  ];

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { 
        duration: 0.6,
        ease: 'easeOut' as const
      }
    },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
        when: 'afterChildren' as const,
      },
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut' as const,
        when: 'beforeChildren' as const,
        staggerChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <>
      {/* Top Contact Bar - Desktop Only */}
      <motion.div 
        className="hidden lg:block bg-primary-600 text-white py-2 relative z-[110]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <Container>
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-2 hover:text-accent-200 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.text}</span>
                </motion.a>
              ))}
            </div>
            <motion.div
              className="text-sm font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ✨ Réservation en ligne disponible
            </motion.div>
          </div>
        </Container>
      </motion.div>

      {/* Main Header */}
      <motion.header
        className={cn(
          'sticky top-0 w-full transition-all duration-300 ease-out',
          'border-b border-transparent',
          // Enhanced z-index and backdrop blur
          'z-[100] backdrop-blur-md',
          isScrolled
            ? 'bg-white/90 shadow-lg border-neutral-200/50 backdrop-blur-lg'
            : 'bg-transparent'
        )}
        variants={headerVariants}
        initial="initial"
        animate="animate"
      >
        <Container>
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href="/"
                className="flex items-center space-x-3 group"
              >
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-serif font-bold text-lg lg:text-xl shadow-lg group-hover:shadow-xl transition-shadow">
                  S
                </div>
                <div className="hidden sm:block">
                  <div className="font-serif text-xl lg:text-2xl font-bold text-neutral-900 group-hover:text-primary-600 transition-colors">
                    Soléane
                  </div>
                  <div className="text-xs lg:text-sm text-neutral-600 font-medium tracking-wide">
                    Massage & Sophrologie
                  </div>
                </div>
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navigation.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        'relative px-4 py-2 rounded-lg font-medium transition-all duration-200',
                        'hover:bg-primary-50 hover:text-primary-700',
                        'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2',
                        isActive
                          ? 'text-primary-700 bg-primary-50'
                          : 'text-neutral-700 hover:text-primary-600'
                      )}
                    >
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"
                          layoutId="activeTab"
                          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Desktop CTA */}
              <motion.div
                className="hidden lg:block"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button
                  variant="primary"
                  size="md"
                  rightIcon={<Phone className="w-4 h-4" />}
                  asChild
                >
                  <Link href="tel:0612345678">
                    Réserver
                  </Link>
                </Button>
              </motion.div>

              {/* Mobile Menu Button */}
              <motion.button
                className="lg:hidden relative z-[110] p-2 rounded-lg bg-white/90 backdrop-blur-sm border border-neutral-200/50 shadow-sm"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="w-6 h-6 text-neutral-700" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="w-6 h-6 text-neutral-700" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>
        </Container>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/50 shadow-xl z-[95]"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <Container>
                <div className="py-6 space-y-4">
                  {/* Mobile Navigation */}
                  <nav className="space-y-2">
                    {navigation.map((item, index) => {
                      const isActive = pathname === item.href;
                      return (
                        <motion.div
                          key={item.href}
                          variants={mobileItemVariants}
                          transition={{ delay: 0.1 * index }}
                        >
                          <Link
                            href={item.href}
                            className={cn(
                              'block px-4 py-3 rounded-xl font-medium transition-all duration-200',
                              'hover:bg-primary-50 hover:text-primary-700',
                              isActive
                                ? 'text-primary-700 bg-primary-50 border-l-4 border-primary-500'
                                : 'text-neutral-700'
                            )}
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </nav>

                  {/* Mobile Contact Info */}
                  <motion.div
                    className="pt-4 border-t border-neutral-200"
                    variants={mobileItemVariants}
                  >
                    <div className="grid grid-cols-1 gap-3">
                      {contactInfo.map((item, index) => (
                        <a
                          key={index}
                          href={item.href}
                          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors"
                        >
                          <item.icon className="w-5 h-5 text-primary-600" />
                          <span className="text-sm text-neutral-700">{item.text}</span>
                        </a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Mobile CTA */}
                  <motion.div
                    className="pt-4"
                    variants={mobileItemVariants}
                  >
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full"
                      rightIcon={<Phone className="w-5 h-5" />}
                      asChild
                    >
                      <Link href="tel:0612345678">
                        Réserver maintenant
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[90]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;