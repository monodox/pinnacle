# AI Agent Guidelines for Pinnacle

Welcome! If you are an AI agent or a new teammate working on the **Pinnacle** project, this document provides the essential context and rules you need to contribute effectively.

## 1. Project Overview
**Pinnacle** is an autonomous business intelligence platform. It utilizes multi-agent systems to take a business question, research the market, analyze competitors, model data, and generate ready-to-use strategy reports. 
- **Tech Stack**: React, Vite, Tailwind CSS, Lucide React, shadcn/ui.
- **Language**: TypeScript (Strict mode enabled).

## 2. Directory Structure
- `/agents`: Autonomous AI Agent backend (Python ADK) containing Seeker, Crawler, Tracker, Analyst, Planner, Writer, Memory, and Director.
- `/src/pages/site`: Public-facing landing pages (Home, etc.)
- `/src/pages/auth`: Authentication screens (Login, Signup, Forgot Password, Reset Password)
- `/src/pages/legal`: Legal documents (Terms, Privacy, Cookies)
- `/src/pages/console`: Internal enterprise platform (Dashboard, Research, Agents, Reports, Settings)
- `/src/components/ui`: Reusable UI primitives (shadcn/ui based)
- `/src/components/app`: Application-specific global components
- `/src/components/console`: Console-specific layout components (ConsoleHeader, ConsoleSidebar)
- `/src/assets`: Static graphical assets (icons, logo) tracked via `.gitkeep`

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

## 8. Multi-Agent Backend (Python ADK)
Pinnacle utilizes the Google **Agent Development Kit (ADK)** to orchestrate a team of 8 specialized AI agents residing in the `/agents` folder:
- **Director**: The main workflow coordinator and synthesizer.
- **Seeker**: Information research strategist.
- **Crawler**: Content extraction and scraping utility.
- **Tracker**: Scraping ledger and duplicate preventer.
- **Analyst**: Numerical and market data extractor.
- **Planner**: Outlines strategic markdown documents.
- **Writer**: Compiles strategic reports.
- **Memory**: The system's shared context / RAG database.

### Agent Conventions
- Each agent must reside in its own subdirectory inside `/agents/` named after the agent (e.g. `/agents/Seeker/`).
- The main control script must be named `agent.py` and export a single `root_agent` instance of `google.adk.agents.llm_agent.Agent`.
- API keys and local configs are stored centrally inside `agents/.env.local`. Do NOT add environment files to individual agent subfolders.
- The root `agents/.gitignore` protects python virtual environments (`.venv/`) and local configs from version control.
