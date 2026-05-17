
import { Button } from '@/components/ui/button';
import { Hexagon } from 'lucide-react';

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Hexagon className="h-5 w-5 text-primary" />
          <span>Pinnacle</span>
        </div>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <a href="/login" className="transition-colors hover:text-foreground/80 text-foreground/60">Log in</a>
          <Button size="sm" asChild>
            <a href="/signup">Sign Up</a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
