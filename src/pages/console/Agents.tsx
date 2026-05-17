import ConsoleLayout from './ConsoleLayout';
import AgentFilterBar from '@/components/console/agents/AgentFilterBar';
import AgentGrid from '@/components/console/agents/AgentGrid';

export default function Agents() {
  return (
    <ConsoleLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Agent Observability</h1>
          <p className="text-muted-foreground mt-2">Monitor active multi-agent workflows and execution traces.</p>
        </div>
        
        <AgentFilterBar />
        <AgentGrid />
      </div>
    </ConsoleLayout>
  );
}
