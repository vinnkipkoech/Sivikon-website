import React, { useState } from 'react';

export default function PortfolioSection() {
  const [showAllCases, setShowAllCases] = useState(false);

  // Synchronized directly with your authentic enterprise client portfolio roster
  const caseStudies = [
    {
      index: "01",
      title: "High-Security Payment Integrations & QA Automation",
      client: "ABSA Bank Group",
      description: "Implemented high-security core transaction routing, financial payload validation pipelines, and comprehensive automated regression testing engines to ensure ironclad system stability.",
      results: ["Zero-Fault Deployments", "Advanced Payload Security", "Automated Compliance"],
      tech: ["Automated QA", "Security Penetration", "Financial APIs", "Node.js"]
    },
    {
      index: "02",
      title: "High-Volume Mobile Infrastructure Scaling",
      client: "MTECH Communications",
      description: "Optimized distributed API routing backbones and high-throughput application layers capable of handling intense message payloads and millions of active consumer touchpoints concurrently.",
      results: ["Millions of Logs / Sec", "Sub-ms API Latency", "Zero-Downtime Migration"],
      tech: ["Cloud Infrastructure", "API Operations", "Database Sharding", "React"]
    },
    {
      index: "03",
      title: "Transactional Loan Pipelines & Customer Portal",
      client: "Housing Finance Company (HFC)",
      description: "Designed a clean, ultra-responsive customer-facing application suite integrated with secure backend loan underwriting and transaction management layers.",
      results: ["Reduced Drop-Offs", "Secure Vault Storage", "Instant Status Sync"],
      tech: ["Web Applications", "React Specialization", "Tailwind CSS", "PCI DSS"]
    },
    {
      index: "04",
      title: "Public Service Automation & Centralized Database",
      client: "County Government of Kericho",
      description: "Engineered high-impact public service digital modernizations alongside clean structural data normalization to consolidate isolated department systems into a single dashboard.",
      results: ["Consolidated Database", "Paperless Workflows", "Transparent Logging"],
      tech: ["Database Engineering", "Fleet Systems", "Role Access Controls", "React"]
    }
  ];

  const displayedCases = showAllCases ? caseStudies : caseStudies.slice(0, 2);

  return (
    <section id="portfolio-section" className="relative py-24 px-[5%] overflow-hidden text-left bg-navy border-t border-white/5">
      
      {/* Background Ambient Glow Layout */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(21,88,214,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-blueCustom/20 border border-blueCustom/40 text-cyanCustom text-xs font-semibold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
            🏆 CASE STUDIES
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-6 uppercase leading-tight">
            Proven Track Record
          </h2>
          <p className="text-base text-white/60 mt-6 leading-relaxed max-w-2xl font-normal">
            Delivering high-impact, enterprise-grade digital transformations across financial systems, mobile platforms, and government sectors[cite: 1].
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {displayedCases.map((study) => (
            <div 
              key={study.index} 
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-8 transition-all duration-300 hover:border-cyanCustom/30 hover:-translate-y-1 shadow-2xl backdrop-blur-md flex flex-col justify-between"
            >
              {/* Index Badge */}
              <div className="absolute top-6 right-8 text-xs font-mono font-bold text-white/40 group-hover:text-cyanCustom transition-colors">
                // Case Study {study.index}
              </div>

              <div className="space-y-6 flex-grow">
                {/* Client & Title */}
                <div>
                  <p className="text-xs font-bold text-cyanCustom uppercase tracking-widest mb-2 font-mono">
                    {study.client}
                  </p>
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight leading-tight">
                    {study.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-white/60 leading-relaxed font-normal">
                  {study.description}
                </p>

                {/* Results Internal Panel */}
                <div className="bg-navy border border-white/5 rounded-xl p-5">
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3.5 font-mono">
                    Key Metric Delivery
                  </p>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex flex-col justify-center">
                        <p className="text-xs md:text-sm font-bold text-white leading-snug">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Stack Tags */}
                <div>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3 font-mono">
                    Core Solutions Architecture
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-xs font-semibold text-white/80 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 group-hover:border-cyanCustom/20 transition-colors"
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
                  href="#cta" 
                  className="text-sm font-bold text-cyanCustom hover:text-white transition-colors inline-flex items-center gap-2 group/link"
                >
                  Request Case Study Insights 
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
            className="inline-flex items-center justify-center rounded-xl bg-white/5 border border-white/10 hover:border-cyanCustom/30 px-8 py-3.5 text-xs font-bold uppercase tracking-widest text-white shadow-xl transition-all duration-200 transform hover:scale-[1.01]"
          >
            {showAllCases ? 'Collapse View ↑' : 'View Full Roster ↓'}
          </button>
        </div>

        {/* Highlight Banner: Impact Statistics */}
        <div className="bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-12 text-white shadow-2xl backdrop-blur-md relative overflow-hidden group hover:border-cyanCustom/20 transition-colors duration-300">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(21,88,214,0.1)_0%,transparent_70%)] pointer-events-none" />
          
          <h3 className="text-xl font-black uppercase mb-12 text-center tracking-tight font-mono text-cyanCustom">// Impact By Numbers</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/5">
            150+ Projects Delivered
            <div className="pt-4 md:pt-0">
              <p className="text-3xl md:text-5xl font-black text-white tracking-tight">150+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-3 text-white/55 font-mono">Projects Delivered</p>
            </div>
            50+ Technical Capability Tools
            <div className="pt-4 md:pt-0">
              <p className="text-3xl md:text-5xl font-black text-white tracking-tight">50+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-3 text-white/55 font-mono">QA & Tech Tools</p>
            </div>
            99.99% Architecture Target
            <div className="pt-4 md:pt-0">
              <p className="text-3xl md:text-5xl font-black text-white tracking-tight">99.99%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-3 text-white/55 font-mono">Uptime Target</p>
            </div>
            2+ Years Active Operations
            <div className="pt-4 md:pt-0">
              <p className="text-3xl md:text-5xl font-black text-white tracking-tight">2+</p>
              <p className="text-[10px] font-bold uppercase tracking-widest mt-3 text-white/55 font-mono">Years Operational</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}