import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-canvasDark/95 border-t border-white/5 text-white overflow-hidden backdrop-blur-xl">
      
      {/* Micro Grid Dot Accent Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.015)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      
      {/* Background Subtle Corner Glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1 space-y-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-sm font-black text-white shadow-lg shadow-primary-500/20">
                S
              </span>
              <div className="flex flex-col leading-tight">
                <span className="text-sm font-black uppercase tracking-[0.25em] text-white">Sivikon</span>
                <span className="text-[9px] uppercase tracking-[0.3em] text-dark-400">Technologies</span>
              </div>
            </div>
            <p className="text-xs font-bold uppercase tracking-widest text-primary-400 mt-2">// ENTERPRISE TECH SOLUTIONS</p>
            <p className="text-sm text-dark-300 leading-relaxed font-medium">
              Delivering secure, scalable digital transformations for enterprises worldwide.
            </p>
          </div>

          {/* Enterprise Clients Context */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-white mb-6 text-sm">Enterprise Clients</h4>
            <ul className="space-y-4 text-dark-300 text-xs font-medium leading-relaxed">
              <li className="flex gap-2">
                <span className="text-primary-400 font-bold shrink-0">▪</span>
                <p><span className="text-white font-bold">ABSA Bank Group</span> — High-security payment integrations and core system testing.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-400 font-bold shrink-0">▪</span>
                <p><span className="text-white font-bold">MTECH Communications</span> — High-volume mobile platforms and API infrastructure optimization.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-400 font-bold shrink-0">▪</span>
                <p><span className="text-white font-bold">Housing Finance Company (HFC)</span> — Secure loan routing pipelines and transactional customer platforms.</p>
              </li>
              <li className="flex gap-2">
                <span className="text-primary-400 font-bold shrink-0">▪</span>
                <p><span className="text-white font-bold">County Government of Kericho</span> — Public service automation and database consolidation programs.</p>
              </li>
            </ul>
          </div>

          {/* Company Navigation Hub */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-white mb-6 text-sm">Company</h4>
            <ul className="space-y-3 font-semibold text-sm">
              <li><a href="#hero" className="text-dark-300 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about-section" className="text-dark-300 hover:text-primary-400 transition-colors">About Us</a></li>
              <li><a href="#portfolio-section" className="text-dark-300 hover:text-primary-400 transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-dark-300 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Core Contact Info Channels */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-white mb-6 text-sm">Contact</h4>
            <div className="space-y-5">
              <div>
                <p className="text-[10px] text-dark-500 font-bold tracking-widest mb-1.5 uppercase">Phone</p>
                <a href="tel:+254721501604" className="text-dark-200 hover:text-primary-400 transition-colors text-sm font-bold tracking-wide">
                  +254 721 501 604
                </a>
              </div>
              <div>
                <p className="text-[10px] text-dark-500 font-bold tracking-widest mb-1.5 uppercase">Email</p>
                <a href="mailto:sivikontechnologies@gmail.com" className="text-dark-200 hover:text-primary-400 transition-colors text-sm font-bold break-all tracking-wide">
                  sivikontechnologies@gmail.com
                </a>
              </div>
              <div>
                <p className="text-[10px] text-dark-500 font-bold tracking-widest mb-1.5 uppercase">Location</p>
                <p className="text-dark-200 text-sm font-semibold leading-relaxed">
                  Nairobi, Kenya (Serving Global Markets)
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Structural Layout Divider Line */}
        <div className="border-t border-white/5" />

        {/* Bottom Metadata & Legal Anchor Links */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-6">
          
          <div className="text-xs text-dark-400 font-mono">
            © {new Date().getFullYear()} Sivikon Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-xs font-semibold text-dark-300">
            <a href="#" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
            <span className="text-dark-600 font-normal">|</span>
            <a href="#" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            <span className="text-dark-600 font-normal">|</span>
            <a href="#" className="hover:text-primary-400 transition-colors">Compliance</a>
          </div>

          {/* Structural Framework Stack Tag */}
          <div className="text-xs text-dark-500 font-mono tracking-wide">
            Built with React • Tailwind • Modern Web Standards
          </div>

        </div>

      </div>
    </footer>
  );
}