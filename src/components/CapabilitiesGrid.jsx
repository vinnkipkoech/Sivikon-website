import React from 'react';

export default function CapabilitiesGrid() {

  const capabilities = [
    {
      index: "01",
      title: "Web Application Development",
      desc: "We architect single-page applications, reactive front-ends and fluid digital experiences using modern styling frameworks and performance-first components.",
      tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3 Grid"],
      icon: "💻",
      gradient: "from-primary-500 to-primary-300"
    },
    {
      index: "02",
      title: "Backend, APIs & Cloud Infrastructure",
      desc: "We craft high-throughput microservices, secure RESTful and GraphQL interfaces, and resilient cloud architectures with middleware and token-based authentication.",
      tech: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth Middleware"],
      icon: "☁️",
      gradient: "from-primary-500 to-primary-400"
    },
    {
      index: "03",
      title: "Database Systems & Fleet Integrations",
      desc: "Our teams deploy fault-tolerant databases, real-time analytics, and fleet integration pipelines built for high indexing speeds and transaction compliance.",
      tech: ["MongoDB", "Mongoose ODM", "PostgreSQL", "Data Aggregations"],
      icon: "🗄️",
      gradient: "from-primary-600 to-primary-400"
    },
    {
      index: "04",
      title: "Quality Assurance & Testing",
      desc: "We deliver automated and manual testing services that validate application layers, pinpoint performance bottlenecks, and prevent production defects.",
      tech: ["Selenium", "Playwright", "Cypress", "JMeter"],
      icon: "✅",
      gradient: "from-primary-500 to-primary-600"
    }
  ];

  const displayedCapabilities = capabilities;

  return (
    <section id="services-section" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left bg-canvasDark">
      {/* Subtle background glow balance */}
      <div className="absolute top-1/3 right-[-10%] w-96 h-96 bg-primary-600/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-96 h-96 bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-primary-400 uppercase bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full backdrop-blur-md">
            ⚙️ CORE CAPABILITIES
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mt-6 uppercase leading-tight">
            Engineering Excellence Across All Domains
          </h2>
          <p className="text-lg text-dark-400 mt-6 leading-relaxed max-w-2xl font-medium">
            Our specialized delivery tracks bring structural reliability, rapid scaling, and innovation to your enterprise digital platforms.
          </p>
        </div>

        {/* Re-Architected Capabilities Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {displayedCapabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="group relative bg-dark-900/40 border border-white/5 p-8 rounded-3xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-500/30 shadow-2xl backdrop-blur-xl"
            >
              {/* Index Number */}
              <div className="absolute top-6 right-8 text-xs font-mono font-bold text-dark-500 group-hover:text-primary-400 transition-colors">
                // {cap.index}
              </div>

              {/* Main Content Area */}
              <div className="space-y-4 flex-grow">
                <div className="text-4xl mb-6 inline-block transform group-hover:scale-110 transition-transform duration-300">
                  {cap.icon}
                </div>
                <h3 className="text-xl font-black text-white uppercase tracking-tight">
                  {cap.title}
                </h3>
                <p className="text-sm text-dark-300 leading-relaxed font-medium">
                  {cap.desc}
                </p>
              </div>

              {/* Technologies Sub-Section */}
              <div className="pt-6 mt-6 border-t border-white/5">
                <p className="text-[11px] font-bold text-primary-400 uppercase tracking-widest mb-4">
                  Core Technologies
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {cap.tech.map((item, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2.5 text-sm text-dark-200">
                      <span className="w-1.5 h-1.5 bg-primary-500 rounded-full group-hover:scale-125 transition-transform duration-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Subtle Internal Highlight Glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-primary-500/5 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}