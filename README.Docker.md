# Docker Deployment Guide

## Quick Start

### Development
```bash
docker-compose up --build
```
Access: http://localhost:3000

### Production
```bash
./scripts/deploy.sh
```
Access: http://localhost

## Manual Commands

### Build Image
```bash
docker build -t astraval-brooms .
```

### Run Container
```bash
docker run -p 3000:80 astraval-brooms
```

### Production Deployment
```bash
docker-compose -f docker-compose.prod.yml up -d
```

## Project Structure
```
├── Dockerfile              # Multi-stage build
├── nginx.conf              # Nginx configuration
├── docker-compose.yml      # Development
├── docker-compose.prod.yml # Production
├── .dockerignore           # Docker ignore
└── scripts/
    └── deploy.sh           # Deployment script
```