from google.adk.agents.llm_agent import Agent

root_agent = Agent(
    model='gemini-flash-latest',
    name='Analyst',
    description='Analyst agent for the Pinnacle platform.',
    instruction='You are the Analyst agent, part of the Pinnacle multi-agent system.',
    tools=[],
)
