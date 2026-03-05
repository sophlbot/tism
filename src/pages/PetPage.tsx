import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { usePets } from '../context/PetsContext';
import { FRIENDS } from '../data/friends';
import PumpFunLogo from '../components/PumpFunLogo';
import './PetPage.css';

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
      <div className="page token-page">
        <div className="container">
          <div className="not-found browser-window">
            <div className="browser-header">
              <div className="browser-dots">
                <span className="browser-dot red"></span>
                <span className="browser-dot yellow"></span>
                <span className="browser-dot green"></span>
              </div>
              <div className="browser-url">tism.app/token/not-found</div>
            </div>
            <div className="browser-content not-found-content">
              <h2>Friend not found</h2>
              <p>This friend doesn't exist or has been removed.</p>
              <Link to="/" className="btn btn-secondary">
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const friendMatch = FRIENDS.find(f =>
    pet.personality.quirks?.some(q => f.traits.includes(q)) ||
    f.name === pet.personality.name
  );
  const friendImage = friendMatch?.image || '/tism.png';
  const friendColor = pet.appearance?.bodyColor || friendMatch?.color || '#F5A623';

  return (
    <div className="page token-page">
      <div className="container">
        <div className="token-detail browser-window">
          <div className="browser-header">
            <div className="browser-dots">
              <span className="browser-dot red"></span>
              <span className="browser-dot yellow"></span>
              <span className="browser-dot green"></span>
            </div>
            <div className="browser-url">tism.app/token/{pet.personality.name.toLowerCase().replace(/\s/g, '-')}</div>
          </div>
          <div className="browser-content token-content">
            <div className="token-image-section">
              <div className="token-image-wrapper">
                <img src={friendImage} alt={pet.personality.name} className="token-detail-img" />
              </div>
            </div>

            <div className="token-info-section">
              <h1 className="token-title" style={{ color: friendColor }}>
                {pet.personality.name}
              </h1>

              {pet.personality.bio && (
                <p className="token-description">{pet.personality.bio}</p>
              )}

              <div className="token-details">
                {pet.personality.quirks && pet.personality.quirks.length > 0 && (
                  <div className="detail-item">
                    <span className="detail-label">Traits</span>
                    <div className="detail-traits">
                      {pet.personality.quirks.map((q, i) => (
                        <span key={i} className="detail-trait-tag">{q}</span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

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
                    <span>Not yet tokenized</span>
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
