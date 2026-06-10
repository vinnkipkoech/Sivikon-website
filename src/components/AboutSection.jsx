export default function AboutSection() {
  const coreValues = [
    { title: "Quality First", desc: "An unyielding, zero-compromise dedication to modern programming standards and flawless software execution metrics." },
    { title: "Continuous Innovation", desc: "Actively adopting cutting-edge technologies, framework upgrades, and next-generation execution practices." },
    { title: "Client-Centric Success", desc: "Nurturing structured, transparent partnerships focused on delivering high returns on investment." },
    { title: "Integrity & Ethics", desc: "Enforcing total transparency in engineering hours, software gaps, vulnerabilities, and project scopes." }
  ];

  return (
    <section id="why" className="bg-white py-[90px] px-[5%] border-t border-[#E2E8F4] font-sans text-left">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Upper Layout: Overview and Mission/Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16">
          
          {/* Left Column: Company Profile */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F0F5FF] border border-[#E2E8F4] text-[#1558D6] text-[11px] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full">
              Corporate Company Profile
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] leading-[1.1] tracking-[-1.5px]">
              Building Solutions for the <br />
              <span className="text-[#1558D6]">African Enterprise</span>
            </h2>
            
            <p className="text-base sm:text-lg text-[#0A1628] leading-relaxed font-semibold">
              Ensuring efficiency, trust, and digital resilience. Sivikon Technologies Limited delivers custom full-stack software engineering, enterprise quality assurance, and automation for organizations scaling across East Africa.
            </p>
            
            <p className="text-sm sm:text-base text-[#6B7A99] leading-relaxed font-normal">
              Sivikon Technologies is an enterprise software partner focused on secure, scalable digital transformation for government, finance, telecom, and institutional organizations. We combine regional market insight with disciplined delivery to build mission-critical systems that work in Africa.
            </p>
          </div>

          {/* Right Column: Mission & Vision */}
          <div className="lg:col-span-5 space-y-5 w-full">
            <div className="bg-[#F8FAFC] border border-[#E2E8F4] rounded-2xl p-6">
              <span className="font-mono text-[10px] font-bold text-[#1558D6] tracking-widest uppercase mb-2 block">// Our Mission</span>
              <p className="text-sm text-[#0A1628] font-medium leading-relaxed">
                To empower businesses with top-tier custom software development and exceptional quality assurance frameworks. We execute clean, modern software delivery that shortens time-to-market and elevates user experience.
              </p>
            </div>

            <div className="bg-[#F8FAFC] border border-[#E2E8F4] rounded-2xl p-6">
              <span className="font-mono text-[10px] font-bold text-[#1558D6] tracking-widest uppercase mb-2 block">// Our Vision</span>
              <p className="text-sm text-[#0A1628] font-medium leading-relaxed">
                To become a recognized leader in unified software creation and quality engineering ecosystem solutions, setting timeless industry benchmarks for innovation and absolute professional transparency.
              </p>
            </div>
          </div>
        </div>

        {/* Lower Layout: Values & Meta Data */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch pt-12 border-t border-[#E2E8F4]">
          
          <div className="lg:col-span-8 space-y-5">
            <h3 className="text-xl font-extrabold text-[#0A1628] mb-4">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {coreValues.map((val, idx) => (
                <div key={idx} className="border border-[#E2E8F4] rounded-xl p-5 hover:border-[#1558D6]/30 transition-all">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-[#1558D6]" />
                    <span className="text-sm font-extrabold text-[#0A1628]">{val.title}</span>
                  </div>
                  <p className="text-xs text-[#6B7A99] leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Corporate Meta Card */}
          <div className="lg:col-span-4 bg-[#0A1628] text-white rounded-2xl p-6 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-[#00C2FF] mb-2 block">Corporate Identity</span>
              <h4 className="text-base font-extrabold mb-4">Sivikon Technologies Ltd</h4>
              <div className="space-y-2.5 text-xs font-mono text-white/70">
                <p><span className="text-white/40">REG:</span> Registered in Kenya (2024)</p>
                <p><span className="text-white/40">EMAIL:</span> Sivikontechnologies@gmail.com</p>
                <p><span className="text-white/40">TEL:</span> +254 721 501 604</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex justify-between text-[10px] font-mono text-white/40">
              <div>V: 2026.1</div>
              <div>COMMERCIAL</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
