import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: false 
    });
  };

  const formatDay = (date: Date) => {
    return date.toLocaleDateString('en-US', { 
      weekday: 'short'
    }).toUpperCase();
  };

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            PROJECT METALS
          </Link>

          <nav className="nav-tabs">
            <Link 
              to="/" 
              className={`nav-tab ${isActive('/') ? 'active' : ''}`}
            >
              GALLERY
            </Link>
            <Link 
              to="/create" 
              className={`nav-tab ${isActive('/create') ? 'active' : ''}`}
            >
              CREATE
            </Link>
            <Link 
              to="/how-it-works" 
              className={`nav-tab ${isActive('/how-it-works') ? 'active' : ''}`}
            >
              DOCS
            </Link>
          </nav>

          <div className="header-right">
            <div className="live-badge">
              LIVE
            </div>
            <a 
              href="https://x.com/projectmetals" 
              target="_blank" 
              rel="noopener noreferrer"
              className="x-button"
            >
              X
            </a>
            <div className="header-time">
              <span className="time">{formatTime(time)}</span>
              <span className="day">{formatDay(time)}</span>
            </div>
          </div>
        </div>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span className="footer-logo">PROJECT METALS</span>
          <span className="footer-divider">|</span>
          <span className="footer-text">Tokenize Precious Metals on Solana</span>
        </div>
      </footer>
    </div>
  );
}
