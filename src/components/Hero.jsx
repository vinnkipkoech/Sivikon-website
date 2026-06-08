import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-52 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-950" />
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(16,185,129,0.25)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
        backgroundSize: '100px 100px'
      }} />

      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
            🚀 ENTERPRISE INNOVATION
          </div>

          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase mb-4">
              Spice up your Business with our <br />
              <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
                Cutting Edge Solutions
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium mt-6">
              Sivikon Technologies delivers secure, scalable software products and systems for government, finance, telecom, and enterprise teams. We build modern digital platforms that drive growth, efficiency, and trust.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-bold text-white text-sm">Secure enterprise platforms</p>
                <p className="text-xs text-slate-400">Built for compliance and resilience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-bold text-white text-sm">Rapid delivery cycles</p>
                <p className="text-xs text-slate-400">From strategy to launch, fast and dependable.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-bold text-white text-sm">High-impact digital systems</p>
                <p className="text-xs text-slate-400">Customer portals, ERP, e-learning and mobile apps.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-bold text-white text-sm">Dedicated enterprise support</p>
                <p className="text-xs text-slate-400">24/7 monitoring and performance assurance.</p>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#evaluation-form"
              className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm px-8 py-4 rounded-lg uppercase tracking-widest transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50 text-center"
            >
              Book a Consultation ➔
            </a>
            <a
              href="#portfolio-section"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-widest transition-all duration-200 backdrop-blur-sm text-center"
            >
              Explore Projects
            </a>
          </div>

          <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-black text-cyan-400">150+</div>
              <div className="text-xs text-slate-400 mt-2">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400">125+</div>
              <div className="text-xs text-slate-400 mt-2">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400">99.9%</div>
              <div className="text-xs text-slate-400 mt-2">Uptime Guarantee</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400">24/7</div>
              <div className="text-xs text-slate-400 mt-2">Support Coverage</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="bg-gradient-to-br from-slate-800/70 to-blue-900/50 border border-white/10 rounded-3xl p-8 space-y-6 backdrop-blur-xl shadow-2xl hover:border-white/20 transition-all duration-300">
            <div>
              <span className="text-xs font-bold text-cyan-400 block mb-2">
                ✨ WHY CHOOSE SIVIKON
              </span>
              <h3 className="text-lg font-black text-white uppercase tracking-tight">
                Experience, trust, and enterprise-grade delivery
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <div>
                  <p className="font-bold text-white text-sm">Custom software architecture</p>
                  <p className="text-xs text-slate-300 mt-1">Built for your workflows, security, and scale.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <div>
                  <p className="font-bold text-white text-sm">Modern cloud infrastructure</p>
                  <p className="text-xs text-slate-300 mt-1">Resilient deployments with global availability.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <div>
                  <p className="font-bold text-white text-sm">Quality & compliance first</p>
                  <p className="text-xs text-slate-300 mt-1">Secure, auditable products with strong controls.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <div>
                  <p className="font-bold text-white text-sm">Transparent delivery</p>
                  <p className="text-xs text-slate-300 mt-1">Clear milestones, predictable outcomes, and fast execution.</p>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400">Enterprise-ready digital transformation.</span>
              <span className="text-cyan-400 font-bold">PROVEN ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
