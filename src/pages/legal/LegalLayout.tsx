
import AppLayout from '@/components/app/AppLayout';

interface LegalLayoutProps {
  children: React.ReactNode;
}

export default function LegalLayout({ children }: LegalLayoutProps) {
  return (
    <AppLayout>
      <div className="container mx-auto py-10 px-4 max-w-4xl bg-background border rounded-lg mt-8 mb-8 shadow-sm">
        {children}
      </div>
    </AppLayout>
  );
}
