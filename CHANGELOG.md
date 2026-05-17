# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Integrated the autonomous AI agent backend within the `/agents` directory utilizing the Google Agent Development Kit (ADK).
- Scaffolded 8 clean ADK agents (`Seeker`, `Crawler`, `Tracker`, `Analyst`, `Planner`, `Writer`, `Memory`, `Director`) and a `shared/` resource directory.
- Centralized environment variable management for the Python backend into `agents/.env.example` and `agents/.env.local`.
- Added dedicated `agents/.gitignore`, `agents/README.md`, and `agents/AGENTS.md` to document and secure the agent backend.
- Refactored the frontend console `Agents.tsx` page to list and track the 8 base agents dynamically.
- Developed an interactive edit modal (`Dialog`) for agents with uneditable names, descriptions, system prompts, and editable instructions.
- Implemented a "Create Sub-Agent" flow directly inside the agent popup to support spawning specialized workflows.
- Extracted `AgentCard` component for clean modular architecture in frontend.
- Created generic `Textarea` UI primitive.
- Established the core `Console` platform architecture including `ConsoleLayout`, `ConsoleSidebar`, and `ConsoleHeader`.
- Created foundational enterprise pages within the console: `Dashboard`, `Settings`, `Reports`, `Agents`, and `Research`.
- Scaffolded asset directories (`src/assets/icons` and `src/assets/logo`) for static graphical assets.
- Added `AGENTS.md` to provide comprehensive guidelines for AI coding agents and contributors.
- Created domain-specific layouts (`AuthLayout`, `LegalLayout`, `SiteLayout`) and modularized the Home page.
### Fixed
- Resolved missing `Button` component import compiling issue in `AgentGrid.tsx`.
- Fixed React Router hydration and link refreshing issues.
- Resolved all TypeScript warnings related to unused React imports across the codebase.
