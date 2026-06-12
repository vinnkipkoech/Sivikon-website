import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const homeLinks = [
    { name: 'About Sivikon', to: '/about' },
    { name: 'Why Sivikon', to: '/about#why' },
    { name: 'The Team', to: '/team' },
  ];

  const serviceLinks = [
    'Full-Stack Development',
    'Quality Assurance',
    'Cloud & DevOps',
    'QA Consulting',
  ];

  return (
    <nav className={scrolled ? 'scrolled' : ''}>
      <Link to="/" className="nav-logo" onClick={closeMobile}>
        <div className="nav-logo-icon">S</div>
        <span className="nav-logo-text">Sivikon <span>Technologies</span></span>
      </Link>

      <div className={`nav-links ${mobileOpen ? 'mobile-open' : ''}`}>
        {/* Home interactive hover dropdown */}
        <div className="nav-dropdown">
          <NavLink to="/" end onClick={closeMobile}>Home</NavLink>
          <div className="dropdown-menu">
            {homeLinks.map((item) => (
              <Link to={item.to} onClick={closeMobile} key={item.name}>{item.name}</Link>
            ))}
          </div>
        </div>

        {/* Services interactive hover dropdown */}
        <div className="nav-dropdown">
          <NavLink to="/services" onClick={closeMobile}>Services</NavLink>
          <div className="dropdown-menu">
            {serviceLinks.map((item) => (
              <Link to="/services" onClick={closeMobile} key={item}>{item}</Link>
            ))}
          </div>
        </div>

        <NavLink to="/portfolio" onClick={closeMobile}>Portfolio</NavLink>
        <NavLink to="/about" onClick={closeMobile}>Why Sivikon</NavLink>
        <Link to="/contact" className="nav-cta" onClick={closeMobile}>Get Started</Link>
      </div>

      <button
        className={`hamburger ${mobileOpen ? 'active' : ''}`}
        onClick={() => setMobileOpen((open) => !open)}
        aria-expanded={mobileOpen}
        aria-label="Toggle navigation menu"
      >
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
