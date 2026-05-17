import { useState } from 'react';
import ConsoleLayout from './ConsoleLayout';
import AgentFilterBar from '@/components/console/agents/AgentFilterBar';
import AgentGrid from '@/components/console/agents/AgentGrid';

const baseAgents = [
  { id: 1, name: 'Director', status: 'Idle', trace: 'Waiting for commands', lastActive: '2m ago', description: 'The main orchestrator.', systemPrompt: 'You are the Director, the core orchestrator of the Pinnacle platform. You manage agent delegation.', instructions: 'Analyze requests carefully before routing.' },
  { id: 2, name: 'Seeker', status: 'Idle', trace: 'Ready for search generation', lastActive: '10m ago', description: 'Specializes in search queries.', systemPrompt: 'You are the Seeker. Formulate optimal search terms based on user intent.', instructions: 'Generate at least 3 alternative search queries.' },
  { id: 3, name: 'Crawler', status: 'Idle', trace: 'No active crawls', lastActive: '10m ago', description: 'Scrapes web content.', systemPrompt: 'You are the Crawler. Extract clean textual content from raw HTML.', instructions: 'Ignore navigation, footers, and ads.' },
  { id: 4, name: 'Tracker', status: 'Idle', trace: 'Memory sync complete', lastActive: '5m ago', description: 'Monitors long-running processes.', systemPrompt: 'You are the Tracker. Keep a ledger of all scraped URLs and sources.', instructions: 'Prevent duplicate processing.' },
  { id: 5, name: 'Analyst', status: 'Idle', trace: 'Waiting for datasets', lastActive: '12m ago', description: 'Processes quantitative data.', systemPrompt: 'You are the Analyst. Extract market sizes, CAGRs, and financial metrics.', instructions: 'Always output structured numerical data.' },
  { id: 6, name: 'Planner', status: 'Idle', trace: 'Ready to structure reports', lastActive: '1h ago', description: 'Creates document outlines.', systemPrompt: 'You are the Planner. Structure insights into a cohesive markdown outline.', instructions: 'Include Executive Summary and Strategic Recommendations.' },
  { id: 7, name: 'Writer', status: 'Idle', trace: 'Awaiting outlines', lastActive: '1h ago', description: 'Drafts the final report.', systemPrompt: 'You are the Writer. Generate executive-ready prose based on the provided outline.', instructions: 'Use a professional, consulting tone.' },
  { id: 8, name: 'Memory', status: 'Active', trace: 'Indexing new RAG documents', lastActive: 'just now', description: 'Manages shared context.', systemPrompt: 'You are Memory. Store and retrieve facts across agent interactions.', instructions: 'Index all facts with confidence scores.' },
];

export default function Agents() {
  const [agents] = useState(baseAgents);

  return (
    <ConsoleLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Agent Observability</h1>
          <p className="text-muted-foreground mt-2">Monitor active multi-agent workflows and execution traces.</p>
        </div>
        
        <AgentFilterBar />
        <AgentGrid agents={agents as any} />
      </div>
    </ConsoleLayout>
  );
}
