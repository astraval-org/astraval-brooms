#!/bin/bash

# VPS Setup Script - Run this on your Linux VPS

echo "🔧 Setting up VPS for Astraval Brooms..."

# Update system
sudo apt update && sudo apt upgrade -y

# Install Docker
echo "📦 Installing Docker..."
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER

# Install Docker Compose
echo "📦 Installing Docker Compose..."
sudo apt install docker-compose-plugin -y

# Setup firewall
echo "🔒 Configuring firewall..."
sudo ufw allow 80
sudo ufw allow 22
sudo ufw --force enable

# Create app directory
mkdir -p ~/astraval-brooms

echo "✅ VPS setup complete!"
echo "📋 Next steps:"
echo "1. Upload your project files to ~/astraval-brooms"
echo "2. Run: cd ~/astraval-brooms && ./scripts/vps-deploy.sh"
echo "3. Access: http://$(curl -s ifconfig.me)"