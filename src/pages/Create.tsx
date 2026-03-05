import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { usePets } from '../context/PetsContext';
import { PetAppearance, PetPersonality, Pet, getRandomLocation } from '../types/pet';
import { FRIENDS, Friend } from '../data/friends';
import { canvasToDataURL, CANVAS_SIZE } from '../utils/pixelArt';
import { launchToken } from '../services/pumpfun';
import './Create.css';

type Step = 'pick' | 'customize' | 'launch';

export default function Create() {
  const navigate = useNavigate();
  const { addPet } = usePets();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  const [step, setStep] = useState<Step>('pick');
  const [selectedFriend, setSelectedFriend] = useState<Friend>(FRIENDS[0]);
  const [tokenName, setTokenName] = useState(FRIENDS[0].name);
  const [tokenTicker, setTokenTicker] = useState(FRIENDS[0].name.toUpperCase().slice(0, 6));
  const [tokenDescription, setTokenDescription] = useState('');
  const [isLaunching, setIsLaunching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setTokenName(selectedFriend.name);
    setTokenTicker(selectedFriend.name.toUpperCase().slice(0, 6));
    setTokenDescription(selectedFriend.lore);
  }, [selectedFriend]);

  const drawFriendToCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const img = imageRef.current;
    if (!canvas || !img || !img.complete) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    ctx.drawImage(img, 0, 0, CANVAS_SIZE, CANVAS_SIZE);
  }, []);

  const handleNext = () => {
    if (step === 'pick') setStep('customize');
    else if (step === 'customize') setStep('launch');
  };

  const handleBack = () => {
    if (step === 'customize') setStep('pick');
    else if (step === 'launch') setStep('customize');
  };

  const handleLaunch = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    setIsLaunching(true);
    setError(null);

    try {
      drawFriendToCanvas();
      const imageData = canvasToDataURL(canvas);
      const petId = uuid();

      const appearance: PetAppearance = {
        type: 'dog',
        bodyColor: selectedFriend.color,
        eyeColor: '#000000',
        accessory: null,
        glasses: null,
        hat: null,
        background: 'none',
      };

      const personality: PetPersonality = {
        name: tokenName || selectedFriend.name,
        temperament: 'friendly',
        lovesHumans: true,
        activityLevel: 100,
        favoriteFood: 'puzzle pieces',
        playful: true,
        noiseLevel: 0,
        quirks: selectedFriend.traits,
        bio: tokenDescription || selectedFriend.lore,
      };

      const pet: Pet = {
        id: petId,
        appearance,
        personality,
        stats: { hunger: 100, happiness: 100, energy: 100, bond: 100 },
        status: 'online',
        location: getRandomLocation(),
        imageData,
        friendId: selectedFriend.id,
        createdAt: Date.now(),
        lastInteraction: Date.now(),
      };

      try {
        const tokenAddress = await launchToken(pet, canvas);
        pet.tokenAddress = tokenAddress;
      } catch (tokenError: any) {
        setError(`Token launch failed: ${tokenError?.message}. Friend created without token.`);
      }

      setShowConfetti(true);
      await addPet(pet);

      setTimeout(() => {
        navigate(`/pet/${petId}`);
      }, 1500);
    } catch (err: any) {
      setError(err.message || 'Failed to create friend token');
      setIsLaunching(false);
    }
  };

  return (
    <div className="page create-page">
      {showConfetti && (
        <div className="confetti-container">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="confetti"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 0.5}s`,
                backgroundColor: [selectedFriend.color, '#F5A623', '#4FC3F7', '#6BBF6B', '#FF8A65'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}
        </div>
      )}

      <div className="container">
        <div className="page-header">
          <h1>CREATE FRIEND TOKEN</h1>
          <p>Pick a friend for tism and launch it on Solana</p>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          <div className={`progress-step ${step === 'pick' ? 'active' : ''} ${step !== 'pick' ? 'completed' : ''}`}>
            <span className="step-number">1</span>
            <span className="step-label">Pick Friend</span>
          </div>
          <div className={`progress-line ${step !== 'pick' ? 'active' : ''}`} />
          <div className={`progress-step ${step === 'customize' ? 'active' : ''} ${step === 'launch' ? 'completed' : ''}`}>
            <span className="step-number">2</span>
            <span className="step-label">Customize</span>
          </div>
          <div className={`progress-line ${step === 'launch' ? 'active' : ''}`} />
          <div className={`progress-step ${step === 'launch' ? 'active' : ''}`}>
            <span className="step-number">3</span>
            <span className="step-label">Launch</span>
          </div>
        </div>

        {/* Step Content */}
        <div className="step-content" key={step}>
          {step === 'pick' && (
            <div className="friend-pick-step step-animate">
              <div className="friend-pick-preview">
                <div className="preview-browser browser-window">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span className="browser-dot red"></span>
                      <span className="browser-dot yellow"></span>
                      <span className="browser-dot green"></span>
                    </div>
                    <div className="browser-url">tism.app/friend/{selectedFriend.id}</div>
                  </div>
                  <div className="browser-content preview-content">
                    <div className="preview-friend-img-wrap">
                      <img src={selectedFriend.image} alt={selectedFriend.name} className="preview-friend-img" />
                    </div>
                    <div className="preview-info">
                      <span className="preview-name" style={{ color: selectedFriend.color }}>{selectedFriend.name}</span>
                      <div className="preview-traits">
                        {selectedFriend.traits.map(t => (
                          <span key={t} className="preview-trait">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="friend-selector panel">
                <div className="panel-header">
                  <span>PICK A FRIEND</span>
                  <span className="friend-count">{FRIENDS.length} friends</span>
                </div>
                <div className="panel-content">
                  <div className="friend-grid">
                    {FRIENDS.map((friend) => (
                      <button
                        key={friend.id}
                        className={`friend-option ${selectedFriend.id === friend.id ? 'active' : ''}`}
                        onClick={() => setSelectedFriend(friend)}
                      >
                        <img src={friend.image} alt={friend.name} className="friend-option-img" />
                        <span className="friend-option-name">{friend.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 'customize' && (
            <div className="customize-step step-animate">
              <div className="customize-preview">
                <div className="preview-browser browser-window">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span className="browser-dot red"></span>
                      <span className="browser-dot yellow"></span>
                      <span className="browser-dot green"></span>
                    </div>
                    <div className="browser-url">tism.app/friend/{selectedFriend.id}</div>
                  </div>
                  <div className="browser-content preview-content">
                    <div className="preview-friend-img-wrap">
                      <img src={selectedFriend.image} alt={selectedFriend.name} className="preview-friend-img" />
                    </div>
                    <div className="preview-info">
                      <span className="preview-name" style={{ color: selectedFriend.color }}>{tokenName}</span>
                      <span className="preview-symbol" style={{ color: selectedFriend.color }}>${tokenTicker}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="customize-form panel">
                <div className="panel-header">
                  <span>CUSTOMIZE TOKEN</span>
                </div>
                <div className="panel-content">
                  <div className="form-section">
                    <h3 className="form-section-title">Token Info</h3>
                    <div className="form-group">
                      <label className="form-label">Token Name</label>
                      <input
                        type="text"
                        className="form-input"
                        value={tokenName}
                        onChange={(e) => setTokenName(e.target.value)}
                        placeholder={selectedFriend.name}
                        maxLength={32}
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Ticker</label>
                      <div className="auto-token-row">
                        <span>$</span>
                        <input
                          type="text"
                          className="form-input"
                          value={tokenTicker}
                          onChange={(e) => setTokenTicker(e.target.value.toUpperCase().replace(/[^A-Z0-9]/g, ''))}
                          placeholder="TICKER"
                          maxLength={10}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-section">
                    <h3 className="form-section-title">Description</h3>
                    <div className="form-group">
                      <textarea
                        className="form-input"
                        placeholder="Tell the world about this friend..."
                        value={tokenDescription}
                        onChange={(e) => setTokenDescription(e.target.value)}
                        rows={4}
                        maxLength={200}
                      />
                      <span className="char-count">{tokenDescription.length}/200</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 'launch' && (
            <div className="launch-step step-animate">
              <div className="launch-browser browser-window">
                <div className="browser-header">
                  <div className="browser-dots">
                    <span className="browser-dot red"></span>
                    <span className="browser-dot yellow"></span>
                    <span className="browser-dot green"></span>
                  </div>
                  <div className="browser-url">pump.fun/launch/{tokenTicker.toLowerCase()}</div>
                </div>
                <div className="browser-content launch-content">
                  <div className="launch-preview">
                    <div className="launch-image-wrapper">
                      <img src={selectedFriend.image} alt={selectedFriend.name} className="launch-friend-img" />
                    </div>
                    <div className="launch-info">
                      <h2 className="launch-name" style={{ color: selectedFriend.color }}>{tokenName}</h2>
                      <p className="launch-bio">{tokenDescription || selectedFriend.lore}</p>

                      <div className="launch-traits">
                        <span className="tag tag-gold">${tokenTicker}</span>
                        {selectedFriend.traits.map(t => (
                          <span key={t} className="tag">{t}</span>
                        ))}
                      </div>

                      <div className="launch-details">
                        <div className="detail-row">
                          <span>Token Name:</span>
                          <strong style={{ color: selectedFriend.color }}>{tokenName}</strong>
                        </div>
                        <div className="detail-row">
                          <span>Token Symbol:</span>
                          <strong style={{ color: selectedFriend.color }}>${tokenTicker}</strong>
                        </div>
                        <div className="detail-row">
                          <span>Friend:</span>
                          <strong>{selectedFriend.name}</strong>
                        </div>
                        <div className="detail-row">
                          <span>Platform:</span>
                          <strong>Pump.fun (Solana)</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <div className="error-message">{error}</div>
              )}
            </div>
          )}
        </div>

        {/* Hidden elements */}
        <img
          ref={imageRef}
          src={selectedFriend.image}
          alt=""
          style={{ display: 'none' }}
          crossOrigin="anonymous"
          onLoad={drawFriendToCanvas}
        />
        <canvas
          ref={canvasRef}
          width={CANVAS_SIZE}
          height={CANVAS_SIZE}
          style={{ display: 'none' }}
        />

        {/* Navigation */}
        <div className="step-navigation">
          {step !== 'pick' && (
            <button className="btn btn-secondary" onClick={handleBack} disabled={isLaunching}>
              ← Back
            </button>
          )}

          <div className="nav-spacer" />

          {step !== 'launch' ? (
            <button className="btn btn-accent" onClick={handleNext}>
              Next →
            </button>
          ) : (
            <button
              className={`btn btn-launch ${isLaunching ? 'launching' : ''}`}
              onClick={handleLaunch}
              disabled={isLaunching}
            >
              {isLaunching ? (
                <>
                  <span className="spinner"></span>
                  Creating...
                </>
              ) : (
                'Launch on Pump.fun'
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
