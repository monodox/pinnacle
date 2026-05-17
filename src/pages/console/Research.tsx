import ConsoleLayout from './ConsoleLayout';
import ResearchInput from '@/components/console/research/ResearchInput';
import ConfigToggles from '@/components/console/research/ConfigToggles';
import PipelineView from '@/components/console/research/PipelineView';
import { Button } from '@/components/ui/button';

export default function Research() {
  return (
    <ConsoleLayout>
      <div className="space-y-6 max-w-4xl mx-auto py-8">
        <h1 className="text-3xl font-bold tracking-tight mb-8">New Research</h1>
        
        <div className="space-y-6">
          <ResearchInput />
          <ConfigToggles />
          <div className="flex justify-center">
            <Button size="lg" className="w-full max-w-sm text-lg h-12">
              Run Pinnacle
            </Button>
          </div>
        </div>

        <div className="mt-12">
          <PipelineView />
        </div>
      </div>
    </ConsoleLayout>
  );
}
