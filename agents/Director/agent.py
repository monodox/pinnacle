from google.adk.agents import Agent
from google.adk.models.google_llm import Gemini
from google.adk.agents.callback_context import CallbackContext
from google.adk.models.llm_request import LlmRequest
from google.adk.models.llm_response import LlmResponse
from google.genai import types
from typing import Optional

# Skills imports
from google.adk.skills import models
from google.adk.tools import skill_toolset

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

# L1, L2, L3 Inline Skills definition for B2B BI operations (decapsulating prompt bloat)
market_research_skill = models.Skill(
    frontmatter=models.Frontmatter(
        name="market-research-skill",
        description="Comprehensive framework for conducting market trend research, competitor profiling, and industry sector analysis."
    ),
    instructions="Step 1: Outline critical sector-specific strategic questions. "
                 "Step 2: Guide Seeker to scrape key public portals and Analyst to retrieve market statistics. "
                 "Step 3: Structure output into competitor profile matrix, industry SWOT, and key risk indicators.",
    resources=models.Resources(
        references={
            "competitor_matrix.md": "Template for profiling standard competitor segments (market share, core USP, value drivers).",
            "swot_framework.md": "Methodology details for outlining internal strengths/weaknesses and external opportunities/threats."
        }
    )
)

strategic_modeling_skill = models.Skill(
    frontmatter=models.Frontmatter(
        name="strategic-modeling-skill",
        description="Framework for mathematical market sizing, financial forecast validations, and numerical model verification."
    ),
    instructions="Step 1: Parse and categorize all numerical data from corporate inputs. "
                 "Step 2: Coordinate with Analyst to model Total Addressable Market (TAM), Serviceable Addressable Market (SAM), and Serviceable Obtainable Market (SOM). "
                 "Step 3: Enforce double-entry consistency for all quantitative tables.",
    resources=models.Resources(
        references={
            "market_sizing.txt": "TAM/SAM/SOM modeling standards: TAM is aggregate demand, SAM is target geography, SOM is captured portion."
        }
    )
)

executive_report_skill = models.Skill(
    frontmatter=models.Frontmatter(
        name="executive-report-skill",
        description="Standardized publishing directives for producing premium, C-level executive strategic business intelligence reports."
    ),
    instructions="Step 1: Pull compiled strategic drafts from Planner and Writer. "
                 "Step 2: Restructure into three core pillars: Executive Summary, Market Dynamics, and Strategic Options. "
                 "Step 3: Format with premium markdown, rich data tables, and clear strategic options recommendations.",
    resources=models.Resources(
        references={
            "formatting_rules.txt": "All strategy papers must begin with a bold 1-sentence strategic takeaway, followed by high-level tables. Never use raw placeholder text."
        }
    )
)

# Encapsulating inline skills into a unified toolset
my_skill_toolset = skill_toolset.SkillToolset(
    skills=[market_research_skill, strategic_modeling_skill, executive_report_skill]
)

root_agent = Agent(
    model=Gemini(
        model='gemini-2.5-flash',
        use_interactions_api=True,
    ),
    name='Director',
    description='Root coordinator of the Pinnacle multi-agent system. Directs all jobs and synthesizes reports.',
    instruction='You are the Director agent, the main orchestrator of the Pinnacle B2B BI platform. '
                'Analyze the business question. Delegate research tasks to Seeker, web scraping to Crawler, '
                'duplicate prevention/job status to Tracker, numerical modeling to Analyst, layout generation to Planner, '
                'final report writing to Writer, and semantic RAG querying to Memory. '
                'Enforce strict high-quality B2B strategic output using your specialized B2B skills.',
    tools=[
        my_skill_toolset
    ],
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
