import React, { useState } from 'react';
import { postContactRequest } from '../api/client';

export default function EvaluationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    businessEmail: '',
    phoneNumber: '',
    serviceTrack: 'Software Development',
    projectScope: '',
    budget: 'Not Sure'
  });
  
  const [status, setStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const resetForm = () => {
    setFormData({
      companyName: '',
      contactPerson: '',
      businessEmail: '',
      phoneNumber: '',
      serviceTrack: 'Software Development',
      projectScope: '',
      budget: 'Not Sure'
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.companyName || !formData.contactPerson || !formData.businessEmail || !formData.projectScope) {
      setErrorMessage('Please fill out all required fields before submitting.');
      return;
    }

    setStatus('loading');

    try {
      await postContactRequest(formData);
      setStatus('success');
      resetForm();
    } catch (error) {
      setStatus('error');
      setErrorMessage(error.message || 'There was a problem submitting your request. Please try again.');
    }
  };

  return (
    <section id="evaluation-form" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-emerald-950 to-slate-900" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:32px_32px] opacity-15 pointer-events-none" />
      
      {/* Accent Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Side: Value Proposition */}
        <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24 text-white">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 border border-cyan-500/30 px-4 py-2 rounded-full backdrop-blur-sm">
            📋 GET IN TOUCH
          </div>

          <div>
            <h2 className="text-5xl font-black text-white tracking-tight uppercase leading-tight mb-6">
              Let's Transform Your Business
            </h2>
            <p className="text-lg text-slate-300 leading-relaxed mb-8">
              Ready to accelerate your digital transformation? Fill out this form and our team will review your requirements and reach out within 24 hours with a customized proposal.
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-4 pt-4">
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold text-lg flex-shrink-0 mt-1">✓</span>
              <div>
                <p className="font-bold text-white">Expert Review</p>
                <p className="text-sm text-slate-400">Our team will thoroughly review your requirements</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold text-lg flex-shrink-0 mt-1">✓</span>
              <div>
                <p className="font-bold text-white">Fast Response</p>
                <p className="text-sm text-slate-400">Receive a detailed proposal within 24 business hours</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold text-lg flex-shrink-0 mt-1">✓</span>
              <div>
                <p className="font-bold text-white">Confidential</p>
                <p className="text-sm text-slate-400">All information is protected under strict NDA</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-cyan-400 font-bold text-lg flex-shrink-0 mt-1">✓</span>
              <div>
                <p className="font-bold text-white">No Obligation</p>
                <p className="text-sm text-slate-400">This is completely free with no hidden commitments</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="pt-8 border-t border-white/10 space-y-3">
            <p className="text-sm text-slate-400">Prefer to call? Reach out directly:</p>
            <a href="tel:+254721501604" className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors">
              +254 721 501 604
            </a>
            <p className="text-sm text-slate-400">or email:</p>
            <a href="mailto:sivikontechnologies@gmail.com" className="text-cyan-400 font-bold hover:text-cyan-300 transition-colors break-all">
              sivikontechnologies@gmail.com
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 border border-white/10 rounded-2xl p-8 sm:p-10 backdrop-blur-xl">
            
            {status === 'success' ? (
              <div className="py-20 text-center space-y-6">
                <div className="text-6xl">✨</div>
                <h3 className="text-2xl font-black uppercase tracking-wider text-white">
                  Thank You!
                </h3>
                <p className="text-slate-300 leading-relaxed max-w-md mx-auto">
                  Your submission has been received. Our engineering team will review your requirements and contact you within 24 business hours with a customized proposal.
                </p>
                <div className="pt-4 text-sm text-slate-400">
                  Keep an eye on your inbox and phone for our response.
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Row 1: Company & Contact */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      Company Name *
                    </label>
                    <input 
                      type="text" 
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g., Acme Corporation" 
                      className="w-full bg-white/10 border border-white/20 hover:border-white/40 rounded-lg p-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-sm" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      Your Name *
                    </label>
                    <input 
                      type="text" 
                      value={formData.contactPerson}
                      onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                      placeholder="Full name" 
                      className="w-full bg-white/10 border border-white/20 hover:border-white/40 rounded-lg p-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-sm" 
                    />
                  </div>
                </div>

                {/* Row 2: Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      Business Email *
                    </label>
                    <input 
                      type="email" 
                      value={formData.businessEmail}
                      onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                      placeholder="you@company.com" 
                      className="w-full bg-white/10 border border-white/20 hover:border-white/40 rounded-lg p-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-sm" 
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="+254 XXX XXX XXX" 
                      className="w-full bg-white/10 border border-white/20 hover:border-white/40 rounded-lg p-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-sm" 
                    />
                  </div>
                </div>

                {/* Row 3: Service Track & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      Service Track
                    </label>
                    <select
                      value={formData.serviceTrack}
                      onChange={(e) => setFormData({ ...formData, serviceTrack: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 hover:border-white/40 rounded-lg p-3.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-sm cursor-pointer"
                    >
                      <option value="Software Development" className="bg-slate-900">Full-Stack Development</option>
                      <option value="Quality Assurance" className="bg-slate-900">QA & Testing</option>
                      <option value="Cloud Infrastructure" className="bg-slate-900">Cloud & Infrastructure</option>
                      <option value="Custom Solution" className="bg-slate-900">Custom Solution</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">
                      Project Budget Range
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full bg-white/10 border border-white/20 hover:border-white/40 rounded-lg p-3.5 text-sm text-white focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all backdrop-blur-sm cursor-pointer"
                    >
                      <option value="Not Sure" className="bg-slate-900">Not Sure Yet</option>
                      <option value="Under $10K" className="bg-slate-900">Under $10K</option>
                      <option value="$10K - $50K" className="bg-slate-900">$10K - $50K</option>
                      <option value="$50K - $100K" className="bg-slate-900">$50K - $100K</option>
                      <option value="$100K+" className="bg-slate-900">$100K+</option>
                    </select>
                  </div>
                </div>

                {/* Project Details */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold text-cyan-400 uppercase tracking-widest">
                    Project Details & Requirements *
                  </label>
                  <textarea 
                    rows="6" 
                    value={formData.projectScope}
                    onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                    placeholder="Tell us about your project: What are you trying to achieve? What are your timelines? Any specific technologies or challenges we should know about?" 
                    className="w-full bg-white/10 border border-white/20 hover:border-white/40 rounded-lg p-3.5 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-none leading-relaxed backdrop-blur-sm"
                  ></textarea>
                </div>

                {/* Submit Button */}
                {status === 'error' && (
                  <div className="rounded-2xl border border-rose-500/20 bg-rose-500/10 text-rose-100 p-4 text-sm">
                    {errorMessage}
                  </div>
                )}

                <button 
                  type="submit" 
                  disabled={status === 'loading'}
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold text-sm py-4 rounded-lg uppercase tracking-widest transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-emerald-500/50 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {status === 'loading' ? 'SUBMITTING...' : 'SUBMIT REQUEST ➔'}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  We respect your privacy. No spam, ever.
                </p>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}