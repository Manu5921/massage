import { servicesWithImages } from '@/lib/data';
import { AIRecommendation, Service } from '@/types';

// Keywords for service matching
const SERVICE_KEYWORDS = {
  'sophro-massage': [
    'stress', 'anxiété', 'tension', 'émotionnel', 'psychique', 'corps-esprit', 
    'sophrologie', 'relaxation profonde', 'harmonisation', 'nouveauté'
  ],
  'soin-excellence-secrets': [
    'premium', 'excellence', 'complet', 'sothys', 'luxe', 'résultats', 
    'efficacité', 'qualité', 'haut de gamme'
  ],
  'rituel-relaxant-homme': [
    'homme', 'masculin', 'détente', 'pause', 'quotidien', 'reconnexion',
    'moment pour soi', 'relaxation'
  ],
  'massage-cranien': [
    'tête', 'crâne', 'maux de tête', 'migraine', 'circulation', 'indien',
    'court', 'rapide', '30min', 'ciblé', 'budget'
  ]
};

// Predefined responses for common questions
const PREDEFINED_RESPONSES = {
  greeting: [
    "Bonjour ! Je suis là pour vous aider à choisir le soin parfait pour votre bien-être. Pouvez-vous me dire ce que vous recherchez aujourd'hui ?",
    "Bienvenue chez Soléane ! Comment puis-je vous aider à trouver le soin idéal pour vous détendre ?"
  ],
  budget: [
    "Nous avons des soins pour tous les budgets ! Le massage crânien à 45€ (30min) est parfait pour découvrir, ou le sophro-massage à 85€ (1h15) pour une expérience complète.",
    "Quel budget souhaitez-vous consacrer à votre moment de détente ? Nos soins vont de 45€ à 120€."
  ],
  time: [
    "Si vous avez peu de temps, le massage crânien (30min) est parfait. Pour une détente complète, je recommande 1h à 1h30.",
    "Combien de temps souhaitez-vous consacrer à votre soin ? Nous avons des options de 30min à 1h30."
  ],
  stress: [
    "Pour le stress, je recommande vivement notre sophro-massage (nouveauté) ! Il combine relaxation corporelle et techniques de sophrologie pour une détente profonde.",
    "Le stress demande une approche globale. Notre sophro-massage est spécialement conçu pour libérer les tensions physiques et émotionnelles."
  ]
};

export class RecommendationService {
  /**
   * Simple rule-based service recommendations
   */
  static getServiceRecommendations(userMessage: string): AIRecommendation[] {
    const message = userMessage.toLowerCase();
    const recommendations: AIRecommendation[] = [];

    // Check each service for keyword matches
    Object.entries(SERVICE_KEYWORDS).forEach(([serviceId, keywords]) => {
      const matchCount = keywords.filter(keyword => 
        message.includes(keyword.toLowerCase())
      ).length;

      if (matchCount > 0) {
        const confidence = Math.min(matchCount / keywords.length + 0.3, 1);
        const reasons = keywords
          .filter(keyword => message.includes(keyword.toLowerCase()))
          .map(keyword => `Correspond à votre besoin : ${keyword}`);

        recommendations.push({
          serviceId,
          confidence,
          reasons
        });
      }
    });

    // Sort by confidence and return top 2
    return recommendations
      .sort((a, b) => b.confidence - a.confidence)
      .slice(0, 2);
  }

  /**
   * Generate contextual response
   */
  static generateResponse(userMessage: string): string {
    const message = userMessage.toLowerCase();

    // Greeting detection
    if (message.match(/bonjour|salut|hello|bonsoir/)) {
      return this.getRandomResponse(PREDEFINED_RESPONSES.greeting);
    }

    // Budget questions
    if (message.match(/prix|coût|budget|tarif|combien/)) {
      return this.getRandomResponse(PREDEFINED_RESPONSES.budget);
    }

    // Time questions
    if (message.match(/temps|durée|combien de temps|rapide|court/)) {
      return this.getRandomResponse(PREDEFINED_RESPONSES.time);
    }

    // Stress-related
    if (message.match(/stress|anxieux|tendu|fatigue|épuisé/)) {
      return this.getRandomResponse(PREDEFINED_RESPONSES.stress);
    }

    // Get recommendations and provide personalized response
    const recommendations = this.getServiceRecommendations(userMessage);
    
    if (recommendations.length > 0) {
      const topReco = recommendations[0];
      const service = this.findServiceById(topReco.serviceId);
      
      if (service) {
        return `Basé sur votre demande, je vous recommande le **${service.title}** (${service.price}, ${service.duration}). ${service.description} Souhaitez-vous plus d'informations sur ce soin ?`;
      }
    }

    // Default response
    return "Je comprends vos besoins. Pouvez-vous me dire si vous recherchez plutôt : \n• Une détente rapide (30min) \n• Une relaxation complète (1h+) \n• Un soin spécifique pour le stress \n• Une expérience premium ?";
  }

  /**
   * Get random response from array
   */
  private static getRandomResponse(responses: string[]): string {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  /**
   * Enhanced service descriptions
   */
  static getEnhancedServiceDescription(serviceId: string): string {
    const descriptions = {
      'sophro-massage': "Notre soin signature alliant massage thérapeutique et techniques de sophrologie. Parfait pour libérer les tensions profondes et retrouver l'équilibre corps-esprit.",
      'soin-excellence-secrets': "L'expérience premium Sothys qui transforme votre peau tout en vous offrant une relaxation exceptionnelle. Résultats visibles garantis.",
      'rituel-relaxant-homme': "Un moment de détente masculine authentique, conçu spécialement pour vous reconnecter à votre bien-être dans notre cadre apaisant.",
      'massage-cranien': "Technique ancestrale indienne ciblée sur les tensions crâniennes. Idéal pour soulager stress et maux de tête rapidement."
    };

    return descriptions[serviceId as keyof typeof descriptions] || '';
  }

  /**
   * Get monthly promotions summary
   */
  static getMonthlySummary(): string {
    const currentMonth = new Date().toLocaleDateString('fr-FR', { month: 'long' });
    return `Profitez de nos offres spéciales de ${currentMonth} : -15% sur le sophro-massage pour les nouveaux clients et formules découverte à partir de 45€ !`;
  }

  /**
   * Get available services
   */
  static getAvailableServices(): Service[] {
    return servicesWithImages;
  }

  /**
   * Find service by ID
   */
  static findServiceById(serviceId: string): Service | undefined {
    return servicesWithImages.find(service => service.id === serviceId);
  }

  /**
   * Get quick service suggestions
   */
  static getQuickSuggestions(): string[] {
    return [
      "Je cherche à évacuer mon stress",
      "J'aimerais un soin relaxant",
      "Quel soin pour 30 minutes ?",
      "Que recommandez-vous pour débuter ?",
      "J'ai un budget de 50-80€"
    ];
  }
}