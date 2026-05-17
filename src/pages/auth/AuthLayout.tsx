
import AppLayout from '@/components/app/AppLayout';

interface AuthLayoutProps {
  children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <AppLayout>
      <div className="flex flex-1 items-center justify-center py-12 px-4">
        {children}
      </div>
    </AppLayout>
  );
}
