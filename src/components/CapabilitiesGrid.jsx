const coreCapabilities = [
  {
    icon: '🌐',
    title: 'Web Application Development',
    desc: 'Single-page applications, complex portals, and reactive front-ends with cross-device rendering, fluid animations, and SEO-optimized components.',
    tags: ['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'HTML5']
  },
  {
    icon: '⚙️',
    title: 'Backend, APIs & Cloud',
    desc: 'High-throughput async microservices, RESTful and GraphQL APIs with secure JWT token verification and automated middleware layers.',
    tags: ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth']
  },
  {
    icon: '🗄️',
    title: 'Database & Fleet Systems',
    desc: 'Fault-tolerant storage with high indexing speeds, real-time analytics pipelines, and car fleet management platform integrations.',
    tags: ['MongoDB', 'PostgreSQL', 'Mongoose ODM', 'Aggregations']
  },
  {
    icon: '🧪',
    title: 'QA & Automated Testing',
    desc: 'Self-healing automation systems for scalable parallel execution, regression cycles, and microservice schema enforcement with endpoint contract checks.',
    tags: ['Selenium', 'Playwright', 'Cypress', 'Postman']
  },
  {
    icon: '📱',
    title: 'Mobile Testing',
    desc: 'Comprehensive layout and functionality validation for iOS, Android, and hybrid systems across distinct engine builds and resolutions.',
    tags: ['Appium', 'Espresso', 'XCUITest', 'Detox']
  },
  {
    icon: '🛡️',
    title: 'Performance & Security',
    desc: 'Rigorous load testing, high-stress endurance runs, proactive vulnerability scans, credential leakage mapping, and penetration path audits.',
    tags: ['JMeter', 'K6', 'SonarQube', 'OWASP']
  }
];

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" className="bg-white py-[90px] px-[5%] font-sans text-left border-t border-[#E2E8F4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-14 gap-5">
          <div>
            <span className="inline-block text-[11.5px] font-bold tracking-[2px] uppercase text-[#1558D6] mb-3">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] leading-[1.1] tracking-[-1.5px]">
              Built for Speed,<br />
              <span className="text-[#1558D6]">Scale & Security</span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#6B7A99] max-w-[460px] leading-[1.75] font-normal">
            We build custom web, mobile, and backend cloud architectures engineered for elite performance, long-term scalability, and strict security compliance.
          </p>
        </div>

        {/* 6-Card Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coreCapabilities.map((item, index) => (
            <div 
              key={index} 
              className="group relative bg-white border border-[#E2E8F4] rounded-2xl p-8 transition-all duration-300 hover:border-[#1558D6]/30 hover:shadow-[0_8px_32px_rgba(21,88,214,0.08)] overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#1558D6] to-[#00C2FF] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F0F5FF] flex items-center justify-center text-xl mb-5 shrink-0">
                  {item.icon}
                </div>
                
                <h3 className="text-lg font-extrabold text-[#0A1628] mb-2.5">
                  {item.title}
                </h3>
                
                <p className="text-[13.5px] text-[#6B7A99] leading-relaxed mb-6 font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[#F0F5FF]">
                {item.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="text-[11px] font-semibold font-mono px-2.5 py-1 rounded bg-[#F0F5FF] text-[#1558D6] border border-[#E2E8F4]/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
