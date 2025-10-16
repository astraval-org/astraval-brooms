#!/bin/bash

# Push Astraval Brooms to Docker Hub

echo "🐳 Building and pushing to Docker Hub..."

# Your Docker Hub username
DOCKER_USERNAME="kkbughunter"
IMAGE_NAME="astraval-brooms"
TAG="latest"

# Create and use buildx builder for multi-platform
docker buildx create --use --name multiplatform-builder

# Build for multiple platforms (AMD64 for VPS, ARM64 for Mac)
docker buildx build --platform linux/amd64,linux/arm64 -t $DOCKER_USERNAME/$IMAGE_NAME:$TAG --push .

echo "✅ Image pushed to Docker Hub!"
echo "🌐 Available at: https://hub.docker.com/r/$DOCKER_USERNAME/$IMAGE_NAME"
echo "📋 Pull command: docker pull $DOCKER_USERNAME/$IMAGE_NAME:$TAG"