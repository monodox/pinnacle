from google.adk.agents.llm_agent import Agent

root_agent = Agent(
    model='gemini-flash-latest',
    name='Seeker',
    description='Seeker agent for the Pinnacle platform.',
    instruction='You are the Seeker agent, part of the Pinnacle multi-agent system.',
    tools=[],
)
