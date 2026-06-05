import React from 'react';
import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection';
import CapabilitiesGrid from './components/CapabilitiesGrid';
import PortfolioSection from './components/PortfolioSection';
import EvaluationForm from './components/EvaluationForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 flex flex-col antialiased selection:bg-blue-600 selection:text-white">
      {/* 1. Header Dock */}
      <Navbar />
      
      <main className="flex-grow">
        {/* 2. Core Profile Overview */}
        <AboutSection />

        {/* 3. Engineering Grid */}
        <CapabilitiesGrid />

        {/* 4. Real Client Vector Logos Grid */}
        <PortfolioSection />

        {/* 5. Intakes */}
        <EvaluationForm />
      </main>

      {/* 6. Corporate Footprint */}
      <Footer />
    </div>
  );
}

export default App;