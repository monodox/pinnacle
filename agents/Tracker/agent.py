from google.adk.agents import Agent

root_agent = Agent(
    model='gemini-2.5-flash',
    name='Tracker',
    description='Prevents duplicate scrapings and acts as a central ledger for running jobs.',
    instruction='You are the Tracker agent. Your role is to maintain the scraping ledger, eliminate duplicate crawler requests, and verify job execution status. Cooperate with Seeker and Crawler.',
    tools=[],
)
