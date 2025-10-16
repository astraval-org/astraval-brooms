# Docker Hub Deployment Guide

## Step 1: Push to Docker Hub

### 1. Create Docker Hub Account
- Go to https://hub.docker.com
- Create free account

### 2. Ready to Push
Scripts already configured for username: `kkbughunter`

### 3. Push Image
```bash
./scripts/push-to-dockerhub.sh
```

## Step 2: Deploy on VPS

### Method 1: Single Command
```bash
# On VPS
docker run -d --name astraval-brooms -p 80:80 --restart always kkbughunter/astraval-brooms:latest
```

### Method 2: Using Script
```bash
# Copy script to VPS
scp scripts/vps-pull-deploy.sh user@vps-ip:~/
ssh user@vps-ip
chmod +x vps-pull-deploy.sh
./vps-pull-deploy.sh
```

### Method 3: Docker Compose
```bash
# Copy docker-compose.hub.yml to VPS
scp docker-compose.hub.yml user@vps-ip:~/
ssh user@vps-ip
docker-compose -f docker-compose.hub.yml up -d
```

## Benefits
✅ No need to transfer source code  
✅ Fast deployment (just pull image)  
✅ Version control with tags  
✅ Public/private repositories  
✅ Automated builds  

## Your Image URL
After pushing: `https://hub.docker.com/r/kkbughunter/astraval-brooms`

## Update Deployment
```bash
# Push new version
./scripts/push-to-dockerhub.sh

# Update on VPS
docker pull kkbughunter/astraval-brooms:latest
docker restart astraval-brooms-prod
```