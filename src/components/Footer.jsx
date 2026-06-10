export default function Footer() {
  return (
    <footer className="relative bg-[#0A1628] border-t border-white/10 text-white overflow-hidden font-sans">
      
      {/* Background Dot Layer */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#00C2FF 1px, transparent 1px),
            linear-gradient(90deg, #00C2FF 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />
      
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(21,88,214,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-[5%]">
        
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12 text-left">
          
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#1558D6] to-[#1A6BFF] text-sm font-black text-white shadow-lg">
                S
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-black uppercase tracking-[0.2em] text-white">Sivikon</span>
                <span className="text-[9px] uppercase tracking-[0.25em] text-white/40">Technologies</span>
              </div>
            </div>
            <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#00C2FF] mt-2">// Enterprise Solutions</p>
            <p className="text-sm text-white/70 leading-relaxed font-normal">
              Delivering secure, scalable digital transformations for enterprises worldwide.
            </p>
          </div>

          {/* Clients Context */}
          <div>
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#00C2FF] mb-5">// Enterprise Clients</h4>
            <ul className="space-y-3.5 text-white/70 text-xs font-normal leading-relaxed">
              <li className="flex gap-2">
                <span className="text-[#00C2FF] font-bold shrink-0">▪</span>
                <p><span className="text-white font-semibold">ABSA Bank Group</span> — Payment integrations & QA.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00C2FF] font-bold shrink-0">▪</span>
                <p><span className="text-white font-semibold">MTECH Communications</span> — API infrastructure.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00C2FF] font-bold shrink-0">▪</span>
                <p><span className="text-white font-semibold">HFC</span> — Transactional loan systems.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-[#00C2FF] font-bold shrink-0">▪</span>
                <p><span className="text-white font-semibold">Govt of Kericho</span> — Public service automation.</p>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#00C2FF] mb-5">// Navigation</h4>
            <ul className="space-y-3 font-medium text-sm">
              <li><a href="#hero" className="text-white/60 hover:text-[#00C2FF] transition-colors">Home</a></li>
              <li><a href="#capabilities" className="text-white/60 hover:text-[#00C2FF] transition-colors">Capabilities</a></li>
              <li><a href="#why" className="text-white/60 hover:text-[#00C2FF] transition-colors">Corporate Profile</a></li>
              <li><a href="#cta" className="text-white/60 hover:text-[#00C2FF] transition-colors">Project Intake</a></li>
            </ul>
          </div>

          {/* Coordinates */}
          <div>
            <h4 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#00C2FF] mb-5">// Coordinates</h4>
            <div className="space-y-4">
              <div>
                <p className="text-[10px] text-white/40 font-bold tracking-wider mb-1 uppercase">Phone</p>
                <a href="tel:+254721501604" className="text-white/80 hover:text-[#00C2FF] transition-colors text-sm font-bold tracking-wide">
                  +254 721 501 604
                </a>
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-bold tracking-wider mb-1 uppercase">Email</p>
                <a href="mailto:sivikontechnologies@gmail.com" className="text-white/80 hover:text-[#00C2FF] transition-colors text-sm font-bold break-all tracking-wide">
                  sivikontechnologies@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-bold tracking-wider mb-1 uppercase">Location</p>
                <p className="text-white/80 text-sm font-semibold leading-relaxed">
                  Nairobi, Kenya
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10" />

        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-xs text-white/40 font-mono">
            © {new Date().getFullYear()} Sivikon Technologies Ltd. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-white/50">
            <a href="#" className="hover:text-[#00C2FF] transition-colors">Privacy Policy</a>
            <span className="text-white/10 font-normal">|</span>
            <a href="#" className="hover:text-[#00C2FF] transition-colors">Terms of Service</a>
            <span className="text-white/10 font-normal">|</span>
            <a href="#" className="hover:text-[#00C2FF] transition-colors">Commercial Profile</a>
          </div>

          <div className="text-xs text-white/40 font-mono tracking-wide">
            React • Tailwind CSS • UI/UX
          </div>
        </div>
      </div>
    </footer>
  );
}
