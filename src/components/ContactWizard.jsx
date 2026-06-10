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
    console.log('Ingesting Enterprise Lead Data Target:', formData);
    setIsSubmitted(true);
  };

  return (
    <section id="cta" className="relative py-24 px-[5%] overflow-hidden bg-navy text-left border-t border-white/5">
      {/* Background Grid Accent Layer from master template */}
      <div className="absolute inset-0 opacity-[0.04] hero-grid-bg pointer-events-none" />
      
      {/* Signature Radial Glow Gradient Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(21,88,214,0.15)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative max-w-3xl mx-auto z-10">
        
        {/* Synchronized Header Block */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blueCustom/20 border border-blueCustom/40 text-cyanCustom text-xs font-semibold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full">
            🚀 PROJECT INTAKE
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mt-6 uppercase tracking-tight">
            Initiate Your <span className="bg-gradient-to-r from-cyanCustom to-blue2 bg-clip-text text-transparent">Transformation</span>
          </h2>
          <p className="text-base text-white/60 mt-4 max-w-xl mx-auto font-normal">
            Select your parameters below to generate a tailored enterprise proposal and implementation roadmap.
          </p>
        </div>

        {/* Re-Architected Card Container Layout */}
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12 shadow-2xl backdrop-blur-md relative">
          
          {/* Aligned Progress Bar Track */}
          {!isSubmitted && (
            <div className="w-full bg-white/5 h-1 rounded-full mb-10 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-blueCustom to-cyanCustom h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          )}

          {isSubmitted ? (
            /* Success Feedback View */
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-blueCustom/20 text-cyanCustom border border-blueCustom/40 text-2xl font-bold mb-2">
                ✓
              </div>
              <h3 className="text-2xl font-black text-white uppercase tracking-tight">Intake Specifications Received</h3>
              <p className="text-sm text-white/70 max-w-md mx-auto leading-relaxed font-normal">
                Thank you, <span className="text-white font-bold">{formData.name}</span>. Our enterprise architecture team is reviewing your requirements for <span className="text-white font-bold">{formData.organization || 'your project'}</span>. We will schedule our preliminary consulting session within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={step === 3 ? handleSubmit : handleNext} className="space-y-8">
              
              {/* STEP 1: SECTOR INTERACTION SELECTION */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-sm font-mono font-bold text-cyanCustom uppercase tracking-widest">// Step 1: Identify Your Operational Sector</h3>
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
                        className={`p-5 rounded-xl border text-left font-semibold text-sm transition-all duration-200 ${
                          formData.sector === sector.id 
                            ? 'bg-blueCustom/20 border-cyanCustom text-white shadow-lg' 
                            : 'bg-white/5 border-white/5 text-white/80 hover:border-cyanCustom/30 hover:text-white'
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
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blueCustom to-blue2 text-white text-sm font-bold uppercase tracking-widest transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(21,88,214,0.3)]"
                    >
                      Next Parameter ➔
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2: CORE OBJECTIVE ARCHITECTURE */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-sm font-mono font-bold text-cyanCustom uppercase tracking-widest">// Step 2: Define Core Modernization Target</h3>
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
                        className={`p-5 rounded-xl border text-left font-semibold text-sm transition-all duration-200 ${
                          formData.objective === obj.id 
                            ? 'bg-blueCustom/20 border-cyanCustom text-white shadow-lg' 
                            : 'bg-white/5 border-white/5 text-white/80 hover:border-cyanCustom/30 hover:text-white'
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
                      className="px-6 py-3.5 rounded-xl bg-transparent border border-white/25 text-white/80 hover:text-white hover:border-white/40 text-sm font-semibold uppercase tracking-widest transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      disabled={!formData.objective}
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blueCustom to-blue2 text-white text-sm font-bold uppercase tracking-widest transition-all duration-200 disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_4px_20px_rgba(21,88,214,0.3)]"
                    >
                      Next Parameter ➔
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: STAKEHOLDER & CORPORATE IDENTITY DATA */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-sm font-mono font-bold text-cyanCustom uppercase tracking-widest">// Step 3: Corporate Contact Coordinates</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold text-white/55 uppercase tracking-widest">Your Name</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        placeholder="e.g., Dedan Otiato"
                        className="bg-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyanCustom transition-colors font-medium placeholder-white/25"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <label className="text-[10px] font-bold text-white/55 uppercase tracking-widest">Corporate Email Address</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        placeholder="e.g., d.otiato@organization.com"
                        className="bg-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyanCustom transition-colors font-medium placeholder-white/25"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-bold text-white/55 uppercase tracking-widest">Organization / Enterprise Name</label>
                    <input 
                      required
                      type="text" 
                      value={formData.organization}
                      onChange={(e) => updateField('organization', e.target.value)}
                      placeholder="e.g., Varde Engineering Co. LTD"
                      className="bg-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyanCustom transition-colors font-medium placeholder-white/25"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <label className="text-[10px] font-bold text-white/55 uppercase tracking-widest">Brief Architectural or Scope Considerations</label>
                    <textarea 
                      rows={4}
                      value={formData.details}
                      onChange={(e) => updateField('details', e.target.value)}
                      placeholder="Outline any legacy stack issues, security baselines, or estimated transaction throughput needs..."
                      className="bg-navy border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-cyanCustom transition-colors font-medium placeholder-white/25 resize-none"
                    />
                  </div>

                  <div className="flex justify-between pt-4">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3.5 rounded-xl bg-transparent border border-white/25 text-white/80 hover:text-white hover:border-white/40 text-sm font-semibold uppercase tracking-widest transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blueCustom to-blue2 text-white text-sm font-bold uppercase tracking-widest transition-all duration-200 transform hover:scale-[1.01] shadow-[0_4px_20px_rgba(21,88,214,0.4)]"
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