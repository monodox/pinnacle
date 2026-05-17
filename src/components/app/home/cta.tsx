
import { Button } from '@/components/ui/button';

export default function Cta() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to automate your strategy?</h2>
            <p className="mx-auto max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-primary-foreground/90 mt-4">
              Join leading enterprises that are leveraging Pinnacle to make faster, data-driven decisions.
            </p>
          </div>
          <div className="space-x-4 mt-6">
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
