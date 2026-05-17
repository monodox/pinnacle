# Pinnacle AI Agents Backend

This directory contains the autonomous AI agent backend for Pinnacle, built using the Google Agent Development Kit (ADK).

## Project Structure
- `shared/` - Shared resources, RAG databases, and global utilities.
- `Seeker/`, `Crawler/`, `Tracker/`, `Analyst/`, `Planner/`, `Writer/`, `Memory/`, `Director/` - Individual ADK agents.

## Getting Started

1. **Set up a Python virtual environment**:
   ```bash
   python3 -m venv .venv
   source .venv/bin/activate  # On Windows: .venv\Scripts\activate
   ```

2. **Install ADK**:
   ```bash
   pip install google-adk
   ```

3. **Configure Environment Variables**:
   Copy the `.env.example` file to `.env.local` and add your Google Gemini API key:
   ```bash
   cp .env.example .env.local
   ```

## Running Agents

You can run any individual agent interactively in your terminal:
```bash
adk run Director
```

Or you can use the ADK web interface to chat with your agents:
```bash
adk web --port 8000
```
*(Make sure to run this command from inside the `agents/` root directory so it detects all your agents.)*
