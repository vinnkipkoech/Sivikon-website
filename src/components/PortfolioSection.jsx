import React from 'react';

export default function PortfolioSection() {
  const trustPartners = [
    { 
      name: "ABSA Bank", 
      role: "Financial Security Validation & Integration",
      tag: "Financial Integration",
      hoverClass: "hover:border-red-500/40",
      icon: (
        <svg className="w-12 h-12 text-red-600 mb-3 transition-transform group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="8"/>
          <text x="50" y="58" fontFamily="sans-serif" fontSize="24" fontWeight="bold" textAnchor="middle">absa</text>
        </svg>
      )
    },
    { 
      name: "County Government of Kericho", 
      role: "Enterprise Software Optimization",
      tag: "Enterprise Platform",
      hoverClass: "hover:border-emerald-500/40",
      icon: (
        <svg className="w-12 h-12 text-emerald-600 mb-3 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    { 
      name: "HFC Bank", 
      role: "Transactional Gateway Performance Testing",
      tag: "Gateway Validation",
      hoverClass: "hover:border-blue-500/40",
      icon: (
        <svg className="w-12 h-12 text-blue-800 mb-3 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      )
    },
    { 
      name: "MTECH Communications", 
      role: "Scalable Mobile Architecture Deployment",
      tag: "Mobile Engineering",
      hoverClass: "hover:border-cyan-500/40",
      icon: (
        <svg className="w-12 h-12 text-cyan-600 mb-3 transition-transform group-hover:scale-105" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    }
  ];

  return (
    <section id="portfolio-section" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 text-slate-900 text-center">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto mb-16">
          <span className="text-xs text-blue-600 font-bold tracking-widest uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            // Corporate Track Record
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-4 uppercase">
            Validated Customer Ecosystem
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Trusted software solutions engineered across elite banking channels and regional frameworks.
          </p>
        </div>

        {/* Dynamic Partner Matrix Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {trustPartners.map((partner, index) => (
            <div 
              key={index} 
              className={`p-6 bg-slate-50 border border-slate-200 rounded-2xl flex flex-col items-center justify-between text-center group transition-all duration-200 min-h-[220px] ${partner.hoverClass}`}
            >
              <div className="flex flex-col items-center w-full">
                {partner.icon}
                <div className="text-sm font-black text-slate-800 uppercase tracking-wide">
                  {partner.name}
                </div>
                <p className="text-[11px] text-slate-500 mt-2 leading-snug">
                  {partner.role}
                </p>
              </div>
              <span className="text-[9px] font-mono tracking-widest text-slate-400 uppercase mt-4">
                // {partner.tag}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}