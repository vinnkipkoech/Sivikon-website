import React, { useState } from 'react';

export default function CapabilitiesGrid() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [showAllCards, setShowAllCards] = useState(false);

  const capabilities = [
    {
      index: "01",
      title: "Web Application Development",
      desc: "We architect single-page applications, reactive front-ends and fluid digital experiences using modern styling frameworks and performance-first components.",
      tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3 Grid"],
      icon: "💻",
      gradient: "from-blue-600 to-cyan-600"
    },
    {
      index: "02",
      title: "Backend, APIs & Cloud Infrastructure",
      desc: "We craft high-throughput microservices, secure RESTful and GraphQL interfaces, and resilient cloud architectures with middleware and token-based authentication.",
      tech: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth Middleware"],
      icon: "☁️",
      gradient: "from-cyan-600 to-teal-600"
    },
    {
      index: "03",
      title: "Database Systems & Fleet Integrations",
      desc: "Our teams deploy fault-tolerant databases, real-time analytics, and fleet integration pipelines built for high indexing speeds and transaction compliance.",
      tech: ["MongoDB", "Mongoose ODM", "PostgreSQL", "Data Aggregations"],
      icon: "🗄️",
      gradient: "from-teal-600 to-blue-600"
    },
    {
      index: "04",
      title: "Quality Assurance & Testing",
      desc: "We deliver automated and manual testing services that validate application layers, pinpoint performance bottlenecks, and prevent production defects.",
      tech: ["Selenium", "Playwright", "Cypress", "JMeter"],
      icon: "✅",
      gradient: "from-cyan-600 to-blue-500"
    }
  ];

  const displayedCapabilities = showAllCards ? capabilities : capabilities.slice(0, 1);

  return (
    <section id="services-section" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60"><defs><pattern id="techgrid" width="60" height="60" patternUnits="userSpaceOnUse"><rect width="60" height="60" fill="none" stroke="rgba(16,185,129,0.3)" stroke-width="0.5"/><circle cx="10" cy="10" r="1.5" fill="rgba(16,185,129,0.5)"/><circle cx="50" cy="50" r="1.5" fill="rgba(16,185,129,0.5)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23techgrid)"/></svg>')`,
        backgroundSize: '60px 60px'
      }} />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
            ⚙️ CORE CAPABILITIES
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mt-6 uppercase leading-tight">
            Engineering Excellence Across All Domains
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mt-6 leading-relaxed max-w-2xl">
            Our specialized delivery tracks bring structural reliability, rapid scaling, and innovation to your enterprise digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {displayedCapabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="group relative bg-gradient-to-br from-slate-800/50 to-blue-900/50 border border-white/10 hover:border-white/30 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2 backdrop-blur-xl shadow-2xl hover:shadow-cyan-500/20 cursor-pointer"
              onClick={() => setExpandedCard(expandedCard === idx ? null : idx)}
            >
              <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {cap.icon}
              </div>

              <div className="absolute top-4 right-4 text-xs font-bold text-cyan-400 opacity-50 group-hover:opacity-100 transition-opacity">
                {cap.index}
              </div>

              <div className="space-y-4 flex-grow">
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <p className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-4">
                  Core Technologies
                </p>
                <ul className="space-y-2.5">
                  {cap.tech.map((item, tIdx) => (
                    <li key={tIdx} className="flex items-center gap-2.5 text-sm text-slate-200">
                      <span className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg shadow-cyan-400/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-cyan-500/10 via-transparent to-transparent" />
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          {!showAllCards && (
            <button 
              onClick={() => setShowAllCards(true)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-widest transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              View All Services ↓
            </button>
          )}
          {showAllCards && (
            <button 
              onClick={() => setShowAllCards(false)}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold py-3 px-8 rounded-lg uppercase tracking-widest transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              Show Less ↑
            </button>
          )}
        </div>

      </div>
    </section>
  );
}
