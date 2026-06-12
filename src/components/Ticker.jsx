import { tickerItems } from '../data/siteData';

export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker-track">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <div className="ticker-item" key={`${item}-${index}`}>{item} <span className="ticker-dot"></span></div>
        ))}
      </div>
    </div>
  );
}
