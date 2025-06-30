import { Service } from '@/types';

export const services: Service[] = [
  {
    id: 'sophro-massage',
    title: 'Sophro massage (nouveauté)',
    description: 'Le Sophro-massage est proposé lorsque se présente une problématique qui nécessite un travail sur le corps et l\'esprit. Besoin de libérer des tensions au niveau psychique, émotionnel, corporel et énergétique.',
    price: '85€',
    duration: '1h15',
    image: '/images/sophro-massage.jpg',
    benefits: [
      'Libération des tensions psychiques',
      'Détente corporelle profonde',
      'Harmonisation énergétique',
      'Reconnexion corps-esprit'
    ],
    category: 'therapeutique',
    featured: true
  },
  {
    id: 'soin-excellence-secrets',
    title: 'Soin Excellence Corps « Secret de Sothys »',
    description: 'Le Soin excellence Secrets de Sothys, conjugue avec bonheur l\'efficacité d\'un soin du corps et la détente d\'un massage relaxant.',
    price: '120€',
    duration: '1h30',
    image: '/images/soin-excellence.jpg',
    benefits: [
      'Efficacité soin du corps',
      'Massage relaxant intégré',
      'Produits Sothys premium',
      'Résultats visibles immédiatement'
    ],
    category: 'beaute',
    featured: false
  },
  {
    id: 'rituel-relaxant-homme',
    title: 'Rituel Relaxant Homme',
    description: 'Soin unique pour un pur moment de détente, ce soin offre une parenthèse dans votre quotidien et vous permet de vous reconnecter à vous-même.',
    price: '75€',
    duration: '1h',
    image: '/images/rituel-homme.jpg',
    benefits: [
      'Moment de détente pure',
      'Reconnexion à soi',
      'Soin adapté aux hommes',
      'Pause dans le quotidien'
    ],
    category: 'relaxation',
    featured: false
  },
  {
    id: 'massage-cranien',
    title: 'Massage Crânien',
    description: 'Massage du crâne originaire d\'Inde, ce massage permet de libérer les tensions accumulées dans cette zone sensible et de favoriser la circulation.',
    price: '45€',
    duration: '30min',
    image: '/images/massage-cranien.jpg',
    benefits: [
      'Libération des tensions crâniennes',
      'Amélioration de la circulation',
      'Technique originaire d\'Inde',
      'Détente profonde'
    ],
    category: 'therapeutique',
    featured: false
  }
];

// Images par défaut pour le développement
export const defaultImages = {
  hero: '/images/hero-spa.jpg',
  sophroMassage: '/images/sophro-massage.jpg',
  soinExcellence: '/images/soin-excellence.jpg',
  rituelHomme: '/images/rituel-homme.jpg',
  massageCranien: '/images/massage-cranien.jpg',
  institut: '/images/institut.jpg',
  coffretCadeau: '/images/coffret-cadeau.jpg'
};

// Placeholder pour les images manquantes
export const placeholderImages = {
  hero: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
  sophroMassage: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  soinExcellence: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  rituelHomme: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  massageCranien: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  institut: 'https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80',
  coffretCadeau: 'https://images.unsplash.com/photo-1549890762-0a3f8933bc97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80'
};

// Mettre à jour les services avec les images placeholder
export const servicesWithImages: Service[] = services.map(service => ({
  ...service,
  image: placeholderImages[service.id as keyof typeof placeholderImages] || placeholderImages.institut
}));