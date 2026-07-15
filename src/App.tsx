import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EcosystemSection } from './components/EcosystemSection';
import { AppShowcase } from './components/AppShowcase';
import { BusinessModules } from './components/BusinessModules';
import { EnterpriseFeatures } from './components/EnterpriseFeatures';
import { WorkflowSection } from './components/WorkflowSection';
import { EnterprisePlatform } from './components/EnterprisePlatform';
import { WhyZinokart } from './components/WhyZinokart';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="w-full bg-surface-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <EcosystemSection />
        <AppShowcase />
        <BusinessModules />
        <EnterpriseFeatures />
        <WorkflowSection />
        <EnterprisePlatform />
        <WhyZinokart />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>);

}