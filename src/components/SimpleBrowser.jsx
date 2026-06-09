import React from 'react';

export default function SimpleBrowser() {
  const trustedClients = [
    'ABSA Bank Group',
    'MTECH Communications',
    'Housing Finance Company',
    'County Government of Kericho',
    'Redemptive Light Church',
    'Kenya Urban Support Program'
  ];

  const industries = [
    { name: 'Education', label: 'Schools & universities' },
    { name: 'Healthcare', label: 'Hospitals & clinics' },
    { name: 'Finance', label: 'SACCOs & fintech' },
    { name: 'NGOs', label: 'Development & humanitarian' },
    { name: 'Hospitality', label: 'Hotels & travel' },
    { name: 'Logistics', label: 'Transport & distribution' },
    { name: 'Real Estate', label: 'Property & leasing' },
    { name: 'Retail', label: 'Stores & e-commerce' }
  ];

  const testimonials = [
    {
      quote: 'Sivikon delivered a modern, secure platform on schedule and kept our project transparent at every step.',
      name: 'Juliane Vorster',
      title: 'Communications Head, Redemptive Light Church'
    },
    {
      quote: 'Their proactive design and enterprise-grade implementation helped us scale quickly while staying compliant.',
      name: 'Dedan Otiato',
      title: 'Engineer, Varde Engineering Co. LTD'
    },
    {
      quote: 'The team understood our complex business needs and built a highly reliable system that improved our operations.',
      name: 'K. Njoroge',
      title: 'Operations Director'
    }
  ];

  return (
    <section id="trusted-section" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left">
      <div className="absolute inset-0 bg-gradient-to-b from-emerald-50 via-white to-slate-100" />
      <div className="absolute inset-0 bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-emerald-600 uppercase bg-emerald-100 border border-emerald-300 px-4 py-2 rounded-full">
            INDUSTRIES WE SERVE
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mt-6 uppercase leading-tight">
            Built for Every African Sector
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mt-6 leading-relaxed max-w-2xl">
            We deliver enterprise solutions that organizations trust for mission-critical processes, compliance, and digital growth across sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {industries.map((industry, idx) => (
            <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xs uppercase tracking-widest text-emerald-600 font-bold mb-2">{industry.name}</div>
              <p className="text-sm text-slate-700 leading-relaxed">{industry.label}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-3xl bg-slate-50 border border-slate-200 p-8 shadow-sm text-center">
            <p className="text-xs uppercase tracking-widest text-emerald-600 mb-3">Trusted by Enterprise Leaders</p>
            <h2 className="text-4xl font-black text-slate-900">Digital Systems Built for African Operations</h2>
            <p className="text-slate-600 mt-4 leading-relaxed">
              We help organizations across sectors deploy secure, compliant, and user-friendly digital platforms that simplify workflows and improve measurable outcomes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          {trustedClients.map((client, idx) => (
            <div key={idx} className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm">
              <div className="text-sm font-semibold text-slate-900">{client}</div>
            </div>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div key={idx} className="rounded-3xl border border-blue-100 bg-white p-8 shadow-lg">
              <p className="text-slate-700 leading-relaxed">“{item.quote}”</p>
              <div className="mt-6 text-sm font-bold text-slate-900">{item.name}</div>
              <div className="text-xs uppercase tracking-widest text-slate-500 mt-1">{item.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
