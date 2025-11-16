# Nora - Mum Mentor AI

> An AI-powered companion that supports mothers through pregnancy, postpartum, and early motherhood.

Nora offers guidance, milestones, daily planning, and empathetic chat support - a calm, beautiful, and meaningful product designed to genuinely improve the lives of millions of mothers.

## About The Project

Nora is more than just an app - it's the emotional support system mothers wish they had. We're building intelligent features that combine AI technology with human empathy to create a safe, supportive space for mothers.

### Key Features

- **AI-Powered Chat Companion** - Conversational interface with voice and text input, quick action chips, and empathetic responses
- **Real-Time Milestone Tracking** - Dynamic progress visualizations for pregnancy and baby development
- **Personalized Onboarding** - Multi-step flows that adapt based on user input and mom status
- **Community Platform** - Category-based forums with anonymous posting and AI moderation
- **Daily Planning & Mood Check-ins** - Track emotional wellbeing and organize daily tasks
- **Journal & Gallery** - Personal memory storage with emotional reflection prompts

## Design

**Figma:** [View Design System](https://www.figma.com/design/lgdMp1k5CDyJSk9eQMOXQI/Mum-Mentor-with-AI-Project?m=auto&t=CTcyID4toLBVeJzp-6)

Reference our Figma files for UI components, colors, spacing, and user flows. All components are designed with Tailwind CSS in mind.

_Don't have access? Contact your team lead._

## Project Resources

**Master Sheet:** [View All Project Links & Resources](https://docs.google.com/spreadsheets/d/1CfIEL_F0ljxJ1rZE9upAeQGJBH713Lqr16eumRSvMOE/edit?usp=sharing)

_All project documentation, design files, and resources are tracked in the master sheet. Add new resources there as they're created._

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 8+

### Installation

1. Clone the repository

```bash
git clone https://github.com/hngprojects/mum-mentor-FE.git
cd mum-mentor-FE
```

1. Install dependencies

```bash
pnpm install
```

1. Run the development server

```bash
pnpm dev
```

1. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
pnpm check-format # Check code formatting
pnpm check-types  # Run TypeScript type checking
```

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Package Manager:** pnpm
- **Code Quality:** ESLint, Prettier, Husky

## Project Structure

```bash
nora/
├── app/              # Next.js app directory
├── components/       # Reusable React components
├── lib/             # Utility functions and helpers
├── public/          # Static assets
├── styles/          # Global styles
└── types/           # TypeScript type definitions
```

## Contributing

We welcome contributions! Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## Code Standards

This project enforces strict code quality standards:

- ✅ Prettier formatting (auto-fixed on commit)
- ✅ ESLint rules (must pass to commit)
- ✅ TypeScript type checking (must pass to commit)
- ✅ Pre-commit hooks via Husky

All checks run automatically before each commit.
