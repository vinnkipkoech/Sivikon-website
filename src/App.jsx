import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import ProductsSuite from './components/ProductsSuite';
import PortfolioSection from './components/PortfolioSection';
import SimpleBrowser from './components/SimpleBrowser';
import ContactWizard from './components/ContactWizard'; // Integrated the project intake wizard
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-white flex flex-col antialiased selection:bg-emerald-500/30 selection:text-white">
      {/* Navigation Layer */}
      <Navbar />
      
      {/* Structured Content Architecture */}
      <main className="flex-grow">
        {/* Main Entry View */}
        <Hero />

        {/* Corporate Profile Matrix */}
        <AboutSection />

        {/* Engineering Capabilities Track */}
        <CapabilitiesGrid />

        {/* Served Sectors & Trust Verification */}
        <SimpleBrowser />

        {/* Enterprise Solutions Suite */}
        <ProductsSuite />

        {/* Case Studies Track */}
        <PortfolioSection />

        {/* Interactive Qualification Layer */}
        <ContactWizard />
      </main>

      {/* Global Context Footer Anchor */}
      <Footer />
    </div>
  );
}

export default App;