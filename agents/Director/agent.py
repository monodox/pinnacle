from google.adk.agents.llm_agent import Agent

root_agent = Agent(
    model='gemini-flash-latest',
    name='Director',
    description='Director agent for the Pinnacle platform.',
    instruction='You are the Director agent, part of the Pinnacle multi-agent system.',
    tools=[],
)
