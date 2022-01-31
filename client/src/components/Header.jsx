import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './styles/Header.scss';

function Header() {
  const [isVisible, setIsVisible] = useState(false);

  const hamburgerToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <header id="nav-wrapper">
      <nav id="nav">
        <div className="nav left">
          <span className="gradient skew">
            <h1 className="logo un-skew">
              <Link to="/">Happy Meat Ball</Link>
            </h1>
          </span>
          <button onClick={hamburgerToggle} id="menu" className="btn-nav">
            <span className="fas fa-bars"></span>
          </button>
        </div>
        <div className={`nav right ${isVisible ? 'display-none' : ''}`}>
          <Link to="/" className="nav-link active">
            <span className="nav-link-span">
              <span className="u-nav">Home</span>
            </span>
          </Link>
          <Link to="/Recipe" className="nav-link">
            <span className="nav-link-span">
              <span className="u-nav">About</span>
            </span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
