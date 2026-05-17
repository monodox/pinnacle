import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface ActivityItem {
  id: string | number;
  title: string;
  status: string;
}

interface RecentActivityProps {
  items?: ActivityItem[];
}

export default function RecentActivity({ items = [] }: RecentActivityProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activity</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4 text-sm text-muted-foreground">
          {items.length === 0 ? (
            <div className="text-center py-4">No recent activity.</div>
          ) : (
            items.map((item) => (
              <div key={item.id} className="flex items-center justify-between border-b last:border-0 pb-2 last:pb-0">
                <span>{item.title}</span>
                <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold">{item.status}</span>
              </div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  );
}
