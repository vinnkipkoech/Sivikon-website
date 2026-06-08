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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-xl border-b border-blue-500/20 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo & Identity */}
        <div className="flex flex-col text-left">
          <span className="text-sm font-black text-white tracking-tight uppercase bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Sivikon
          </span>
          <span className="text-[9px] font-mono text-cyan-400 mt-0.5 tracking-wider font-bold">
            // TECH SOLUTIONS
          </span>
        </div>

        {/* Navigation Links with Dropdowns */}
        <div className="hidden md:flex items-center gap-1 text-[11px] font-bold text-slate-200">
          
          {/* Home Link */}
          <a href="#hero" className="px-4 py-2 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-lg rounded">
            HOME
          </a>

          {/* Services Dropdown */}
          <div className="relative group" onMouseEnter={() => openDropdownMenu('services')} onMouseLeave={closeDropdownMenu}>
            <button 
              onClick={() => toggleDropdown('services')}
              className="px-4 py-2 flex items-center gap-1 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-lg rounded group-hover:bg-white/5"
            >
              SERVICES
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'services' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {openDropdown === 'services' && (
              <div className="absolute top-full left-0 mt-0 w-48 bg-slate-900 border border-blue-500/30 rounded-lg shadow-2xl overflow-hidden">
                <a href="#services-section" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400 border-b border-blue-500/10">
                  Full-Stack Development
                </a>
                <a href="#services-section" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400 border-b border-blue-500/10">
                  Quality Assurance
                </a>
                <a href="#services-section" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400">
                  Cloud & Security
                </a>
              </div>
            )}
          </div>

          {/* Products Dropdown */}
          <div className="relative group" onMouseEnter={() => openDropdownMenu('products')} onMouseLeave={closeDropdownMenu}>
            <button 
              onClick={() => toggleDropdown('products')}
              className="px-4 py-2 flex items-center gap-1 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-lg rounded group-hover:bg-white/5"
            >
              PRODUCTS
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'products' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {openDropdown === 'products' && (
              <div className="absolute top-full left-0 mt-0 w-64 bg-slate-900 border border-blue-500/30 rounded-lg shadow-2xl overflow-hidden">
                <a href="#products-suite" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400 border-b border-blue-500/10">
                  <div className="font-bold">Enterprise Integration Suite</div>
                  <div className="text-xs text-slate-400">API-driven business workflows for scale.</div>
                </a>
                <a href="#products-suite" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400 border-b border-blue-500/10">
                  <div className="font-bold">QA & Release Automation</div>
                  <div className="text-xs text-slate-400">Reliable delivery pipelines built for enterprise.</div>
                </a>
                <a href="#products-suite" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400">
                  <div className="font-bold">Digital Experience Platform</div>
                  <div className="text-xs text-slate-400">Customer portals that perform under load.</div>
                </a>
              </div>
            )}
          </div>

          {/* Clients Dropdown */}
          <div className="relative group" onMouseEnter={() => openDropdownMenu('clients')} onMouseLeave={closeDropdownMenu}>
            <button 
              onClick={() => toggleDropdown('clients')}
              className="px-4 py-2 flex items-center gap-1 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-lg rounded group-hover:bg-white/5"
            >
              CLIENTS
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'clients' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {openDropdown === 'clients' && (
              <div className="absolute top-full left-0 mt-0 w-72 bg-slate-900 border border-blue-500/30 rounded-lg shadow-2xl overflow-hidden">
                <a href="#products-suite" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400 border-b border-blue-500/10">
                  <div className="font-bold">ABSA Bank Group</div>
                  <div className="text-xs text-slate-400">High-security payment integrations and core system testing.</div>
                </a>
                <a href="#products-suite" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400 border-b border-blue-500/10">
                  <div className="font-bold">MTECH Communications</div>
                  <div className="text-xs text-slate-400">High-volume mobile platforms and API infrastructure optimization.</div>
                </a>
                <a href="#products-suite" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400 border-b border-blue-500/10">
                  <div className="font-bold">Housing Finance Company (HFC)</div>
                  <div className="text-xs text-slate-400">Secure loan routing pipelines and transactional customer platforms.</div>
                </a>
                <a href="#products-suite" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400">
                  <div className="font-bold">County Government of Kericho</div>
                  <div className="text-xs text-slate-400">Public service automation and database consolidation programs.</div>
                </a>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div className="relative group" onMouseEnter={() => openDropdownMenu('company')} onMouseLeave={closeDropdownMenu}>
            <button 
              onClick={() => toggleDropdown('company')}
              className="px-4 py-2 flex items-center gap-1 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-lg rounded group-hover:bg-white/5"
            >
              COMPANY
              <svg className={`w-4 h-4 transition-transform ${openDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {openDropdown === 'company' && (
              <div className="absolute top-full right-0 mt-0 w-48 bg-slate-900 border border-blue-500/30 rounded-lg shadow-2xl overflow-hidden">
                <a href="#about-section" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400 border-b border-blue-500/10">
                  About Us
                </a>
                <a href="#portfolio-section" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400 border-b border-blue-500/10">
                  Case Studies
                </a>
                <a href="#" onClick={() => setOpenDropdown(null)} className="block px-4 py-3 hover:bg-blue-600/30 transition-colors text-slate-200 hover:text-cyan-400">
                  Blog & Resources
                </a>
              </div>
            )}
          </div>

          <a href="#portfolio-section" className="px-4 py-2 hover:text-cyan-400 transition-colors duration-200 hover:drop-shadow-lg rounded">
            PORTFOLIO
          </a>
        </div>

        {/* Mobile Toggle */}
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

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="#evaluation-form" 
            className="inline-flex items-center justify-center bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold text-[10px] tracking-widest px-6 py-2.5 rounded-lg uppercase transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
          >
            GET STARTED ➔
          </a>
        </div>

      </div>

      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ${mobileMenuOpen ? 'max-h-[80rem]' : 'max-h-0'}`}>
        <div className="space-y-2 px-4 pb-4 pt-3 bg-slate-950/95 border-t border-blue-500/20">
          <a href="#hero" onClick={handleMobileLinkClick} className="block rounded-lg px-4 py-3 text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
            HOME
          </a>

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
                  Enterprise Integration Suite
                </a>
                <a href="#products-suite" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  QA & Release Automation
                </a>
                <a href="#products-suite" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  Digital Experience Platform
                </a>
              </div>
            )}
          </div>

          <div className="border-b border-slate-800 pb-3">
            <button
              onClick={() => toggleDropdown('clients')}
              className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors"
              aria-expanded={openDropdown === 'clients'}
            >
              CLIENTS
              <svg className={`h-4 w-4 transition-transform ${openDropdown === 'clients' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {openDropdown === 'clients' && (
              <div className="mt-2 space-y-1 px-4">
                <a href="#products-suite" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  ABSA Bank Group
                </a>
                <a href="#products-suite" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  MTECH Communications
                </a>
                <a href="#products-suite" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  Housing Finance Company (HFC)
                </a>
                <a href="#products-suite" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  County Government of Kericho
                </a>
              </div>
            )}
          </div>

          <div className="border-b border-slate-800 pb-3">
            <button
              onClick={() => toggleDropdown('company')}
              className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-bold text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors"
              aria-expanded={openDropdown === 'company'}
            >
              COMPANY
              <svg className={`h-4 w-4 transition-transform ${openDropdown === 'company' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {openDropdown === 'company' && (
              <div className="mt-2 space-y-1 px-4">
                <a href="#about-section" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  About Us
                </a>
                <a href="#portfolio-section" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  Case Studies
                </a>
                <a href="#" onClick={handleMobileLinkClick} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-slate-900 hover:text-cyan-300 transition-colors">
                  Blog & Resources
                </a>
              </div>
            )}
          </div>

          <a href="#evaluation-form" onClick={handleMobileLinkClick} className="block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-4 py-3 text-center text-sm font-bold text-white transition hover:from-cyan-400 hover:to-blue-400">
            GET STARTED
          </a>
        </div>
      </div>
    </nav>
  );
}
