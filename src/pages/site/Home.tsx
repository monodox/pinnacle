
import SiteLayout from './SiteLayout';
import Hero from '@/components/app/home/hero';
import Features from '@/components/app/home/features';
import Faqs from '@/components/app/home/faqs';
import Cta from '@/components/app/home/cta';

export default function Home() {
  return (
    <SiteLayout>
      <Hero />
      <Features />
      <Faqs />
      <Cta />
    </SiteLayout>
  );
}
