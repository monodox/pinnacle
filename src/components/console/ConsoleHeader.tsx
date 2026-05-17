import { Bell, User } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ConsoleHeader() {
  return (
    <header className="h-14 border-b bg-background flex items-center justify-between px-6 sticky top-0 z-10">
      <div className="flex-1" />
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Bell className="h-4 w-4" />
          <span className="sr-only">Notifications</span>
        </Button>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-muted">
          <User className="h-4 w-4" />
          <span className="sr-only">Profile</span>
        </Button>
      </div>
    </header>
  );
}
