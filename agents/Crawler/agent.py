from google.adk.agents import Agent
from google.adk.models.google_llm import Gemini

root_agent = Agent(
    model=Gemini(
        model='gemini-2.5-flash',
        use_interactions_api=True,
    ),
    name='Crawler',
    description='Extracts website text, scrapes public articles, and parses documents.',
    instruction='You are the Crawler agent. Your specialized role is to crawl websites, scrape clean text, extract articles, and safely fetch target pages for analysis. Cooperate with the Tracker to record scraped URLs.',
    tools=[],
)
