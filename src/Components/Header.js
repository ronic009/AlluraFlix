import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="container">
      <nav>
      {/* ... */}
    </nav>
      </div>
      <nav className="nav-container">
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/new-video">NUEVO VIDEO</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
