from google.adk.agents.llm_agent import Agent

root_agent = Agent(
    model='gemini-flash-latest',
    name='Tracker',
    description='Tracker agent for the Pinnacle platform.',
    instruction='You are the Tracker agent, part of the Pinnacle multi-agent system.',
    tools=[],
)
