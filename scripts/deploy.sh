#!/bin/bash

# Astraval Brooms Deployment Script

echo "🚀 Starting Astraval Brooms deployment..."

# Build and start containers
docker-compose -f docker-compose.prod.yml down
docker-compose -f docker-compose.prod.yml build --no-cache
docker-compose -f docker-compose.prod.yml up -d

echo "✅ Deployment complete! App running on port 80"
echo "🌐 Visit: http://localhost"