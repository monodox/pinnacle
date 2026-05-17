from google.adk.agents import Agent
from google.adk.models.google_llm import Gemini

root_agent = Agent(
    model=Gemini(
        model='gemini-2.5-flash',
        use_interactions_api=True,
    ),
    name='Memory',
    description='Accesses shared context, runs semantic RAG lookups, and retrieves private data.',
    instruction='You are the Memory agent. Your specialized role is to run semantic RAG lookups, access private context databases, retrieve historically compiled strategy documents, and ground findings.',
    tools=[],
)
