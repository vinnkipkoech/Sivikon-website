import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 text-center text-xs text-slate-400">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
        
        {/* Footprint Left Identity */}
        <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
          <span className="font-black text-white uppercase tracking-wider text-xs">
            Sivikon Technologies
          </span>
          <span className="text-[10px] text-slate-400 font-mono mt-1">
            © 2024 - 2026 // Ensuring Quality. Delivering Trust.
          </span>
        </div>

        {/* Footprint Right Contacts */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 font-mono text-[11px] text-slate-300">
          <span className="flex items-center gap-1.5">
            <span>📞</span> +254 721 501 604
          </span>
          <span className="hidden sm:inline text-slate-700">|</span>
          <span className="flex items-center gap-1.5">
            <span>📧</span> sivikontechnologies@gmail.com
          </span>
        </div>

      </div>
    </footer>
  );
}