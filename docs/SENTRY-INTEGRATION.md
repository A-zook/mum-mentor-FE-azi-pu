# Sentry Integration Guide

This guide explains how to integrate Sentry error monitoring into the Mum Mentor Frontend application.

## Overview

Sentry provides real-time error tracking and performance monitoring for the Next.js application. The integration is designed to be:
- **Non-intrusive**: No changes to existing application logic
- **Optional**: Application works with or without Sentry configuration
- **Environment-aware**: Different tracking for staging vs production

## Prerequisites

- Sentry account (free tier available)
- Access to GitHub repository secrets
- Access to self-hosted server for environment variable configuration

## Step 1: Create Sentry Project

1. **Sign up/Login to Sentry**
   - Go to [https://sentry.io](https://sentry.io)
   - Create account or login to existing account

2. **Create New Project**
   - Click "Create Project"
   - Select "Next.js" as the platform
   - Name your project: `mum-mentor-frontend`
   - Choose your team/organization

3. **Get Your DSN**
   - After project creation, you'll see the DSN (Data Source Name)
   - Format: `https://[key]@[organization].ingest.sentry.io/[project-id]`
   - **Screenshot placeholder**: [Sentry DSN location screenshot]

## Step 2: Configure GitHub Secrets

1. **Navigate to Repository Settings**
   - Go to your GitHub repository
   - Click "Settings" → "Secrets and variables" → "Actions"

2. **Add Sentry DSN Secret**
   - Click "New repository secret"
   - Name: `NEXT_PUBLIC_SENTRY_DSN`
   - Value: Your Sentry DSN from Step 1
   - **Screenshot placeholder**: [GitHub secrets configuration screenshot]

## Step 3: Frontend Code Integration

⚠️ **IMPORTANT**: The following steps require manual code changes by frontend developers.

### 3.1 Install Sentry Package

```bash
pnpm add @sentry/nextjs
```

### 3.2 Create Sentry Configuration

Create `sentry.client.config.ts` in the root directory:

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  debug: false,
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
});
```

Create `sentry.server.config.ts` in the root directory:

```typescript
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1,
  debug: false,
  enabled: !!process.env.NEXT_PUBLIC_SENTRY_DSN,
});
```

### 3.3 Update Next.js Configuration

Modify `next.config.ts`:

```typescript
import type { NextConfig } from "next";
import { withSentryConfig } from "@sentry/nextjs";

const nextConfig: NextConfig = {
  reactCompiler: true,
};

// Only wrap with Sentry if DSN is configured
const sentryOptions = {
  silent: true,
  hideSourceMaps: true,
  disableLogger: true,
};

export default process.env.NEXT_PUBLIC_SENTRY_DSN 
  ? withSentryConfig(nextConfig, sentryOptions)
  : nextConfig;
```

### 3.4 Optional: Error Boundary Integration

Create `components/error-boundary.tsx`:

```typescript
"use client";

import * as Sentry from "@sentry/nextjs";
import { ErrorBoundary as SentryErrorBoundary } from "@sentry/nextjs";

export function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return (
    <SentryErrorBoundary
      fallback={({ error, resetError }) => (
        <div className="flex min-h-screen items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
            <p className="mt-2 text-gray-600">We've been notified of this error.</p>
            <button
              onClick={resetError}
              className="mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              Try again
            </button>
          </div>
        </div>
      )}
      beforeCapture={(scope) => {
        scope.setTag("errorBoundary", true);
      }}
    >
      {children}
    </SentryErrorBoundary>
  );
}
```

## Step 4: Sourcemap Integration (Optional)

For better error tracking with source maps:

### 4.1 Install Sentry CLI

```bash
pnpm add -D @sentry/cli
```

### 4.2 Create Sentry Properties File

Create `.sentryclirc` in root:

```ini
[defaults]
url=https://sentry.io/
org=your-organization
project=mum-mentor-frontend

[auth]
token=your-auth-token
```

### 4.3 Update Build Script

Modify `package.json`:

```json
{
  "scripts": {
    "build": "next build && sentry-cli sourcemaps inject --org your-org --project mum-mentor-frontend .next && sentry-cli sourcemaps upload --org your-org --project mum-mentor-frontend .next"
  }
}
```

## Step 5: Testing Integration

### 5.1 Local Testing

1. Set environment variable:
   ```bash
   export NEXT_PUBLIC_SENTRY_DSN="your-dsn-here"
   ```

2. Run development server:
   ```bash
   pnpm dev
   ```

3. Trigger test error:
   - Add a button that throws an error
   - Check Sentry dashboard for the error

### 5.2 Production Testing

1. Deploy to staging with Sentry DSN configured
2. Navigate to the application
3. Check Sentry dashboard for session data
4. Trigger an error to verify error reporting

## Verification Checklist

- [ ] Sentry project created
- [ ] GitHub secret `NEXT_PUBLIC_SENTRY_DSN` configured
- [ ] Frontend code integration completed
- [ ] Application builds successfully
- [ ] Errors appear in Sentry dashboard
- [ ] Performance data is being collected
- [ ] Staging and production environments are properly tagged

## Troubleshooting

### Common Issues

1. **No errors appearing in Sentry**
   - Verify DSN is correct
   - Check browser console for Sentry initialization
   - Ensure `enabled: true` in Sentry config

2. **Build failures after Sentry integration**
   - Check Next.js configuration syntax
   - Verify all Sentry packages are installed
   - Review Sentry CLI configuration

3. **Performance impact**
   - Adjust `tracesSampleRate` (default: 0.1 = 10%)
   - Consider disabling in development
   - Monitor bundle size impact

### Support Resources

- [Sentry Next.js Documentation](https://docs.sentry.io/platforms/javascript/guides/nextjs/)
- [Sentry Performance Monitoring](https://docs.sentry.io/product/performance/)
- [GitHub Issues](https://github.com/getsentry/sentry-javascript/issues)

## Security Notes

- DSN is safe to expose client-side
- No sensitive data should be sent to Sentry
- Consider data scrubbing for PII
- Review Sentry's data retention policies