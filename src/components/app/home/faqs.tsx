

export default function Faqs() {
  const faqs = [
    {
      question: "How does Pinnacle differ from ChatGPT?",
      answer: "Unlike standard chatbots, Pinnacle utilizes autonomous multi-agent systems designed specifically for enterprise research. It runs multi-step pipelines to gather, verify, model, and synthesize data rather than just returning a text completion."
    },
    {
      question: "Is my company's data secure?",
      answer: "Yes, security is our top priority. All enterprise data is encrypted at rest and in transit. We do not use your proprietary business questions or data to train our foundational models."
    },
    {
      question: "Can I integrate Pinnacle into my existing workflows?",
      answer: "Absolutely. We offer a robust API and native integrations with popular enterprise tools like Slack, Microsoft Teams, and standard CRM platforms."
    }
  ];

  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background border-t">
      <div className="container px-4 md:px-6">
        <div className="mx-auto max-w-3xl space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Frequently Asked Questions</h2>
            <p className="text-muted-foreground md:text-xl">
              Everything you need to know about the product and billing.
            </p>
          </div>
          <div className="grid gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="p-6 border rounded-xl bg-card shadow-sm">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
