#!/bin/bash

# Manual deployment script for Mum Mentor Frontend
# This script can be used to deploy manually to the server
# Usage: ./deployment/deploy.sh

set -e

# Configuration - Set these environment variables or update the defaults
SERVER_HOST="${SERVER_HOST:-your-server-host}"
SERVER_USER="${SERVER_USER:-root}"
SERVER_PASSWORD="${SERVER_PASSWORD}"
USE_PASSWORD="${USE_PASSWORD:-true}"
SSH_KEY="${SSH_KEY:-$HOME/.ssh/deploy_key}"
APP_DIR="/home/${SERVER_USER}/mum-mentor-fe"
APP_PORT="3000"

echo "================================================"
echo "Mum Mentor Frontend - Manual Deployment Script"
echo "================================================"
echo ""
echo "Server Host: $SERVER_HOST"
echo "Server User: $SERVER_USER"
echo "Authentication: $([ "$USE_PASSWORD" = "true" ] && echo "Password" || echo "SSH Key")"
echo ""

# Check authentication method
if [ "$USE_PASSWORD" = "true" ]; then
    # Check if sshpass is installed
    if ! command -v sshpass &> /dev/null; then
        echo "Error: sshpass is not installed. Install it with:"
        echo "  - Ubuntu/Debian: sudo apt-get install sshpass"
        echo "  - macOS: brew install hudochenkov/sshpass/sshpass"
        echo "  - Or set USE_PASSWORD=false to use SSH key authentication"
        exit 1
    fi

    # Check if password is provided
    if [ -z "$SERVER_PASSWORD" ]; then
        echo "Error: SERVER_PASSWORD environment variable is not set"
        echo "Usage: SERVER_PASSWORD='your-password' ./deployment/deploy.sh"
        exit 1
    fi

    SSH_CMD="sshpass -p $SERVER_PASSWORD ssh -o StrictHostKeyChecking=no"
    SCP_CMD="sshpass -p $SERVER_PASSWORD scp -o StrictHostKeyChecking=no"
else
    # Check if SSH key exists
    if [ ! -f "$SSH_KEY" ]; then
        echo "Error: SSH key not found at $SSH_KEY"
        echo "Please ensure the SSH key is in the correct location."
        exit 1
    fi

    SSH_CMD="ssh -i $SSH_KEY"
    SCP_CMD="scp -i $SSH_KEY"
fi

# Build the application locally
echo "Step 1: Building application locally..."
pnpm install --frozen-lockfile
pnpm build

# Create deployment package
echo "Step 2: Creating deployment package..."
mkdir -p deploy-package
cp -r .next deploy-package/
cp -r public deploy-package/ 2>/dev/null || true
cp package.json deploy-package/
cp pnpm-lock.yaml deploy-package/
cp -r scripts deploy-package/ 2>/dev/null || true
cp next.config.ts deploy-package/ 2>/dev/null || true
cp next.config.js deploy-package/ 2>/dev/null || true
cp .env.production deploy-package/.env 2>/dev/null || true
cp .env deploy-package/ 2>/dev/null || true
tar -czf deploy.tar.gz -C deploy-package .
rm -rf deploy-package

echo "Step 3: Copying deployment package to server..."
$SCP_CMD deploy.tar.gz ${SERVER_USER}@${SERVER_HOST}:/tmp/

echo "Step 4: Deploying on server..."
$SSH_CMD ${SERVER_USER}@${SERVER_HOST} << 'ENDSSH'
set -e

echo "Starting deployment process on server..."

# Install Node.js if not already installed
if ! command -v node &> /dev/null; then
    echo "Installing Node.js..."
    curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
    sudo apt-get install -y nodejs
else
    echo "Node.js already installed: $(node --version)"
fi

# Install pnpm if not already installed
if ! command -v pnpm &> /dev/null; then
    echo "Installing pnpm..."
    sudo npm install -g pnpm
else
    echo "pnpm already installed: $(pnpm --version)"
fi

# Install PM2 if not already installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    sudo npm install -g pm2
else
    echo "PM2 already installed: $(pm2 --version)"
fi

# Install nginx if not already installed
if ! command -v nginx &> /dev/null; then
    echo "Installing nginx..."
    sudo apt-get update
    sudo apt-get install -y nginx
else
    echo "nginx already installed: $(nginx -v 2>&1)"
fi

# Create application directory if it doesn't exist
mkdir -p ~/mum-mentor-fe

# Extract deployment package
echo "Extracting deployment package..."
tar -xzf /tmp/deploy.tar.gz -C ~/mum-mentor-fe/
rm /tmp/deploy.tar.gz

# Navigate to application directory
cd ~/mum-mentor-fe

# Remove or disable the prepare script from package.json to prevent husky errors
sed -i '/"prepare"/d' package.json

# Install production dependencies with ignore-scripts to skip all lifecycle scripts
echo "Installing production dependencies..."
pnpm install --prod --frozen-lockfile --ignore-scripts || {
    echo "Warning: pnpm install had warnings, continuing..."
    # If pnpm fails, try with --no-optional and other flags
    pnpm install --prod --ignore-scripts --no-optional || true
}

# Install sharp separately as it's needed for Next.js image optimization
echo "Installing sharp for image optimization..."
pnpm add sharp --ignore-scripts || echo "Warning: Could not install sharp, image optimization may not work"

# Configure nginx
echo "Configuring nginx..."
sudo tee /etc/nginx/sites-available/mum-mentor > /dev/null << 'EOF'
server {
    listen 80;
    listen [::]:80;
    server_name _;

    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript application/x-javascript application/xml+rss application/json;

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;

    client_max_body_size 10M;

    # Backend API routes - proxy to port 8000
    location /api {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # API documentation - proxy to port 8000
    location /docs {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # OpenAPI schema - proxy to port 8000
    location /openapi.json {
        proxy_pass http://localhost:8000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # Frontend - proxy to port 3000 (Next.js)
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_connect_timeout 60s;
        proxy_send_timeout 60s;
        proxy_read_timeout 60s;
    }

    # Next.js static files optimization
    location /_next/static {
        proxy_pass http://localhost:3000;
        proxy_cache_valid 60m;
        add_header Cache-Control "public, immutable";
    }

    # Health check endpoint
    location /health {
        access_log off;
        return 200 "healthy\n";
        add_header Content-Type text/plain;
    }
}
EOF

# Enable nginx site
sudo ln -sf /etc/nginx/sites-available/mum-mentor /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Test nginx configuration
echo "Testing nginx configuration..."
sudo nginx -t

# Reload nginx
echo "Reloading nginx..."
sudo systemctl reload nginx
sudo systemctl enable nginx

# Create PM2 ecosystem file
echo "Creating PM2 ecosystem configuration..."
cat > ecosystem.config.js << 'EOF'
module.exports = {
  apps: [{
    name: 'mum-mentor-fe',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    cwd: process.env.HOME + '/mum-mentor-fe',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    },
    error_file: process.env.HOME + '/mum-mentor-fe/logs/error.log',
    out_file: process.env.HOME + '/mum-mentor-fe/logs/out.log',
    log_date_format: 'YYYY-MM-DD HH:mm:ss Z'
  }]
};
EOF

# Create logs directory
mkdir -p ~/mum-mentor-fe/logs

# Stop existing PM2 process if running
echo "Stopping existing application (if running)..."
pm2 stop mum-mentor-fe 2>/dev/null || true
pm2 delete mum-mentor-fe 2>/dev/null || true

# Start application with PM2
echo "Starting application with PM2..."
pm2 start ecosystem.config.js

# Save PM2 process list
pm2 save

# Setup PM2 to start on system boot
echo "Configuring PM2 to start on boot..."
sudo env PATH=$PATH:/usr/bin pm2 startup systemd -u $USER --hp $HOME 2>/dev/null || true

echo ""
echo "================================================"
echo "Deployment completed successfully!"
echo "================================================"
echo "Application is running on port 3000"
echo "Nginx is proxying requests from port 80 to port 3000"
echo ""
echo "PM2 Status:"
pm2 status
echo ""
echo "Application logs:"
echo "  Error logs: ~/mum-mentor-fe/logs/error.log"
echo "  Output logs: ~/mum-mentor-fe/logs/out.log"
echo "  View logs: pm2 logs mum-mentor-fe"
echo ""
echo "Check application health:"
echo "  curl http://localhost:3000"
echo ""
ENDSSH

# Cleanup local deployment package
rm -f deploy.tar.gz

echo ""
echo "================================================"
echo "Local deployment script completed!"
echo "================================================"
echo "Your application should now be accessible at:"
echo "  http://$SERVER_HOST"
echo ""
echo "To check the application status on the server:"
if [ "$USE_PASSWORD" = "true" ]; then
    echo "  $SSH_CMD ${SERVER_USER}@${SERVER_HOST} 'pm2 status'"
    echo ""
    echo "To view application logs:"
    echo "  $SSH_CMD ${SERVER_USER}@${SERVER_HOST} 'pm2 logs mum-mentor-fe'"
    echo ""
    echo "To restart the application:"
    echo "  $SSH_CMD ${SERVER_USER}@${SERVER_HOST} 'pm2 restart mum-mentor-fe'"
else
    echo "  ssh -i $SSH_KEY ${SERVER_USER}@${SERVER_HOST} 'pm2 status'"
    echo ""
    echo "To view application logs:"
    echo "  ssh -i $SSH_KEY ${SERVER_USER}@${SERVER_HOST} 'pm2 logs mum-mentor-fe'"
    echo ""
    echo "To restart the application:"
    echo "  ssh -i $SSH_KEY ${SERVER_USER}@${SERVER_HOST} 'pm2 restart mum-mentor-fe'"
fi
echo ""