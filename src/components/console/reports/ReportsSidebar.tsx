import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

export interface ReportSummary {
  id: string | number;
  question: string;
  date: string;
  score: number;
}

interface ReportsSidebarProps {
  reports?: ReportSummary[];
  onSelectReport?: (id: string | number) => void;
}

export default function ReportsSidebar({ reports = [], onSelectReport }: ReportsSidebarProps) {
  return (
    <div className="w-80 border-r h-[calc(100vh-8rem)] flex flex-col bg-muted/10">
      <div className="p-4 border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input type="search" placeholder="Search reports..." className="pl-8 bg-background" />
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <div className="p-2 space-y-2">
          {reports.length === 0 ? (
            <div className="text-center text-sm text-muted-foreground py-4">No reports found.</div>
          ) : (
            reports.map((report) => (
              <div 
                key={report.id} 
                onClick={() => onSelectReport?.(report.id)}
                className="p-3 rounded-lg border bg-card hover:bg-muted/50 cursor-pointer transition-colors"
              >
                <div className="font-medium text-sm line-clamp-2 mb-2">{report.question}</div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{report.date}</span>
                  <span className="inline-flex items-center rounded-full border px-2 py-0.5 font-semibold bg-green-500/10 text-green-500 border-green-500/20">
                    {report.score}% Match
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
