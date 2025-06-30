// Types pour les services de massage
export interface Service {
  id: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  image: string;
  benefits: string[];
  category: 'relaxation' | 'therapeutique' | 'beaute' | 'couple';
  featured: boolean;
}

// Types pour les pages
export interface PageProps {
  children: React.ReactNode;
}

// Types pour les composants
export interface MenuItem {
  label: string;
  href: string;
  submenu?: MenuItem[];
}

export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: number;
  image?: string;
  service?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'services' | 'reservation' | 'tarifs' | 'institut';
}

export interface ValueProposition {
  icon: string;
  title: string;
  description: string;
}

// Types pour l'IA
export interface AIRecommendation {
  serviceId: string;
  confidence: number;
  reasons: string[];
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

// Types pour la réservation
export interface BookingSlot {
  id: string;
  date: Date;
  startTime: string;
  endTime: string;
  available: boolean;
  serviceId?: string;
}

export interface BookingData {
  serviceId: string;
  slotId: string;
  clientName: string;
  clientEmail: string;
  clientPhone: string;
  specialRequests?: string;
}

// Types pour le CMS
export interface CMSImage {
  url: string;
  alt: string;
  width?: number;
  height?: number;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  image: CMSImage;
  publishedAt: Date;
  tags: string[];
}

// Types pour l'API
export interface APIResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}