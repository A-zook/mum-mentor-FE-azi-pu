/**
 * PM2 Ecosystem Configuration for Mum Mentor Frontend
 *
 * This file is used by PM2 to manage the Next.js application process.
 * It's automatically created on the server during deployment.
 *
 * For local reference only - the actual file is created on the server.
 */

module.exports = {
  apps: [
    {
      // Application name
      name: "mum-mentor-fe",

      // Path to Next.js start script
      script: "node_modules/next/dist/bin/next",

      // Arguments to pass to the script
      args: "start -p 3000",

      // Application root directory
      cwd: "/home/ubuntu/mum-mentor-fe",

      // Number of instances (1 for single instance, 'max' for cluster mode)
      instances: 1,

      // Automatically restart if the app crashes
      autorestart: true,

      // Watch for file changes and restart (disabled in production)
      watch: false,

      // Restart if memory usage exceeds this threshold
      max_memory_restart: "1G",

      // Environment variables
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },

      // Log files
      error_file: "/home/ubuntu/mum-mentor-fe/logs/error.log",
      out_file: "/home/ubuntu/mum-mentor-fe/logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",

      // Merge logs from all instances
      merge_logs: true,

      // Time to wait before force-killing the app on restart
      kill_timeout: 3000,

      // Wait for app to be ready before considering it online
      wait_ready: true,

      // Maximum number of restarts within a time period
      max_restarts: 10,
      min_uptime: "10s",
    },
  ],
};

/**
 * Common PM2 commands:
 *
 * Start app:     pm2 start ecosystem.config.js
 * Stop app:      pm2 stop mum-mentor-fe
 * Restart app:   pm2 restart mum-mentor-fe
 * Delete app:    pm2 delete mum-mentor-fe
 * View logs:     pm2 logs mum-mentor-fe
 * Monitor:       pm2 monit
 * Status:        pm2 status
 * Save config:   pm2 save
 * Startup:       pm2 startup systemd
 */
