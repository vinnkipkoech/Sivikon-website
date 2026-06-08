import React from 'react';

export default function ProductsSuite() {
  const enterpriseClients = [
    {
      title: 'ABSA Bank Group',
      description: 'High-security payment integrations and core system testing.',
      impact: 'Secure payment flows, reduced transaction risk, and improved audit visibility.'
    },
    {
      title: 'MTECH Communications',
      description: 'High-volume mobile platforms and API infrastructure optimization.',
      impact: 'Scalable backend throughput, lower latency, and better mobile reliability.'
    },
    {
      title: 'Housing Finance Company (HFC)',
      description: 'Secure loan routing pipelines and transactional customer platforms.',
      impact: 'Faster loan processing, stronger compliance, and smoother customer journeys.'
    },
    {
      title: 'County Government of Kericho',
      description: 'Public service automation and database consolidation programs.',
      impact: 'Improved civic service delivery, centralized data operations, and reduced administrative workload.'
    }
  ];

  return (
    <section id="products-suite" className="relative py-32 px-4 sm:px-6 lg:px-8 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.1),transparent_50%)]" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,rgba(6,182,212,0.08),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
            TRUSTED PARTNERS
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-white mt-6 uppercase leading-tight">
            Enterprise Clients We Have Served
          </h2>
          <p className="text-lg md:text-xl text-slate-300 mt-6 leading-relaxed max-w-2xl mx-auto">
            Sivikon's leadership team brings a proven track record of successful deliveries for major organizations, government bodies, and financial firms.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {enterpriseClients.map((client, idx) => (
            <div key={idx} className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950/90 p-8 shadow-2xl shadow-cyan-500/10">
              <div className="absolute -left-10 top-0 h-40 w-40 rounded-full bg-cyan-500/20 blur-3xl" />
              <div className="relative space-y-5">
                <div className="text-sm uppercase tracking-widest text-cyan-400 font-bold">Client {String(idx + 1).padStart(2, '0')}</div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {client.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">
                  {client.description}
                </p>
                <div className="rounded-2xl bg-slate-900/80 border border-white/10 p-5">
                  <p className="text-xs uppercase tracking-widest text-slate-400 mb-2">Impact Delivered</p>
                  <p className="text-slate-200 leading-relaxed">{client.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-950/30 to-cyan-950/30 border border-white/10 rounded-3xl p-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300 mb-3">Why This Matters</p>
              <p className="text-slate-300 leading-relaxed">
                These engagements demonstrate our ability to deliver secure, scalable digital solutions for regulated financial institutions, high-traffic telecom systems, public sector workflows, and smart customer-facing platforms.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300 mb-3">Mixed Mode Delivery</p>
              <p className="text-slate-300 leading-relaxed">
                We integrate custom development with QA-driven release practices to ensure every solution is production-ready, auditable, and performance-optimized.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-cyan-300 mb-3">Global Reach</p>
              <p className="text-slate-300 leading-relaxed">
                Based in Kenya and serving global markets, we align with enterprise standards and local operational frameworks for every partnership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
