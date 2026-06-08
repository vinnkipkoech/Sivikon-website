import React, { useState } from 'react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const openDropdownMenu = (name) => {
    setOpenDropdown(name);
  };

  const closeDropdownMenu = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    if (mobileMenuOpen) {
      setOpenDropdown(null);
    }
    setMobileMenuOpen((current) => !current);
  };

  const handleMobileLinkClick = () => {
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

      <div className="bg-gradient-to-r from-slate-950 via-emerald-950 to-slate-900 border-b border-emerald-500/20 backdrop-blur-xl shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
          <div className="flex flex-col text-left">
            <span className="text-sm font-black text-white tracking-tight uppercase bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              Sivikon Technologies
            </span>
            <span className="text-[9px] font-mono text-cyan-400 mt-0.5 tracking-wider font-bold">
              Ensuring Quality. Delivering Trust. Building Innovation.
            </span>
          </div>

          <div className="hidden md:flex items-center gap-1 text-[11px] font-semibold text-slate-200">
            <a href="#hero" className="px-4 py-2 hover:text-cyan-400 transition-colors duration-200 rounded">
              HOME
            </a>
            <div className="relative" onMouseEnter={() => openDropdownMenu('about')} onMouseLeave={closeDropdownMenu}>
              <button
                onClick={() => toggleDropdown('about')}
                className="px-4 py-2 flex items-center gap-1 hover:text-cyan-400 transition-colors duration-200 rounded"
              >
                ABOUT
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {openDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-slate-900 border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden">
                  <a href="#about-section" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-emerald-600/20 transition-colors text-slate-200 hover:text-emerald-300">
                    WE ARE
                  </a>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => openDropdownMenu('services')} onMouseLeave={closeDropdownMenu}>
              <button
                onClick={() => toggleDropdown('services')}
                className="px-4 py-2 flex items-center gap-1 hover:text-cyan-400 transition-colors duration-200 rounded"
              >
                SERVICES
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-slate-900 border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden">
                  <a href="#services-section" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-emerald-600/20 transition-colors text-slate-200 hover:text-emerald-300 border-b border-emerald-500/10">
                    Full-Stack Development
                  </a>
                  <a href="#services-section" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-emerald-600/20 transition-colors text-slate-200 hover:text-emerald-300 border-b border-emerald-500/10">
                    Quality Assurance
                  </a>
                  <a href="#services-section" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-emerald-600/20 transition-colors text-slate-200 hover:text-emerald-300">
                    Cloud & Security
                  </a>
                </div>
              )}
            </div>

            <div className="relative" onMouseEnter={() => openDropdownMenu('products')} onMouseLeave={closeDropdownMenu}>
              <button
                onClick={() => toggleDropdown('products')}
                className="px-4 py-2 flex items-center gap-1 hover:text-cyan-400 transition-colors duration-200 rounded"
              >
                PRODUCTS
                <svg className={`w-4 h-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              {openDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-slate-900 border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden">
                  <a href="#products-suite" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-emerald-600/20 transition-colors text-slate-200 hover:text-emerald-300 border-b border-emerald-500/10">
                    Financial Systems
                  </a>
                  <a href="#products-suite" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-emerald-600/20 transition-colors text-slate-200 hover:text-emerald-300 border-b border-emerald-500/10">
                    Telecom Systems
                  </a>
                  <a href="#products-suite" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-emerald-600/20 transition-colors text-slate-200 hover:text-emerald-300">
                    Public Sector Systems
                  </a>
                </div>
              )}
            </div>

            <a href="#portfolio-section" className="px-4 py-2 hover:text-cyan-400 transition-colors duration-200 rounded">
              PORTFOLIO
            </a>
            <a href="#products-suite" className="px-4 py-2 hover:text-cyan-400 transition-colors duration-200 rounded">
              CLIENTS
            </a>
          </div>

          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex items-center justify-center rounded-lg border border-white/10 bg-slate-900/80 p-2 text-slate-200 hover:bg-slate-800 hover:text-cyan-300 transition-colors duration-200"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          <div className="hidden md:block">
            <a
              href="#evaluation-form"
              className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-[10px] tracking-widest px-6 py-2.5 rounded-lg uppercase transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              CONTACT US ➔
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <div className="flex items-center justify-between px-4 py-2 text-xs text-slate-300 bg-slate-950/95 border-b border-white/10">
          <span>📞 +254 721 501 604</span>
          <a href="mailto:sivikontechnologies@gmail.com" className="text-cyan-400">Email Us</a>
        </div>
      </div>

      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${mobileMenuOpen ? 'max-h-[80rem]' : 'max-h-0'}`}>
        <div className="space-y-2 px-4 pb-4 pt-3 bg-slate-950/95 border-t border-emerald-500/20">
          <a href="#hero" onClick={handleMobileLinkClick} className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
            HOME
          </a>

          <div className="border-b border-slate-800 pb-3">
            <button
              onClick={() => toggleDropdown('about')}
              className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors"
              aria-expanded={openDropdown === 'about'}
            >
              ABOUT
              <svg className={`h-4 w-4 transition-transform ${openDropdown === 'about' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {openDropdown === 'about' && (
              <div className="mt-2 space-y-1 px-4">
                <a href="#about-section" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  WE ARE
                </a>
              </div>
            )}
          </div>

          <div className="border-b border-slate-800 pb-3">
            <button
              onClick={() => toggleDropdown('services')}
              className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors"
              aria-expanded={openDropdown === 'services'}
            >
              SERVICES
              <svg className={`h-4 w-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {openDropdown === 'services' && (
              <div className="mt-2 space-y-1 px-4">
                <a href="#services-section" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  Full-Stack Development
                </a>
                <a href="#services-section" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  Quality Assurance
                </a>
                <a href="#services-section" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  Cloud & Security
                </a>
              </div>
            )}
          </div>

          <div className="border-b border-slate-800 pb-3">
            <button
              onClick={() => toggleDropdown('products')}
              className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors"
              aria-expanded={openDropdown === 'products'}
            >
              PRODUCTS
              <svg className={`h-4 w-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {openDropdown === 'products' && (
              <div className="mt-2 space-y-1 px-4">
                <a href="#products-suite" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  Financial Systems
                </a>
                <a href="#products-suite" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  Telecom Systems
                </a>
                <a href="#products-suite" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  Public Sector Systems
                </a>
              </div>
            )}
          </div>

          <a href="#portfolio-section" onClick={handleMobileLinkClick} className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
            PORTFOLIO
          </a>
          <a href="#products-suite" onClick={handleMobileLinkClick} className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
            CLIENTS
          </a>
          <a href="#evaluation-form" onClick={handleMobileLinkClick} className="block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:from-cyan-400 hover:to-blue-400">
            CONTACT
          </a>
        </div>
      </div>
    </nav>
  );
}
