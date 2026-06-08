import React, { useState } from 'react';

export default function SimpleBrowser() {
  const defaultUrl = 'https://example.com';
  const [url, setUrl] = useState(defaultUrl);
  const [inputUrl, setInputUrl] = useState(defaultUrl);
  const [error, setError] = useState('');

  const normalizeUrl = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return '';
    if (/^https?:\/\//i.test(trimmed)) return trimmed;
    return `https://${trimmed}`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const normalized = normalizeUrl(inputUrl);

    try {
      const validated = new URL(normalized);
      setUrl(validated.href);
      setError('');
    } catch (err) {
      setError('Enter a valid web address, for example https://example.com');
    }
  };

  return (
    <section id="browser-section" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden text-left">
      
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50 via-white to-slate-50" />
      <div className="absolute inset-0 bg-[radial-gradient(#bfdbfe_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-widest text-blue-600 uppercase bg-blue-100 border border-blue-300 px-4 py-2 rounded-full">
            🌐 WEB PREVIEW
          </div>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight text-slate-900 mt-6 uppercase leading-tight">
            Live Web Browser
          </h2>
          <p className="text-lg text-slate-600 mt-6 leading-relaxed max-w-2xl">
            Preview websites directly within this page. Perfect for client demonstrations, live testing, and quick reference while you evaluate our platform.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-5xl mx-auto mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-4 items-end">
            <div>
              <label className="sr-only" htmlFor="browser-url-input">
                Browser URL
              </label>
              <div className="relative">
                <span className="absolute left-5 top-4 text-slate-400 font-bold">🔗</span>
                <input
                  id="browser-url-input"
                  type="url"
                  value={inputUrl}
                  onChange={(event) => setInputUrl(event.target.value)}
                  placeholder="Enter a website URL, e.g. example.com"
                  className="w-full rounded-xl border-2 border-blue-300 bg-white px-5 pl-12 py-4 text-sm text-slate-900 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 shadow-sm"
                />
              </div>
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition shadow-lg hover:shadow-blue-500/50 transform hover:scale-105"
            >
              Go →
            </button>
          </div>

          {error ? (
            <p className="text-sm text-red-600 mt-3 font-semibold">⚠️ {error}</p>
          ) : (
            <p className="text-sm text-slate-600 mt-3">
              Preview: <span className="font-bold text-slate-900">{url}</span>
            </p>
          )}
        </form>

        <div className="max-w-5xl mx-auto">
          <div className="overflow-hidden rounded-2xl border-4 border-blue-300 shadow-2xl bg-white">
            <div className="bg-gradient-to-r from-slate-900 to-slate-800 px-4 py-3 flex items-center gap-2">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <p className="text-xs text-slate-400 font-mono flex-grow text-center">{url}</p>
            </div>
            <iframe
              title="Simple Browser Preview"
              src={url}
              className="w-full min-h-[32rem] bg-white"
              sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            />
          </div>

          <div className="mt-6 text-xs text-slate-500 font-mono">
            ℹ️ Note: Some websites may prevent embedding in an iframe for security reasons. This is normal browser security behavior.
          </div>
        </div>
      </div>
    </section>
  );
}
