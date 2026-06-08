import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="relative pt-40 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left">
      
      {/* Multi-layer Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />
      
      {/* Tech Pattern Background */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><defs><pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse"><path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,172,193,0.5)" stroke-width="1"/></pattern></pattern></defs><rect width="100%" height="100%" fill="url(%23grid)"/></svg>')`,
        backgroundSize: '100px 100px'
      }} />

      {/* Large Tech Icons Background - Circuits */}
      <svg className="absolute inset-0 w-full h-full opacity-10 pointer-events-none" viewBox="0 0 1200 800">
        <defs>
          <pattern id="circuit" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="3" fill="#00acd1" opacity="0.6"/>
            <circle cx="150" cy="100" r="3" fill="#00acd1" opacity="0.6"/>
            <line x1="50" y1="50" x2="150" y2="100" stroke="#00acd1" strokeWidth="1" opacity="0.4"/>
          </pattern>
        </defs>
        <rect width="1200" height="800" fill="url(#circuit)"/>
      </svg>
      
      {/* Animated Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{animationDelay: '1s'}} />
      
      {/* Floating Code Elements */}
      <div className="absolute top-20 right-10 opacity-20 text-cyan-400 font-mono text-xs pointer-events-none">
        &lt;div className="transform"&gt;
      </div>
      <div className="absolute bottom-32 left-10 opacity-20 text-blue-400 font-mono text-xs pointer-events-none">
        const innovation = true;
      </div>

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        
        {/* Left Content Column */}
        <div className="lg:col-span-7 space-y-8">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
            🚀 DIGITAL TRANSFORMATION
          </div>
          
          <div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-tight uppercase mb-4">
              Enterprise Technology <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Done Right
              </span>
            </h1>
            <p className="text-lg text-slate-300 max-w-xl leading-relaxed font-medium mt-6">
              Sivikon Technologies delivers cutting-edge digital solutions tailored for enterprises, government bodies, and innovative startups. We combine secure architecture, scalable infrastructure, and exceptional user experiences to accelerate your digital transformation journey.
            </p>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-bold text-white text-sm">Enterprise-Grade Security</p>
                <p className="text-xs text-slate-400">ISO 27001 & GDPR Compliant</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-bold text-white text-sm">99.9% Uptime SLA</p>
                <p className="text-xs text-slate-400">Mission-Critical Reliability</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-bold text-white text-sm">24/7 Technical Support</p>
                <p className="text-xs text-slate-400">Expert Engineering Team</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 text-xl">✓</span>
              <div>
                <p className="font-bold text-white text-sm">Rapid Deployment</p>
                <p className="text-xs text-slate-400">Ready in Weeks, Not Months</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="pt-6 flex flex-col sm:flex-row gap-4">
            <a 
              href="#evaluation-form" 
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-sm px-8 py-4 rounded-lg uppercase tracking-widest transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50 text-center"
            >
              Start Your Transformation ➔
            </a>
            <a 
              href="#portfolio-section" 
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-8 py-4 rounded-lg text-sm uppercase tracking-widest transition-all duration-200 backdrop-blur-sm text-center"
            >
              View Our Portfolio
            </a>
          </div>

          {/* Stats Row */}
          <div className="pt-8 border-t border-white/10 grid grid-cols-3 gap-6">
            <div>
              <div className="text-3xl font-black text-cyan-400">150+</div>
              <div className="text-xs text-slate-400 mt-2">Successful Projects</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400">500K+</div>
              <div className="text-xs text-slate-400 mt-2">Users Worldwide</div>
            </div>
            <div>
              <div className="text-3xl font-black text-cyan-400">2024</div>
              <div className="text-xs text-slate-400 mt-2">Established</div>
            </div>
          </div>
        </div>

        {/* Right Content Column - Feature Showcase */}
        <div className="lg:col-span-5">
          <div className="bg-gradient-to-br from-slate-800/60 to-blue-900/40 border border-white/10 rounded-2xl p-8 space-y-6 backdrop-blur-xl shadow-2xl hover:border-white/20 transition-all duration-300">
            <div>
              <span className="text-xs font-bold text-cyan-400 block mb-2">
                ✨ WHY CHOOSE SIVIKON
              </span>
              <h3 className="text-lg font-black text-white uppercase tracking-tight">
                Industry-Leading Capabilities
              </h3>
            </div>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <div>
                  <p className="font-bold text-white text-sm">Custom Development</p>
                  <p className="text-xs text-slate-300 mt-1">Tailored solutions built from ground up for your specific needs</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <div>
                  <p className="font-bold text-white text-sm">Cloud Infrastructure</p>
                  <p className="text-xs text-slate-300 mt-1">Scalable, secure cloud environments with global reach</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <div>
                  <p className="font-bold text-white text-sm">Quality Assurance</p>
                  <p className="text-xs text-slate-300 mt-1">Rigorous testing & validation for zero-defect deployment</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold mt-1">→</span>
                <div>
                  <p className="font-bold text-white text-sm">Compliance & Security</p>
                  <p className="text-xs text-slate-300 mt-1">Built-in security, GDPR, ISO 27001 & industry standards</p>
                </div>
              </li>
            </ul>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
              <span className="text-slate-400">Enterprise Grade Technology</span>
              <span className="text-cyan-400 font-bold">VERIFIED ✓</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}