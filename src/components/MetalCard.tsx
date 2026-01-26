import { Link } from 'react-router-dom';
import { Pet } from '../types/pet';
import { METAL_INFO, MetalType } from '../types/project';
import './MetalCard.css';

interface MetalCardProps {
  metal: Pet;
}

const getMetalTypeFromPet = (pet: Pet): MetalType => {
  const colorMap: Record<string, MetalType> = {
    '#D4AF37': 'gold',
    '#C0C0C0': 'silver',
    '#E5E4E2': 'platinum',
    '#B87333': 'copper',
    '#CD7F32': 'bronze',
    '#CED0CE': 'palladium',
  };
  return colorMap[pet.appearance?.bodyColor] || 'gold';
};

export default function MetalCard({ metal }: MetalCardProps) {
  const metalType = getMetalTypeFromPet(metal);
  const metalInfo = METAL_INFO[metalType];

  return (
    <Link to={`/pet/${metal.id}`} className="metal-card">
      <div className="metal-card-header" style={{ borderColor: metalInfo.color }}>
        <span className="metal-symbol" style={{ color: metalInfo.color }}>{metalInfo.symbol}</span>
        <span className={`status-dot ${metal.status || 'active'}`}></span>
      </div>
      
      <div className="metal-card-image">
        <img src={metal.imageData} alt={metal.personality.name} />
      </div>
      
      <div className="metal-card-content">
        <h3 className="metal-card-name">{metal.personality.name}</h3>
        <p className="metal-card-type" style={{ color: metalInfo.color }}>{metalInfo.name}</p>
        
        <div className="metal-card-stats">
          <div className="metal-stat">
            <span className="metal-stat-label">Price</span>
            <span className="metal-stat-value">{metalInfo.pricePerOz}</span>
          </div>
          <div className="metal-stat">
            <span className="metal-stat-label">Purity</span>
            <span className="metal-stat-value">{metal.stats?.hunger || 99.9}%</span>
          </div>
        </div>
        
        {metal.tokenAddress && (
          <div className="metal-card-token">
            <span className="token-badge">TOKENIZED</span>
          </div>
        )}
      </div>
    </Link>
  );
}

