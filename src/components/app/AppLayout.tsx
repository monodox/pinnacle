
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <AppHeader />
      <main className="flex-1 flex flex-col bg-muted/20">
        {children}
      </main>
      <AppFooter />
    </div>
  );
}
