import { Link } from 'react-router-dom';
import { usePets } from '../context/PetsContext';
import { FRIENDS } from '../data/friends';
import './Home.css';

export default function Home() {
  const { pets } = usePets();

  const tokenizedFriendIds = new Set(
    pets.filter(p => p.friendId).map(p => p.friendId!)
  );

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
              <div className="browser-url">https://tism.app</div>
            </div>
            <div className="browser-content hero-content">
              <div className="hero-mascot">
                <img src="/tism.png" alt="tism" className="hero-mascot-img" />
              </div>
              <h1 className="hero-title">
                TOKENIZE
                <br />
                <span className="hero-highlight">FRIENDS FOR TISM</span>
              </h1>
              <p className="hero-subtitle">
                tism is a lonely puzzle piece looking for friends. 
                Create unique friend tokens on Solana and help tism 
                find where he belongs.
              </p>
              <div className="hero-actions">
                <Link to="/create" className="btn btn-accent">
                  Create a Friend
                </Link>
                <Link to="/about" className="btn btn-secondary">
                  Who is tism?
                </Link>
              </div>
              <div className="hero-ca">
                <a
                  href="https://pump.fun/24v41oTQ4pnzNLrjSqjnr9eG5XfZLn9VjCSvxpLfpump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ca-link"
                >
                  CA: 24v41oTQ4pnzNLrjSqjnr9eG5XfZLn9VjCSvxpLfpump
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="features">
          <div className="feature">
            <div className="feature-number">01</div>
            <h3>Pick a Friend</h3>
            <p>Choose one of tism's friends — each has a unique personality and story</p>
          </div>
          <div className="feature">
            <div className="feature-number">02</div>
            <h3>Customize</h3>
            <p>Give the friend a token name, ticker and description. Make it yours</p>
          </div>
          <div className="feature">
            <div className="feature-number">03</div>
            <h3>Deploy on Solana</h3>
            <p>Launch the friend token on Pump.fun. Once tokenized, the friend is taken</p>
          </div>
        </section>

        {/* Friends Showcase */}
        <section className="friends-showcase">
          <div className="section-header">
            <h2>TISM'S FRIENDS</h2>
            <span className="friends-count">{FRIENDS.length} friends</span>
          </div>
          
          <div className="friends-grid">
            {FRIENDS.map((friend) => {
              const isTokenized = tokenizedFriendIds.has(friend.id);
              return (
                <Link key={friend.id} to={`/friend/${friend.id}`} className={`friend-card ${isTokenized ? 'friend-card-tokenized' : ''}`}>
                  <div className="friend-image">
                    <img src={friend.image} alt={friend.name} />
                    {isTokenized && (
                      <div className="friend-tokenized-badge">TOKENIZED</div>
                    )}
                  </div>
                  <div className="friend-info">
                    <span className="friend-name">{friend.name}</span>
                    <p className="friend-lore">{friend.lore}</p>
                    <div className="friend-traits">
                      {friend.traits.map((trait) => (
                        <span key={trait} className="friend-trait">{trait}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
