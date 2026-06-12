import { useState } from 'react';
import { Link } from 'react-router-dom';
import { pillars, solutions, services } from '../data/siteData';

function SolutionsExplorer() {
  const tabs = ['All Solutions', 'Development', 'QA & Testing', 'Cloud & Data', 'Security'];
  const [activeTab, setActiveTab] = useState('All Solutions');
  const visibleSolutions = activeTab === 'All Solutions'
    ? solutions
    : solutions.filter(([category]) => category === activeTab);

  return (
    <section id="solutions">
      <div className="container">
        <div className="solutions-header">
          <span className="section-eyebrow">Custom Software Solutions</span>
          <h2 className="section-title">What We <span className="accent">Build For You</span></h2>
          <p className="section-sub">Tailored software systems engineered to exact specifications - from MVPs to enterprise platforms.</p>
        </div>
        <div className="solutions-tabs">
          {tabs.map((tab) => (
            <button className={`sol-tab ${activeTab === tab ? 'active' : ''}`} onClick={() => setActiveTab(tab)} key={tab}>{tab}</button>
          ))}
        </div>
        <div className="solutions-grid">
          {visibleSolutions.map(([category, title, desc, key]) => (
            <div className="sol-card" key={title}>
              <div className="sol-card-top">
                <span className={`sol-card-sector sector-${key}`}>
                  {category === 'QA & Testing' ? 'QA' : category === 'Cloud & Data' ? (key === 'data' ? 'Data' : 'Cloud') : category}
                </span>
              </div>
              <div className="sol-card-title">{title}</div>
              <div className="sol-card-desc">{desc}</div>
              <Link to="/contact" className="sol-card-link">Request This Solution {'->'}</Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Services() {
  return (
    <>
      <header className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow"></div>
        <div className="container page-hero-inner">
          <span className="hero-eyebrow"><span className="hero-eyebrow-dot"></span>Services</span>
          <h1 className="page-hero-title">Core Engineering <span className="accent">Capabilities</span></h1>
          <p className="page-hero-sub">
            From initial discovery and architecture planning through to live deployment and ongoing support - complete digital engineering under one roof.
          </p>
        </div>
      </header>

      <section id="what">
        <div className="container">
          <div className="what-header">
            <div>
              <span className="section-eyebrow">Core Capabilities</span>
              <h2 className="section-title">Built for Speed,<br /><span className="accent">Scale & Security</span></h2>
            </div>
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

      <SolutionsExplorer />

      <section id="services">
        <div className="container">
          <span className="section-eyebrow">Our Services</span>
          <h2 className="section-title">End-to-End <span className="accent">Delivery</span></h2>
          <p className="section-sub">From discovery and architecture planning through to live deployment and ongoing support.</p>
          <div className="services-grid">
            {services.map(([title, desc]) => (
              <div className="service-item" key={title}>
                <div>
                  <div className="service-title">{title}</div>
                  <div className="service-desc">{desc}</div>
                  <Link to="/contact" className="service-more">Learn more {'->'}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-inner">
          <h2 className="cta-title">Let's Build & Validate <span className="accent">Together</span></h2>
          <p className="cta-sub">Whether you need to clear technical debt, launch a modern app, or scale your automated test coverage - Sivikon delivers world-class execution.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Get a Free Project Estimate {'->'}</Link>
            <Link to="/portfolio" className="btn-ghost">See Our Work</Link>
          </div>
        </div>
      </section>
    </>
  );
}
