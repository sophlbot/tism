import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePets } from '../context/PetsContext';
import { METAL_INFO, MetalType } from '../types/project';
import { METAL_ICONS } from '../components/Icons';
import PumpFunLogo from '../components/PumpFunLogo';
import './PetPage.css';

const getMetalTypeFromPet = (pet: any): MetalType => {
  const colorMap: Record<string, MetalType> = {
    '#D4AF37': 'gold',
    '#C0C0C0': 'silver',
    '#E5E4E2': 'platinum',
    '#B87333': 'copper',
    '#CD7F32': 'bronze',
    '#CED0CE': 'palladium',
    '#FF4444': 'gold',
    '#4477FF': 'gold',
    '#44DD44': 'gold',
    '#9944FF': 'gold',
    '#FF8844': 'gold',
    '#FF66AA': 'gold',
    '#44DDDD': 'gold',
    '#FFDD44': 'gold',
    '#FFFFFF': 'silver',
    '#333333': 'iron',
  };
  return colorMap[pet.appearance?.bodyColor] || 'gold';
};

export default function PetPage() {
  const { id } = useParams<{ id: string }>();
  const { getPet } = usePets();
  const [pet, setPet] = useState(id ? getPet(id) : undefined);

  useEffect(() => {
    if (id) {
      setPet(getPet(id));
    }
  }, [id, getPet]);

  if (!pet) {
    return (
      <div className="page metal-page">
        <div className="container">
          <div className="not-found browser-window">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="browser-dot red"></span>
                <span className="browser-dot yellow"></span>
                <span className="browser-dot green"></span>
              </div>
              <div className="browser-url">projectmetals.app/token/not-found</div>
            </div>
            <div className="browser-content not-found-content">
              <h2>Token not found</h2>
              <p>This token doesn't exist or has been removed.</p>
              <Link to="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const metalType = getMetalTypeFromPet(pet);
  const metalInfo = METAL_INFO[metalType];
  const IconComponent = METAL_ICONS[metalType];
  const displayColor = pet.appearance?.bodyColor || metalInfo.color;

  return (
    <div className="page metal-page">
      <div className="container">
        <div className="metal-detail browser-window">
          <div className="browser-header">
            <div className="browser-dots">
              <span className="browser-dot red"></span>
              <span className="browser-dot yellow"></span>
              <span className="browser-dot green"></span>
            </div>
            <div className="browser-url">projectmetals.app/token/{pet.personality.name.toLowerCase().replace(/\s/g, '-')}</div>
          </div>
          <div className="browser-content metal-content">
            {/* Metal Image */}
            <div className="metal-image-section">
              <div className="metal-image-wrapper">
                <IconComponent size={200} color={displayColor} />
              </div>
            </div>

            {/* Metal Info */}
            <div className="metal-info-section">
              <h1 className="metal-title" style={{ color: displayColor }}>
                {pet.personality.name}
              </h1>
              
              {pet.personality.bio && (
                <p className="metal-description">{pet.personality.bio}</p>
              )}

              <div className="metal-details">
                <div className="detail-item">
                  <span className="detail-label">Metal</span>
                  <span className="detail-value" style={{ color: metalInfo.color }}>
                    {metalInfo.name}
                  </span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Symbol</span>
                  <span className="detail-value">{metalInfo.symbol}</span>
                </div>
                {pet.personality.quirks && pet.personality.quirks.length > 0 && (
                  <>
                    {pet.personality.quirks[1] && (
                      <div className="detail-item">
                        <span className="detail-label">Purity</span>
                        <span className="detail-value">{pet.personality.quirks[1]}</span>
                      </div>
                    )}
                    {pet.personality.quirks[3] && (
                      <div className="detail-item">
                        <span className="detail-label">Shape</span>
                        <span className="detail-value">{pet.personality.quirks[3]}</span>
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* Token Link */}
              {pet.tokenAddress ? (
                <div className="token-section">
                  <a 
                    href={`https://pump.fun/${pet.tokenAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-large"
                  >
                    <PumpFunLogo size={20} /> View on Pump.fun
                  </a>
                  <div className="token-address">
                    <span className="address-label">Token Address:</span>
                    <code>{pet.tokenAddress}</code>
                  </div>
                </div>
              ) : (
                <div className="token-section">
                  <div className="no-token">
                    <span>🪙 Not yet tokenized</span>
                  </div>
                </div>
              )}

              <Link to="/" className="back-link">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
