import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import Clients from './components/Clients';               // Refactored from SimpleBrowser
import Solutions from './components/Solutions';           // Refactored from ProductsSuite
import PortfolioSection from './components/PortfolioSection';
import ContactWizard from './components/ContactWizard';   // Core intake wizard (#cta)
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-navy text-white flex flex-col antialiased selection:bg-blueCustom/30 selection:text-cyanCustom">
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
        <Clients />

        {/* Enterprise Solutions Suite */}
        <Solutions />

        {/* Case Studies Track */}
        <PortfolioSection />

        {/* Interactive Qualification Layer (Project Intake Wizard) */}
        <ContactWizard />
      </main>

      {/* Global Context Footer Anchor */}
      <Footer />
    </div>
  );
}

export default App;