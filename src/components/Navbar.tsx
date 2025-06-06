import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, User, Heart, Terminal, Music } from 'lucide-react';
import '../styles/navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [time, setTime] = useState(new Date());
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
  
    return () => clearInterval(timer);
  }, []);
  
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <Heart className="navbar-logo" size={16} />
          <span className="heading-text">Agahnim</span>
        </div>
        
        <button 
          className="navbar-toggle" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <div className="toggle-icon">
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
            <span className="toggle-line"></span>
          </div>
        </button>
        
        <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link 
              to="/home" 
              className={`navbar-link ${isActive('/home') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <Home size={14} />
              <span>Home</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/about" 
              className={`navbar-link ${isActive('/about') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <User size={14} />
              <span>About Me</span>
            </Link>
          </li>
          <li className="nav-item">
            <Link 
              to="/dev" 
              className={`navbar-link ${isActive('/dev') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <Terminal size={14} />
              <span>Projects</span>
            </Link>
          </li>
          {/*<li className="nav-item">
            <Link 
              to="/shrines" 
              className={`navbar-link ${isActive('/shrines') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <FlameKindling size={14} />
              <span>Shrines</span>
            </Link>
          </li>*/}          
          <li className="nav-item">
            <Link 
              to="/music" 
              className={`navbar-link ${isActive('/music') ? 'active' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              <Music size={14} />
              <span>Music</span>
            </Link>
          </li>
        </ul>
      </div>
      
      <div className="status-bar">
        <div className="status-item">
          <div className="status-dot"></div>
          <span>Online</span>
        </div>
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </nav>
  );
}
