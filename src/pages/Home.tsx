import { Link } from 'react-router-dom';
import { usePets } from '../context/PetsContext';
import { METAL_INFO, MetalType, METAL_CATEGORIES } from '../types/project';
import { METAL_ICONS } from '../components/Icons';
import './Home.css';

const FEATURED_METALS: MetalType[] = ['gold', 'silver', 'platinum', 'palladium', 'copper', 'bronze'];

// List of valid metal types to filter out old pet tokens
const VALID_METAL_TYPES = Object.keys(METAL_INFO);

export default function Home() {
  const { pets } = usePets();
  
  // Filter only metal tokens (new ones created via Metal Create)
  // They have a valid metal type in quirks[0]
  const metalTokens = pets.filter(pet => {
    const metalType = pet.personality?.quirks?.[0];
    return metalType && VALID_METAL_TYPES.includes(metalType);
  });

  return (
    <div className="page home-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-browser browser-window">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="browser-dot red"></span>
                <span className="browser-dot yellow"></span>
                <span className="browser-dot green"></span>
              </div>
              <div className="browser-url">https://projectmetals.app</div>
            </div>
            <div className="browser-content hero-content">
              <h1 className="hero-title">
                TOKENIZE YOUR
                <br />
                <span className="hero-highlight">PRECIOUS METALS</span>
              </h1>
              <p className="hero-subtitle">
                Create unique pixel art tokens backed by real gold, silver, platinum 
                and other precious metals on Solana
              </p>
              <div className="hero-actions">
                <Link to="/create" className="btn btn-accent">
                  🪙 Create Metal Token
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="features">
          <div className="feature">
            <div className="feature-number">01</div>
            <h3>Choose Metal</h3>
            <p>Select from 50+ metals including gold, silver, platinum and rare earth elements</p>
          </div>
          <div className="feature">
            <div className="feature-number">02</div>
            <h3>Customize</h3>
            <p>Pick color variant, purity, shape, finish and vault location</p>
          </div>
          <div className="feature">
            <div className="feature-number">03</div>
            <h3>Tokenize</h3>
            <p>Launch your RWA metal token on Pump.fun and trade it globally</p>
          </div>
        </section>

        {/* Available Metals */}
        <section className="metals-showcase">
          <div className="section-header">
            <h2>AVAILABLE METALS</h2>
            <span className="metals-count">50+ metals</span>
          </div>
          
          <div className="metals-preview-grid">
            {FEATURED_METALS.map((metal) => {
              const info = METAL_INFO[metal];
              const IconComponent = METAL_ICONS[metal];
              return (
                <div key={metal} className="metal-preview-card">
                  <div className="metal-preview-icon">
                    <IconComponent size={64} color={info.color} />
                  </div>
                  <div className="metal-preview-info">
                    <span className="metal-preview-name" style={{ color: info.color }}>
                      {info.name}
                    </span>
                    <span className="metal-preview-symbol">{info.symbol}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="metals-categories">
            {METAL_CATEGORIES.map(cat => (
              <span key={cat.id} className="category-badge">
                {cat.icon} {cat.name}
              </span>
            ))}
          </div>

          <div className="showcase-cta">
            <Link to="/create" className="btn btn-gold">
              View All Metals →
            </Link>
          </div>
        </section>

        {/* Recent Tokens - Only show new metal tokens */}
        {metalTokens.length > 0 && (
          <section className="recent-tokens">
            <div className="section-header">
              <h2>RECENT TOKENS</h2>
              <span className="metals-count">{metalTokens.length} created</span>
            </div>
            
            <div className="tokens-grid">
              {metalTokens.slice(0, 6).map((token) => {
                const metalType = token.personality?.quirks?.[0] as MetalType;
                const metalInfo = METAL_INFO[metalType] || METAL_INFO.gold;
                const IconComponent = METAL_ICONS[metalType] || METAL_ICONS.gold;
                const displayColor = token.appearance?.bodyColor || metalInfo.color;
                
                return (
                  <Link key={token.id} to={`/pet/${token.id}`} className="token-card">
                    <div className="token-image">
                      <IconComponent size={80} color={displayColor} />
                    </div>
                    <div className="token-info">
                      <span className="token-name">{token.personality.name}</span>
                      {token.tokenAddress && (
                        <span className="token-badge">🪙 Tokenized</span>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
