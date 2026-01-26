import { useState, useRef, useCallback, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuid } from 'uuid';
import { usePets } from '../context/PetsContext';
import { PetAppearance, PetPersonality, Pet, generateRandomStats, getRandomLocation } from '../types/pet';
import { 
  MetalType, 
  METAL_INFO, 
  METAL_CATEGORIES,
  getMetalsByCategory,
  PurityLevel, 
  PURITY_INFO,
  VAULT_LOCATIONS,
  FINISH_OPTIONS,
  SHAPE_OPTIONS
} from '../types/project';
import { getMetalIcon, METAL_ICONS } from '../components/Icons';
import { canvasToDataURL, CANVAS_SIZE, drawPet } from '../utils/pixelArt';
import { launchToken } from '../services/pumpfun';
import './Create.css';

type Step = 'metal' | 'customize' | 'launch';
type CategoryFilter = 'all' | 'precious' | 'alloy' | 'base' | 'industrial' | 'rare_earth' | 'strategic';

export default function Create() {
  const navigate = useNavigate();
  const { addPet } = usePets();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const [step, setStep] = useState<Step>('metal');
  const [categoryFilter, setCategoryFilter] = useState<CategoryFilter>('all');
  const [selectedMetal, setSelectedMetal] = useState<MetalType>('gold');
  const [purity, setPurity] = useState<PurityLevel>('999.9');
  const [finish, setFinish] = useState('polished');
  const [shape, setShape] = useState('bar');
  const [vaultLocation, setVaultLocation] = useState('zurich');
  const [selectedColor, setSelectedColor] = useState('');
  const [tokenDescription, setTokenDescription] = useState('');
  const [isLaunching, setIsLaunching] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Metal info
  const metalInfo = METAL_INFO[selectedMetal];

  // Color options
  const COLOR_OPTIONS = [
    { id: '', name: 'Original', code: '', hex: '' },
    { id: 'red', name: 'Red', code: 'R', hex: '#FF4444' },
    { id: 'blue', name: 'Blue', code: 'B', hex: '#4477FF' },
    { id: 'green', name: 'Green', code: 'G', hex: '#44DD44' },
    { id: 'purple', name: 'Purple', code: 'P', hex: '#9944FF' },
    { id: 'orange', name: 'Orange', code: 'O', hex: '#FF8844' },
    { id: 'pink', name: 'Pink', code: 'K', hex: '#FF66AA' },
    { id: 'cyan', name: 'Cyan', code: 'C', hex: '#44DDDD' },
    { id: 'yellow', name: 'Yellow', code: 'Y', hex: '#FFDD44' },
    { id: 'white', name: 'White', code: 'W', hex: '#FFFFFF' },
    { id: 'black', name: 'Black', code: 'X', hex: '#333333' },
  ];

  // Auto-generate token name and ticker
  const colorOption = COLOR_OPTIONS.find(c => c.id === selectedColor) || COLOR_OPTIONS[0];
  const tokenName = selectedColor ? `${metalInfo.name} ${colorOption.name}` : metalInfo.name;
  const tokenTicker = selectedColor ? `${metalInfo.symbol}${colorOption.code}` : metalInfo.symbol;
  const displayColor = selectedColor ? colorOption.hex : metalInfo.color;

  // Get filtered metals
  const getFilteredMetals = (): MetalType[] => {
    if (categoryFilter === 'all') {
      return Object.keys(METAL_INFO) as MetalType[];
    }
    return getMetalsByCategory(categoryFilter);
  };

  // Draw metal on canvas
  const drawMetal = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    const color = metalInfo.color;
    const colorDark = metalInfo.colorDark;
    
    // Clear canvas
    ctx.fillStyle = '#1a1a1a';
    ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    
    // Draw based on shape
    const centerX = CANVAS_SIZE / 2;
    const centerY = CANVAS_SIZE / 2;
    
    if (shape === 'bar' || shape === 'ingot') {
      // Draw gold bar shape - trapezoid
      ctx.fillStyle = color;
      ctx.fillRect(16, 45, 96, 55);
      ctx.fillRect(24, 35, 80, 10);
      ctx.fillRect(24, 100, 80, 10);
      
      // Top bevel
      ctx.fillStyle = colorDark;
      ctx.fillRect(24, 35, 80, 10);
      
      // Highlight
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.fillRect(20, 50, 35, 18);
      
      // Shadow
      ctx.fillStyle = 'rgba(0,0,0,0.25)';
      ctx.fillRect(75, 85, 35, 15);
      
      // Lines
      ctx.fillStyle = 'rgba(0,0,0,0.1)';
      ctx.fillRect(16, 65, 96, 2);
      ctx.fillRect(16, 80, 96, 2);
      
    } else if (shape === 'coin' || shape === 'round') {
      // Draw coin shape
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 50, 0, Math.PI * 2);
      ctx.fill();
      
      // Inner ring
      ctx.strokeStyle = colorDark;
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 38, 0, Math.PI * 2);
      ctx.stroke();
      
      // Inner circle
      ctx.strokeStyle = 'rgba(0,0,0,0.15)';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 28, 0, Math.PI * 2);
      ctx.stroke();
      
      // Highlight
      ctx.fillStyle = 'rgba(255,255,255,0.35)';
      ctx.beginPath();
      ctx.arc(centerX - 18, centerY - 18, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Symbol text
      ctx.fillStyle = 'rgba(0,0,0,0.2)';
      ctx.font = 'bold 16px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(metalInfo.symbol, centerX, centerY);
    }
    
    // Add finish effect
    if (finish === 'matte') {
      ctx.fillStyle = 'rgba(0,0,0,0.15)';
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
    } else if (finish === 'brushed') {
      for (let i = 0; i < CANVAS_SIZE; i += 3) {
        ctx.fillStyle = i % 6 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.02)';
        ctx.fillRect(0, i, CANVAS_SIZE, 1);
      }
    } else if (finish === 'antique') {
      ctx.fillStyle = 'rgba(100, 70, 40, 0.2)';
      ctx.fillRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);
      // Add some spots
      for (let i = 0; i < 20; i++) {
        ctx.fillStyle = 'rgba(60, 40, 20, 0.15)';
        ctx.beginPath();
        ctx.arc(
          Math.random() * CANVAS_SIZE,
          Math.random() * CANVAS_SIZE,
          Math.random() * 5 + 2,
          0,
          Math.PI * 2
        );
        ctx.fill();
      }
    }
  }, [selectedMetal, shape, finish, metalInfo]);

  useEffect(() => {
    drawMetal();
  }, [drawMetal, selectedMetal, shape, finish]);

  const handleNext = () => {
    if (step === 'metal') {
      setStep('customize');
    } else if (step === 'customize') {
      setStep('launch');
    }
  };

  const handleBack = () => {
    if (step === 'customize') {
      setStep('metal');
    } else if (step === 'launch') {
      setStep('customize');
    }
  };

  const handleLaunch = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    setIsLaunching(true);
    setError(null);
    
    try {
      drawMetal();
      const imageData = canvasToDataURL(canvas);
      
      const petId = uuid();
      
      const appearance: PetAppearance = {
        type: 'dog',
        bodyColor: metalInfo.color,
        eyeColor: '#000000',
        accessory: null,
        glasses: null,
        hat: null,
        background: 'none',
      };
      
      const personality: PetPersonality = {
        name: tokenName,
        temperament: 'friendly',
        lovesHumans: true,
        activityLevel: 100,
        favoriteFood: metalInfo.name,
        playful: true,
        noiseLevel: 0,
        quirks: [selectedMetal, purity, finish, shape],
        bio: tokenDescription || `${metalInfo.name} token backed by physical ${metalInfo.name.toLowerCase()} stored in ${VAULT_LOCATIONS.find(v => v.id === vaultLocation)?.name}`,
      };
      
      const pet: Pet = {
        id: petId,
        appearance,
        personality,
        stats: {
          hunger: parseFloat(purity),
          happiness: 100,
          energy: 100,
          bond: 100,
        },
        status: 'online',
        location: getRandomLocation(),
        imageData,
        createdAt: Date.now(),
        lastInteraction: Date.now(),
      };
      
      try {
        console.log('🚀 Starting metal token launch...');
        const tokenAddress = await launchToken(pet, canvas);
        pet.tokenAddress = tokenAddress;
        console.log('✅ Token launched:', tokenAddress);
      } catch (tokenError: any) {
        console.error('❌ Token launch failed:', tokenError);
        setError(`⚠️ Token launch failed: ${tokenError?.message}. Metal created without token.`);
      }
      
      setShowConfetti(true);
      await addPet(pet);
      
      setTimeout(() => {
        navigate(`/pet/${petId}`);
      }, 1500);
    } catch (err: any) {
      setError(err.message || 'Failed to create metal token');
      setIsLaunching(false);
    }
  };

  const filteredMetals = getFilteredMetals();

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
                backgroundColor: ['#D4AF37', '#C0C0C0', '#E5E4E2', '#B87333', '#CD7F32'][Math.floor(Math.random() * 5)]
              }}
            />
          ))}
        </div>
      )}

      <div className="container">
        <div className="page-header">
          <h1>CREATE METAL TOKEN</h1>
          <p>Select, customize, and tokenize your precious metal</p>
        </div>

        {/* Progress Steps */}
        <div className="progress-steps">
          <div className={`progress-step ${step === 'metal' ? 'active' : ''} ${step !== 'metal' ? 'completed' : ''}`}>
            <span className="step-number">1</span>
            <span className="step-label">Select Metal</span>
          </div>
          <div className={`progress-line ${step !== 'metal' ? 'active' : ''}`} />
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
          {step === 'metal' && (
            <div className="metal-step step-animate">
              <div className="metal-preview">
                <div className="preview-browser browser-window">
                  <div className="browser-header">
                    <div className="browser-dots">
                      <span className="browser-dot red"></span>
                      <span className="browser-dot yellow"></span>
                      <span className="browser-dot green"></span>
                    </div>
                    <div className="browser-url">preview://{metalInfo.symbol}</div>
                  </div>
                  <div className="browser-content preview-content">
                    <div className="preview-icon-wrapper">
                      {(() => {
                        const IconComponent = METAL_ICONS[selectedMetal];
                        return <IconComponent size={120} color={metalInfo.color} />;
                      })()}
                    </div>
                    <div className="preview-info">
                      <span className="preview-name" style={{ color: metalInfo.color }}>{metalInfo.name}</span>
                      <span className="preview-symbol">{metalInfo.symbol}</span>
                      <span className="preview-category">{metalInfo.category.replace('_', ' ')}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="metal-selector panel">
                <div className="panel-header">
                  <span>🪙 SELECT METAL TYPE</span>
                  <span className="metal-count">{filteredMetals.length} metals</span>
                </div>
                <div className="panel-content">
                  {/* Category Filter */}
                  <div className="category-tabs">
                    <button 
                      className={`category-tab ${categoryFilter === 'all' ? 'active' : ''}`}
                      onClick={() => setCategoryFilter('all')}
                    >
                      All
                    </button>
                    {METAL_CATEGORIES.map(cat => (
                      <button 
                        key={cat.id}
                        className={`category-tab ${categoryFilter === cat.id ? 'active' : ''}`}
                        onClick={() => setCategoryFilter(cat.id as CategoryFilter)}
                      >
                        <span>{cat.icon}</span>
                        <span>{cat.name}</span>
                      </button>
                    ))}
                  </div>

                  {/* Metal Grid */}
                  <div className="metal-grid">
                    {filteredMetals.map((metal) => {
                      const info = METAL_INFO[metal];
                      const IconComponent = METAL_ICONS[metal];
                      return (
                        <button
                          key={metal}
                          className={`metal-option ${selectedMetal === metal ? 'active' : ''}`}
                          onClick={() => setSelectedMetal(metal)}
                          style={{ '--metal-color': info.color } as React.CSSProperties}
                        >
                          <IconComponent size={32} color={info.color} />
                          <span className="metal-option-name">{info.name}</span>
                          <span className="metal-option-symbol">{info.symbol}</span>
                        </button>
                      );
                    })}
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
                    <div className="browser-url">preview://{tokenName || metalInfo.symbol}</div>
                  </div>
                  <div className="browser-content preview-content">
                    <div className="preview-icon-wrapper">
                      {(() => {
                        const IconComponent = METAL_ICONS[selectedMetal];
                        return <IconComponent size={120} color={displayColor} />;
                      })()}
                    </div>
                    <div className="preview-info">
                      <span className="preview-name" style={{ color: displayColor }}>{tokenName}</span>
                      <span className="preview-symbol" style={{ color: displayColor }}>${tokenTicker}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="customize-form panel">
                <div className="panel-header">
                  <span>⚙️ CUSTOMIZE</span>
                </div>
                <div className="panel-content">
                  {/* Color Selection */}
                  <div className="form-section">
                    <h3 className="form-section-title">Color Variant</h3>
                    <div className="form-group">
                      <div className="color-grid">
                        {COLOR_OPTIONS.map((c) => (
                          <button
                            key={c.id}
                            className={`color-btn ${selectedColor === c.id ? 'active' : ''}`}
                            onClick={() => setSelectedColor(c.id)}
                            style={{ 
                              '--btn-color': c.hex || metalInfo.color,
                              backgroundColor: c.hex || metalInfo.color 
                            } as React.CSSProperties}
                          >
                            <span className="color-name">{c.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="auto-token-info">
                      <div className="auto-token-row">
                        <span>Name:</span>
                        <strong style={{ color: displayColor }}>{tokenName}</strong>
                      </div>
                      <div className="auto-token-row">
                        <span>Ticker:</span>
                        <strong style={{ color: displayColor }}>${tokenTicker}</strong>
                      </div>
                    </div>
                  </div>

                  {/* Metal Properties */}
                  <div className="form-section">
                    <h3 className="form-section-title">Metal Properties</h3>
                    <div className="form-group">
                      <label className="form-label">Purity</label>
                      <div className="option-grid">
                        {(Object.keys(PURITY_INFO) as PurityLevel[]).map((p) => (
                          <button
                            key={p}
                            className={`option-btn ${purity === p ? 'active' : ''}`}
                            onClick={() => setPurity(p)}
                          >
                            {PURITY_INFO[p].name}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Shape</label>
                      <div className="option-grid">
                        {SHAPE_OPTIONS.map((s) => (
                          <button
                            key={s.id}
                            className={`option-btn ${shape === s.id ? 'active' : ''}`}
                            onClick={() => setShape(s.id)}
                          >
                            {s.name}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Finish</label>
                      <div className="option-grid">
                        {FINISH_OPTIONS.map((f) => (
                          <button
                            key={f.id}
                            className={`option-btn ${finish === f.id ? 'active' : ''}`}
                            onClick={() => setFinish(f.id)}
                          >
                            {f.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Vault Location */}
                  <div className="form-section">
                    <h3 className="form-section-title">Vault Location</h3>
                    <div className="form-group">
                      <div className="vault-grid">
                        {VAULT_LOCATIONS.map((v) => (
                          <button
                            key={v.id}
                            className={`vault-btn ${vaultLocation === v.id ? 'active' : ''}`}
                            onClick={() => setVaultLocation(v.id)}
                          >
                            <span className="vault-flag">{v.flag}</span>
                            <span className="vault-name">{v.name}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="form-section">
                    <h3 className="form-section-title">Description (Optional)</h3>
                    <div className="form-group">
                      <textarea
                        className="form-input"
                        placeholder="Describe your metal token..."
                        value={tokenDescription}
                        onChange={(e) => setTokenDescription(e.target.value)}
                        rows={3}
                      />
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
                      {(() => {
                        const IconComponent = METAL_ICONS[selectedMetal];
                        return <IconComponent size={160} color={displayColor} />;
                      })()}
                    </div>
                    {/* Hidden canvas for image generation */}
                    <canvas 
                      ref={canvasRef}
                      width={CANVAS_SIZE}
                      height={CANVAS_SIZE}
                      style={{ display: 'none' }}
                    />
                    <div className="launch-info">
                      <h2 className="launch-name" style={{ color: displayColor }}>{tokenName}</h2>
                      <p className="launch-bio">{tokenDescription || `${tokenName} token backed by physical ${metalInfo.name.toLowerCase()}`}</p>
                      
                      <div className="launch-traits">
                        <span className="tag tag-gold">${tokenTicker}</span>
                        <span className="tag tag-silver">{PURITY_INFO[purity].name}</span>
                        <span className="tag">{SHAPE_OPTIONS.find(s => s.id === shape)?.name}</span>
                        <span className="tag">{FINISH_OPTIONS.find(f => f.id === finish)?.name}</span>
                      </div>

                      <div className="launch-details">
                        <div className="detail-row">
                          <span>Token Name:</span>
                          <strong style={{ color: displayColor }}>{tokenName}</strong>
                        </div>
                        <div className="detail-row">
                          <span>Token Symbol:</span>
                          <strong style={{ color: displayColor }}>${tokenTicker}</strong>
                        </div>
                        <div className="detail-row">
                          <span>Metal Type:</span>
                          <strong>{metalInfo.name}</strong>
                        </div>
                        <div className="detail-row">
                          <span>Color:</span>
                          <strong style={{ color: displayColor }}>{colorOption.name}</strong>
                        </div>
                        <div className="detail-row">
                          <span>Purity:</span>
                          <strong>{PURITY_INFO[purity].name}</strong>
                        </div>
                        <div className="detail-row">
                          <span>Vault:</span>
                          <strong>{VAULT_LOCATIONS.find(v => v.id === vaultLocation)?.name}</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {error && (
                <div className="error-message">
                  {error}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="step-navigation">
          {step !== 'metal' && (
            <button className="btn btn-secondary" onClick={handleBack} disabled={isLaunching}>
              ← Back
            </button>
          )}
          
          <div className="nav-spacer" />

          {step !== 'launch' ? (
            <button 
              className="btn btn-accent" 
              onClick={handleNext}
            >
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
                <>
                  🪙 Launch Token
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
