
import AppLayout from '@/components/app/AppLayout';

interface SiteLayoutProps {
  children: React.ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <AppLayout>
      <div className="flex-1 flex flex-col">
        {children}
      </div>
    </AppLayout>
  );
}
