import React from 'react';

export default function Solutions() {
  const solutions = [
    {
      icon: '🏛️',
      title: 'Government Service Automation',
      description: 'Public service delivery systems, automated document workflows, permits, and secure dashboards for public sector consolidation[cite: 1].'
    },
    {
      icon: '🏥',
      title: 'Hospital & Clinical HMIS',
      description: 'Integrated patient health workflows, secure medical billing, records management, and real-time clinical platform pipelines[cite: 1].'
    },
    {
      icon: '💰',
      title: 'Enterprise Financial Systems',
      description: 'High-security transaction routing, core payment integrations, automated financial compliance tracking, and vault APIs[cite: 1].'
    },
    {
      icon: '📡',
      title: 'Telecom & High-Volume Routing',
      description: 'Distributed API infrastructure optimizations, high-throughput consumer messaging backbones, and message log engines[cite: 1].'
    },
    {
      icon: '👥',
      title: 'Fleet & Database Management',
      description: 'Clean data normalization, centralized departmental dashboards, enterprise resource mapping, and secure role-based controls[cite: 1].'
    },
    {
      icon: '🛡️',
      title: 'Security & QA Automation',
      description: 'Comprehensive automated regression testing engines, penetration testing, payload validation, and system audit tools[cite: 1].'
    }
  ];

  const requestSteps = [
    'Initiate a secure inquiry via our corporate onboarding intake wizard.',
    'Share your specific organizational architecture, system targets, and operational scale.',
    'Review a tailored capability proposal and project execution blueprint.',
    'Deploy an enterprise-grade solution built strictly for your operational compliance.'
  ];

  return (
    <section id="solutions" className="relative py-24 px-[5%] overflow-hidden bg-navy border-t border-white/5">
      
      {/* Background Ambient Glow Matrix */}
      <div className="absolute left-[-5%] top-12 h-96 w-96 bg-[radial-gradient(circle,rgba(21,88,214,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-0 h-96 w-96 bg-[radial-gradient(circle,rgba(21,88,214,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-blueCustom/20 border border-blueCustom/40 text-cyanCustom text-xs font-semibold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
            🔧 TECHNICAL CAPABILITIES
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-6 uppercase leading-tight">
            Our Core Operational Solutions
          </h2>
          <p className="text-base text-white/60 mt-6 leading-relaxed max-w-2xl font-normal">
            Explore our specialized engineering capabilities. We architect secure, highly-scalable custom software platforms engineered to modernize enterprise-level data and operations[cite: 1].
          </p>
        </div>

        {/* Solutions Grid Layout Engine */}
        <div className="grid gap-8 xl:grid-cols-[2.5fr_1.2fr] items-start">
          
          {/* Solutions Cards Stream */}
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyanCustom/30 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-navy border border-white/5 text-2xl shadow-inner mb-6 transform group-hover:scale-105 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-black text-white uppercase tracking-tight mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-xs md:text-sm text-white/60 leading-relaxed font-normal mb-6">
                    {solution.description}
                  </p>
                </div>
                
                <a
                  href="#cta"
                  className="inline-flex items-center gap-2 text-xs font-bold text-cyanCustom hover:text-white transition-colors mt-auto group/link"
                >
                  Request Architecture Overview
                  <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Sidebar Navigation Flow Context */}
          <aside className="rounded-2xl border border-white/10 bg-navy2 p-8 md:p-10 shadow-2xl backdrop-blur-md sticky top-28 group hover:border-cyanCustom/20 transition-colors duration-300">
            <div className="inline-flex items-center gap-2 bg-blueCustom/20 border border-blueCustom/40 text-cyanCustom text-[10px] font-bold tracking-widest text-primary-400 uppercase px-3 py-1 rounded-full mb-6 font-mono">
              // ENGAGEMENT PIPELINE
            </div>
            
            <h3 className="text-xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              Start an Enterprise Capability Request
            </h3>
            
            <div className="space-y-4 mb-8">
              {requestSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 rounded-xl border border-white/5 bg-navy/40 p-4 items-start">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blueCustom/20 border border-blueCustom/40 text-xs font-mono font-black text-cyanCustom">
                    0{idx + 1}
                  </div>
                  <p className="text-xs text-white/70 font-normal leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            
            <a
              href="#cta"
              className="inline-flex items-center justify-center w-full rounded-lg bg-blueCustom px-6 py-4 text-xs font-bold uppercase tracking-widest text-white shadow-lg shadow-blueCustom/10 hover:bg-blue2 transition-colors duration-200"
            >
              Access Request Portal
            </a>
          </aside>
          
        </div>
      </div>
    </section>
  );
}