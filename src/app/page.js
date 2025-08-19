import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import ServiceOfferings from '@/components/sections/ServiceOfferings';
import WorkMethodology from '@/components/sections/WorkMethodology';
import ClientSuccessStories from '@/components/sections/ClientSuccessStories';
import IndustryExpertise from '@/components/sections/IndustryExpertise';
import TechnologyIntegrations from '@/components/sections/TechnologyIntegrations';
import ResultsMetrics from '@/components/sections/ResultsMetrics';
import DataSecurity from '@/components/sections/DataSecurity';
import FAQ from '@/components/sections/FAQ';
import CallToActionSection from '@/components/sections/CallToActionSection';
import FloatingActionButtons from '@/components/common/FloatingActionButtons';

export default function IndexPage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ServiceOfferings />
        <WorkMethodology />
        <ClientSuccessStories />
        <IndustryExpertise />
        <TechnologyIntegrations />
        <ResultsMetrics />
        <DataSecurity />
        <FAQ />
        <CallToActionSection />
      </main>
      <Footer />
      <FloatingActionButtons />
    </>
  );
}