import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for clean header contrast updates
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((current) => !current);
    if (!mobileMenuOpen) {
      setOpenDropdown(null);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  // Explicitly mapped solution parameters from template profile
  const solutionsList = [
    { name: "Web Application Development", href: "#solutions" },
    { name: "Automated QA & Testing", href: "#solutions" },
    { name: "Cloud & API Infrastructure", href: "#solutions" },
    { name: "Database & Fleet Systems", href: "#solutions" },
    { name: "Mobile App Testing", href: "#solutions" },
    { name: "Security & Penetration Testing", href: "#solutions" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999]">
      {/* ── TOP INFORMATIONAL BANNER ── */}
      <div className="hidden md:flex items-center justify-between px-[5%] py-2 text-xs text-white/55 bg-navy border-b border-white/5 backdrop-blur-md">
        <div className="flex flex-wrap items-center gap-6 font-medium">
          <a href="tel:+254721501604" className="hover:text-cyanCustom transition-colors flex items-center gap-1.5">
            📞 +254 721 501 604
          </a>
          <a href="mailto:sivikontechnologies@gmail.com" className="hover:text-cyanCustom transition-colors flex items-center gap-1.5">
            ✉️ sivikontechnologies@gmail.com
          </a>
        </div>
        <div className="font-medium text-white/40">Nairobi, Kenya — Serving Global Markets</div>
      </div>

      {/* ── MAIN NAVIGATION BAR ── */}
      <div className={`h-[70px] px-[5%] flex items-center justify-between transition-all duration-200 border-b border-white/5 backdrop-blur-md ${scrolled ? 'bg-navy/95 shadow-lg' : 'bg-navy/90'}`}>
        
        {/* Logo Branding Vector */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline group">
          <div className="w-[38px] h-[38px] bg-gradient-to-br from-blueCustom to-cyanCustom rounded-xl flex items-center justify-center font-black text-white text-lg tracking-tighter group-hover:scale-105 transition-transform duration-200">
            S
          </div>
          <span className="text-white text-[17px] font-bold tracking-wide">
            Sivikon <span className="text-cyanCustom">Technologies</span>
          </span>
        </a>

        {/* Desktop Links Hub */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#hero" className="text-white/75 hover:text-cyanCustom text-sm font-medium transition-colors">Home</a>

          {/* Solutions Interactive Hover Menu */}
          <div className="relative group" onMouseEnter={() => setOpenDropdown('solutions')} onMouseLeave={closeDropdown}>
            <button
              onClick={() => toggleDropdown('solutions')}
              className="text-white/75 group-hover:text-cyanCustom text-sm font-medium transition-colors flex items-center gap-1.5 py-4 focus:outline-none"
            >
              Solutions
              <span className={`text-[10px] transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180 text-cyanCustom' : ''}`}>
                ▼
              </span>
            </button>

            {openDropdown === 'solutions' && (
              <div className="absolute top-full left-[-16px] bg-navy2 border border-white/10 rounded-xl py-2 min-w-[280px] shadow-2xl animate-in fade-in slide-in-from-top-2 duration-150">
                {solutionsList.map((sol, index) => (
                  <a
                    key={index}
                    href={sol.href}
                    onClick={closeMobileMenu}
                    className="block px-5 py-2.5 text-[13px] text-white/80 border-l-2 border-transparent hover:border-cyanCustom hover:text-cyanCustom hover:bg-cyanCustom/5 transition-all"
                  >
                    {sol.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#services" className="text-white/75 hover:text-cyanCustom text-sm font-medium transition-colors">Services</a>
          <a href="#solutions" className="text-white/75 hover:text-cyanCustom text-sm font-medium transition-colors">Capabilities</a>
          <a href="#clients" className="text-white/75 hover:text-cyanCustom text-sm font-medium transition-colors">Clients</a>
          
          <a 
            href="#cta" 
            className="bg-blueCustom hover:bg-blue2 text-white px-5 py-2 rounded-lg font-semibold text-[13.5px] transition-colors shadow-lg shadow-blueCustom/10"
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger Action Trigger */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col gap-1.5 cursor-pointer p-1.5 rounded-lg border border-white/10 bg-white/5 text-white focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <span className="text-xs font-bold px-1 text-cyanCustom font-mono">CLOSE</span>
          ) : (
            <>
              <span className="w-5 h-[2px] bg-white rounded-sm"></span>
              <span className="w-5 h-[2px] bg-white rounded-sm"></span>
              <span className="w-5 h-[2px] bg-white rounded-sm"></span>
            </>
          )}
        </button>
      </div>

      {/* ── RESPONSIVE MOBILE DRAWER SLIDEOUT ── */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-navy2 ${mobileMenuOpen ? 'max-h-[50rem] border-b border-white/10' : 'max-h-0'}`}>
        <div className="flex flex-col gap-1.5 p-5">
          <a href="#hero" onClick={closeMobileMenu} className="text-white/80 hover:text-cyanCustom py-2.5 text-sm font-medium border-b border-white/5">
            Home
          </a>

          {/* Interactive Mobile Expandable Accordion Track */}
          <div className="border-b border-white/5 py-1">
            <button
              onClick={() => toggleDropdown('solutions')}
              className="w-full flex items-center justify-between text-white/80 hover:text-cyanCustom py-2 text-sm font-medium focus:outline-none"
            >
              Solutions
              <span className={`text-[10px] transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180 text-cyanCustom' : ''}`}>
                ▼
              </span>
            </button>
            {openDropdown === 'solutions' && (
              <div className="bg-navy/50 rounded-xl my-1 p-2 space-y-1">
                {solutionsList.map((sol, idx) => (
                  <a
                    key={idx}
                    href={sol.href}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-xs text-white/60 hover:text-cyanCustom hover:bg-white/5"
                  >
                    {sol.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#services" onClick={closeMobileMenu} className="text-white/80 hover:text-cyanCustom py-2.5 text-sm font-medium border-b border-white/5">
            Services
          </a>
          <a href="#solutions" onClick={closeMobileMenu} className="text-white/80 hover:text-cyanCustom py-2.5 text-sm font-medium border-b border-white/5">
            Capabilities
          </a>
          <a href="#clients" onClick={closeMobileMenu} className="text-white/80 hover:text-cyanCustom py-2.5 text-sm font-medium border-b border-white/5">
            Clients
          </a>
          
          <div className="pt-4">
            <a 
              href="#cta" 
              onClick={closeMobileMenu} 
              className="block bg-blueCustom text-white text-center py-3 rounded-lg text-sm font-semibold shadow-md"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}