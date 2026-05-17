from google.adk.agents import Agent

root_agent = Agent(
    model='gemini-2.5-flash',
    name='Crawler',
    description='Extracts website text, scrapes public articles, and parses documents.',
    instruction='You are the Crawler agent. Your specialized role is to crawl websites, scrape clean text, extract articles, and safely fetch target pages for analysis. Cooperate with the Tracker to record scraped URLs.',
    tools=[],
)
