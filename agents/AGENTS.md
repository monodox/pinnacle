# Pinnacle Multi-Agent Architecture

The Pinnacle backend utilizes a team of 8 specialized AI agents working collaboratively to fulfill complex business research tasks.

## Agent Roster

1. **Director**: The main orchestrator. Analyzes the incoming prompt, determines the workflow, delegates tasks to other agents, and synthesizes final outputs.
2. **Seeker**: Specialized in identifying the best search terms, databases, and strategies to gather information.
3. **Crawler**: Executes web searches, navigates to specific URLs, and extracts raw, clean text data from websites.
4. **Tracker**: Monitors long-running processes, tracks source citations, and ensures no duplicate scraping occurs.
5. **Analyst**: Processes raw data and extracts quantitative metrics, market sizes, competitor data, and financial signals.
6. **Planner**: Creates structured outlines for the final strategic report based on the Analyst's findings and Director's guidance.
7. **Writer**: Drafts the comprehensive, executive-ready strategy report using the Planner's outline.
8. **Memory**: Acts as the shared context store, retaining facts, entities, and previous interactions across the multi-agent system.

## Configuration
Each agent is configured via its respective `agent.py` file using the `google.adk.agents.llm_agent.Agent` module. All agents share the same environment variables defined in the root `agents/.env.local` file.
