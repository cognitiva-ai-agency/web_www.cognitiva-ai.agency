import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Process from '@/components/sections/Process';
import CaseStudies from '@/components/sections/CaseStudies';
import Industries from '@/components/sections/Industries';
import Integrations from '@/components/sections/Integrations';
import ROI from '@/components/sections/ROI';
import Security from '@/components/sections/Security';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import FloatingButtons from '@/components/common/FloatingButtons';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Process />
        <CaseStudies />
        <Industries />
        <Integrations />
        <ROI />
        <Security />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingButtons />
    </>
  );
}