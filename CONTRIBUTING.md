# Contributing to Nora - Mum Mentor AI

Thank you for your interest in contributing to Nora! We're building something meaningful, and we're excited to have you as part of the team.

## Our Mission

We're creating an AI-powered companion that genuinely improves the lives of mothers through pregnancy, postpartum, and early motherhood. Every line of code we write should reflect empathy, care, and quality.

## Getting Started

### 1. Set Up Your Development Environment

```bash
# Clone the repository
git clone https://github.com/hngprojects/mum-mentor-FE.git
cd mum-mentor-FE

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### 2. Create a Branch

Always create a new branch for your work:

```bash
git checkout -b feat/your-feature-name
# or
git checkout -b fix/bug-description
```

**Branch naming conventions:**

- `feat/` - New features
- `fix/` - Bug fixes
- `refactor/` - Code refactoring
- `docs/` - Documentation updates
- `style/` - UI/styling changes

### 3. Make Your Changes

Follow our code standards and best practices (see below).

### 4. Test Your Changes

```bash
# Run linting
pnpm lint

# Check types
pnpm check-types

# Check formatting
pnpm check-format

# Build the project
pnpm build
```

### 5. Commit Your Changes

Our pre-commit hooks will automatically run checks. You'll see fun emoji messages! 🎉

```bash
git add .
git commit -m "feat: add milestone tracking component"
```

**Commit message format:**

- `feat:` - New feature
- `fix:` - Bug fix
- `refactor:` - Code refactoring
- `style:` - UI/styling changes
- `docs:` - Documentation
- `chore:` - Maintenance tasks

### 6. Push and Create a Pull Request

```bash
git push origin feat/your-feature-name
```

Then create a PR on GitHub with:

- Clear description of changes
- Screenshots/videos (if UI changes)
- Link to related issues

## Code Standards

### TypeScript

- Always use TypeScript, no `any` types unless absolutely necessary
- Define proper interfaces and types
- Use descriptive variable names

```typescript
// ✅ Good
interface MilestoneData {
  id: string;
  title: string;
  completedAt: Date | null;
}

// ❌ Bad
const data: any = {};
```

### React/Next.js

- Use functional components with hooks
- Keep components small and focused
- Use proper file naming: `PascalCase.tsx` for components

```typescript
// ✅ Good
export default function MilestoneCard({ data }: MilestoneCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    // component JSX
  );
}
```

### Styling with Tailwind

- Use Tailwind utility classes
- Keep classes organized and readable
- Use consistent spacing and sizing

```tsx
// ✅ Good
<div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md">
  <h2 className="text-xl font-semibold text-gray-900">Title</h2>
</div>

// ❌ Bad - too many classes, hard to read
<div className="flex items-center gap-4 rounded-lg bg-white p-6 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out border border-gray-200">
```

### Animations with Framer Motion

- Keep animations smooth and purposeful
- Use consistent timing (300ms default)
- Don't overuse animations

```typescript
// ✅ Good
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.3 }}
>
  Content
</motion.div>
```

## Design Principles

Nora should feel:

- **Calm** - Soft colors, gentle animations
- **Safe** - Clear, reassuring language
- **Human** - Warm, empathetic tone
- **Beautiful** - Thoughtful design details

## What NOT to Do

- ❌ Don't use `console.log()` in production code (use `console.warn()` or `console.error()` if needed)
- ❌ Don't commit directly to `main` branch
- ❌ Don't skip writing tests for new features
- ❌ Don't use inline styles (use Tailwind)
- ❌ Don't ignore TypeScript errors
- ❌ Don't use var, always use `const` or `let`

## Reporting Bugs

Found a bug? Create an issue with:

- Clear description
- Steps to reproduce
- Expected vs actual behavior
- Screenshots if applicable

## Suggesting Features

Have an idea? We'd love to hear it! Create an issue with:

- Problem you're solving
- Proposed solution
- Why it matters for mothers using Nora

## Getting Help

- Ask questions in team Slack
- Review existing PRs for examples
- Check Next.js, Tailwind, and Framer Motion docs

## Code Review Process

All PRs require:

1. ✅ All automated checks passing
2. ✅ At least one team lead approval
3. ✅ No merge conflicts
4. ✅ Updated documentation (if needed)

## Recognition

Great contributions will be recognized! We value:

- Clean, maintainable code
- Thoughtful UX considerations
- Helpful PR descriptions
- Supporting other developers

---

**Thank you for helping build something that matters.** Every contribution you make helps support mothers everywhere.
