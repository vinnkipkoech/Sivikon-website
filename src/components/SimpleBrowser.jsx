import React from 'react';

export default function TrustedSection() {
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
    <section id="trusted-section" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left bg-[#0b0f19]">
      {/* Background Matrix Layering */}
      <div className="absolute top-1/4 right-[-5%] w-[450px] h-[450px] bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        
        {/* Header Block */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full backdrop-blur-md">
            INDUSTRIES WE SERVE
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mt-6 uppercase leading-tight">
            Built for Every African Sector
          </h2>
          <p className="text-lg text-slate-300 mt-6 leading-relaxed max-w-2xl font-medium">
            We deliver enterprise solutions that organizations trust for mission-critical processes, compliance, and digital growth across sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
          {industries.map((industry, idx) => (
            <div 
              key={idx} 
              className="group rounded-2xl border border-white/5 bg-[#121826]/60 p-6 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-emerald-500/30 hover:-translate-y-1"
            >
              <div className="text-xs uppercase tracking-widest text-emerald-400 font-bold mb-2 group-hover:text-emerald-300 transition-colors">
                {industry.name}
              </div>
              <p className="text-sm text-slate-300 font-medium leading-relaxed">
                {industry.label}
              </p>
            </div>
          ))}
        </div>

        {/* Central Trust Banner */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-3xl bg-[#121826]/30 border border-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-xl text-center group hover:border-emerald-500/20 transition-colors duration-300">
            <p className="text-[11px] font-bold uppercase tracking-widest text-emerald-400 mb-4">// TRUSTED BY ENTERPRISE LEADERS</p>
            <h3 className="text-3xl font-black text-white uppercase tracking-tight">
              Digital Systems Built for African Operations
            </h3>
            <p className="text-sm text-slate-300 mt-4 leading-relaxed max-w-xl mx-auto font-medium">
              We help organizations across sectors deploy secure, compliant, and user-friendly digital platforms that simplify workflows and improve measurable outcomes.
            </p>
          </div>
        </div>

        {/* Trusted Clients Corporate Badge Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-24">
          {trustedClients.map((client, idx) => (
            <div 
              key={idx} 
              className="rounded-2xl border border-white/5 bg-[#121826]/60 py-5 px-6 text-center shadow-lg backdrop-blur-xl flex items-center justify-center min-h-[4.5rem] group hover:border-emerald-500/20 transition-all duration-300"
            >
              <div className="text-sm font-bold tracking-wide text-slate-300 group-hover:text-white transition-colors">
                {client}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Feed Matrix */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-3xl border border-white/5 bg-[#121826]/60 p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between transition-all duration-300 hover:border-emerald-500/20"
            >
              <p className="text-sm text-slate-300 leading-relaxed font-medium italic">
                “{item.quote}”
              </p>
              
              <div className="mt-8 pt-5 border-t border-white/5">
                <div className="text-sm font-black tracking-tight text-white uppercase">
                  {item.name}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-emerald-400 mt-1.5">
                  {item.title}
                </div>
              </div>

              {/* Minimal internal glow hint on card hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-b from-emerald-500/5 to-transparent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}