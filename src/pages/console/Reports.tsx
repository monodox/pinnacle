import ConsoleLayout from './ConsoleLayout';
import ReportsSidebar from '@/components/console/reports/ReportsSidebar';
import ReportViewer from '@/components/console/reports/ReportViewer';

export default function Reports() {
  return (
    <ConsoleLayout>
      <div className="flex h-full border rounded-xl overflow-hidden shadow-sm">
        <ReportsSidebar />
        <ReportViewer />
      </div>
    </ConsoleLayout>
  );
}
