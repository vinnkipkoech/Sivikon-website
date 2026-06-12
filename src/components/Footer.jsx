import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <div>
          <Link to="/" className="footer-logo">
            <div className="footer-logo-icon">S</div>
            <span className="footer-logo-name">Sivikon <span>Technologies</span></span>
          </Link>
          <p className="footer-about">Delivering premium full-stack software engineering and end-to-end quality assurance solutions for startups, enterprises, and government bodies across Kenya and global markets.</p>
          <div className="footer-contact-item">Kenya (Serving Global Markets)</div>
          <div className="footer-contact-item"><a href="tel:+254721501604">+254 721 501 604</a></div>
          <div className="footer-contact-item"><a href="mailto:Sivikontechnologies@gmail.com">Sivikontechnologies@gmail.com</a></div>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Services</div>
          {['Full-Stack Development', 'Quality Assurance', 'DevOps & Cloud', 'MVP Development', 'Dedicated Teams', 'QA Consulting'].map((item) => (
            <Link to="/services" key={item}>{item}</Link>
          ))}
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Company</div>
          <Link to="/about">About Sivikon</Link>
          <Link to="/about#why">Why Sivikon</Link>
          <Link to="/team">The Team</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
        <div className="footer-col">
          <div className="footer-col-title">Explore</div>
          <Link to="/">Home</Link>
          <Link to="/services">Solutions</Link>
          <Link to="/portfolio">Case Studies</Link>
          <Link to="/contact">Get a Quote</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-copy">© 2026 Sivikon Technologies Limited. All rights reserved. Registered in Kenya.</div>
        <div className="footer-reg">Ensuring Quality. Delivering Trust. Building Innovation.</div>
      </div>
    </footer>
  );
}
