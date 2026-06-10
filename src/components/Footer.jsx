import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-navy border-t border-white/5 text-white overflow-hidden backdrop-blur-md">
      
      {/* Micro Grid Dot Accent Layer from master layout */}
      <div className="absolute inset-0 opacity-[0.04] hero-grid-bg pointer-events-none" />
      
      {/* Background Subtle Corner Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(21,88,214,0.1)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto px-[5%]">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blueCustom to-blue2 text-sm font-black text-white shadow-lg shadow-blueCustom/20">
                S
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-black uppercase tracking-[0.25em] text-white">Sivikon</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-white/40">Technologies</span>
              </div>
            </div>
            <p className="text-[11px] font-bold uppercase tracking-widest text-cyanCustom mt-2">// ENTERPRISE TECH SOLUTIONS</p>
            <p className="text-sm text-white/60 leading-relaxed font-normal">
              Delivering secure, scalable digital transformations for enterprises worldwide.
            </p>
          </div>

          {/* Enterprise Clients Context */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-white mb-6 text-xs font-mono">// Enterprise Clients</h4>
            <ul className="space-y-4 text-white/60 text-xs font-normal leading-relaxed">
              <li className="flex gap-2">
                <span className="text-cyanCustom font-bold shrink-0">▪</span>
                <p><span className="text-white font-semibold">ABSA Bank Group</span> — High-security payment integrations and core system testing.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-cyanCustom font-bold shrink-0">▪</span>
                <p><span className="text-white font-semibold">MTECH Communications</span> — High-volume mobile platforms and API infrastructure optimization.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-cyanCustom font-bold shrink-0">▪</span>
                <p><span className="text-white font-semibold">Housing Finance Company (HFC)</span> — Secure loan routing pipelines and transactional customer platforms.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-cyanCustom font-bold shrink-0">▪</span>
                <p><span className="text-white font-semibold">County Government of Kericho</span> — Public service automation and database consolidation programs.</p>
              </li>
            </ul>
          </div>

          {/* Company Navigation Hub */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-white mb-6 text-xs font-mono">// Company</h4>
            <ul className="space-y-3 font-semibold text-sm">
              <li><a href="#hero" className="text-white/60 hover:text-cyanCustom transition-colors">Home</a></li>
              <li><a href="#solutions" className="text-white/60 hover:text-cyanCustom transition-colors">Solutions</a></li>
              <li><a href="#capabilities" className="text-white/60 hover:text-cyanCustom transition-colors">Capabilities</a></li>
              <li><a href="#cta" className="text-white/60 hover:text-cyanCustom transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Core Contact Info Channels */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-white mb-6 text-xs font-mono">// Contact</h4>
            <div className="space-y-5">
              <div>
                <p className="text-[10px] text-white/40 font-bold tracking-widest mb-1.5 uppercase">Phone</p>
                <a href="tel:+254721501604" className="text-white/80 hover:text-cyanCustom transition-colors text-sm font-bold tracking-wide">
                  +254 721 501 604
                </a>
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-bold tracking-widest mb-1.5 uppercase">Email</p>
                <a href="mailto:sivikontechnologies@gmail.com" className="text-white/80 hover:text-cyanCustom transition-colors text-sm font-bold break-all tracking-wide">
                  sivikontechnologies@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] text-white/40 font-bold tracking-widest mb-1.5 uppercase">Location</p>
                <p className="text-white/80 text-sm font-semibold leading-relaxed">
                  Nairobi, Kenya[cite: 1]
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Structural Layout Divider Line */}
        <div className="border-t border-white/5" />

        {/* Bottom Metadata & Legal Anchor Links */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-xs text-white/40 font-mono">
            © {new Date().getFullYear()} Sivikon Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-white/60">
            <a href="#" className="hover:text-cyanCustom transition-colors">Privacy Policy</a>
            <span className="text-white/10 font-normal">|</span>
            <a href="#" className="hover:text-cyanCustom transition-colors">Terms of Service</a>
            <span className="text-white/10 font-normal">|</span>
            <a href="#" className="hover:text-cyanCustom transition-colors">Compliance</a>
          </div>

          {/* Structural Framework Stack Tag */}
          <div className="text-xs text-white/40 font-mono tracking-wide">
            React • Tailwind • UI/UX
          </div>

        </div>

      </div>
    </footer>
  );
}