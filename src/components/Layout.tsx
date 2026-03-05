import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <div className="layout">
      <header className="header">
        <div className="header-content">
          <Link to="/" className="logo">
            tism
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
              to="/about" 
              className={`nav-tab ${isActive('/about') ? 'active' : ''}`}
            >
              ABOUT
            </Link>
          </nav>

          <div className="header-right">
            <a 
              href="https://x.com/tismthepuzzle" 
              target="_blank" 
              rel="noopener noreferrer"
              className="x-button"
            >
              X
            </a>
          </div>
        </div>
      </header>

      <main className="main">
        {children}
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span className="footer-logo">tism</span>
          <span className="footer-divider">|</span>
          <span className="footer-text">Tokenize Friends on Solana</span>
          <span className="footer-divider">|</span>
          <a
            href="https://pump.fun/GWXvtRy1HeyLbaU2M43c5iWRb4wirzqrwnUbP7GQpump"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-ca"
          >
            CA: GWXvtRy1...GQpump
          </a>
          <span className="footer-divider">|</span>
          <a
            href="https://x.com/tismthepuzzle"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-x-link"
          >
            @tismthepuzzle
          </a>
        </div>
      </footer>
    </div>
  );
}
