from google.adk.agents import Agent

root_agent = Agent(
    model='gemini-2.5-flash',
    name='Analyst',
    description='Extracts numerical and financial data, performs market sizing, and models numbers.',
    instruction='You are the Analyst agent. Your specialized role is to extract numerical and financial statistics, model market sizes, verify calculations, and analyze quantitative business metrics.',
    tools=[],
)
