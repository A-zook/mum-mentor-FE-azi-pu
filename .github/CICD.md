# CI/CD Pipeline Documentation

This document describes the continuous integration and deployment setup for the Mum Mentor Frontend project.

## Overview

The CI/CD pipeline consists of multiple GitHub Actions workflows that ensure code quality, security, and streamlined deployment processes.

## Workflows

### 1. CI Workflow (`ci.yml`)

**Triggers:**

- Push to `main` or `dev` branches
- Pull requests targeting `main` or `dev` branches

**Jobs:**

- **Lint and Test**: Runs code quality checks and builds the project
  - Install dependencies with pnpm
  - Run ESLint for code linting
  - Check code formatting with Prettier
  - Run TypeScript type checking
  - Build the Next.js project
  - Upload build artifacts for debugging

**Status:** ✅ Active

---

### 2. Deploy Workflow (`deploy.yml`)

**Triggers:**

- Push to `main` or `dev` branches
- Manual trigger via `workflow_dispatch`

**Jobs:**

- **Deploy**: Builds and deploys the application
  - Currently configured as a placeholder
  - Ready to be configured for Vercel, Netlify, or custom deployment

**Status:** ⚙️ Configuration Required

##### Custom Server

1. Set up SSH access to your server
2. Add the following secrets:
   - `SSH_PRIVATE_KEY`: Your SSH private key
   - `REMOTE_HOST`: Your server hostname/IP
   - `REMOTE_USER`: SSH username

---

### 3. PR Checks (`pr-checks.yml`)

**Triggers:**

- Pull request opened, synchronized, reopened, or edited

**Jobs:**

- **PR Metadata & Validation**:
  - Analyzes PR size (files and lines changed)
  - Automatically adds size labels (XS, S, M, L, XL, XXL)
  - Validates PR title follows conventional commit format
  - Size labels help reviewers prioritize their work

**Conventional Commit Format:**

```
type(scope): description

Types: feat, fix, docs, style, refactor, perf, test, chore, ci, build
Examples:
  - feat: add user authentication
  - fix(auth): resolve token expiration issue
  - docs: update API documentation
```

**Status:** ✅ Active

---

## Branch Protection Rules

To maximize the effectiveness of these workflows, configure the following branch protection rules:

### For `main` branch:

1. Require pull request reviews before merging
2. Require status checks to pass:
   - `Lint, Type Check & Build` (from CI workflow)
   - `PR Metadata & Validation` (from PR checks)
3. Require conversation resolution before merging
4. Require linear history
5. Include administrators

### For `dev` branch:

1. Require status checks to pass:
   - `Lint, Type Check & Build` (from CI workflow)
2. Require pull request reviews (optional, but recommended)

**How to set up:**

1. Go to repository Settings → Branches
2. Add branch protection rule for `main` and `dev`
3. Configure the requirements listed above

---

## Secrets Configuration

The following secrets need to be configured in GitHub Settings → Secrets and variables → Actions:

### Required for Deployment (choose one):

**Custom Server:**

- `SSH_PRIVATE_KEY`
- `REMOTE_HOST`
- `REMOTE_USER`

---

## Local Development

All checks that run in CI also run locally via Husky pre-commit hooks:

- ESLint (auto-fix)
- Prettier (auto-format)
- TypeScript type checking

This ensures code quality before it even reaches CI.

---

## Troubleshooting

### CI Workflow Fails

1. **Linting errors**: Run `pnpm lint` locally and fix issues
2. **Format errors**: Run `pnpm format` to auto-fix formatting
3. **Type errors**: Run `pnpm type-check` to identify TypeScript issues
4. **Build errors**: Run `pnpm build` locally to debug build issues

### Deployment Fails

1. Verify all required secrets are configured
2. Check deployment logs in GitHub Actions
3. Ensure deployment platform (Vercel/Netlify) is properly configured
4. Verify build succeeds locally with `pnpm build`

### PR Checks Fail

1. **PR title format**: Ensure title follows conventional commit format
2. **Size labels**: These are informational only, won't cause failures
3. **Dependency review**: Update vulnerable dependencies or review security report

---

## Best Practices

1. **Always create feature branches** from `dev`
2. **Keep PRs small** - aim for size/S or size/M when possible
3. **Write descriptive PR titles** following conventional commit format
4. **Review security alerts** from CodeQL and dependency review
5. **Don't skip CI checks** - they catch issues before they reach production
6. **Keep dependencies updated** to avoid security vulnerabilities

---

## Monitoring & Maintenance

- Review failed workflows weekly
- Update GitHub Actions versions quarterly
- Monitor security alerts from CodeQL
- Keep pnpm and Node.js versions updated
- Review and update deployment configuration as needed

---

## Support

For issues with CI/CD:

1. Check this documentation
2. Review workflow logs in GitHub Actions
3. Contact the DevOps team or project maintainers
4. Open an issue in the repository

---

**Last Updated:** 2025-11-16
**Maintained By:** Team Kaizen - DevOps Team
