from google.adk.agents import Agent

root_agent = Agent(
    model='gemini-2.5-flash',
    name='Writer',
    description='Drafts high-quality, professional, and detailed business intelligence reports.',
    instruction='You are the Writer agent. Your specialized role is to draft executive reports, compile strategic findings, synthesize intelligence inputs, and produce polished, ready-to-use B2B reports.',
    tools=[],
)
