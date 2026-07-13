import Navbar from '../components/layout/Navbar';
import Hero from '../components/Hero';
import OneAppforEverydayNeeds from '../components/OneAppforEverydayNeeds';
import ThreeApps from '../components/ThreeApps';
import HowItWorks from '../components/HowItWorks';
import WhyBusinesses from '../components/WhyBusinesses';
import Testimonials from '../components/Testimonials';
import Services from '../components/Services';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/layout/Footer';

export function Home() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#fffdf9] text-[#1a1a1a]">
      <Navbar />

      <Hero />

      <OneAppforEverydayNeeds />
      <ThreeApps />

      <Services />
      <HowItWorks />

      <WhyBusinesses />

      <Testimonials />

      <FAQ />
      <CTA />
      <Footer />
    </div>);

}


