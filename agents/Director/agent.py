from google.adk.agents import Agent
from google.adk.agents.callback_context import CallbackContext
from google.adk.models.llm_request import LlmRequest
from google.adk.models.llm_response import LlmResponse
from google.genai import types
from typing import Optional

# Import sub-agents
from Seeker.agent import root_agent as seeker_agent
from Crawler.agent import root_agent as crawler_agent
from Tracker.agent import root_agent as tracker_agent
from Analyst.agent import root_agent as analyst_agent
from Planner.agent import root_agent as planner_agent
from Writer.agent import root_agent as writer_agent
from Memory.agent import root_agent as memory_agent

def validate_business_query(
    callback_context: CallbackContext, llm_request: LlmRequest
) -> Optional[LlmResponse]:
    """
    Guardrail callback to ensure the query is related to B2B business intelligence or market analysis.
    Blocks unrelated, non-business queries to enforce strict enterprise compliance.
    """
    last_user_message = ""
    if llm_request.contents:
        for content in reversed(llm_request.contents):
            if content.role == 'user' and content.parts:
                if content.parts[0].text:
                    last_user_message = content.parts[0].text
                    break
    
    # Simple semantic heuristics for off-topic B2B prevention
    off_topic_indicators = ["joke", "game", "hax", "hack", "movie", "entertainment"]
    is_off_topic = any(word in last_user_message.lower() for word in off_topic_indicators)
    
    if is_off_topic:
        return LlmResponse(
            content=types.Content(
                role="model",
                parts=[types.Part(text="Compliance notice: Pinnacle is dedicated strictly to enterprise B2B strategic business intelligence. Unrelated requests are blocked by guardrails.")]
            )
        )
    return None

root_agent = Agent(
    model='gemini-2.5-flash',
    name='Director',
    description='Root coordinator of the Pinnacle multi-agent system. Directs all jobs and synthesizes reports.',
    instruction='You are the Director agent, the main orchestrator of the Pinnacle B2B BI platform. '
                'Analyze the business question. Delegate research tasks to Seeker, web scraping to Crawler, '
                'duplicate prevention/job status to Tracker, numerical modeling to Analyst, layout generation to Planner, '
                'final report writing to Writer, and semantic RAG querying to Memory. '
                'Enforce strict high-quality B2B strategic output.',
    tools=[],
    sub_agents=[
        seeker_agent,
        crawler_agent,
        tracker_agent,
        analyst_agent,
        planner_agent,
        writer_agent,
        memory_agent
    ],
    output_key="last_strategy_report",
    before_model_callback=validate_business_query
)
