from google.adk.agents import Agent

root_agent = Agent(
    model='gemini-2.5-flash',
    name='Seeker',
    description='Researches market trends, strategic topics, and identifies key industry questions.',
    instruction='You are the Seeker agent. Your specialized role is to outline search strategies, identify top market trends, and formulate key business research questions. Cooperate with the Director to focus the investigation.',
    tools=[],
)
