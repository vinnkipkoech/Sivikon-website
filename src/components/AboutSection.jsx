import React from 'react';

export default function AboutSection() {
  return (
    <section id="about-section" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50" />
      <div className="absolute inset-0 opacity-35" style={{
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><defs><pattern id="aboutpattern" width="80" height="80" patternUnits="userSpaceOnUse"><line x1="0" y1="0" x2="80" y2="80" stroke="rgba(59,130,246,0.18)" stroke-width="0.5"/><line x1="80" y1="0" x2="0" y2="80" stroke="rgba(59,130,246,0.18)" stroke-width="0.5"/><circle cx="40" cy="40" r="3" fill="rgba(34,211,238,0.28)"/></pattern></defs><rect width="100%" height="100%" fill="url(%23aboutpattern)"/></svg>')`,
        backgroundSize: '80px 80px'
      }} />
      <div className="absolute inset-0 bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:32px_32px] opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase bg-blue-100 border border-blue-300 px-4 py-2 rounded-full">
              CORPORATE COMPANY PROFILE
            </div>
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 uppercase leading-tight">
                Sivikon Technologies
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed font-medium max-w-3xl">
                Ensuring Quality. Delivering Trust. Building Innovation. Registered in 2024, Sivikon Technologies Limited is a premium provider of custom full-stack software engineering, end-to-end quality assurance, and advanced automated software testing services.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Registered Office & Contact</p>
                <p className="text-sm font-semibold text-slate-900">Sivikon Technologies Limited</p>
                <p className="text-sm text-slate-600 mt-3">Email: <a href="mailto:sivikontechnologies@gmail.com" className="text-cyan-600 hover:text-cyan-700">sivikontechnologies@gmail.com</a></p>
                <p className="text-sm text-slate-600">Phone: <a href="tel:+254721501604" className="text-cyan-600 hover:text-cyan-700">+254 721 501 604</a></p>
                <p className="text-sm text-slate-600">Location: Kenya (Serving Global Markets)</p>
              </div>
              <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-3">Integrated Digital Solutions</p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Custom full-stack software engineering, end-to-end quality assurance, and advanced automated software testing services for modern enterprises and teams scaling globally.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
              <div className="rounded-3xl bg-blue-950/95 border border-white/10 p-8">
                <p className="text-sm uppercase tracking-widest text-cyan-300 mb-3">About Us</p>
                <p className="text-slate-200 leading-relaxed">
                  Founded by seasoned software design visionaries and expert QA engineers, Sivikon Technologies was registered in 2024 as a comprehensive software development and premier quality assurance provider. We build high-performance digital ecosystems and deliver flawless product deployments that guarantee reliability, scalability, and absolute user satisfaction.
                </p>
              </div>
              <div className="rounded-3xl bg-slate-100 border border-slate-200 p-8">
                <p className="text-sm uppercase tracking-widest text-blue-600 mb-3">Document Control</p>
                <p className="text-sm text-slate-700"><span className="font-semibold">Version:</span> 2026.1</p>
                <p className="text-sm text-slate-700"><span className="font-semibold">Release Date:</span> June 2026</p>
                <p className="text-sm text-slate-700"><span className="font-semibold">Classification:</span> Commercial Profile</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-8">
            <div className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Our Mission</p>
              <p className="text-slate-700 leading-relaxed">
                To empower businesses with top-tier custom software development and exceptional quality assurance frameworks. We execute clean, modern software delivery that shortens time-to-market, minimizes overhead costs, and elevates the user experience through engineering excellence and technical domain expertise.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Our Vision</p>
              <p className="text-slate-700 leading-relaxed">
                To become a globally recognized leader in unified software creation and quality engineering ecosystem solutions, setting timeless industry benchmarks for innovation, bulletproof code compilation, and absolute professional transparency.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white/95 p-8 shadow-sm">
              <p className="text-xs uppercase tracking-widest text-slate-500 mb-3">Our Core Values</p>
              <ul className="space-y-4 text-slate-700 leading-relaxed">
                <li><span className="font-semibold">Quality First:</span> An unyielding, zero-compromise dedication to modern programming standards and flawless software execution metrics.</li>
                <li><span className="font-semibold">Continuous Innovation:</span> Actively adopting cutting-edge technologies, framework upgrades, and next-generation execution practices.</li>
                <li><span className="font-semibold">Client-Centric Success:</span> Nurturing structured, transparent partnerships focused on high returns on investment.</li>
                <li><span className="font-semibold">Integrity & Ethics:</span> Enforcing total transparency in engineering hours, software gaps, vulnerabilities, and project scopes.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
