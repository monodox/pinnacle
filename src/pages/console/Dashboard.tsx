import ConsoleLayout from './ConsoleLayout';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import StatsRow from '@/components/console/dashboard/StatsRow';
import RecentActivity from '@/components/console/dashboard/RecentActivity';
import AgentHealthGrid from '@/components/console/dashboard/AgentHealthGrid';

export default function Dashboard() {
  return (
    <ConsoleLayout>
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            New Research
          </Button>
        </div>
        
        <StatsRow />
        <RecentActivity />
        
        <div>
          <h2 className="text-xl font-semibold tracking-tight mb-4">Agent Health</h2>
          <AgentHealthGrid />
        </div>
      </div>
    </ConsoleLayout>
  );
}
