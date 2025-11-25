# Self-Hosted Server Sentry Setup

This guide explains how to configure Sentry monitoring on the self-hosted server running PM2.

## Overview

The self-hosted server runs the Next.js application using PM2 process manager. This guide covers:
- Adding Sentry DSN as environment variable
- Configuring PM2 ecosystem file
- Reloading the application
- Verifying Sentry integration

## Prerequisites

- SSH access to the self-hosted server
- PM2 already installed and running
- Sentry DSN from Sentry project setup

## Server Configuration

### Step 1: SSH into Server

```bash
ssh username@your-server-host
```

### Step 2: Navigate to Application Directory

**For Production:**
```bash
cd /home/username/mum-mentor-fe
```

**For Staging:**
```bash
cd /home/username/mum-mentor-fe-staging
```

### Step 3: Locate PM2 Ecosystem File

The PM2 configuration should be in one of these locations:
- `ecosystem.config.js` (in app directory)
- `deployment/ecosystem.config.js`
- PM2 started with inline configuration

Check current PM2 processes:
```bash
pm2 list
```

### Step 4: Configure Environment Variables

#### Option A: Using PM2 Ecosystem File

If using `ecosystem.config.js`, edit the file:

```bash
nano ecosystem.config.js
```

Add Sentry DSN to the environment variables:

```javascript
module.exports = {
  apps: [{
    name: 'mum-mentor-fe',
    script: 'node_modules/next/dist/bin/next',
    args: 'start -p 3000',
    cwd: '/home/username/mum-mentor-fe',
    env: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_SENTRY_DSN: 'https://your-dsn@sentry.io/project-id'
    },
    env_staging: {
      NODE_ENV: 'production',
      NEXT_PUBLIC_SENTRY_DSN: 'https://your-dsn@sentry.io/project-id'
    }
  }]
};
```

#### Option B: Using System Environment Variables

Create or edit `.env.local` file:

```bash
nano .env.local
```

Add the Sentry DSN:

```bash
NEXT_PUBLIC_SENTRY_DSN=https://your-dsn@sentry.io/project-id
```

#### Option C: Using PM2 Environment Variables

Set environment variable directly with PM2:

```bash
pm2 set pm2:env NEXT_PUBLIC_SENTRY_DSN "https://your-dsn@sentry.io/project-id"
```

### Step 5: Reload PM2 Application

#### If using ecosystem.config.js:

```bash
pm2 reload ecosystem.config.js
```

#### If using process name:

**For Production:**
```bash
pm2 reload mum-mentor-fe
```

**For Staging:**
```bash
pm2 reload mum-mentor-fe-staging
```

#### Alternative: Restart (if reload doesn't work):

```bash
pm2 restart mum-mentor-fe
```

### Step 6: Verify Configuration

#### Check PM2 Status:

```bash
pm2 status
pm2 info mum-mentor-fe
```

#### Check Environment Variables:

```bash
pm2 env mum-mentor-fe
```

#### Check Application Logs:

```bash
pm2 logs mum-mentor-fe --lines 50
```

Look for Sentry initialization messages in the logs.

#### Test Application Health:

```bash
curl -I http://localhost:3000
```

## Verification Steps

### 1. Check Sentry Integration

Visit your application and check browser console:
- Should see Sentry initialization (if debug enabled)
- No Sentry-related errors

### 2. Trigger Test Error

Create a test error to verify Sentry is capturing:
- Navigate to a page that might have errors
- Check Sentry dashboard for new events

### 3. Monitor Performance

Check Sentry dashboard for:
- Page load performance data
- Transaction traces
- Error rates

## PM2 Management Commands

### Essential PM2 Commands:

```bash
# List all processes
pm2 list

# Show detailed process info
pm2 info mum-mentor-fe

# View logs
pm2 logs mum-mentor-fe

# Monitor processes
pm2 monit

# Restart process
pm2 restart mum-mentor-fe

# Reload process (zero-downtime)
pm2 reload mum-mentor-fe

# Stop process
pm2 stop mum-mentor-fe

# Delete process
pm2 delete mum-mentor-fe

# Save PM2 configuration
pm2 save

# Resurrect saved processes
pm2 resurrect
```

### Environment-Specific Commands:

**Production:**
```bash
pm2 reload mum-mentor-fe
pm2 logs mum-mentor-fe
```

**Staging:**
```bash
pm2 reload mum-mentor-fe-staging
pm2 logs mum-mentor-fe-staging
```

## Troubleshooting

### Issue: Environment Variable Not Set

**Symptoms:**
- Sentry not initializing
- No error tracking in dashboard

**Solutions:**
1. Verify environment variable is set:
   ```bash
   pm2 env mum-mentor-fe | grep SENTRY
   ```

2. Check `.env.local` file exists and has correct DSN

3. Restart PM2 process completely:
   ```bash
   pm2 delete mum-mentor-fe
   pm2 start ecosystem.config.js
   ```

### Issue: PM2 Process Not Starting

**Symptoms:**
- Application not accessible
- PM2 shows process as stopped/errored

**Solutions:**
1. Check PM2 logs:
   ```bash
   pm2 logs mum-mentor-fe --err
   ```

2. Verify Next.js build exists:
   ```bash
   ls -la .next/
   ```

3. Check port availability:
   ```bash
   netstat -tlnp | grep :3000
   ```

### Issue: Sentry Events Not Appearing

**Symptoms:**
- Application runs but no Sentry data

**Solutions:**
1. Verify DSN format is correct
2. Check Sentry project settings
3. Test with a manual error trigger
4. Review browser network tab for Sentry requests

### Issue: Performance Impact

**Symptoms:**
- Application slower after Sentry integration

**Solutions:**
1. Reduce sample rate in Sentry configuration
2. Monitor server resources:
   ```bash
   htop
   pm2 monit
   ```

3. Consider disabling debug mode in production

## Security Considerations

### Environment Variable Security:

1. **File Permissions:**
   ```bash
   chmod 600 .env.local
   ```

2. **Backup Configuration:**
   ```bash
   cp ecosystem.config.js ecosystem.config.js.backup
   ```

3. **Access Control:**
   - Limit SSH access to authorized users
   - Use SSH keys instead of passwords
   - Regular security updates

### Sentry Data Privacy:

1. **Data Scrubbing:** Configure Sentry to scrub sensitive data
2. **Retention Policy:** Set appropriate data retention in Sentry
3. **Access Control:** Limit Sentry project access to necessary team members

## Monitoring and Maintenance

### Regular Checks:

1. **Weekly:**
   - Review Sentry error trends
   - Check PM2 process health
   - Monitor server resources

2. **Monthly:**
   - Update Sentry SDK if needed
   - Review and clean old PM2 logs
   - Verify backup procedures

### Log Management:

```bash
# Rotate PM2 logs
pm2 flush

# Archive old logs
pm2 install pm2-logrotate
```

## Support and Resources

- **PM2 Documentation:** [https://pm2.keymetrics.io/docs/](https://pm2.keymetrics.io/docs/)
- **Sentry Documentation:** [https://docs.sentry.io/](https://docs.sentry.io/)
- **Next.js Deployment:** [https://nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)