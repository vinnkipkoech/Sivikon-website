import React from 'react';

export default function AboutSection() {
  return (
    <section id="about-section" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left bg-canvasDark">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-primary-600/5 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-[-10%] w-[400px] h-[400px] bg-primary-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Profile & Context */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-primary-400 uppercase bg-primary-500/10 border border-primary-500/20 px-4 py-2 rounded-full backdrop-blur-md">
              CORPORATE COMPANY PROFILE
            </div>

            <div className="space-y-6">
              {/* Highlight Intro Box */}
              <div className="rounded-3xl border border-white/5 bg-dark-900/40 p-8 shadow-2xl backdrop-blur-xl">
                <p className="text-xs font-mono font-bold uppercase tracking-widest text-primary-400 mb-4">// WE ARE</p>
                <p className="text-dark-200 leading-relaxed font-medium">
                  Sivikon Technologies is an enterprise software partner focused on secure, scalable digital transformation for government, finance, telecom, and institutional organizations. We combine regional market insight with disciplined delivery to build mission-critical systems that work in Africa.
                </p>
              </div>
              
              <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white uppercase leading-tight">
                Building Solutions for the African Enterprise
              </h2>
              <p className="text-lg text-dark-300 leading-relaxed font-medium max-w-3xl">
                Ensuring efficiency, trust, and digital resilience. Registered in 2024, Sivikon Technologies Limited delivers custom full-stack software engineering, enterprise quality assurance, and automation for organizations scaling across East Africa.
              </p>
            </div>

            {/* Information Grid Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-white/5 bg-dark-900/30 p-6 shadow-2xl backdrop-blur-xl">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary-400 mb-3">Registered Office & Contact</p>
                <p className="text-sm font-bold text-white">Sivikon Technologies Limited</p>
                <div className="mt-4 space-y-1.5 text-sm text-dark-300 font-medium">
                  <p>Email: <a href="mailto:sivikontechnologies@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">sivikontechnologies@gmail.com</a></p>
                  <p>Phone: <a href="tel:+254721501604" className="text-primary-400 hover:text-primary-300 transition-colors">+254 721 501 604</a></p>
                  <p className="text-xs text-dark-400 mt-2 pt-2 border-t border-white/5">Presence: Kenya, East Africa, and global partners</p>
                </div>
              </div>
              
              <div className="rounded-3xl border border-white/5 bg-dark-900/30 p-6 shadow-2xl backdrop-blur-xl flex flex-col justify-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary-400 mb-3">Integrated Digital Solutions</p>
                <p className="text-sm text-dark-300 leading-relaxed font-medium">
                  Custom software engineering, end-to-end quality assurance, and automated testing for enterprise systems across education, healthcare, finance, government, and commerce.
                </p>
              </div>
            </div>

            {/* Information Grid Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="rounded-3xl bg-primary-950/20 border border-primary-500/10 p-8 backdrop-blur-xl">
                <p className="text-[11px] font-bold uppercase tracking-widest text-primary-400 mb-3">About Us</p>
                <p className="text-dark-200 leading-relaxed text-sm font-medium">
                  Founded by seasoned software architects and QA specialists, Sivikon Technologies is a fast-growing enterprise partner for digital transformation. We build high-performance systems that deliver reliability, regional compliance, and measurable business results.
                </p>
              </div>
              
              <div className="rounded-3xl bg-dark-900/20 border border-white/5 p-8 backdrop-blur-xl flex flex-col justify-center">
                <p className="text-[11px] font-bold uppercase tracking-widest text-dark-400 mb-4">Document Control</p>
                <div className="space-y-2 text-sm text-dark-300 font-medium">
                  <p><span className="text-dark-500 font-normal">Version:</span> 2026.1</p>
                  <p><span className="text-dark-500 font-normal">Release Date:</span> June 2026</p>
                  <p><span className="text-dark-500 font-normal">Classification:</span> Commercial Profile</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Pillars (Mission, Vision, Values) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Mission Box */}
            <div className="rounded-3xl border border-white/5 bg-dark-900/40 p-8 shadow-xl backdrop-blur-xl group hover:border-primary-500/20 transition-colors duration-300">
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary-400 mb-3">Our Mission</p>
              <p className="text-dark-300 leading-relaxed text-sm font-medium">
                To empower businesses with top-tier custom software development and exceptional quality assurance frameworks. We execute clean, modern software delivery that shortens time-to-market, minimizes overhead costs, and elevates the user experience through engineering excellence and technical domain expertise.
              </p>
            </div>

            {/* Vision Box */}
            <div className="rounded-3xl border border-white/5 bg-dark-900/40 p-8 shadow-xl backdrop-blur-xl group hover:border-primary-500/20 transition-colors duration-300">
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary-400 mb-3">Our Vision</p>
              <p className="text-dark-300 leading-relaxed text-sm font-medium">
                To become a globally recognized leader in unified software creation and quality engineering ecosystem solutions, setting timeless industry benchmarks for innovation, bulletproof code compilation, and absolute professional transparency.
              </p>
            </div>

            {/* Values Box */}
            <div className="rounded-3xl border border-white/5 bg-dark-900/40 p-8 shadow-xl backdrop-blur-xl group hover:border-primary-500/20 transition-colors duration-300">
              <p className="text-[11px] font-bold uppercase tracking-widest text-primary-400 mb-4">Our Core Values</p>
              <ul className="space-y-4 text-sm text-dark-300 leading-relaxed font-medium">
                <li className="flex items-start gap-2.5">
                  <span className="text-primary-400 font-bold mt-0.5">▪</span>
                  <p><span className="text-white font-bold">Quality First:</span> An unyielding, zero-compromise dedication to modern programming standards and flawless software execution metrics.</p>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary-400 font-bold mt-0.5">▪</span>
                  <p><span className="text-white font-bold">Continuous Innovation:</span> Actively adopting cutting-edge technologies, framework upgrades, and next-generation execution practices.</p>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary-400 font-bold mt-0.5">▪</span>
                  <p><span className="text-white font-bold">Client-Centric Success:</span> Nurturing structured, transparent partnerships focused on high returns on investment.</p>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-primary-400 font-bold mt-0.5">▪</span>
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