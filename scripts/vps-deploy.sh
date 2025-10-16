#!/bin/bash

# VPS Deployment Script for Astraval Brooms

echo "🚀 Deploying Astraval Brooms to VPS..."

# Stop existing containers
docker-compose -f docker-compose.prod.yml down

# Pull latest changes (if using git)
git pull origin main

# Build and deploy
docker-compose -f docker-compose.prod.yml up -d --build

# Clean up unused images
docker image prune -f

echo "✅ Deployment complete!"
echo "🌐 Website live at: http://your-vps-ip"