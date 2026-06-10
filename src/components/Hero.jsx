import React from 'react';

export default function Hero() {
  const solutionsList = [
    { icon: "🌐", name: "Web Application Development", tag: "Full-Stack" },
    { icon: "🧪", name: "Automated QA & Testing", tag: "50+ Tools" },
    { icon: "☁️", name: "Cloud & API Infrastructure", tag: "Scalable" },
    { icon: "📊", name: "Database & Fleet Systems", tag: "Enterprise" },
    { icon: "📱", name: "Mobile App Testing", tag: "iOS & Android" },
    { icon: "🛡️", name: "Security & Penetration Testing", tag: "PCI DSS" },
  ];

  return (
    <section id="hero" className="min-h-screen bg-navy flex flex-col pt-[70px] relative overflow-hidden">
      {/* Background Grid Accent Layer */}
      <div className="absolute inset-0 opacity-[0.04] hero-grid-bg pointer-events-none"></div>
      
      {/* Signature Radial Glow Gradient Overlays */}
      <div className="absolute top-[-200px] right-[-200px] w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,rgba(21,88,214,0.25)_0%,transparent_70%)] pointer-events-none"></div>
      <div className="absolute bottom-[-200px] left-[-100px] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,240,255,0.12)_0%,transparent_70%)] pointer-events-none"></div>

      <div className="flex-1 flex flex-col lg:flex-row items-center max-w-[1280px] mx-auto w-full px-[5%] py-10 lg:py-16 gap-10 lg:gap-[60px] relative z-10">
        
        {/* Left Column: Wording and Core Feature Items */}
        <div className="flex-1 min-w-0 w-full text-left">
          {/* Dynamic Badge Component */}
          <div className="inline-flex items-center gap-2 bg-blueCustom/20 border border-blueCustom/40 text-cyanCustom text-xs font-semibold tracking-[1.5px] uppercase px-3.5 py-1.5 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-cyanCustom animate-pulse"></div>
            Kenya's Premier Software Engineering Partner[cite: 1]
          </div>

          {/* Heading with high-visibility vibrant text gradients */}
          <h1 className="text-[38px] md:text-[5.5vw] lg:text-[64px] font-black tracking-tighter text-white leading-[1.07] mb-2 uppercase">
            We Build Custom<br />
            Software That<br />
            <div className="inline-block relative h-[1.07em] overflow-hidden align-bottom">
              <div className="flex flex-col animate-rotateWords">
                <span className="block h-[1.07em] bg-gradient-to-r from-cyanCustom to-white bg-clip-text text-transparent normal-case">Just Works.</span>
                <span className="block h-[1.07em] bg-gradient-to-r from-cyanCustom to-white bg-clip-text text-transparent normal-case">Scales Up.</span>
                <span className="block h-[1.07em] bg-gradient-to-r from-cyanCustom to-white bg-clip-text text-transparent normal-case">Ships Fast.</span>
              </div>
            </div>
          </h1>

          <p className="text-white/60 text-base md:text-lg max-w-[540px] my-6 leading-relaxed font-normal">
            From full-stack web apps and cloud APIs to enterprise QA automation — Sivikon Technologies delivers bulletproof, scalable, and beautifully engineered digital solutions for startups to Fortune 500[cite: 1].
          </p>

          {/* Action Triggers with high readability color mapping */}
          <div className="flex flex-wrap gap-3.5 mb-12">
            <a 
              href="#solutions" 
              className="bg-blueCustom hover:bg-blue2 text-white px-7 py-3.5 rounded-xl text-base font-bold shadow-[0_4px_20px_rgba(21,88,214,0.3)] hover:-translate-y-0.5 transition-all text-center"
            >
              Explore Solutions →
            </a>
            <a 
              href="#cta" 
              className="bg-white/5 text-white border border-white/20 px-7 py-3.5 rounded-xl text-base font-semibold hover:border-cyanCustom hover:bg-cyanCustom/10 transition-all text-center"
            >
              Free Consultation
            </a>
          </div>

          {/* Standardized Footprint Verification Badges */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-6 pt-6 border-t border-white/5">
            {[
              { ico: "✓", txt: "Registered in Kenya" },
              { ico: "⚡", txt: "2+ Years Experience" },
              { ico: "🌍", txt: "Global Clients" },
              { ico: "🔒", txt: "50+ QA Tools" }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-sm text-white/60 font-medium">
                <div className="w-7 h-7 rounded-md bg-white/5 flex items-center justify-center text-sm text-cyanCustom font-bold border border-white/5">
                  {badge.ico}
                </div>
                {badge.txt}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Column: Dark-aligned Interactive Solutions Container */}
        <div className="w-full lg:w-[440px] flex-shrink-0">
          <div className="bg-navy2 border border-white/10 rounded-[20px] p-6 backdrop-blur-md shadow-2xl">
            <div className="font-mono text-[11px] text-cyanCustom tracking-widest uppercase mb-4 opacity-80 font-bold">// Sivikon Solutions</div>
            
            <div className="flex flex-col gap-2.5">
              {solutionsList.map((sol, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-white/5 border border-white/5 hover:border-cyanCustom/30 hover:bg-white/[0.08] rounded-xl p-3.5 transition-all cursor-default group"
                >
                  {/* Fixed Icon Wrapper: Seamless Dark Palette integration */}
                  <div className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0 bg-white/5 border border-white/10 group-hover:bg-blueCustom/20 group-hover:border-cyanCustom/30 transition-all">
                    {sol.icon}
                  </div>
                  
                  {/* Solution Label */}
                  <div className="text-[13.5px] font-semibold text-white/80 group-hover:text-white transition-colors">
                    {sol.name}
                  </div>
                  
                  {/* Capability Badge Tag */}
                  <div className="ml-auto text-[10.5px] font-mono font-bold px-2 py-0.5 rounded-full bg-blueCustom/25 text-cyanCustom whitespace-nowrap">
                    {sol.tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
