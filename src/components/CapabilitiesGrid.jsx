import React from 'react';

export default function CapabilitiesGrid() {
  const tracks = [
    {
      category: "Product Execution Matrix",
      title: "Full-Stack Software Development",
      desc: "Architecting high-performance client portals, custom internal systems, and rapid server frameworks tailored to specific operational requirements.",
      tools: ["HTML5 & CSS3 Architecture", "Node.js Server Ecosystems", "Database & Microservices"]
    },
    {
      category: "Functional Assurance",
      title: "Comprehensive QA Testing",
      desc: "Engineering complete end-to-end framework test validation scripts, manual test case designs, regressions, and static system configurations.",
      tools: ["Playwright Automation", "Cypress Ecosystem", "Manual Verification Suites"]
    },
    {
      category: "Infrastructure Security",
      title: "Specialized API Verification",
      desc: "Validating cross-platform database security, REST/SOAP endpoint performance tracking, and load system integrity.",
      tools: ["Postman Verification", "JMeter Load Balancing", "Cross-Browser Compatibility"]
    }
  ];

  return (
    <section id="services-section" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 text-slate-900">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs text-blue-600 font-bold tracking-widest uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            // Core Services Portfolio
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-4 uppercase">Capabilities Suite</h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">World-class quality alignment coupled with fast project time-to-market boundaries.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {tracks.map((track, index) => (
            <div key={index} className="p-7 bg-white rounded-2xl border border-gray-200/80 hover:border-blue-500/30 hover:shadow-lg transition-all duration-300 group flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block mb-1">
                  {track.category}
                </span>
                <h3 className="font-extrabold text-slate-900 text-sm uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                  {track.title}
                </h3>
                <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                  {track.desc}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-gray-100">
                {track.tools.map((tool, tIdx) => (
                  <span key={tIdx} className="text-[10px] font-mono font-bold text-slate-600 bg-slate-50 px-2 py-1 rounded border border-gray-200 group-hover:border-blue-500/10 group-hover:text-blue-600 transition-colors">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}