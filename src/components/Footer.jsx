import React from 'react';

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-r from-cyan-950 via-emerald-950 to-amber-900 border-t border-white/10 text-white overflow-hidden">
      
      {/* Accent Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_0.75px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex flex-col">
              <span className="font-black text-white uppercase tracking-tight text-lg bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Sivikon
              </span>
              <span className="text-xs text-slate-400 font-bold mt-2">
                Enterprise Technology Solutions
              </span>
              <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                Delivering secure, scalable digital transformations for enterprises worldwide.
              </p>
            </div>
          </div>

          {/* Enterprise Clients */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-white mb-6 text-sm">Enterprise Clients</h4>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>▪ ABSA Bank Group — High-security payment integrations and core system testing.</li>
              <li>▪ MTECH Communications — High-volume mobile platforms and API infrastructure optimization.</li>
              <li>▪ Housing Finance Company (HFC) — Secure loan routing pipelines and transactional customer platforms.</li>
              <li>▪ County Government of Kericho — Public service automation and database consolidation programs.</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-white mb-6 text-sm">Company</h4>
            <ul className="space-y-3">
              <li><a href="#hero" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Home</a></li>
              <li><a href="#about-section" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">About Us</a></li>
              <li><a href="#portfolio-section" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Portfolio</a></li>
              <li><a href="#contact" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-black uppercase tracking-widest text-white mb-6 text-sm">Contact</h4>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-slate-500 font-bold mb-1">PHONE</p>
                <a href="tel:+254721501604" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-semibold">
                  +254 721 501 604
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold mb-1">EMAIL</p>
                <a href="mailto:sivikontechnologies@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-semibold break-all">
                  sivikontechnologies@gmail.com
                </a>
              </div>
              <div>
                <p className="text-xs text-slate-500 font-bold mb-1">LOCATION</p>
                <p className="text-slate-300 text-sm">Nairobi, Kenya (Serving Global Markets)</p>
              </div>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="py-8 border-t border-white/10" />

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="text-xs text-slate-400 font-mono">
            © {new Date().getFullYear()} Sivikon Technologies. All rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-semibold">
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-semibold">
              Terms of Service
            </a>
            <span className="text-slate-600">|</span>
            <a href="#" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm font-semibold">
              Compliance
            </a>
          </div>

          {/* Tech Stack Badge */}
          <div className="text-xs text-slate-500 font-mono">
            Built with React • Tailwind • Modern Web Standards
          </div>

        </div>

      </div>

    </footer>
  );
}