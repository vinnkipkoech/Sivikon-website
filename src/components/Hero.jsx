import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-52 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left bg-[#070b13]">
      {/* Premium Option 1 Mesh Gradient Base Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(at_0%_0%,rgba(0,168,233,0.12)_0px,transparent_50%),radial-gradient(at_50%_0%,rgba(99,102,241,0.15)_0px,transparent_50%),radial-gradient(at_100%_0%,rgba(236,72,153,0.08)_0px,transparent_50%)] pointer-events-none" />
      
      {/* Technical Grid Overlay - Tuned down for elegant opacity */}
      <div className="absolute inset-0 opacity-[0.15] pointer-events-none" style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1"/></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
        backgroundSize: '100px 100px'
      }} />

      {/* Dynamic Ambient Blur Orbs */}
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-[-5%] w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center z-10">
        <div className="lg:col-span-7 space-y-8">
          
          {/* Tagline Badge */}
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/20 px-4 py-2 rounded-full backdrop-blur-md">
            🚀 ENTERPRISE INNOVATION
          </div>

          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase mb-4">
              We Build Custom Software That<br />
              <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Powers African Enterprise
              </span>
            </h1>
            <p className="text-lg text-slate-400 max-w-xl leading-relaxed font-medium mt-6">
              Sivikon Technologies delivers secure, scalable digital systems for government, finance, telecom, and institutional organizations. We build platforms designed for African realities, fast growth, and strong compliance.
            </p>
          </div>

          {/* Core Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-4">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl font-bold">✓</span>
              <div>
                <p className="font-bold text-slate-100 text-sm">Secure enterprise platforms</p>
                <p className="text-xs text-slate-400 mt-0.5">Built for compliance and resilience.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl font-bold">✓</span>
              <div>
                <p className="font-bold text-slate-100 text-sm">Rapid delivery cycles</p>
                <p className="text-xs text-slate-400 mt-0.5">From strategy to launch, fast and dependable.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl font-bold">✓</span>
              <div>
                <p className="font-bold text-slate-100 text-sm">High-impact digital systems</p>
                <p className="text-xs text-slate-400 mt-0.5">Customer portals, ERP, e-learning and mobile apps.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl font-bold">✓</span>
              <div>
                <p className="font-bold text-slate-100 text-sm">Dedicated enterprise support</p>
                <p className="text-xs text-slate-400 mt-0.5">24/7 monitoring and performance assurance.</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white font-bold text-sm px-8 py-4 rounded-lg uppercase tracking-widest transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-indigo-500/20 text-center"
            >
              Request Custom Solution ➔
            </a>
            <a
              href="#products-suite"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-widest transition-all duration-200 backdrop-blur-sm text-center"
            >
              View All Solutions
            </a>
          </div>

          {/* Upgraded & Standardized Metrics Footer */}
          <div className="pt-8 border-t border-white/5 grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <div className="text-3xl font-black text-cyan-400 uppercase tracking-tight">150+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-black text-indigo-400 uppercase tracking-tight">125+</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400 uppercase tracking-tight">99.99%</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Uptime Target</div>
            </div>
            <div>
              <div className="text-3xl font-black text-indigo-400 uppercase tracking-tight">24/7</div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-1">Support Coverage</div>
            </div>
          </div>
        </div>

        {/* Right Side Sidebar Feature Card */}
        <div className="lg:col-span-5">
          <div className="bg-slate-900/40 border border-white/5 rounded-3xl p-8 space-y-6 backdrop-blur-xl shadow-2xl hover:border-cyan-500/20 transition-all duration-300 group">
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
                <span className="text-cyan-400 font-bold mt-1 group-hover:translate-x-1 transition-transform">→</span>
                <div>
                  <p className="font-bold text-slate-200 text-sm">Custom software architecture</p>
                  <p className="text-xs text-slate-400 mt-1">Built for your workflows, security, and scale.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1 group-hover:translate-x-1 transition-transform">→</span>
                <div>
                  <p className="font-bold text-slate-200 text-sm">Modern cloud infrastructure</p>
                  <p className="text-xs text-slate-400 mt-1">Resilient deployments with global availability.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1 group-hover:translate-x-1 transition-transform">→</span>
                <div>
                  <p className="font-bold text-slate-200 text-sm">Quality & compliance first</p>
                  <p className="text-xs text-slate-400 mt-1">Secure, auditable products with strong controls.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1 group-hover:translate-x-1 transition-transform">→</span>
                <div>
                  <p className="font-bold text-slate-200 text-sm">Transparent delivery</p>
                  <p className="text-xs text-slate-400 mt-1">Clear milestones, predictable outcomes, and fast execution.</p>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-slate-400">Enterprise-ready digital transformation.</span>
              <span className="text-cyan-400 font-bold tracking-wider">PROVEN ✓</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}