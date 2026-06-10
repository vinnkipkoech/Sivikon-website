import { useEffect, useState } from 'react';

const heroSolutions = [
  ['Web Application Development', 'Full-Stack'],
  ['Automated QA & Testing', '50+ Tools'],
  ['Cloud & API Infrastructure', 'Scalable'],
  ['Database & Fleet Systems', 'Enterprise'],
  ['Mobile App Testing', 'iOS & Android'],
  ['Security & Penetration Testing', 'PCI DSS'],
];

const tickerItems = [
  'Web Application Development',
  'Automated QA Testing',
  'Backend APIs & Microservices',
  'Cloud Infrastructure',
  'Performance Engineering',
  'Security Testing',
  'Mobile App Testing',
  'Database Systems',
  'Regression Testing',
  'Fleet Management Integrations',
  'IT Consulting',
  'React.js & Node.js',
];

const pillars = [
  ['Web Application Development', 'Single-page applications, complex portals, and reactive front-ends with cross-device rendering, fluid animations, and SEO-optimized components.', ['React.js', 'JavaScript ES6+', 'Tailwind CSS', 'HTML5']],
  ['Backend, APIs & Cloud', 'High-throughput async microservices, RESTful and GraphQL APIs with secure JWT token verification and automated middleware layers.', ['Node.js', 'Express.js', 'RESTful APIs', 'JWT Auth']],
  ['Database & Fleet Systems', 'Fault-tolerant storage with high indexing speeds, real-time analytics pipelines, and car fleet management platform integrations.', ['MongoDB', 'PostgreSQL', 'Mongoose ODM', 'Aggregations']],
  ['QA & Automated Testing', 'Self-healing automation systems for scalable parallel execution, regression cycles, and microservice schema enforcement with endpoint contract checks.', ['Selenium', 'Playwright', 'Cypress', 'Postman']],
  ['Mobile Testing', 'Comprehensive layout and functionality validation for iOS, Android, and hybrid systems across distinct engine builds and resolutions.', ['Appium', 'Espresso', 'XCUITest', 'Detox']],
  ['Performance & Security', 'Rigorous load testing, high-stress endurance runs, proactive vulnerability scans, credential leakage mapping, and penetration path audits.', ['JMeter', 'K6', 'SonarQube', 'OWASP']],
];

const solutions = [
  ['Development', 'Custom Web Application', 'Full-stack web applications built with React, Node.js, and modern cloud infrastructure - fast, secure, and production-ready from day one.', 'dev'],
  ['QA & Testing', 'Automated Testing Suite', 'End-to-end automated test frameworks with self-healing scripts, parallel execution, and complete CI/CD pipeline integration.', 'qa'],
  ['Cloud & Data', 'API & Microservices Platform', 'Scalable RESTful and GraphQL APIs with async microservices, JWT auth, and automated middleware layers for enterprise-grade integrations.', 'cloud'],
  ['Security', 'Banking & Payment Systems', 'PCI DSS compliant payment gateways, banking application penetration sweeps, and high-security transactional consistency checks.', 'fin'],
  ['Cloud & Data', 'Database & Analytics System', 'Fault-tolerant MongoDB and PostgreSQL architectures with real-time data aggregation pipelines and performance analytics dashboards.', 'data'],
  ['QA & Testing', 'Mobile App QA & Testing', 'iOS and Android functional, UI, and regression testing using Appium, Espresso, XCUITest and Detox across all screen sizes and OS versions.', 'mobile'],
  ['QA & Testing', 'Regression Testing Cycles', 'Rapid verification pipelines that prevent newly deployed features from breaking existing systems - with zero-delay rollback detection.', 'qa'],
  ['Security', 'Security & Penetration Testing', 'Proactive vulnerability scanning, credential leakage mapping, and full penetration audit paths - HIPAA and PCI DSS compliant.', 'fin'],
  ['Cloud & Data', 'Performance & Load Testing', 'JMeter, Gatling, K6, and BlazeMeter-powered load simulations with high-stress endurance runs and volume limit push-point analysis.', 'cloud'],
];

const services = [
  ['Full-Stack Software Development', 'Custom web and backend applications built with modern frameworks. React front-ends, Node/Express APIs, database architecture, and cloud hosting - all production-hardened.'],
  ['Quality Assurance Engineering', 'Manual, automated, regression, API, and mobile testing across 50+ frameworks. We embed QA into your pipeline so bugs are caught at compile time, not production.'],
  ['Cloud & DevOps Infrastructure', 'CI/CD pipelines, containerized deployments, distributed cloud architectures, and automated infrastructure provisioning for zero-downtime releases.'],
  ['QA & Architecture Consulting', 'Strategic quality analysis, infrastructure mapping, tool selection, pipeline optimization, and complete technology training handoffs for your internal team.'],
  ['MVP & Product Development', 'Fixed-scope delivery plans tied to clear milestones. We take your product from concept to live in accelerated sprints - you pay after we build.'],
  ['Dedicated Engineering Teams', 'Full-time engineers embedded directly into your workflows. Scalable team setups with direct communication loops - ideal for long-term product roadmaps.'],
];

const industries = [
  ['Financial Services & Fintech', 'Banks, SACCOs, payment gateways'],
  ['Healthcare & Life Sciences', 'EHR, HIPAA, patient portals'],
  ['E-Commerce & Retail', 'High-traffic carts, stock systems'],
  ['SaaS & Enterprise Tech', 'Multi-tenant, cloud-native platforms'],
  ['Government & Public Sector', 'Service automation, databases'],
  ['Transport & Fleet', 'Asset mapping, real-time tracking'],
  ['Telecommunications', 'Mobile platforms, API optimization'],
  ['Startups & MVPs', 'Agile launches, fast iteration'],
];

const clients = [
  ['AB', 'ABSA Bank Group', 'Fintech · Security Testing', 'High-security payment integration architecture and comprehensive core banking system testing across multiple transactional layers.'],
  ['MT', 'MTECH Communications', 'Telecoms · API Engineering', 'High-volume mobile platform optimization and API infrastructure overhaul for improved throughput and uptime reliability.'],
  ['HF', 'Housing Finance Company (HFC)', 'Finance · Platform Development', 'Secure loan routing pipelines and transactional customer-facing platforms built for compliance and high availability.'],
  ['CG', 'County Government of Kericho', 'Government · Automation', 'Public service automation systems and database consolidation programs delivering efficiency gains across county operations.'],
];

const whyItems = [
  ['01 · SPEED', 'Reduced Time-to-Market', 'Parallel continuous integration loops with embedded QA cut delivery friction significantly - features ship faster, with fewer production rollbacks.'],
  ['02 · ROI', 'High Return on Investment', 'Catching logical flaws at compile time eliminates the enormous costs of production hotfixes - your roadmap budget goes further.'],
  ['03 · QUALITY', 'Architectural Inspections', 'Unique combination of code auditing, static line analysis, and automated assertions that surface structural vulnerabilities before they reach users.'],
  ['04 · TEAM', 'Elite Engineering Experience', 'Technical leads bring a minimum of 5+ years of production experience - from agile startup MVPs to Fortune 500 enterprise systems.'],
  ['05 · FLEX', 'Flexible Engagement Models', 'Dedicated teams, project-based delivery, or consulting retainers - we adapt to your workflows, timelines, and budget structure seamlessly.'],
  ['06 · TRUST', 'Total Transparency', 'Full visibility into engineering hours, software gaps, vulnerabilities, and project scope at every stage. No surprises, no hidden charges.'],
];

function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <a href="#hero" className="nav-logo" onClick={closeMobile}>
        <div className="nav-logo-icon">S</div>
        <span className="nav-logo-text">Sivikon <span>Technologies</span></span>
      </a>

      <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="nav-dropdown">
          <a href="#solutions" onClick={closeMobile}>Solutions</a>
          <div className="dropdown-menu">
            {['Web Application Development', 'Backend & APIs', 'Cloud Infrastructure', 'QA & Automated Testing', 'Mobile Testing', 'Security Testing', 'Performance Engineering', 'Database Systems', 'View All Solutions ->'].map((item) => (
              <a href="#solutions" onClick={closeMobile} key={item}>{item}</a>
            ))}
          </div>
        </div>
        <div className="nav-dropdown">
          <a href="#services" onClick={closeMobile}>Services</a>
          <div className="dropdown-menu">
            {['Full-Stack Development', 'Quality Assurance', 'Cloud & DevOps', 'IT Consulting'].map((item) => (
              <a href="#services" onClick={closeMobile} key={item}>{item}</a>
            ))}
          </div>
        </div>
        <a href="#industries" onClick={closeMobile}>Industries</a>
        <a href="#clients" onClick={closeMobile}>Clients</a>
        <a href="#why" onClick={closeMobile}>Why Sivikon</a>
        <a href="#cta" className="nav-cta" onClick={closeMobile}>Get Started</a>
      </div>

      <button className={`hamburger ${mobileOpen ? 'active' : ''}`} onClick={() => setMobileOpen((open) => !open)} aria-expanded={mobileOpen} aria-label="Toggle navigation menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}

function Hero() {
  return (
    <section id="hero">
      <div className="hero-grid-bg"></div>
      <div className="hero-glow"></div>
      <div className="hero-glow2"></div>
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow"><div className="hero-eyebrow-dot"></div>Kenya's Premier Software Engineering Partner</div>
          <h1 className="hero-headline">
            We Build Custom<br />Software That<br />
            <span className="word-rotator"><span className="word-rotator-inner"><span>Just Works.</span><span>Scales Up.</span><span>Ships Fast.</span></span></span>
          </h1>
          <p className="hero-sub">From full-stack web apps and cloud APIs to enterprise QA automation - Sivikon Technologies delivers bulletproof, scalable, and beautifully engineered digital solutions for startups to Fortune 500.</p>
          <div className="hero-btns">
            <a href="#solutions" className="btn-primary">Explore Solutions {'->'}</a>
            <a href="#cta" className="btn-ghost">Free Consultation</a>
          </div>
          <div className="hero-badges">
            {['Registered in Kenya', '2+ Years Experience', 'Global Clients', '50+ QA Tools'].map((badge) => (
              <div className="hero-badge" key={badge}>{badge}</div>
            ))}
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-card">
            <div className="hero-card-label">// Sivikon Solutions</div>
            <div className="hero-card-solutions">
              {heroSolutions.map(([name, tag]) => (
                <div className="hero-sol-item" key={name}>
                  <div className="hero-sol-name">{name}</div>
                  <div className="hero-sol-tag">{tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div className="ticker-item" key={`${item}-${index}`}>{item} <span className="ticker-dot"></span></div>
        ))}
      </div>
    </div>
  );
}

function Solutions() {
  const tabs = ['All Solutions', 'Development', 'QA & Testing', 'Cloud & Data', 'Security'];
  const [activeTab, setActiveTab] = useState('All Solutions');
  const visibleSolutions = activeTab === 'All Solutions' ? solutions : solutions.filter(([category]) => category === activeTab);

  return (
    <section id="solutions">
      <div className="container">
        <div className="solutions-header">
          <span className="section-eyebrow">Custom Software Solutions</span>
          <h2 className="section-title">What We <span className="accent">Build For You</span></h2>
          <p className="section-sub">Tailored software systems engineered to exact specifications - from MVPs to enterprise platforms. Click any solution to learn more.</p>
        </div>
        <div className="solutions-tabs">
          {tabs.map((tab) => <button className={`sol-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)} key={tab}>{tab}</button>)}
        </div>
        <div className="solutions-grid">
          {visibleSolutions.map(([category, title, desc, key]) => (
            <div className="sol-card" key={title}>
              <div className="sol-card-top">
                <span className={`sol-card-sector sector-${key}`}>{category === 'QA & Testing' ? 'QA' : category === 'Cloud & Data' ? (key === 'data' ? 'Data' : 'Cloud') : category}</span>
              </div>
              <div className="sol-card-title">{title}</div>
              <div className="sol-card-desc">{desc}</div>
              <a href="#cta" className="sol-card-link">Request This Solution {'->'}</a>
            </div>
          ))}
        </div>
        <div className="solutions-footer"><a href="#cta" className="btn-primary">View All Solutions & Request a Consultation {'->'}</a></div>
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Ticker />

      <section id="stats">
        <div className="stats-grid">
          {[
            ['50+', 'QA Tools Mastered'],
            ['5+', 'Years Avg. Team Experience'],
            ['4', 'Enterprise Clients Served'],
            ['100%', 'Client Satisfaction'],
          ].map(([number, label]) => <div className="stat-item" key={label}><div className="stat-number">{number}</div><div className="stat-label">{label}</div></div>)}
        </div>
      </section>

      <section id="what">
        <div className="container">
          <div className="what-header">
            <div><span className="section-eyebrow">Core Capabilities</span><h2 className="section-title">Built for Speed,<br /><span className="accent">Scale & Security</span></h2></div>
            <p className="section-sub">We build custom web, mobile, and backend cloud architectures engineered for elite performance, long-term scalability, and strict security compliance.</p>
          </div>
          <div className="pillars-grid">
            {pillars.map(([title, desc, tags]) => (
              <div className="pillar-card" key={title}>
                <div className="pillar-title">{title}</div>
                <div className="pillar-desc">{desc}</div>
                <div className="pillar-tags">{tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Solutions />

      <section id="services">
        <div className="container">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">End-to-End <span className="accent">Delivery</span></h2>
          <p className="section-sub">From initial discovery and architecture planning through to live deployment and ongoing support - complete digital engineering under one roof.</p>
          <div className="services-grid">
            {services.map(([title, desc]) => <div className="service-item" key={title}><div><div className="service-title">{title}</div><div className="service-desc">{desc}</div><a href="#cta" className="service-more">Learn more {'->'}</a></div></div>)}
          </div>
        </div>
      </section>

      <section id="industries">
        <div className="container">
          <span className="section-eyebrow">Industries We Serve</span>
          <h2 className="section-title">Serving Every <span>Sector</span></h2>
          <p className="section-sub">Our expertise spans regulated and high-growth industries across Kenya and global markets.</p>
          <div className="industries-grid">
            {industries.map(([name, sub]) => <div className="industry-item" key={name}><div className="industry-name">{name}</div><div className="industry-sub">{sub}</div></div>)}
          </div>
        </div>
      </section>

      <section id="clients">
        <div className="container">
          <div className="clients-header">
            <span className="section-eyebrow">Enterprise Clients</span>
            <h2 className="section-title">Trusted by <span className="accent">Leading Organizations</span></h2>
            <p className="section-sub">Our leadership team has delivered for major corporations, government bodies, and financial institutions.</p>
          </div>
          <div className="clients-grid">
            {clients.map(([badge, name, work, desc]) => <div className="client-card" key={name}><div className="client-badge">{badge}</div><div><div className="client-name">{name}</div><div className="client-work">{work}</div><div className="client-desc">{desc}</div></div></div>)}
          </div>
        </div>
      </section>

      <section id="why">
        <div className="container">
          <span className="section-eyebrow">The Sivikon Advantage</span>
          <h2 className="section-title">Why Teams Choose <span className="accent">Sivikon</span></h2>
          <p className="section-sub">We integrate development and QA under one roof - eliminating the gaps that kill timelines.</p>
          <div className="why-grid">
            {whyItems.map(([num, title, desc]) => <div className="why-item" key={num}><div className="why-num">{num}</div><div className="why-title">{title}</div><div className="why-desc">{desc}</div></div>)}
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-inner">
          <h2 className="cta-title">Let's Build & Validate <span className="accent">Together</span></h2>
          <p className="cta-sub">Whether you need to clear technical debt, launch a modern app from scratch, or scale your automated test coverage - Sivikon Technologies delivers world-class execution. Contact us for a free technical roadmap evaluation.</p>
          <div className="cta-btns"><a href="mailto:Sivikontechnologies@gmail.com" className="btn-primary">Start Your Project {'->'}</a><a href="tel:+254721501604" className="btn-wa">+254 721 501 604</a></div>
        </div>
      </section>

      <footer>
        <div className="footer-top">
          <div>
            <a href="#hero" className="footer-logo"><div className="footer-logo-icon">S</div><span className="footer-logo-name">Sivikon <span>Technologies</span></span></a>
            <p className="footer-about">Delivering premium full-stack software engineering and end-to-end quality assurance solutions for startups, enterprises, and government bodies across Kenya and global markets.</p>
            <div className="footer-contact-item">Kenya (Serving Global Markets)</div>
            <div className="footer-contact-item"><a href="tel:+254721501604">+254 721 501 604</a></div>
            <div className="footer-contact-item"><a href="mailto:Sivikontechnologies@gmail.com">Sivikontechnologies@gmail.com</a></div>
          </div>
          <div className="footer-col"><div className="footer-col-title">Solutions</div>{['Web App Development', 'Automated QA Testing', 'Backend & APIs', 'Cloud Infrastructure', 'Security Testing', 'Mobile Testing', 'Performance Engineering', 'Database Systems'].map((item) => <a href="#solutions" key={item}>{item}</a>)}</div>
          <div className="footer-col"><div className="footer-col-title">Services</div>{['Full-Stack Development', 'Quality Assurance', 'DevOps & Cloud', 'MVP Development', 'Dedicated Teams', 'QA Consulting'].map((item) => <a href="#services" key={item}>{item}</a>)}</div>
          <div className="footer-col"><div className="footer-col-title">Company</div><a href="#why">About Sivikon</a><a href="#clients">Our Clients</a><a href="#industries">Industries</a><a href="#cta">Get a Quote</a><a href="mailto:Sivikontechnologies@gmail.com">Contact Us</a></div>
        </div>
        <div className="footer-bottom"><div className="footer-copy">© 2026 Sivikon Technologies Limited. All rights reserved. Registered in Kenya.</div><div className="footer-reg">Ensuring Quality. Delivering Trust. Building Innovation.</div></div>
      </footer>
    </>
  );
}

export default App;
