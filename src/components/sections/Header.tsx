'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { MenuItem } from '@/types';

const menuItems: MenuItem[] = [
  { label: 'L\'institut', href: '/institut' },
  { 
    label: 'Nos soins', 
    href: '/soins',
    submenu: [
      { label: 'Sophrologie', href: '/soins/sophrologie' },
      { label: 'Rituels relaxants', href: '/soins/relaxation' },
      { label: 'Massages crâniens', href: '/soins/cranien' },
      { label: 'Soins excellence', href: '/soins/excellence' }
    ]
  },
  { label: 'Sophrologie', href: '/sophrologie' },
  { label: 'Coffret & Carte cadeau', href: '/coffrets' },
  { label: 'Contact', href: '/contact' }
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
    }`}>
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-serif text-primary-600">
              Soléane
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                >
                  {item.label}
                </Link>
                
                {/* Submenu */}
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 border">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-neutral-600 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+33123456789"
              className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200"
            >
              <Phone size={18} />
              <span className="font-medium">01 23 45 67 89</span>
            </a>
            <Button variant="primary">
              Réservation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t shadow-lg">
            <div className="py-4">
              {menuItems.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-neutral-700 hover:text-primary-600 hover:bg-primary-50 transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.submenu && (
                    <div className="bg-neutral-50">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-8 py-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile CTA */}
              <div className="px-4 pt-4 border-t border-neutral-200 mt-4">
                <a
                  href="tel:+33123456789"
                  className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 transition-colors duration-200 mb-3"
                >
                  <Phone size={18} />
                  <span className="font-medium">01 23 45 67 89</span>
                </a>
                <Button variant="primary" className="w-full">
                  Réservation
                </Button>
              </div>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}