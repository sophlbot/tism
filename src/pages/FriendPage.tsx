import { useParams, Link } from 'react-router-dom';
import { usePets } from '../context/PetsContext';
import { FRIENDS } from '../data/friends';
import PumpFunLogo from '../components/PumpFunLogo';
import './FriendPage.css';

export default function FriendPage() {
  const { id } = useParams<{ id: string }>();
  const { pets } = usePets();

  const friend = FRIENDS.find(f => f.id === id);
  const tokenizedPet = pets.find(p => p.friendId === id);

  if (!friend) {
    return (
      <div className="page friend-page">
        <div className="container">
          <div className="friend-not-found">
            <h2>Friend not found</h2>
            <p>This puzzle piece hasn't been discovered yet.</p>
            <Link to="/" className="btn btn-accent">Back to Friends</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page friend-page">
      <div className="container">
        <Link to="/" className="back-link">← back to friends</Link>

        <div className="friend-detail">
          <div className="friend-detail-left">
            <div className="friend-detail-browser browser-window">
              <div className="browser-header">
                <div className="browser-dots">
                  <span className="browser-dot red"></span>
                  <span className="browser-dot yellow"></span>
                  <span className="browser-dot green"></span>
                </div>
                <div className="browser-url">tism.app/friend/{friend.id}</div>
              </div>
              <div className="browser-content friend-detail-image-wrap">
                <img
                  src={friend.image}
                  alt={friend.name}
                  className="friend-detail-img"
                />
              </div>
            </div>
          </div>

          <div className="friend-detail-right">
            <h1 className="friend-detail-name" style={{ color: friend.color }}>
              {friend.name}
            </h1>
            <p className="friend-detail-lore">{friend.lore}</p>
            <div className="friend-detail-traits">
              {friend.traits.map((trait) => (
                <span key={trait} className="friend-trait-tag">{trait}</span>
              ))}
            </div>

            {tokenizedPet ? (
              <div className="friend-token-status tokenized">
                <div className="token-status-header">
                  <span className="token-badge-big">TOKEN CREATED</span>
                </div>
                <div className="token-status-details">
                  <div className="token-status-row">
                    <span>Token Name</span>
                    <strong>{tokenizedPet.personality.name}</strong>
                  </div>
                  {tokenizedPet.tokenAddress && (
                    <div className="token-status-row">
                      <span>Address</span>
                      <code className="token-addr">{tokenizedPet.tokenAddress}</code>
                    </div>
                  )}
                </div>
                {tokenizedPet.tokenAddress && (
                  <a
                    href={`https://pump.fun/${tokenizedPet.tokenAddress}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold btn-pump"
                  >
                    <PumpFunLogo size={18} /> View on Pump.fun
                  </a>
                )}
              </div>
            ) : (
              <div className="friend-token-status available">
                <div className="token-status-header">
                  <span className="token-badge-available">AVAILABLE</span>
                  <p className="token-status-hint">This friend hasn't been tokenized yet</p>
                </div>
                <Link to="/create" className="btn btn-accent btn-create-link">
                  Tokenize {friend.name}
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
