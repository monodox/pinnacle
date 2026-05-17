# AI Agent Guidelines for Pinnacle

Welcome! If you are an AI agent or a new teammate working on the **Pinnacle** project, this document provides the essential context and rules you need to contribute effectively.

## 1. Project Overview
**Pinnacle** is an autonomous business intelligence platform. It utilizes multi-agent systems to take a business question, research the market, analyze competitors, model data, and generate ready-to-use strategy reports. 
- **Tech Stack**: React, Vite, Tailwind CSS, Lucide React, shadcn/ui.
- **Language**: TypeScript (Strict mode enabled).

## 2. Directory Structure
- `/src/pages/site`: Public-facing landing pages (Home, etc.)
- `/src/pages/auth`: Authentication screens (Login, Signup, Forgot Password, Reset Password)
- `/src/pages/legal`: Legal documents (Terms, Privacy, Cookies)
- `/src/components/ui`: Reusable UI primitives (shadcn/ui based)
- `/src/components/app`: Application-specific layout and business logic components

## 3. Build and Test Commands
- **Install Dependencies**: `npm install`
- **Run Development Server**: `npm run dev`
- **Build for Production**: `npm run build`
- **Lint Code**: `npm run lint`
- **Preview Production Build**: `npm run preview`

## 4. Code Style Guidelines
- **Use TypeScript**: Always use `.ts` or `.tsx` extensions. Avoid `any`; use strict typing.
- **Component Structure**: Export a single default functional component per file.
- **Styling**: Use Tailwind CSS utility classes. Use the `cn` utility from `@/lib/utils` for conditional class merging.
- **Imports**: 
  - Do NOT `import React from 'react';` for JSX (we use the new JSX transform).
  - Use absolute path aliases (`@/components/...`) over long relative paths (`../../`).
- **Icons**: Always use `lucide-react` for iconography.

## 5. Testing Instructions
*(Testing frameworks will be integrated in a future milestone. Once integrated, follow these rules)*
- Write unit tests for all utility functions in the `/lib` directory.
- Use React Testing Library for component rendering tests.
- Ensure all CI/CD checks pass before requesting a PR review.

## 6. Security Considerations
- **Environment Variables**: Never commit `.env` or `.env.local` files. API keys (OpenAI, Pinnacle Agent) must only be placed in `.env.local` locally and injected via the hosting provider in production.
- **Data Privacy**: Ensure that any user data is appropriately handled according to the `PRIVACY.md` policy.

## 7. Workflow & Pull Request Guidelines
- **Commits**: Follow conventional commits (e.g., `feat: added authentication layout`, `fix: resolved lint warnings`).
- **Pull Requests**: Keep PRs small and focused on a single feature or bug fix. Provide a clear description and attach screenshots for UI changes.
- **Deployment**: The `main` branch is automatically deployed to our staging environment. Production deployments require manual approval.
