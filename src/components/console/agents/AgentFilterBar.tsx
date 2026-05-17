import { Button } from '@/components/ui/button';

const filters = ['All', 'Active', 'Idle', 'Error'];

export default function AgentFilterBar() {
  return (
    <div className="flex items-center gap-2 mb-6">
      {filters.map((filter) => (
        <Button key={filter} variant={filter === 'All' ? 'default' : 'outline'} size="sm">
          {filter}
        </Button>
      ))}
    </div>
  );
}
