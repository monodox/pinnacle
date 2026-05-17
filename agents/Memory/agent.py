from google.adk.agents import Agent

root_agent = Agent(
    model='gemini-2.5-flash',
    name='Memory',
    description='Accesses shared context, runs semantic RAG lookups, and retrieves private data.',
    instruction='You are the Memory agent. Your specialized role is to run semantic RAG lookups, access private context databases, retrieve historically compiled strategy documents, and ground findings.',
    tools=[],
)
