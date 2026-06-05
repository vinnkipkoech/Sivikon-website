import React, { useState } from 'react';

export default function EvaluationForm() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactPerson: '',
    businessEmail: '',
    serviceTrack: 'Software Development',
    projectScope: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.companyName || !formData.contactPerson || !formData.businessEmail || !formData.projectScope) {
      alert("Please fill out all engineering intake fields before submitting.");
      return;
    }
    
    // Simulate professional corporate submission handshake
    setSubmitted(true);
    
    // Auto-reset state message after 7 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        companyName: '',
        contactPerson: '',
        businessEmail: '',
        serviceTrack: 'Software Development',
        projectScope: ''
      });
    }, 7000);
  };

  return (
    <section id="evaluation-form" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-200 text-slate-900">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs text-blue-600 font-bold tracking-widest uppercase bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            // Technical Project Intake
          </span>
          <h2 className="text-3xl font-black text-slate-900 tracking-tight mt-4 uppercase">
            Request Service Engagement
          </h2>
          <p className="text-sm text-slate-500 mt-2 leading-relaxed">
            Submit your infrastructure parameters or system requirements below. Our engineering leads will review your documentation and contact you directly to map out execution paths.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-gray-200 p-8 sm:p-10 rounded-2xl shadow-sm text-left transition-all duration-300">
          
          {submitted ? (
            <div className="py-12 text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center font-black text-2xl mx-auto border border-emerald-200">
                ✓
              </div>
              <h3 className="text-lg font-extrabold uppercase tracking-wide text-slate-900">
                Intake Review Initiated
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed max-w-md mx-auto">
                Thank you. Your parameters have been transmitted safely. The Sivikon engineering board will review your scope requirements and guide you directly on the next steps within 24 business hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Grid Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                    Corporate Identity / Company
                  </label>
                  <input 
                    type="text" 
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g., ABSA Bank, Kericho County" 
                    className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl p-3 text-xs text-slate-800 focus:outline-none transition-colors placeholder:text-gray-400" 
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                    Contact Person
                  </label>
                  <input 
                    type="text" 
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    placeholder="Your Full Name" 
                    className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl p-3 text-xs text-slate-800 focus:outline-none transition-colors placeholder:text-gray-400" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                    Secure Business Email
                  </label>
                  <input 
                    type="email" 
                    value={formData.businessEmail}
                    onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
                    placeholder="name@company.com" 
                    className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl p-3 text-xs text-slate-800 focus:outline-none transition-colors placeholder:text-gray-400" 
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                    Target Service Domain
                  </label>
                  <select
                    value={formData.serviceTrack}
                    onChange={(e) => setFormData({ ...formData, serviceTrack: e.target.value })}
                    className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl p-3 text-xs text-slate-700 focus:outline-none transition-colors cursor-pointer"
                  >
                    <option value="Software Development">Full-Stack Software Development</option>
                    <option value="Quality Assurance">Quality Assurance & Testing Validation</option>
                    <option value="Both">Unified Engineering (Dev + QA Matrix)</option>
                  </select>
                </div>
              </div>

              {/* Large Text Area */}
              <div>
                <label className="block text-[10px] font-bold tracking-wider text-slate-600 uppercase mb-2">
                  System Requirements & Project Scope Overview
                </label>
                <textarea 
                  rows="5" 
                  value={formData.projectScope}
                  onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
                  placeholder="Please outline your current tech stack, operational system targets, automated test requirements, or structural performance issues that need immediate resolution..." 
                  className="w-full bg-slate-50 border border-gray-200 focus:border-blue-500 rounded-xl p-3 text-xs text-slate-800 focus:outline-none transition-colors resize-none placeholder:text-gray-400 leading-relaxed"
                ></textarea>
              </div>

              {/* Subtle Disclaimer Notice */}
              <div className="text-[11px] text-slate-400 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-gray-100 flex items-start gap-2.5">
                <span className="text-blue-500 font-bold">ℹ</span>
                <span>By submitting, you initiate an internal architectural review. Our expert technical team will verify your specifications and communicate direct actionable next steps to finalize onboarding.</span>
              </div>

              {/* Submission Button */}
              <button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 active:scale-[0.995] text-white font-bold py-3.5 rounded-xl text-xs uppercase tracking-widest transition-all shadow-md cursor-pointer text-center"
              >
                Submit Project Parameters For Review ➔
              </button>
            </form>
          )}
        </div>

      </div>
    </section>
  );
}