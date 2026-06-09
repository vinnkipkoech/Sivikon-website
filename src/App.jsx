import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSection from './components/AboutSection';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import ProductsSuite from './components/ProductsSuite';
import PortfolioSection from './components/PortfolioSection';
import SimpleBrowser from './components/SimpleBrowser';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col antialiased selection:bg-cyan-600 selection:text-white">
      {/* Navigation */}
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Services/Capabilities */}
        <CapabilitiesGrid />

        {/* Browser Demo */}
        <SimpleBrowser />

        {/* Products */}
        <ProductsSuite />

        {/* Portfolio */}
        <PortfolioSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;