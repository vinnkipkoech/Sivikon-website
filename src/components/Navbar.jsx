import React, { useState } from 'react';

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState('Home');
  const [activeDropdown, setActiveDropdown] = useState(null);

  const navigationItems = [
    { name: 'Home', targetId: 'top' },
    { name: 'About', targetId: 'about-section' },
    { name: 'Services', badge: 'Core', targetId: 'services-section', hasDropdown: true },
    { name: 'Clients', targetId: 'portfolio-section' },
    { name: 'Engagement', targetId: 'evaluation-form', hasDropdown: true }
  ];

  const servicesDropdownContent = [
    {
      category: "Core Engineering",
      items: [
        {
          title: "Software Development",
          desc: "Architecting rapid, production-ready client systems.",
          icon: (
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          )
        },
        {
          title: "Automated QA Verification",
          desc: "Building deep continuous test automation suites.",
          icon: (
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )
        }
      ]
    },
    {
      category: "Infrastructure & Trust",
      items: [
        {
          title: "Backend & Cloud Systems",
          desc: "Designing bulletproof high-throughput database APIs.",
          icon: (
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          )
        },
        {
          title: "Cybersecurity Frameworks",
          desc: "Implementing zero-trust access boundaries.",
          icon: (
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          )
        }
      ]
    }
  ];

  const handleNavigation = (itemName, targetId) => {
    setActiveMenu(itemName);
    setActiveDropdown(null);
    
    if (targetId === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <header id="top" className="w-full bg-white font-sans relative z-50 select-none border-b border-gray-200 shadow-sm">
      {/* Top Professional utility ribbon */}
      <div className="bg-slate-900 py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium text-slate-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="inline-block w-2 h-2 rounded-full bg-teal-400"></span>
              📧 sivikontechnologies@gmail.com
            </span>
          </div>
          <div className="text-[11px] font-mono tracking-wider text-slate-400 hidden sm:block">
            PREMIUM QUALITY ASSURANCE & SOFTWARE SOLUTIONS
          </div>
        </div>
      </div>

      {/* Main Corporate Navigation Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col items-center gap-4">
        
        {/* Modern Clean Branding Logo */}
        <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavigation('Home', 'top')}>
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-black text-xl shadow-md group-hover:bg-blue-700 transition-colors">
            ✓
          </div>
          <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
            <span className="font-black text-2xl tracking-tight text-slate-900 uppercase leading-none">
              Sivikon
            </span>
            <span className="text-[10px] text-blue-600 font-bold tracking-[0.2em] uppercase mt-1">
              TECHNOLOGIES
            </span>
          </div>
        </div>

        {/* Clean Center Navigation Strip */}
        <nav className="flex items-center justify-center bg-gray-100/80 border border-gray-200/60 rounded-full p-1 max-w-full">
          {navigationItems.map((item) => (
            <div 
              key={item.name} 
              className="relative"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                onClick={() => handleNavigation(item.name, item.targetId)}
                className={`px-5 py-2 text-xs font-bold uppercase tracking-wider rounded-full transition-all duration-200 flex items-center gap-1.5 cursor-pointer ${
                  activeMenu === item.name || activeDropdown === item.name
                    ? 'bg-blue-600 text-white shadow-md' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-white'
                }`}
              >
                {item.name}
                {item.hasDropdown && <span className="text-[8px]">▼</span>}
              </button>

              {/* Elegant Dropdown Panels */}
              {activeDropdown === 'Services' && item.name === 'Services' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[520px] bg-white border border-gray-200 rounded-2xl shadow-xl p-2 flex overflow-hidden text-left text-slate-800 divide-x divide-gray-100">
                  <div className="w-[160px] bg-slate-50 p-4 flex flex-col justify-between shrink-0">
                    <div>
                      <h4 className="text-xs font-black uppercase tracking-wider text-slate-900">Total Trust</h4>
                      <p className="text-[11px] text-slate-500 mt-2 leading-relaxed">Delivering comprehensive technology execution matrices.</p>
                    </div>
                  </div>

                  <div className="flex-1 p-3 grid grid-cols-1 gap-2 text-left">
                    {servicesDropdownContent.map((cat, cIdx) => (
                      <div key={cIdx} className="space-y-1">
                        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-2">// {cat.category}</div>
                        {cat.items.map((srv, sIdx) => (
                          <div key={sIdx} onClick={() => handleNavigation('Services', 'services-section')} className="group p-2 rounded-xl hover:bg-slate-50 flex items-start gap-3 transition-colors cursor-pointer">
                            <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                              {srv.icon}
                            </div>
                            <div className="flex flex-col">
                              <span className="text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{srv.title}</span>
                              <span className="text-[11px] text-slate-500 leading-tight mt-0.5">{srv.desc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeDropdown === 'Engagement' && item.name === 'Engagement' && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-xl p-1.5 text-left">
                  <button onClick={() => handleNavigation('Engagement', 'evaluation-form')} className="w-full text-left px-3 py-2 text-xs font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-lg transition-colors">
                    Technical Project Intake
                  </button>
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
}