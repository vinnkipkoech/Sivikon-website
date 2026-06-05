import React from 'react';

export default function AboutSection() {
  const pillars = [
    { 
      title: "Highly Driven Team", 
      desc: "Formed by seasoned software architects and testing practitioners with deep structural expertise." 
    },
    { 
      title: "Proven Methodologies", 
      desc: "Utilizing industry standard processes to accelerate product delivery while minimizing core development costs." 
    },
    { 
      title: "Custom Flexibility", 
      desc: "Adapting cleanly to custom customer business needs and organizational culture benchmarks." 
    }
  ];

  return (
    <section id="about-section" className="bg-white py-20 px-4 sm:px-6 lg:px-8 border-b border-gray-100 text-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-5 space-y-4 text-left">
            <span className="text-xs text-blue-600 font-bold tracking-widest uppercase bg-blue-50 border border-blue-200/60 px-3 py-1 rounded-full">
              Ensuring Quality, Delivering Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight uppercase leading-tight">
              Premium Software Development & Engineering Solutions
            </h2>
            <div className="text-slate-500 text-xs font-medium italic">
              "Customer success is our success"
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              Sivikon Technologies is a dedicated technology partner registered in 2024. We break engineering roadblocks by matching rapid, production-ready software development directly with rigorous global quality assurance principles.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="p-6 bg-slate-50 border border-slate-200/60 rounded-2xl shadow-xs hover:border-blue-500/40 hover:bg-white transition-all duration-200 group">
                <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold mb-4">
                  0{idx + 1}
                </div>
                <h3 className="font-bold text-slate-900 text-xs uppercase tracking-wider group-hover:text-blue-600 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}