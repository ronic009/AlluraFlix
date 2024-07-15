import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => (
  <header>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/nuevo-video">Nuevo Video</Link></li>
        {/* Añade otros enlaces aquí si es necesario */}
      </ul>
    </nav>
  </header>
);

export default Header;
