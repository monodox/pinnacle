import { ReactNode } from 'react';
import ConsoleSidebar from './ConsoleSidebar';
import ConsoleHeader from './ConsoleHeader';

interface ConsoleLayoutProps {
  children: ReactNode;
}

export default function ConsoleLayout({ children }: ConsoleLayoutProps) {
  return (
    <div className="flex min-h-screen bg-background">
      <ConsoleSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <ConsoleHeader />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
