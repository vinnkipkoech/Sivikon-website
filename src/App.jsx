import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import Clients from './components/Clients';               
import Solutions from './components/Solutions';           
import PortfolioSection from './components/PortfolioSection';
import ContactWizard from './components/ContactWizard';   
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-[#0A1628] flex flex-col antialiased selection:bg-[#1558D6]/10 selection:text-[#1558D6]">
      {/* Navigation Layer */}
      <Navbar />
      
      {/* Structured Content Architecture */}
      <main className="flex-grow pt-[74px]">
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