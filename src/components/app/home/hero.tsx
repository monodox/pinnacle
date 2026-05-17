
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="w-full py-20 md:py-32 lg:py-48 bg-background border-b">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Autonomous Business Intelligence
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
              Pinnacle uses AI agents to answer complex business questions, research competitors, and generate ready-to-use strategy reports—all without human intervention.
            </p>
          </div>
          <div className="space-x-4 mt-8">
            <Button size="lg" className="h-12 px-8">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              View Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
