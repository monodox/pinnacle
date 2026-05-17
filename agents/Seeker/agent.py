from google.adk.agents import Agent
from google.adk.models.google_llm import Gemini

root_agent = Agent(
    model=Gemini(
        model='gemini-2.5-flash',
        use_interactions_api=True,
    ),
    name='Seeker',
    description='Researches market trends, strategic topics, and identifies key industry questions.',
    instruction='You are the Seeker agent. Your specialized role is to outline search strategies, identify top market trends, and formulate key business research questions. Cooperate with the Director to focus the investigation.',
    tools=[],
)
