import React, { useState } from 'react';

export default function ContactWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    sector: '',
    objective: '',
    timeline: '',
    name: '',
    email: '',
    organization: '',
    details: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = (e) => {
    e.preventDefault();
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where you'll link your email service or backend API ingest pipeline
    console.log('Ingesting Enterprise Lead Data Target:', formData);
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0b0f19] text-left">
      {/* Ambient background blur elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
            🚀 PROJECT INTAKE
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-6 uppercase tracking-tight">
            Initiate Your Transformation
          </h2>
          <p className="text-base text-slate-400 mt-4 max-w-xl mx-auto font-medium">
            Select your parameters below to generate a tailored enterprise proposal and implementation roadmap.
          </p>
        </div>

        {/* Wizard Container Card */}
        <div className="rounded-3xl border border-white/5 bg-[#121826]/40 p-8 md:p-12 shadow-2xl backdrop-blur-xl relative">
          
          {/* Progress Bar Track */}
          {!isSubmitted && (
            <div className="w-full bg-white/5 h-1 rounded-full mb-10 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          )}

          {isSubmitted ? (
            /* Success Feedback View */
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-3xl mb-2">
                ✓
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Intake Specifications Received</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed font-medium">
                Thank you, <span className="text-white font-bold">{formData.name}</span>. Our enterprise architecture team is reviewing your requirements for <span className="text-white font-bold">{formData.organization || 'your project'}</span>. We will schedule our preliminary consulting session within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={step === 3 ? handleSubmit : handleNext} className="space-y-8">
              
              {/* STEP 1: SECTOR INTERACTION SELECTION */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">// Step 1: Identify Your Operational Sector</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { id: 'financial', label: 'Finance, FinTech & SACCOs' },
                      { id: 'healthcare', label: 'Healthcare & Clinical Systems' },
                      { id: 'government', label: 'Government & Public Services' },
                      { id: 'ngo', label: 'NGOs & Impact Tracking' },
                      { id: 'retail', label: 'Retail, POS & E-commerce' },
                      { id: 'enterprise', label: 'Custom Corporate Enterprise' }
                    ].map((sector) => (
                      <button
                        key={sector.id}
                        type="button"
                        onClick={() => updateField('sector', sector.id)}
                        className={`p-5 rounded-2xl border text-left font-semibold text-sm transition-all duration-200 ${
                          formData.sector === sector.id 
                            ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-lg' 
                            : 'bg-[#0b0f19]/40 border-white/5 text-slate-300 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        {sector.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end pt-4">
                    <button
                      disabled={!formData.sector}
                      type="submit"
                      className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold uppercase tracking-widest transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-emerald-600/10"
                    >
                      Next Parameter ➔
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: CORE OBJECTIVE ARCHITECTURE */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">// Step 2: Define Core Modernization Target</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { id: 'legacy', label: 'Legacy System Modernization & Optimization' },
                      { id: 'custom-build', label: 'Greenfield Custom System Architecture Build' },
                      { id: 'qa-integration', label: 'Enterprise Infrastructure QA / Core System Integration' }
                    ].map((obj) => (
                      <button
                        key={obj.id}
                        type="button"
                        onClick={() => updateField('objective', obj.id)}
                        className={`p-5 rounded-2xl border text-left font-semibold text-sm transition-all duration-200 ${
                          formData.objective === obj.id 
                            ? 'bg-emerald-500/10 border-emerald-500 text-white shadow-lg' 
                            : 'bg-[#0b0f19]/40 border-white/5 text-slate-300 hover:border-white/10 hover:text-white'
                        }`}
                      >
                        {obj.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 rounded-xl bg-transparent border border-white/10 text-slate-300 hover:text-white hover:border-white/20 text-sm font-bold uppercase tracking-widest transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      disabled={!formData.objective}
                      type="submit"
                      className="px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-bold uppercase tracking-widest transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-lg shadow-emerald-600/10"
                    >
                      Next Parameter ➔
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: STAKEHOLDER & CORPORATE IDENTITY DATA */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-white uppercase tracking-tight">// Step 3: Corporate Contact Coordinates</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="e.g., Dedan Otiato"
                        className="bg-[#0b0f19]/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors font-medium placeholder-slate-600"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Corporate Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="e.g., d.otiato@organization.com"
                        className="bg-[#0b0f19]/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors font-medium placeholder-slate-600"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Organization / Enterprise Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.organization}
                      onChange={(e) => updateField('organization', e.target.value)}
                      placeholder="e.g., Varde Engineering Co. LTD"
                      className="bg-[#0b0f19]/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors font-medium placeholder-slate-600"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Brief Architectural or Scope Considerations</label>
                    <textarea 
                      rows={4}
                      value={formData.details}
                      onChange={(e) => updateField('details', e.target.value)}
                      placeholder="Outline any legacy stack issues, security baselines, or estimated transaction throughput needs..."
                      className="bg-[#0b0f19]/60 border border-white/5 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors font-medium placeholder-slate-600 resize-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 rounded-xl bg-transparent border border-white/10 text-slate-300 hover:text-white hover:border-white/20 text-sm font-bold uppercase tracking-widest transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white text-sm font-bold uppercase tracking-widest transition-all duration-200 transform hover:scale-[1.02] shadow-lg shadow-emerald-500/20"
                    >
                      Submit System Request ➔
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </section>
  );
}