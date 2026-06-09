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
    <section id="products-suite" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-100 via-emerald-100 to-amber-100" />
      <div className="absolute left-0 top-12 h-80 w-80 rounded-full bg-cyan-300/20 blur-3xl pointer-events-none" />
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.12),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(251,191,36,0.12),transparent_35%)] opacity-80 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-amber-700 uppercase bg-amber-100 border border-amber-300 px-4 py-2 rounded-full shadow-sm">
            CUSTOM SOFTWARE SOLUTIONS
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mt-6 uppercase leading-tight">
            All Custom Systems Featured in One Place
          </h2>
          <p className="text-lg md:text-xl text-slate-700 mt-6 leading-relaxed max-w-2xl mx-auto">
            Explore the full suite of enterprise-grade software solutions built for African organizations. Request a tailored system instantly by using the form below.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[2fr_1fr] items-start">
          <div className="grid gap-6 md:grid-cols-2">
            {solutions.map((solution, idx) => (
              <div key={idx} className="rounded-3xl border border-amber-200 bg-white/90 p-8 shadow-lg shadow-amber-200/30 transition-all duration-300 hover:-translate-y-1">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-2xl shadow-inner shadow-amber-200/60 mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">{solution.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-6">{solution.description}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-bold text-amber-800 hover:text-amber-900"
                >
                  Request This Solution
                  <span className="text-amber-500">→</span>
                </a>
              </div>
            ))}
          </div>

          <aside className="rounded-[3rem] border border-cyan-200/80 bg-white/90 p-10 shadow-2xl shadow-cyan-200/20">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-cyan-700 uppercase bg-cyan-100 border border-cyan-200 px-4 py-2 rounded-full mb-6">
              HOW TO REQUEST
            </div>
            <h3 className="text-4xl font-black text-slate-900 leading-tight mb-6">
              Start your custom software request
            </h3>
            <div className="space-y-4 mb-8">
              {requestSteps.map((step, idx) => (
                <div key={idx} className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-200 text-sm font-black text-amber-900">
                    {idx + 1}
                  </div>
                  <p className="text-sm text-slate-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
            <a
              href="#contact"
              className="inline-flex items-center justify-center w-full rounded-3xl bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4 text-sm font-bold uppercase tracking-widest text-slate-950 shadow-lg shadow-amber-300/30 hover:from-amber-400 hover:to-amber-500 transition-all duration-200"
            >
              Request a Custom Solution
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
