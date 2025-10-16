#!/bin/bash

echo "🐳 Starting Docker and deploying Astraval Brooms..."

# Start Docker Desktop (macOS)
open -a Docker

echo "⏳ Waiting for Docker to start..."
while ! docker info > /dev/null 2>&1; do
    sleep 2
done

echo "✅ Docker is running!"
echo "🚀 Building and starting containers..."

# Build and run
docker-compose up --build

echo "🌐 App available at: http://localhost:3000"