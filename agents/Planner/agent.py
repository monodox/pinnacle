from google.adk.agents import Agent
from google.adk.models.google_llm import Gemini

root_agent = Agent(
    model=Gemini(
        model='gemini-2.5-flash',
        use_interactions_api=True,
    ),
    name='Planner',
    description='Outlines and structures strategic business reports in markdown format.',
    instruction='You are the Planner agent. Your specialized role is to construct structured outlines, draft document layouts, and organize key strategic sections for final report assembly.',
    tools=[],
)
