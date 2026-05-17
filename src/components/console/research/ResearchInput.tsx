export default function ResearchInput() {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold tracking-tight text-center">What business question do you want answered?</h2>
      <textarea
        className="w-full min-h-[150px] p-4 text-lg rounded-md border bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        placeholder="Enter your question..."
      ></textarea>
    </div>
  );
}
