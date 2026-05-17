
import { Button } from '@/components/ui/button';
import logoIcon from '@/assets/icons/icon-dark.png';
import { Link } from 'react-router-dom';

export default function AppHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2 font-bold text-lg">
          <img src={logoIcon} className="h-6 w-6" alt="Pinnacle Icon" />
          <span>Pinnacle</span>
        </div>
        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link to="/login" className="transition-colors hover:text-foreground/80 text-foreground/60">Log in</Link>
          <Button size="sm" asChild>
            <Link to="/signup">Sign Up</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
