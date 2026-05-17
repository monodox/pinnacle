from google.adk.agents.llm_agent import Agent

root_agent = Agent(
    model='gemini-flash-latest',
    name='Planner',
    description='Planner agent for the Pinnacle platform.',
    instruction='You are the Planner agent, part of the Pinnacle multi-agent system.',
    tools=[],
)
