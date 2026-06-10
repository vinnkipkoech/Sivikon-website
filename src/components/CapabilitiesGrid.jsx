import React from 'react';

export default function CapabilitiesGrid() {

  const capabilities = [
    {
      index: "01",
      title: "Web Application Development",
      desc: "We architect single-page applications, reactive front-ends and fluid digital experiences using modern styling frameworks and performance-first components.",
      tech: ["React.js", "JavaScript (ES6+)", "Tailwind CSS", "HTML5 / CSS3 Grid"]
    },
    {
      index: "02",
      title: "Backend, APIs & Cloud Infrastructure",
      desc: "We craft high-throughput microservices, secure RESTful and GraphQL interfaces, and resilient cloud architectures with middleware and token-based authentication.",
      tech: ["Node.js", "Express.js", "RESTful APIs", "JWT Auth Middleware"]
    },
    {
      index: "03",
      title: "Database Systems & Fleet Integrations",
      desc: "Our teams deploy fault-tolerant databases, real-time analytics, and fleet integration pipelines built for high indexing speeds and transaction compliance.",
      tech: ["MongoDB", "Mongoose ODM", "PostgreSQL", "Data Aggregations"]
    },
    {
      index: "04",
      title: "Quality Assurance & Testing",
      desc: "We deliver automated and manual testing services that validate application layers, pinpoint performance bottlenecks, and prevent production defects.",
      tech: ["Selenium", "Playwright", "Cypress", "JMeter"]
    }
  ];

  return (
    <section id="solutions" className="relative py-24 px-[5%] overflow-hidden text-left bg-navy border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.03] hero-grid-bg pointer-events-none" />
      <div className="absolute top-1/3 right-[-10%] w-96 h-96 bg-[radial-gradient(circle,rgba(21,88,214,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-0 left-[-5%] w-96 h-96 bg-[radial-gradient(circle,rgba(0,194,255,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 bg-blueCustom/20 border border-blueCustom/40 text-cyanCustom text-xs font-semibold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full">
            ⚙️ CORE CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white mt-6 uppercase leading-tight">
            Engineering Excellence Across <span className="bg-gradient-to-r from-cyanCustom to-blue2 bg-clip-text text-transparent">All Domains</span>
          </h2>
          <p className="text-base md:text-lg text-white/60 mt-4 leading-relaxed max-w-2xl font-normal">
            Our specialized delivery tracks bring structural reliability, rapid scaling, and innovation to your enterprise digital platforms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:border-cyanCustom/30 shadow-2xl backdrop-blur-md"
            >
              <div className="absolute top-6 right-8 text-xs font-mono font-bold text-white/30 group-hover:text-cyanCustom transition-colors">
                // {cap.index}
              </div>

              <div className="space-y-4 flex-grow">
                <h3 className="text-xl font-black text-white uppercase tracking-tight pt-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-white/70 leading-relaxed font-normal">
                  {cap.desc}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5">
                <p className="text-[11px] font-bold text-cyanCustom uppercase tracking-widest mb-4">
                  Core Technologies
                </p>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                  {cap.tech.map((item, tIdx) => (
                    <div key={tIdx} className="flex items-center gap-2.5 text-sm text-white/80">
                      <span className="w-1.5 h-1.5 bg-blueCustom rounded-full group-hover:bg-cyanCustom group-hover:scale-125 transition-all duration-300" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-br from-cyanCustom/5 via-transparent to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}