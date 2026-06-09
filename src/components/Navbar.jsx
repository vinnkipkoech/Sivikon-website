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
      {/* Informational Top Banner */}
      <div className="hidden md:flex items-center justify-between px-4 py-2 text-xs text-dark-400 bg-canvasDark/95 border-b border-white/5 backdrop-blur-xl">
        <div className="flex flex-wrap items-center gap-4">
          <span className="inline-flex items-center gap-2">📞 +254 721 501 604</span>
          <span className="inline-flex items-center gap-2">✉️ sivikontechnologies@gmail.com</span>
        </div>
        <div className="text-dark-500">Nairobi, Kenya — Serving Global Markets</div>
      </div>

      {/* Main Bar Navigation Layout */}
      <div className="bg-canvasDark/80 border-b border-white/5 backdrop-blur-md shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between gap-4">
          
          {/* Logo Branding */}
          <a href="#hero" className="flex items-center gap-3 text-white no-underline group">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 text-lg font-black text-white shadow-lg shadow-primary-500/20 group-hover:scale-105 transition-transform duration-200">
              S
            </span>
            <div className="flex flex-col leading-tight">
              <span className="text-sm font-black uppercase tracking-[0.3em] text-white">Sivikon</span>
              <span className="text-[10px] uppercase tracking-[0.35em] text-dark-400">Technologies</span>
            </div>
          </a>

          {/* Desktop Navigation Link Hub */}
          <div className="hidden md:flex items-center gap-1 text-sm font-semibold text-dark-200">
            <a href="#hero" className="px-4 py-2 rounded-lg hover:text-primary-400 transition-colors">Home</a>

            {/* Solutions Interactive Menu */}
            <div className="relative" onMouseEnter={() => setOpenDropdown('solutions')} onMouseLeave={closeDropdown}>
              <button
                onClick={() => toggleDropdown('solutions')}
                className="px-4 py-2 flex items-center gap-2 rounded-lg hover:text-primary-400 transition-colors"
              >
                Solutions
                <span className={`inline-block transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180 text-primary-400' : ''}`}>
                  ▾
                </span>
              </button>

              {openDropdown === 'solutions' && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-white/5 bg-dark-900/95 p-1.5 shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <a href="#products-suite" onClick={closeMobileMenu} className="block px-4 py-3 rounded-xl text-sm text-dark-200 hover:bg-primary-500/10 hover:text-primary-300 transition-colors">Education Platforms</a>
                  <a href="#products-suite" onClick={closeMobileMenu} className="block px-4 py-3 rounded-xl text-sm text-dark-200 hover:bg-primary-500/10 hover:text-primary-300 transition-colors">Healthcare Systems</a>
                  <a href="#products-suite" onClick={closeMobileMenu} className="block px-4 py-3 rounded-xl text-sm text-dark-200 hover:bg-primary-500/10 hover:text-primary-300 transition-colors">Finance & Public Sector</a>
                </div>
              )}
            </div>

            {/* Services Interactive Menu */}
            <div className="relative" onMouseEnter={() => setOpenDropdown('services')} onMouseLeave={closeDropdown}>
              <button
                onClick={() => toggleDropdown('services')}
                className="px-4 py-2 flex items-center gap-2 rounded-lg hover:text-primary-400 transition-colors"
              >
                Services
                <span className={`inline-block transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180 text-primary-400' : ''}`}>
                  ▾
                </span>
              </button>

              {openDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-72 rounded-2xl border border-white/5 bg-dark-900/95 p-1.5 shadow-2xl backdrop-blur-xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                  <a href="#services-section" onClick={closeMobileMenu} className="block px-4 py-3 rounded-xl text-sm text-dark-200 hover:bg-primary-500/10 hover:text-primary-300 transition-colors">Custom Software</a>
                  <a href="#services-section" onClick={closeMobileMenu} className="block px-4 py-3 rounded-xl text-sm text-dark-200 hover:bg-primary-500/10 hover:text-primary-300 transition-colors">QA & Testing</a>
                  <a href="#services-section" onClick={closeMobileMenu} className="block px-4 py-3 rounded-xl text-sm text-dark-200 hover:bg-primary-500/10 hover:text-primary-300 transition-colors">Cloud Operations</a>
                </div>
              )}
            </div>

            <a href="#portfolio-section" className="px-4 py-2 rounded-lg hover:text-primary-400 transition-colors">Portfolio</a>
            <a href="#about-section" className="px-4 py-2 rounded-lg hover:text-primary-400 transition-colors">About</a>
            <a href="#contact" className="px-4 py-2 rounded-lg hover:text-primary-400 transition-colors">Contact</a>
          </div>

          {/* Action CTA Button */}
          <div className="hidden md:block">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-primary-500/20 transition-all duration-200 transform hover:scale-[1.03] hover:from-primary-400 hover:to-primary-500"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Action Hamburger Toggle Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/5 bg-dark-900/60 text-dark-200 hover:bg-dark-800 hover:text-primary-400 transition-colors duration-200"
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

      {/* Responsive Mobile Drawer Menu */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-[80rem]' : 'max-h-0'}`}>
        <div className="space-y-2 px-4 pb-6 pt-3 bg-canvasDark/95 border-t border-white/5 shadow-inner backdrop-blur-xl">
          <a href="#hero" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 text-sm font-semibold text-dark-200 hover:bg-dark-900 hover:text-primary-400 transition-colors">
            Home
          </a>

          {/* Mobile Drops Contexts */}
          <div className="space-y-1 rounded-2xl border border-white/5 bg-dark-900/50 p-1">
            <button
              onClick={() => toggleDropdown('solutions')}
              className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-dark-200 hover:bg-dark-900 hover:text-primary-400 transition-colors"
            >
              Solutions
              <span className={`inline-block transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180 text-primary-400' : ''}`}>
                ▾
              </span>
            </button>
            {openDropdown === 'solutions' && (
              <div className="space-y-1 px-4 pb-2 pt-1">
                <a href="#products-suite" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-dark-400 hover:bg-dark-800 hover:text-primary-300 transition-colors">
                  Education Platforms
                </a>
                <a href="#products-suite" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-dark-400 hover:bg-dark-800 hover:text-primary-300 transition-colors">
                  Healthcare Systems
                </a>
                <a href="#products-suite" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-dark-400 hover:bg-dark-800 hover:text-primary-300 transition-colors">
                  Finance & Public Sector
                </a>
              </div>
            )}
          </div>

          <div className="space-y-1 rounded-2xl border border-white/5 bg-dark-900/50 p-1">
            <button
              onClick={() => toggleDropdown('services')}
              className="w-full flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-dark-200 hover:bg-dark-900 hover:text-primary-400 transition-colors"
            >
              Services
              <span className={`inline-block transition-transform duration-200 ${openDropdown === 'services' ? 'rotate-180 text-primary-400' : ''}`}>
                ▾
              </span>
            </button>
            {openDropdown === 'services' && (
              <div className="space-y-1 px-4 pb-2 pt-1">
                <a href="#services-section" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-dark-400 hover:bg-dark-800 hover:text-primary-300 transition-colors">
                  Custom Software
                </a>
                <a href="#services-section" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-dark-400 hover:bg-dark-800 hover:text-primary-300 transition-colors">
                  QA & Testing
                </a>
                <a href="#services-section" onClick={closeMobileMenu} className="block rounded-xl px-3 py-2.5 text-sm text-dark-400 hover:bg-dark-800 hover:text-primary-300 transition-colors">
                  Cloud Operations
                </a>
              </div>
            )}
          </div>

          <a href="#portfolio-section" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 text-sm font-semibold text-dark-200 hover:bg-dark-900 hover:text-primary-400 transition-colors">
            Portfolio
          </a>
          <a href="#about-section" onClick={closeMobileMenu} className="block rounded-xl px-4 py-3 text-sm font-semibold text-dark-200 hover:bg-dark-900 hover:text-primary-400 transition-colors">
            About
          </a>
          
          <div className="pt-2">
            <a href="#contact" onClick={closeMobileMenu} className="block rounded-xl bg-gradient-to-r from-primary-500 to-primary-600 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-primary-500/10 transition active:scale-[0.98]">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}