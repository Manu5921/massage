import React from 'react';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import Container from '@/components/ui/Container';

const footerSections = [
  {
    title: 'Découvrir',
    links: [
      { label: 'L\'institut', href: '/institut' },
      { label: 'Nos soins', href: '/soins' },
      { label: 'Sophrologie', href: '/sophrologie' },
      { label: 'Tarifs', href: '/tarifs' }
    ]
  },
  {
    title: 'Soléane & vous',
    links: [
      { label: 'Réservation', href: '/reservation' },
      { label: 'Coffrets cadeaux', href: '/coffrets' },
      { label: 'Avis clients', href: '/avis' },
      { label: 'Blog bien-être', href: '/blog' }
    ]
  },
  {
    title: 'Contact',
    links: [
      { label: 'Nous contacter', href: '/contact' },
      { label: 'Plan d\'accès', href: '/acces' },
      { label: 'Mentions légales', href: '/mentions-legales' },
      { label: 'CGV', href: '/cgv' }
    ]
  }
];

const contactInfo = {
  address: '123 Avenue de la Beauté, 75001 Paris',
  phone: '01 23 45 67 89',
  email: 'contact@soleane-institut.fr',
  hours: 'Lun-Sam: 9h-19h'
};

const socialLinks = [
  { platform: 'Facebook', url: 'https://facebook.com/soleane', icon: Facebook },
  { platform: 'Instagram', url: 'https://instagram.com/soleane', icon: Instagram }
];

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white">
      {/* Main Footer */}
      <div className="py-12">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="text-2xl font-serif text-primary-400 mb-4">
                Soléane
              </div>
              <p className="text-neutral-300 mb-6 leading-relaxed">
                Votre institut de beauté et de bien-être à Paris. 
                Découvrez nos soins relaxants et notre approche holistique 
                du bien-être pour retrouver harmonie et sérénité.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm text-neutral-300">
                <div className="flex items-center space-x-3">
                  <MapPin size={16} className="text-primary-400 flex-shrink-0" />
                  <span>{contactInfo.address}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone size={16} className="text-primary-400 flex-shrink-0" />
                  <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`} className="hover:text-primary-400 transition-colors duration-200">
                    {contactInfo.phone}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={16} className="text-primary-400 flex-shrink-0" />
                  <a href={`mailto:${contactInfo.email}`} className="hover:text-primary-400 transition-colors duration-200">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock size={16} className="text-primary-400 flex-shrink-0" />
                  <span>{contactInfo.hours}</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="text-lg font-semibold mb-4 text-primary-400">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link 
                        href={link.href}
                        className="text-neutral-300 hover:text-primary-400 transition-colors duration-200 text-sm"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </div>

      {/* Bottom Footer */}
      <div className="py-6 border-t border-neutral-800">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-neutral-400">
              © {new Date().getFullYear()} Soléane Institut. Tous droits réservés.
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-primary-400 transition-colors duration-200"
                    aria-label={social.platform}
                  >
                    <IconComponent size={20} />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4 text-sm text-neutral-400">
              <Link href="/mentions-legales" className="hover:text-primary-400 transition-colors duration-200">
                Mentions légales
              </Link>
              <span>•</span>
              <Link href="/confidentialite" className="hover:text-primary-400 transition-colors duration-200">
                Confidentialité
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}