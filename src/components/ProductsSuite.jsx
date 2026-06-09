import React from 'react';

export default function ProductsSuite() {
  const productPlatforms = [
    {
      title: 'School Management System',
      description: 'A complete platform for student records, timetable planning, fees, exams, and parent engagement.'
    },
    {
      title: 'Hospital & Clinic Management',
      description: 'Patient records, billing, pharmacy, and outpatient workflows built for healthcare operators.'
    },
    {
      title: 'NGO Project Tracking System',
      description: 'Donor management, impact reporting, beneficiary tracking and grant compliance for NGOs.'
    },
    {
      title: 'SACCO & Microfinance Platform',
      description: 'Member accounting, loan processing, savings management, and compliance reporting for financial cooperatives.'
    },
    {
      title: 'HR & Payroll System',
      description: 'Workforce automation with payroll, leave, performance, and employee self-service capabilities.'
    },
    {
      title: 'Hotel & Hospitality Management',
      description: 'Reservations, front desk, housekeeping, and guest services for hotels and lodges.'
    }
  ];

  const enterpriseClients = [
    {
      title: 'ABSA Bank Group',
      description: 'High-security payment integrations and core system testing for banking operations.',
      impact: 'Reduced transaction risk, improved audit visibility, and stronger regulatory compliance.'
    },
    {
      title: 'MTECH Communications',
      description: 'Mobile platform scaling, API optimization, and customer engagement engineering.',
      impact: 'Higher reliability, lower latency, and improved digital service performance.'
    },
    {
      title: 'Housing Finance Company (HFC)',
      description: 'Secure loan routing pipelines and transactional portals for financial services.',
      impact: 'Faster processing, better compliance, and a seamless borrower experience.'
    },
    {
      title: 'County Government of Kericho',
      description: 'Public-service automation, records consolidation, and citizen service delivery.',
      impact: 'Improved civic operations, centralized data workflows, and more efficient government services.'
    }
  ];

  return (
    <section id="products-suite" className="relative py-32 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
            PRODUCT PLATFORMS
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mt-6 uppercase leading-tight">
            Solutions & Platforms for Enterprise Growth
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mt-6 leading-relaxed max-w-2xl mx-auto">
            Enterprise-ready systems for education, healthcare, finance, NGOs, hospitality and public sector modernization — built for African markets and high-growth operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            {productPlatforms.map((product, idx) => (
              <div key={idx} className="rounded-3xl border border-white/10 bg-slate-950/85 p-8 shadow-lg shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500/20">
                <div className="text-xs uppercase tracking-widest text-cyan-300 mb-3">Product {String(idx + 1).padStart(2, '0')}</div>
                <h3 className="text-2xl font-black text-white mb-4">{product.title}</h3>
                <p className="text-slate-300 leading-relaxed">{product.description}</p>
              </div>
            ))}
          </div>

          <div className="space-y-6">
            {enterpriseClients.map((client, idx) => (
              <div key={idx} className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-1">
                <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan-500/15 blur-3xl" />
                <div className="relative space-y-5">
                  <div className="text-sm uppercase tracking-widest text-cyan-400 font-bold">Client {String(idx + 1).padStart(2, '0')}</div>
                  <h3 className="text-2xl font-black text-white tracking-tight">{client.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{client.description}</p>
                  <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-5">
                    <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Impact Delivered</p>
                    <p className="text-slate-200 leading-relaxed">{client.impact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-emerald-950/30 to-teal-950/30 border border-white/10 rounded-3xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300 mb-3">Modern Delivery</p>
              <p className="text-slate-300 leading-relaxed">
                We combine custom development, quality assurance, and cloud operations to deliver enterprise-ready systems on time and within scope.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300 mb-3">Security & Compliance</p>
              <p className="text-slate-300 leading-relaxed">
                Every product is built with strong security principles, audit readiness, and compliance best practices.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300 mb-3">Global Reach</p>
              <p className="text-slate-300 leading-relaxed">
                Based in Kenya and serving global organizations, our solutions align with both local regulations and international standards.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
