import React from 'react';

export default function AboutSection() {
  return (
    <section id="services" className="relative py-24 px-[5%] overflow-hidden text-left bg-navy border-t border-white/5">
      <div className="absolute inset-0 opacity-[0.02] hero-grid-bg pointer-events-none" />
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(21,88,214,0.15)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(0,194,255,0.08)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Core Corporate Profile Details */}
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blueCustom/20 border border-blueCustom/40 text-cyanCustom text-xs font-semibold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full">
              CORPORATE COMPANY PROFILE
            </div>

            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl backdrop-blur-md">
                <p className="text-[11px] font-mono font-bold uppercase tracking-widest text-cyanCustom mb-3">// WE ARE</p>
                <p className="text-white/80 leading-relaxed font-medium text-sm md:text-base">
                  Sivikon Technologies is an enterprise software partner focused on secure, scalable digital transformation for government, finance, telecom, and institutional organizations. We combine regional market insight with disciplined delivery to build mission-critical systems that work in Africa.
                </p>
              </div>
              
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white uppercase leading-tight">
                Building Solutions for the <span className="bg-gradient-to-r from-cyanCustom to-blue2 bg-clip-text text-transparent">African Enterprise</span>
              </h2>
              <p className="text-base md:text-lg text-white/60 leading-relaxed font-normal max-w-3xl">
                Ensuring efficiency, trust, and digital resilience. Registered in 2024, Sivikon Technologies Limited delivers custom full-stack software engineering, enterprise quality assurance, and automation for organizations scaling across East Africa.
              </p>
            </div>

            {/* Metadata Contact Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md">
                <p className="text-[11px] font-bold uppercase tracking-widest text-cyanCustom mb-3">Registered Office & Contact</p>
                <p className="text-sm font-bold text-white">Sivikon Technologies Limited</p>
                <div className="mt-4 space-y-1.5 text-sm text-white/60 font-medium">
                  <p>Email: <a href="mailto:sivikontechnologies@gmail.com" className="text-cyanCustom hover:text-blue2 transition-colors">sivikontechnologies@gmail.com</a></p>
                  <p>Phone: <a href="tel:+254721501604" className="text-cyanCustom hover:text-blue2 transition-colors">+254 721 501 604</a></p>
                  <p className="text-xs text-white/40 mt-2 pt-2 border-t border-white/5">Presence: Kenya, East Africa, and global partners</p>
                </div>
              </div>
              
              <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md flex flex-col justify-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-cyanCustom mb-3">Integrated Digital Solutions</p>
                <p className="text-sm text-white/60 leading-relaxed font-medium">
                  Custom software engineering, end-to-end quality assurance, and automated testing for enterprise systems across education, healthcare, finance, government, and commerce.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-2xl bg-blueCustom/10 border border-blueCustom/20 p-6 backdrop-blur-md">
                <p className="text-[11px] font-bold uppercase tracking-widest text-cyanCustom mb-3">About Us</p>
                <p className="text-white/80 leading-relaxed text-sm font-medium">
                  Founded by seasoned software architects and QA specialists, Sivikon Technologies is a fast-growing enterprise partner for digital transformation. We build high-performance systems that deliver reliability, regional compliance, and measurable business results.
                </p>
              </div>
              
              <div className="rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur-md flex flex-col justify-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-white/40 mb-3">Document Control</p>
                <div className="space-y-1.5 text-sm text-white/60 font-medium">
                  <p><span className="text-white/40 font-normal">Version:</span> 2026.1</p>
                  <p><span className="text-white/40 font-normal">Release Date:</span> June 2026</p>
                  <p><span className="text-white/40 font-normal">Classification:</span> Commercial Profile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hand Corporate Pillars */}
          <div className="lg:col-span-5 space-y-6 w-full">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md group hover:border-cyanCustom/30 transition-colors duration-300">
              <p className="text-[11px] font-bold uppercase tracking-widest text-cyanCustom mb-2">Our Mission</p>
              <p className="text-white/70 leading-relaxed text-sm font-medium">
                To empower businesses with top-tier custom software development and exceptional quality assurance frameworks. We execute clean, modern software delivery that shortens time-to-market, minimizes overhead costs, and elevates the user experience through engineering excellence and technical domain expertise.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md group hover:border-cyanCustom/30 transition-colors duration-300">
              <p className="text-[11px] font-bold uppercase tracking-widest text-cyanCustom mb-2">Our Vision</p>
              <p className="text-white/70 leading-relaxed text-sm font-medium">
                To become a globally recognized leader in unified software creation and quality engineering ecosystem solutions, setting timeless industry benchmarks for innovation, bulletproof code compilation, and absolute professional transparency.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur-md group hover:border-cyanCustom/30 transition-colors duration-300">
              <p className="text-[11px] font-bold uppercase tracking-widest text-cyanCustom mb-3">Our Core Values</p>
              <ul className="space-y-3.5 text-sm text-white/70 leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-cyanCustom font-bold mt-0.5">▪</span>
                  <p><span className="text-white font-bold">Quality First:</span> An unyielding, zero-compromise dedication to modern programming standards and flawless software execution metrics.</p>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyanCustom font-bold mt-0.5">▪</span>
                  <p><span className="text-white font-bold">Continuous Innovation:</span> Actively adopting cutting-edge technologies, framework upgrades, and next-generation execution practices.</p>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyanCustom font-bold mt-0.5">▪</span>
                  <p><span className="text-white font-bold">Client-Centric Success:</span> Nurturing structured, transparent partnerships focused on high returns on investment.</p>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyanCustom font-bold mt-0.5">▪</span>
                  <p><span className="text-white font-bold">Integrity & Ethics:</span> Enforcing total transparency in engineering hours, software gaps, vulnerabilities, and project scopes.</p>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}