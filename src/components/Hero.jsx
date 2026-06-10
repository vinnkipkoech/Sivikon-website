export default function Hero() {
  const solutionsList = [
    { icon: "🌐", name: "Web Application Development", tag: "Full-Stack", iconBg: "#F0F5FF" },
    { icon: "🧪", name: "Automated QA & Testing", tag: "50+ Tools", iconBg: "#F0F5FF" },
    { icon: "☁️", name: "Cloud & API Infrastructure", tag: "Scalable", iconBg: "#F0F5FF" },
    { icon: "📊", name: "Database & Fleet Systems", tag: "Enterprise", iconBg: "#F0F5FF" },
    { icon: "📱", name: "Mobile App Testing", tag: "iOS & Android", iconBg: "#F0F5FF" },
    { icon: "🛡️", name: "Security & Penetration Testing", tag: "PCI DSS", iconBg: "#F0F5FF" },
  ];

  return (
    <section id="hero" className="min-h-screen bg-white flex flex-col pt-[70px] relative overflow-hidden font-sans">
      {/* Background Grid Accent Layer */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#1558D6 1px, transparent 1px),
            linear-gradient(90deg, #1558D6 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      <div className="flex-1 flex flex-col lg:flex-row items-center max-w-[1280px] mx-auto w-full px-[5%] py-10 lg:py-16 gap-10 lg:gap-[60px] relative z-10">
        
        {/* Left Column: Wording and Core Feature Items */}
        <div className="flex-1 min-w-0 w-full text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#F0F5FF] border border-[#E2E8F4] text-[#1558D6] text-[11px] font-bold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1558D6] animate-pulse"></div>
            Kenya's Premier Software Engineering Partner
          </div>

          <h1 className="text-[38px] sm:text-[5.5vw] lg:text-[68px] font-black tracking-[-2px] text-[#0A1628] leading-[1.07] mb-2">
            We Build Custom<br />
            Software That<br />
            <div className="inline-block relative h-[1.07em] overflow-hidden align-bottom">
              <div className="flex flex-col animate-rotateWords">
                <span className="block h-[1.07em] text-[#1558D6]">Just Works.</span>
                <span className="block h-[1.07em] text-[#1558D6]">Scales Up.</span>
                <span className="block h-[1.07em] text-[#1558D6]">Ships Fast.</span>
              </div>
            </div>
          </h1>

          <p className="text-[#6B7A99] text-[17px] max-w-[520px] my-6 leading-[1.75] font-normal">
            From full-stack web apps and cloud APIs to enterprise QA automation — Sivikon Technologies delivers bulletproof, scalable, and beautifully engineered digital solutions for startups to Fortune 500.
          </p>

          <div className="flex flex-wrap gap-3.5 mb-[52px]">
            <a 
              href="#capabilities" 
              className="bg-gradient-to-br from-[#1558D6] to-[#1A6BFF] text-white px-7 py-3.5 rounded-lg text-sm font-bold shadow-lg shadow-[#1558D6]/20 hover:-translate-y-0.5 transition-all inline-flex items-center gap-2"
            >
              Explore Capabilities →
            </a>
            <a 
              href="#cta" 
              className="bg-white text-[#0A1628] border border-[#E2E8F4] px-7 py-[13px] rounded-lg text-sm font-semibold hover:bg-[#F8FAFC] transition-all inline-flex items-center gap-2"
            >
              Free Consultation
            </a>
          </div>

          {/* Verification Badges */}
          <div className="flex flex-wrap gap-6">
            {[
              { ico: "✓", txt: "Registered in Kenya" },
              { ico: "⚡", txt: "2+ Years Experience" },
              { ico: "🌍", txt: "Global Clients" },
              { ico: "🔒", txt: "50+ QA Tools" }
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#6B7A99] font-medium">
                <div className="w-7 h-7 rounded bg-[#F0F5FF] flex items-center justify-center text-xs text-[#1558D6] font-bold border border-[#E2E8F4]">
                  {badge.ico}
                </div>
                {badge.txt}
              </div>
            ))}
          </div>
        </div>

        {/* Right Side Column */}
        <div className="w-full lg:w-[420px] flex-shrink-0">
          <div className="bg-white border border-[#E2E8F4] rounded-2xl p-7 shadow-[0_8px_32px_rgba(21,88,214,0.06)]">
            <div className="font-mono text-[11px] text-[#1558D6] tracking-widest uppercase mb-4 opacity-80 font-bold">// Sivikon Solutions</div>
            
            <div className="flex flex-col gap-2.5">
              {solutionsList.map((sol, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 bg-[#F8FAFC] border border-[#E2E8F4] hover:border-[#1558D6]/30 rounded-lg p-3 transition-all cursor-default"
                >
                  <div className="w-9 h-9 rounded-md flex items-center justify-center text-base flex-shrink-0 bg-[#F0F5FF] border border-[#E2E8F4]/60">
                    {sol.icon}
                  </div>
                  <div className="text-[13.5px] font-semibold text-[#0A1628]">
                    {sol.name}
                  </div>
                  <div className="ml-auto text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-[#F0F5FF] text-[#1558D6] whitespace-nowrap border border-[#E2E8F4]">
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
