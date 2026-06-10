import React from 'react';

export default function Clients() {
  const trustedClients = [
    { name: 'ABSA Bank Group', department: 'Payment Integration & QA Automation' },
    { name: 'MTECH Communications', department: 'High-Volume API Infrastructure' },
    { name: 'Housing Finance Company (HFC)', department: 'Transactional Loan Systems' },
    { name: 'County Government of Kericho', department: 'Public Service Automation Systems' },
    { name: 'Redemptive Light Church', department: 'Modern Platform Deployment' },
    { name: 'Kenya Urban Support Program', department: 'Multi-Department Data Consolidation' }
  ];

  const industries = [
    { name: 'Government Systems', label: 'Citizen portals, departmental dashboards, and public service automation[cite: 1].' },
    { name: 'Healthcare HMIS', label: 'Integrated patient records, clinical workflows, and secure medical billing[cite: 1].' },
    { name: 'Financial Infrastructure', label: 'High-security transaction routing, core payment APIs, and compliance tools[cite: 1].' },
    { name: 'Telecom & Corporate', label: 'Distributed API optimizations, message routing backbones, and fleet management[cite: 1].' }
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
    <section id="clients" className="relative py-24 px-[5%] overflow-hidden text-left bg-navy border-t border-white/5">
      
      {/* Background Matrix Ambient Glow Layers */}
      <div className="absolute top-1/4 right-[-5%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(21,88,214,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 left-[-5%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(21,88,214,0.08)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-[0.04] hero-grid-bg pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 bg-blueCustom/20 border border-blueCustom/40 text-cyanCustom text-xs font-semibold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full backdrop-blur-md">
            💼 INDUSTRIES WE SERVE
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mt-6 uppercase leading-tight">
            Built for High-Compliance Sectors
          </h2>
          <p className="text-base text-white/60 mt-6 leading-relaxed max-w-2xl font-normal">
            We deliver highly scalable enterprise solutions that organizations trust for mission-critical workflows, automated data normalization, and digital growth across core sectors[cite: 1].
          </p>
        </div>

        {/* Industries Core Layout Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {industries.map((industry, idx) => (
            <div 
              key={idx} 
              className="group rounded-xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-cyanCustom/30 hover:-translate-y-1"
            >
              <div className="text-xs uppercase tracking-widest text-cyanCustom font-bold mb-2 group-hover:text-white transition-colors font-mono">
                // {industry.name}
              </div>
              <p className="text-xs md:text-sm text-white/60 font-normal leading-relaxed">
                {industry.label}
              </p>
            </div>
          ))}
        </div>

        {/* Central Trust Banner Box */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="rounded-2xl bg-navy2 border border-white/10 p-8 md:p-12 shadow-2xl backdrop-blur-md text-center group hover:border-cyanCustom/20 transition-colors duration-300">
            <p className="text-[10px] font-bold uppercase tracking-widest text-cyanCustom mb-4 font-mono">// PARTNERS IN DIGITAL TRANSFORMATION</p>
            <h3 className="text-2xl font-black text-white uppercase tracking-tight">
              Enterprise Ecosystems Built for African Operations
            </h3>
            <p className="text-xs md:text-sm text-white/60 mt-4 leading-relaxed max-w-xl mx-auto font-normal">
              From automated regression engines to transactional customer web applications, we engineer stable architectures built around modern usability frameworks[cite: 1].
            </p>
          </div>
        </div>

        {/* Monochrome Enterprise Corporate Logo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-20">
          {trustedClients.map((client, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:border-cyanCustom/30 hover:bg-white/[0.08] shadow-lg backdrop-blur-md flex flex-col justify-center min-h-[5.5rem]"
            >
              <div className="text-sm font-bold tracking-wide text-white/80 group-hover:text-white transition-colors duration-200">
                {client.name}
              </div>
              <div className="text-[10px] font-mono tracking-widest uppercase text-white/40 group-hover:text-cyanCustom transition-colors duration-200 mt-1">
                {client.department}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Feed Slider Hub */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md flex flex-col justify-between transition-all duration-300 hover:border-cyanCustom/20"
            >
              <p className="text-xs md:text-sm text-white/70 leading-relaxed font-normal italic">
                “{item.quote}”
              </p>
              
              <div className="mt-8 pt-5 border-t border-white/10">
                <div className="text-sm font-black tracking-tight text-white uppercase">
                  {item.name}
                </div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-cyanCustom mt-1.5 font-mono">
                  {item.title}
                </div>
              </div>

              {/* Top Linear Hover Overlay */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none bg-gradient-to-b from-blueCustom/5 to-transparent" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}