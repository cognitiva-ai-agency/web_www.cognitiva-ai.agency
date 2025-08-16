import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/sections/Hero';
import Services from '@/sections/Services';
import Process from '@/sections/Process';
import CaseStudies from '@/sections/CaseStudies';
import Industries from '@/sections/Industries';
import Integrations from '@/sections/Integrations';
import ROI from '@/sections/ROI';
import Security from '@/sections/Security';
import FAQ from '@/sections/FAQ';
import FinalCTA from '@/sections/FinalCTA';
import FloatingButtons from '@/common/FloatingButtons';


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
