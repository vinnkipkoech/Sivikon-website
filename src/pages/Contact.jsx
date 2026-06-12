import { useState } from 'react';
import { postContactRequest } from '../api/client';

const initialForm = { name: '', email: '', company: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const update = (field) => (event) => setForm((prev) => ({ ...prev, [field]: event.target.value }));

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus('submitting');
    setError('');
    try {
      await postContactRequest({ type: 'project-estimate', ...form });
      setStatus('success');
      setForm(initialForm);
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <>
      <header className="page-hero">
        <div className="hero-grid-bg"></div>
        <div className="hero-glow"></div>
        <div className="container page-hero-inner">
          <span className="hero-eyebrow"><span className="hero-eyebrow-dot"></span>Contact</span>
          <h1 className="page-hero-title">Get a Free Project <span className="accent">Estimate</span></h1>
          <p className="page-hero-sub">
            Tell us about your project and our engineering team will reply with a free technical roadmap evaluation. Prefer to talk? Call +254 721 501 604.
          </p>
        </div>
      </header>

      <section id="contact">
        <div className="container contact-layout">
          <div className="contact-info">
            <h2 className="section-title">Let's <span className="accent">Talk</span></h2>
            <p className="section-sub">We typically respond within one business day.</p>
            <div className="contact-detail">
              <div className="contact-detail-label">Email</div>
              <a href="mailto:Sivikontechnologies@gmail.com">Sivikontechnologies@gmail.com</a>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Phone</div>
              <a href="tel:+254721501604">+254 721 501 604</a>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">Location</div>
              <span>Nairobi, Kenya — Serving Global Markets</span>
            </div>
          </div>

          <div className="contact-form-wrap">
            {status === 'success' ? (
              <div className="audit-success contact-success">
                <div className="audit-success-icon">✓</div>
                <div>
                  <div className="audit-success-title">Message sent!</div>
                  <div className="audit-success-text">Thanks for reaching out — our team will be in touch shortly with your estimate.</div>
                </div>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <label className="contact-field">
                  <span>Full Name</span>
                  <input type="text" required value={form.name} onChange={update('name')} placeholder="Jane Doe" />
                </label>
                <label className="contact-field">
                  <span>Work Email</span>
                  <input type="email" required value={form.email} onChange={update('email')} placeholder="you@company.com" />
                </label>
                <label className="contact-field">
                  <span>Company</span>
                  <input type="text" value={form.company} onChange={update('company')} placeholder="Company name" />
                </label>
                <label className="contact-field">
                  <span>Project Details</span>
                  <textarea required rows={5} value={form.message} onChange={update('message')} placeholder="Tell us what you're building…" />
                </label>
                <button className="btn-primary" type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? 'Sending…' : 'Get My Free Estimate ->'}
                </button>
                {status === 'error' && <p className="audit-error">{error}</p>}
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
