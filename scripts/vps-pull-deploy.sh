#!/bin/bash

# VPS deployment using Docker Hub image

echo "🚀 Deploying from Docker Hub..."

# Your Docker Hub username
DOCKER_USERNAME="kkbughunter"
IMAGE_NAME="astraval-brooms"

# Pull latest image
docker pull $DOCKER_USERNAME/$IMAGE_NAME:latest

# Stop existing container
docker stop astraval-brooms-prod 2>/dev/null || true
docker rm astraval-brooms-prod 2>/dev/null || true

# Run new container
docker run -d \
  --name astraval-brooms-prod \
  --restart always \
  -p 80:80 \
  $DOCKER_USERNAME/$IMAGE_NAME:latest

echo "✅ Deployment complete!"
echo "🌐 Website live at: http://$(curl -s ifconfig.me)"