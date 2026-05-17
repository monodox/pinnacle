
import LegalLayout from './LegalLayout';

export default function Privacy() {
  return (
    <LegalLayout>
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-muted-foreground mb-4">Last updated: May 17, 2026</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Information We Collect</h2>
          <p>We only collect information about you if we have a reason to do so – for example, to provide our Services, to communicate with you, or to make our Services better.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Information</h2>
          <p>We use the information we collect to provide our Services to you, to communicate with you about our Services, and to improve our Services.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Sharing Information</h2>
          <p>We do not sell our users' private personal information. We share information about you in the limited circumstances spelled out in this policy and with appropriate safeguards on your privacy.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
