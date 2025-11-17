# Deployment Guide

This guide explains how to deploy the Mum Mentor Frontend application to your server.

## Server Configuration

The deployment now supports both **SSH key** and **password-based** authentication methods.

- **Application Port**: 3000 (internal)
- **Web Port**: 80 (nginx reverse proxy)
- **Application Directory**: `~/mum-mentor-fe` (in user's home directory)
- **Authentication**: Password or SSH key-based

## Architecture

The deployment uses the following stack:

- **Next.js**: Frontend framework
- **PM2**: Process manager to keep the application running
- **nginx**: Reverse proxy server (proxies port 80 to port 3000)
- **Node.js 20**: Runtime environment
- **pnpm**: Package manager

## Deployment Methods

### Method 1: Automatic Deployment via GitHub Actions (Recommended)

The application automatically deploys when you push to `main` or `dev` branches.

#### GitHub Secrets Setup

You need to configure the following secrets in your GitHub repository:

1. Go to your GitHub repository
2. Navigate to **Settings** → **Secrets and variables** → **Actions**
3. Click **New repository secret** and add each of the following:

**Required Secrets:**

| Secret Name       | Description                               | Example                              |
| ----------------- | ----------------------------------------- | ------------------------------------ |
| `SERVER_HOST`     | Server hostname or IP address             | `your-server.com` or `123.456.789.0` |
| `SERVER_USER`     | SSH username for server access            | `root` or `ubuntu`                   |
| `SERVER_PASSWORD` | Password for SSH authentication           | Your secure password                 |
| `SERVER_URL`      | Public URL of your application (optional) | `https://your-app.com`               |

**How to Add Each Secret:**

- Click **New repository secret**
- Enter the **Name** (e.g., `SERVER_HOST`)
- Enter the **Value** (your actual server hostname/IP/password)
- Click **Add secret**
- Repeat for each required secret

#### Triggering Deployment

1. **Automatic deployment** - Push to main or dev branch:

   ```bash
   git push origin main
   # or
   git push origin dev
   ```

2. **Monitor the deployment:**
   - Go to **Actions** tab in your GitHub repository
   - Click on the latest workflow run
   - Watch the deployment progress

#### Manual Trigger

You can also trigger deployment manually:

- Go to **Actions** tab → **Deploy** workflow
- Click **Run workflow** → Select branch → **Run workflow**

### Method 2: Manual Deployment via Script

Use the provided deployment script for manual deployments. The script supports both password and SSH key authentication.

#### Prerequisites

For password-based authentication, install `sshpass`:

```bash
# Ubuntu/Debian
sudo apt-get install sshpass

# macOS
brew install hudochenkov/sshpass/sshpass
```

#### Usage

**Option A: Password Authentication (Default)**

```bash
SERVER_HOST="your-server.com" \
SERVER_USER="root" \
SERVER_PASSWORD="your-password" \
./deployment/deploy.sh
```

**Option B: SSH Key Authentication**

```bash
USE_PASSWORD=false \
SERVER_HOST="your-server.com" \
SERVER_USER="root" \
SSH_KEY="$HOME/.ssh/your-key.pem" \
./deployment/deploy.sh
```

#### Environment Variables

| Variable          | Description                 | Default                 | Required            |
| ----------------- | --------------------------- | ----------------------- | ------------------- |
| `SERVER_HOST`     | Server hostname or IP       | `your-server-host`      | Yes                 |
| `SERVER_USER`     | SSH username                | `root`                  | Yes                 |
| `SERVER_PASSWORD` | SSH password                | -                       | Yes (password auth) |
| `USE_PASSWORD`    | Use password authentication | `true`                  | No                  |
| `SSH_KEY`         | Path to SSH private key     | `$HOME/.ssh/deploy_key` | Yes (key auth)      |

#### What the Script Does

1. Build the application locally
2. Create a deployment package
3. Copy it to the server (via SCP)
4. Install all dependencies on the server
5. Configure nginx
6. Start the application with PM2

## What Gets Installed on the Server

The deployment process automatically installs:

1. **Node.js 20** (if not already installed)
2. **pnpm** (package manager)
3. **PM2** (process manager)
4. **nginx** (web server)

## Server Configuration

### nginx Configuration

The nginx configuration is automatically created at `/etc/nginx/sites-available/mum-mentor` with:

- Reverse proxy from port 80 to port 3000
- Gzip compression enabled
- Security headers
- WebSocket support for Next.js hot reload (dev mode)
- Optimized caching for static assets

Reference configuration: `deployment/nginx.conf`

### PM2 Configuration

The PM2 process manager configuration:

- Automatic restart on crashes
- Memory limit: 1GB
- Logs directory: `~/mum-mentor-fe/logs/`
- Auto-start on server reboot

Reference configuration: `deployment/ecosystem.config.js`

## Server Requirements

### Enable Password Authentication (if using password auth)

If you're using password-based authentication, ensure it's enabled on your server:

```bash
# SSH into your server
ssh user@your-server

# Edit SSH configuration
sudo nano /etc/ssh/sshd_config

# Set or verify these options:
PasswordAuthentication yes
PermitRootLogin yes  # or 'prohibit-password' if you want key-only for root

# Restart SSH service
sudo systemctl restart sshd
```

**Security Note:** It's recommended to:

- Use strong passwords
- Limit SSH access by IP address
- Consider using SSH keys for enhanced security
- Disable root login after setting up a non-root user with sudo access

## Post-Deployment

### Verify Deployment

1. **Check if the application is running:**

   Using password authentication:

   ```bash
   sshpass -p "your-password" ssh -o StrictHostKeyChecking=no user@your-server 'pm2 status'
   ```

   Using SSH key:

   ```bash
   ssh -i ~/.ssh/your-key.pem user@your-server 'pm2 status'
   ```

2. **View application logs:**

   Using password authentication:

   ```bash
   sshpass -p "your-password" ssh -o StrictHostKeyChecking=no user@your-server 'pm2 logs mum-mentor-fe'
   ```

   Using SSH key:

   ```bash
   ssh -i ~/.ssh/your-key.pem user@your-server 'pm2 logs mum-mentor-fe'
   ```

3. **Check nginx status:**

   Using password authentication:

   ```bash
   sshpass -p "your-password" ssh -o StrictHostKeyChecking=no user@your-server 'sudo systemctl status nginx'
   ```

   Using SSH key:

   ```bash
   ssh -i ~/.ssh/your-key.pem user@your-server 'sudo systemctl status nginx'
   ```

4. **Access the application:**
   - Open browser: `http://your-server-host`

### Common PM2 Commands

Run these on the server (SSH into it first):

```bash
# View application status
pm2 status

# View logs (real-time)
pm2 logs mum-mentor-fe

# View last 100 lines of logs
pm2 logs mum-mentor-fe --lines 100

# Restart application
pm2 restart mum-mentor-fe

# Stop application
pm2 stop mum-mentor-fe

# Start application
pm2 start ecosystem.config.js

# Monitor resources
pm2 monit

# View detailed info
pm2 info mum-mentor-fe
```

### Common nginx Commands

Run these on the server (SSH into it first):

```bash
# Check nginx status
sudo systemctl status nginx

# Restart nginx
sudo systemctl restart nginx

# Reload nginx configuration
sudo systemctl reload nginx

# Test nginx configuration
sudo nginx -t

# View nginx error logs
sudo tail -f /var/log/nginx/error.log

# View nginx access logs
sudo tail -f /var/log/nginx/access.log
```

## Troubleshooting

### Application not accessible

1. Check if PM2 process is running:

   ```bash
   pm2 status
   ```

2. Check if port 3000 is listening:

   ```bash
   sudo netstat -tlnp | grep 3000
   ```

3. Check application logs:
   ```bash
   pm2 logs mum-mentor-fe --lines 50
   ```

### nginx not working

1. Check nginx status:

   ```bash
   sudo systemctl status nginx
   ```

2. Test nginx configuration:

   ```bash
   sudo nginx -t
   ```

3. Check nginx error logs:
   ```bash
   sudo tail -50 /var/log/nginx/error.log
   ```

### High memory usage

1. Check PM2 memory usage:

   ```bash
   pm2 monit
   ```

2. Restart the application:
   ```bash
   pm2 restart mum-mentor-fe
   ```

### Application keeps crashing

1. Check error logs:

   ```bash
   cat ~/mum-mentor-fe/logs/error.log
   ```

2. Check if all dependencies are installed:

   ```bash
   cd ~/mum-mentor-fe
   pnpm install --prod --frozen-lockfile
   ```

3. Verify the build is valid:
   ```bash
   ls -la ~/mum-mentor-fe/.next
   ```

## Security Considerations

### Firewall Configuration

Ensure your EC2 security group allows:

- Port 80 (HTTP) from 0.0.0.0/0
- Port 443 (HTTPS) from 0.0.0.0/0 (if using SSL)
- Port 22 (SSH) from your IP address only

### SSL/TLS Configuration (Optional)

To enable HTTPS:

1. Install Certbot:

   ```bash
   sudo apt-get update
   sudo apt-get install certbot python3-certbot-nginx
   ```

2. Obtain SSL certificate:

   ```bash
   sudo certbot --nginx -d your-domain.com
   ```

3. Certbot will automatically configure nginx for HTTPS

Reference HTTPS configuration is commented out in `deployment/nginx.conf`

## Monitoring and Logs

### Application Logs

- **Error logs**: `~/mum-mentor-fe/logs/error.log`
- **Output logs**: `~/mum-mentor-fe/logs/out.log`
- **PM2 logs**: `pm2 logs mum-mentor-fe`

### Web Server Logs

- **nginx access logs**: `/var/log/nginx/access.log`
- **nginx error logs**: `/var/log/nginx/error.log`

### Monitoring

Set up PM2 monitoring (optional):

```bash
pm2 install pm2-logrotate  # Automatic log rotation
pm2 set pm2-logrotate:max_size 10M
pm2 set pm2-logrotate:retain 7
```

## Maintenance

### Updating the Application

#### Via GitHub Actions

Simply push your changes to the main or dev branch:

```bash
git push origin main
```

#### Manual Update

Run the deployment script:

```bash
./deployment/deploy.sh
```

### Server Maintenance

1. **Update system packages**:

   ```bash
   sudo apt-get update
   sudo apt-get upgrade
   ```

2. **Update Node.js** (if needed):

   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Update pnpm** (if needed):

   ```bash
   sudo npm install -g pnpm@latest
   ```

4. **Update PM2** (if needed):
   ```bash
   sudo npm install -g pm2@latest
   pm2 update
   ```

## Rollback Procedure

If a deployment fails:

1. SSH into the server
2. Navigate to the application directory
3. Restore the previous version (if you have backups)
4. Restart PM2:
   ```bash
   pm2 restart mum-mentor-fe
   ```

## Environment Variables

If your application requires environment variables:

1. Create a `.env.production` file on the server:

   ```bash
   cd ~/mum-mentor-fe
   nano .env.production
   ```

2. Add your variables:

   ```
   NEXT_PUBLIC_API_URL=https://api.example.com
   DATABASE_URL=your-database-url
   ```

3. Restart the application:
   ```bash
   pm2 restart mum-mentor-fe
   ```

For sensitive environment variables, add them to GitHub Secrets and modify the deployment workflow to use them.

## Migration from SSH Key to Password Authentication

If you previously used SSH key authentication and want to switch to password authentication:

1. **Enable password authentication on your server** (see "Enable Password Authentication" section above)
2. **Add GitHub secrets** for `SERVER_HOST`, `SERVER_USER`, `SERVER_PASSWORD`, and optionally `SERVER_URL`
3. **Push changes** to trigger the updated deployment workflow

The deployment workflow now uses password authentication by default.

## Support

For issues or questions:

- Check the logs first: `pm2 logs mum-mentor-fe`
- Review this documentation
- Check the GitHub Actions workflow runs for deployment errors
