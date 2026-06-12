import { useState } from 'react';
import { Link } from 'react-router-dom';
import Ticker from '../components/Ticker';
import { heroSolutions, differenceCards, stats } from '../data/siteData';
import { postContactRequest } from '../api/client';

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
            We Don't Just Ship Code.<br />
            We Ship <span className="word-rotator-static">Bug-Free Software</span><br />
            That Scales.
          </h1>
          <p className="hero-sub">
            Sivikon Technologies builds enterprise-grade web applications, custom platforms, and automation tools using React, Tailwind CSS, and Python. Backed by expert QA engineering, we ensure your software is stable from day one.
          </p>
          <div className="hero-btns">
            <Link to="/contact" className="btn-primary">Get a Free Project Estimate {'->'}</Link>
            <a href="#bug-audit" className="btn-ghost">Claim a Free QA Bug Audit</a>
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

function SivikonDifference() {
  return (
    <section id="difference">
      <div className="container">
        <div className="solutions-header">
          <span className="section-eyebrow">The Sivikon Difference</span>
          <h2 className="section-title">Engineering You Can <span className="accent">Trust</span></h2>
          <p className="section-sub">Three principles that make our software stable, modern, and ready to grow with your business.</p>
        </div>
        <div className="difference-grid">
          {differenceCards.map(([title, desc, icon]) => (
            <div className="difference-card" key={title}>
              <div className="difference-icon">{icon}</div>
              <div className="difference-title">{title}</div>
              <div className="difference-desc">{desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BugAuditBanner() {
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await postContactRequest({
        type: 'qa-bug-audit',
        website,
        email,
        message: `Free 5-point QA audit request for ${website}`,
      });
      setStatus('success');
      setWebsite('');
      setEmail('');
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section id="bug-audit">
      <div className="audit-inner">
        <div className="audit-copy">
          <span className="section-eyebrow audit-eyebrow">Free Lead Magnet</span>
          <h2 className="audit-title">Claim Your Free 5-Point <span className="accent">QA Bug Audit</span></h2>
          <p className="audit-sub">
            Drop your company web link and email. Our QA engineers will run a 5-point structural audit and send you a report on stability, performance, and breaking-bug risks - completely free.
          </p>
        </div>
        {status === 'success' ? (
          <div className="audit-success">
            <div className="audit-success-icon">✓</div>
            <div>
              <div className="audit-success-title">Request received!</div>
              <div className="audit-success-text">Our team will email your 5-point QA audit report shortly.</div>
            </div>
          </div>
        ) : (
          <form className="audit-form" onSubmit={handleSubmit}>
            <input
              className="audit-input"
              type="url"
              required
              placeholder="https://yourcompany.com"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              aria-label="Company website link"
            />
            <input
              className="audit-input"
              type="email"
              required
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-label="Work email address"
            />
            <button className="btn-primary audit-btn" type="submit" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Sending…' : 'Get My Free Audit ->'}
            </button>
            {status === 'error' && <p className="audit-error">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />

      <section id="stats">
        <div className="stats-grid">
          {stats.map(([number, label]) => (
            <div className="stat-item" key={label}>
              <div className="stat-number">{number}</div>
              <div className="stat-label">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <SivikonDifference />
      <BugAuditBanner />
    </>
  );
}
