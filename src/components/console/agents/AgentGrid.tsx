import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import AgentCard from './AgentCard';

export interface AgentDetails {
  id: string | number;
  name: string;
  status: 'Active' | 'Idle' | 'Error';
  trace: string;
  lastActive: string;
  description?: string;
  systemPrompt?: string;
  instructions?: string;
}

interface AgentGridProps {
  agents?: AgentDetails[];
}

export default function AgentGrid({ agents = [] }: AgentGridProps) {
  const [selectedAgent, setSelectedAgent] = useState<AgentDetails | null>(null);
  const [isSubAgentMode, setIsSubAgentMode] = useState(false);
  const [subAgentName, setSubAgentName] = useState('');

  if (agents.length === 0) {
    return <div className="text-sm text-muted-foreground">No agents found.</div>;
  }

  const handleOpenEdit = (agent: AgentDetails) => {
    setSelectedAgent(agent);
    setIsSubAgentMode(false);
    setSubAgentName('');
  };

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {agents.map((agent) => (
          <AgentCard key={agent.id} agent={agent} onClick={handleOpenEdit} />
        ))}
      </div>

      <Dialog open={!!selectedAgent} onOpenChange={(open) => !open && setSelectedAgent(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{isSubAgentMode ? 'Create Sub-Agent' : `Edit Agent: ${selectedAgent?.name}`}</DialogTitle>
            <DialogDescription>
              {isSubAgentMode 
                ? `Spawn a specialized sub-agent inheriting capabilities from ${selectedAgent?.name}.` 
                : 'Configure agent parameters or spawn a new sub-agent.'}
            </DialogDescription>
          </DialogHeader>
          
          {isSubAgentMode ? (
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="sub-name">Sub-Agent Name</Label>
                <Input 
                  id="sub-name" 
                  value={subAgentName} 
                  onChange={(e) => setSubAgentName(e.target.value)} 
                  placeholder={`e.g. ${selectedAgent?.name}-Finance`} 
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="sub-instruction">Specialized Instruction</Label>
                <Textarea id="sub-instruction" placeholder="e.g. Focus exclusively on SEC filings" className="min-h-[80px]" />
              </div>
            </div>
          ) : (
            <div className="grid gap-4 py-4 max-h-[60vh] overflow-y-auto pr-2">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" value={selectedAgent?.name || ''} readOnly className="bg-muted text-muted-foreground" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input id="description" value={selectedAgent?.description || ''} readOnly className="bg-muted text-muted-foreground" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="systemPrompt">System Prompt</Label>
                <Textarea id="systemPrompt" value={selectedAgent?.systemPrompt || ''} readOnly className="bg-muted text-muted-foreground min-h-[100px]" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="instructions">Instructions</Label>
                <Textarea id="instructions" defaultValue={selectedAgent?.instructions || ''} className="min-h-[100px]" />
              </div>
            </div>
          )}

          <DialogFooter className="flex-col sm:flex-row gap-2 sm:gap-0">
            {!isSubAgentMode ? (
              <>
                <Button type="button" variant="outline" className="w-full sm:w-auto" onClick={() => setIsSubAgentMode(true)}>
                  <Plus className="mr-2 h-4 w-4" /> Create Sub-Agent
                </Button>
                <Button type="submit" className="w-full sm:w-auto">Save Changes</Button>
              </>
            ) : (
              <>
                <Button type="button" variant="ghost" className="w-full sm:w-auto" onClick={() => setIsSubAgentMode(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="w-full sm:w-auto">Spawn Agent</Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
