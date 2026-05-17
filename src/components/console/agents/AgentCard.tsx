import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Bot, Clock } from 'lucide-react';
import { AgentDetails } from './AgentGrid';

interface AgentCardProps {
  agent: AgentDetails;
  onClick?: (agent: AgentDetails) => void;
}

export default function AgentCard({ agent, onClick }: AgentCardProps) {
  return (
    <Card className="cursor-pointer hover:border-primary transition-colors" onClick={() => onClick?.(agent)}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center gap-2">
            <Bot className="h-5 w-5" />
            {agent.name}
          </CardTitle>
          <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold ${
            agent.status === 'Active' ? 'text-green-500 border-green-500/20 bg-green-500/10' :
            agent.status === 'Error' ? 'text-destructive border-destructive/20 bg-destructive/10' :
            'text-muted-foreground border-border'
          }`}>
            {agent.status}
          </span>
        </div>
        <CardDescription className="flex items-center gap-1 text-xs mt-1">
          <Clock className="h-3 w-3" /> Last active: {agent.lastActive}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-xs font-mono bg-muted p-2 rounded truncate">
          &gt; {agent.trace}
        </div>
      </CardContent>
    </Card>
  );
}
