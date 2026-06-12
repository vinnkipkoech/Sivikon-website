import { Link } from 'react-router-dom';
import { clients } from '../data/siteData';

export default function Portfolio() {
  return (
    <>
      <header className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow"></div>
        <div className="container page-hero-inner">
          <span className="hero-eyebrow"><span className="hero-eyebrow-dot"></span>Portfolio</span>
          <h1 className="page-hero-title">Trusted by Leading <span className="accent">Organizations</span></h1>
          <p className="page-hero-sub">
            Our leadership team has delivered for major corporations, government bodies, and financial institutions. Here is a look at the work and customer case studies behind Sivikon.
          </p>
        </div>
      </header>

      <section id="clients">
        <div className="container">
          <div className="clients-header">
            <span className="section-eyebrow">Case Studies</span>
            <h2 className="section-title">Past Work & <span className="accent">Client Stories</span></h2>
            <p className="section-sub">Real engagements across fintech, telecoms, finance, and the public sector.</p>
          </div>
          <div className="clients-grid">
            {clients.map(([badge, name, work, desc]) => (
              <div className="client-card" key={name}>
                <div className="client-badge">{badge}</div>
                <div>
                  <div className="client-name">{name}</div>
                  <div className="client-work">{work}</div>
                  <div className="client-desc">{desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-inner">
          <h2 className="cta-title">Your Project Could Be <span className="accent">Next.</span></h2>
          <p className="cta-sub">Let's build and validate your next platform together. Get a free technical roadmap evaluation.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Get a Free Project Estimate {'->'}</Link>
            <Link to="/services" className="btn-ghost">Explore Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
