
import { BarChart2, Globe, Zap } from 'lucide-react';

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Your 24/7 Strategy Consultant</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mt-4">
              Empower your decisions with superhuman research speed and analytical precision.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3">
          <div className="flex flex-col items-center space-y-4 text-center p-8 bg-background rounded-xl shadow-sm border h-full transition-all hover:shadow-md">
            <div className="p-4 bg-primary/5 rounded-full mb-2">
              <Globe className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Autonomous Research</h3>
            <p className="text-muted-foreground">Scours the web for market trends and competitor data based on your specific prompts.</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center p-8 bg-background rounded-xl shadow-sm border h-full transition-all hover:shadow-md">
            <div className="p-4 bg-primary/5 rounded-full mb-2">
              <BarChart2 className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Data Modeling</h3>
            <p className="text-muted-foreground">Automatically analyzes complex datasets to surface non-obvious, actionable insights.</p>
          </div>
          <div className="flex flex-col items-center space-y-4 text-center p-8 bg-background rounded-xl shadow-sm border h-full transition-all hover:shadow-md">
            <div className="p-4 bg-primary/5 rounded-full mb-2">
              <Zap className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Strategy Generation</h3>
            <p className="text-muted-foreground">Translates findings into comprehensive, executive-ready strategy reports instantly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
