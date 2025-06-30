#!/bin/bash

# Script de déploiement pour Soléane Massage
# Usage: ./deploy.sh [environment]

set -e

ENVIRONMENT=${1:-production}
PROJECT_NAME="soleane-massage"

echo "🚀 Déploiement de $PROJECT_NAME en cours..."
echo "📦 Environnement: $ENVIRONMENT"

# Vérifier que nous sommes dans le bon répertoire
if [ ! -f "package.json" ]; then
    echo "❌ Erreur: package.json non trouvé. Êtes-vous dans le bon répertoire ?"
    exit 1
fi

# Vérifier que Docker est disponible
if ! command -v docker &> /dev/null; then
    echo "❌ Erreur: Docker n'est pas installé ou n'est pas dans le PATH"
    exit 1
fi

echo "🔍 Vérification des fichiers..."

# Vérifier les fichiers essentiels
REQUIRED_FILES=("Dockerfile" "next.config.ts" "package.json")
for file in "${REQUIRED_FILES[@]}"; do
    if [ ! -f "$file" ]; then
        echo "❌ Erreur: Fichier manquant: $file"
        exit 1
    fi
done

echo "✅ Tous les fichiers requis sont présents"

# Build de test local
echo "🔨 Test du build local..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Erreur: Le build local a échoué"
    exit 1
fi

echo "✅ Build local réussi"

# Build de l'image Docker
echo "🐳 Construction de l'image Docker..."
docker build -t $PROJECT_NAME:latest .

if [ $? -ne 0 ]; then
    echo "❌ Erreur: La construction Docker a échoué"
    exit 1
fi

echo "✅ Image Docker construite avec succès"

# Test de l'image Docker
echo "🧪 Test de l'image Docker..."
CONTAINER_ID=$(docker run -d -p 3002:3002 $PROJECT_NAME:latest)

# Attendre que le conteneur soit prêt
sleep 5

# Test du health check
HEALTH_STATUS=$(curl -s -o /dev/null -w "%{http_code}" http://localhost:3002/api/health)

if [ "$HEALTH_STATUS" = "200" ]; then
    echo "✅ Health check réussi"
else
    echo "❌ Erreur: Health check échoué (Status: $HEALTH_STATUS)"
    docker stop $CONTAINER_ID >/dev/null 2>&1
    docker rm $CONTAINER_ID >/dev/null 2>&1
    exit 1
fi

# Nettoyer le conteneur de test
docker stop $CONTAINER_ID >/dev/null 2>&1
docker rm $CONTAINER_ID >/dev/null 2>&1

echo "🎉 Déploiement validé avec succès!"
echo ""
echo "📋 Instructions pour Coolify:"
echo "1. Connectez votre repository Git à Coolify"
echo "2. Coolify détectera automatiquement le Dockerfile"
echo "3. Configurez les variables d'environnement si nécessaire"
echo "4. Déployez !"
echo ""
echo "🔗 Repository: https://github.com/Manu5921/massage.git"
echo "🐳 Image Docker prête: $PROJECT_NAME:latest"
echo ""