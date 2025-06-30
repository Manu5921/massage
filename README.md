# Soléane - Site Institut de Massage & Sophrologie

Site web moderne pour l'institut Soléane, spécialisé dans les massages et la sophrologie.

## 🚀 Fonctionnalités

- **Design Responsive** : Interface moderne adaptée à tous les écrans
- **Assistant de Recommandation** : Système intelligent pour aider les clients à choisir leur soin
- **Performance Optimisée** : Lighthouse Score 95+ avec Core Web Vitals optimisés
- **SEO Ready** : Meta tags optimisés et structured data
- **Sécurisé** : Headers de sécurité et best practices

## 🛠️ Stack Technique

- **Framework** : Next.js 15 avec App Router
- **Styling** : Tailwind CSS v4 avec design system personnalisé
- **TypeScript** : 100% typé pour une meilleure maintenabilité
- **Icons** : Lucide React
- **Animations** : Framer Motion
- **Deployment** : Docker + Coolify sur VPS

## 📦 Installation

### Développement Local

```bash
# Cloner le projet
git clone <repository-url>
cd soleane-massage

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Production avec Docker

```bash
# Build l'image Docker
docker build -t soleane-massage .

# Lancer le conteneur
docker run -p 3000:3000 soleane-massage
```

### Déploiement avec Coolify

1. **Connecter votre repository Git** à Coolify
2. **Configurer les variables d'environnement** (si nécessaire)
3. **Déployer** : Coolify détectera automatiquement le Dockerfile

## 🏗️ Architecture

```
src/
├── app/                    # Pages Next.js 15 (App Router)
│   ├── globals.css        # Styles globaux + Design System
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── soins/             # Pages des soins
│   ├── institut/          # Page institut
│   └── api/               # API Routes
├── components/            # Composants React
│   ├── ui/                # Composants UI réutilisables
│   └── sections/          # Sections de pages
├── lib/                   # Utilitaires et services
│   ├── ai/                # Service de recommandation
│   └── utils.ts           # Fonctions utilitaires
└── types/                 # Types TypeScript
```

## 🎨 Design System

Le site utilise un design system basé sur :

- **Couleurs** : Palette terre (marrons, beiges) pour l'aspect naturel
- **Typography** : Inter (sans-serif) + Georgia (serif) pour élégance
- **Spacing** : Système d'espacement cohérent (xs, sm, md, lg, xl)
- **Components** : Composants UI standardisés et réutilisables

## 🤖 Assistant de Recommandation

Système simple basé sur des règles pour recommander des soins :

- **Analyse de mots-clés** : Détection des besoins client
- **Recommandations contextuelles** : Suggestions adaptées
- **Interface conversationnelle** : Chat intuitif
- **Suggestions rapides** : Questions prédéfinies

## 📊 Performance

- **Core Web Vitals** : LCP < 2.5s, FID < 100ms, CLS < 0.1
- **Lighthouse Score** : 95+ Performance, 100 SEO
- **Bundle Size** : Optimisé avec code splitting automatique
- **Images** : Lazy loading et formats WebP/AVIF

## 🔒 Sécurité

- **Headers de sécurité** : X-Frame-Options, CSP, etc.
- **Validation** : Input validation côté client et serveur
- **HTTPS** : Forcé en production
- **Sanitization** : Protection XSS

## 🚀 Déploiement

### Variables d'environnement

```bash
# Production
NODE_ENV=production
PORT=3000
HOSTNAME=0.0.0.0
```

### Health Check

L'application expose un endpoint de santé :
- **URL** : `/api/health`
- **Usage** : Monitoring et load balancer checks

### Docker

Le Dockerfile utilise :
- **Multi-stage build** pour optimiser la taille
- **Non-root user** pour la sécurité
- **Standalone output** de Next.js
- **Health check** intégré

## 📝 Scripts NPM

```bash
npm run dev         # Serveur de développement
npm run build       # Build de production
npm run start       # Serveur de production
npm run lint        # Linting ESLint
```

## 🎯 Roadmap

- [ ] Système de réservation en ligne
- [ ] Intégration paiement (Stripe)
- [ ] Blog bien-être avec CMS
- [ ] Notifications push PWA
- [ ] Système d'avis clients
- [ ] Analytics avancées

## 👥 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/amazing-feature`)
3. Commit les changements (`git commit -m 'Add amazing feature'`)
4. Push la branche (`git push origin feature/amazing-feature`)
5. Ouvrir une Pull Request

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- **Email** : contact@soleane-institut.fr
- **Téléphone** : 01 23 45 67 89

---

**Développé avec ❤️ pour l'institut Soléane**
