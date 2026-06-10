export default function Clients() {
  const trustedClients = [
    { name: 'ABSA Bank Group', department: 'Payment Integration & QA Automation' },
    { name: 'MTECH Communications', department: 'High-Volume API Infrastructure' },
    { name: 'Housing Finance Company (HFC)', department: 'Transactional Loan Systems' },
    { name: 'County Government of Kericho', department: 'Public Service Automation Systems' },
    { name: 'Redemptive Light Church', department: 'Modern Platform Deployment' },
    { name: 'Kenya Urban Support Program', department: 'Multi-Department Data Consolidation' }
  ];

  const industries = [
    { name: 'Government Systems', label: 'Citizen portals, departmental dashboards, and public service automation.' },
    { name: 'Healthcare HMIS', label: 'Integrated patient records, clinical workflows, and secure medical billing.' },
    { name: 'Financial Infrastructure', label: 'High-security transaction routing, core payment APIs, and compliance tools.' },
    { name: 'Telecom & Corporate', label: 'Distributed API optimizations, message routing backbones, and fleet management.' }
  ];

  const testimonials = [
    {
      quote: 'Sivikon delivered a modern, secure platform on schedule and kept our project transparent at every step.',
      name: 'Juliane Vorster',
      title: 'Communications Head, Redemptive Light Church'
    },
    {
      quote: 'Their proactive design and enterprise-grade implementation helped us scale quickly while staying compliant.',
      name: 'Dedan Otiato',
      title: 'Engineer, Varde Engineering Co. LTD'
    },
    {
      quote: 'The team understood our complex business needs and built a highly reliable system that improved our operations.',
      name: 'K. Njoroge',
      title: 'Operations Director'
    }
  ];

  return (
    <section id="clients" className="bg-[#F8FAFC] py-[90px] px-[5%] font-sans text-left border-t border-[#E2E8F4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <span className="inline-block text-[11.5px] font-bold tracking-[2px] uppercase text-[#1558D6] mb-3">
            Industries We Serve
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] leading-[1.1] tracking-[-1.5px]">
            Built for High-Compliance Sectors
          </h2>
          <p className="text-sm sm:text-base text-[#6B7A99] mt-4 leading-[1.75] font-normal max-w-2xl">
            We deliver highly scalable enterprise solutions that organizations trust for mission-critical workflows, automated data normalization, and digital growth across core sectors.
          </p>
        </div>

        {/* Industries Core Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {industries.map((industry, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl border border-[#E2E8F4] p-6 shadow-sm transition-all duration-300 hover:border-[#1558D6]/30 hover:shadow-md"
            >
              <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#1558D6] mb-2.5">
                // {industry.name}
              </div>
              <p className="text-[13px] text-[#6B7A99] font-normal leading-relaxed">
                {industry.label}
              </p>
            </div>
          ))}
        </div>

        {/* Strategic Focus Banner */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="rounded-2xl bg-[#0A1628] text-white p-8 md:p-10 shadow-xl text-center">
            <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#00C2FF] mb-3 block">
              // Partners in Digital Transformation
            </span>
            <h3 className="text-xl sm:text-2xl font-black tracking-tight mb-3">
              Enterprise Ecosystems Built for African Operations
            </h3>
            <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl mx-auto font-normal">
              From automated regression engines to transactional customer web applications, we engineer stable architectures built around modern usability frameworks.
            </p>
          </div>
        </div>

        {/* Corporate Client Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-16">
          {trustedClients.map((client, idx) => (
            <div 
              key={idx} 
              className="group bg-white rounded-xl border border-[#E2E8F4] p-5 transition-all duration-300 hover:border-[#1558D6]/30 hover:shadow-[0_4px_20px_rgba(21,88,214,0.05)] flex flex-col justify-center min-h-[84px]"
            >
              <div className="text-sm font-extrabold text-[#0A1628] group-hover:text-[#1558D6] transition-colors duration-200">
                {client.name}
              </div>
              <div className="text-[10px] font-semibold font-mono tracking-wide uppercase text-[#6B7A99] mt-1">
                {client.department}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl border border-[#E2E8F4] p-8 shadow-sm flex flex-col justify-between transition-all duration-300 hover:border-[#1558D6]/20"
            >
              <p className="text-sm text-[#6B7A99] leading-relaxed font-normal italic">
                “{item.quote}”
              </p>
              <div className="mt-6 pt-4 border-t border-[#F0F5FF]">
                <div className="text-sm font-extrabold text-[#0A1628]">
                  {item.name}
                </div>
                <div className="text-[10.5px] font-bold uppercase tracking-wider text-[#1558D6] mt-1 font-mono">
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
