import { useState, useEffect } from 'react';

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll for clean header drop shadows
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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

  // Explicitly mapped solution parameters from corporate blueprint
  const solutionsList = [
    { name: "Web Application Development", href: "#capabilities" },
    { name: "Backend, APIs & Cloud Systems", href: "#capabilities" },
    { name: "Database & Fleet Integrations", href: "#capabilities" },
    { name: "QA & Automated Testing Services", href: "#capabilities" },
    { name: "Mobile App Layout Validation", href: "#capabilities" },
    { name: "Performance & Security Audits", href: "#capabilities" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-[999] font-sans">
      {/* ── TOP INFORMATIONAL BANNER ── */}
      <div className="hidden md:flex items-center justify-between px-[5%] py-2 text-xs text-white bg-[#0A1628]">
        <div className="flex flex-wrap items-center gap-6 font-medium">
          <a href="tel:+254721501604" className="hover:text-[#00C2FF] transition-colors flex items-center gap-1.5">
            📞 +254 721 501 604
          </a>
          <a href="mailto:sivikontechnologies@gmail.com" className="hover:text-[#00C2FF] transition-colors flex items-center gap-1.5">
            ✉️ sivikontechnologies@gmail.com
          </a>
        </div>
        <div className="font-medium text-white/50 tracking-wide">Nairobi, Kenya — Serving Global Markets</div>
      </div>

      {/* ── MAIN NAVIGATION BAR ── */}
      <div className={`h-[74px] px-[5%] flex items-center justify-between transition-all duration-200 border-b border-[#E2E8F4] bg-white/95 backdrop-blur-md ${scrolled ? 'shadow-md h-[70px]' : ''}`}>
        
        {/* Logo Branding Vector */}
        <a href="#hero" className="flex items-center gap-2.5 no-underline group">
          <div className="w-9 h-9 bg-gradient-to-br from-[#1558D6] to-[#1A6BFF] rounded-xl flex items-center justify-center font-black text-white text-base tracking-tighter group-hover:scale-105 transition-transform duration-200 shadow-sm">
            S
          </div>
          <span className="text-[#0A1628] text-[16.5px] font-black tracking-wide">
            Sivikon <span className="text-[#1558D6] font-extrabold">Technologies</span>
          </span>
        </a>

        {/* Desktop Links Hub */}
        <div className="hidden md:flex items-center gap-7">
          <a href="#hero" className="text-[#6B7A99] hover:text-[#1558D6] text-[14px] font-bold transition-colors">Home</a>

          {/* Solutions Interactive Hover Menu Container */}
          <div className="relative group" onMouseEnter={() => setOpenDropdown('solutions')} onMouseLeave={closeDropdown}>
            <button
              onClick={() => toggleDropdown('solutions')}
              className="text-[#6B7A99] group-hover:text-[#1558D6] text-[14px] font-bold transition-colors flex items-center gap-1 py-4 focus:outline-none cursor-pointer"
            >
              Capabilities
              <span className={`text-[9px] transition-transform duration-200 ml-0.5 ${openDropdown === 'solutions' ? 'rotate-180 text-[#1558D6]' : ''}`}>
                ▼
              </span>
            </button>

            {openDropdown === 'solutions' && (
              <div className="absolute top-full left-[-20px] bg-white border border-[#E2E8F4] rounded-xl py-2 min-w-[290px] shadow-xl animate-in fade-in slide-in-from-top-2 duration-150 text-left">
                {solutionsList.map((sol, index) => (
                  <a
                    key={index}
                    href={sol.href}
                    onClick={closeMobileMenu}
                    className="block px-5 py-2.5 text-[13px] text-[#6B7A99] font-medium border-l-2 border-transparent hover:border-[#1558D6] hover:text-[#1558D6] hover:bg-[#F0F5FF] transition-all"
                  >
                    {sol.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#why" className="text-[#6B7A99] hover:text-[#1558D6] text-[14px] font-bold transition-colors">Corporate Profile</a>
          <a href="#clients" className="text-[#6B7A99] hover:text-[#1558D6] text-[14px] font-bold transition-colors">Clients & Sectors</a>
          
          <a 
            href="#cta" 
            className="bg-gradient-to-br from-[#1558D6] to-[#1A6BFF] text-white px-5 py-2.5 rounded-lg font-bold text-[13px] uppercase tracking-wider transition-all shadow-md shadow-[#1558D6]/10 hover:-translate-y-0.5 cursor-pointer"
          >
            Project Intake
          </a>
        </div>

        {/* Mobile Hamburger Action Trigger */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden flex flex-col items-center justify-center cursor-pointer px-2.5 py-1.5 rounded-lg border border-[#E2E8F4] bg-[#F8FAFC] text-[#0A1628] focus:outline-none"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? (
            <span className="text-[11px] font-bold text-[#1558D6] font-mono tracking-wider">CLOSE</span>
          ) : (
            <div className="space-y-1">
              <span className="block w-5 h-[2px] bg-[#0A1628] rounded-sm"></span>
              <span className="block w-5 h-[2px] bg-[#0A1628] rounded-sm"></span>
              <span className="block w-5 h-[2px] bg-[#0A1628] rounded-sm"></span>
            </div>
          )}
        </button>
      </div>

      {/* ── RESPONSIVE MOBILE DRAWER SLIDEOUT ── */}
      <div className={`md:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-white border-x-0 ${mobileMenuOpen ? 'max-h-[50rem] border-b border-[#E2E8F4]' : 'max-h-0'}`}>
        <div className="flex flex-col text-left p-5 space-y-1">
          <a href="#hero" onClick={closeMobileMenu} className="text-[#6B7A99] hover:text-[#1558D6] py-2.5 text-sm font-bold border-b border-[#F0F5FF]">
            Home
          </a>

          {/* Interactive Mobile Expandable Accordion Track */}
          <div className="border-b border-[#F0F5FF] py-1">
            <button
              onClick={() => toggleDropdown('solutions')}
              className="w-full flex items-center justify-between text-[#6B7A99] hover:text-[#1558D6] py-2 text-sm font-bold focus:outline-none cursor-pointer"
            >
              Capabilities
              <span className={`text-[9px] transition-transform duration-200 ${openDropdown === 'solutions' ? 'rotate-180 text-[#1558D6]' : ''}`}>
                ▼
              </span>
            </button>
            {openDropdown === 'solutions' && (
              <div className="bg-[#F8FAFC] rounded-xl my-1.5 p-2 space-y-0.5 border border-[#E2E8F4]">
                {solutionsList.map((sol, idx) => (
                  <a
                    key={idx}
                    href={sol.href}
                    onClick={closeMobileMenu}
                    className="block rounded-lg px-3 py-2 text-[12.5px] text-[#6B7A99] font-medium hover:text-[#1558D6] hover:bg-[#F0F5FF]"
                  >
                    {sol.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="#why" onClick={closeMobileMenu} className="text-[#6B7A99] hover:text-[#1558D6] py-2.5 text-sm font-bold border-b border-[#F0F5FF]">
            Corporate Profile
          </a>
          <a href="#clients" onClick={closeMobileMenu} className="text-[#6B7A99] hover:text-[#1558D6] py-2.5 text-sm font-bold border-b border-[#F0F5FF]">
            Clients & Sectors
          </a>
          
          <div className="pt-4 pb-2">
            <a 
              href="#cta" 
              onClick={closeMobileMenu} 
              className="block bg-gradient-to-br from-[#1558D6] to-[#1A6BFF] text-white text-center py-3 rounded-lg text-xs font-bold uppercase tracking-wider shadow-sm"
            >
              Project Intake
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
