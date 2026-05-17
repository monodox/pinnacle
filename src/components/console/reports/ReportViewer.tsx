import { Button } from '@/components/ui/button';
import { Download, Share2 } from 'lucide-react';
import { ReactNode } from 'react';

export interface ReportDetails {
  title: string;
  date: string;
  confidence: number;
  content: ReactNode;
}

interface ReportViewerProps {
  report?: ReportDetails | null;
}

export default function ReportViewer({ report }: ReportViewerProps) {
  if (!report) {
    return (
      <div className="flex-1 h-[calc(100vh-8rem)] flex items-center justify-center bg-background text-muted-foreground">
        Select a report to view details.
      </div>
    );
  }

  return (
    <div className="flex-1 h-[calc(100vh-8rem)] flex flex-col bg-background">
      <div className="flex items-center justify-between p-6 border-b">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">{report.title}</h2>
          <p className="text-sm text-muted-foreground mt-1">Generated on {report.date} • Strategy Agent Confidence: {report.confidence}%</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            <Share2 className="mr-2 h-4 w-4" />
            Share
          </Button>
          <Button size="sm">
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>
      <div className="flex-1 p-8 overflow-auto prose prose-sm md:prose-base dark:prose-invert max-w-none">
        {report.content}
      </div>
    </div>
  );
}
