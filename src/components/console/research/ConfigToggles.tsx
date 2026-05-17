import { Label } from '@/components/ui/label';

export default function ConfigToggles() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 p-4 border rounded-md bg-muted/20">
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="web-crawl" className="h-4 w-4 rounded border-gray-300" />
        <Label htmlFor="web-crawl">Enable Web Crawl</Label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="financial-modeling" className="h-4 w-4 rounded border-gray-300" />
        <Label htmlFor="financial-modeling">Enable Financial Modeling</Label>
      </div>
      <div className="flex items-center space-x-2">
        <input type="checkbox" id="deep-rag" className="h-4 w-4 rounded border-gray-300" />
        <Label htmlFor="deep-rag">Deep RAG</Label>
      </div>
    </div>
  );
}
