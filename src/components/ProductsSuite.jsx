import React from 'react';

export default function ProductsSuite() {
  const solutions = [
    {
      icon: '🎓',
      title: 'School Management System',
      description: 'A complete digital campus solution for student records, scheduling, fees, exams, and parent communication.'
    },
    {
      icon: '🏥',
      title: 'Hospital & Clinic Management',
      description: 'Integrated patient care, billing, pharmacy, and clinical workflows for hospitals and clinics.'
    },
    {
      icon: '🤝',
      title: 'NGO Project Tracking',
      description: 'Donor management, beneficiary tracking, project reporting, and impact analytics for NGOs.'
    },
    {
      icon: '💰',
      title: 'SACCO & Microfinance Platform',
      description: 'Member accounts, loan management, savings tracking, and compliance dashboard for cooperatives.'
    },
    {
      icon: '👥',
      title: 'HR & Payroll System',
      description: 'Automated payroll, leave management, performance tracking, and employee self-service tools.'
    },
    {
      icon: '🏨',
      title: 'Hotel & Hospitality Management',
      description: 'Bookings, reservations, housekeeping, front-desk operations and guest services for hotels and lodges.'
    },
    {
      icon: '🏛️',
      title: 'Government Service Automation',
      description: 'Citizen portals, document workflows, permits, and public service delivery systems for government agencies.'
    },
    {
      icon: '🛒',
      title: 'Retail & E-commerce Platform',
      description: 'Inventory, POS, online storefronts, and order fulfillment systems for retail businesses.'
    },
    {
      icon: '📡',
      title: 'Telecom Operations & Billing',
      description: 'Customer management, service provisioning, billing, and analytics for telecom operators.'
    }
  ];

  const requestSteps = [
    'Schedule a consultation with our enterprise team.',
    'Share your vision, systems, and growth goals.',
    'Receive a tailored proposal and implementation plan.',
    'Launch a custom system built for your organization.'
  ];

  return (
    <section id="products-suite" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-canvasDark">
      {/* Dynamic Ambient Background Glow Matrix */}
      <div className="absolute left-[-5%] top-12 h-96 w-96 rounded-full bg-primary-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-0 h-96 w-96 rounded-full bg-primary-500/5 blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-primary-400 uppercase bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full backdrop-blur-md">
            CUSTOM SOFTWARE SOLUTIONS
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mt-6 uppercase leading-tight">
            All Custom Systems Featured in One Place
          </h2>
          <p className="text-lg text-dark-300 mt-6 leading-relaxed max-w-2xl mx-auto font-medium">
            Explore the full suite of enterprise-grade software solutions built for African organizations. Request a tailored system instantly by using the form below.
          </p>
        </div>

        {/* Dynamic Solutions Layout Engine */}
        <div className="grid gap-8 xl:grid-cols-[2fr_1fr] items-start">
          
          {/* Main List Column */}
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-3xl border border-white/5 bg-dark-900/40 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-primary-500/30 flex flex-col justify-between"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-dark-950/60 text-2xl border border-white/5 shadow-inner mb-6 transform group-hover:scale-105 transition-transform duration-300">
                    {solution.icon}
                  </div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-sm text-dark-300 leading-relaxed font-medium mb-6">
                    {solution.description}
                  </p>
                </div>
                
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-primary-400 hover:text-primary-300 transition-colors mt-auto group/link"
                >
                  Request This Solution
                  <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                </a>
              </div>
            ))}
          </div>

          {/* Sidebar Navigation Flow Context */}
          <aside className="rounded-[2.5rem] border border-white/5 bg-dark-900/20 p-8 md:p-10 shadow-2xl backdrop-blur-xl sticky top-28 group hover:border-primary-500/20 transition-colors duration-300">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-primary-400 uppercase bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full mb-6">
              HOW TO REQUEST
            </div>
            
            <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-tight mb-6">
              Start your custom software request
            </h3>
            
            <div className="space-y-4 mb-8">
              {requestSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 rounded-2xl border border-white/5 bg-dark-950/30 p-4 items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-500/10 border border-primary-500/20 text-xs font-mono font-black text-primary-400">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-dark-200 font-medium leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-4 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-primary-500/10 transition-all duration-200 transform hover:scale-[1.02] hover:from-primary-400 hover:to-primary-500"
            >
              Request a Custom Solution
            </a>
          </aside>
          
        </div>
      </div>
    </section>
  );
}