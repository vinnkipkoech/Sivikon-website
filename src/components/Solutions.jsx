export default function Solutions() {
  const solutions = [
    {
      icon: '🏛️',
      title: 'Government Service Automation',
      description: 'Public service delivery systems, automated document workflows, permits, and secure dashboards for public sector consolidation.'
    },
    {
      icon: '🏥',
      title: 'Hospital & Clinical HMIS',
      description: 'Integrated patient health workflows, secure medical billing, records management, and real-time clinical platform pipelines.'
    },
    {
      icon: '💰',
      title: 'Enterprise Financial Systems',
      description: 'High-security transaction routing, core payment integrations, automated financial compliance tracking, and vault APIs.'
    },
    {
      icon: '📡',
      title: 'Telecom & High-Volume Routing',
      description: 'Distributed API infrastructure optimizations, high-throughput consumer messaging backbones, and message log engines.'
    },
    {
      icon: '👥',
      title: 'Fleet & Database Management',
      description: 'Clean data normalization, centralized departmental dashboards, enterprise resource mapping, and secure role-based controls.'
    },
    {
      icon: '🛡️',
      title: 'Security & QA Automation',
      description: 'Comprehensive automated regression testing engines, penetration testing, payload validation, and system audit tools.'
    }
  ];

  const requestSteps = [
    'Initiate a secure inquiry via our corporate onboarding intake wizard.',
    'Share your specific organizational architecture, system targets, and operational scale.',
    'Review a tailored capability proposal and project execution blueprint.',
    'Deploy an enterprise-grade solution built strictly for your operational compliance.'
  ];

  return (
    <section id="capabilities" className="relative bg-[#F0F5FF] py-[90px] px-[5%] font-sans text-left border-t border-[#E2E8F4]">
      
      <div className="relative max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-[11.5px] font-bold tracking-[2px] uppercase text-[#1558D6] mb-3">
            Technical Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] leading-[1.1] tracking-[-1.5px]">
            Our Core Operational Solutions
          </h2>
          <p className="text-sm sm:text-base text-[#6B7A99] mt-4 leading-[1.75] font-normal max-w-2xl">
            Explore our specialized engineering capabilities. We architect secure, highly-scalable custom software platforms engineered to modernize enterprise-level data and operations.
          </p>
        </div>

        {/* Solutions Grid Layout Engine */}
        <div className="grid gap-6 lg:gap-8 xl:grid-cols-[2.5fr_1.2fr] items-start">
          
          {/* Solutions Cards Stream */}
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-2xl border border-[#E2E8F4] bg-white p-6 sm:p-8 transition-all duration-300 hover:border-[#1558D6]/30 hover:shadow-[0_8px_32px_rgba(21,88,214,0.06)] flex flex-col justify-between overflow-hidden"
              >
                {/* Top Accent Gradient Hover Line */}
                <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1558D6] to-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F5FF] border border-[#E2E8F4]/60 text-xl mb-6 transform group-hover:scale-105 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-base md:text-lg font-extrabold text-[#0A1628] tracking-tight mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-[13.5px] text-[#6B7A99] leading-relaxed font-normal mb-6">
                    {solution.description}
                  </p>
                </div>
                
                <a
                  href="#cta"
                  className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#1558D6] hover:text-[#0A1628] transition-colors mt-auto group/link"
                >
                  Request Architecture Overview
                  <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Sidebar Engagement Pipeline */}
          <aside className="rounded-2xl border border-[#E2E8F4] bg-white p-6 sm:p-8 shadow-sm sticky top-28 group hover:border-[#1558D6]/20 transition-colors duration-300">
            <div className="inline-flex items-center gap-2 bg-[#F0F5FF] border border-[#E2E8F4]/60 text-[#1558D6] text-[10px] font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-6 font-mono">
              // Engagement Pipeline
            </div>
            
            <h3 className="text-lg font-extrabold text-[#0A1628] tracking-tight leading-tight mb-6">
              Start an Enterprise Capability Request
            </h3>
            
            <div className="space-y-4 mb-6">
              {requestSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 rounded-xl border border-[#E2E8F4]/60 bg-[#F8FAFC] p-4 items-start text-left">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#F0F5FF] border border-[#E2E8F4] text-xs font-mono font-black text-[#1558D6]">
                    0{idx + 1}
                  </div>
                  <p className="text-xs text-[#6B7A99] font-medium leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            
            <a
              href="#cta"
              className="inline-flex items-center justify-center w-full rounded-lg bg-gradient-to-br from-[#1558D6] to-[#1A6BFF] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#1558D6]/10 transition-transform active:scale-[0.98]"
            >
              Access Request Portal
            </a>
          </aside>
          
        </div>
      </div>
    </section>
  );
}
