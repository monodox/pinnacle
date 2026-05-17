
import LegalLayout from './LegalLayout';

export default function Terms() {
  return (
    <LegalLayout>
      <h1 className="text-4xl font-bold mb-6">Terms of Service</h1>
      <p className="text-muted-foreground mb-4">Last updated: May 17, 2026</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. Agreement to Terms</h2>
          <p>By accessing or using Pinnacle, you agree to be bound by these Terms of Service.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
          <p>Permission is granted to temporarily download one copy of the materials (information or software) on Pinnacle's website for personal, non-commercial transitory viewing only.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Disclaimer</h2>
          <p>The materials on Pinnacle's website are provided on an 'as is' basis. Pinnacle makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
