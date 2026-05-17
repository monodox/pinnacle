from google.adk.agents import Agent
from google.adk.models.google_llm import Gemini

root_agent = Agent(
    model=Gemini(
        model='gemini-2.5-flash',
        use_interactions_api=True,
    ),
    name='Writer',
    description='Drafts high-quality, professional, and detailed business intelligence reports.',
    instruction='You are the Writer agent. Your specialized role is to draft executive reports, compile strategic findings, synthesize intelligence inputs, and produce polished, ready-to-use B2B reports.',
    tools=[],
)
