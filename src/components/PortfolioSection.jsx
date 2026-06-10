import { useState } from 'react';

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
    <section id="portfolio" className="bg-white py-[90px] px-[5%] font-sans text-left border-t border-[#E2E8F4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-[11.5px] font-bold tracking-[2px] uppercase text-[#1558D6] mb-3">
            Case Studies
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] leading-[1.1] tracking-[-1.5px]">
            Proven Track Record
          </h2>
          <p className="text-sm sm:text-base text-[#6B7A99] mt-4 leading-[1.75] font-normal max-w-2xl">
            Delivering high-impact, enterprise-grade digital transformations across financial systems, mobile platforms, and government sectors.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-10">
          {displayedCases.map((study) => (
            <div 
              key={study.index} 
              className="group relative bg-white border border-[#E2E8F4] rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:border-[#1558D6]/30 hover:shadow-[0_8px_32px_rgba(21,88,214,0.06)] flex flex-col justify-between overflow-hidden"
            >
              {/* Top Accent Gradient Hover Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1558D6] to-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Index Tracking Tag */}
              <div className="absolute top-6 right-6 sm:right-8 text-[11px] font-mono font-bold text-[#6B7A99]/50 group-hover:text-[#1558D6] transition-colors">
                // Case Study {study.index}
              </div>

              <div className="space-y-6 flex-grow">
                {/* Client Label & Core Title */}
                <div>
                  <p className="text-[11px] font-bold text-[#1558D6] uppercase tracking-widest mb-1.5 font-mono">
                    {study.client}
                  </p>
                  <h3 className="text-lg md:text-xl font-extrabold text-[#0A1628] tracking-tight leading-tight">
                    {study.title}
                  </h3>
                </div>

                {/* Case Study Description */}
                <p className="text-[13.5px] text-[#6B7A99] leading-relaxed font-normal">
                  {study.description}
                </p>

                {/* Key Metrics Dashboard Card Panel */}
                <div className="bg-[#F8FAFC] border border-[#E2E8F4] rounded-xl p-4 sm:p-5">
                  <p className="text-[10px] font-bold text-[#6B7A99] uppercase tracking-wider mb-3 font-mono">
                    Key Metric Delivery
                  </p>
                  <div className="grid grid-cols-3 gap-3.5">
                    {study.results.map((result, idx) => (
                      <div key={idx} className="flex flex-col justify-start">
                        <span className="w-1.5 h-1.5 bg-[#1558D6] rounded-full mb-1.5 block" />
                        <p className="text-xs font-bold text-[#0A1628] leading-tight">{result}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technology Architecture Tag Pills */}
                <div>
                  <p className="text-[10px] font-bold text-[#6B7A99] uppercase tracking-wider mb-2.5 font-mono">
                    Core Solutions Architecture
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {study.tech.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-[11px] font-semibold font-mono px-2.5 py-1 rounded bg-[#F0F5FF] text-[#1558D6] border border-[#E2E8F4]/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Link Button */}
              <div className="mt-6 pt-4 border-t border-[#F0F5FF]">
                <a 
                  href="#cta" 
                  className="text-xs font-bold uppercase tracking-wider text-[#1558D6] hover:text-[#0A1628] transition-colors inline-flex items-center gap-1.5 group/link"
                >
                  Request Case Study Insights 
                  <span className="transform group-hover/link:translate-x-1 transition-transform">➔</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Expand/Collapse Custom Roster View Control Button */}
        <div className="flex justify-center mb-16">
          <button 
            onClick={() => setShowAllCases(!showAllCases)}
            className="inline-flex items-center justify-center rounded-xl bg-white border border-[#E2E8F4] hover:border-[#1558D6]/40 px-6 py-3 text-xs font-bold uppercase tracking-wider text-[#0A1628] hover:bg-[#F8FAFC] shadow-sm transition-all duration-200 cursor-pointer"
          >
            {showAllCases ? 'Collapse View ↑' : 'View Full Roster ↓'}
          </button>
        </div>

        {/* Corporate Metrics Impact Banner */}
        <div className="bg-[#0A1628] text-white rounded-2xl p-8 md:p-12 shadow-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(21,88,214,0.08)_0%,transparent_70%)] pointer-events-none" />
          
          <h3 className="text-sm font-mono font-bold uppercase mb-10 text-center tracking-widest text-[#00C2FF]">// Impact by the Numbers</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:divide-x md:divide-white/10">
            <div>
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">150+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-2.5 text-white/60 font-mono">Projects Delivered</p>
            </div>
            <div className="border-t border-white/10 pt-6 md:pt-0 md:border-t-0">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">50+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-2.5 text-white/60 font-mono">QA & Tech Tools</p>
            </div>
            <div className="border-t border-white/10 pt-6 md:pt-0 md:border-t-0">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">99.99%</p>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-2.5 text-white/60 font-mono">Uptime Target</p>
            </div>
            <div className="border-t border-white/10 pt-6 md:pt-0 md:border-t-0">
              <p className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">2+</p>
              <p className="text-[10px] font-bold uppercase tracking-wider mt-2.5 text-white/60 font-mono">Years Operational</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
