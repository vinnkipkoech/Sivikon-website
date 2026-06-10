import React, { useState } from 'react';

export default function ContactWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    sector: '',
    objective: '',
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
    <section id="cta" className="bg-[#F0F5FF] py-[90px] px-[5%] font-sans text-left border-t border-[#E2E8F4]">
      <div className="max-w-[1200px] mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <span className="inline-block text-[11.5px] font-bold tracking-[2px] uppercase text-[#1558D6] mb-3">
            Project Intake
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A1628] leading-[1.1] tracking-[-1.5px]">
            Initiate Your <span className="text-[#1558D6]">Transformation</span>
          </h2>
          <p className="text-sm sm:text-base text-[#6B7A99] mt-4 leading-relaxed font-normal">
            Select your parameters below to generate a tailored enterprise proposal and implementation roadmap.
          </p>
        </div>

        {/* Card Container */}
        <div className="max-w-[760px] mx-auto bg-white border border-[#E2E8F4] rounded-2xl p-8 md:p-10 shadow-sm relative">
          
          {/* Progress Bar */}
          {!isSubmitted && (
            <div className="w-full bg-[#F8FAFC] h-1.5 rounded-full mb-10 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-[#1558D6] to-[#00C2FF] h-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              />
            </div>
          )}

          {isSubmitted ? (
            /* Success State */
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#E8FFF6] text-[#00A878] text-xl font-bold mb-2">
                ✓
              </div>
              <h3 className="text-xl font-extrabold text-[#0A1628]">Intake Specifications Received</h3>
              <p className="text-sm text-[#6B7A99] max-w-md mx-auto leading-relaxed font-normal">
                Thank you, <span className="text-[#0A1628] font-bold">{formData.name}</span>. Our enterprise architecture team is reviewing your requirements for <span className="text-[#0A1628] font-bold">{formData.organization || 'your project'}</span>. We will contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={step === 3 ? handleSubmit : handleNext} className="space-y-6">
              
              {/* STEP 1 */}
              {step === 1 && (
                <div className="space-y-6">
                  <h3 className="text-[11.5px] font-mono font-bold text-[#1558D6] uppercase tracking-widest">// Step 1: Identify Your Operational Sector</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
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
                        className={`p-4 rounded-xl border text-left font-semibold text-sm transition-all duration-200 cursor-pointer ${
                          formData.sector === sector.id 
                            ? 'bg-[#F0F5FF] border-[#1558D6] text-[#1558D6] shadow-sm' 
                            : 'bg-white border-[#E2E8F4] text-[#6B7A99] hover:border-[#1558D6]/40 hover:text-[#0A1628]'
                        }`}
                      >
                        {sector.label}
                      </button>
                    ))}
                  </div>
                  <div className="flex justify-end pt-4 border-t border-[#F8FAFC]">
                    <button
                      disabled={!formData.sector}
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-br from-[#1558D6] to-[#1A6BFF] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_4px_12px_rgba(21,88,214,0.2)]"
                    >
                      Next Parameter ➔
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 2 */}
              {step === 2 && (
                <div className="space-y-6">
                  <h3 className="text-[11.5px] font-mono font-bold text-[#1558D6] uppercase tracking-widest">// Step 2: Define Core Modernization Target</h3>
                  <div className="grid grid-cols-1 gap-3.5">
                    {[
                      { id: 'legacy', label: 'Legacy System Modernization & Optimization' },
                      { id: 'custom-build', label: 'Greenfield Custom System Architecture Build' },
                      { id: 'qa-integration', label: 'Enterprise Infrastructure QA / Core System Integration' }
                    ].map((obj) => (
                      <button
                        key={obj.id}
                        type="button"
                        onClick={() => updateField('objective', obj.id)}
                        className={`p-4 rounded-xl border text-left font-semibold text-sm transition-all duration-200 cursor-pointer ${
                          formData.objective === obj.id 
                            ? 'bg-[#F0F5FF] border-[#1558D6] text-[#1558D6] shadow-sm' 
                            : 'bg-white border-[#E2E8F4] text-[#6B7A99] hover:border-[#1558D6]/40 hover:text-[#0A1628]'
                        }`}
                      >
                        {obj.label}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#F8FAFC]">
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-5 py-3 rounded-lg bg-white border border-[#E2E8F4] text-[#6B7A99] hover:text-[#0A1628] hover:border-[#6B7A99] text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      ← Back
                    </button>
                    <button
                      disabled={!formData.objective}
                      type="submit"
                      className="px-6 py-3 bg-gradient-to-br from-[#1558D6] to-[#1A6BFF] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-all disabled:opacity-40 disabled:cursor-not-allowed shadow-[0_4px_12px_rgba(21,88,214,0.2)]"
                    >
                      Next Parameter ➔
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3 */}
              {step === 3 && (
                <div className="space-y-5">
                  <h3 className="text-[11.5px] font-mono font-bold text-[#1558D6] uppercase tracking-widest">// Step 3: Corporate Contact Coordinates</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-[10px] font-bold text-[#6B7A99] uppercase tracking-wider">Your Name</label>
                      <input required type="text" value={formData.name} onChange={(e) => updateField('name', e.target.value)} placeholder="e.g., Dedan Otiato" className="bg-white border border-[#E2E8F4] rounded-lg px-4 py-3 text-sm text-[#0A1628] focus:outline-none focus:border-[#1558D6] transition-colors" />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <label className="text-[10px] font-bold text-[#6B7A99] uppercase tracking-wider">Corporate Email Address</label>
                      <input required type="email" value={formData.email} onChange={(e) => updateField('email', e.target.value)} placeholder="e.g., d.otiato@org.com" className="bg-white border border-[#E2E8F4] rounded-lg px-4 py-3 text-sm text-[#0A1628] focus:outline-none focus:border-[#1558D6] transition-colors" />
                    </div>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] font-bold text-[#6B7A99] uppercase tracking-wider">Organization Name</label>
                    <input required type="text" value={formData.organization} onChange={(e) => updateField('organization', e.target.value)} placeholder="e.g., Varde Engineering Co. LTD" className="bg-white border border-[#E2E8F4] rounded-lg px-4 py-3 text-sm text-[#0A1628] focus:outline-none focus:border-[#1558D6] transition-colors" />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label className="text-[10px] font-bold text-[#6B7A99] uppercase tracking-wider">Scope Considerations</label>
                    <textarea rows={4} value={formData.details} onChange={(e) => updateField('details', e.target.value)} placeholder="Outline your requirements..." className="bg-white border border-[#E2E8F4] rounded-lg px-4 py-3 text-sm text-[#0A1628] focus:outline-none focus:border-[#1558D6] transition-colors resize-none" />
                  </div>

                  <div className="flex justify-between pt-4 border-t border-[#F8FAFC]">
                    <button type="button" onClick={handleBack} className="px-5 py-3 rounded-lg bg-white border border-[#E2E8F4] text-[#6B7A99] hover:text-[#0A1628] text-xs font-bold uppercase tracking-wider">← Back</button>
                    <button type="submit" className="px-6 py-3 bg-gradient-to-br from-[#1558D6] to-[#1A6BFF] text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-[0_4px_12px_rgba(21,88,214,0.2)]">Submit Request ➔</button>
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