
import LegalLayout from './LegalLayout';

export default function Cookies() {
  return (
    <LegalLayout>
      <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
      <p className="text-muted-foreground mb-4">Last updated: May 17, 2026</p>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-3">1. What Are Cookies</h2>
          <p>Cookies are small pieces of text sent to your browser when you visit a site. They serve a variety of functions, like enabling us to remember certain information you provide to us as you navigate between pages on the Services.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">2. How We Use Cookies</h2>
          <p>We use cookies for the following purposes: to enable certain functions of the Service, to provide analytics, to store your preferences, and to enable advertisements delivery, including behavioral advertising.</p>
        </section>
        <section>
          <h2 className="text-2xl font-semibold mb-3">3. Your Choices Regarding Cookies</h2>
          <p>If you'd like to delete cookies or instruct your web browser to delete or refuse cookies, please visit the help pages of your web browser. Please note, however, that if you delete cookies or refuse to accept them, you might not be able to use all of the features we offer.</p>
        </section>
      </div>
    </LegalLayout>
  );
}
