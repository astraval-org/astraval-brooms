# VPS Deployment Guide

## Prerequisites on VPS

### 1. Install Docker
```bash
# Ubuntu/Debian
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh
sudo usermod -aG docker $USER
```

### 2. Install Docker Compose
```bash
sudo apt update
sudo apt install docker-compose-plugin
```

## Deployment Steps

### Method 1: Git Clone (Recommended)
```bash
# On your VPS
git clone https://github.com/your-username/astraval-brooms.git
cd astraval-brooms
./scripts/vps-deploy.sh
```

### Method 2: File Transfer
```bash
# From your local machine
scp -r . user@your-vps-ip:/home/user/astraval-brooms

# On VPS
cd /home/user/astraval-brooms
./scripts/vps-deploy.sh
```

### Method 3: Manual Commands
```bash
# On VPS
docker-compose -f docker-compose.prod.yml up -d --build
```

## Access Website
- **URL:** http://your-vps-ip
- **Port:** 80 (default HTTP)

## Management Commands

### View Logs
```bash
docker logs astraval-brooms-prod
```

### Stop Application
```bash
docker-compose -f docker-compose.prod.yml down
```

### Update Deployment
```bash
git pull origin main
./scripts/vps-deploy.sh
```

## Domain Setup (Optional)

### 1. Point Domain to VPS IP
- Add A record: `yourdomain.com` → `your-vps-ip`

### 2. Update docker-compose.prod.yml
```yaml
labels:
  - "traefik.http.routers.astraval.rule=Host(`yourdomain.com`)"
```

## Firewall Setup
```bash
# Allow HTTP traffic
sudo ufw allow 80
sudo ufw allow 22  # SSH
sudo ufw enable
```