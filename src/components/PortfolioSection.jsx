import React, { useState } from 'react';

export default function PortfolioSection() {
  const [showAllCases, setShowAllCases] = useState(false);

  const caseStudies = [
    {
      index: "01",
      title: "Government Transformation Initiative",
      client: "East African Government",
      description: "Modernized legacy systems across 50+ government agencies, enabling digital service delivery to 10M+ citizens with enhanced security and compliance.",
      results: ["50+ Agencies Digitized", "10M+ Users Onboarded", "40% Cost Reduction"],
      tech: ["React", "Node.js", "PostgreSQL", "Cloud Infrastructure"]
    },
    {
      index: "02",
      title: "Healthcare Network Consolidation",
      client: "Leading Hospital Group",
      description: "Integrated 15 hospitals into unified HMIS platform enabling real-time patient data sharing, improved clinical outcomes, and streamlined billing operations.",
      results: ["15 Hospitals Connected", "99.9% Uptime", "50% Admin Time Saved"],
      tech: ["HL7 Integration", "React", "Node.js", "MongoDB"]
    },
    {
      index: "03",
      title: "Retail Chain Digital Platform",
      client: "National Retail Corporation",
      description: "Built POS system serving 500+ retail locations with inventory management, analytics, and seamless offline-to-online synchronization.",
      results: ["500+ Locations", "Real-time Inventory", "2x Sales Growth"],
      tech: ["React Native", "Express.js", "MongoDB", "Offline Sync"]
    },
    {
      index: "04",
      title: "Enterprise Resource Planning Modernization",
      client: "Large Manufacturing Group",
      description: "Replaced legacy ERP with modern, scalable system integrating finance, HR, supply chain, and operations across multiple subsidiaries.",
      results: ["3 Subsidiaries", "Real-time Reporting", "30% Efficiency Gain"],
      tech: ["React", "Node.js", "PostgreSQL", "Custom APIs"]
    }
  ];

  const displayedCases = showAllCases ? caseStudies : caseStudies.slice(0, 2);

  return (
    <section id="portfolio-section" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left bg-canvasDark">
      
      {/* Background Ambient Glow Layout */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-primary-400 uppercase bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full backdrop-blur-md">
            🏆 CASE STUDIES
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-6 uppercase leading-tight">
            Proven Track Record
          </h2>
          <p className="text-lg text-dark-300 mt-6 leading-relaxed max-w-2xl font-medium">
            Delivering measurable impact across government, healthcare, retail, and enterprise sectors. See how we've transformed businesses worldwide.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayedCases.map((study) => (
            <div 
              key={study.index} 
              className="group relative bg-dark-900/40 border border-white/5 rounded-3xl p-8 transition-all duration-300 hover:border-primary-500/30 hover:-translate-y-1.5 shadow-2xl backdrop-blur-xl flex flex-col justify-between"
            >
              {/* Index Badge */}
              <div className="absolute top-6 right-8 text-xs font-mono font-bold text-dark-500 group-hover:text-primary-400 transition-colors">
                // Case Study {study.index}
              </div>

              <div className="space-y-6 flex-grow">
                {/* Client & Title */}
                <div>
                  <p className="text-xs font-bold text-primary-400 uppercase tracking-widest mb-2">
                    {study.client}
                  </p>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight leading-tight">
                    {study.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-dark-300 leading-relaxed font-medium">
                  {study.description}
                </p>

                {/* Results Internal Panel */}
                <div className="bg-dark-950/40 border border-white/5 rounded-2xl p-5">
                  <p className="text-[11px] font-bold text-dark-400 uppercase tracking-widest mb-3.5">
                    Key Results
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex flex-col justify-center">
                        <p className="text-sm font-bold text-white leading-snug">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack Tags */}
                <div>
                  <p className="text-[11px] font-bold text-dark-400 uppercase tracking-widest mb-3">
                    Technology Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-semibold text-dark-200 bg-dark-900/60 px-3 py-1.5 rounded-xl border border-white/5 group-hover:border-primary-500/10 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action CTA Link */}
              <div className="mt-8 pt-5 border-t border-white/5">
                <a 
                  href="#contact" 
                  className="text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors inline-flex items-center gap-2 group/link"
                >
                  Learn More 
                  <span className="transform group-hover/link:translate-x-1 transition-transform">➔</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button Container */}
        <div className="flex justify-center mb-24">
          <button 
            onClick={() => setShowAllCases(!showAllCases)}
            className="inline-flex items-center justify-center rounded-xl bg-dark-900/60 border border-white/5 hover:border-primary-500/30 px-8 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-xl transition-all duration-200 transform hover:scale-[1.02]"
          >
            {showAllCases ? 'Show Less ↑' : 'View All Case Studies ↓'}
          </button>
        </div>

        {/* Highlight Banner: Impact Statistics */}
        <div className="bg-gradient-to-br from-dark-900/60 to-dark-950/40 border border-white/5 rounded-3xl p-12 text-white shadow-2xl backdrop-blur-xl relative overflow-hidden group hover:border-primary-500/20 transition-colors duration-300">
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <h3 className="text-2xl md:text-3xl font-black uppercase mb-12 text-center tracking-tight">
            Impact By Numbers
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            <div className="pt-4 md:pt-0">
              <p className="text-4xl md:text-5xl font-black text-white tracking-tight">150+</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-3 text-primary-400">Projects Delivered</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-4xl md:text-5xl font-black text-white tracking-tight">500K+</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-3 text-primary-400">Active Users</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-4xl md:text-5xl font-black text-white tracking-tight">99.9%</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-3 text-primary-400">Uptime Guarantee</p>
            </div>
            <div className="pt-4 md:pt-0">
              <p className="text-4xl md:text-5xl font-black text-white tracking-tight">2024</p>
              <p className="text-xs font-bold uppercase tracking-widest mt-3 text-primary-400">Established</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}