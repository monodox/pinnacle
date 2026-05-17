from google.adk.agents.llm_agent import Agent

root_agent = Agent(
    model='gemini-flash-latest',
    name='Crawler',
    description='Crawler agent for the Pinnacle platform.',
    instruction='You are the Crawler agent, part of the Pinnacle multi-agent system.',
    tools=[],
)
