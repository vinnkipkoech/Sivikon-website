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
    <section id="portfolio-section" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 to-white" />
      
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-25" style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"><defs><pattern id="bgpattern" width="60" height="60" patternUnits="userSpaceOnUse"><path d="M0 30 Q15 0 30 30 T60 30" fill="none" stroke="rgba(59,130,246,0.2)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23bgpattern)"/></svg>')`,
        backgroundSize: '60px 60px'
      }} />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-emerald-600 uppercase bg-emerald-100 border border-emerald-300 px-4 py-2 rounded-full">
            🏆 CASE STUDIES
          </div>
          <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight mt-6 uppercase leading-tight">
            Proven Track Record
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mt-6 leading-relaxed max-w-2xl">
            Delivering measurable impact across government, healthcare, retail, and enterprise sectors. See how we've transformed businesses worldwide.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayedCases.map((study) => (
            <div 
              key={study.index} 
              className="group relative bg-white border-2 border-emerald-200 hover:border-emerald-500 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
            >
              {/* Index Badge */}
              <div className="absolute top-4 right-4 text-xs font-bold text-emerald-600 opacity-50 group-hover:opacity-100 transition-opacity">
                Case Study {study.index}
              </div>

              <div className="space-y-6">
                {/* Client & Title */}
                <div>
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-widest mb-2">
                    {study.client}
                  </p>
                  <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight leading-tight">
                    {study.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {study.description}
                </p>

                {/* Results */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4">
                  <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest mb-3">
                    Key Results
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="text-center">
                        <p className="text-sm font-bold text-slate-900">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack */}
                <div>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">
                    Technology Stack
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-semibold text-emerald-600 bg-emerald-100 px-3 py-1.5 rounded-full border border-emerald-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-blue-200">
                <a 
                  href="#contact" 
                  className="text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors inline-flex items-center gap-2"
                >
                  Learn More ➔
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        <div className="flex justify-center mb-16">
          {!showAllCases && (
            <button 
              onClick={() => setShowAllCases(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-widest transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
            >
              View All Case Studies ↓
            </button>
          )}
          {showAllCases && (
            <button 
              onClick={() => setShowAllCases(false)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-widest transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50"
            >
              Show Less ↑
            </button>
          )}
        </div>

        {/* Statistics Section */}
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-12 text-white">
          <h3 className="text-3xl md:text-4xl font-black uppercase mb-12 text-center">
            Impact By Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-black">150+</p>
              <p className="text-sm mt-2 opacity-90">Projects Delivered</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black">500K+</p>
              <p className="text-sm mt-2 opacity-90">Active Users</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black">99.9%</p>
              <p className="text-sm mt-2 opacity-90">Uptime Guarantee</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-black">2024</p>
              <p className="text-sm mt-2 opacity-90">Established</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}