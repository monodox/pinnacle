import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface HealthAgent {
  id: string | number;
  name: string;
  status: 'online' | 'offline';
}

interface AgentHealthGridProps {
  agents?: HealthAgent[];
}

export default function AgentHealthGrid({ agents = [] }: AgentHealthGridProps) {
  if (agents.length === 0) {
    return <div className="text-sm text-muted-foreground">No agents available.</div>;
  }

  return (
    <div className="grid gap-4 grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      {agents.map((agent) => (
        <Card key={agent.id}>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">{agent.name}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-2 text-xs">
              <span className={`h-2 w-2 rounded-full ${agent.status === 'online' ? 'bg-green-500' : 'bg-muted-foreground'}`} />
              {agent.status}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
