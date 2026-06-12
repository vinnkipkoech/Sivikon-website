import { Link } from 'react-router-dom';
import { whyItems, industries } from '../data/siteData';

export default function About() {
  return (
    <>
      <header className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow"></div>
        <div className="container page-hero-inner">
          <span className="hero-eyebrow"><span className="hero-eyebrow-dot"></span>About Sivikon</span>
          <h1 className="page-hero-title">Software Engineering, <span className="accent">Done Right.</span></h1>
          <p className="page-hero-sub">
            Sivikon Technologies is a Kenyan software engineering firm serving global markets. We unite full-stack development and quality assurance under one roof so the software we ship is stable, scalable, and built to last.
          </p>
        </div>
      </header>

      <section id="about">
        <div className="container">
          <span className="section-eyebrow">About Sivikon</span>
          <h2 className="section-title">Who <span className="accent">We Are</span></h2>
          <p className="section-sub about-lead">
            We are a team of engineers and QA specialists obsessed with structural stability. From MVPs for ambitious startups to enterprise platforms for banks and government bodies, we deliver bulletproof, beautifully engineered digital solutions - and we embed quality into every stage of the build.
          </p>
          <div className="about-grid">
            <div className="about-stat-card">
              <div className="about-stat-num">Mission</div>
              <p>Ensuring quality, delivering trust, and building innovation for every client we partner with.</p>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-num">Approach</div>
              <p>QA-first engineering on a modern stack - React, Tailwind, Node, and Python - with elastic scaling on demand.</p>
            </div>
            <div className="about-stat-card">
              <div className="about-stat-num">Reach</div>
              <p>Registered in Kenya, serving startups, enterprises, and government bodies across global markets.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="why">
        <div className="container">
          <span className="section-eyebrow">The Sivikon Advantage</span>
          <h2 className="section-title">Why Teams Choose <span className="accent">Sivikon</span></h2>
          <p className="section-sub">We integrate development and QA under one roof - eliminating the gaps that kill timelines.</p>
          <div className="why-grid">
            {whyItems.map(([num, title, desc]) => (
              <div className="why-item" key={num}>
                <div className="why-num">{num}</div>
                <div className="why-title">{title}</div>
                <div className="why-desc">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="industries">
        <div className="container">
          <span className="section-eyebrow">Industries We Serve</span>
          <h2 className="section-title">Serving Every <span>Sector</span></h2>
          <p className="section-sub">Our expertise spans regulated and high-growth industries across Kenya and global markets.</p>
          <div className="industries-grid">
            {industries.map(([name, sub]) => (
              <div className="industry-item" key={name}>
                <div className="industry-name">{name}</div>
                <div className="industry-sub">{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cta">
        <div className="cta-inner">
          <h2 className="cta-title">Ready to Build Something <span className="accent">Solid?</span></h2>
          <p className="cta-sub">Tell us about your project and get a free technical roadmap evaluation from our engineering team.</p>
          <div className="cta-btns">
            <Link to="/contact" className="btn-primary">Get a Free Project Estimate {'->'}</Link>
            <Link to="/team" className="btn-ghost">Meet the Team</Link>
          </div>
        </div>
      </section>
    </>
  );
}
