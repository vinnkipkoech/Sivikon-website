import { Link } from 'react-router-dom';
import { team } from '../data/siteData';

export default function Team() {
  return (
    <>
      <header className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow"></div>
        <div className="container page-hero-inner">
          <span className="hero-eyebrow"><span className="hero-eyebrow-dot"></span>The Team</span>
          <h1 className="page-hero-title">The People Behind <span className="accent">The Code</span></h1>
          <p className="page-hero-sub">
            A multidisciplinary corporate structure of engineers, QA specialists, and delivery leads - backed by a trusted partner network that lets us scale into any language or domain.
          </p>
        </div>
      </header>

      <section id="team">
        <div className="container">
          <span className="section-eyebrow">Corporate Structure</span>
          <h2 className="section-title">How We're <span className="accent">Organized</span></h2>
          <p className="section-sub">Specialized guilds that collaborate on every engagement to keep delivery fast, transparent, and stable.</p>
          <div className="team-grid">
            {team.map(([badge, name, role, desc]) => (
              <div className="team-card" key={name}>
                <div className="team-badge">{badge}</div>
                <div className="team-name">{name}</div>
                <div className="team-role">{role}</div>
                <div className="team-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-inner">
          <h2 className="cta-title">Want a Dedicated <span className="accent">Engineering Team?</span></h2>
          <p className="cta-sub">We embed full-time engineers directly into your workflows. Let's talk about your roadmap.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Get a Free Project Estimate {'->'}</Link>
            <Link to="/services" className="btn-ghost">See Our Capabilities</Link>
          </div>
        </div>
      </section>
    </>
  );
}
