import React, { useState } from 'react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current);
    if (mobileMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="hidden md:flex items-center justify-between px-4 py-2 text-xs text-slate-300 bg-slate-950/95 border-b border-white/10 backdrop-blur-xl">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2">📞 +254 721 501 604</span>
          <span className="inline-flex items-center gap-2">✉️ sivikontechnologies@gmail.com</span>
        </div>
        <div className="text-slate-400">Nairobi, Kenya — Serving Global Markets</div>
      </div>

      <div className="bg-slate-950/95 border-b border-white/10 backdrop-blur-xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between gap-4">
          <a href="#hero" className="flex items-center gap-3 text-white no-underline">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500 text-lg font-black shadow-lg shadow-emerald-500/20">
              S
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-black uppercase tracking-[0.3em] text-white">Sivikon</span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Technologies</span>
            </div>
          </a>

          <div className="hidden md:flex items-center gap-1 text-sm font-semibold text-slate-200">
            <a href="#hero" className="px-4 py-2 rounded-lg hover:text-amber-300 transition-colors">Home</a>

            <div className="relative" onMouseEnter={() => setOpenDropdown('solutions')} onMouseLeave={closeDropdown}>
              <button
                onClick={() => toggleDropdown('solutions')}
                className="px-4 py-2 flex items-center gap-2 rounded-lg hover:text-amber-300 transition-colors"
              >
                Solutions
                <span className={`inline-block transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>

              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black/20 overflow-hidden">
                  <a href="#products-suite" onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-300">Education Platforms</a>
                  <a href="#products-suite" onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-300">Healthcare Systems</a>
                  <a href="#products-suite" onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-300">Finance & Public Sector</a>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => setOpenDropdown('services')} onMouseLeave={closeDropdown}>
              <button
                onClick={() => toggleDropdown('services')}
                className="px-4 py-2 flex items-center gap-2 rounded-lg hover:text-amber-300 transition-colors"
              >
                Services
                <span className={`inline-block transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`}>
                  ▾
                </span>
              </button>

              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl shadow-black/20 overflow-hidden">
                  <a href="#services-section" onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-300">Custom Software</a>
                  <a href="#services-section" onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-300">QA & Testing</a>
                  <a href="#services-section" onClick={closeMobileMenu} className="block px-4 py-3 text-sm text-slate-200 hover:bg-emerald-500/10 hover:text-emerald-300">Cloud Operations</a>
                </div>
              )}
            </div>

            <a href="#portfolio-section" className="px-4 py-2 rounded-lg hover:text-amber-300 transition-colors">Portfolio</a>
            <a href="#about-section" className="px-4 py-2 rounded-lg hover:text-amber-300 transition-colors">About</a>
            <a href="#contact" className="px-4 py-2 rounded-lg hover:text-amber-300 transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-3 text-sm font-bold uppercase tracking-widest text-slate-950 shadow-lg shadow-amber-300/30 transition-all duration-200 hover:from-amber-400 hover:to-orange-400"
            >
              Get Started
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors duration-200"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${mobileMenuOpen ? 'max-h-[80rem]' : 'max-h-0'}`}>
        <div className="space-y-2 px-4 pb-4 pt-3 bg-slate-950/95 border-t border-white/10">
          <a href="#hero" onClick={closeMobileMenu} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900 hover:text-amber-300 transition-colors">
            Home
          </a>

          <div className="space-y-1 rounded-3xl border border-slate-800 bg-slate-900/80 p-1">
            <button
              onClick={() => toggleDropdown('solutions')}
              className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
            >
              Solutions
              <span className={`inline-block transition-transform ${openDropdown === 'solutions' ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>
            {openDropdown === 'solutions' && (
              <div className="space-y-1 px-4 pb-2">
                <a href="#products-suite" onClick={closeMobileMenu} className="block rounded-2xl px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                  Education Platforms
                </a>
                <a href="#products-suite" onClick={closeMobileMenu} className="block rounded-2xl px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                  Healthcare Systems
                </a>
                <a href="#products-suite" onClick={closeMobileMenu} className="block rounded-2xl px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                  Finance & Public Sector
                </a>
              </div>
            )}
          </div>

          <div className="space-y-1 rounded-3xl border border-slate-800 bg-slate-900/80 p-1">
            <button
              onClick={() => toggleDropdown('services')}
              className="w-full flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors"
            >
              Services
              <span className={`inline-block transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`}>
                ▾
              </span>
            </button>
            {openDropdown === 'services' && (
              <div className="space-y-1 px-4 pb-2">
                <a href="#services-section" onClick={closeMobileMenu} className="block rounded-2xl px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                  Custom Software
                </a>
                <a href="#services-section" onClick={closeMobileMenu} className="block rounded-2xl px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                  QA & Testing
                </a>
                <a href="#services-section" onClick={closeMobileMenu} className="block rounded-2xl px-3 py-2 text-sm text-slate-200 hover:bg-slate-800 hover:text-amber-300 transition-colors">
                  Cloud Operations
                </a>
              </div>
            )}
          </div>

          <a href="#portfolio-section" onClick={closeMobileMenu} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900 hover:text-amber-300 transition-colors">
            Portfolio
          </a>
          <a href="#about-section" onClick={closeMobileMenu} className="block rounded-2xl px-4 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-900 hover:text-amber-300 transition-colors">
            About
          </a>
          <a href="#contact" onClick={closeMobileMenu} className="block rounded-2xl bg-gradient-to-r from-amber-500 to-orange-500 px-4 py-3 text-center text-sm font-bold text-slate-950 transition hover:from-amber-400 hover:to-orange-400">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}
