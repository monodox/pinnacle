import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Loader2, CheckCircle2 } from 'lucide-react';

export interface PipelineStep {
  name: string;
  status: 'complete' | 'active' | 'pending';
}

interface PipelineViewProps {
  steps?: PipelineStep[];
  logs?: string[];
}

export default function PipelineView({ steps = [], logs = [] }: PipelineViewProps) {
  if (steps.length === 0) return null;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pipeline Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex flex-col gap-4">
            {steps.map((step, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {step.status === 'complete' && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                  {step.status === 'active' && <Loader2 className="h-5 w-5 animate-spin text-primary" />}
                  {step.status === 'pending' && <div className="h-5 w-5 rounded-full border-2 border-muted" />}
                </div>
                <div className={`text-sm font-medium ${step.status === 'pending' ? 'text-muted-foreground' : ''}`}>
                  {step.name} Agent
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t">
            <div className="text-xs font-mono text-muted-foreground bg-muted p-4 rounded-md h-[150px] overflow-auto">
              {logs.length === 0 ? (
                <div>Awaiting logs...</div>
              ) : (
                logs.map((log, i) => <div key={i}>{log}</div>)
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
